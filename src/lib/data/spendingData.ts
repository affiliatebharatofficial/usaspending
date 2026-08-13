import { calculateSpendingRates } from '../utils/formatters';
import { CATEGORY_REGISTRY } from '../categories/registry';
import { STATE_REGISTRY } from '../states/registry';

export const CURRENT_FISCAL_YEAR = 2026;
export const TOTAL_FEDERAL_SPENDING_FY2026 = 6_750_000_000_000;

// Base Outlay Amounts (FY2026 Budget Outlays in USD)
const CATEGORY_OUTLAYS: Record<string, number> = {
  'social-security-spending': 1_450_000_000_000,
  'medicare-spending': 920_000_000_000,
  'defense-spending': 895_000_000_000,
  'medicaid-spending': 680_000_000_000,
  'veterans-affairs-spending': 325_000_000_000,
  'education-spending': 240_000_000_000,
  'agriculture-spending': 165_000_000_000,
  'transportation-spending': 135_000_000_000,
  'science-research-spending': 45_000_000_000,
  'nasa-spending': 25_400_000_000,
};

const topCategoriesSum = Object.values(CATEGORY_OUTLAYS).reduce((a, b) => a + b, 0);
export const OTHER_FEDERAL_OUTLAYS = TOTAL_FEDERAL_SPENDING_FY2026 - topCategoriesSum;

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
  categoryType: 'official' | 'derived' | 'editorial';
  description: string;
  sourceUrl: string;
  icon: string;
  subcategories: { name: string; amount: number; percentage: number }[];
  primaryAgencies: string[];
  topRecipients: string[];
  historicalTrend: { year: number; amount: number }[];
}

export const SPENDING_CATEGORIES: CategorySpendingItem[] = CATEGORY_REGISTRY.map((cat) => {
  const amount = CATEGORY_OUTLAYS[cat.slug] || 50_000_000_000;
  const percentage = Number(((amount / TOTAL_FEDERAL_SPENDING_FY2026) * 100).toFixed(2));
  const rates = calculateSpendingRates(amount);

  return {
    id: cat.id,
    name: cat.name,
    category: cat.name,
    slug: cat.slug,
    amount,
    annualAmount: amount,
    percentage,
    dailyRate: rates.perDay,
    hourlyRate: rates.perHour,
    minuteRate: rates.perMinute,
    secondRate: rates.perSecond,
    categoryType: cat.categoryType,
    description: cat.description,
    sourceUrl: cat.sourceUrl,
    icon: cat.icon || '🏛️',
    subcategories: [
      { name: 'Primary Operational Outlays', amount: amount * 0.65, percentage: 65.0 },
      { name: 'Grants & Subsidies', amount: amount * 0.25, percentage: 25.0 },
      { name: 'Administrative Expenses', amount: amount * 0.10, percentage: 10.0 },
    ],
    primaryAgencies: ['Department of Defense', 'Department of Health & Human Services', 'Social Security Administration'],
    topRecipients: ['Lockheed Martin', 'Boeing Company', 'Pfizer Inc.'],
    historicalTrend: [
      { year: 2020, amount: amount * 0.85 },
      { year: 2022, amount: amount * 0.90 },
      { year: 2024, amount: amount * 0.95 },
      { year: 2026, amount: amount },
    ],
  };
});

export const RECONCILED_PIE_DATA = [
  ...SPENDING_CATEGORIES.map((c) => ({
    category: c.name,
    amount: c.amount,
    percentage: c.percentage,
    icon: c.icon,
    slug: c.slug,
  })),
  {
    category: 'Other / Remaining Federal Functions',
    amount: OTHER_FEDERAL_OUTLAYS,
    percentage: Number(((OTHER_FEDERAL_OUTLAYS / TOTAL_FEDERAL_SPENDING_FY2026) * 100).toFixed(2)),
    icon: '📦',
    slug: 'other-spending',
  },
];

