import React from 'react';
import InfoPageLayout from '@/components/layout/InfoPageLayout';
import JsonLd from '@/components/seo/JsonLd';
import { SITE_CONFIG } from '@/lib/config/site';
import { ExternalLink, Database, CheckCircle2 } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: `USA Spending Data Sources | Official Government Data`,
  description: `Complete list of official U.S. government data sources, API endpoints, and Treasury datasets powering USA Spending visualizations.`,
};

export default function DataSourcesPage() {
  const toc = [
    { id: 'primary-source', title: '1. Primary Source — USAspending.gov' },
    { id: 'treasury-source', title: '2. U.S. Treasury Fiscal Data' },
    { id: 'source-table', title: '3. Source-by-Data-Type Table' },
    { id: 'attribution', title: '4. Source Attribution & Links' },
    { id: 'freshness', title: '5. Data Freshness & Pipeline Policy' },
  ];

  return (
    <InfoPageLayout
      title="Official Data Sources"
      subtitle="Complete transparency on government APIs, Treasury datasets, and public data streams."
      breadcrumbName="Data Sources"
      breadcrumbUrl="/data-sources"
      toc={toc}
    >
      <JsonLd
        type="TechArticle"
        data={{
          name: 'USA Spending Official Data Sources',
          description: 'Official government data sources and API endpoints used on USA Spending.',
          url: '/data-sources',
        }}
      />

      <section id="primary-source" className="data-card p-6 sm:p-8 rounded-xl border border-slate-200 bg-white space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-black text-slate-900">1. Primary Source — USAspending.gov</h2>
          <span className="px-2.5 py-1 rounded bg-emerald-100 text-emerald-900 text-xs font-bold flex items-center gap-1">
            <CheckCircle2 className="w-3.5 h-3.5" />
            Official Government Source
          </span>
        </div>
        <p className="text-slate-600 text-sm leading-relaxed">
          <strong>USAspending.gov</strong> is the official open data portal for U.S. federal spending information, established pursuant to the Federal Funding Accountability and Transparency Act (FFATA) and the DATA Act.
        </p>
        <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs space-y-2">
          <div className="font-mono text-blue-900 font-bold">API Base Endpoint: https://api.usaspending.gov</div>
          <p className="text-slate-600">
            USA Spending consumes official REST API feeds (`/api/v2/spending/by_category/`, `/api/v2/awards/`, `/api/v2/search/spending_by_award/`) to ingest verified prime contracts, grants, direct loans, and agency outlays.
          </p>
          <a
            href="https://www.usaspending.gov"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-blue-700 font-bold hover:underline pt-1"
          >
            <span>Visit USAspending.gov Official Website</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </section>

      <section id="treasury-source" className="data-card p-6 sm:p-8 rounded-xl border border-slate-200 bg-white space-y-4">
        <h2 className="text-2xl font-black text-slate-900">2. U.S. Treasury Fiscal Data</h2>
        <p className="text-slate-600 text-sm leading-relaxed">
          For historical national debt and monthly Treasury statement context, the platform utilizes public data API streams from:
        </p>
        <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs space-y-2">
          <div className="font-mono text-blue-900 font-bold">API Base Endpoint: https://api.fiscaldata.treasury.gov</div>
          <p className="text-slate-600">
            Used for official federal deficit totals, national debt aggregates, and fiscal year revenue totals.
          </p>
          <a
            href="https://fiscaldata.treasury.gov"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-blue-700 font-bold hover:underline pt-1"
          >
            <span>Visit Fiscal Data Treasury Official Website</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </section>

      <section id="source-table" className="data-card p-6 sm:p-8 rounded-xl border border-slate-200 bg-white space-y-4">
        <h2 className="text-2xl font-black text-slate-900">3. Source-by-Data-Type Table</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs font-mono">
            <thead>
              <tr className="border-b border-slate-200 text-slate-500 font-sans uppercase">
                <th className="pb-3 font-semibold">Data Category</th>
                <th className="pb-3 font-semibold">Official Source</th>
                <th className="pb-3 font-semibold">Purpose & Application</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-800">
              <tr>
                <td className="py-3 font-sans font-bold text-slate-900">Federal Outlays & Categories</td>
                <td className="py-3 font-bold text-blue-900">USAspending.gov API</td>
                <td className="py-3 font-sans text-slate-600">Category spending & Donut Chart breakdowns</td>
              </tr>
              <tr>
                <td className="py-3 font-sans font-bold text-slate-900">Federal Agency Outlays</td>
                <td className="py-3 font-bold text-blue-900">USAspending.gov API</td>
                <td className="py-3 font-sans text-slate-600">Department & Agency Explorer profiles</td>
              </tr>
              <tr>
                <td className="py-3 font-sans font-bold text-slate-900">State Geographic Allocations</td>
                <td className="py-3 font-bold text-blue-900">USAspending.gov API</td>
                <td className="py-3 font-sans text-slate-600">50-State Explorer & U.S. Map</td>
              </tr>
              <tr>
                <td className="py-3 font-sans font-bold text-slate-900">Prime Recipient Awards</td>
                <td className="py-3 font-bold text-blue-900">USAspending.gov API</td>
                <td className="py-3 font-sans text-slate-600">Recipient contracts, grants & awards profiles</td>
              </tr>
              <tr>
                <td className="py-3 font-sans font-bold text-slate-900">Population Baselines</td>
                <td className="py-3 font-bold text-blue-900">U.S. Census Bureau</td>
                <td className="py-3 font-sans text-slate-600">Per-capita spending calculations</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section id="attribution" className="data-card p-6 sm:p-8 rounded-xl border border-slate-200 bg-white space-y-4">
        <h2 className="text-2xl font-black text-slate-900">4. Source Attribution & Links</h2>
        <p className="text-slate-600 text-sm leading-relaxed">
          Every major visualization card and detail view on USA Spending includes explicit source badges, metric type labels, fiscal year references, and data freshness timestamps.
        </p>
      </section>

      <section id="freshness" className="data-card p-6 sm:p-8 rounded-xl border border-slate-200 bg-white space-y-4">
        <h2 className="text-2xl font-black text-slate-900">5. Data Freshness & Pipeline Policy</h2>
        <p className="text-slate-600 text-sm leading-relaxed">
          Federal reporting feeds are updated periodically. In the event of upstream API rate limits or maintenance, cached validated datasets ensure site availability without sacrificing accuracy.
        </p>
      </section>
    </InfoPageLayout>
  );
}
