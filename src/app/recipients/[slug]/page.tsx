import React from 'react';
import { notFound, redirect } from 'next/navigation';
import { resolveRecipientEntity } from '@/lib/config/entities';
import RecipientDetailView from '@/components/recipients/RecipientDetailView';
import { getRecipientDataForFY, CURRENT_FISCAL_YEAR } from '@/lib/data/spendingData';
import { formatCurrency } from '@/lib/utils/formatters';
import type { Metadata } from 'next';

interface Props {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const entity = resolveRecipientEntity(params.slug);

  if (!entity) {
    return {
      title: 'Recipient Not Found — USA Spending',
    };
  }

  const recipientData = getRecipientDataForFY(entity.slug, CURRENT_FISCAL_YEAR);
  const formattedAwards = recipientData ? formatCurrency(recipientData.totalAwards, true) : '';

  let pageTitle = `${entity.h1Title} — FY2027 | USA Spending`;
  if (entity.slug === 'boeing') {
    pageTitle = `Federal Awards to Boeing — FY2027 | USA Spending`;
  }

  return {
    title: pageTitle,
    description: `Explore federal prime awards to ${entity.name} in FY2027 (${formattedAwards}). View awarding executive agencies, contract breakdowns, and performance states.`,
    alternates: {
      canonical: entity.canonicalUrl,
    },
  };
}

export default function RecipientPage({ params }: Props) {
  const entity = resolveRecipientEntity(params.slug);

  if (!entity) {
    notFound();
  }

  // Canonical Redirect enforcement
  if (entity.slug !== params.slug) {
    redirect(entity.canonicalUrl);
  }

  return <RecipientDetailView entity={entity} />;
}
