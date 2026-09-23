import React from 'react';
import Link from 'next/link';
import InfoPageLayout from '@/components/layout/InfoPageLayout';
import JsonLd from '@/components/seo/JsonLd';
import { SITE_CONFIG } from '@/lib/config/site';
import {
  Database,
  Calculator,
  ShieldCheck,
  AlertTriangle,
  FileText,
  Clock,
  ExternalLink,
  CheckCircle2,
  Layers,
  MapPin,
  TrendingUp,
  Scale
} from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'How USA Spending Calculates Federal Spending Data | Methodology',
  description: 'Detailed methodology, exact mathematical formulas, and data origin definitions for federal spending outlays, rates, per-capita metrics, and category classifications.',
  alternates: {
    canonical: 'https://www.usaspending.us/methodology',
  },
};

export default function MethodologyPage() {
  const toc = [
    { id: 'overview', title: '1. Purpose & Independence Notice' },
    { id: 'sources', title: '2. Official Government Data Sources' },
    { id: 'source-vs-calculated', title: '3. Source Data vs. Calculated Data' },
    { id: 'fiscal-year', title: '4. Fiscal Year vs. Calendar Year' },
    { id: 'outlays-vs-obligations', title: '5. Outlays vs. Obligations' },
    { id: 'formulas', title: '6. Mathematical Formulas & Calculation Logic' },
    { id: 'state-attribution', title: '7. State Geographic Allocation' },
    { id: 'categories', title: '8. Category Classification & Analytical Groupings' },
    { id: 'chart-reconciliation', title: '9. Visual Part-to-Whole Integrity' },
    { id: 'historical-data', title: '10. Historical Data & Inflation Policy' },
    { id: 'limitations', title: '11. Limitations, Reporting Lags & Adjustments' },
    { id: 'versioning', title: '12. Methodology Versioning & Review' },
  ];

  return (
    <InfoPageLayout
      title="How USA Spending Calculates Federal Spending Data"
      subtitle="Complete, verifiable documentation of public data sources, financial accounting standards, mathematical formulas, and analytical models used across USAspending.us."
      breadcrumbName="Methodology"
      breadcrumbUrl="/methodology"
      toc={toc}
    >
      <JsonLd
        type="TechArticle"
        data={{
          name: 'How USA Spending Calculates Federal Spending Data',
          headline: 'How USA Spending Calculates Federal Spending Data',
          description: 'Comprehensive methodology documentation, mathematical formulas, and source data definitions for federal spending calculations.',
          url: 'https://www.usaspending.us/methodology',
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

      {/* 1. Purpose & Independence Notice */}
      <section id="overview" className="data-card p-6 sm:p-8 rounded-xl border border-slate-200 bg-white space-y-4">
        <div className="flex items-center space-x-2 text-blue-700">
          <FileText className="w-5 h-5" />
          <h2 className="text-xl sm:text-2xl font-black text-slate-900">
            1. Purpose & Independence Notice
          </h2>
        </div>

        <p className="text-slate-700 text-sm leading-relaxed">
          The purpose of this document is to provide complete, auditable transparency into how <strong>USAspending.us</strong> collects, processes, normalizes, and calculates federal financial figures. Understanding multi-trillion-dollar federal expenditures requires clarity regarding source data boundaries and derived mathematical representations.
        </p>

        <div className="p-4 rounded-xl bg-blue-50/60 border border-blue-200 text-xs text-blue-950 leading-relaxed space-y-2">
          <div className="font-bold flex items-center gap-1.5 text-blue-900">
            <ShieldCheck className="w-4 h-4 text-blue-700" />
            Core Data Independence Statement:
          </div>
          <p>
            <strong>USAspending.us does not create or originate the underlying federal spending data.</strong> The underlying data is sourced from external government datasets, primarily USAspending.gov. Calculated values shown on this website are derived from those source datasets using the formulas described below.
          </p>
          <p className="text-slate-600">
            USAspending.us is an independent public-interest web project built and maintained by independent developer{' '}
            <Link href="/about/firoz-khan" className="text-blue-700 font-semibold underline">
              Firoz Khan
            </Link>. This website is <strong>NOT</strong> affiliated with, funded by, or endorsed by the U.S. Government, the Department of the Treasury, or the official federal portal USAspending.gov.
          </p>
        </div>
      </section>

      {/* 2. Official Government Data Sources */}
      <section id="sources" className="data-card p-6 sm:p-8 rounded-xl border border-slate-200 bg-white space-y-5">
        <div className="flex items-center space-x-2 text-blue-700">
          <Database className="w-5 h-5" />
          <h2 className="text-xl sm:text-2xl font-black text-slate-900">
            2. Official Government Data Sources
          </h2>
        </div>

        <p className="text-slate-700 text-sm leading-relaxed">
          Every figure presented on this website originates from published public records produced by official United States federal statistical and financial agencies:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
          <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-bold text-slate-900 text-sm">USAspending.gov</span>
              <span className="px-1.5 py-0.5 rounded bg-blue-100 text-blue-800 text-[10px] font-bold">API Source</span>
            </div>
            <p className="text-slate-600 leading-relaxed">
              The official open data portal for U.S. government spending, managed by the U.S. Department of the Treasury pursuant to the Federal Funding Accountability and Transparency Act (FFATA) and the DATA Act of 2014. Supplies award-level contracts, grants, direct loans, and agency account outlays.
            </p>
            <a
              href="https://www.usaspending.gov"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 font-bold hover:underline inline-flex items-center gap-1 pt-1"
            >
              <span>Visit USAspending.gov</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-bold text-slate-900 text-sm">U.S. Treasury Fiscal Data</span>
              <span className="px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-800 text-[10px] font-bold">Accounting</span>
            </div>
            <p className="text-slate-600 leading-relaxed">
              The official portal for federal financial records published by the Bureau of the Fiscal Service. Provides top-line macro totals from the Monthly Treasury Statement (MTS), total federal outlays, revenue receipts, and public debt figures.
            </p>
            <a
              href="https://fiscaldata.treasury.gov"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 font-bold hover:underline inline-flex items-center gap-1 pt-1"
            >
              <span>Visit Fiscal Data Portal</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-bold text-slate-900 text-sm">U.S. Census Bureau</span>
              <span className="px-1.5 py-0.5 rounded bg-purple-100 text-purple-800 text-[10px] font-bold">Demographics</span>
            </div>
            <p className="text-slate-600 leading-relaxed">
              Official Annual Estimates of the Resident Population for the United States, Regions, Divisions, and States. Serves as the authoritative demographic denominator in all per-capita spending calculations across states and territories.
            </p>
            <a
              href="https://www.census.gov"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 font-bold hover:underline inline-flex items-center gap-1 pt-1"
            >
              <span>Visit Census.gov</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

        <p className="text-xs text-slate-500">
          For a full catalog of API endpoints, parameters, and sync frequencies, consult our dedicated{' '}
          <Link href="/data-sources" className="text-blue-700 font-bold underline">
            Official Data Sources Page
          </Link>.
        </p>
      </section>

      {/* 3. Source Data vs. Calculated Data */}
      <section id="source-vs-calculated" className="data-card p-6 sm:p-8 rounded-xl border border-slate-200 bg-white space-y-4">
        <div className="flex items-center space-x-2 text-blue-700">
          <Layers className="w-5 h-5" />
          <h2 className="text-xl sm:text-2xl font-black text-slate-900">
            3. Source Data vs. Calculated Data
          </h2>
        </div>

        <p className="text-slate-700 text-sm leading-relaxed">
          To maintain strict analytical transparency, we distinguish between <strong>Source Data</strong> (reported directly by federal agencies) and <strong>Calculated Data</strong> (derived mathematically by USAspending.us to assist comprehension):
        </p>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border border-slate-200 rounded-lg overflow-hidden">
            <thead className="bg-slate-100 text-slate-900 font-bold uppercase tracking-wider text-[11px] border-b border-slate-200">
              <tr>
                <th className="p-3">Data Metric</th>
                <th className="p-3">Classification</th>
                <th className="p-3">Primary Origin</th>
                <th className="p-3">How It Is Produced</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 text-slate-700">
              <tr>
                <td className="p-3 font-semibold text-slate-900">Total Federal Outlays ($6.75T FY2026)</td>
                <td className="p-3"><span className="px-2 py-0.5 rounded bg-emerald-50 text-emerald-800 font-bold text-[10px]">Source Data</span></td>
                <td className="p-3">U.S. Treasury (MTS / Fiscal Data)</td>
                <td className="p-3">Published directly in official federal budget and Treasury outlay tables.</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold text-slate-900">Agency & Budget Function Outlays</td>
                <td className="p-3"><span className="px-2 py-0.5 rounded bg-emerald-50 text-emerald-800 font-bold text-[10px]">Source Data</span></td>
                <td className="p-3">USAspending.gov API (`/spending/by_category`)</td>
                <td className="p-3">Reported by federal agencies into official accounting codes.</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold text-slate-900">Prime Contract & Grant Awards</td>
                <td className="p-3"><span className="px-2 py-0.5 rounded bg-emerald-50 text-emerald-800 font-bold text-[10px]">Source Data</span></td>
                <td className="p-3">USAspending.gov / SAM.gov</td>
                <td className="p-3">Ingested from agency procurement records and financial assistance feeds.</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold text-slate-900">State Resident Populations</td>
                <td className="p-3"><span className="px-2 py-0.5 rounded bg-emerald-50 text-emerald-800 font-bold text-[10px]">Source Data</span></td>
                <td className="p-3">U.S. Census Bureau</td>
                <td className="p-3">Authoritative state population baseline estimates.</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold text-slate-900">Daily / Hourly / Second Spending Rates</td>
                <td className="p-3"><span className="px-2 py-0.5 rounded bg-blue-50 text-blue-800 font-bold text-[10px]">Calculated by Site</span></td>
                <td className="p-3">Derived from Treasury Outlays</td>
                <td className="p-3">Computed via linear division across 365 (or 366 leap) fiscal days.</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold text-slate-900">Budget Percentage Share (%)</td>
                <td className="p-3"><span className="px-2 py-0.5 rounded bg-blue-50 text-blue-800 font-bold text-[10px]">Calculated by Site</span></td>
                <td className="p-3">Derived from Treasury Outlays</td>
                <td className="p-3">Computed as `(Dollar Amount ÷ Total Outlays) × 100`.</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold text-slate-900">Per-Capita Federal Spending</td>
                <td className="p-3"><span className="px-2 py-0.5 rounded bg-blue-50 text-blue-800 font-bold text-[10px]">Calculated by Site</span></td>
                <td className="p-3">Derived from USAspending + Census</td>
                <td className="p-3">Computed as `State Federal Outlays ÷ Census Population`.</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold text-slate-900">Time Equivalency (Hours/Days)</td>
                <td className="p-3"><span className="px-2 py-0.5 rounded bg-blue-50 text-blue-800 font-bold text-[10px]">Calculated by Site</span></td>
                <td className="p-3">Derived from Outlay Velocity</td>
                <td className="p-3">Computed as `Amount ÷ (Annual Outlays ÷ 31,536,000 seconds)`.</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold text-slate-900">Science & Research Analytical Grouping</td>
                <td className="p-3"><span className="px-2 py-0.5 rounded bg-purple-50 text-purple-800 font-bold text-[10px]">Analytical Grouping</span></td>
                <td className="p-3">Derived from NIH + NSF Outlays</td>
                <td className="p-3">Aggregated by USAspending.us combining NIH and NSF research awards.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 4. Fiscal Year vs. Calendar Year */}
      <section id="fiscal-year" className="data-card p-6 sm:p-8 rounded-xl border border-slate-200 bg-white space-y-4">
        <div className="flex items-center space-x-2 text-blue-700">
          <Clock className="w-5 h-5" />
          <h2 className="text-xl sm:text-2xl font-black text-slate-900">
            4. Fiscal Year Baseline vs. Calendar Year
          </h2>
        </div>

        <p className="text-slate-700 text-sm leading-relaxed">
          Federal accounting does not align with standard January 1 – December 31 calendar years. Under U.S. federal statutory budgeting (31 U.S.C. § 1102), the federal government operates on a 12-month <strong>Fiscal Year (FY)</strong> that commences on <strong>October 1st</strong> of the preceding calendar year and concludes on <strong>September 30th</strong> of the named year:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono">
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
            <span className="font-bold text-slate-900 block font-sans text-sm">Standard Fiscal Year (e.g., FY2026):</span>
            <div className="text-blue-900">Start: October 1, 2025</div>
            <div className="text-blue-900">End: September 30, 2026</div>
            <div className="text-slate-600">Total Duration: 365 Days (8,760 Hours)</div>
          </div>
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
            <span className="font-bold text-slate-900 block font-sans text-sm">Leap Fiscal Year (e.g., FY2024):</span>
            <div className="text-blue-900">Start: October 1, 2023</div>
            <div className="text-blue-900">End: September 30, 2024</div>
            <div className="text-slate-600">Total Duration: 366 Days (8,784 Hours — Includes Feb 29)</div>
          </div>
        </div>

        <p className="text-xs text-slate-600 leading-relaxed">
          <strong>Impact on Spending Velocity:</strong> All daily, hourly, minute, and second calculations automatically calibrate their time divisors depending on leap-year status. In FY2024, calculations use 366 days (31,622,400 seconds); in FY2025 and FY2026, calculations use 365 days (31,536,000 seconds).
        </p>
      </section>

      {/* 5. Outlays vs. Obligations */}
      <section id="outlays-vs-obligations" className="data-card p-6 sm:p-8 rounded-xl border border-slate-200 bg-white space-y-5">
        <div className="flex items-center space-x-2 text-blue-700">
          <Scale className="w-5 h-5" />
          <h2 className="text-xl sm:text-2xl font-black text-slate-900">
            5. Outlays vs. Obligations (Accounting Standards)
          </h2>
        </div>

        <p className="text-slate-700 text-sm leading-relaxed">
          Federal budgeting terminology distinguishes sharply between funds committed and cash actually disbursed. Conflating these two concepts is the most frequent source of confusion in public reporting:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
          <div className="p-5 rounded-xl border border-blue-200 bg-blue-50/50 space-y-3">
            <div className="flex items-center justify-between">
              <span className="font-bold text-blue-950 text-sm">Outlays (Actual Cash Disbursements)</span>
              <span className="px-2 py-0.5 rounded bg-blue-100 text-blue-900 font-bold text-[10px]">Primary Metric</span>
            </div>
            <p className="text-slate-700 leading-relaxed">
              <strong>Outlays</strong> measure the liquidation of federal obligations. In plain language, an outlay occurs when the U.S. Treasury issues a physical paper check, executes an Automated Clearing House (ACH) electronic transfer, or pays an electronic invoice to a contractor, healthcare provider, state government, or individual beneficiary.
            </p>
            <div className="p-2.5 rounded bg-white border border-blue-100 text-slate-600 font-mono">
              Net Outlays = Gross Disbursements − Offsetting Collections
            </div>
            <p className="text-slate-500 italic">
              Unless explicitly labeled otherwise, top-line figures, category charts, and rate calculators on USAspending.us display net outlays.
            </p>
          </div>

          <div className="p-5 rounded-xl border border-slate-200 bg-slate-50 space-y-3">
            <div className="flex items-center justify-between">
              <span className="font-bold text-slate-900 text-sm">Obligations (Binding Commitments)</span>
              <span className="px-2 py-0.5 rounded bg-slate-200 text-slate-800 font-bold text-[10px]">Award Metric</span>
            </div>
            <p className="text-slate-700 leading-relaxed">
              <strong>Obligations</strong> represent legally binding agreements entered into by federal agencies. When the Department of Defense signs a \$500 Million multi-year shipbuilding contract or the Department of Transportation executes a highway grant, an obligation is recorded. Money does not leave the Treasury at that moment; cash flows out incrementally as milestones are reached over months or years.
            </p>
            <div className="p-2.5 rounded bg-white border border-slate-200 text-slate-600 font-mono">
              Obligation = Legally binding commitment to pay
            </div>
            <p className="text-slate-500 italic">
              Award search and contract recipient listings reflect contract award obligations as registered in SAM.gov and USAspending.gov.
            </p>
          </div>
        </div>

        <div className="p-3.5 rounded-lg bg-slate-50 border border-slate-200 text-xs text-slate-600 leading-relaxed">
          <strong>Official Authority Reference:</strong> Pursuant to USAspending.gov documentation and GAO Principles of Federal Appropriations Law (The Red Book), obligations in any given fiscal period may be higher or lower than outlays because multi-year capital projects spend out funds appropriated in earlier fiscal cycles.
        </div>
      </section>

      {/* 6. Exact Mathematical Formulas & Calculation Logic */}
      <section id="formulas" className="data-card p-6 sm:p-8 rounded-xl border border-slate-200 bg-white space-y-6">
        <div className="flex items-center space-x-2 text-blue-700">
          <Calculator className="w-5 h-5" />
          <h2 className="text-xl sm:text-2xl font-black text-slate-900">
            6. Mathematical Formulas & Calculation Logic
          </h2>
        </div>

        <p className="text-slate-700 text-sm leading-relaxed">
          The code running on USAspending.us executes deterministic, auditable algorithms. Below are the exact formulas implemented in the application logic:
        </p>

        {/* Formula 1: Spending Rates */}
        <div className="space-y-2 border-b border-slate-100 pb-5">
          <h3 className="font-bold text-slate-900 text-sm">
            6.1 Federal Spending Rate Velocity (Time Divisors)
          </h3>
          <p className="text-xs text-slate-600">
            Converts annual budgetary outlays into conceptual time intervals across the 365 or 366 days of a fiscal year:
          </p>
          <div className="p-4 rounded-xl bg-slate-900 text-emerald-400 font-mono text-xs space-y-1.5 overflow-x-auto">
            <div>Daily Rate  = Annual Outlays ÷ Days_In_Fiscal_Year (365 or 366)</div>
            <div>Hourly Rate = Daily Rate ÷ 24</div>
            <div>Minute Rate = Hourly Rate ÷ 60</div>
            <div>Second Rate = Minute Rate ÷ 60 = Annual Outlays ÷ (Days × 86,400)</div>
          </div>
          <p className="text-xs text-slate-500 italic">
            Example: For total FY2026 outlays of $6,750,000,000,000: Daily = $18,493,150,685; Hourly = $770,547,945; Minute = $12,842,466; Second = $214,041.
          </p>
        </div>

        {/* Formula 2: Percentage Share */}
        <div className="space-y-2 border-b border-slate-100 pb-5">
          <h3 className="font-bold text-slate-900 text-sm">
            6.2 Percentage Share of Total Federal Outlays
          </h3>
          <p className="text-xs text-slate-600">
            Measures the relative proportion of any dollar amount or category against the total federal budget:
          </p>
          <div className="p-4 rounded-xl bg-slate-900 text-emerald-400 font-mono text-xs overflow-x-auto">
            <div>Percentage Share (%) = (Entered Dollar Amount ÷ Total Federal Outlays FY2026) × 100</div>
            <div className="text-slate-400 mt-1">// Total Federal Outlays FY2026 baseline = $6,750,000,000,000 ($6.75 Trillion)</div>
          </div>
          <p className="text-xs text-slate-500 italic">
            Example: A program funded at $1,000,000,000 ($1B): (1,000,000,000 ÷ 6,750,000,000,000) × 100 = 0.0148%.
          </p>
        </div>

        {/* Formula 3: Per-Capita */}
        <div className="space-y-2 border-b border-slate-100 pb-5">
          <h3 className="font-bold text-slate-900 text-sm">
            6.3 Per-Capita Geographic Ratio
          </h3>
          <p className="text-xs text-slate-600">
            Normalizes total federal funding associated with a state by its official resident population:
          </p>
          <div className="p-4 rounded-xl bg-slate-900 text-emerald-400 font-mono text-xs overflow-x-auto">
            <div>Per-Capita Federal Outlays = Total Federal Outlays Associated With State ÷ Census Resident Population</div>
          </div>

          <div className="p-3.5 rounded-lg bg-amber-50 border border-amber-200 text-amber-950 text-xs flex items-start space-x-2.5">
            <AlertTriangle className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
            <div className="space-y-1">
              <span className="font-bold block text-amber-900">Mandatory Analytical Definition:</span>
              <p className="leading-relaxed">
                This is a mathematical ratio. It does not mean that each resident received this amount, paid this amount in taxes, or personally benefited from this amount.
              </p>
            </div>
          </div>
        </div>

        {/* Formula 4: Proportional Split */}
        <div className="space-y-2 border-b border-slate-100 pb-5">
          <h3 className="font-bold text-slate-900 text-sm">
            6.4 Illustrative Proportional Category Split
          </h3>
          <p className="text-xs text-slate-600">
            Illustrates how any arbitrary dollar amount would distribute if partitioned according to the actual category composition of the federal budget:
          </p>
          <div className="p-4 rounded-xl bg-slate-900 text-emerald-400 font-mono text-xs overflow-x-auto">
            <div>Category Proportional Allocation = (Category FY Outlays ÷ Total Federal Outlays) × Entered Amount</div>
          </div>
        </div>

        {/* Formula 5: YoY Growth */}
        <div className="space-y-2 border-b border-slate-100 pb-5">
          <h3 className="font-bold text-slate-900 text-sm">
            6.5 Year-over-Year (YoY) Percentage Change
          </h3>
          <p className="text-xs text-slate-600">
            Calculates budget growth or contraction across fiscal cycles:
          </p>
          <div className="p-4 rounded-xl bg-slate-900 text-emerald-400 font-mono text-xs overflow-x-auto">
            <div>YoY Growth (%) = ((Outlays_FY_Current − Outlays_FY_Prior) ÷ Outlays_FY_Prior) × 100</div>
            <div>Net Variance ($) = Outlays_FY_Current − Outlays_FY_Prior</div>
          </div>
        </div>

        {/* Formula 6: Amount-to-Time */}
        <div className="space-y-2">
          <h3 className="font-bold text-slate-900 text-sm">
            6.6 Spending Time Equivalency
          </h3>
          <p className="text-xs text-slate-600">
            Calculates how much time it takes the federal government to disburse an amount equal to user input:
          </p>
          <div className="p-4 rounded-xl bg-slate-900 text-emerald-400 font-mono text-xs overflow-x-auto">
            <div>Seconds Equivalent = Entered Dollar Amount ÷ Second Spending Rate</div>
            <div>Hours Equivalent   = Seconds Equivalent ÷ 3,600</div>
            <div>Days Equivalent    = Hours Equivalent ÷ 24</div>
          </div>
        </div>
      </section>

      {/* 7. State Geographic Allocation */}
      <section id="state-attribution" className="data-card p-6 sm:p-8 rounded-xl border border-slate-200 bg-white space-y-4">
        <div className="flex items-center space-x-2 text-blue-700">
          <MapPin className="w-5 h-5" />
          <h2 className="text-xl sm:text-2xl font-black text-slate-900">
            7. State Geographic Allocation Methodology
          </h2>
        </div>

        <p className="text-slate-700 text-sm leading-relaxed">
          Federal spending records do not function like state or city municipal accounting ledgers. When USAspending.us displays spending associated with a state (e.g., California, Texas, Virginia), that figure represents:
        </p>

        <div className="space-y-3 text-xs text-slate-700">
          <div className="p-3.5 rounded-lg bg-slate-50 border border-slate-200 space-y-1">
            <span className="font-bold text-slate-900 block text-sm">1. Primary Place of Performance:</span>
            <p className="text-slate-600 leading-relaxed">
              The primary geographic location where contract goods or services are delivered, constructed, or performed (e.g., a naval shipyard, military base, or highway construction corridor).
            </p>
          </div>

          <div className="p-3.5 rounded-lg bg-slate-50 border border-slate-200 space-y-1">
            <span className="font-bold text-slate-900 block text-sm">2. Recipient Registered Address:</span>
            <p className="text-slate-600 leading-relaxed">
              When place of performance is not distinguished, spending is recorded based on the registered legal corporate or institution headquarters address of the prime awardee in SAM.gov.
            </p>
          </div>
        </div>

        <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200 text-amber-950 text-xs space-y-1.5 leading-relaxed">
          <div className="font-bold text-amber-900 flex items-center gap-1.5">
            <AlertTriangle className="w-4 h-4 text-amber-600" />
            What State Spending Figures DO NOT Represent:
          </div>
          <ul className="list-disc pl-5 space-y-1 text-slate-700">
            <li>They do <strong>NOT</strong> represent state government tax revenues or state general fund receipts.</li>
            <li>They do <strong>NOT</strong> represent local municipal city or county budgets.</li>
            <li>They do <strong>NOT</strong> represent individual resident tax liability or federal tax payments made by residents of that state.</li>
          </ul>
        </div>
      </section>

      {/* 8. Category Classification & Analytical Groupings */}
      <section id="categories" className="data-card p-6 sm:p-8 rounded-xl border border-slate-200 bg-white space-y-5">
        <div className="flex items-center space-x-2 text-blue-700">
          <Layers className="w-5 h-5" />
          <h2 className="text-xl sm:text-2xl font-black text-slate-900">
            8. Category Classification & Analytical Groupings
          </h2>
        </div>

        <p className="text-slate-700 text-sm leading-relaxed">
          To provide meaningful insights into federal activities, USAspending.us organizes spending into 10 primary functional categories. We strictly disclose the authoritative origin of each category:
        </p>

        <div className="space-y-4 text-xs">
          <div className="border border-slate-200 rounded-xl p-4 bg-slate-50 space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-bold text-slate-900 text-sm">Official OMB Budget Functions (8 Categories)</span>
              <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-bold text-[10px]">Official Classification</span>
            </div>
            <p className="text-slate-600 leading-relaxed">
              Eight of our categories match standard budget function codes established by the Office of Management and Budget (OMB) and used in the President&apos;s Budget and USAspending.gov:
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-slate-700 pt-1 font-mono text-[11px]">
              <li className="p-2 rounded bg-white border border-slate-200">National Defense (Budget Function 050)</li>
              <li className="p-2 rounded bg-white border border-slate-200">Social Security (Budget Function 650)</li>
              <li className="p-2 rounded bg-white border border-slate-200">Medicare (Budget Function 570)</li>
              <li className="p-2 rounded bg-white border border-slate-200">Health & Medicaid (Budget Function 550)</li>
              <li className="p-2 rounded bg-white border border-slate-200">Veterans Benefits & Services (Budget Function 700)</li>
              <li className="p-2 rounded bg-white border border-slate-200">Education, Training & Social Services (Function 500)</li>
              <li className="p-2 rounded bg-white border border-slate-200">Transportation & Infrastructure (Function 400)</li>
              <li className="p-2 rounded bg-white border border-slate-200">Agriculture & Rural Development (Function 350)</li>
            </ul>
          </div>

          <div className="border border-slate-200 rounded-xl p-4 bg-slate-50 space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-bold text-slate-900 text-sm">Official Federal Agency Code (1 Category)</span>
              <span className="px-2 py-0.5 rounded bg-blue-100 text-blue-800 font-bold text-[10px]">Direct Agency Mapping</span>
            </div>
            <p className="text-slate-600 leading-relaxed">
              <strong>NASA & Space Exploration:</strong> Directly mapped to Federal Agency Code 080 (National Aeronautics and Space Administration) to track civil space exploration and aeronautics technology outlays.
            </p>
          </div>

          <div className="border border-purple-200 rounded-xl p-4 bg-purple-50/50 space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-bold text-purple-950 text-sm">Analytical Category Created by USAspending.us (1 Category)</span>
              <span className="px-2 py-0.5 rounded bg-purple-100 text-purple-800 font-bold text-[10px]">Derived Analytical Grouping</span>
            </div>
            <p className="text-slate-700 leading-relaxed">
              <strong>Science & Medical Research:</strong> This is an <em>analytical category created by USAspending.us</em>. Because federal scientific research spans multiple distinct budget functions (General Science Function 250 and Health Research Function 550), we aggregate research outlays from the National Institutes of Health (NIH, Department of Health and Human Services) and the National Science Foundation (NSF) under key code <code className="bg-purple-100 px-1 py-0.5 rounded text-purple-900">DERIVED_NIH_NSF</code>. This gives researchers an integrated view of federal basic and biomedical discovery investments.
            </p>
          </div>
        </div>
      </section>

      {/* 9. Visual Part-to-Whole Integrity */}
      <section id="chart-reconciliation" className="data-card p-6 sm:p-8 rounded-xl border border-slate-200 bg-white space-y-4">
        <div className="flex items-center space-x-2 text-blue-700">
          <TrendingUp className="w-5 h-5" />
          <h2 className="text-xl sm:text-2xl font-black text-slate-900">
            9. Visual Part-to-Whole Integrity & Chart Reconciliation
          </h2>
        </div>

        <p className="text-slate-700 text-sm leading-relaxed">
          A common pitfall in budget visualization is presenting partial category slices that do not sum to the total budget, misleading users into believing the displayed slices represent 100% of spending.
        </p>

        <p className="text-xs text-slate-600 leading-relaxed">
          On USAspending.us, all pie, donut, and percentage breakdown charts enforce strict visual part-to-whole reconciliation. When the top functional categories are displayed, an explicit <strong>&quot;Other / Remaining Federal Functions&quot;</strong> component is included. This ensures that every chart reconciles mathematically to exactly 100.0% of total annual federal outlays ($6.75 Trillion in FY2026).
        </p>
      </section>

      {/* 10. Historical Data & Inflation Policy */}
      <section id="historical-data" className="data-card p-6 sm:p-8 rounded-xl border border-slate-200 bg-white space-y-4">
        <div className="flex items-center space-x-2 text-blue-700">
          <Clock className="w-5 h-5" />
          <h2 className="text-xl sm:text-2xl font-black text-slate-900">
            10. Historical Data & Inflation Policy
          </h2>
        </div>

        <p className="text-slate-700 text-sm leading-relaxed">
          Historical spending tables and multi-year comparisons (such as FY2020 through FY2026) report <strong>nominal outlays</strong> as recorded by the U.S. Treasury in each respective fiscal year:
        </p>

        <ul className="list-disc pl-5 space-y-2 text-xs text-slate-600 leading-relaxed">
          <li>
            <strong>Nominal Figures:</strong> Unless an explicit &quot;Inflation-Adjusted&quot; toggle is displayed, numbers reflect unadjusted historical dollars enacted by Congress and executed by agencies during each fiscal period.
          </li>
          <li>
            <strong>Emergency & Supplemental Legislation:</strong> Discontinuities or sharp spikes in historical curves (such as in FY2020 and FY2021) reflect enacted emergency appropriations, including the CARES Act, the American Rescue Plan, and disaster relief measures.
          </li>
        </ul>
      </section>

      {/* 11. Limitations, Reporting Lags & Adjustments */}
      <section id="limitations" className="data-card p-6 sm:p-8 rounded-xl border border-slate-200 bg-white space-y-4">
        <div className="flex items-center space-x-2 text-blue-700">
          <AlertTriangle className="w-5 h-5 text-amber-600" />
          <h2 className="text-xl sm:text-2xl font-black text-slate-900">
            11. Data Limitations, Reporting Lags & Adjustments
          </h2>
        </div>

        <p className="text-slate-700 text-sm leading-relaxed">
          Users of federal data must remain aware of statutory reporting windows and public accounting constraints:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-slate-700">
          <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-1.5">
            <span className="font-bold text-slate-900 block text-sm">Agency Reporting Lags:</span>
            <p className="text-slate-600 leading-relaxed">
              Federal agencies submit procurement and grant data according to statutory timelines. Civilian agencies generally report within 30 days after the close of an accounting month, while defense procurement records may experience 90-day lags.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-1.5">
            <span className="font-bold text-slate-900 block text-sm">Deobligations & Negative Numbers:</span>
            <p className="text-slate-600 leading-relaxed">
              When an agency terminates or de-obligates funds from a prior-year contract, the reduction is posted as a negative obligation. In certain sub-accounts, negative amounts reflect adjustments rather than reverse payments.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-1.5">
            <span className="font-bold text-slate-900 block text-sm">Sub-tier Supply Chains:</span>
            <p className="text-slate-600 leading-relaxed">
              Federal spending portals comprehensively capture prime contractor awardees. Subcontractor reporting is subject to statutory reporting thresholds and may not capture downstream suppliers in full detail.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-1.5">
            <span className="font-bold text-slate-900 block text-sm">Unallocated National Expenses:</span>
            <p className="text-slate-600 leading-relaxed">
              Certain centralized expenses—such as net interest payments on the public debt or classified national security expenditures—are not attributed to specific states or congressional districts.
            </p>
          </div>
        </div>
      </section>

      {/* 12. Methodology Versioning & Review */}
      <section id="versioning" className="data-card p-6 sm:p-8 rounded-xl border border-slate-200 bg-white space-y-5">
        <div className="flex items-center space-x-2 text-blue-700">
          <ShieldCheck className="w-5 h-5" />
          <h2 className="text-xl sm:text-2xl font-black text-slate-900">
            12. Methodology Versioning & Maintainer Review
          </h2>
        </div>

        <p className="text-slate-700 text-sm leading-relaxed">
          This methodology document is maintained as a version-controlled technical specification. Any modification to mathematical formulas, baseline data sources, or category definitions triggers an increment in documentation versioning.
        </p>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border border-slate-200 rounded-lg overflow-hidden">
            <thead className="bg-slate-100 text-slate-900 font-bold uppercase text-[11px] border-b border-slate-200">
              <tr>
                <th className="p-3">Specification</th>
                <th className="p-3">Detail</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 text-slate-700">
              <tr>
                <td className="p-3 font-semibold text-slate-900">Documentation Version</td>
                <td className="p-3 font-mono font-bold text-blue-900">Version 1.0</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold text-slate-900">Primary Maintainer</td>
                <td className="p-3">
                  <Link href="/about/firoz-khan" className="text-blue-700 font-bold hover:underline">
                    Firoz Khan
                  </Link> (Independent Web Developer & Data Visualization Developer)
                </td>
              </tr>
              <tr>
                <td className="p-3 font-semibold text-slate-900">Effective Date</td>
                <td className="p-3">September 2026</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold text-slate-900">Next Scheduled Audit</td>
                <td className="p-3">October 2026 (Annual Fiscal Year Close Review)</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold text-slate-900">Reporting Discrepancies</td>
                <td className="p-3">
                  To report calculation questions or request methodology clarifications, contact our technical team via the{' '}
                  <Link href="/contact" className="text-blue-700 font-bold underline">
                    Contact Page
                  </Link>.
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="pt-4 border-t border-slate-100 flex flex-wrap gap-4 text-xs font-semibold text-blue-700">
          <Link href="/data-sources" className="hover:underline">
            ← Explore Official Data Sources
          </Link>
          <span className="text-slate-300">|</span>
          <Link href="/data-limitations" className="hover:underline">
            Data Limitations & Interpretation
          </Link>
          <span className="text-slate-300">|</span>
          <Link href="/disclaimer" className="hover:underline">
            Legal Disclaimer
          </Link>
          <span className="text-slate-300">|</span>
          <Link href="/calculators" className="hover:underline">
            Interactive Calculator Suite →
          </Link>
        </div>
      </section>
    </InfoPageLayout>
  );
}
