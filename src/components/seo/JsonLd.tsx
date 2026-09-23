import React from 'react';

interface JsonLdProps {
  type: 'WebSite' | 'BreadcrumbList' | 'Dataset' | 'CollectionPage' | 'AboutPage' | 'TechArticle' | 'FAQPage' | 'Person';
  data: any;
}

export default function JsonLd({ type, data }: JsonLdProps) {
  let schema: any = {};

  if (type === 'WebSite') {
    schema = {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'USA Spending',
      url: 'https://www.usaspending.us',
      potentialAction: {
        '@type': 'SearchAction',
        target: 'https://www.usaspending.us/search?q={search_term_string}',
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
        item: `https://www.usaspending.us${item.url.startsWith('http') ? item.url : 'https://www.usaspending.us' + item.url}`,
      })),
    };
  } else if (type === 'Dataset') {
    schema = {
      '@context': 'https://schema.org',
      '@type': 'Dataset',
      name: data.name || 'U.S. Federal Government Spending Data',
      description: data.description || 'Verified public spending dataset sourced from USAspending.gov API.',
      url: data.url ? (data.url.startsWith('http') ? data.url : `https://www.usaspending.us${data.url}`) : 'https://www.usaspending.us',
      isAccessibleForFree: true,
      creator: {
        '@type': 'Organization',
        name: 'U.S. Department of the Treasury / USAspending.gov',
      },
      temporalCoverage: '2018-01-01/2026-09-30',
    };
  } else if (type === 'FAQPage') {
    schema = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: (data || []).map((faq: { question: string; answer: string }) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer,
        },
      })),
    };
  } else if (type === 'Person') {
    schema = {
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: data.name || 'Firoz Khan',
      jobTitle: data.jobTitle || 'Independent Web Developer & Data Visualization Developer',
      url: data.url ? (data.url.startsWith('http') ? data.url : `https://www.usaspending.us${data.url}`) : 'https://www.usaspending.us/about/firoz-khan',
      sameAs: data.sameAs || [
        'https://github.com/fkdigitalmedia',
        'https://www.linkedin.com/in/firoz-khan-1153358a/',
      ],
      worksFor: {
        '@type': 'Organization',
        name: 'USA Spending',
        url: 'https://www.usaspending.us',
      },
      knowsAbout: [
        'Web Development',
        'Data Visualization',
        'REST API Integration',
        'Public Data Transparency',
      ],
    };
  } else if (type === 'CollectionPage' || type === 'AboutPage' || type === 'TechArticle') {
    schema = {
      '@context': 'https://schema.org',
      '@type': type,
      name: data.name,
      description: data.description,
      url: data.url.startsWith('http') ? data.url : `https://www.usaspending.us${data.url}`,
    };
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
