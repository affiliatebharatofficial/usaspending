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
import { data as defenseVsEducationSpending } from './content/defenseVsEducationSpending';
import { data as veteransBenefitsSpendingBreakdown } from './content/veteransBenefitsSpendingBreakdown';
import { data as federalSpendingFlorida } from './content/federalSpendingFlorida';
import { data as howFederalBudgetProcessWorks } from './content/howFederalBudgetProcessWorks';
import { data as socialSecurityVsDefenseSpending } from './content/socialSecurityVsDefenseSpending';
import { data as snapFoodAssistanceSpendingExplained } from './content/snapFoodAssistanceSpendingExplained';
import { data as federalSpendingNewYork } from './content/federalSpendingNewYork';
import { data as whatIsDebtCeiling } from './content/whatIsDebtCeiling';
import { data as interestPaymentsVsAgencyBudgets } from './content/interestPaymentsVsAgencyBudgets';
import { data as medicareSpendingGrowthTrend } from './content/medicareSpendingGrowthTrend';
import { data as federalSpendingAlaska } from './content/federalSpendingAlaska';

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
  defenseVsEducationSpending,
  veteransBenefitsSpendingBreakdown,
  federalSpendingFlorida,
  howFederalBudgetProcessWorks,
  socialSecurityVsDefenseSpending,
  snapFoodAssistanceSpendingExplained,
  federalSpendingNewYork,
  whatIsDebtCeiling,
  interestPaymentsVsAgencyBudgets,
  medicareSpendingGrowthTrend,
  federalSpendingAlaska,
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
