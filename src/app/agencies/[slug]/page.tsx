import React from 'react';
import { notFound, redirect } from 'next/navigation';
import { resolveAgencyEntity } from '@/lib/config/entities';
import AgencyDetailView from '@/components/agencies/AgencyDetailView';
import { getAgencyDataForFY } from '@/lib/data/spendingData';
import { formatCurrency } from '@/lib/utils/formatters';
import type { Metadata } from 'next';

interface Props {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const entity = resolveAgencyEntity(params.slug);

  if (!entity) {
    return {
      title: 'Agency Not Found — USA Spending',
    };
  }

  const agencyData = getAgencyDataForFY(entity.slug, 2026);
  const formattedBudget = agencyData ? formatCurrency(agencyData.budget, true) : '';

  let pageTitle = `${entity.h1Title} — FY2026 | USA Spending`;
  if (entity.slug === 'department-of-transportation') {
    pageTitle = `U.S. Department of Transportation Spending — FY2026 | USA Spending`;
  }

  return {
    title: pageTitle,
    description: `Official budget profile for ${entity.name} in FY2026 (${formattedBudget} budget). View program breakdowns, award types, spending by year line chart, top contractor recipients, and state distribution.`,
    alternates: {
      canonical: entity.canonicalUrl,
    },
  };
}

export default function AgencyPage({ params }: Props) {
  const entity = resolveAgencyEntity(params.slug);

  if (!entity) {
    notFound();
  }

  // Canonical Redirect enforcement
  if (entity.slug !== params.slug) {
    redirect(entity.canonicalUrl);
  }

  return <AgencyDetailView entity={entity} />;
}
