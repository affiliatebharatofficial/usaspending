import { calculateSpendingRates } from '../utils/formatters';
import { CANONICAL_CATEGORIES, resolveCategoryEntity } from '../config/entities';
import { STATE_REGISTRY } from '../states/registry';

export const CURRENT_FISCAL_YEAR = 2027;

// FY2027 data covers Oct 1–31, 2026 (31 days): the October 2026 Monthly
// Treasury Statement, published November 12, 2026. FY2027 is in progress,
// so all current-year figures are fiscal-year-to-date (FYTD), not finals.
export const FY2027_DAYS_ELAPSED = 31;
export const FY2027_MONTHS_ELAPSED = 1;
export const DATA_COVERAGE_LABEL = 'Fiscal Year 2027 (FYTD, through October 31, 2026)';

// Historical total federal outlays (USD) — Monthly Treasury Statement,
// Table 9, September finals for FY2018–FY2026; FY2027 is FYTD through
// October 31, 2026 (partial year — see DATA_COVERAGE_LABEL).
export const ANNUAL_TOTAL_BUDGET: Record<number, number> = {
  2018: 4_107_741_496_584,
  2019: 4_446_583_636_481,
  2020: 6_551_872_254_654,
  2021: 6_818_157_647_017,
  2022: 6_271_507_596_876,
  2023: 6_134_432_040_451,
  2024: 6_751_551_633_812,
  2025: 7_009_973_667_049,
  2026: 7_395_799_983_313,
  2027: 773_003_666_480,
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
  2026: 5_403_326_758_961,
  2027: 368_940_118_603,
};

export const TOTAL_FEDERAL_SPENDING_FY2027 = ANNUAL_TOTAL_BUDGET[2027];

// Base Outlay Amounts for FY2027 by Canonical Slug — MTS Table 9 budget
// functions, FYTD through October 31, 2026 (first month of FY2027).
// Health-function total is shown under
// the Health Programs category (incl. Medicaid); function 250 under Science.
const CATEGORY_OUTLAYS_FY2027: Record<string, number> = {
  'social-security-spending': 142_687_221_457,
  'medicare-spending': 170_045_487_303,
  'defense-military': 128_878_982_148,
  'medicaid-spending': 93_528_269_733,
  'veterans-affairs-spending': 54_298_485_849,
  'education-training': 13_717_884_895,
  'agriculture-food-assistance': 17_597_908_131,
  'infrastructure-transport': 12_984_923_520,
  'science-medical-research': 3_313_779_291,
  'net-interest-spending': 103_076_056_306,
};

// Per-category fiscal-year factors (year value / FY2027 FYTD value),
// derived from MTS Table 9 actuals for every fiscal year 2018–2026
// (historical values preserved: old factor × old FY2026 base ÷ new base).
// FY2023 Education is omitted on purpose: FY2023 education outlays were
// negative (-$3.1B, student-loan accounting), so it falls back to the
// total-outlay ratio below rather than producing negative UI amounts.
const CATEGORY_FY_FACTORS: Record<string, Record<number, number>> = {
  'social-security-spending': { 2018: 6.9228, 2019: 7.3196, 2020: 7.6799, 2021: 7.9516, 2022: 8.5409, 2023: 9.4915, 2024: 10.2386, 2025: 11.078, 2026: 11.6836, 2027: 1.0 },
  'medicare-spending': { 2018: 3.4621, 2019: 3.8284, 2020: 4.5648, 2021: 4.0957, 2022: 4.4405, 2023: 4.9842, 2024: 5.1406, 2025: 5.8615, 2026: 6.3079, 2027: 1.0 },
  'defense-military': { 2018: 5.1573, 2019: 5.3353, 2020: 5.6344, 2021: 5.857, 2022: 5.9487, 2023: 6.3683, 2024: 6.7819, 2025: 7.1125, 2026: 7.4889, 2027: 1.0 },
  'medicaid-spending': { 2018: 5.5439, 2019: 6.2523, 2020: 8.0007, 2021: 8.5189, 2022: 9.7774, 2023: 9.5083, 2024: 9.7477, 2025: 10.4661, 2026: 10.9655, 2027: 1.0 },
  'veterans-affairs-spending': { 2018: 3.2939, 2019: 3.684, 2020: 4.0273, 2021: 4.3146, 2022: 5.0537, 2023: 5.5546, 2024: 5.9921, 2025: 6.9461, 2026: 7.6651, 2027: 1.0 },
  'education-training': { 2018: 6.8434, 2019: 9.8387, 2020: 17.2565, 2021: 21.6209, 2022: 49.322, 2024: 22.2357, 2025: 5.0441, 2026: 7.8402, 2027: 1.0 },
  'agriculture-food-assistance': { 2018: 1.349, 2019: 2.282, 2020: 2.7931, 2021: 2.8131, 2022: 1.9825, 2023: 2.0204, 2024: 1.9745, 2025: 2.8036, 2026: 2.9871, 2027: 1.0 },
  'infrastructure-transport': { 2018: 7.1753, 2019: 7.4101, 2020: 11.2558, 2021: 11.9209, 2022: 10.1328, 2023: 9.7986, 2024: 10.5601, 2025: 11.2287, 2026: 11.0023, 2027: 1.0 },
  'science-medical-research': { 2018: 9.5332, 2019: 9.7965, 2020: 10.2779, 2021: 10.7358, 2022: 11.311, 2023: 12.4861, 2024: 12.5423, 2025: 12.6998, 2026: 12.0336, 2027: 1.0 },
  'net-interest-spending': { 2018: 3.1501, 2019: 3.644, 2020: 3.3442, 2021: 3.4175, 2022: 4.6094, 2023: 6.3951, 2024: 8.5534, 2025: 9.414, 2026: 10.2037, 2027: 1.0 },
};

