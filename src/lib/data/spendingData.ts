import { calculateSpendingRates } from '../utils/formatters';
import { CANONICAL_CATEGORIES, resolveCategoryEntity } from '../config/entities';
import { STATE_REGISTRY } from '../states/registry';

export const CURRENT_FISCAL_YEAR = 2026;

// Historical total federal budget outlays (USD)
export const ANNUAL_TOTAL_BUDGET: Record<number, number> = {
  2018: 4_108_000_000_000,
  2019: 4_447_000_000_000,
  2020: 6_552_000_000_000,
  2021: 6_818_000_000_000,
  2022: 6_272_000_000_000,
  2023: 6_134_000_000_000,
  2024: 6_440_000_000_000,
  2025: 6_580_000_000_000,
  2026: 6_750_000_000_000,
};

export const TOTAL_FEDERAL_SPENDING_FY2026 = ANNUAL_TOTAL_BUDGET[2026];

// Base Outlay Amounts for FY2026 by Canonical Slug
const CATEGORY_OUTLAYS_FY2026: Record<string, number> = {
  'social-security-spending': 1_450_000_000_000,
  'medicare-spending': 920_000_000_000,
  'defense-military': 895_000_000_000,
  'medicaid-spending': 680_000_000_000,
  'veterans-affairs-spending': 325_000_000_000,
  'education-training': 240_000_000_000,
  'agriculture-food-assistance': 165_000_000_000,
  'infrastructure-transport': 135_000_000_000,
  'science-medical-research': 45_000_000_000,
  'nasa-space-exploration': 25_400_000_000,
};

