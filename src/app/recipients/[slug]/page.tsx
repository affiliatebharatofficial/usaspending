import React from 'react';
import { notFound, redirect } from 'next/navigation';
import { resolveRecipientEntity } from '@/lib/config/entities';
import RecipientDetailView from '@/components/recipients/RecipientDetailView';
import { getRecipientDataForFY } from '@/lib/data/spendingData';
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

  const recipientData = getRecipientDataForFY(entity.slug, 2026);
  const formattedAwards = recipientData ? formatCurrency(recipientData.totalAwards, true) : '';

  let pageTitle = `${entity.h1Title} — FY2026 | USA Spending`;
  if (entity.slug === 'boeing') {
    pageTitle = `Federal Awards to Boeing — FY2026 | USA Spending`;
  }

  return {
    title: pageTitle,
    description: `Detailed analysis of ${entity.name} federal awards in FY2026 (${formattedAwards} in active federal prime awards). View contract breakdown, awarding executive agencies, historical timeline, top performance states, and award details.`,
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
