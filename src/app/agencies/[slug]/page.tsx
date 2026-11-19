import React from 'react';
import { notFound, redirect } from 'next/navigation';
import { resolveAgencyEntity } from '@/lib/config/entities';
import AgencyDetailView from '@/components/agencies/AgencyDetailView';
import { getAgencyDataForFY, CURRENT_FISCAL_YEAR } from '@/lib/data/spendingData';
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

  const agencyData = getAgencyDataForFY(entity.slug, CURRENT_FISCAL_YEAR);
  const formattedBudget = agencyData ? formatCurrency(agencyData.budget, true) : '';

  let pageTitle = `${entity.h1Title} — FY2027 | USA Spending`;
  if (entity.slug === 'department-of-transportation') {
    pageTitle = `U.S. Department of Transportation Spending — FY2027 | USA Spending`;
  }

  return {
    title: pageTitle,
    description: `Explore ${entity.name} budget outlays and awards in FY2027 (${formattedBudget}). View major programs, spending by year trends, and top contractors.`,
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