// Fallback: total-outlay ratio vs FY2026 final, for fiscal years without
// category-level actuals (currently only FY2023 Education).
function totalOutlayFactor(fy: number): number {
  const total = ANNUAL_TOTAL_BUDGET[fy];
  if (!total) return 1.0;
  return total / ANNUAL_TOTAL_BUDGET[2026];
}

// Whether the current fiscal year is still partial (FYTD). True while the
// latest published MTS month is before September.
export const CURRENT_FY_IS_PARTIAL = FY2027_DAYS_ELAPSED < 365;

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
      { name: 'Farm Commodity & Conservation Programs', amount: 7_037_383_601, percentage: 40.0 },
      { name: 'Crop Insurance & Risk Management', amount: 6_174_959_140, percentage: 35.1 },
      { name: 'Agricultural Research & Services', amount: 2_656_267_339, percentage: 15.1 },
      { name: 'Rural Development & Other Programs', amount: 1_724_848_922, percentage: 9.8 },
    ],
    primaryAgencies: ['Department of Agriculture (USDA)'],
    agencyRefs: [
      { name: 'Department of Agriculture (USDA)', slug: 'department-of-agriculture', amount: 17_593_459_002 },
    ],
    topRecipients: ['Crop Insurance Providers', 'Farm Program Participants', 'Agricultural Research Institutions'],
    recipientRefs: [
      { name: 'Federal Crop Insurance Program', slug: 'crop-insurance', amount: 6_174_959_140 },
    ],
  },
  'science-medical-research': {
    subcategories: [
      { name: 'NASA Space Programs', amount: 2_249_148_452, percentage: 67.9 },
      { name: 'NSF Basic Science & STEM Research', amount: 832_002_070, percentage: 25.1 },
      { name: 'DOE Science & Other Research Programs', amount: 228_571_997, percentage: 6.9 },
    ],
    primaryAgencies: ['National Aeronautics and Space Administration', 'National Science Foundation (NSF)'],
    agencyRefs: [
      { name: 'NASA', slug: 'nasa', amount: 2_249_148_452 },
      { name: 'National Science Foundation', slug: 'national-science-foundation', amount: 832_002_070 },
    ],
    topRecipients: ['SpaceX', 'Lockheed Martin Space Systems', 'Research Universities'],
    recipientRefs: [
      { name: 'Space Exploration Technologies (SpaceX)', slug: 'spacex', amount: 292_572_156 },
      { name: 'Lockheed Martin Space Systems', slug: 'lockheed-martin', amount: 256_000_637 },
    ],
  },
  'education-training': {
    subcategories: [
      { name: 'Federal Pell Grants & Student Financial Aid', amount: 4_803_742_717, percentage: 35.0 },
      { name: 'K-12 Title I & Special Education Grants', amount: 4_117_493_758, percentage: 30.0 },
      { name: 'Higher Education Programs', amount: 2_744_995_839, percentage: 20.0 },
      { name: 'Career, Technical & Adult Education', amount: 2_058_746_879, percentage: 15.0 },
    ],
    primaryAgencies: ['Department of Education', 'Department of Labor'],
    agencyRefs: [
      { name: 'Department of Education', slug: 'department-of-education', amount: 12_233_133_628 },
      { name: 'Department of Labor', slug: 'department-of-labor', amount: 1_491_845_564 },
    ],
    topRecipients: ['State Departments of Education', 'Pell Grant Beneficiaries', 'University Systems'],
    recipientRefs: [
      { name: 'State K-12 Educational Agencies', slug: 'state-education-agencies', amount: 4_117_493_758 },
      { name: 'Pell Grant Beneficiaries', slug: 'pell-beneficiaries', amount: 4_803_742_717 },
    ],
  },
  'defense-military': {
    subcategories: [
      { name: 'Operation & Maintenance (O&M)', amount: 46_084_779_100, percentage: 35.8 },
      { name: 'Military Personnel Pay & Allowances', amount: 26_212_280_994, percentage: 20.3 },
      { name: 'Procurement & Weapon Systems', amount: 24_770_752_634, percentage: 19.2 },
      { name: 'Research, Development, Test & Eval (RDT&E)', amount: 20_872_742_273, percentage: 16.2 },
      { name: 'Military Family Housing & Base Support', amount: 8_634_460_687, percentage: 6.7 },
      { name: 'Military Construction Projects', amount: 2_309_387_271, percentage: 1.8 },
    ],
    primaryAgencies: ['Department of Defense', 'U.S. Army', 'U.S. Navy', 'U.S. Air Force'],
    agencyRefs: [
      { name: 'Department of Defense', slug: 'department-of-defense', amount: 128_884_402_959 },
    ],
    topRecipients: ['Lockheed Martin', 'Boeing', 'Raytheon Technologies', 'General Dynamics', 'Northrop Grumman'],
    recipientRefs: [
      { name: 'Lockheed Martin Corporation', slug: 'lockheed-martin', amount: 7_134_094_435 },
      { name: 'Boeing Company', slug: 'boeing', amount: 3_559_692_481 },
      { name: 'Raytheon Technologies', slug: 'raytheon', amount: 3_250_793_546 },
      { name: 'General Dynamics', slug: 'general-dynamics', amount: 2_706_543_043 },
      { name: 'Northrop Grumman', slug: 'northrop-grumman', amount: 2_382_934_636 },
    ],
    stateRefs: [
      { state: 'Texas', code: 'TX', amount: 9_870_056_424, percentage: 7.7 },
      { state: 'California', code: 'CA', amount: 8_943_359_621, percentage: 6.9 },
      { state: 'Virginia', code: 'VA', amount: 8_413_818_591, percentage: 6.5 },
      { state: 'Florida', code: 'FL', amount: 4_927_673_475, percentage: 3.8 },
      { state: 'Maryland', code: 'MD', amount: 4_295_166_134, percentage: 3.3 },
    ],
  },
  'infrastructure-transport': {
    subcategories: [
      { name: 'Federal Highway Administration Grants', amount: 6_007_899_482, percentage: 46.3 },
      { name: 'Federal Transit Administration Grants', amount: 2_382_619_965, percentage: 18.4 },
      { name: 'Federal Aviation Administration (FAA)', amount: 2_125_872_124, percentage: 16.4 },
      { name: 'Maritime Administration & Pipeline Safety', amount: 1_365_898_515, percentage: 10.5 },
      { name: 'Federal Railroad Administration & Amtrak', amount: 1_098_880_760, percentage: 8.4 },
    ],
    primaryAgencies: ['Department of Transportation', 'Army Corps of Engineers'],
    agencyRefs: [
      { name: 'Department of Transportation', slug: 'department-of-transportation', amount: 12_981_170_846 },
    ],
    topRecipients: ['Amtrak (National Passenger Rail)', 'HNTB Corporation', 'AECOM', 'Bechtel Infrastructure'],
    recipientRefs: [
      { name: 'Amtrak (National Railroad Passenger Corp)', slug: 'amtrak', amount: 390_256_718 },
      { name: 'HNTB Corporation', slug: 'hntb', amount: 69_835_413 },
      { name: 'AECOM Technical Services', slug: 'aecom', amount: 55_457_534 },
      { name: 'Bechtel Infrastructure', slug: 'bechtel', amount: 40_052_663 },
    ],
    stateRefs: [
      { state: 'California', code: 'CA', amount: 1_365_898_515, percentage: 10.5 },
      { state: 'Texas', code: 'TX', amount: 1_139_960_415, percentage: 8.7 },
      { state: 'New York', code: 'NY', amount: 914_022_314, percentage: 7.0 },
      { state: 'Florida', code: 'FL', amount: 688_084_214, percentage: 5.3 },
      { state: 'Illinois', code: 'IL', amount: 585_385_078, percentage: 4.5 },
    ],
  },
  'medicaid-spending': {
    subcategories: [
      { name: 'Medicaid Federal Matching Payments', amount: 65_470_958_550, percentage: 70.0 },
      { name: 'Marketplace Subsidies & CHIP', amount: 14_043_924_751, percentage: 15.0 },
      { name: 'NIH & Public Health Programs', amount: 9_396_294_977, percentage: 10.0 },
      { name: 'Program Administration & Integrity', amount: 4_647_629_774, percentage: 5.0 },
    ],
    primaryAgencies: ['Centers for Medicare & Medicaid Services', 'Department of Health & Human Services'],
    agencyRefs: [
      { name: 'Department of Health and Human Services', slug: 'department-of-health-and-human-services', amount: 93_528_497_422 },
    ],
    topRecipients: ['State Health Departments', 'Health Insurers', 'Research Institutions'],
    recipientRefs: [
      { name: 'State Medicaid Administrative Agencies', slug: 'state-health-departments', amount: 65_470_958_550 },
    ],
    stateRefs: [
      { state: 'California', code: 'CA', amount: 14_468_273_556, percentage: 15.5 },
      { state: 'New York', code: 'NY', amount: 10_285_406_760, percentage: 11.0 },
      { state: 'Texas', code: 'TX', amount: 6_688_545_457, percentage: 7.1 },
      { state: 'Florida', code: 'FL', amount: 4_334_419_941, percentage: 4.6 },
      { state: 'Pennsylvania', code: 'PA', amount: 3_970_692_394, percentage: 4.3 },
      { state: 'Ohio', code: 'OH', amount: 3_313_962_099, percentage: 3.5 },
    ],
  },
  'net-interest-spending': {
    subcategories: [
      { name: 'Interest on Debt Held by the Public', amount: 87_612_471_556, percentage: 85.0 },
      { name: 'Interest on Intragovernmental Holdings', amount: 15_466_986_533, percentage: 15.0 },
    ],
    primaryAgencies: ['Department of the Treasury'],
    agencyRefs: [
      { name: 'Department of the Treasury', slug: 'department-of-treasury', amount: 103_079_458_089 },
    ],
    topRecipients: ['Treasury Security Holders'],
    recipientRefs: [],
  },
};

