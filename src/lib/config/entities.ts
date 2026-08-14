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
    slug: 'nasa-space-exploration',
    aliases: ['nasa-spending', 'nasa', 'space-exploration', 'nasa-and-space-exploration'],
    name: 'NASA & Space Exploration',
    h1Title: 'NASA & Space Exploration Spending',
    sourceIdentifier: 'AGENCY_080',
    classificationType: 'official',
    canonicalUrl: '/categories/nasa-space-exploration',
    description: 'Federal outlays for aeronautics research, Artemis moon missions, space exploration, satellite operations, and scientific discovery.',
    icon: '🚀',
  },
  {
    type: 'category',
    slug: 'agriculture-food-assistance',
    aliases: ['agriculture-spending', 'agriculture', 'food-assistance', 'agriculture-and-food-assistance'],
    name: 'Agriculture & Food Assistance',
    h1Title: 'Agriculture & Food Assistance Spending',
    sourceIdentifier: 'BUDGET_FUNC_350',
    classificationType: 'official',
    canonicalUrl: '/categories/agriculture-food-assistance',
    description: 'Supplemental Nutrition Assistance Program (SNAP), crop insurance, farm subsidies, rural development, and agricultural research.',
    icon: '🌾',
  },
  {
    type: 'category',
    slug: 'science-medical-research',
    aliases: ['science-research-spending', 'science', 'medical-research', 'science-and-medical-research'],
    name: 'Science & Medical Research',
    h1Title: 'Science & Medical Research Spending',
    sourceIdentifier: 'DERIVED_NIH_NSF',
    classificationType: 'derived',
    canonicalUrl: '/categories/science-medical-research',
    description: 'Biomedical grants administered by the National Institutes of Health (NIH), basic science grants from the National Science Foundation (NSF), and scientific standards.',
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
    canonicalUrl: '/categories/education-training',
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
    canonicalUrl: '/categories/defense-military',
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
    canonicalUrl: '/categories/infrastructure-transport',
    description: 'Federal highway grants, airport infrastructure, mass transit systems, Amtrak passenger rail, and civil works waterway projects.',
    icon: '🚆',
  },
  {
    type: 'category',
    slug: 'medicaid-spending',
    aliases: ['medicaid', 'medicaid-and-health'],
    name: 'Medicaid',
    h1Title: 'Medicaid Spending',
    sourceIdentifier: 'BUDGET_FUNC_550_MEDICAID',
    classificationType: 'official',
    canonicalUrl: '/categories/medicaid-spending',
    description: 'Joint federal-state health assistance program outlays for eligible low-income individuals, children, pregnant women, elderly, and people with disabilities.',
    icon: '🩺',
  },
  {
    type: 'category',
    slug: 'social-security-spending',
    aliases: ['social-security'],
    name: 'Social Security',
    h1Title: 'Social Security Spending',
    sourceIdentifier: 'BUDGET_FUNC_650',
    classificationType: 'official',
    canonicalUrl: '/categories/social-security-spending',
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
    canonicalUrl: '/categories/medicare-spending',
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
    canonicalUrl: '/categories/veterans-affairs-spending',
    description: 'Veterans health administration, disability pensions, education benefits, and national cemetery administration.',
    icon: '🎖️',
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
    canonicalUrl: '/agencies/department-of-transportation',
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
    canonicalUrl: '/agencies/department-of-defense',
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
    canonicalUrl: '/agencies/department-of-health-and-human-services',
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
    canonicalUrl: '/recipients/boeing',
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
    canonicalUrl: '/recipients/lockheed-martin',
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
