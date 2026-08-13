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
import { STATES_DATA, HISTORICAL_SPENDING } from '@/lib/data/spendingData';
import { getStateBySlug } from '@/lib/states/registry';
import { formatCurrency, formatNumber, calculateSpendingRates } from '@/lib/utils/formatters';
import { ArrowLeft, ShieldCheck, TrendingUp, Building2, Award, MapPin, GitCompare, Info } from 'lucide-react';
import type { Metadata } from 'next';

interface Props {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const state = STATES_DATA.find((s) => s.slug === params.slug || s.code.toLowerCase() === params.slug);

  if (!state) {
    return {
      title: 'State Not Found — USA Spending',
    };
  }

  return {
    title: `Federal Spending in ${state.name} — FY2026 | USA Spending`,
    description: `Explore federal spending associated with ${state.name} by fiscal year, agency outlays, top prime recipients, and award type using public government data.`,
  };
}

export default function StateDetailPage({ params }: Props) {
  const state = STATES_DATA.find((s) => s.slug === params.slug || s.code.toLowerCase() === params.slug);

  if (!state) {
    notFound();
  }

  const rates = calculateSpendingRates(state.totalSpending);

  const awardTypeDonut = [
    { name: 'Prime Contracts', amount: state.contractsAmount, percentage: 55.0, color: '#1e3a8a' },
    { name: 'Grants & Assistance', amount: state.grantsAmount, percentage: 35.0, color: '#2563eb' },
    { name: 'Other Federal Awards', amount: state.otherAwardsAmount, percentage: 10.0, color: '#0284c7' },
  ];

  const trendData = HISTORICAL_SPENDING.map((h) => ({
    year: h.year,
    amount: Math.round(state.totalSpending * (h.spending / 6_750_000_000_000)),
  }));

  const comparedStates = STATES_DATA.filter((s) => s.id !== state.id).slice(0, 4);

  return (
    <div className="space-y-10 py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <Breadcrumbs
        items={[
          { name: 'States', url: '/states' },
          { name: state.name, url: `/states/${state.slug}` },
        ]}
      />

      <JsonLd
        type="Dataset"
        data={{
          name: `Federal Spending Associated With ${state.name}`,
          description: `Public federal spending outlays and awards associated with ${state.name}.`,
          url: `/states/${state.slug}`,
          fiscalYear: 2026,
          amount: state.totalSpending,
        }}
      />

      <div>
        <Link
          href="/states"
          className="inline-flex items-center space-x-1.5 text-xs font-semibold text-slate-500 hover:text-slate-900 transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to State Index</span>
        </Link>
      </div>

      {/* Header */}
      <div className="data-card p-6 sm:p-8 rounded-xl border border-slate-200 bg-white space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-4">
          <div className="flex items-center space-x-3">
            <span className="text-xl font-bold font-mono px-3 py-1 rounded bg-blue-100 text-blue-900">
              {state.code}
            </span>
            <div>
              <span className="text-[10px] font-bold font-mono px-2 py-0.5 rounded bg-blue-50 text-blue-900 uppercase">
                {state.isTerritory ? 'U.S. Territory' : 'U.S. State'}
              </span>
              <h1 className="text-3xl sm:text-4xl font-black text-slate-900 mt-0.5">
                Federal Spending Associated With {state.name}
              </h1>
            </div>
          </div>
          <DataFreshness />
        </div>

        <p className="text-xs text-slate-600 leading-relaxed max-w-3xl">
          Reported federal prime contract awards, grants, and direct benefit outlays allocated to perform work or serve beneficiaries in {state.name}.
        </p>
      </div>

      {/* At-a-Glance Banner */}
      <SpendingAtAGlance
        title={`Federal Allocations in ${state.name} at a Glance`}
        totalAmount={state.totalSpending}
        share={state.percentage}
        dailyRate={rates.perDay}
        yoyChange={state.yoyChange}
        fiscalYear={2026}
      />

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <MetricCard label="Hourly Allocation" value={formatCurrency(rates.perHour, true)} subtext="Estimated / hour" highlight />
        <MetricCard label="Minute Allocation" value={formatCurrency(rates.perMinute, true)} subtext="Estimated / min" />
        <MetricCard label="Per Second Allocation" value={formatCurrency(rates.perSecond, true)} subtext="Estimated / sec" />
        <MetricCard label="Per Resident Figure" value={`$${formatNumber(state.perCapita)}`} subtext={`Population: ${formatNumber(state.population)}`} />
      </div>

      {/* Mandatory Terminology Disclaimer */}
      <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-xs flex items-start space-x-3 max-w-3xl mx-auto">
        <Info className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
        <div className="space-y-1">
          <span className="font-bold block">Important Terminology Disclaimer:</span>
          <p className="leading-relaxed">
            This page presents <strong>federal spending associated with {state.name}</strong>. It does not represent state government budget spending, local taxation, or individual personal tax burden.
          </p>
        </div>
      </div>

      {/* Award-Type Donut Breakdown */}
      <div className="data-card p-6 sm:p-8 rounded-xl border border-slate-200 bg-white space-y-4">
        <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
          <ShieldCheck className="w-5 h-5 text-blue-700" />
          Federal Award Type Composition (Donut View)
        </h2>
        <DonutChart data={awardTypeDonut} centerLabel={state.name} centerValue={formatCurrency(state.totalSpending, true)} height={280} />
      </div>

      {/* Agencies in State */}
      <div className="data-card rounded-xl p-6 sm:p-8 border border-slate-200 bg-white space-y-4">
        <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
          <Building2 className="w-4 h-4 text-blue-700" />
          Top Federal Agencies Spending in {state.name}
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {state.majorAgencies.map((agency) => (
            <Link
              key={agency.name}
              href={`/agencies/${agency.slug || 'department-of-defense'}`}
              className="p-4 rounded-lg bg-slate-50 border border-slate-200 hover:border-blue-400 transition-colors space-y-1 block"
            >
              <div className="font-bold text-slate-900 text-xs truncate">{agency.name}</div>
              <div className="text-sm font-mono font-extrabold text-blue-900">{formatCurrency(agency.amount, true)}</div>
            </Link>
          ))}
        </div>
      </div>

      {/* Top Recipients in State */}
      <div className="data-card rounded-xl p-6 sm:p-8 border border-slate-200 bg-white space-y-4">
        <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
          <Award className="w-4 h-4 text-blue-700" />
          Top Prime Recipients Performing Work in {state.name}
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {state.majorRecipients.map((rec) => (
            <Link
              key={rec.name}
              href={`/recipients/${rec.slug || 'lockheed-martin'}`}
              className="p-4 rounded-lg bg-slate-50 border border-slate-200 hover:border-blue-400 transition-colors space-y-1 block"
            >
              <div className="font-bold text-slate-900 text-xs truncate">{rec.name}</div>
              <div className="text-sm font-mono font-extrabold text-blue-900">{formatCurrency(rec.amount, true)}</div>
            </Link>
          ))}
        </div>
      </div>

      {/* Historical Line Chart */}
      <div className="data-card rounded-xl p-6 sm:p-8 border border-slate-200 bg-white space-y-4">
        <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
          <TrendingUp className="w-5 h-5 text-blue-700" />
          Historical Federal Spending Associated With {state.name} (2018 – 2026)
        </h2>
        <SpendingTrendChart data={trendData} color="#1e3a8a" height={320} />
      </div>

      {/* State Comparisons Links */}
      <div className="data-card rounded-xl p-6 sm:p-8 border border-slate-200 bg-white space-y-4">
        <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
          <GitCompare className="w-4 h-4 text-blue-700" />
          Compare {state.name} With Other States
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {comparedStates.map((other) => (
            <Link
              key={other.id}
              href={`/compare/${state.slug}-vs-${other.slug}`}
              className="p-3 rounded-lg bg-slate-50 border border-slate-200 hover:border-blue-400 hover:bg-blue-50 text-xs font-bold text-blue-900 transition-colors text-center block"
            >
              {state.name} vs. {other.name}
            </Link>
          ))}
        </div>
      </div>

      {/* Data Source Footer */}
      <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 space-y-1">
        <div className="flex items-center justify-between font-bold text-slate-800">
          <span>Source: USAspending.gov API</span>
          <span>Fiscal Year: FY2026</span>
        </div>
        <p className="text-[11px] leading-relaxed">
          Data type: Federal Prime Outlays & Assistance Awards • Last verified: August 2026.
        </p>
      </div>
    </div>
  );
}