export function getCategoryDataForFY(slug: string, fy: number = 2027): CategorySpendingItem | undefined {
  const entity = resolveCategoryEntity(slug);
  if (!entity) return undefined;

  const base2027 = CATEGORY_OUTLAYS_FY2027[entity.slug] || 50_000_000_000;
  const factor = categoryFactorForFY(entity.slug, fy);
  const amount = Math.round(base2027 * factor);

  const totalFYBudget = ANNUAL_TOTAL_BUDGET[fy] || ANNUAL_TOTAL_BUDGET[2027];
  const percentage = Number(((amount / totalFYBudget) * 100).toFixed(2));
  // FY2027 is a partial fiscal year (31 elapsed days); rates use a /31 split.
  // Complete fiscal years use a /365 split.
  const rates = calculateSpendingRates(amount, fy === 2027 ? FY2027_DAYS_ELAPSED : 365);

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

  // Historical trend uses complete fiscal years with category-level MTS
  // actuals; the partial current year is excluded so the chart never reads
  // as a year-over-year collapse.
  const historicalTrend = [2018, 2020, 2022, 2024, 2026].map((year) => ({
    year,
    amount: Math.round(base2027 * categoryFactorForFY(entity.slug, year)),
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
  getCategoryDataForFY(c.slug, 2027)!
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
  .map((year, idx, arr) => {
    const spending = ANNUAL_TOTAL_BUDGET[year];
    const isPartial = year === CURRENT_FISCAL_YEAR && CURRENT_FY_IS_PARTIAL;
    // Total national debt is a stock, not a flow: a partial-year outlay
    // figure must not shrink it, so the FYTD row carries the last complete
    // year's debt estimate forward.
    const debtTotal = isPartial && idx > 0
      ? Math.round(ANNUAL_TOTAL_BUDGET[arr[idx - 1]] * 5.4)
      : Math.round(spending * 5.4);
    return {
      year,
      spending,
      totalSpending: spending,
      receipts: ANNUAL_TOTAL_RECEIPTS[year] ?? 0,
      deficit: Math.round(spending - (ANNUAL_TOTAL_RECEIPTS[year] ?? 0)),
      debtTotal,
      isPartial,
    };
  });

// Complete fiscal years only. Trend charts and YoY tables use this list so
// the partial current year (FYTD) never reads as a year-over-year collapse.
export const COMPLETE_FISCAL_YEARS = HISTORICAL_SPENDING.filter((h) => !h.isPartial).map((h) => h.year);

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

export function getAgencyDataForFY(slug: string, fy: number = 2027): AgencyDetailData | undefined {
  const norm = slug.toLowerCase().replace(/^\//, '').trim();

  if (norm === 'department-of-transportation' || norm === 'dot' || norm === 'transportation') {
    const baseBudget = 126_436_540_460;
    const factor = totalOutlayFactor(fy);
    const budget = Math.round(baseBudget * factor);
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

    const spendingTrend = COMPLETE_FISCAL_YEARS
      .map((year) => ({
        year,
        amount: Math.round(baseBudget * totalOutlayFactor(year)),
      }));

    const yearlyTable = COMPLETE_FISCAL_YEARS
      .map((year, idx, arr) => {
        const amt = Math.round(baseBudget * totalOutlayFactor(year));
        const prevAmt = idx > 0 ? Math.round(baseBudget * totalOutlayFactor(arr[idx - 1])) : amt;
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
    const baseBudget = 876_163_147_483;
    const factor = totalOutlayFactor(fy);
    const budget = Math.round(baseBudget * factor);

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
      spendingTrend: COMPLETE_FISCAL_YEARS
        .map((year) => ({ year, amount: Math.round(baseBudget * totalOutlayFactor(year)) })),
      yearlyTable: [],
    };
  }

  return undefined;
}

export const AGENCIES_DATA = [
  getAgencyDataForFY('department-of-transportation', 2027)!,
  getAgencyDataForFY('department-of-defense', 2027)!,
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

export function getRecipientDataForFY(slug: string, fy: number = 2027): RecipientDetailData | undefined {
  const norm = slug.toLowerCase().replace(/^\//, '').trim();

  if (norm === 'boeing' || norm === 'boeing-company' || norm === 'the-boeing-company') {
    const baseTotal = 28_200_000_000;
    const factor = totalOutlayFactor(fy);
    const totalAwards = Math.round(baseTotal * factor);

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

    const historicalSpending = COMPLETE_FISCAL_YEARS
      .map((year) => ({
        year,
        amount: Math.round(baseTotal * totalOutlayFactor(year)),
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
  getRecipientDataForFY('boeing', 2027)!,
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
  // State attributions are population-based modeled estimates. They are
  // scaled to the current fiscal year so shares stay meaningful while the
  // year is partial (FYTD): without this, state shares of a 1-month total
  // would sum to over 200%.
  const baseOutlay = Math.round(
    s.population * (3500 + (idx % 7) * 400) * totalOutlayFactor(CURRENT_FISCAL_YEAR)
  );
  const percentage = Number(((baseOutlay / TOTAL_FEDERAL_SPENDING_FY2027) * 100).toFixed(2));
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
      amount: Math.round(baseOutlay * (h.spending / TOTAL_FEDERAL_SPENDING_FY2027)),
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
