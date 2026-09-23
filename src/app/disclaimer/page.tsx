import React from 'react';
import Link from 'next/link';
import InfoPageLayout from '@/components/layout/InfoPageLayout';
import JsonLd from '@/components/seo/JsonLd';
import { SITE_CONFIG } from '@/lib/config/site';
import {
  ShieldAlert,
  AlertTriangle,
  Database,
  Calculator,
  RefreshCw,
  MapPin,
  Clock,
  DollarSign,
  Flag,
  FileText,
  UserCheck
} from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'USA Spending Disclaimer | Independent Data Notice & Legal Disclosures',
  description: 'Official legal disclaimer for USAspending.us covering independent project status, public data sources, calculated rates, geographic attribution, and non-affiliation.',
  alternates: {
    canonical: 'https://www.usaspending.us/disclaimer',
  },
};

export default function DisclaimerPage() {
  const toc = [
    { id: 'independent-project', title: '1. Independent Project' },
    { id: 'data-sources', title: '2. Data Sources' },
    { id: 'calculated-values', title: '3. Calculated Values' },
    { id: 'data-accuracy', title: '4. Data Accuracy' },
    { id: 'data-revisions', title: '5. Data Revisions' },
    { id: 'geographic-attribution', title: '6. Geographic Attribution' },
    { id: 'per-capita', title: '7. Per-Capita Calculations' },
    { id: 'spending-rates', title: '8. Spending Rate Calculations' },
    { id: 'tax-interpretation', title: '9. Tax/Personal Spending Interpretation' },
    { id: 'no-affiliation', title: '10. No Government Affiliation' },
    { id: 'user-responsibility', title: '11. User Responsibility' },
    { id: 'data-correction', title: '12. Contact & Data Correction' },
  ];

  return (
    <InfoPageLayout
      title="Legal Disclaimer"
      subtitle="Clear disclosures regarding independent status, public data origins, mathematical rate calculations, and analytical limitations across USAspending.us."
      breadcrumbName="Disclaimer"
      breadcrumbUrl="/disclaimer"
      toc={toc}
    >
      <JsonLd
        type="TechArticle"
        data={{
          name: 'USA Spending Legal Disclaimer',
          headline: 'USA Spending Legal Disclaimer',
          description: 'Official legal disclosures, data accuracy notices, and calculation disclaimers for USA Spending.',
          url: 'https://www.usaspending.us/disclaimer',
          datePublished: '2026-01-15T00:00:00Z',
          dateModified: '2026-09-23T00:00:00Z',
          author: {
            '@type': 'Person',
            name: 'Firoz Khan',
            url: 'https://www.usaspending.us/about/firoz-khan',
            jobTitle: 'Independent Web Developer & Data Visualization Developer',
          },
          publisher: {
            '@type': 'Organization',
            name: 'USA Spending',
            url: 'https://www.usaspending.us',
          },
        }}
      />

      {/* 1. Independent Project */}
      <section id="independent-project" className="data-card p-6 sm:p-8 rounded-xl border border-amber-300 bg-amber-50/60 space-y-3">
        <div className="flex items-center gap-2 text-amber-900 font-bold text-lg">
          <ShieldAlert className="w-5 h-5 text-amber-600" />
          <h2 className="text-xl sm:text-2xl font-black text-slate-900">
            1. Independent Project
          </h2>
        </div>
        <p className="text-slate-800 text-xs leading-relaxed font-semibold">
          {SITE_CONFIG.disclaimerNotice}
        </p>
        <p className="text-slate-700 text-xs leading-relaxed">
          USAspending.us is an independent public-interest web project built and maintained by independent web developer{' '}
          <Link href="/about/firoz-khan" className="text-blue-700 font-bold underline">
            Firoz Khan
          </Link>. It is not financed, operated, managed, or endorsed by the U.S. Federal Government or any government agency.
        </p>
      </section>

      {/* 2. Data Sources */}
      <section id="data-sources" className="data-card p-6 sm:p-8 rounded-xl border border-slate-200 bg-white space-y-4">
        <h2 className="text-2xl font-black text-slate-900">2. Data Sources</h2>
        <p className="text-slate-600 text-sm leading-relaxed">
          Data presented on this website is sourced from publicly available government records published by official U.S. federal entities, primarily:
        </p>
        <ul className="list-disc pl-5 text-xs text-slate-700 space-y-1.5 leading-relaxed">
          <li><strong>USAspending.gov API:</strong> Prime contract awards, grants, direct assistance, and federal agency budget function outlays.</li>
          <li><strong>U.S. Treasury Fiscal Data:</strong> Monthly Treasury Statements (MTS), gross outlays, tax receipts, and public debt records.</li>
          <li><strong>U.S. Census Bureau:</strong> Official Annual Estimates of the Resident Population for state and regional demographic baselines.</li>
        </ul>
        <p className="text-xs text-slate-500">
          USAspending.us does not create, originate, or alter the underlying transactional data released by these federal authorities. Read our full{' '}
          <Link href="/data-sources" className="text-blue-700 font-semibold underline">
            Government Data Sources Guide
          </Link>.
        </p>
      </section>

      {/* 3. Calculated Values */}
      <section id="calculated-values" className="data-card p-6 sm:p-8 rounded-xl border border-slate-200 bg-white space-y-4">
        <h2 className="text-2xl font-black text-slate-900">3. Calculated Values</h2>
        <p className="text-slate-600 text-sm leading-relaxed">
          Certain metrics—including spending per second, per minute, per hour, per day, budget percentages, time equivalents, and per-capita ratios—are calculated values generated by USAspending.us using the deterministic formulas documented on our{' '}
          <Link href="/methodology" className="text-blue-700 font-semibold underline">
            Calculation Methodology Page
          </Link>.
        </p>
        <p className="text-slate-600 text-xs leading-relaxed">
          These calculations are analytical derivatives created to make large numbers easier to understand and conceptualize; they are not separate federal data points created by government agencies.
        </p>
      </section>

      {/* 4. Data Accuracy */}
      <section id="data-accuracy" className="data-card p-6 sm:p-8 rounded-xl border border-slate-200 bg-white space-y-4">
        <h2 className="text-2xl font-black text-slate-900">4. Data Accuracy</h2>
        <p className="text-slate-600 text-sm leading-relaxed">
          While diligent engineering practices and programmatic validations are utilized to ingest and display published government feeds accurately, USAspending.us makes no express or implied warranty of complete accuracy, completeness, or uninterrupted availability.
        </p>
        <p className="text-slate-600 text-xs leading-relaxed">
          Federal accounting submissions from agencies are subject to periodic administrative corrections and audits. Any errors present in official source feeds will be reflected until corrected by the originating government agency.
        </p>
      </section>

      {/* 5. Data Revisions */}
      <section id="data-revisions" className="data-card p-6 sm:p-8 rounded-xl border border-slate-200 bg-white space-y-4">
        <h2 className="text-2xl font-black text-slate-900">5. Data Revisions</h2>
        <div className="p-3.5 rounded-lg bg-slate-50 border border-slate-200 text-xs text-slate-700 space-y-1.5 leading-relaxed">
          <p className="font-semibold text-slate-900">
            &quot;Federal spending data may be revised or corrected by the underlying reporting systems. Historical figures may therefore change over time.&quot;
          </p>
          <p className="text-slate-600">
            When federal agencies close fiscal quarters or complete annual financial audits, past outlay numbers and contract obligation totals are frequently updated retrospectively. USAspending.us refreshes historical tables as upstream databases are updated.
          </p>
        </div>
      </section>

      {/* 6. Geographic Attribution */}
      <section id="geographic-attribution" className="data-card p-6 sm:p-8 rounded-xl border border-slate-200 bg-white space-y-4">
        <h2 className="text-2xl font-black text-slate-900">6. Geographic Attribution</h2>
        <p className="text-slate-600 text-sm leading-relaxed">
          Federal spending associated with a state or territory reflects the prime award place of performance or recipient registered address as cataloged in USAspending.gov.
        </p>
        <p className="text-slate-700 text-xs font-medium leading-relaxed">
          Federal spending associated with a state does <strong>not</strong> necessarily represent money paid directly to the state government, state municipal revenue, local city budgets, or the amount of federal taxes paid by residents of that state.
        </p>
      </section>

      {/* 7. Per-Capita Calculations */}
      <section id="per-capita" className="data-card p-6 sm:p-8 rounded-xl border border-slate-200 bg-white space-y-4">
        <h2 className="text-2xl font-black text-slate-900">7. Per-Capita Calculations</h2>
        <p className="text-slate-600 text-sm leading-relaxed">
          Per-resident spending metrics are mathematical quotients (state-associated spending divided by Census population baseline).
        </p>
        <div className="p-3.5 rounded-lg bg-amber-50 border border-amber-200 text-amber-950 text-xs leading-relaxed">
          <strong>Mandatory Ratio Notice:</strong> This is a mathematical ratio. It does not mean that each resident received this amount, paid this amount in taxes, benefited equally, or has a personal tax burden equal to that figure.
        </div>
      </section>

      {/* 8. Spending Rate Calculations */}
      <section id="spending-rates" className="data-card p-6 sm:p-8 rounded-xl border border-slate-200 bg-white space-y-4">
        <h2 className="text-2xl font-black text-slate-900">8. Spending Rate Calculations</h2>
        <p className="text-slate-600 text-sm leading-relaxed">
          Per-second, per-minute, per-hour, and per-day velocity figures are mathematical conversions derived from annual fiscal-year totals across 365 (or 366 leap) days.
        </p>
        <p className="text-slate-700 text-xs font-medium leading-relaxed">
          &quot;These figures are calculated rates, not a live stream of federal payments.&quot; They do not represent live electronic bank wires or real-time payment transactions occurring around the clock.
        </p>
      </section>

      {/* 9. Tax/Personal Spending Interpretation */}
      <section id="tax-interpretation" className="data-card p-6 sm:p-8 rounded-xl border border-slate-200 bg-white space-y-4">
        <h2 className="text-2xl font-black text-slate-900">9. Tax & Personal Spending Interpretation</h2>
        <p className="text-slate-600 text-sm leading-relaxed">
          Tools modeling personal tax distributions (such as &quot;Where Does My Money Go?&quot;) calculate an <strong>estimated federal spending share</strong> based on official budget weights.
        </p>
        <p className="text-slate-600 text-xs leading-relaxed">
          They do not measure an individual&apos;s actual tax return or legal tax liability. Calculations do not account for itemized deductions, personal exemptions, tax credits, state taxes, or payroll withholdings. The site does not imply that your tax payment directly equals your share of federal spending.
        </p>
      </section>

      {/* 10. No Government Affiliation */}
      <section id="no-affiliation" className="data-card p-6 sm:p-8 rounded-xl border border-slate-200 bg-white space-y-4">
        <h2 className="text-2xl font-black text-slate-900">10. No Government Affiliation</h2>
        <p className="text-slate-600 text-sm leading-relaxed">
          USAspending.us is an independent website and does not represent the U.S. Government, USAspending.gov, the U.S. Department of the Treasury, the Department of Defense, or any federal agency.
        </p>
        <p className="text-slate-600 text-xs leading-relaxed">
          Official United States Federal Government portals use the official <code className="bg-slate-100 px-1 py-0.5 rounded font-mono text-slate-800">.gov</code> top-level domain. The official federal spending portal can be accessed directly at <a href="https://www.usaspending.gov" target="_blank" rel="noopener noreferrer" className="text-blue-700 font-semibold underline">USAspending.gov</a>.
        </p>
      </section>

      {/* 11. User Responsibility */}
      <section id="user-responsibility" className="data-card p-6 sm:p-8 rounded-xl border border-slate-200 bg-white space-y-4">
        <h2 className="text-2xl font-black text-slate-900">11. User Responsibility</h2>
        <p className="text-slate-600 text-sm leading-relaxed">
          All data, charts, calculators, and research views on USA Spending are provided solely for general educational, civic, and informational purposes. Content does not constitute legal, tax, accounting, or professional financial advice.
        </p>
        <p className="text-slate-600 text-xs leading-relaxed">
          Users are responsible for verifying all figures against primary source government publications before relying on them for academic citations, policy papers, legal proceedings, or official reporting.
        </p>
      </section>

      {/* 12. Contact & Data Correction */}
      <section id="data-correction" className="data-card p-6 sm:p-8 rounded-xl border border-slate-200 bg-white space-y-4">
        <h2 className="text-2xl font-black text-slate-900">12. Contact & Data Correction</h2>
        <p className="text-slate-600 text-sm leading-relaxed">
          If you believe a figure or explanation on USA Spending contains a discrepancy, typographical error, or requires methodological review, please inform our team.
        </p>
        <div className="pt-2">
          <Link
            href="/contact?subject=Data+Correction"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-blue-700 hover:bg-blue-600 text-white font-bold text-xs transition-colors shadow-sm"
          >
            <Flag className="w-4 h-4 text-blue-200" />
            <span>Report a Data Discrepancy</span>
          </Link>
        </div>

        <div className="pt-4 border-t border-slate-100 flex flex-wrap gap-4 text-xs font-semibold text-blue-700">
          <Link href="/data-limitations" className="hover:underline">
            ← Explore Data Limitations & Interpretation Guide
          </Link>
          <span className="text-slate-300">|</span>
          <Link href="/methodology" className="hover:underline">
            Read Calculation Methodology
          </Link>
          <span className="text-slate-300">|</span>
          <Link href="/data-sources" className="hover:underline">
            Official Data Sources
          </Link>
        </div>
      </section>
    </InfoPageLayout>
  );
}
