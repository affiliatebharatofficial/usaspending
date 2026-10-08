import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Breadcrumbs from '@/components/navigation/Breadcrumbs';
import ArticleView from '@/components/blog/ArticleView';
import { getArticleBySlug, getRelatedArticles, BLOG_ARTICLES } from '@/lib/blog/articles';
import type { Metadata } from 'next';

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return BLOG_ARTICLES.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const article = getArticleBySlug(params.slug);
  if (!article) return { title: 'Article Not Found — USA Spending' };
  return {
    title: `${article.title} | USA Spending`,
    description: article.description,
    alternates: {
      canonical: `https://www.usaspending.us/blog/${article.slug}`,
    },
    openGraph: {
      title: article.title,
      description: article.description,
      type: 'article',
      publishedTime: article.datePublished,
      modifiedTime: article.dateModified,
      url: `https://www.usaspending.us/blog/${article.slug}`,
    },
  };
}

export default function BlogArticlePage({ params }: Props) {
  const article = getArticleBySlug(params.slug);
  if (!article) notFound();

  const related = getRelatedArticles(article.slug, 2);

  return (
    <div className="space-y-6">
      <ArticleView article={article} related={related} />
    </div>
  );
}