// Multi-year factors relative to FY2026 for categories
const FY_FACTORS: Record<number, number> = {
  2018: 0.69,
  2019: 0.74,
  2020: 0.88,
  2021: 0.94,
  2022: 0.90,
  2023: 0.92,
  2024: 0.96,
  2025: 0.98,
  2026: 1.00,
};

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
  'nasa-space-exploration': {
    subcategories: [
      { name: 'Science Missions (Biomedical, Earth & Planetary)', amount: 7_800_000_000, percentage: 30.7 },
      { name: 'Deep Space Exploration Systems (Artemis Lunar)', amount: 7_600_000_000, percentage: 29.9 },
      { name: 'Space Operations & ISS Station Support', amount: 4_200_000_000, percentage: 16.5 },
      { name: 'Safety, Security & Mission Services', amount: 3_100_000_000, percentage: 12.2 },
      { name: 'Construction & Environmental Restoration', amount: 1_800_000_000, percentage: 7.1 },
      { name: 'Aeronautics Research', amount: 900_000_000, percentage: 3.5 },
    ],
    primaryAgencies: ['National Aeronautics and Space Administration', 'Department of Defense'],
    agencyRefs: [
      { name: 'NASA', slug: 'nasa-space-exploration', amount: 25_400_000_000 },
      { name: 'Department of Defense (Space Force Link)', slug: 'department-of-defense', amount: 4_500_000_000 },
    ],
    topRecipients: ['Lockheed Martin Space Systems', 'Boeing Company', 'SpaceX', 'Northrop Grumman Innovation'],
    recipientRefs: [
      { name: 'Lockheed Martin Space Systems', slug: 'lockheed-martin', amount: 4_500_000_000 },
      { name: 'Boeing Company', slug: 'boeing', amount: 3_800_000_000 },
      { name: 'Space Exploration Technologies (SpaceX)', slug: 'spacex', amount: 3_200_000_000 },
      { name: 'Northrop Grumman Innovation Systems', slug: 'northrop-grumman', amount: 2_100_000_000 },
    ],
  },
  'agriculture-food-assistance': {
    subcategories: [
      { name: 'SNAP & Supplemental Nutrition Grants', amount: 112_500_000_000, percentage: 68.2 },
      { name: 'Crop Insurance & Risk Management', amount: 18_500_000_000, percentage: 11.2 },
      { name: 'Farm Services & Commodity Support', amount: 16_000_000_000, percentage: 9.7 },
      { name: 'Forest Service & Conservation Reserves', amount: 12_800_000_000, percentage: 7.8 },
      { name: 'Agricultural Research Services', amount: 5_200_000_000, percentage: 3.1 },
    ],
    primaryAgencies: ['Department of Agriculture (USDA)', 'Department of Health & Human Services'],
    agencyRefs: [
      { name: 'Department of Agriculture (USDA)', slug: 'department-of-agriculture', amount: 155_000_000_000 },
      { name: 'Department of Health & Human Services', slug: 'department-of-health-and-human-services', amount: 10_000_000_000 },
    ],
    topRecipients: ['State Nutrition Assistance Agencies', 'Archer-Daniels-Midland', 'Cargill Inc.'],
    recipientRefs: [
      { name: 'State Social Services Channel', slug: 'state-agencies', amount: 112_500_000_000 },
      { name: 'Archer-Daniels-Midland Company', slug: 'adm', amount: 2_400_000_000 },
      { name: 'Cargill Incorporated', slug: 'cargill', amount: 1_800_000_000 },
    ],
  },
  'science-medical-research': {
    subcategories: [
      { name: 'NIH Biomedical & Health Research Grants', amount: 36_200_000_000, percentage: 80.4 },
      { name: 'NSF Basic Science & STEM Research', amount: 7_200_000_000, percentage: 16.0 },
      { name: 'NIST Technology & Measurement Standards', amount: 1_600_000_000, percentage: 3.6 },
    ],
    primaryAgencies: ['Department of Health & Human Services (NIH)', 'National Science Foundation (NSF)'],
    agencyRefs: [
      { name: 'Department of Health & Human Services', slug: 'department-of-health-and-human-services', amount: 36_200_000_000 },
      { name: 'National Science Foundation', slug: 'national-science-foundation', amount: 7_200_000_000 },
    ],
    topRecipients: ['Johns Hopkins University', 'University of California System', 'Harvard University'],
    recipientRefs: [
      { name: 'Johns Hopkins University', slug: 'johns-hopkins', amount: 1_250_000_000 },
      { name: 'University of California System', slug: 'uc-system', amount: 1_180_000_000 },
      { name: 'Harvard University', slug: 'harvard', amount: 920_000_000 },
    ],
  },
  'education-training': {
    subcategories: [
      { name: 'Federal Pell Grants & Student Financial Aid', amount: 118_000_000_000, percentage: 49.2 },
      { name: 'Higher Education Stabilization & Student Loans', amount: 45_300_000_000, percentage: 18.9 },
      { name: 'Vocational, Adult Ed & Career Training', amount: 32_000_000_000, percentage: 13.3 },
      { name: 'K-12 Title I Elementary Aid Grants', amount: 28_500_000_000, percentage: 11.9 },
      { name: 'Special Education (IDEA Grants)', amount: 16_200_000_000, percentage: 6.7 },
    ],
    primaryAgencies: ['Department of Education', 'Department of Labor'],
    agencyRefs: [
      { name: 'Department of Education', slug: 'department-of-education', amount: 215_000_000_000 },
      { name: 'Department of Labor', slug: 'department-of-labor', amount: 25_000_000_000 },
    ],
    topRecipients: ['State Departments of Education', 'State University Systems', 'Pell Grant Beneficiaries'],
    recipientRefs: [
      { name: 'State K-12 Educational Agencies', slug: 'state-education-agencies', amount: 44_700_000_000 },
      { name: 'University System Beneficiaries', slug: 'university-systems', amount: 118_000_000_000 },
    ],
  },
  'defense-military': {
    subcategories: [
      { name: 'Operation & Maintenance (O&M)', amount: 320_000_000_000, percentage: 35.8 },
      { name: 'Military Personnel Pay & Allowances', amount: 182_000_000_000, percentage: 20.3 },
      { name: 'Procurement & Weapon Systems', amount: 172_000_000_000, percentage: 19.2 },
      { name: 'Research, Development, Test & Eval (RDT&E)', amount: 145_000_000_000, percentage: 16.2 },
      { name: 'Military Family Housing & Base Support', amount: 60_000_000_000, percentage: 6.7 },
      { name: 'Military Construction Projects', amount: 16_000_000_000, percentage: 1.8 },
    ],
    primaryAgencies: ['Department of Defense', 'U.S. Army', 'U.S. Navy', 'U.S. Air Force'],
    agencyRefs: [
      { name: 'Department of Defense', slug: 'department-of-defense', amount: 895_000_000_000 },
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
      { state: 'Texas', code: 'TX', amount: 68_500_000_000, percentage: 7.7 },
      { state: 'California', code: 'CA', amount: 62_100_000_000, percentage: 6.9 },
      { state: 'Virginia', code: 'VA', amount: 58_400_000_000, percentage: 6.5 },
      { state: 'Florida', code: 'FL', amount: 34_200_000_000, percentage: 3.8 },
      { state: 'Maryland', code: 'MD', amount: 29_800_000_000, percentage: 3.3 },
    ],
  },
  'infrastructure-transport': {
    subcategories: [
      { name: 'Federal Highway Administration Grants', amount: 62_500_000_000, percentage: 46.3 },
      { name: 'Federal Transit Administration Grants', amount: 24_800_000_000, percentage: 18.4 },
      { name: 'Federal Aviation Administration (FAA)', amount: 22_100_000_000, percentage: 16.4 },
      { name: 'Maritime Administration & Pipeline Safety', amount: 14_200_000_000, percentage: 10.5 },
      { name: 'Federal Railroad Administration & Amtrak', amount: 11_400_000_000, percentage: 8.4 },
    ],
    primaryAgencies: ['Department of Transportation', 'Army Corps of Engineers'],
    agencyRefs: [
      { name: 'Department of Transportation', slug: 'department-of-transportation', amount: 135_000_000_000 },
    ],
    topRecipients: ['Amtrak (National Passenger Rail)', 'HNTB Corporation', 'AECOM', 'Bechtel Infrastructure'],
    recipientRefs: [
      { name: 'Amtrak (National Railroad Passenger Corp)', slug: 'amtrak', amount: 3_800_000_000 },
      { name: 'HNTB Corporation', slug: 'hntb', amount: 680_000_000 },
      { name: 'AECOM Technical Services', slug: 'aecom', amount: 540_000_000 },
      { name: 'Bechtel Infrastructure', slug: 'bechtel', amount: 390_000_000 },
    ],
    stateRefs: [
      { state: 'California', code: 'CA', amount: 14_200_000_000, percentage: 10.5 },
      { state: 'Texas', code: 'TX', amount: 11_800_000_000, percentage: 8.7 },
      { state: 'New York', code: 'NY', amount: 9_500_000_000, percentage: 7.0 },
      { state: 'Florida', code: 'FL', amount: 7_200_000_000, percentage: 5.3 },
      { state: 'Illinois', code: 'IL', amount: 6_100_000_000, percentage: 4.5 },
    ],
  },
  'medicaid-spending': {
    subcategories: [
      { name: 'Acute Care Federal Matching Grants', amount: 442_000_000_000, percentage: 65.0 },
      { name: 'Long-Term Services & Home Care Grants', amount: 176_000_000_000, percentage: 25.9 },
      { name: 'Disproportionate Share Hospital (DSH) Grants', amount: 38_000_000_000, percentage: 5.6 },
      { name: 'Program Administration & Integrity', amount: 24_000_000_000, percentage: 3.5 },
    ],
    primaryAgencies: ['Centers for Medicare & Medicaid Services', 'Department of Health & Human Services'],
    agencyRefs: [
      { name: 'Department of Health and Human Services', slug: 'department-of-health-and-human-services', amount: 680_000_000_000 },
    ],
    topRecipients: ['State Health Departments', 'Centene Corporation', 'Elevance Health'],
    recipientRefs: [
      { name: 'State Medicaid Administrative Agencies', slug: 'state-health-departments', amount: 618_000_000_000 },
      { name: 'Centene Corporation', slug: 'centene', amount: 38_000_000_000 },
      { name: 'Elevance Health', slug: 'elevance', amount: 24_000_000_000 },
    ],
    stateRefs: [
      { state: 'California', code: 'CA', amount: 105_200_000_000, percentage: 15.5 },
      { state: 'New York', code: 'NY', amount: 74_800_000_000, percentage: 11.0 },
      { state: 'Texas', code: 'TX', amount: 48_600_000_000, percentage: 7.1 },
      { state: 'Florida', code: 'FL', amount: 31_500_000_000, percentage: 4.6 },
      { state: 'Pennsylvania', code: 'PA', amount: 28_900_000_000, percentage: 4.3 },
      { state: 'Ohio', code: 'OH', amount: 24_100_000_000, percentage: 3.5 },
    ],
  },
};

