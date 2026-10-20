/**
 * Blog article registry.
 * Each article's content lives in `src/lib/blog/content/<camelCase>.ts`
 * and exports a `data: ArticleData` const. Add the import + entry below
 * when publishing a new article.
 */
import type { ArticleData } from './types';

import { data as usDebtInterestVsDefenseSpending } from './content/usDebtInterestVsDefenseSpending';
import { data as whereDoesUsFederalBudgetGo } from './content/whereDoesUsFederalBudgetGo';
import { data as federalSpendingTexas } from './content/federalSpendingTexas';

import { data as howMuchUsSpendsPerSecond } from './content/howMuchUsSpendsPerSecond';
import { data as studentLoanAccountingEducationSpending } from './content/studentLoanAccountingEducationSpending';
import { data as medicareVsSocialSecuritySpending } from './content/medicareVsSocialSecuritySpending';
import { data as federalSpendingVirginia } from './content/federalSpendingVirginia';
import { data as deficitVsDebtVsInterestExplained } from './content/deficitVsDebtVsInterestExplained';
import { data as federalDeficit2026HowBig } from './content/federalDeficit2026HowBig';
import { data as fy2026FederalSpendingFinalNumbers } from './content/fy2026FederalSpendingFinalNumbers';
import { data as federalSpendingCalifornia } from './content/federalSpendingCalifornia';
import { data as whatIsMandatoryVsDiscretionarySpending } from './content/whatIsMandatoryVsDiscretionarySpending';

export const BLOG_ARTICLES: ArticleData[] = [
  usDebtInterestVsDefenseSpending,
  whereDoesUsFederalBudgetGo,
  federalSpendingTexas,
  howMuchUsSpendsPerSecond,
  studentLoanAccountingEducationSpending,
  medicareVsSocialSecuritySpending,
  federalSpendingVirginia,
  deficitVsDebtVsInterestExplained,
  federalDeficit2026HowBig,
  fy2026FederalSpendingFinalNumbers,
  federalSpendingCalifornia,
  whatIsMandatoryVsDiscretionarySpending,
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
