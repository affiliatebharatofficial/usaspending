import { CANONICAL_CATEGORIES, resolveCategoryEntity } from '../config/entities';

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

export const CATEGORY_REGISTRY: CategoryDefinition[] = CANONICAL_CATEGORIES.map((cat) => ({
  id: cat.slug,
  name: cat.name,
  slug: cat.slug,
  description: cat.description,
  categoryType: cat.classificationType as CategoryType,
  sourceIdentifier: cat.sourceIdentifier,
  sourceUrl: 'https://www.usaspending.gov/search',
  isActive: true,
  icon: cat.icon,
}));

export function getCategoryBySlug(slug: string): CategoryDefinition | undefined {
  const entity = resolveCategoryEntity(slug);
  if (!entity) return undefined;
  return CATEGORY_REGISTRY.find((c) => c.slug === entity.slug);
}
