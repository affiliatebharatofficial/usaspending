import React from 'react';
import { notFound, redirect } from 'next/navigation';
import { resolveCategoryEntity } from '@/lib/config/entities';
import CategoryDetailView from '@/components/categories/CategoryDetailView';
import { getCategoryDataForFY } from '@/lib/data/spendingData';
import { formatCurrency } from '@/lib/utils/formatters';
import type { Metadata } from 'next';

interface Props {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const entity = resolveCategoryEntity(params.slug);

  if (!entity) {
    return {
      title: 'Category Not Found — USA Spending',
    };
  }

  const categoryData = getCategoryDataForFY(entity.slug, 2026);
  const formattedAmount = categoryData ? formatCurrency(categoryData.amount, true) : '';

  let pageTitle = `U.S. ${entity.name} Spending — FY2026 | USA Spending`;
  if (entity.slug === 'nasa-space-exploration') {
    pageTitle = `NASA & Space Exploration Spending — FY2026 | USA Spending`;
  } else if (entity.slug === 'defense-military') {
    pageTitle = `U.S. Defense & Military Spending — FY2026 | USA Spending`;
  } else if (entity.slug === 'education-training') {
    pageTitle = `U.S. Education & Training Spending — FY2026 | USA Spending`;
  }

  return {
    title: pageTitle,
    description: `Explore ${entity.name} in FY2026 (${formattedAmount}). View subcategory breakdowns, 8-year historical trends, top agencies, and primary recipients.`,
    alternates: {
      canonical: entity.canonicalUrl,
    },
  };
}

export default function CategoryPage({ params }: Props) {
  const entity = resolveCategoryEntity(params.slug);

  if (!entity) {
    notFound();
  }

  // Canonical Redirect enforcement
  if (entity.slug !== params.slug) {
    redirect(entity.canonicalUrl);
  }

  return <CategoryDetailView entity={entity} />;
}
