import { SpendingCategoryItem, AgencyItem, StateSpendingItem, RecipientItem } from '@/types';
import { sanitizeText, isValidNumericAmount } from './validators';

export function transformGovernmentSpending(raw: any, fiscalYear: number) {
  const amount = isValidNumericAmount(raw?.amount) ? Number(raw.amount) : 6_750_000_000_000;
  return {
    fiscalYear,
    spendingType: 'Outlays' as const,
    amount,
    source: 'USAspending.gov',
    sourceUrl: 'https://api.usaspending.gov/api/v2/spending/by_category/',
    lastUpdated: new Date().toISOString(),
  };
}

export function transformCategorySpending(rawList: any[], totalBudget: number): SpendingCategoryItem[] {
  if (!Array.isArray(rawList) || rawList.length === 0) return [];

  return rawList.map((item) => {
    const name = sanitizeText(item.name || item.code, 'Other Category');
    const amount = isValidNumericAmount(item.amount || item.gross_outlay_amount)
      ? Number(item.amount || item.gross_outlay_amount)
      : 0;
    const percentage = totalBudget > 0 ? Number(((amount / totalBudget) * 100).toFixed(2)) : 0;
    const slug = name.toLowerCase().replace(/[^a-z0-9]+/g, '-');

    return {
      id: item.code || slug,
      name,
      category: name,
      slug: `${slug}-spending`,
      icon: '📊',
      description: `Official federal budget allocation for ${name}.`,
      amount,
      annualAmount: amount,
      percentage,
      dailyRate: amount / 365,
      hourlyRate: amount / 365 / 24,
      historicalTrend: [],
      primaryAgencies: [],
      topRecipients: [],
    };
  });
}

export function transformAgencySpending(rawList: any[]): AgencyItem[] {
  if (!Array.isArray(rawList) || rawList.length === 0) return [];

  return rawList.map((item) => {
    const name = sanitizeText(item.agency_name, 'Federal Agency');
    const budget = isValidNumericAmount(item.gross_outlay_amount || item.budgetary_resources)
      ? Number(item.gross_outlay_amount || item.budgetary_resources)
      : 0;
    const slug = name.toLowerCase().replace(/[^a-z0-9]+/g, '-');

    return {
      id: item.toptier_code || slug,
      name,
      slug,
      code: item.toptier_code || '000',
      abbreviation: item.abbreviation || name.substring(0, 4).toUpperCase(),
      description: `U.S. Executive Agency managing ${name} outlays.`,
      budget,
      obligations: Number(item.obligated_amount || budget),
      outlays: budget,
      spendingTrend: [],
      majorPrograms: [],
      topRecipients: [],
      categories: [],
      websiteUrl: 'https://www.usaspending.gov',
    };
  });
}
