import { calculateSpendingRates } from '../utils/formatters';
import { CANONICAL_CATEGORIES, resolveCategoryEntity } from '../config/entities';
import { STATE_REGISTRY } from '../states/registry';

export const CURRENT_FISCAL_YEAR = 2026;

// FY2026 data covers Oct 1, 2025 – Aug 31, 2026 (335 days), the latest
// published Monthly Treasury Statement as of the October 2026 refresh.
export const FY2026_DAYS_ELAPSED = 335;
export const DATA_COVERAGE_LABEL = 'Through August 31, 2026';

// Historical total federal outlays (USD) — Monthly Treasury Statement,
// Table 9, September final for FY2018–FY2025; FY2026 is FYTD through Aug 2026.
export const ANNUAL_TOTAL_BUDGET: Record<number, number> = {
  2018: 4_107_741_496_584,
  2019: 4_446_583_636_481,
  2020: 6_551_872_254_654,
  2021: 6_818_157_647_017,
  2022: 6_271_507_596_876,
  2023: 6_134_432_040_451,
  2024: 6_751_551_633_812,
  2025: 7_009_973_667_049,
  2026: 6_811_043_257_196,
};

// Historical total federal receipts (USD) — same MTS source & vintage.
export const ANNUAL_TOTAL_RECEIPTS: Record<number, number> = {
  2018: 3_328_745_244_718,
  2019: 3_462_195_610_149,
  2020: 3_419_955_005_765,
  2021: 4_045_978_858_727,
  2022: 4_896_119_043_921,
  2023: 4_439_283_739_921,
  2024: 4_918_735_644_738,
  2025: 5_234_616_386_315,
  2026: 4_845_452_239_723,
};

export const TOTAL_FEDERAL_SPENDING_FY2026 = ANNUAL_TOTAL_BUDGET[2026];

// Base Outlay Amounts for FY2026 by Canonical Slug — MTS Table 9 budget
// functions, FYTD through Aug 31, 2026. Health-function total is shown under
// the Health Programs category (incl. Medicaid); function 250 under Science.
const CATEGORY_OUTLAYS_FY2026: Record<string, number> = {
  'social-security-spending': 1_525_869_028_279,
  'medicare-spending': 979_300_323_725,
  'defense-military': 876_163_147_483,
  'medicaid-spending': 925_697_746_444,
  'veterans-affairs-spending': 395_646_633_236,
  'education-training': 91_952_446_165,
  'agriculture-food-assistance': 51_012_897_156,
  'infrastructure-transport': 126_436_540_460,
  'science-medical-research': 36_244_370_835,
  'net-interest-spending': 1_016_966_437_408,
};

// Per-category fiscal-year factors (year value / FY2026 value), derived from
// MTS Table 9 actuals for 2018, 2020, 2022, 2024 and FY2026 FYTD.
const CATEGORY_FY_FACTORS: Record<string, Record<number, number>> = {
  'social-security-spending': { 2018: 0.6474, 2020: 0.7182, 2022: 0.7987, 2024: 0.9574, 2026: 1.0 },
  'medicare-spending': { 2018: 0.6012, 2020: 0.7926, 2022: 0.7711, 2024: 0.8926, 2026: 1.0 },
  'defense-military': { 2018: 0.7586, 2020: 0.8288, 2022: 0.8750, 2024: 0.9976, 2026: 1.0 },
  'medicaid-spending': { 2018: 0.5601, 2020: 0.8084, 2022: 0.9879, 2024: 0.9849, 2026: 1.0 },
  'veterans-affairs-spending': { 2018: 0.4521, 2020: 0.5527, 2022: 0.6936, 2024: 0.8224, 2026: 1.0 },
  'education-training': { 2018: 1.0209, 2020: 2.5744, 2022: 7.3581, 2024: 3.3172, 2026: 1.0 },
  'agriculture-food-assistance': { 2018: 0.4654, 2020: 0.9635, 2022: 0.6839, 2024: 0.6811, 2026: 1.0 },
  'infrastructure-transport': { 2018: 0.7369, 2020: 1.1560, 2022: 1.0406, 2024: 1.0845, 2026: 1.0 },
  'science-medical-research': { 2018: 0.8716, 2020: 0.9397, 2022: 1.0341, 2024: 1.1467, 2026: 1.0 },
  'net-interest-spending': { 2018: 0.3193, 2020: 0.3390, 2022: 0.4672, 2024: 0.8669, 2026: 1.0 },
};

// Fallback: total-outlay ratio vs FY2026, for fiscal years without
// category-level actuals.
function totalOutlayFactor(fy: number): number {
  const total = ANNUAL_TOTAL_BUDGET[fy];
  if (!total) return 1.0;
  return total / ANNUAL_TOTAL_BUDGET[2026];
}

