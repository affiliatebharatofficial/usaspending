import React from 'react';
import Link from 'next/link';
import InfoPageLayout from '@/components/layout/InfoPageLayout';
import JsonLd from '@/components/seo/JsonLd';
import { SITE_CONFIG } from '@/lib/config/site';
import {
  AlertTriangle,
  Scale,
  Clock,
  MapPin,
  Calculator,
  RefreshCw,
  ShieldCheck,
  ExternalLink,
  Flag,
  FileText,
  DollarSign,
  Layers,
  HelpCircle,
  Database
} from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Data Limitations & Interpretation | USA Spending',
  description: 'Understand the reporting constraints, delays, revisions, and analytical boundaries of federal spending data, including outlays vs obligations, state allocations, and per-capita ratios.',
  alternates: {
    canonical: 'https://www.usaspending.us/data-limitations',
  },
};

export default function DataLimitationsPage() {
  const toc = [
    { id: 'introduction', title: '1. Introduction & Analytical Framework' },
    { id: 'three-tiers', title: '2. The Three Categories of Limitations' },
    { id: 'federal-limitations', title: '3. Limitations of Federal Spending Data' },
    { id: 'outlays-vs-obligations', title: '4. Outlays Are Not the Same as Obligations' },
    { id: 'state-spending', title: '5. What State-Associated Spending Means' },
    { id: 'per-capita', title: '6. What Per-Capita Spending Means' },
    { id: 'spending-rates', title: '7. What Velocity Rates Mean' },
    { id: 'tax-calculators', title: '8. Tax Allocation & Personal Spending' },
    { id: 'data-revisions', title: '9. Data Revisions & Reporting Lags' },
    { id: 'official-sources', title: '10. Official Source Documentation' },
    { id: 'data-correction', title: '11. How to Report a Data Issue' },
  ];

  return (
    <InfoPageLayout
      title="Data Limitations"
      subtitle="Factual guidance on understanding federal reporting boundaries, accounting distinctions, rate estimates, and data constraints across USAspending.us."
      breadcrumbName="Data Limitations"
      breadcrumbUrl="/data-limitations"
      toc={toc}
    >
      <JsonLd
        type="TechArticle"
        data={{
          name: 'Data Limitations and Interpretation Guide',
          headline: 'Data Limitations and Interpretation Guide',
          description: 'Official documentation of data limitations, reporting lags, outlays vs obligations, state attribution, and calculation constraints on USAspending.us.',
          url: 'https://www.usaspending.us/data-limitations',
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

      {/* 1. Introduction */}
      <section id="introduction" className="data-card p-6 sm:p-8 rounded-xl border border-slate-200 bg-white space-y-4">
        <div className="flex items-center space-x-2 text-blue-700">
          <AlertTriangle className="w-5 h-5 text-amber-600" />
          <h2 className="text-xl sm:text-2xl font-black text-slate-900">
            1. Introduction & Analytical Framework
          </h2>
        </div>

        <p className="text-slate-700 text-sm leading-relaxed">
          USAspending.us presents financial visualizations and calculation models derived from publicly available government datasets. Government spending datasets are massive and complex, encompassing hundreds of federal entities and millions of individual transactions. Consequently, source datasets possess inherent reporting limitations, revisions, delays, attribution rules, and accounting constraints.
        </p>

        <p className="text-slate-700 text-sm leading-relaxed">
          We believe transparent data communication requires explaining not only what numbers represent, but also <strong>what they do not represent</strong>. Users, journalists, researchers, and policymakers must review data within its proper statutory and computational context.
        </p>

        <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 space-y-2 leading-relaxed">
          <span className="font-bold text-slate-900 block">Independence & Authority Notice:</span>
          <p>
            USAspending.us is an independent data visualization project and is not affiliated with, operated by, or endorsed by the U.S. Government or USAspending.gov. Source datasets are published by federal authorities under public disclosure laws, and calculated figures are generated strictly according to our documented methodology.
          </p>
        </div>
      </section>

      {/* 2. Three Categories of Limitations */}
      <section id="three-tiers" className="data-card p-6 sm:p-8 rounded-xl border border-slate-200 bg-white space-y-5">
        <div className="flex items-center space-x-2 text-blue-700">
          <Layers className="w-5 h-5" />
          <h2 className="text-xl sm:text-2xl font-black text-slate-900">
            2. The Three Categories of Limitations
          </h2>
        </div>

        <p className="text-slate-700 text-sm leading-relaxed">
          To maintain analytical precision, USAspending.us distinguishes between three separate categories of data limitations:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
          <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
            <span className="px-2 py-0.5 rounded bg-blue-100 text-blue-900 font-bold text-[10px] uppercase">Category A</span>
            <h3 className="font-bold text-slate-900 text-sm">Source-Data Limitations</h3>
            <p className="text-slate-600 leading-relaxed">
              Constraints rooted in the upstream government systems themselves (e.g., agency reporting cycles, statutory reporting thresholds, retroactive deobligations, and unallocated national debt interest).
            </p>
          </div>

          <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
            <span className="px-2 py-0.5 rounded bg-purple-100 text-purple-900 font-bold text-[10px] uppercase">Category B</span>
            <h3 className="font-bold text-slate-900 text-sm">Calculation Limitations</h3>
            <p className="text-slate-600 leading-relaxed">
              Constraints arising from mathematical modeling (e.g., assuming linear spending distribution across 365 fiscal days, population-based ratios, and nominal multi-year comparisons).
            </p>
          </div>

          <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
            <span className="px-2 py-0.5 rounded bg-amber-100 text-amber-900 font-bold text-[10px] uppercase">Category C</span>
            <h3 className="font-bold text-slate-900 text-sm">Interpretation Limitations</h3>
            <p className="text-slate-600 leading-relaxed">
              Cognitive errors where users mistake federal state awards for state municipal tax revenue, per-capita averages for personal checks, or annual velocity rates for real-time bank wires.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Limitations of Federal Spending Data */}
      <section id="federal-limitations" className="data-card p-6 sm:p-8 rounded-xl border border-slate-200 bg-white space-y-5">
        <div className="flex items-center space-x-2 text-blue-700">
          <Database className="w-5 h-5" />
          <h2 className="text-xl sm:text-2xl font-black text-slate-900">
            3. Limitations of Federal Spending Data
          </h2>
        </div>

        <p className="text-slate-700 text-sm leading-relaxed">
          The following limitations apply to public federal spending data published under the Digital Accountability and Transparency Act (DATA Act) and the Federal Funding Accountability and Transparency Act (FFATA):
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-slate-700">
          <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-1.5">
            <span className="font-bold text-slate-900 block text-sm">1. Reporting Delays</span>
            <p className="text-slate-600 leading-relaxed">
              Agencies report spending data periodically, not instantly. Civilian agencies generally submit contract and financial assistance records within 30 days after the end of an accounting month. Defense procurement records may be subject to a 90-day lag under statutory guidelines.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-1.5">
            <span className="font-bold text-slate-900 block text-sm">2. Retroactive Data Revisions</span>
            <p className="text-slate-600 leading-relaxed">
              Federal spending data may be revised or corrected by the underlying reporting systems. When agencies reconcile quarterly accounts or close financial audits, historical figures may change over time.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-1.5">
            <span className="font-bold text-slate-900 block text-sm">3. Sub-Tier Supplier Visibility</span>
            <p className="text-slate-600 leading-relaxed">
              Federal reporting tracks prime contractor and primary grant recipients comprehensively. While first-tier sub-awards above statutory thresholds ($30,000) are reported under FFATA, downstream second- and third-tier supplier networks are not fully captured.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-1.5">
            <span className="font-bold text-slate-900 block text-sm">4. Differences Between Agency Systems</span>
            <p className="text-slate-600 leading-relaxed">
              Different federal executive branch departments utilize distinct procurement and financial management systems. While DATA Act standards enforce a common data schema, minor differences in timing, categorization, and account coding can occur.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-1.5">
            <span className="font-bold text-slate-900 block text-sm">5. Negative Adjustments (Deobligations)</span>
            <p className="text-slate-600 leading-relaxed">
              When an agency modifies, cancels, or de-obligates funds from a previously awarded contract, the accounting adjustment appears as a negative number. This can occasionally result in negative net obligations for specific programs during a reporting window.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-1.5">
            <span className="font-bold text-slate-900 block text-sm">6. Geographic Attribution Constraints</span>
            <p className="text-slate-600 leading-relaxed">
              Award locations reflect either the primary place of performance or the legal address of the prime recipient in SAM.gov. If a contractor performs work across multiple states or subcontracts elements nationwide, spending may be concentrated at headquarters records.
            </p>
          </div>
        </div>

        <p className="text-xs text-slate-500">
          For primary statutory definitions and federal data dictionaries, consult the official{' '}
          <a
            href="https://www.usaspending.gov"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 font-bold underline"
          >
            USAspending.gov Data Dictionary
          </a>.
        </p>
      </section>

      {/* 4. Outlays vs Obligations */}
      <section id="outlays-vs-obligations" className="data-card p-6 sm:p-8 rounded-xl border-2 border-blue-200 bg-white space-y-5">
        <div className="flex items-center space-x-2 text-blue-700">
          <Scale className="w-5 h-5 text-blue-700" />
          <h2 className="text-xl sm:text-2xl font-black text-slate-900">
            4. Outlays Are Not the Same as Obligations
          </h2>
        </div>

        <p className="text-slate-700 text-sm leading-relaxed">
          One of the most frequent misinterpretations of federal budget data is treating <strong>obligations</strong> and <strong>outlays</strong> as interchangeable terms. In federal public accounting, they represent two fundamentally different stages of government activity:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
          <div className="p-5 rounded-xl border border-blue-200 bg-blue-50/40 space-y-3">
            <div className="flex items-center justify-between">
              <span className="font-bold text-blue-950 text-sm">Outlays (Disbursements)</span>
              <span className="px-2 py-0.5 rounded bg-blue-100 text-blue-800 font-bold text-[10px]">Actual Cash Outflow</span>
            </div>
            <p className="text-slate-700 leading-relaxed">
              <strong>Official Definition:</strong> An outlay occurs when the U.S. Department of the Treasury disburses actual funds (via electronic transfer or check) to liquidate a federal obligation. Outlays measure real cash leaving government accounts.
            </p>
            <div className="p-2.5 rounded bg-white border border-blue-100 text-slate-600 font-mono">
              Net Outlays = Gross Cash Disbursements − Offsetting Receipts
            </div>
            <p className="text-slate-600 font-medium">
              Where displayed: Macro totals ($6.75T), functional category pages, spending clocks, and rate calculators show net outlays.
            </p>
          </div>

          <div className="p-5 rounded-xl border border-slate-200 bg-slate-50 space-y-3">
            <div className="flex items-center justify-between">
              <span className="font-bold text-slate-900 text-sm">Obligations (Commitments)</span>
              <span className="px-2 py-0.5 rounded bg-slate-200 text-slate-800 font-bold text-[10px]">Legal Agreement</span>
            </div>
            <p className="text-slate-700 leading-relaxed">
              <strong>Official Definition:</strong> An obligation is a legally binding agreement entered into by a federal agency (such as awarding a defense procurement contract or signing an infrastructure grant agreement) that will require payment immediately or in the future.
            </p>
            <div className="p-2.5 rounded bg-white border border-slate-200 text-slate-600 font-mono">
              Obligation = Binding legal commitment to disburse funds
            </div>
            <p className="text-slate-600 font-medium">
              Where displayed: Prime contract award cards, recipient profiles, and grant search results display contract obligations.
            </p>
          </div>
        </div>

        <div className="p-3.5 rounded-lg bg-slate-50 border border-slate-200 text-xs text-slate-600 leading-relaxed">
          <strong>Key Takeaway:</strong> In any single fiscal year, an agency&apos;s obligations may exceed its outlays (e.g., when signing a five-year contract where funds disburse over several years), or outlays may exceed obligations (as prior commitments are liquidated).
        </div>
      </section>

      {/* 5. What State-Associated Spending Means */}
      <section id="state-spending" className="data-card p-6 sm:p-8 rounded-xl border border-slate-200 bg-white space-y-4">
        <div className="flex items-center space-x-2 text-blue-700">
          <MapPin className="w-5 h-5" />
          <h2 className="text-xl sm:text-2xl font-black text-slate-900">
            5. What State-Associated Federal Spending Means
          </h2>
        </div>

        <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-950 text-xs space-y-2 leading-relaxed font-medium">
          <span className="font-bold text-amber-900 text-sm block">Core Geographic Principle:</span>
          <p>
            &quot;Federal spending associated with a state does not necessarily represent money paid directly to the state government.&quot;
          </p>
        </div>

        <p className="text-slate-700 text-sm leading-relaxed">
          When USAspending.us presents figures for a U.S. state (e.g., California, Florida, Virginia, Texas) or territory, that amount reflects federal prime contracts, federal grants, direct benefit payments, and agency activities attributed to that geographic area in federal datasets.
        </p>

        <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2 text-xs">
          <span className="font-bold text-slate-900 block text-sm">State-associated spending should NOT be interpreted as:</span>
          <ul className="list-disc pl-5 space-y-1.5 text-slate-600 leading-relaxed">
            <li><strong>State government revenue:</strong> Federal spending in a state is not the state government&apos;s tax revenue or general fund balance.</li>
            <li><strong>State government budget spending:</strong> It does not represent municipal or state agency expenditures enacted by state legislatures.</li>
            <li><strong>Money received by every resident:</strong> It does not mean funds were distributed equally among state citizens.</li>
            <li><strong>Taxes paid by residents:</strong> It does not reflect federal income or payroll tax payments made by residents of that state.</li>
            <li><strong>Economic benefit received:</strong> It does not imply that every dollar produced an equivalent local economic stimulus.</li>
            <li><strong>Personal government benefits:</strong> Many awards are for industrial manufacturing, military equipment, or research rather than direct welfare transfers.</li>
          </ul>
        </div>
      </section>

      {/* 6. What Per-Capita Spending Means */}
      <section id="per-capita" className="data-card p-6 sm:p-8 rounded-xl border border-slate-200 bg-white space-y-4">
        <div className="flex items-center space-x-2 text-blue-700">
          <Calculator className="w-5 h-5" />
          <h2 className="text-xl sm:text-2xl font-black text-slate-900">
            6. What Per-Capita Spending Means
          </h2>
        </div>

        <p className="text-slate-700 text-sm leading-relaxed">
          Per-capita spending figures across states and categories are strictly <strong>mathematical ratios</strong> calculated by dividing a reported spending amount by an official Census population denominator:
        </p>

        <div className="p-3.5 rounded-lg bg-slate-900 text-emerald-400 font-mono text-xs overflow-x-auto">
          Per-Capita Ratio = Total Federal Spending Associated with Area ÷ Resident Population Baseline
        </div>

        <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200 text-amber-950 text-xs space-y-2 leading-relaxed">
          <span className="font-bold text-amber-900 block">Per-capita figures do NOT mean:</span>
          <ul className="list-disc pl-5 space-y-1 text-slate-700">
            <li>Every resident received that amount of money.</li>
            <li>Every resident paid that amount in taxes.</li>
            <li>Every resident benefited equally from federal programs.</li>
            <li>Every resident&apos;s individual tax burden equals that figure.</li>
          </ul>
        </div>

        <p className="text-xs text-slate-600 leading-relaxed">
          For example, states or jurisdictions hosting major federal headquarters (like Washington D.C., Virginia, or Maryland) exhibit high per-capita spending ratios because significant national defense or agency procurement operations are based there, not because local residents receive direct checks.
        </p>
      </section>

      {/* 7. What Velocity Rates Mean */}
      <section id="spending-rates" className="data-card p-6 sm:p-8 rounded-xl border border-slate-200 bg-white space-y-4">
        <div className="flex items-center space-x-2 text-blue-700">
          <Clock className="w-5 h-5" />
          <h2 className="text-xl sm:text-2xl font-black text-slate-900">
            7. What Daily, Hourly, Minute and Second Spending Means
          </h2>
        </div>

        <p className="text-slate-700 text-sm leading-relaxed">
          To help users conceptualize trillion-dollar federal outlays, our tools calculate time-based rate increments:
        </p>

        <div className="p-3.5 rounded-lg bg-slate-50 border border-slate-200 font-mono text-xs text-slate-800 space-y-1">
          <div>Annual Outlays → Daily Equivalent (÷ 365 or 366 days)</div>
          <div>Daily Equivalent → Hourly Equivalent (÷ 24 hours)</div>
          <div>Hourly Equivalent → Minute Equivalent (÷ 60 minutes)</div>
          <div>Minute Equivalent → Second Equivalent (÷ 60 seconds)</div>
        </div>

        <div className="p-4 rounded-xl bg-blue-50/60 border border-blue-200 text-blue-950 text-xs space-y-2 leading-relaxed">
          <span className="font-bold text-blue-900 block">Critical Interpretation Rule:</span>
          <p>
            <strong>&quot;These figures are calculated rates, not a live stream of federal payments.&quot;</strong>
          </p>
          <p className="text-slate-600">
            Federal outlays do not disburse at an identical, constant rate every second of every day. Rather, funds are disbursed in batches following agency payroll schedules, vendor invoice settlements, and statutory grant drawdowns. Expressing figures per second provides conceptual velocity, not live bank wire monitoring.
          </p>
        </div>
      </section>

      {/* 8. Tax Allocation & Personal Spending */}
      <section id="tax-calculators" className="data-card p-6 sm:p-8 rounded-xl border border-slate-200 bg-white space-y-4">
        <div className="flex items-center space-x-2 text-blue-700">
          <DollarSign className="w-5 h-5" />
          <h2 className="text-xl sm:text-2xl font-black text-slate-900">
            8. Tax Allocation & Personal Spending Interpretation
          </h2>
        </div>

        <p className="text-slate-700 text-sm leading-relaxed">
          Personal allocation tools (such as &quot;Where Does My Money Go?&quot;) model an <strong>estimated federal spending share</strong>. They allow users to input an income or tax figure and see how that capital would divide proportionally across official budget categories.
        </p>

        <div className="space-y-3 text-xs text-slate-700">
          <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-1.5">
            <span className="font-bold text-slate-900 block text-sm">What the Calculator Measures:</span>
            <p className="text-slate-600 leading-relaxed">
              An illustrative proportional division of an estimated federal income tax contribution based on official FY2026 OMB budget function weights.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-1.5">
            <span className="font-bold text-slate-900 block text-sm">What the Calculator Does NOT Measure:</span>
            <ul className="list-disc pl-5 space-y-1 text-slate-600 leading-relaxed">
              <li>It does NOT calculate your actual IRS tax return or legal tax liability.</li>
              <li>It does NOT account for itemized deductions, family tax credits, retirement contributions, or state/local taxes.</li>
              <li>It does NOT imply that &quot;your federal tax payment equals your share of federal spending.&quot;</li>
              <li>It does NOT represent dedicated escrow accounts; the federal government pools revenues into the General Fund.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 9. Data Revisions & Reporting Lags */}
      <section id="data-revisions" className="data-card p-6 sm:p-8 rounded-xl border border-slate-200 bg-white space-y-4">
        <div className="flex items-center space-x-2 text-blue-700">
          <RefreshCw className="w-5 h-5" />
          <h2 className="text-xl sm:text-2xl font-black text-slate-900">
            9. Data Revisions & Reporting Lags
          </h2>
        </div>

        <p className="text-slate-700 text-sm leading-relaxed">
          Because federal financial management is continuous and iterative, published figures are subject to ongoing administrative refinement:
        </p>

        <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 space-y-2 leading-relaxed">
          <p className="font-semibold text-slate-900">
            &quot;Federal spending data may be revised or corrected by the underlying reporting systems. Historical figures may therefore change over time.&quot;
          </p>
          <p className="text-slate-600">
            Agencies conduct periodic financial statement audits and submit retroactive accounting corrections. In particular, end-of-fiscal-year reconciliation by the U.S. Treasury may adjust final outlay figures months after a fiscal year concludes.
          </p>
        </div>
      </section>

      {/* 10. Official Source Documentation */}
      <section id="official-sources" className="data-card p-6 sm:p-8 rounded-xl border border-slate-200 bg-white space-y-4">
        <div className="flex items-center space-x-2 text-blue-700">
          <FileText className="w-5 h-5" />
          <h2 className="text-xl sm:text-2xl font-black text-slate-900">
            10. Official Source Documentation
          </h2>
        </div>

        <p className="text-slate-700 text-sm leading-relaxed">
          To verify underlying definitions and accounting standards, we refer users directly to authoritative government documentation:
        </p>

        <div className="space-y-3 text-xs">
          <div className="p-3.5 rounded-lg border border-slate-200 bg-slate-50 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <span className="font-bold text-slate-900 block">USAspending.gov Official Portal & API</span>
              <p className="text-slate-500">Official open data portal managed by the U.S. Department of the Treasury</p>
            </div>
            <a
              href="https://www.usaspending.gov"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 font-bold hover:underline inline-flex items-center gap-1 flex-shrink-0"
            >
              <span>Visit USAspending.gov</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="p-3.5 rounded-lg border border-slate-200 bg-slate-50 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <span className="font-bold text-slate-900 block">U.S. Treasury Fiscal Data</span>
              <p className="text-slate-500">Bureau of the Fiscal Service Monthly Treasury Statement (MTS) & Debt Data</p>
            </div>
            <a
              href="https://fiscaldata.treasury.gov"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 font-bold hover:underline inline-flex items-center gap-1 flex-shrink-0"
            >
              <span>Visit Fiscal Data Portal</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="p-3.5 rounded-lg border border-slate-200 bg-slate-50 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <span className="font-bold text-slate-900 block">U.S. Census Bureau Population Estimates</span>
              <p className="text-slate-500">National and State Population Baselines and Resident Estimates</p>
            </div>
            <a
              href="https://www.census.gov"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 font-bold hover:underline inline-flex items-center gap-1 flex-shrink-0"
            >
              <span>Visit Census.gov</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </section>

      {/* 11. How to Report a Data Issue */}
      <section id="data-correction" className="data-card p-6 sm:p-8 rounded-xl border border-slate-200 bg-white space-y-5">
        <div className="flex items-center space-x-2 text-blue-700">
          <Flag className="w-5 h-5 text-blue-700" />
          <h2 className="text-xl sm:text-2xl font-black text-slate-900">
            11. How to Report a Data Issue
          </h2>
        </div>

        <p className="text-slate-700 text-sm leading-relaxed">
          If you discover a discrepancy between figures displayed on USAspending.us and the underlying official government feeds, or if an explanation requires methodological clarification, please notify our technical maintainer.
        </p>

        <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-3 text-xs">
          <span className="font-bold text-slate-900 block text-sm">When submitting a Data Correction request, please provide:</span>
          <ul className="list-disc pl-5 space-y-1 text-slate-600">
            <li><strong>Page URL:</strong> The specific URL where the figure appears.</li>
            <li><strong>Data Point:</strong> The exact numerical figure or chart in question.</li>
            <li><strong>Description of Issue:</strong> Why you believe the figure requires review.</li>
            <li><strong>Source Reference:</strong> Link or citation to the relevant official USAspending.gov or Treasury table.</li>
          </ul>

          <div className="pt-2">
            <Link
              href="/contact?subject=Data+Correction"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-blue-700 hover:bg-blue-600 text-white font-bold text-xs transition-colors shadow-sm"
            >
              <Flag className="w-4 h-4 text-blue-200" />
              <span>Submit a Data Correction Request</span>
            </Link>
          </div>
        </div>

        <div className="pt-4 border-t border-slate-100 flex flex-wrap gap-4 text-xs font-semibold text-blue-700">
          <Link href="/methodology" className="hover:underline">
            ← Read Calculation Methodology
          </Link>
          <span className="text-slate-300">|</span>
          <Link href="/data-sources" className="hover:underline">
            Explore Government Data Sources
          </Link>
          <span className="text-slate-300">|</span>
          <Link href="/disclaimer" className="hover:underline">
            Read Legal Disclaimer →
          </Link>
        </div>
      </section>
    </InfoPageLayout>
  );
}
