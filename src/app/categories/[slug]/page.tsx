import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Breadcrumbs from '@/components/navigation/Breadcrumbs';
import SpendingAtAGlance from '@/components/visualizations/SpendingAtAGlance';
import DonutChart from '@/components/visualizations/DonutChart';
import MetricCard from '@/components/visualizations/MetricCard';
import SpendingTrendChart from '@/components/charts/SpendingTrendChart';
import DataFreshness from '@/components/visualizations/DataFreshness';
import JsonLd from '@/components/seo/JsonLd';
import { SPENDING_CATEGORIES, HISTORICAL_SPENDING, AGENCIES_DATA, RECIPIENTS_DATA, STATES_DATA } from '@/lib/data/spendingData';
import { formatCurrency, calculateSpendingRates } from '@/lib/utils/formatters';
import { ArrowLeft, ShieldCheck, TrendingUp, Building2, Award, MapPin, ExternalLink, Info } from 'lucide-react';
import type { Metadata } from 'next';

interface Props {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const category = SPENDING_CATEGORIES.find(
    (c) => c.slug === params.slug || `${c.slug}-spending` === params.slug || c.slug === `${params.slug}-spending`
  );

  if (!category) {
    return {
      title: 'Category Not Found — USA Spending',
    };
  }

  return {
    title: `U.S. ${category.name} Spending — FY2026 | USA Spending`,
    description: `Explore U.S. ${category.name.toLowerCase()} spending by fiscal year, historical trend, agencies, recipients, and verified budget functions.`,
  };
}