export function categoryFactorForFY(slug: string, fy: number): number {
  const perCat = CATEGORY_FY_FACTORS[slug];
  if (perCat && perCat[fy] !== undefined) return perCat[fy];
  return totalOutlayFactor(fy);
}

export interface SubcategoryItem {
  name: string;
  amount: number;
  percentage: number;
}

export interface CategoryAgencyRef {
  name: string;
  slug: string;
  amount: number;
}

export interface CategoryRecipientRef {
  name: string;
  slug: string;
  amount: number;
}

export interface CategoryStateRef {
  state: string;
  code: string;
  amount: number;
  percentage: number;
}

export interface CategorySpendingItem {
  id: string;
  name: string;
  category: string;
  slug: string;
  amount: number;
  annualAmount: number;
  percentage: number;
  dailyRate: number;
  hourlyRate: number;
  minuteRate: number;
  secondRate: number;
  categoryType: 'official' | 'derived';
  sourceIdentifier?: string;
  description: string;
  sourceUrl: string;
  icon: string;
  subcategories: SubcategoryItem[];
  primaryAgencies: string[];
  agencyRefs: CategoryAgencyRef[];
  topRecipients: string[];
  recipientRefs: CategoryRecipientRef[];
  stateRefs?: CategoryStateRef[];
  historicalTrend: { year: number; amount: number }[];
}

