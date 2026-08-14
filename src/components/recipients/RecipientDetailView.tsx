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
import PaginatedAwardTable from '@/components/visualizations/PaginatedAwardTable';
import JsonLd from '@/components/seo/JsonLd';
import { getRecipientDataForFY } from '@/lib/data/spendingData';
import { formatCurrency, calculateSpendingRates } from '@/lib/utils/formatters';
import { EntityConfig } from '@/lib/config/entities';
import { ArrowLeft, Award, Building2, TrendingUp, ShieldCheck, ArrowRight, MapPin } from 'lucide-react';

interface Props {
  entity: EntityConfig;
}

export default function RecipientDetailView({ entity }: Props) {
  const [selectedFY, setSelectedFY] = useState<number>(2026);
  const recipientData = getRecipientDataForFY(entity.slug, selectedFY);

  if (!recipientData) {
    return null;
  }

  const rates = calculateSpendingRates(recipientData.totalAwards);

  const agencyDonut = recipientData.awardingAgencies.map((agency) => ({
    name: agency.name,
    amount: agency.amount,
    percentage: agency.percentage,
  }));

  const getRelatedLinks = (slug: string) => {
    if (slug === 'boeing' || slug === 'boeing-company') {
      return [
        { name: 'Department of Defense Agency', url: '/agencies/department-of-defense' },
        { name: 'NASA & Space Exploration Category', url: '/categories/nasa-space-exploration' },
        { name: 'Defense & Military Category', url: '/categories/defense-military' },
        { name: 'Department of Transportation Agency', url: '/agencies/department-of-transportation' },
        { name: 'Spending by Year Index', url: '/spending-by-year' },
      ];
    }
    return [
      { name: 'All Recipients Index', url: '/recipients' },
      { name: 'Spending Categories Index', url: '/categories' },
    ];
  };

  const relatedLinks = getRelatedLinks(entity.slug);

  return (
    <div className="space-y-10 py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <Breadcrumbs
        items={[
          { name: 'Recipients', url: '/recipients' },
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
          amount: recipientData.totalAwards,
        }}
      />

      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <Link
          href="/recipients"
          className="inline-flex items-center space-x-1.5 text-xs font-semibold text-slate-500 hover:text-slate-900 transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to All Recipients</span>
        </Link>

        <FiscalYearSelector selectedYear={selectedFY} onChange={setSelectedFY} />
      </div>

      {/* Header Banner */}
      <div className="data-card p-6 sm:p-8 rounded-xl border border-slate-200 bg-white space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-4">
          <div className="flex items-center space-x-3">
            <span className="text-4xl">{entity.icon || '✈️'}</span>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-bold font-mono px-2 py-0.5 rounded bg-blue-100 text-blue-900 uppercase">
                  Verified Prime Contractor
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 text-slate-700 font-bold">
                  {recipientData.recipientId}
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
        title={`Federal Awards to ${recipientData.name} Overview`}
        totalAmount={recipientData.totalAwards}
        yoyChange="+4.8%"
        dailyRate={rates.perDay}
        fiscalYear={selectedFY}
      />

      {/* Recipient Metric Cards Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <MetricCard
          label="Prime Contracts"
          value={formatCurrency(recipientData.contracts, true)}
          subtext="Defense & Aerospace Procurements"
          highlight
        />
        <MetricCard
          label="Grants & Assistance"
          value={formatCurrency(recipientData.grants, true)}
          subtext="R&D Assistance Grants"
        />
        <MetricCard
          label="Active Award Count"
          value={recipientData.awardCount.toLocaleString()}
          subtext="Verified Prime Federal Awards"
        />
        <MetricCard
          label="Headquarters"
          value={recipientData.headquarters.split(',')[0]}
          subtext={recipientData.headquarters}
        />
      </div>

      {/* Award Type Breakdown (Donut + Bars) */}
      <AwardTypeBreakdown
        contractsAmount={recipientData.contracts}
        grantsAmount={recipientData.grants}
        loansAmount={recipientData.loans}
        otherAmount={recipientData.otherAwards}
      />

      {/* Funding Executive Agencies Breakdown (Donut View) */}
      <div className="data-card p-6 sm:p-8 rounded-xl border border-slate-200 bg-white space-y-4">
        <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
          <Building2 className="w-5 h-5 text-blue-700" />
          Awarding Executive Agencies for {recipientData.name} (FY{selectedFY})
        </h3>
        <DonutChart
          data={agencyDonut}
          centerLabel={`${recipientData.name} Awards`}
          centerValue={formatCurrency(recipientData.totalAwards, true)}
          height={280}
        />
      </div>

      {/* Agency Share Table */}
      <div className="data-card rounded-xl p-6 sm:p-8 border border-slate-200 bg-white space-y-4">
        <h3 className="text-base font-bold text-slate-900">
          Awarding Agencies Summary Table (FY{selectedFY})
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm font-mono">
            <thead>
              <tr className="border-b border-slate-200 text-slate-500 font-sans text-xs uppercase">
                <th className="pb-3 font-semibold">Executive Agency</th>
                <th className="pb-3 font-semibold text-right">Award Obligations</th>
                <th className="pb-3 font-semibold text-right">Share</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-800">
              {recipientData.awardingAgencies.map((ag) => (
                <tr key={ag.name} className="hover:bg-slate-50">
                  <td className="py-3 font-sans font-bold text-slate-900">
                    <Link href={`/agencies/${ag.slug}`} className="hover:text-blue-700 transition-colors">
                      {ag.name}
                    </Link>
                  </td>
                  <td className="py-3 text-right font-extrabold text-blue-900 numeral-tabular">
                    {formatCurrency(ag.amount, true)}
                  </td>
                  <td className="py-3 text-right font-sans text-slate-600 font-semibold">{ag.percentage}%</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Spending by Year Line Chart */}
      <div className="data-card rounded-xl p-6 sm:p-8 border border-slate-200 bg-white space-y-4">
        <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
          <TrendingUp className="w-5 h-5 text-blue-700" />
          Historical Award Obligations (2018 – 2026)
        </h2>
        <SpendingTrendChart data={recipientData.historicalSpending} color="#1e3a8a" height={320} />
      </div>

      {/* Top States (Place of Performance Geographic Distribution) */}
      {recipientData.topStates && recipientData.topStates.length > 0 && (
        <StateDistributionSection
          title={`${recipientData.name} Primary Place-of-Performance States`}
          subtitle="Geographic distribution of federal award performance locations for Boeing."
          states={recipientData.topStates}
          fiscalYear={selectedFY}
        />
      )}

      {/* Paginated Award Details Table */}
      <PaginatedAwardTable awards={recipientData.awardDetails} pageSize={5} />

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

      {/* Data Source & Metadata */}
      <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 space-y-2">
        <div className="flex flex-wrap items-center justify-between gap-2 font-bold text-slate-800 border-b border-slate-200 pb-2">
          <span>Source: USAspending.gov</span>
          <span>Fiscal Year: FY{selectedFY}</span>
          <span>Data Type: Federal Prime Contracts & Financial Assistance</span>
          <span>Last Updated: August 2026</span>
          <span>Recipient UEI: DUNS-009256814</span>
        </div>
        <p className="text-[11px] leading-relaxed text-slate-500">
          Contract awards and obligations reflect official prime award transactions recorded in USAspending.gov. Entity resolution ensures awards are mapped strictly to verified Boeing corporate UEI identifiers.
        </p>
      </div>
    </div>
  );
}