export const HISTORICAL_SPENDING = [
  { year: 2018, spending: 4_108_000_000_000, totalSpending: 4_108_000_000_000, deficit: 779_000_000_000, debtTotal: 21_500_000_000_000 },
  { year: 2019, spending: 4_447_000_000_000, totalSpending: 4_447_000_000_000, deficit: 984_000_000_000, debtTotal: 22_700_000_000_000 },
  { year: 2020, spending: 6_552_000_000_000, totalSpending: 6_552_000_000_000, deficit: 3_132_000_000_000, debtTotal: 26_900_000_000_000 },
  { year: 2021, spending: 6_822_000_000_000, totalSpending: 6_822_000_000_000, deficit: 2_775_000_000_000, debtTotal: 28_400_000_000_000 },
  { year: 2022, spending: 6_272_000_000_000, totalSpending: 6_272_000_000_000, deficit: 1_375_000_000_000, debtTotal: 30_900_000_000_000 },
  { year: 2023, spending: 6_134_000_000_000, totalSpending: 6_134_000_000_000, deficit: 1_695_000_000_000, debtTotal: 33_100_000_000_000 },
  { year: 2024, spending: 6_440_000_000_000, totalSpending: 6_440_000_000_000, deficit: 1_830_000_000_000, debtTotal: 34_800_000_000_000 },
  { year: 2025, spending: 6_580_000_000_000, totalSpending: 6_580_000_000_000, deficit: 1_900_000_000_000, debtTotal: 36_200_000_000_000 },
  { year: 2026, spending: 6_750_000_000_000, totalSpending: 6_750_000_000_000, deficit: 1_950_000_000_000, debtTotal: 37_500_000_000_000 },
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

// Generate normalized state spending items for all 50 states + DC + territories
export const STATES_DATA: StateSpendingItem[] = STATE_REGISTRY.map((s, idx) => {
  // Proportional federal spending based on population baseline
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
      { name: 'Boeing Company', amount: Math.round(baseOutlay * 0.08), slug: 'boeing' },
    ],
    historicalTrend: HISTORICAL_SPENDING.map((h) => ({
      year: h.year,
      amount: Math.round(baseOutlay * (h.spending / TOTAL_FEDERAL_SPENDING_FY2026)),
    })),
  };
});

export const AGENCIES_DATA = [
  {
    id: 'dod',
    name: 'Department of Defense',
    abbreviation: 'DOD',
    code: '097',
    slug: 'department-of-defense',
    totalBudget: 895_000_000_000,
    budget: 895_000_000_000,
    obligations: 890_000_000_000,
    outlays: 895_000_000_000,
    percentageOfTotal: 13.2,
    topRecipient: 'Lockheed Martin',
    topRecipients: [
      { name: 'Lockheed Martin', slug: 'lockheed-martin', amount: 48_500_000_000 },
      { name: 'Boeing', slug: 'boeing', amount: 28_200_000_000 },
    ],
    majorPrograms: [
      { name: 'F-35 Joint Strike Fighter', amount: 14_800_000_000 },
      { name: 'Virginia Class Submarines', amount: 9_200_000_000 },
    ],
    description: 'Executive department responsible for national security and military forces.',
    spendingTrend: HISTORICAL_SPENDING.map((h) => ({ year: h.year, amount: Math.round(h.spending * 0.132) })),
  },
  {
    id: 'hhs',
    name: 'Department of Health and Human Services',
    abbreviation: 'HHS',
    code: '075',
    slug: 'department-of-health-and-human-services',
    totalBudget: 1_720_000_000_000,
    budget: 1_720_000_000_000,
    obligations: 1_710_000_000_000,
    outlays: 1_720_000_000_000,
    percentageOfTotal: 25.4,
    topRecipient: 'Pfizer',
    topRecipients: [
      { name: 'Pfizer', slug: 'pfizer', amount: 12_400_000_000 },
      { name: 'Moderna', slug: 'moderna', amount: 8_100_000_000 },
    ],
    majorPrograms: [
      { name: 'Medicare Part D', amount: 120_000_000_000 },
      { name: 'NIH Research Grants', amount: 45_000_000_000 },
    ],
    description: 'Executive department administering Medicare, Medicaid, and public health agencies.',
    spendingTrend: HISTORICAL_SPENDING.map((h) => ({ year: h.year, amount: Math.round(h.spending * 0.254) })),
  },
];

export const RECIPIENTS_DATA = [
  {
    id: 'lockheed',
    recipientId: 'DUNS-053075210',
    name: 'Lockheed Martin Corporation',
    slug: 'lockheed-martin',
    uei: 'DUNS-053075210',
    totalAwards: 48_500_000_000,
    category: 'Defense & Aerospace',
    awardCount: 1420,
    headquarters: 'Bethesda, Maryland, USA',
    description: 'Global security and aerospace company specializing in defense systems, F-35 fighters, and missiles.',
    contracts: 46_000_000_000,
    grants: 1_500_000_000,
    loans: 0,
    otherAwards: 1_000_000_000,
    awardingAgencies: [
      { name: 'Department of Defense', slug: 'department-of-defense', amount: 44_000_000_000 },
      { name: 'NASA', slug: 'nasa', amount: 4_500_000_000 },
    ],
    historicalSpending: HISTORICAL_SPENDING.map((h) => ({ year: h.year, amount: Math.round(48_500_000_000 * (h.spending / 6_750_000_000_000)) })),
  },
];

export const MOCK_SYNC_LOGS = [
  {
    id: 'sync-001',
    date: '2026-08-13',
    timestamp: '2026-08-13T10:00:00Z',
    endpoint: '/api/v2/spending/by_category/',
    status: 'SUCCESS',
    recordsSynced: 1250,
    durationMs: 450,
    source: 'USAspending API',
    message: 'Synced 1250 records cleanly',
  },
];