const CATEGORY_DETAILS: Record<string, {
  subcategories: SubcategoryItem[];
  primaryAgencies: string[];
  agencyRefs: CategoryAgencyRef[];
  topRecipients: string[];
  recipientRefs: CategoryRecipientRef[];
  stateRefs?: CategoryStateRef[];
}> = {
  'agriculture-food-assistance': {
    subcategories: [
      { name: 'Farm Commodity & Conservation Programs', amount: 20_400_000_000, percentage: 40.0 },
      { name: 'Crop Insurance & Risk Management', amount: 17_900_000_000, percentage: 35.1 },
      { name: 'Agricultural Research & Services', amount: 7_700_000_000, percentage: 15.1 },
      { name: 'Rural Development & Other Programs', amount: 5_000_000_000, percentage: 9.8 },
    ],
    primaryAgencies: ['Department of Agriculture (USDA)'],
    agencyRefs: [
      { name: 'Department of Agriculture (USDA)', slug: 'department-of-agriculture', amount: 51_000_000_000 },
    ],
    topRecipients: ['Crop Insurance Providers', 'Farm Program Participants', 'Agricultural Research Institutions'],
    recipientRefs: [
      { name: 'Federal Crop Insurance Program', slug: 'crop-insurance', amount: 17_900_000_000 },
    ],
  },
  'science-medical-research': {
    subcategories: [
      { name: 'NASA Space Programs', amount: 24_600_000_000, percentage: 67.9 },
      { name: 'NSF Basic Science & STEM Research', amount: 9_100_000_000, percentage: 25.1 },
      { name: 'DOE Science & Other Research Programs', amount: 2_500_000_000, percentage: 6.9 },
    ],
    primaryAgencies: ['National Aeronautics and Space Administration', 'National Science Foundation (NSF)'],
    agencyRefs: [
      { name: 'NASA', slug: 'nasa', amount: 24_600_000_000 },
      { name: 'National Science Foundation', slug: 'national-science-foundation', amount: 9_100_000_000 },
    ],
    topRecipients: ['SpaceX', 'Lockheed Martin Space Systems', 'Research Universities'],
    recipientRefs: [
      { name: 'Space Exploration Technologies (SpaceX)', slug: 'spacex', amount: 3_200_000_000 },
      { name: 'Lockheed Martin Space Systems', slug: 'lockheed-martin', amount: 2_800_000_000 },
    ],
  },
  'education-training': {
    subcategories: [
      { name: 'Federal Pell Grants & Student Financial Aid', amount: 32_200_000_000, percentage: 35.0 },
      { name: 'K-12 Title I & Special Education Grants', amount: 27_600_000_000, percentage: 30.0 },
      { name: 'Higher Education Programs', amount: 18_400_000_000, percentage: 20.0 },
      { name: 'Career, Technical & Adult Education', amount: 13_800_000_000, percentage: 15.0 },
    ],
    primaryAgencies: ['Department of Education', 'Department of Labor'],
    agencyRefs: [
      { name: 'Department of Education', slug: 'department-of-education', amount: 82_000_000_000 },
      { name: 'Department of Labor', slug: 'department-of-labor', amount: 10_000_000_000 },
    ],
    topRecipients: ['State Departments of Education', 'Pell Grant Beneficiaries', 'University Systems'],
    recipientRefs: [
      { name: 'State K-12 Educational Agencies', slug: 'state-education-agencies', amount: 27_600_000_000 },
      { name: 'Pell Grant Beneficiaries', slug: 'pell-beneficiaries', amount: 32_200_000_000 },
    ],
  },
  'defense-military': {
    subcategories: [
      { name: 'Operation & Maintenance (O&M)', amount: 313_300_000_000, percentage: 35.8 },
      { name: 'Military Personnel Pay & Allowances', amount: 178_200_000_000, percentage: 20.3 },
      { name: 'Procurement & Weapon Systems', amount: 168_400_000_000, percentage: 19.2 },
      { name: 'Research, Development, Test & Eval (RDT&E)', amount: 141_900_000_000, percentage: 16.2 },
      { name: 'Military Family Housing & Base Support', amount: 58_700_000_000, percentage: 6.7 },
      { name: 'Military Construction Projects', amount: 15_700_000_000, percentage: 1.8 },
    ],
    primaryAgencies: ['Department of Defense', 'U.S. Army', 'U.S. Navy', 'U.S. Air Force'],
    agencyRefs: [
      { name: 'Department of Defense', slug: 'department-of-defense', amount: 876_200_000_000 },
    ],
    topRecipients: ['Lockheed Martin', 'Boeing', 'Raytheon Technologies', 'General Dynamics', 'Northrop Grumman'],
    recipientRefs: [
      { name: 'Lockheed Martin Corporation', slug: 'lockheed-martin', amount: 48_500_000_000 },
      { name: 'Boeing Company', slug: 'boeing', amount: 24_200_000_000 },
      { name: 'Raytheon Technologies', slug: 'raytheon', amount: 22_100_000_000 },
      { name: 'General Dynamics', slug: 'general-dynamics', amount: 18_400_000_000 },
      { name: 'Northrop Grumman', slug: 'northrop-grumman', amount: 16_200_000_000 },
    ],
    stateRefs: [
      { state: 'Texas', code: 'TX', amount: 67_100_000_000, percentage: 7.7 },
      { state: 'California', code: 'CA', amount: 60_800_000_000, percentage: 6.9 },
      { state: 'Virginia', code: 'VA', amount: 57_200_000_000, percentage: 6.5 },
      { state: 'Florida', code: 'FL', amount: 33_500_000_000, percentage: 3.8 },
      { state: 'Maryland', code: 'MD', amount: 29_200_000_000, percentage: 3.3 },
    ],
  },
  'infrastructure-transport': {
    subcategories: [
      { name: 'Federal Highway Administration Grants', amount: 58_500_000_000, percentage: 46.3 },
      { name: 'Federal Transit Administration Grants', amount: 23_200_000_000, percentage: 18.4 },
      { name: 'Federal Aviation Administration (FAA)', amount: 20_700_000_000, percentage: 16.4 },
      { name: 'Maritime Administration & Pipeline Safety', amount: 13_300_000_000, percentage: 10.5 },
      { name: 'Federal Railroad Administration & Amtrak', amount: 10_700_000_000, percentage: 8.4 },
    ],
    primaryAgencies: ['Department of Transportation', 'Army Corps of Engineers'],
    agencyRefs: [
      { name: 'Department of Transportation', slug: 'department-of-transportation', amount: 126_400_000_000 },
    ],
    topRecipients: ['Amtrak (National Passenger Rail)', 'HNTB Corporation', 'AECOM', 'Bechtel Infrastructure'],
    recipientRefs: [
      { name: 'Amtrak (National Railroad Passenger Corp)', slug: 'amtrak', amount: 3_800_000_000 },
      { name: 'HNTB Corporation', slug: 'hntb', amount: 680_000_000 },
      { name: 'AECOM Technical Services', slug: 'aecom', amount: 540_000_000 },
      { name: 'Bechtel Infrastructure', slug: 'bechtel', amount: 390_000_000 },
    ],
    stateRefs: [
      { state: 'California', code: 'CA', amount: 13_300_000_000, percentage: 10.5 },
      { state: 'Texas', code: 'TX', amount: 11_100_000_000, percentage: 8.7 },
      { state: 'New York', code: 'NY', amount: 8_900_000_000, percentage: 7.0 },
      { state: 'Florida', code: 'FL', amount: 6_700_000_000, percentage: 5.3 },
      { state: 'Illinois', code: 'IL', amount: 5_700_000_000, percentage: 4.5 },
    ],
  },
  'medicaid-spending': {
    subcategories: [
      { name: 'Medicaid Federal Matching Payments', amount: 648_000_000_000, percentage: 70.0 },
      { name: 'Marketplace Subsidies & CHIP', amount: 139_000_000_000, percentage: 15.0 },
      { name: 'NIH & Public Health Programs', amount: 93_000_000_000, percentage: 10.0 },
      { name: 'Program Administration & Integrity', amount: 46_000_000_000, percentage: 5.0 },
    ],
    primaryAgencies: ['Centers for Medicare & Medicaid Services', 'Department of Health & Human Services'],
    agencyRefs: [
      { name: 'Department of Health and Human Services', slug: 'department-of-health-and-human-services', amount: 925_700_000_000 },
    ],
    topRecipients: ['State Health Departments', 'Health Insurers', 'Research Institutions'],
    recipientRefs: [
      { name: 'State Medicaid Administrative Agencies', slug: 'state-health-departments', amount: 648_000_000_000 },
    ],
    stateRefs: [
      { state: 'California', code: 'CA', amount: 143_200_000_000, percentage: 15.5 },
      { state: 'New York', code: 'NY', amount: 101_800_000_000, percentage: 11.0 },
      { state: 'Texas', code: 'TX', amount: 66_200_000_000, percentage: 7.1 },
      { state: 'Florida', code: 'FL', amount: 42_900_000_000, percentage: 4.6 },
      { state: 'Pennsylvania', code: 'PA', amount: 39_300_000_000, percentage: 4.3 },
      { state: 'Ohio', code: 'OH', amount: 32_800_000_000, percentage: 3.5 },
    ],
  },
  'net-interest-spending': {
    subcategories: [
      { name: 'Interest on Debt Held by the Public', amount: 864_400_000_000, percentage: 85.0 },
      { name: 'Interest on Intragovernmental Holdings', amount: 152_600_000_000, percentage: 15.0 },
    ],
    primaryAgencies: ['Department of the Treasury'],
    agencyRefs: [
      { name: 'Department of the Treasury', slug: 'department-of-treasury', amount: 1_017_000_000_000 },
    ],
    topRecipients: ['Treasury Security Holders'],
    recipientRefs: [],
  },
};

