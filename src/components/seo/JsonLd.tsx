import React from 'react';

interface JsonLdProps {
  type: 'WebSite' | 'BreadcrumbList' | 'Dataset' | 'CollectionPage' | 'AboutPage' | 'TechArticle';
  data: any;
}

export default function JsonLd({ type, data }: JsonLdProps) {
  let schema: any = {};

  if (type === 'WebSite') {
    schema = {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'USA Spending',
      url: 'https://usa-spending.com',
      potentialAction: {
        '@type': 'SearchAction',
        target: 'https://usa-spending.com/search?q={search_term_string}',
        'query-input': 'required name=search_term_string',
      },
    };
  } else if (type === 'BreadcrumbList') {
    schema = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: data.map((item: { name: string; url: string }, index: number) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: item.name,
        item: `https://usa-spending.com${item.url}`,
      })),
    };
  } else if (type === 'Dataset') {
    schema = {
      '@context': 'https://schema.org',
      '@type': 'Dataset',
      name: data.name || 'U.S. Federal Government Spending Data',
      description: data.description || 'Verified public spending dataset sourced from USAspending.gov API.',
      url: data.url || 'https://usa-spending.com',
      isAccessibleForFree: true,
      creator: {
        '@type': 'Organization',
        name: 'U.S. Department of the Treasury / USAspending.gov',
      },
      temporalCoverage: '2018-01-01/2026-09-30',
    };
  } else if (type === 'CollectionPage' || type === 'AboutPage' || type === 'TechArticle') {
    schema = {
      '@context': 'https://schema.org',
      '@type': type,
      name: data.name,
      description: data.description,
      url: `https://usa-spending.com${data.url}`,
    };
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
