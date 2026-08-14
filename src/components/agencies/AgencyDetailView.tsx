'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Breadcrumbs from '@/components/navigation/Breadcrumbs';
import SpendingAtAGlance from '@/components/visualizations/SpendingAtAGlance';
import DonutChart from '@/components/visualizations/DonutChart';
import MetricCard from '@/components/visualizations/MetricCard';
import SpendingTrendChart from '@/components/charts/SpendingTrendChart';
import FiscalYearSelector from '@/components/visualizations/FiscalYearSelector';
import DataFreshness from '@/components/visualizations/DataFreshness';
import StateDistributionSection from '@/components/visualizations/StateDistributionSection';
import AwardTypeBreakdown from '@/components/visualizations/AwardTypeBreakdown';
import JsonLd from '@/components/seo/JsonLd';
import { getAgencyDataForFY, ANNUAL_TOTAL_BUDGET } from '@/lib/data/spendingData';
import { formatCurrency, calculateSpendingRates } from '@/lib/utils/formatters';
import { EntityConfig } from '@/lib/config/entities';
import { ArrowLeft, Building2, TrendingUp, Award, ShieldCheck, ArrowRight } from 'lucide-react';

interface Props {
  entity: EntityConfig;
}

export default function AgencyDetailView({ entity }: Props) {
  const [selectedFY, setSelectedFY] = useState<number>(2026);
  const agencyData = getAgencyDataForFY(entity.slug, selectedFY);

  if (!agencyData) {
    return null;
  }

  const rates = calculateSpendingRates(agencyData.budget);
  const totalFYBudget = ANNUAL_TOTAL_BUDGET[selectedFY] || ANNUAL_TOTAL_BUDGET[2026];

  const programDonut = agencyData.majorPrograms.map((prog) => ({
    name: prog.name,
    amount: prog.amount,
    percentage: prog.percentage,
  }));

  const maxRecipientAmt = Math.max(...agencyData.topRecipients.map((r) => r.amount));

  const getRelatedLinks = (slug: string) => {
    if (slug === 'department-of-transportation') {
      return [
        { name: 'Infrastructure & Transportation Category', url: '/categories/infrastructure-transport' },
        { name: 'Defense & Military Category', url: '/categories/defense-military' },
        { name: 'Federal Awards to Boeing', url: '/recipients/boeing' },
        { name: 'Spending by Year Index', url: '/spending-by-year' },
      ];
    }
    return [
      { name: 'All Executive Agencies', url: '/agencies' },
      { name: 'Spending Categories Index', url: '/categories' },
    ];
  };

  const relatedLinks = getRelatedLinks(entity.slug);

  return (
    <div className="space-y-10 py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <Breadcrumbs
        items={[
          { name: 'Agencies', url: '/agencies' },
          { name: entity.name, url: entity.canonicalUrl },
        ]}
      />

      <JsonLd
        type="Dataset"
        data={{
          name: entity.h1Title,
          description: entity.description,
          url: entity.canonicalUrl,
          fiscalYear: selectedFY,
          amount: agencyData.budget,
        }}
      />

      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <Link
          href="/agencies"
          className="inline-flex items-center space-x-1.5 text-xs font-semibold text-slate-500 hover:text-slate-900 transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Agency Index</span>
        </Link>

        <FiscalYearSelector selectedYear={selectedFY} onChange={setSelectedFY} />
      </div>

      {/* Agency Header Banner */}
      <div className="data-card p-6 sm:p-8 rounded-xl border border-slate-200 bg-white space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-4">
          <div className="flex items-center space-x-3">
            <span className="text-4xl">{entity.icon || '🏢'}</span>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-bold font-mono px-2 py-0.5 rounded bg-blue-100 text-blue-900 uppercase">
                  Toptier Agency {agencyData.code}
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 text-slate-700 font-bold">
                  {agencyData.abbreviation}
                </span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-black text-slate-900 mt-1">
                {entity.h1Title}
              </h1>
            </div>
          </div>
          <DataFreshness />
        </div>

        <p className="text-xs text-slate-600 leading-relaxed max-w-3xl">
          {entity.description}
        </p>
      </div>

      {/* At a Glance Section */}
      <SpendingAtAGlance
        title={`${agencyData.name} (${agencyData.abbreviation}) Overview`}
        totalAmount={agencyData.budget}
        share={agencyData.percentageOfTotal}
        dailyRate={rates.perDay}
        yoyChange="+5.2%"
        fiscalYear={selectedFY}
      />

      {/* Agency Stats Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <MetricCard label="Obligations" value={formatCurrency(agencyData.obligations, true)} subtext="Committed Budget Authority" highlight />
        <MetricCard label="Outlays" value={formatCurrency(agencyData.outlays, true)} subtext="Actual Federal Payments" />
        <MetricCard label="Daily Spending Rate" value={formatCurrency(rates.perDay, true)} subtext="Estimated / day" />
        <MetricCard label="Share of Total Budget" value={`${agencyData.percentageOfTotal}%`} subtext={`FY${selectedFY} Budget Share`} />
      </div>

      {/* Program Spending Composition (Donut Chart) */}
      <div className="data-card p-6 sm:p-8 rounded-xl border border-slate-200 bg-white space-y-4">
        <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
          <ShieldCheck className="w-5 h-5 text-blue-700" />
          {agencyData.abbreviation} Program Budget Composition (Donut View — FY{selectedFY})
        </h2>
        <DonutChart
          data={programDonut}
          centerLabel={`${agencyData.abbreviation} Budget`}
          centerValue={formatCurrency(agencyData.budget, true)}
          height={300}
        />
      </div>

      {/* Program Horizontal Bar Breakdown */}
      <div className="data-card p-6 sm:p-8 rounded-xl border border-slate-200 bg-white space-y-4">
        <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
          <Building2 className="w-4 h-4 text-blue-700" />
          Major Sub-Agencies & Programs Breakdown
        </h3>
        <div className="space-y-3">
          {agencyData.majorPrograms.map((prog) => (
            <div key={prog.name} className="space-y-1">
              <div className="flex justify-between text-xs font-semibold">
                <span className="text-slate-800">{prog.name}</span>
                <span className="font-mono text-slate-900 font-bold">
                  {formatCurrency(prog.amount, true)} ({prog.percentage}%)
                </span>
              </div>
              <div className="w-full h-2.5 rounded-full bg-slate-100 overflow-hidden">
                <div
                  className="h-full bg-blue-700 rounded-full"
                  style={{ width: `${Math.min(prog.percentage * 2, 100)}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Award Types Breakdown */}
      {agencyData.awardTypes && agencyData.awardTypes.length > 0 && (
        <AwardTypeBreakdown
          contractsAmount={agencyData.awardTypes.find((a) => a.name.includes('Contracts'))?.amount || agencyData.budget * 0.285}
          grantsAmount={agencyData.awardTypes.find((a) => a.name.includes('Grants'))?.amount || agencyData.budget * 0.611}
          otherAmount={agencyData.awardTypes.find((a) => a.name.includes('Other'))?.amount || agencyData.budget * 0.104}
        />
      )}

      {/* Historical Trend Line Chart */}
      <div className="data-card rounded-xl p-6 sm:p-8 border border-slate-200 bg-white space-y-4">
        <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
          <TrendingUp className="w-5 h-5 text-blue-700" />
          {agencyData.abbreviation} Spending by Year (2018 – 2026)
        </h2>
        <SpendingTrendChart data={agencyData.spendingTrend} color="#1e3a8a" height={320} />
      </div>

      {/* Top Contractor Recipients Horizontal Bar Chart */}
      <div className="data-card p-6 sm:p-8 rounded-xl border border-slate-200 bg-white space-y-4">
        <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
          <Award className="w-4 h-4 text-blue-700" />
          Top Contractor Recipients for {agencyData.name}
        </h3>
        <div className="space-y-3">
          {agencyData.topRecipients.map((rec) => {
            const barWidth = maxRecipientAmt > 0 ? (rec.amount / maxRecipientAmt) * 100 : 0;
            return (
              <div key={rec.name} className="space-y-1">
                <div className="flex justify-between text-xs font-semibold">
                  <Link href={`/recipients/${rec.slug}`} className="text-slate-800 hover:text-blue-700 font-bold transition-colors">
                    {rec.name}
                  </Link>
                  <span className="font-mono text-slate-900 font-bold">
                    {formatCurrency(rec.amount, true)} ({rec.percentage}%)
                  </span>
                </div>
                <div className="w-full h-2.5 rounded-full bg-slate-100 overflow-hidden">
                  <div
                    className="h-full bg-blue-900 rounded-full"
                    style={{ width: `${Math.max(barWidth, 2)}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* State Geographic Distribution */}
      {agencyData.topStates && agencyData.topStates.length > 0 && (
        <StateDistributionSection
          title={`${agencyData.abbreviation} State Geographic Distribution`}
          states={agencyData.topStates}
          fiscalYear={selectedFY}
        />
      )}

      {/* Detailed Multi-Year Table */}
      {agencyData.yearlyTable && agencyData.yearlyTable.length > 0 && (
        <div className="data-card rounded-xl p-6 sm:p-8 border border-slate-200 bg-white space-y-4">
          <h3 className="text-lg font-bold text-slate-900">
            {agencyData.abbreviation} Multi-Year Spending Table
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm font-mono">
              <thead>
                <tr className="border-b border-slate-200 text-slate-500 font-sans text-xs uppercase">
                  <th className="pb-3 font-semibold">Fiscal Year</th>
                  <th className="pb-3 font-semibold text-right">Budget Outlays</th>
                  <th className="pb-3 font-semibold text-right">YoY Change</th>
                  <th className="pb-3 font-semibold text-right">Share of Total Federal Budget</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-800">
                {agencyData.yearlyTable.map((row) => (
                  <tr key={row.year} className={`hover:bg-slate-50 ${row.year === selectedFY ? 'bg-blue-50/60 font-bold' : ''}`}>
                    <td className="py-3 font-mono text-slate-900">FY {row.year} {row.year === selectedFY ? '(Selected)' : ''}</td>
                    <td className="py-3 text-right font-extrabold text-blue-900 numeral-tabular">
                      {formatCurrency(row.amount, true)}
                    </td>
                    <td className="py-3 text-right font-sans text-slate-700 font-semibold">{row.yoyChange}</td>
                    <td className="py-3 text-right font-sans text-slate-600 font-semibold">{row.shareOfBudget}%</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Contextual Related Links */}
      <div className="data-card p-6 sm:p-8 rounded-xl border border-slate-200 bg-white space-y-4">
        <h3 className="text-base font-bold text-slate-900">
          Related Contextual Data & Detail Pages
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {relatedLinks.map((link) => (
            <Link
              key={link.url}
              href={link.url}
              className="p-3 rounded-lg bg-slate-50 border border-slate-200 hover:border-blue-500 hover:bg-blue-50/50 transition-colors flex items-center justify-between text-xs font-bold text-slate-800 group"
            >
              <span>{link.name}</span>
              <ArrowRight className="w-3.5 h-3.5 text-blue-600 group-hover:translate-x-1 transition-transform" />
            </Link>
          ))}
        </div>
      </div>

      {/* Source Metadata */}
      <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 space-y-2">
        <div className="flex flex-wrap items-center justify-between gap-2 font-bold text-slate-800 border-b border-slate-200 pb-2">
          <span>Source: USAspending.gov</span>
          <span>Fiscal Year: FY{selectedFY}</span>
          <span>Data Type: Federal Budget Outlays</span>
          <span>Last Updated: August 2026</span>
          <span>Classification: Official Toptier Agency</span>
        </div>
        <p className="text-[11px] leading-relaxed text-slate-500">
          Financial data reflects official U.S. Department of Transportation budget authority, obligations, outlays, and prime contract awards published in the USAspending.gov database.
        </p>
      </div>
    </div>
  );
}