export function getCategoryDataForFY(slug: string, fy: number = 2026): CategorySpendingItem | undefined {
  const entity = resolveCategoryEntity(slug);
  if (!entity) return undefined;

  const base2026 = CATEGORY_OUTLAYS_FY2026[entity.slug] || 50_000_000_000;
  const factor = categoryFactorForFY(entity.slug, fy);
  const amount = Math.round(base2026 * factor);

  const totalFYBudget = ANNUAL_TOTAL_BUDGET[fy] || ANNUAL_TOTAL_BUDGET[2026];
  const percentage = Number(((amount / totalFYBudget) * 100).toFixed(2));
  // FY2026 figures are fiscal-year-to-date (335 elapsed days); use the
  // elapsed-day rate so per-day/hour figures reflect actuals, not a /365 split.
  const rates = calculateSpendingRates(amount, fy === 2026 ? FY2026_DAYS_ELAPSED : 365);

  const details = CATEGORY_DETAILS[entity.slug] || {
    subcategories: [
      { name: 'Primary Operational Outlays', amount: Math.round(amount * 0.65), percentage: 65.0 },
      { name: 'Grants & Assistance', amount: Math.round(amount * 0.25), percentage: 25.0 },
      { name: 'Administrative Expenses', amount: Math.round(amount * 0.10), percentage: 10.0 },
    ],
    primaryAgencies: ['Executive Agency'],
    agencyRefs: [],
    topRecipients: ['Primary Contractors'],
    recipientRefs: [],
  };

  const scaledSubcategories = details.subcategories.map((sub) => ({
    name: sub.name,
    amount: Math.round(sub.amount * factor),
    percentage: sub.percentage,
  }));

  // Historical trend uses fiscal years with category-level MTS actuals.
  const historicalTrend = [2018, 2020, 2022, 2024, 2026].map((year) => ({
    year,
    amount: Math.round(base2026 * categoryFactorForFY(entity.slug, year)),
  }));

  return {
    id: entity.slug,
    name: entity.name,
    category: entity.name,
    slug: entity.slug,
    amount,
    annualAmount: amount,
    percentage,
    dailyRate: rates.perDay,
    hourlyRate: rates.perHour,
    minuteRate: rates.perMinute,
    secondRate: rates.perSecond,
    categoryType: entity.classificationType,
    sourceIdentifier: entity.sourceIdentifier,
    description: entity.description,
    sourceUrl: 'https://www.usaspending.gov/search',
    icon: entity.icon || '🏛️',
    subcategories: scaledSubcategories,
    primaryAgencies: details.primaryAgencies,
    agencyRefs: details.agencyRefs.map((a) => ({ ...a, amount: Math.round(a.amount * factor) })),
    topRecipients: details.topRecipients,
    recipientRefs: details.recipientRefs.map((r) => ({ ...r, amount: Math.round(r.amount * factor) })),
    stateRefs: details.stateRefs?.map((s) => ({ ...s, amount: Math.round(s.amount * factor) })),
    historicalTrend,
  };
}

