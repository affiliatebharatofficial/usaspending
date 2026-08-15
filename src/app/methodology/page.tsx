import React from 'react';
import InfoPageLayout from '@/components/layout/InfoPageLayout';
import JsonLd from '@/components/seo/JsonLd';
import { SITE_CONFIG } from '@/lib/config/site';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: `USA Spending Methodology | How Government Spending Data Is Calculated`,
  description: `Read the official methodology and formulas for federal spending outlays, rate calculations, pie chart reconciliation, and data baselines.`,
  alternates: {
    canonical: 'https://www.usaspending.us/methodology',
  },
};

export default function MethodologyPage() {
  const toc = [
    { id: 'overview', title: '1. Introduction' },
    { id: 'data-types', title: '2. Data Types & Financial Metrics' },
    { id: 'fiscal-year', title: '3. Fiscal Year Baseline' },
    { id: 'rate-calculations', title: '4. Spending Rate Calculations' },
    { id: 'percentage-calculations', title: '5. Percentage Calculations' },
    { id: 'pie-chart-reconciliation', title: '6. Pie Chart Reconciliation' },
    { id: 'historical-data', title: '7. Historical Data Consistency' },
    { id: 'state-methodology', title: '8. State Geographic Allocation' },
    { id: 'recipient-methodology', title: '9. Recipient Data Attribution' },
    { id: 'category-methodology', title: '10. Category Classification' },
    { id: 'data-limitations', title: '11. Limitations & Updates' },
  ];

  return (
    <InfoPageLayout
      title="Data & Calculation Methodology"
      subtitle="Comprehensive transparency on data ingestion, formulas, fiscal-year baselines, and mathematical models."
      breadcrumbName="Methodology"
      breadcrumbUrl="/methodology"
      toc={toc}
    >
      <JsonLd
        type="TechArticle"
        data={{
          name: 'USA Spending Data & Calculation Methodology',
          description: 'Official methodology and formulas for federal spending calculations.',
          url: '/methodology',
        }}
      />

      <section id="overview" className="data-card p-6 sm:p-8 rounded-xl border border-slate-200 bg-white space-y-4">
        <h2 className="text-2xl font-black text-slate-900">1. Introduction</h2>
        <p className="text-slate-600 text-sm leading-relaxed">
          USA Spending ingests, normalizes, and presents official U.S. government spending data released by federal agencies. Because public accounting datasets use technical terminology, this page documents our exact formulas, data definitions, and visual normalization practices.
        </p>
      </section>

      <section id="data-types" className="data-card p-6 sm:p-8 rounded-xl border border-slate-200 bg-white space-y-4">
        <h2 className="text-2xl font-black text-slate-900">2. Data Types & Financial Metrics</h2>
        <div className="space-y-4 text-xs text-slate-700">
          <div>
            <strong className="text-slate-900 block text-sm">Outlays (Actual Payments):</strong>
            Outlays represent actual cash disbursements made by the U.S. Treasury to liquidate federal obligations (e.g., checks issued or direct electronic transfers). Unless otherwise specified, main figures on USA Spending represent outlays.
          </div>
          <div>
            <strong className="text-slate-900 block text-sm">Obligations (Binding Commitments):</strong>
            Obligations are legally binding agreements (such as awarded contracts or signed grant agreements) that will result in outlays immediately or in future periods.
          </div>
          <div>
            <strong className="text-slate-900 block text-sm">Budgetary Resources:</strong>
            Total funding available to an agency, including congressional appropriations, borrowing authority, and spending authority from offsetting collections.
          </div>
          <div>
            <strong className="text-slate-900 block text-sm">Contracts vs Grants vs Loans:</strong>
            Prime contract awards represent purchases of goods and services. Grants represent financial assistance awarded to non-federal entities. Loans represent face values or subsidy costs of federal lending programs.
          </div>
        </div>
      </section>

      <section id="fiscal-year" className="data-card p-6 sm:p-8 rounded-xl border border-slate-200 bg-white space-y-4">
        <h2 className="text-2xl font-black text-slate-900">3. Fiscal Year Baseline</h2>
        <p className="text-slate-600 text-sm leading-relaxed">
          U.S. Federal Fiscal Years (FY) do not match calendar years. A federal fiscal year begins on <strong>October 1st</strong> of the preceding calendar year and ends on <strong>September 30th</strong>.
        </p>
        <div className="p-3 rounded-lg bg-slate-50 border border-slate-200 font-mono text-xs text-slate-800">
          FY2026 = October 1, 2025 – September 30, 2026 (365 Days)
          <br />
          FY2024 = October 1, 2023 – September 30, 2024 (366 Days — Leap Year)
        </div>
      </section>

      <section id="rate-calculations" className="data-card p-6 sm:p-8 rounded-xl border border-slate-200 bg-white space-y-4">
        <h2 className="text-2xl font-black text-slate-900">4. Spending Rate Calculations</h2>
        <p className="text-slate-600 text-sm leading-relaxed">
          To help users conceptualize trillion-dollar budgets, annual outlays are converted into per-timeframe rates:
        </p>
        <div className="p-4 rounded-xl bg-slate-900 text-slate-100 font-mono text-xs space-y-2">
          <div>Daily Rate = Annual Outlays ÷ Days in Fiscal Year (365 or 366)</div>
          <div>Hourly Rate = Daily Rate ÷ 24</div>
          <div>Minute Rate = Hourly Rate ÷ 60</div>
          <div>Second Rate = Minute Rate ÷ 60</div>
        </div>
        <p className="text-xs text-slate-500 italic">
          Disclaimer: Rate conversions are mathematical averages calculated over the fiscal year. They do not represent live per-second bank wire transactions.
        </p>
      </section>

      <section id="percentage-calculations" className="data-card p-6 sm:p-8 rounded-xl border border-slate-200 bg-white space-y-4">
        <h2 className="text-2xl font-black text-slate-900">5. Percentage Calculations</h2>
        <p className="text-slate-600 text-sm leading-relaxed">
          Percentage share is computed strictly as:
        </p>
        <div className="p-3 rounded-lg bg-slate-50 font-mono text-xs text-slate-900">
          Percentage Share = (Category or State Outlays ÷ Total Federal Outlays) × 100
        </div>
      </section>

      <section id="pie-chart-reconciliation" className="data-card p-6 sm:p-8 rounded-xl border border-slate-200 bg-white space-y-4">
        <h2 className="text-2xl font-black text-slate-900">6. Pie Chart Reconciliation</h2>
        <p className="text-slate-600 text-sm leading-relaxed">
          Pie and donut charts enforce strict visual part-to-whole integrity. Where top categories are displayed, an explicit <strong>"Other / Remaining Federal Functions"</strong> component reconciles the chart to 100.0% of total federal spending ($6.75 Trillion in FY2026).
        </p>
      </section>

      <section id="historical-data" className="data-card p-6 sm:p-8 rounded-xl border border-slate-200 bg-white space-y-4">
        <h2 className="text-2xl font-black text-slate-900">7. Historical Data Consistency</h2>
        <p className="text-slate-600 text-sm leading-relaxed">
          Historical trend curves preserve historical reporting baselines without inflation adjustment unless specifically labeled.
        </p>
      </section>

      <section id="state-methodology" className="data-card p-6 sm:p-8 rounded-xl border border-slate-200 bg-white space-y-4">
        <h2 className="text-2xl font-black text-slate-900">8. State Geographic Allocation</h2>
        <p className="text-slate-600 text-sm leading-relaxed font-semibold text-slate-900">
          "Federal spending associated with a state" represents federal prime contract performance locations or recipient addresses in USAspending datasets.
        </p>
        <p className="text-slate-600 text-xs leading-relaxed">
          It does NOT represent state government tax revenue, local municipal budgets, or direct personal tax burdens.
        </p>
      </section>

      <section id="recipient-methodology" className="data-card p-6 sm:p-8 rounded-xl border border-slate-200 bg-white space-y-4">
        <h2 className="text-2xl font-black text-slate-900">9. Recipient Data Attribution</h2>
        <p className="text-slate-600 text-sm leading-relaxed">
          Recipient data displays prime awardees as registered in SAM.gov / USAspending. Inclusion of an entity does not imply political endorsement or wrongdoing.
        </p>
      </section>

      <section id="category-methodology" className="data-card p-6 sm:p-8 rounded-xl border border-slate-200 bg-white space-y-4">
        <h2 className="text-2xl font-black text-slate-900">10. Category Classification</h2>
        <p className="text-slate-600 text-sm leading-relaxed">
          Category groupings correspond to official OMB budget function codes and USAspending major object classes.
        </p>
      </section>

      <section id="data-limitations" className="data-card p-6 sm:p-8 rounded-xl border border-slate-200 bg-white space-y-4">
        <h2 className="text-2xl font-black text-slate-900">11. Limitations & Updates</h2>
        <p className="text-slate-600 text-sm leading-relaxed">
          Federal reporting is subject to agency revisions and reporting lags. Data displays update dynamically as official feeds refresh.
        </p>
      </section>
    </InfoPageLayout>
  );
}
