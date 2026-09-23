import React from 'react';
import Link from 'next/link';
import Breadcrumbs from '@/components/navigation/Breadcrumbs';
import WhereDoesMyMoneyGo from '@/components/calculators/WhereDoesMyMoneyGo';
import JsonLd from '@/components/seo/JsonLd';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Where Does My Money Go? — Estimated Federal Spending Share Calculator',
  description: 'Interactive tool illustrating how federal spending distributes across defense, healthcare, social security, education, and infrastructure based on income.',
  alternates: {
    canonical: 'https://www.usaspending.us/where-does-my-money-go',
  },
};

export default function WhereDoesMyMoneyGoPage() {
  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-10">
      <Breadcrumbs
        items={[
          { name: 'Calculators', url: '/calculators' },
          { name: 'Where Does My Money Go?', url: '/where-does-my-money-go' },
        ]}
      />

      <JsonLd
        type="TechArticle"
        data={{
          name: 'Where Does Federal Spending Go? Taxpayer Share Allocation Calculator',
          description: 'Illustrative mathematical allocation of federal spending by income bracket.',
          url: 'https://www.usaspending.us/where-does-my-money-go',
        }}
      />

      <WhereDoesMyMoneyGo />
    </div>
  );
}