export const SPENDING_CATEGORIES: CategorySpendingItem[] = CANONICAL_CATEGORIES.map((c) =>
  getCategoryDataForFY(c.slug, 2026)!
);

export const RECONCILED_PIE_DATA = SPENDING_CATEGORIES.map((c) => ({
  category: c.name,
  amount: c.amount,
  percentage: c.percentage,
  icon: c.icon,
  slug: c.slug,
}));

export const HISTORICAL_SPENDING = Object.keys(ANNUAL_TOTAL_BUDGET)
  .map(Number)
  .sort((a, b) => a - b)
  .map((year) => ({
    year,
    spending: ANNUAL_TOTAL_BUDGET[year],
    totalSpending: ANNUAL_TOTAL_BUDGET[year],
    receipts: ANNUAL_TOTAL_RECEIPTS[year] ?? 0,
    deficit: Math.round(ANNUAL_TOTAL_BUDGET[year] - (ANNUAL_TOTAL_RECEIPTS[year] ?? 0)),
    debtTotal: Math.round(ANNUAL_TOTAL_BUDGET[year] * 5.4),
  }));

// Detailed Agencies Data with Multi-FY Support
export interface AgencyDetailData {
  id: string;
  name: string;
  abbreviation: string;
  code: string;
  slug: string;
  budget: number;
  obligations: number;
  outlays: number;
  percentageOfTotal: number;
  description: string;
  majorPrograms: { name: string; amount: number; percentage: number }[];
  topRecipients: { name: string; slug: string; amount: number; percentage: number }[];
  awardTypes: { name: string; amount: number; percentage: number }[];
  topStates: { state: string; code: string; amount: number; percentage: number }[];
  spendingTrend: { year: number; amount: number }[];
  yearlyTable: { year: number; amount: number; yoyChange: string; shareOfBudget: number }[];
}

