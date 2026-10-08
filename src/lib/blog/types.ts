/**
 * Blog article types for usaspending.us.
 * Articles are researched, data-driven stories built on the site's real
 * Treasury MTS numbers. Content lives in `src/lib/blog/content/*.ts`.
 */

export interface ArticleChartData {
  title: string;
  caption?: string;
  type: 'bar' | 'line';
  /** unit label shown on the Y axis, e.g. "$B" or "%" */
  unit?: string;
  data: { label: string; value: number }[];
  /** optional second series (line charts only) */
  series2Label?: string;
  series2Data?: { label: string; value: number }[];
}

export interface ArticleSection {
  id: string;
  heading: string;
  paragraphs: string[];
  bullets?: string[];
  callout?: { type: 'info' | 'tip' | 'warning'; text: string };
  chart?: ArticleChartData;
}

export interface ArticleFAQ {
  question: string;
  answer: string;
}

export interface ArticleSource {
  name: string;
  url: string;
}

export interface ArticleData {
  slug: string;
  /** ≤60 chars, target keyword near the front */
  title: string;
  /** ≤155 chars */
  description: string;
  keyword: string;
  /** "Data Stories" | "Explainers" | "State Spotlights" | "Comparisons" */
  category: string;
  datePublished: string; // YYYY-MM-DD
  dateModified: string; // YYYY-MM-DD
  readingTime: string; // e.g. "7 min read"
  quickTakeaways: { label: string; text: string }[];
  sections: ArticleSection[];
  faqs: ArticleFAQ[];
  sources: ArticleSource[];
  /** slugs of related articles; resolved by the registry */
  relatedSlugs?: string[];
}

export function estimateReadingTime(sections: ArticleSection[]): string {
  const words = sections.reduce(
    (n, s) =>
      n +
      s.heading.split(/\s+/).length +
      s.paragraphs.join(' ').split(/\s+/).length +
      (s.bullets || []).join(' ').split(/\s+/).length,
    0
  );
  return `${Math.max(3, Math.round(words / 200))} min read`;
}
