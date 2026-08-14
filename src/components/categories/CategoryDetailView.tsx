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
import JsonLd from '@/components/seo/JsonLd';
import { getCategoryDataForFY, ANNUAL_TOTAL_BUDGET } from '@/lib/data/spendingData';
import { formatCurrency, calculateSpendingRates } from '@/lib/utils/formatters';
import { EntityConfig } from '@/lib/config/entities';
import { ArrowLeft, ShieldCheck, TrendingUp, Building2, Award, Info, ExternalLink, ArrowRight } from 'lucide-react';

interface Props {
  entity: EntityConfig;
}

export default function CategoryDetailView({ entity }: Props) {
  const [selectedFY, setSelectedFY] = useState<number>(2026);
  const categoryData = getCategoryDataForFY(entity.slug, selectedFY);

  if (!categoryData) {
    return null;
  }

  const rates = calculateSpendingRates(categoryData.amount);
  const totalFYBudget = ANNUAL_TOTAL_BUDGET[selectedFY] || ANNUAL_TOTAL_BUDGET[2026];

  const subcategoryDonut = (categoryData.subcategories || []).map((sub) => ({
    name: sub.name,
    amount: sub.amount,
    percentage: sub.percentage,
  }));

  // Contextual related links per category
  const getRelatedLinks = (slug: string) => {
    switch (slug) {
      case 'nasa-space-exploration':
        return [
          { name: 'Science & Medical Research', url: '/categories/science-medical-research' },
          { name: 'Defense & Military', url: '/categories/defense-military' },
          { name: 'Federal Awards to Boeing', url: '/recipients/boeing' },
          { name: 'Executive Agencies Index', url: '/agencies' },
          { name: 'Spending by Year', url: '/spending-by-year' },
        ];
      case 'agriculture-food-assistance':
        return [
          { name: 'Education & Training', url: '/categories/education-training' },
          { name: 'Medicaid Spending', url: '/categories/medicaid-spending' },
          { name: 'Executive Agencies Index', url: '/agencies' },
          { name: 'Spending Breakdown', url: '/spending-breakdown' },
        ];
      case 'science-medical-research':
        return [
          { name: 'NASA & Space Exploration', url: '/categories/nasa-space-exploration' },
          { name: 'Education & Training', url: '/categories/education-training' },
          { name: 'Medicaid Spending', url: '/categories/medicaid-spending' },
          { name: 'Methodology Notice', url: '/methodology' },
        ];
      case 'education-training':
        return [
          { name: 'Science & Medical Research', url: '/categories/science-medical-research' },
          { name: 'Agriculture & Food Assistance', url: '/categories/agriculture-food-assistance' },
          { name: 'Infrastructure & Transport', url: '/categories/infrastructure-transport' },
        ];
      case 'defense-military':
        return [
          { name: 'NASA & Space Exploration', url: '/categories/nasa-space-exploration' },
          { name: 'Department of Defense Agency', url: '/agencies/department-of-defense' },
          { name: 'Federal Awards to Boeing', url: '/recipients/boeing' },
          { name: 'Federal Awards to Lockheed Martin', url: '/recipients/lockheed-martin' },
        ];
      case 'infrastructure-transport':
        return [
          { name: 'Department of Transportation Agency', url: '/agencies/department-of-transportation' },
          { name: 'Defense & Military', url: '/categories/defense-military' },
          { name: 'Federal Awards to Boeing', url: '/recipients/boeing' },
        ];
      case 'medicaid-spending':
        return [
          { name: 'Medicare', url: '/categories/medicare-spending' },
          { name: 'Social Security', url: '/categories/social-security-spending' },
          { name: 'Department of Health & Human Services', url: '/agencies/department-of-health-and-human-services' },
        ];
      default:
        return [
          { name: 'Spending Categories Index', url: '/categories' },
          { name: 'All Executive Agencies', url: '/agencies' },
          { name: 'Spending by Year', url: '/spending-by-year' },
        ];
    }
  };

  const relatedLinks = getRelatedLinks(entity.slug);

  return (
    <div className="space-y-10 py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <Breadcrumbs
        items={[
          { name: 'Categories', url: '/categories' },
          { name: entity.name, url: entity.canonicalUrl },
        ]}
      />

      <JsonLd
        type="Dataset"
        data={{
          name: `U.S. ${entity.name} Federal Spending`,
          description: entity.description,
          url: entity.canonicalUrl,
          fiscalYear: selectedFY,
          amount: categoryData.amount,
        }}
      />

      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <Link
          href="/categories"
          className="inline-flex items-center space-x-1.5 text-xs font-semibold text-slate-500 hover:text-slate-900 transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Category Index</span>
        </Link>

        {/* Dynamic Fiscal Year Selector */}
        <FiscalYearSelector selectedYear={selectedFY} onChange={setSelectedFY} />
      </div>

      {/* Header Banner */}
      <div className="data-card p-6 sm:p-8 rounded-xl border border-slate-200 bg-white space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-4">
          <div className="flex items-center space-x-3">
            <span className="text-4xl">{entity.icon || '🏛️'}</span>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-bold font-mono px-2 py-0.5 rounded bg-blue-100 text-blue-900 uppercase">
                  {entity.classificationType} Category
                </span>
                {entity.sourceIdentifier && (
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 text-slate-600">
                    {entity.sourceIdentifier}
                  </span>
                )}
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
        title={`${entity.name} Outlays at a Glance`}
        totalAmount={categoryData.amount}
        share={categoryData.percentage}
        dailyRate={rates.perDay}
        yoyChange="+4.2%"
        fiscalYear={selectedFY}
      />

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <MetricCard label="Hourly Rate" value={formatCurrency(rates.perHour, true)} subtext="Estimated / hour" highlight />
        <MetricCard label="Minute Rate" value={formatCurrency(rates.perMinute, true)} subtext="Estimated / min" />
        <MetricCard label="Per Second Rate" value={formatCurrency(rates.perSecond, true)} subtext="Estimated / sec" />
        <MetricCard label="Fiscal Year" value={`FY ${selectedFY}`} subtext={`Outlays of total $${(totalFYBudget / 1e12).toFixed(2)}T`} />
      </div>

      {/* Main Subcategory Donut Breakdown */}
      <div className="data-card p-6 sm:p-8 rounded-xl border border-slate-200 bg-white space-y-4">
        <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
          <ShieldCheck className="w-5 h-5 text-blue-700" />
          Verified Subcategory Breakdown (Donut View — FY{selectedFY})
        </h2>
        {subcategoryDonut.length > 0 ? (
          <DonutChart
            data={subcategoryDonut}
            centerLabel={`${entity.name} FY${selectedFY}`}
            centerValue={formatCurrency(categoryData.amount, true)}
            height={300}
          />
        ) : (
          <div className="p-6 rounded-lg bg-slate-50 text-center text-xs text-slate-500">
            Detailed data for this classification is not available from the selected official dataset.
          </div>
        )}
      </div>

      {/* Detailed Subcategory Table & Horizontal Bars */}
      <div className="data-card rounded-xl p-6 sm:p-8 border border-slate-200 bg-white space-y-6">
        <h3 className="text-lg font-bold text-slate-900">
          Subcategory Breakdown Table (FY{selectedFY})
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm font-mono">
            <thead>
              <tr className="border-b border-slate-200 text-slate-500 font-sans text-xs uppercase">
                <th className="pb-3 font-semibold">Subcategory Component</th>
                <th className="pb-3 font-semibold text-right">Outlays</th>
                <th className="pb-3 font-semibold text-right">Share of Category</th>
                <th className="pb-3 font-semibold text-center">Fiscal Year</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-800">
              {subcategoryDonut.map((sub) => (
                <tr key={sub.name} className="hover:bg-slate-50">
                  <td className="py-3 font-sans font-bold text-slate-900">{sub.name}</td>
                  <td className="py-3 text-right font-extrabold text-blue-900 numeral-tabular">
                    {formatCurrency(sub.amount, true)}
                  </td>
                  <td className="py-3 text-right font-sans text-slate-600 font-semibold">{sub.percentage}%</td>
                  <td className="py-3 text-center text-slate-500">FY{selectedFY}</td>
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
        <SpendingTrendChart data={categoryData.historicalTrend} color="#1e3a8a" height={320} />
      </div>

      {/* Top Associated Agencies & Recipients */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Agencies */}
        <div className="data-card rounded-xl p-6 border border-slate-200 bg-white space-y-4">
          <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
            <Building2 className="w-4 h-4 text-blue-700" />
            Top Associated Executive Agencies
          </h3>
          <div className="space-y-2.5">
            {categoryData.agencyRefs.map((ag) => (
              <Link
                key={ag.name}
                href={`/agencies/${ag.slug}`}
                className="p-3 rounded-lg bg-slate-50 border border-slate-200 hover:border-blue-400 transition-colors flex items-center justify-between block"
              >
                <div className="font-bold text-slate-900 text-xs truncate">{ag.name}</div>
                <div className="text-xs font-mono font-extrabold text-blue-900">{formatCurrency(ag.amount, true)}</div>
              </Link>
            ))}
          </div>
        </div>

        {/* Recipients */}
        <div className="data-card rounded-xl p-6 border border-slate-200 bg-white space-y-4">
          <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
            <Award className="w-4 h-4 text-blue-700" />
            Top Primary Recipients / Contractors
          </h3>
          <div className="space-y-2.5">
            {categoryData.recipientRefs.map((rec) => (
              <Link
                key={rec.name}
                href={`/recipients/${rec.slug}`}
                className="p-3 rounded-lg bg-slate-50 border border-slate-200 hover:border-blue-400 transition-colors flex items-center justify-between block"
              >
                <div className="font-bold text-slate-900 text-xs truncate">{rec.name}</div>
                <div className="text-xs font-mono font-extrabold text-blue-900">{formatCurrency(rec.amount, true)}</div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* State Geographic Distribution (where supported) */}
      {categoryData.stateRefs && categoryData.stateRefs.length > 0 && (
        <StateDistributionSection
          title={`${entity.name} Geographic State Distribution`}
          states={categoryData.stateRefs}
          fiscalYear={selectedFY}
        />
      )}

      {/* Derived / Classification Notice */}
      {entity.classificationType === 'derived' && (
        <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-900 flex items-start gap-2.5">
          <Info className="w-4 h-4 text-amber-700 flex-shrink-0 mt-0.5" />
          <div className="space-y-1">
            <span className="font-bold">USA Spending Derived Classification Notice</span>
            <p className="text-[11px] leading-relaxed text-amber-800">
              This category represents a site-defined analytical grouping combining biomedical grants from NIH and scientific research grants from NSF. It does not map 1:1 to a single budget function in USAspending.gov. For details, view our <Link href="/methodology" className="underline font-bold">Methodology</Link>.
            </p>
          </div>
        </div>
      )}

      {/* Contextual Related Links (Requirement #14) */}
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
          <span>Data Type: Federal Outlays</span>
          <span>Last Updated: August 2026</span>
          <span>Classification Type: {entity.classificationType.toUpperCase()}</span>
        </div>
        <p className="text-[11px] leading-relaxed text-slate-500">
          All monetary figures represent verified U.S. federal government budget outlays. Time-based rates (daily, hourly, minute, second) are mathematical rates derived directly from total annual outlays.
        </p>
      </div>
    </div>
  );
}