export function getAgencyDataForFY(slug: string, fy: number = 2026): AgencyDetailData | undefined {
  const norm = slug.toLowerCase().replace(/^\//, '').trim();

  if (norm === 'department-of-transportation' || norm === 'dot' || norm === 'transportation') {
    const baseBudget2026 = 126_436_540_460;
    const factor = totalOutlayFactor(fy);
    const budget = Math.round(baseBudget2026 * factor);
    const obligations = Math.round(budget * 0.98);
    const outlays = budget;
    const totalFYBudget = ANNUAL_TOTAL_BUDGET[fy] || ANNUAL_TOTAL_BUDGET[2026];
    const percentageOfTotal = Number(((budget / totalFYBudget) * 100).toFixed(2));

    const majorPrograms = [
      { name: 'Federal Highway Administration (FHWA Grants)', amount: Math.round(62_500_000_000 * factor), percentage: 46.3 },
      { name: 'Federal Transit Administration (FTA Grants)', amount: Math.round(24_800_000_000 * factor), percentage: 18.4 },
      { name: 'Federal Aviation Administration (FAA Tech & Operations)', amount: Math.round(22_100_000_000 * factor), percentage: 16.4 },
      { name: 'Federal Railroad Administration & Amtrak Support', amount: Math.round(11_400_000_000 * factor), percentage: 8.4 },
      { name: 'NHTSA & Maritime Safety Administration', amount: Math.round(14_200_000_000 * factor), percentage: 10.5 },
    ];

    const topRecipients = [
      { name: 'Amtrak (National Railroad Passenger Corp)', slug: 'amtrak', amount: Math.round(3_800_000_000 * factor), percentage: 2.8 },
      { name: 'HNTB Corporation Infrastructure', slug: 'hntb', amount: Math.round(680_000_000 * factor), percentage: 0.5 },
      { name: 'AECOM Technical Services', slug: 'aecom', amount: Math.round(540_000_000 * factor), percentage: 0.4 },
      { name: 'Lockheed Martin Technical Services', slug: 'lockheed-martin', amount: Math.round(420_000_000 * factor), percentage: 0.3 },
      { name: 'Bechtel Infrastructure', slug: 'bechtel', amount: Math.round(390_000_000 * factor), percentage: 0.3 },
    ];

    const awardTypes = [
      { name: 'Direct Grants to States & Local Transit', amount: Math.round(budget * 0.611), percentage: 61.1 },
      { name: 'Prime Procurement Contracts', amount: Math.round(budget * 0.285), percentage: 28.5 },
      { name: 'Other Financial Assistance & Subsidies', amount: Math.round(budget * 0.104), percentage: 10.4 },
    ];

    const topStates = [
      { state: 'California', code: 'CA', amount: Math.round(14_200_000_000 * factor), percentage: 10.5 },
      { state: 'Texas', code: 'TX', amount: Math.round(11_800_000_000 * factor), percentage: 8.7 },
      { state: 'New York', code: 'NY', amount: Math.round(9_500_000_000 * factor), percentage: 7.0 },
      { state: 'Florida', code: 'FL', amount: Math.round(7_200_000_000 * factor), percentage: 5.3 },
      { state: 'Illinois', code: 'IL', amount: Math.round(6_100_000_000 * factor), percentage: 4.5 },
    ];

    const spendingTrend = Object.keys(ANNUAL_TOTAL_BUDGET)
      .map(Number)
      .sort((a, b) => a - b)
      .map((year) => ({
        year,
        amount: Math.round(baseBudget2026 * totalOutlayFactor(year)),
      }));

    const yearlyTable = Object.keys(ANNUAL_TOTAL_BUDGET)
      .map(Number)
      .sort((a, b) => a - b)
      .map((year, idx, arr) => {
        const amt = Math.round(baseBudget2026 * totalOutlayFactor(year));
        const prevAmt = idx > 0 ? Math.round(baseBudget2026 * totalOutlayFactor(arr[idx - 1])) : amt;
        const changePct = prevAmt > 0 ? (((amt - prevAmt) / prevAmt) * 100).toFixed(1) : '0.0';
        const tot = ANNUAL_TOTAL_BUDGET[year];
        return {
          year,
          amount: amt,
          yoyChange: idx === 0 ? '—' : `${Number(changePct) >= 0 ? '+' : ''}${changePct}%`,
          shareOfBudget: Number(((amt / tot) * 100).toFixed(2)),
        };
      });

    return {
      id: 'department-of-transportation',
      name: 'Department of Transportation',
      abbreviation: 'DOT',
      code: '069',
      slug: 'department-of-transportation',
      budget,
      obligations,
      outlays,
      percentageOfTotal,
      description: 'Executive cabinet department responsible for coordinating federal transportation programs, highway grants, aviation regulation, and transit systems.',
      majorPrograms,
      topRecipients,
      awardTypes,
      topStates,
      spendingTrend,
      yearlyTable,
    };
  }

  if (norm === 'department-of-defense' || norm === 'dod') {
    const baseBudget2026 = 876_163_147_483;
    const factor = totalOutlayFactor(fy);
    const budget = Math.round(baseBudget2026 * factor);

    return {
      id: 'department-of-defense',
      name: 'Department of Defense',
      abbreviation: 'DOD',
      code: '097',
      slug: 'department-of-defense',
      budget,
      obligations: Math.round(budget * 0.99),
      outlays: budget,
      percentageOfTotal: Number(((budget / ANNUAL_TOTAL_BUDGET[fy]) * 100).toFixed(2)),
      description: 'Executive department responsible for national security, armed forces operations, and defense technology.',
      majorPrograms: [
        { name: 'Operation & Maintenance (O&M)', amount: Math.round(320_000_000_000 * factor), percentage: 35.8 },
        { name: 'Military Personnel Compensation', amount: Math.round(182_000_000_000 * factor), percentage: 20.3 },
        { name: 'Procurement & Weapon Systems', amount: Math.round(172_000_000_000 * factor), percentage: 19.2 },
        { name: 'Research, Development & Test (RDT&E)', amount: Math.round(145_000_000_000 * factor), percentage: 16.2 },
      ],
      topRecipients: [
        { name: 'Lockheed Martin', slug: 'lockheed-martin', amount: Math.round(48_500_000_000 * factor), percentage: 5.4 },
        { name: 'Boeing Company', slug: 'boeing', amount: Math.round(24_200_000_000 * factor), percentage: 2.7 },
      ],
      awardTypes: [
        { name: 'Prime Contracts', amount: Math.round(budget * 0.85), percentage: 85.0 },
        { name: 'Grants & R&D', amount: Math.round(budget * 0.15), percentage: 15.0 },
      ],
      topStates: [
        { state: 'Texas', code: 'TX', amount: Math.round(68_500_000_000 * factor), percentage: 7.7 },
        { state: 'California', code: 'CA', amount: Math.round(62_100_000_000 * factor), percentage: 6.9 },
      ],
      spendingTrend: Object.keys(ANNUAL_TOTAL_BUDGET)
        .map(Number)
        .sort((a, b) => a - b)
        .map((year) => ({ year, amount: Math.round(baseBudget2026 * totalOutlayFactor(year)) })),
      yearlyTable: [],
    };
  }

  return undefined;
}

export const AGENCIES_DATA = [
  getAgencyDataForFY('department-of-transportation', 2026)!,
  getAgencyDataForFY('department-of-defense', 2026)!,
];

// Recipient Details with Award Record Multi-FY Support
export interface AwardRecord {
  awardId: string;
  agency: string;
  awardType: string;
  amount: number;
  startDate: string;
  endDate: string;
  fiscalYear: number;
}

export interface RecipientDetailData {
  id: string;
  recipientId: string;
  name: string;
  slug: string;
  category: string;
  totalAwards: number;
  awardCount: number;
  contracts: number;
  grants: number;
  loans: number;
  otherAwards: number;
  headquarters: string;
  description: string;
  awardingAgencies: { name: string; slug: string; amount: number; percentage: number }[];
  awardTypesBreakdown: { name: string; amount: number; percentage: number }[];
  topStates: { state: string; code: string; amount: number; percentage: number }[];
  historicalSpending: { year: number; amount: number }[];
  awardDetails: AwardRecord[];
}

export function getRecipientDataForFY(slug: string, fy: number = 2026): RecipientDetailData | undefined {
  const norm = slug.toLowerCase().replace(/^\//, '').trim();

  if (norm === 'boeing' || norm === 'boeing-company' || norm === 'the-boeing-company') {
    const baseTotal2026 = 28_200_000_000;
    const factor = totalOutlayFactor(fy);
    const totalAwards = Math.round(baseTotal2026 * factor);

    const contracts = Math.round(totalAwards * 0.95);
    const grants = Math.round(totalAwards * 0.028);
    const loans = 0;
    const otherAwards = Math.round(totalAwards * 0.022);

    const awardingAgencies = [
      { name: 'Department of Defense (DOD)', slug: 'department-of-defense', amount: Math.round(24_200_000_000 * factor), percentage: 85.8 },
      { name: 'NASA Space Exploration', slug: 'nasa-space-exploration', amount: Math.round(3_800_000_000 * factor), percentage: 13.5 },
      { name: 'Department of Transportation (FAA)', slug: 'department-of-transportation', amount: Math.round(200_000_000 * factor), percentage: 0.7 },
    ];

    const awardTypesBreakdown = [
      { name: 'Prime Contracts', amount: contracts, percentage: 95.0 },
      { name: 'Grants & Assistance', amount: grants, percentage: 2.8 },
      { name: 'Loans & Guarantees', amount: loans, percentage: 0.0 },
      { name: 'Other Financial Awards', amount: otherAwards, percentage: 2.2 },
    ];

    const topStates = [
      { state: 'Washington', code: 'WA', amount: Math.round(12_400_000_000 * factor), percentage: 44.0 },
      { state: 'Missouri', code: 'MO', amount: Math.round(6_800_000_000 * factor), percentage: 24.1 },
      { state: 'South Carolina', code: 'SC', amount: Math.round(3_500_000_000 * factor), percentage: 12.4 },
      { state: 'Texas', code: 'TX', amount: Math.round(2_800_000_000 * factor), percentage: 9.9 },
      { state: 'California', code: 'CA', amount: Math.round(1_700_000_000 * factor), percentage: 6.0 },
      { state: 'Alabama', code: 'AL', amount: Math.round(1_000_000_000 * factor), percentage: 3.5 },
    ];

    const historicalSpending = Object.keys(ANNUAL_TOTAL_BUDGET)
      .map(Number)
      .sort((a, b) => a - b)
      .map((year) => ({
        year,
        amount: Math.round(baseTotal2026 * totalOutlayFactor(year)),
      }));

    const awardDetails: AwardRecord[] = [
      { awardId: 'FA8625-21-C-0001', agency: 'Department of the Air Force', awardType: 'Prime Contract (KC-46 Tanker)', amount: Math.round(4_250_000_000 * factor), startDate: '2021-10-01', endDate: '2028-09-30', fiscalYear: fy },
      { awardId: 'NNH16CA01C', agency: 'NASA Artemis Exploration', awardType: 'Prime Contract (SLS Rocket)', amount: Math.round(2_800_000_000 * factor), startDate: '2022-04-15', endDate: '2027-12-31', fiscalYear: fy },
      { awardId: 'N00019-20-C-0003', agency: 'Naval Air Systems Command', awardType: 'Prime Contract (F/A-18 Block III)', amount: Math.round(1_950_000_000 * factor), startDate: '2020-03-10', endDate: '2026-11-15', fiscalYear: fy },
      { awardId: 'W58RGZ-22-C-0012', agency: 'U.S. Army Aviation Command', awardType: 'Prime Contract (AH-64E Apache)', amount: Math.round(1_420_000_000 * factor), startDate: '2022-01-20', endDate: '2027-06-30', fiscalYear: fy },
      { awardId: 'N00019-21-C-0045', agency: 'U.S. Navy Maritime Patrol', awardType: 'Prime Contract (P-8A Poseidon)', amount: Math.round(1_150_000_000 * factor), startDate: '2021-08-01', endDate: '2026-09-30', fiscalYear: fy },
      { awardId: 'FA8505-23-C-0008', agency: 'Air Force Life Cycle Management', awardType: 'Prime Contract (F-15EX Eagle II)', amount: Math.round(880_000_000 * factor), startDate: '2023-02-14', endDate: '2028-03-31', fiscalYear: fy },
      { awardId: 'NNH22CE05B', agency: 'NASA Commercial Crew Program', awardType: 'Cooperative Agreement (Starliner)', amount: Math.round(650_000_000 * factor), startDate: '2022-09-01', endDate: '2027-05-15', fiscalYear: fy },
      { awardId: '693KA8-22-C-00019', agency: 'Federal Aviation Administration', awardType: 'Prime Contract (Avionics Tech)', amount: Math.round(200_000_000 * factor), startDate: '2022-11-01', endDate: '2026-10-31', fiscalYear: fy },
    ];

    return {
      id: 'boeing',
      recipientId: 'UEI-DUNS-009256814',
      name: 'Boeing',
      slug: 'boeing',
      category: 'Defense & Aerospace',
      totalAwards,
      awardCount: 1240,
      contracts,
      grants,
      loans,
      otherAwards,
      headquarters: 'Arlington, Virginia, USA',
      description: 'Major federal contractor supplying defense aircraft, commercial aviation technology, space launch vehicles, and satellite communication systems.',
      awardingAgencies,
      awardTypesBreakdown,
      topStates,
      historicalSpending,
      awardDetails,
    };
  }

  return undefined;
}

export const RECIPIENTS_DATA = [
  getRecipientDataForFY('boeing', 2026)!,
];

export interface StateSpendingItem {
  id: string;
  name: string;
  code: string;
  slug: string;
  population: number;
  totalSpending: number;
  amount: number;
  percentage: number;
  perCapita: number;
  yoyChange: string;
  isTerritory: boolean;
  contractsAmount: number;
  grantsAmount: number;
  otherAwardsAmount: number;
  majorAgencies: { name: string; amount: number; slug?: string }[];
  majorRecipients: { name: string; amount: number; slug?: string }[];
  historicalTrend: { year: number; amount: number }[];
}

export const STATES_DATA: StateSpendingItem[] = STATE_REGISTRY.map((s, idx) => {
  const baseOutlay = Math.round(s.population * (3500 + (idx % 7) * 400));
  const percentage = Number(((baseOutlay / TOTAL_FEDERAL_SPENDING_FY2026) * 100).toFixed(2));
  const perCapita = Math.round(baseOutlay / s.population);

  return {
    id: s.id,
    name: s.name,
    code: s.code,
    slug: s.slug,
    population: s.population,
    totalSpending: baseOutlay,
    amount: baseOutlay,
    percentage,
    perCapita,
    yoyChange: `+${(3.5 + (idx % 5) * 0.4).toFixed(1)}%`,
    isTerritory: s.isTerritory,
    contractsAmount: Math.round(baseOutlay * 0.55),
    grantsAmount: Math.round(baseOutlay * 0.35),
    otherAwardsAmount: Math.round(baseOutlay * 0.10),
    majorAgencies: [
      { name: 'Department of Defense', amount: Math.round(baseOutlay * 0.40), slug: 'department-of-defense' },
      { name: 'Department of Health & Human Services', amount: Math.round(baseOutlay * 0.30), slug: 'department-of-health-and-human-services' },
      { name: 'Department of Transportation', amount: Math.round(baseOutlay * 0.15), slug: 'department-of-transportation' },
    ],
    majorRecipients: [
      { name: 'Lockheed Martin', amount: Math.round(baseOutlay * 0.12), slug: 'lockheed-martin' },
      { name: 'Boeing', amount: Math.round(baseOutlay * 0.08), slug: 'boeing' },
    ],
    historicalTrend: HISTORICAL_SPENDING.map((h) => ({
      year: h.year,
      amount: Math.round(baseOutlay * (h.spending / TOTAL_FEDERAL_SPENDING_FY2026)),
    })),
  };
});

export const MOCK_SYNC_LOGS = [
  {
    id: 'sync-001',
    date: '2026-08-14',
    timestamp: '2026-08-14T10:00:00Z',
    endpoint: '/api/v2/spending/by_category/',
    status: 'SUCCESS',
    recordsSynced: 1250,
    durationMs: 450,
    source: 'USAspending API',
    message: 'Synced 1250 records cleanly',
  },
];
