export type EntityType = 'category' | 'agency' | 'recipient';

export interface EntityConfig {
  type: EntityType;
  slug: string; // Canonical slug
  aliases: string[];
  name: string;
  h1Title: string;
  sourceIdentifier?: string;
  classificationType: 'official' | 'derived';
  canonicalUrl: string;
  description: string;
  icon?: string;
}

export const CANONICAL_CATEGORIES: EntityConfig[] = [
  {
    type: 'category',
    slug: 'agriculture-food-assistance',
    aliases: ['agriculture-spending', 'agriculture', 'food-assistance', 'agriculture-and-food-assistance'],
    name: 'Agriculture',
    h1Title: 'Agriculture Spending',
    sourceIdentifier: 'BUDGET_FUNC_350',
    classificationType: 'official',
    canonicalUrl: 'https://www.usaspending.us/categories/agriculture-food-assistance',
    description: 'Federal agriculture outlays: farm commodity programs, crop insurance, conservation, agricultural research, and rural development. Nutrition assistance (SNAP) is budgeted under Income Security.',
    icon: '🌾',
  },
  {
    type: 'category',
    slug: 'science-medical-research',
    aliases: ['science-research-spending', 'science', 'medical-research', 'science-and-medical-research', 'nasa-spending', 'nasa', 'space-exploration'],
    name: 'Science, Space & Technology',
    h1Title: 'Science, Space & Technology Spending',
    sourceIdentifier: 'BUDGET_FUNC_250',
    classificationType: 'official',
    canonicalUrl: 'https://www.usaspending.us/categories/science-medical-research',
    description: 'Federal science, space and technology outlays: NASA space programs, National Science Foundation basic research, and Department of Energy science programs.',
    icon: '🔬',
  },
  {
    type: 'category',
    slug: 'education-training',
    aliases: ['education-spending', 'education', 'job-training', 'education-and-training'],
    name: 'Education & Training',
    h1Title: 'Education & Training Spending',
    sourceIdentifier: 'BUDGET_FUNC_500',
    classificationType: 'official',
    canonicalUrl: 'https://www.usaspending.us/categories/education-training',
    description: 'Federal Pell grants, student aid, K-12 Title I grants for low-income schools, special education (IDEA), and workforce development.',
    icon: '🎓',
  },
  {
    type: 'category',
    slug: 'defense-military',
    aliases: ['defense-spending', 'defense', 'military', 'defense-and-military'],
    name: 'Defense & Military',
    h1Title: 'Defense & Military Spending',
    sourceIdentifier: 'BUDGET_FUNC_050',
    classificationType: 'official',
    canonicalUrl: 'https://www.usaspending.us/categories/defense-military',
    description: 'National defense outlays, military operations, armed forces compensation, defense procurement, RDT&E technology, and base maintenance.',
    icon: '🛡️',
  },
  {
    type: 'category',
    slug: 'infrastructure-transport',
    aliases: ['transportation-spending', 'infrastructure', 'transportation', 'infrastructure-and-transport'],
    name: 'Infrastructure & Transportation',
    h1Title: 'Infrastructure & Transportation Spending',
    sourceIdentifier: 'BUDGET_FUNC_400',
    classificationType: 'official',
    canonicalUrl: 'https://www.usaspending.us/categories/infrastructure-transport',
    description: 'Federal highway grants, airport infrastructure, mass transit systems, Amtrak passenger rail, and civil works waterway projects.',
    icon: '🚆',
  },
  {
    type: 'category',
    slug: 'medicaid-spending',
    aliases: ['medicaid', 'health-spending', 'health-programs'],
    name: 'Health Programs',
    h1Title: 'Federal Health Programs Spending',
    sourceIdentifier: 'BUDGET_FUNC_550',
    classificationType: 'official',
    canonicalUrl: 'https://www.usaspending.us/categories/medicaid-spending',
    description: 'Federal health outlays: Medicaid and CHIP, Affordable Care Act marketplace subsidies, NIH biomedical research, and public health programs.',
    icon: '🏥',
  },
  {
    type: 'category',
    slug: 'social-security-spending',
    aliases: ['social-security'],
    name: 'Social Security',
    h1Title: 'Social Security Spending',
    sourceIdentifier: 'BUDGET_FUNC_650',
    classificationType: 'official',
    canonicalUrl: 'https://www.usaspending.us/categories/social-security-spending',
    description: 'Old-Age, Survivors, and Disability Insurance (OASDI) benefit outlays administered by the Social Security Administration.',
    icon: '👴',
  },
  {
    type: 'category',
    slug: 'medicare-spending',
    aliases: ['medicare'],
    name: 'Medicare',
    h1Title: 'Medicare Spending',
    sourceIdentifier: 'BUDGET_FUNC_570',
    classificationType: 'official',
    canonicalUrl: 'https://www.usaspending.us/categories/medicare-spending',
    description: 'Federal health insurance program outlays for seniors aged 65+ and eligible individuals administered by CMS.',
    icon: '🏥',
  },
  {
    type: 'category',
    slug: 'veterans-affairs-spending',
    aliases: ['veterans', 'veterans-spending'],
    name: 'Veterans Affairs',
    h1Title: 'Veterans Affairs Spending',
    sourceIdentifier: 'BUDGET_FUNC_700',
    classificationType: 'official',
    canonicalUrl: 'https://www.usaspending.us/categories/veterans-affairs-spending',
    description: 'Veterans health administration, disability pensions, education benefits, and national cemetery administration.',
    icon: '🎖️',
  },
  {
    type: 'category',
    slug: 'net-interest-spending',
    aliases: ['net-interest', 'interest-on-debt', 'debt-interest'],
    name: 'Net Interest',
    h1Title: 'Net Interest on the National Debt',
    sourceIdentifier: 'BUDGET_FUNC_900',
    classificationType: 'official',
    canonicalUrl: 'https://www.usaspending.us/categories/net-interest-spending',
    description: 'Net interest the federal government pays on the national debt — now larger than the defense budget.',
    icon: '💸',
  },
];

