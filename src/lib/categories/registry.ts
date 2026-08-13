export type CategoryType = 'official' | 'derived' | 'editorial';

export interface CategoryDefinition {
  id: string;
  name: string;
  slug: string;
  description: string;
  categoryType: CategoryType;
  sourceIdentifier?: string;
  sourceUrl: string;
  isActive: boolean;
  icon?: string;
}

export const CATEGORY_REGISTRY: CategoryDefinition[] = [
  {
    id: 'cat-social-security',
    name: 'Social Security',
    slug: 'social-security-spending',
    description: 'Old-Age, Survivors, and Disability Insurance (OASDI) benefit outlays administered by the Social Security Administration.',
    categoryType: 'official',
    sourceIdentifier: 'BUDGET_FUNC_650',
    sourceUrl: 'https://www.usaspending.gov/search',
    isActive: true,
    icon: '👴',
  },
  {
    id: 'cat-medicare',
    name: 'Medicare',
    slug: 'medicare-spending',
    description: 'Federal health insurance program outlays for seniors and eligible individuals administered by CMS.',
    categoryType: 'official',
    sourceIdentifier: 'BUDGET_FUNC_570',
    sourceUrl: 'https://www.usaspending.gov/search',
    isActive: true,
    icon: '🏥',
  },
  {
    id: 'cat-defense',
    name: 'Defense & Military',
    slug: 'defense-spending',
    description: 'National defense outlays, military operations, procurement, R&D, and weapon systems financing.',
    categoryType: 'official',
    sourceIdentifier: 'BUDGET_FUNC_050',
    sourceUrl: 'https://www.usaspending.gov/search',
    isActive: true,
    icon: '🛡️',
  },
  {
    id: 'cat-medicaid',
    name: 'Medicaid & Health Services',
    slug: 'medicaid-spending',
    description: 'Grants to states for Medicaid healthcare assistance, public health programs, and medical research.',
    categoryType: 'official',
    sourceIdentifier: 'BUDGET_FUNC_550',
    sourceUrl: 'https://www.usaspending.gov/search',
    isActive: true,
    icon: '🩺',
  },
  {
    id: 'cat-veterans',
    name: 'Veterans Affairs',
    slug: 'veterans-affairs-spending',
    description: 'Veterans benefits, medical care facilities, disability compensation, and GI Bill education outlays.',
    categoryType: 'official',
    sourceIdentifier: 'BUDGET_FUNC_700',
    sourceUrl: 'https://www.usaspending.gov/search',
    isActive: true,
    icon: '🎖️',
  },
  {
    id: 'cat-education',
    name: 'Education & Training',
    slug: 'education-spending',
    description: 'Pell grants, federal student aid, Title I elementary education grants, and job training programs.',
    categoryType: 'official',
    sourceIdentifier: 'BUDGET_FUNC_500',
    sourceUrl: 'https://www.usaspending.gov/search',
    isActive: true,
    icon: '🎓',
  },
  {
    id: 'cat-agriculture',
    name: 'Agriculture & Food Assistance',
    slug: 'agriculture-spending',
    description: 'Supplemental Nutrition Assistance Program (SNAP), farm subsidies, crop insurance, and agricultural research.',
    categoryType: 'official',
    sourceIdentifier: 'BUDGET_FUNC_350',
    sourceUrl: 'https://www.usaspending.gov/search',
    isActive: true,
    icon: '🌾',
  },
  {
    id: 'cat-transportation',
    name: 'Infrastructure & Transport',
    slug: 'transportation-spending',
    description: 'Highway construction grants, Federal Aviation Administration (FAA), Amtrak, and transit infrastructure.',
    categoryType: 'official',
    sourceIdentifier: 'BUDGET_FUNC_400',
    sourceUrl: 'https://www.usaspending.gov/search',
    isActive: true,
    icon: '🚆',
  },
  {
    id: 'cat-science',
    name: 'Science & Medical Research',
    slug: 'science-research-spending',
    description: 'National Institutes of Health (NIH) biomedical grants, National Science Foundation (NSF), and scientific research.',
    categoryType: 'derived',
    sourceIdentifier: 'BUDGET_FUNC_250',
    sourceUrl: 'https://www.usaspending.gov/search',
    isActive: true,
    icon: '🔬',
  },
  {
    id: 'cat-nasa',
    name: 'NASA & Space Exploration',
    slug: 'nasa-spending',
    description: 'Aeronautics research, Artemis lunar exploration, space telescope operations, and space science missions.',
    categoryType: 'official',
    sourceIdentifier: 'AGENCY_080',
    sourceUrl: 'https://www.usaspending.gov/agency/national-aeronautics-and-space-administration',
    isActive: true,
    icon: '🚀',
  },
];

export function getCategoryBySlug(slug: string): CategoryDefinition | undefined {
  const normalized = slug.toLowerCase().replace(/^\//, '');
  return CATEGORY_REGISTRY.find(
    (c) => c.slug === normalized || c.slug === `${normalized}-spending` || `${c.slug}-spending` === normalized
  );
}
