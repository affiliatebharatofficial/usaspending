/**
 * Blog article registry.
 * Each article's content lives in `src/lib/blog/content/<camelCase>.ts`
 * and exports a `data: ArticleData` const. Add the import + entry below
 * when publishing a new article.
 */
import type { ArticleData } from './types';

import { data as usDebtInterestVsDefenseSpending } from './content/usDebtInterestVsDefenseSpending';
import { data as whereDoesUsFederalBudgetGo } from './content/whereDoesUsFederalBudgetGo';

export const BLOG_ARTICLES: ArticleData[] = [
  usDebtInterestVsDefenseSpending,
  whereDoesUsFederalBudgetGo,
];

export function getArticleBySlug(slug: string): ArticleData | undefined {
  return BLOG_ARTICLES.find((a) => a.slug === slug);
}

export function getRelatedArticles(slug: string, count = 2): ArticleData[] {
  const current = getArticleBySlug(slug);
  if (!current) return [];
  const sameCategory = BLOG_ARTICLES.filter(
    (a) => a.slug !== slug && a.category === current.category
  );
  const others = BLOG_ARTICLES.filter(
    (a) => a.slug !== slug && a.category !== current.category
  );
  return [...sameCategory, ...others].slice(0, count);
}