export function getCategoryDataForFY(slug: string, fy: number = 2026): CategorySpendingItem | undefined {
  const entity = resolveCategoryEntity(slug);
  if (!entity) return undefined;

  const base2026 = CATEGORY_OUTLAYS_FY2026[entity.slug] || 50_000_000_000;
  const factor = FY_FACTORS[fy] || 1.0;
  const amount = Math.round(base2026 * factor);

  const totalFYBudget = ANNUAL_TOTAL_BUDGET[fy] || ANNUAL_TOTAL_BUDGET[2026];
  const percentage = Number(((amount / totalFYBudget) * 100).toFixed(2));
  const rates = calculateSpendingRates(amount);

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

  const historicalTrend = Object.keys(ANNUAL_TOTAL_BUDGET)
    .map(Number)
    .sort((a, b) => a - b)
    .map((year) => ({
      year,
      amount: Math.round(base2026 * (FY_FACTORS[year] || 1.0)),
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
    deficit: Math.round(ANNUAL_TOTAL_BUDGET[year] * 0.28),
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
    const baseBudget2026 = 135_000_000_000;
    const factor = FY_FACTORS[fy] || 1.0;
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
        amount: Math.round(baseBudget2026 * (FY_FACTORS[year] || 1.0)),
      }));

    const yearlyTable = Object.keys(ANNUAL_TOTAL_BUDGET)
      .map(Number)
      .sort((a, b) => a - b)
      .map((year, idx, arr) => {
        const amt = Math.round(baseBudget2026 * (FY_FACTORS[year] || 1.0));
        const prevAmt = idx > 0 ? Math.round(baseBudget2026 * (FY_FACTORS[arr[idx - 1]] || 1.0)) : amt;
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
    const baseBudget2026 = 895_000_000_000;
    const factor = FY_FACTORS[fy] || 1.0;
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
        .map((year) => ({ year, amount: Math.round(baseBudget2026 * (FY_FACTORS[year] || 1.0)) })),
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
    const factor = FY_FACTORS[fy] || 1.0;
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
        amount: Math.round(baseTotal2026 * (FY_FACTORS[year] || 1.0)),
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