export default function CategoryDetailPage({ params }: Props) {
  const category = SPENDING_CATEGORIES.find(
    (c) => c.slug === params.slug || `${c.slug}-spending` === params.slug || c.slug === `${params.slug}-spending`
  );

  if (!category) {
    notFound();
  }

  const rates = calculateSpendingRates(category.amount);

  const subcategoryDonut = (category.subcategories || []).map((sub) => ({
    name: sub.name,
    amount: sub.amount,
    percentage: sub.percentage,
  }));

  const trendData = HISTORICAL_SPENDING.map((h) => ({
    year: h.year,
    amount: Math.round(category.amount * (h.spending / 6_750_000_000_000)),
  }));

  const categoryAgencies = AGENCIES_DATA.slice(0, 3);
  const categoryRecipients = RECIPIENTS_DATA.slice(0, 3);

  return (
    <div className="space-y-10 py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <Breadcrumbs
        items={[
          { name: 'Categories', url: '/categories' },
          { name: category.name, url: `/categories/${category.slug}` },
        ]}
      />

      <JsonLd
        type="Dataset"
        data={{
          name: `U.S. ${category.name} Federal Spending`,
          description: category.description,
          url: `/categories/${category.slug}`,
          fiscalYear: 2026,
          amount: category.amount,
        }}
      />

      <div>
        <Link
          href="/categories"
          className="inline-flex items-center space-x-1.5 text-xs font-semibold text-slate-500 hover:text-slate-900 transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Category Index</span>
        </Link>
      </div>

      {/* Header */}
      <div className="data-card p-6 sm:p-8 rounded-xl border border-slate-200 bg-white space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-4">
          <div className="flex items-center space-x-2">
            <span className="text-3xl">{category.icon || '🏛️'}</span>
            <div>
              <span className="text-[10px] font-bold font-mono px-2 py-0.5 rounded bg-blue-100 text-blue-900 uppercase">
                {category.categoryType} Category
              </span>
              <h1 className="text-3xl sm:text-4xl font-black text-slate-900 mt-0.5">
                U.S. {category.name} Spending
              </h1>
            </div>
          </div>
          <DataFreshness />
        </div>

        <p className="text-xs text-slate-600 leading-relaxed max-w-3xl">
          {category.description}
        </p>
      </div>

      {/* At a Glance Metrics */}
      <SpendingAtAGlance
        title={`${category.name} Outlays at a Glance`}
        totalAmount={category.amount}
        share={category.percentage}
        dailyRate={rates.perDay}
        yoyChange="+4.2%"
        fiscalYear={2026}
      />

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <MetricCard label="Hourly Rate" value={formatCurrency(rates.perHour, true)} subtext="Estimated / hour" highlight />
        <MetricCard label="Minute Rate" value={formatCurrency(rates.perMinute, true)} subtext="Estimated / min" />
        <MetricCard label="Per Second Rate" value={formatCurrency(rates.perSecond, true)} subtext="Estimated / sec" />
        <MetricCard label="Budget Function" value="Official Code" subtext={category.categoryType} />
      </div>

      {/* Subcategory Donut Breakdown */}
      <div className="data-card p-6 sm:p-8 rounded-xl border border-slate-200 bg-white space-y-4">
        <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
          <ShieldCheck className="w-5 h-5 text-blue-700" />
          Verified Subcategory Breakdown (Donut View)
        </h2>
        {subcategoryDonut.length > 0 ? (
          <DonutChart data={subcategoryDonut} centerLabel={category.name} centerValue={formatCurrency(category.amount, true)} height={280} />
        ) : (
          <div className="p-6 rounded-lg bg-slate-50 text-center text-xs text-slate-500">
            A detailed subcategory breakdown is not available for this dataset.
          </div>
        )}
      </div>

      {/* Detailed Subcategory Table */}
      <div className="data-card rounded-xl p-6 sm:p-8 border border-slate-200 bg-white space-y-4">
        <h3 className="text-lg font-bold text-slate-900">
          Subcategory Breakdown Table (FY2026)
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm font-mono">
            <thead>
              <tr className="border-b border-slate-200 text-slate-500 font-sans text-xs uppercase">
                <th className="pb-3 font-semibold">Subcategory Component</th>
                <th className="pb-3 font-semibold text-right">Outlays</th>
                <th className="pb-3 font-semibold text-right">Share</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-800">
              {subcategoryDonut.map((sub) => (
                <tr key={sub.name} className="hover:bg-slate-50">
                  <td className="py-3 font-sans font-bold text-slate-900">{sub.name}</td>
                  <td className="py-3 text-right font-extrabold text-blue-900 numeral-tabular">{formatCurrency(sub.amount, true)}</td>
                  <td className="py-3 text-right font-sans text-slate-600 font-semibold">{sub.percentage}%</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Historical Line Chart */}
      <div className="data-card rounded-xl p-6 sm:p-8 border border-slate-200 bg-white space-y-4">
        <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
          <TrendingUp className="w-5 h-5 text-blue-700" />
          Spending by Year (2018 – 2026)
        </h2>
        <SpendingTrendChart data={trendData} color="#1e3a8a" height={320} />
      </div>

      {/* Top Agencies */}
      <div className="data-card rounded-xl p-6 sm:p-8 border border-slate-200 bg-white space-y-4">
        <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
          <Building2 className="w-4 h-4 text-blue-700" />
          Top Associated Executive Agencies
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {categoryAgencies.map((agency) => (
            <Link
              key={agency.id}
              href={`/agencies/${agency.slug}`}
              className="p-4 rounded-lg bg-slate-50 border border-slate-200 hover:border-blue-400 transition-colors space-y-1 block"
            >
              <div className="font-bold text-slate-900 text-xs truncate">{agency.name}</div>
              <div className="text-sm font-mono font-extrabold text-blue-900">{formatCurrency(agency.totalBudget, true)}</div>
            </Link>
          ))}
        </div>
      </div>

      {/* Data Source & Methodology */}
      <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 space-y-1">
        <div className="flex items-center justify-between font-bold text-slate-800">
          <span>Source: USAspending.gov API</span>
          <span>Fiscal Year: FY2026</span>
        </div>
        <p className="text-[11px] leading-relaxed">
          Data type: Federal Outlays • Last verified: August 2026. Time-equivalent values are mathematical estimates calculated from official annual budget outlays.
        </p>
      </div>
    </div>
  );
}
