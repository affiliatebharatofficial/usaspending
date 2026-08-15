import React from 'react';
import InfoPageLayout from '@/components/layout/InfoPageLayout';
import JsonLd from '@/components/seo/JsonLd';
import { SITE_CONFIG } from '@/lib/config/site';
import { ShieldAlert, AlertTriangle } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: `USA Spending Disclaimer | Independent Data Notice`,
  description: `Read the official legal disclaimer for USA Spending regarding independent status, data accuracy, rate models, and non-affiliation.`,
  alternates: {
    canonical: 'https://www.usaspending.us/disclaimer',
  },
};

export default function DisclaimerPage() {
  const toc = [
    { id: 'independent-disclaimer', title: '1. Independent Website Notice' },
    { id: 'accuracy-disclaimer', title: '2. Data Accuracy & Revisions' },
    { id: 'no-affiliation', title: '3. No Government Affiliation' },
    { id: 'informational-purpose', title: '4. Informational Purpose Only' },
    { id: 'calculator-disclaimer', title: '5. Calculator & Rate Estimates' },
    { id: 'per-capita-disclaimer', title: '6. Per-Capita Figures' },
    { id: 'external-links', title: '7. External Links Disclaimer' },
  ];

  return (
    <InfoPageLayout
      title="Legal Disclaimer"
      subtitle="Important disclosures regarding independent project status, data accuracy, rate models, and non-affiliation."
      breadcrumbName="Disclaimer"
      breadcrumbUrl="/disclaimer"
      toc={toc}
    >
      <JsonLd
        type="TechArticle"
        data={{
          name: 'USA Spending Legal Disclaimer',
          description: 'Official legal disclaimer and notices for USA Spending.',
          url: '/disclaimer',
        }}
      />

      <section id="independent-disclaimer" className="data-card p-6 sm:p-8 rounded-xl border border-amber-300 bg-amber-50/60 space-y-3">
        <div className="flex items-center gap-2 text-amber-900 font-bold text-lg">
          <ShieldAlert className="w-5 h-5 text-amber-600" />
          <span>1. Independent Website Disclaimer</span>
        </div>
        <p className="text-slate-800 text-xs leading-relaxed font-semibold">
          {SITE_CONFIG.disclaimerNotice}
        </p>
      </section>

      <section id="accuracy-disclaimer" className="data-card p-6 sm:p-8 rounded-xl border border-slate-200 bg-white space-y-4">
        <h2 className="text-2xl font-black text-slate-900">2. Data Accuracy & Revisions</h2>
        <p className="text-slate-600 text-sm leading-relaxed">
          While reasonable efforts are made to ingest and display verified public government datasets, USA Spending does not guarantee complete accuracy, uninterrupted availability, or error-free content. Federal accounting records are subject to retrospective agency reporting revisions.
        </p>
      </section>

      <section id="no-affiliation" className="data-card p-6 sm:p-8 rounded-xl border border-slate-200 bg-white space-y-4">
        <h2 className="text-2xl font-black text-slate-900">3. No Government Affiliation</h2>
        <p className="text-slate-600 text-sm leading-relaxed">
          This website does not represent the U.S. Government, USAspending.gov, the U.S. Department of the Treasury, the Department of Defense, or any government agency. Official government sites can be identified by their `.gov` domain extension.
        </p>
      </section>

      <section id="informational-purpose" className="data-card p-6 sm:p-8 rounded-xl border border-slate-200 bg-white space-y-4">
        <h2 className="text-2xl font-black text-slate-900">4. Informational Purpose Only</h2>
        <p className="text-slate-600 text-sm leading-relaxed">
          All data, charts, calculators, and analytical views provided on USA Spending are strictly for general educational and research purposes. Content does not constitute legal, tax, financial, accounting, or professional investment advice.
        </p>
      </section>

      <section id="calculator-disclaimer" className="data-card p-6 sm:p-8 rounded-xl border border-slate-200 bg-white space-y-4">
        <h2 className="text-2xl font-black text-slate-900">5. Calculator & Rate Estimates</h2>
        <p className="text-slate-600 text-sm leading-relaxed">
          Per-second, per-minute, and per-hour spending rate figures are mathematical conversions derived from annual fiscal-year budgets. They do not represent live electronic bank wire transactions occurring every second.
        </p>
      </section>

      <section id="per-capita-disclaimer" className="data-card p-6 sm:p-8 rounded-xl border border-slate-200 bg-white space-y-4">
        <h2 className="text-2xl font-black text-slate-900">6. Per-Capita Figures</h2>
        <p className="text-slate-600 text-sm leading-relaxed">
          Per-resident spending metrics are mathematical quotients (spending ÷ population baseline). They do not imply direct personal payments received by residents or individual tax burdens.
        </p>
      </section>

      <section id="external-links" className="data-card p-6 sm:p-8 rounded-xl border border-slate-200 bg-white space-y-4">
        <h2 className="text-2xl font-black text-slate-900">7. External Links Disclaimer</h2>
        <p className="text-slate-600 text-sm leading-relaxed">
          Links to third-party or government websites (such as USAspending.gov) are provided for reference convenience. USA Spending does not control external websites or assume liability for their content.
        </p>
      </section>
    </InfoPageLayout>
  );
}