export const CANONICAL_AGENCIES: EntityConfig[] = [
  {
    type: 'agency',
    slug: 'department-of-transportation',
    aliases: ['dot', 'transportation-department', 'u-s-department-of-transportation'],
    name: 'Department of Transportation',
    h1Title: 'U.S. Department of Transportation Spending',
    sourceIdentifier: 'AGENCY_069',
    classificationType: 'official',
    canonicalUrl: 'https://www.usaspending.us/agencies/department-of-transportation',
    description: 'Federal executive agency responsible for ensuring fast, safe, efficient, accessible, and convenient transportation systems.',
    icon: '🏢',
  },
  {
    type: 'agency',
    slug: 'department-of-defense',
    aliases: ['dod', 'defense-department'],
    name: 'Department of Defense',
    h1Title: 'Department of Defense Spending',
    sourceIdentifier: 'AGENCY_097',
    classificationType: 'official',
    canonicalUrl: 'https://www.usaspending.us/agencies/department-of-defense',
    description: 'Executive department responsible for national security and armed forces operations.',
    icon: '🛡️',
  },
  {
    type: 'agency',
    slug: 'department-of-health-and-human-services',
    aliases: ['hhs', 'health-department'],
    name: 'Department of Health and Human Services',
    h1Title: 'Department of Health & Human Services Spending',
    sourceIdentifier: 'AGENCY_075',
    classificationType: 'official',
    canonicalUrl: 'https://www.usaspending.us/agencies/department-of-health-and-human-services',
    description: 'Executive department administering Medicare, Medicaid, NIH research, and public health programs.',
    icon: '🏥',
  },
];

export const CANONICAL_RECIPIENTS: EntityConfig[] = [
  {
    type: 'recipient',
    slug: 'boeing',
    aliases: ['boeing-company', 'the-boeing-company', 'boeing-co'],
    name: 'Boeing',
    h1Title: 'Federal Awards to Boeing',
    sourceIdentifier: 'UEI_DUNS-009256814',
    classificationType: 'official',
    canonicalUrl: 'https://www.usaspending.us/recipients/boeing',
    description: 'Global aerospace manufacturer and major federal prime contractor for military aircraft, space hardware, and defense systems.',
    icon: '✈️',
  },
  {
    type: 'recipient',
    slug: 'lockheed-martin',
    aliases: ['lockheed', 'lockheed-martin-corporation'],
    name: 'Lockheed Martin',
    h1Title: 'Federal Awards to Lockheed Martin',
    sourceIdentifier: 'UEI_DUNS-053075210',
    classificationType: 'official',
    canonicalUrl: 'https://www.usaspending.us/recipients/lockheed-martin',
    description: 'Defense, aerospace, security, and advanced technologies contractor manufacturing F-35 fighters and space systems.',
    icon: '🛡️',
  },
];

export function resolveCategoryEntity(slug?: string): EntityConfig | undefined {
  if (!slug || typeof slug !== 'string') return undefined;
  const norm = slug.toLowerCase().replace(/^\//, '').trim();
  return CANONICAL_CATEGORIES.find(
    (c) => c.slug === norm || c.aliases.includes(norm)
  );
}

export function resolveAgencyEntity(slug?: string): EntityConfig | undefined {
  if (!slug || typeof slug !== 'string') return undefined;
  const norm = slug.toLowerCase().replace(/^\//, '').trim();
  return CANONICAL_AGENCIES.find(
    (a) => a.slug === norm || a.aliases.includes(norm)
  );
}

export function resolveRecipientEntity(slug?: string): EntityConfig | undefined {
  if (!slug || typeof slug !== 'string') return undefined;
  const norm = slug.toLowerCase().replace(/^\//, '').trim();
  return CANONICAL_RECIPIENTS.find(
    (r) => r.slug === norm || r.aliases.includes(norm)
  );
}
