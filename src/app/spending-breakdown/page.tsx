'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Breadcrumbs from '@/components/navigation/Breadcrumbs';
import SpendingBreakdown from '@/components/visualizations/SpendingBreakdown';
import DonutChart from '@/components/visualizations/DonutChart';
import MetricCard from '@/components/visualizations/MetricCard';
import FiscalYearSelector from '@/components/visualizations/FiscalYearSelector';
import DataFreshness from '@/components/visualizations/DataFreshness';
import { SPENDING_CATEGORIES, RECONCILED_PIE_DATA, TOTAL_FEDERAL_SPENDING_FY2026 } from '@/lib/data/spendingData';
import { formatCurrency, calculateSpendingRates } from '@/lib/utils/formatters';
import { PieChart, ArrowLeft, Filter, Layers, Building2, Award } from 'lucide-react';

export default function SpendingBreakdownPage() {
  const [selectedFY, setSelectedFY] = useState<number>(2026);
  const [selectedCategorySlug, setSelectedCategorySlug] = useState<string>(SPENDING_CATEGORIES[0].slug);

  const selectedCategory = SPENDING_CATEGORIES.find((c) => c.slug === selectedCategorySlug) || SPENDING_CATEGORIES[0];
  const rates = calculateSpendingRates(selectedCategory.amount);

  const donutItems = RECONCILED_PIE_DATA.map((d) => ({
    name: d.category,
    amount: d.amount,
    percentage: d.percentage,
    slug: d.slug,
  }));

  const breakdownData = SPENDING_CATEGORIES.map((c) => ({
    id: c.id,
    name: c.name,
    category: c.name,
    amount: c.amount,
    annualAmount: c.amount,
    percentage: c.percentage,
    dailyRate: c.dailyRate,
    hourlyRate: c.hourlyRate,
    minuteRate: c.minuteRate,
    secondRate: c.secondRate,
    categoryType: c.categoryType,
    description: c.description,
    sourceUrl: c.sourceUrl,
    icon: c.icon,
  }));

  return (
    <div className="space-y-10 py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <Breadcrumbs items={[{ name: 'Spending Breakdown', url: '/spending-breakdown' }]} />

      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-6">
        <div>
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-blue-700 px-3 py-1 rounded bg-blue-50 border border-blue-200 mb-2">
            <PieChart className="w-3.5 h-3.5" />
            100% Reconciled Outlay Composition
          </div>
          <h1 className="text-3xl font-black text-slate-900">
            U.S. Federal Spending Breakdown
          </h1>
          <p className="text-xs text-slate-500 mt-1">
            Visual composition of U.S. Federal Government outlays by major budget categories.
          </p>
        </div>

        <FiscalYearSelector selectedYear={selectedFY} onChange={setSelectedFY} />
      </div>

      {/* 100% Reconciled Donut Chart */}
      <div className="data-card p-6 sm:p-8 rounded-xl border border-slate-200 bg-white space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-slate-900">
            Reconciled Federal Outlays Pie Chart (FY{selectedFY})
          </h2>
          <DataFreshness />
        </div>
        <DonutChart
          data={donutItems}
          centerLabel={`FY${selectedFY} Budget`}
          centerValue={formatCurrency(TOTAL_FEDERAL_SPENDING_FY2026, true)}
          height={320}
        />
      </div>

      {/* Horizontal Bar Breakdown Component */}
      <SpendingBreakdown data={breakdownData} />

      {/* Category Inspector Card */}
      <div className="data-card p-6 sm:p-8 rounded-xl border border-slate-200 bg-white space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-4">
          <div>
            <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <Filter className="w-4 h-4 text-blue-700" />
              Category Inspector Tool
            </h3>
            <p className="text-xs text-slate-500">Select any category to inspect outlays, rates, and agency associations.</p>
          </div>

          <select
            value={selectedCategorySlug}
            onChange={(e) => setSelectedCategorySlug(e.target.value)}
            className="bg-slate-50 border border-slate-300 rounded-lg px-3 py-1.5 text-xs font-bold text-slate-900 focus:outline-none"
          >
            {SPENDING_CATEGORIES.map((c) => (
              <option key={c.id} value={c.slug}>
                {c.name} ({formatCurrency(c.amount, true)})
              </option>
            ))}
          </select>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <MetricCard label="Category Outlays" value={formatCurrency(selectedCategory.amount, true)} subtext={`${selectedCategory.percentage}% of total budget`} highlight />
          <MetricCard label="Daily Rate" value={formatCurrency(rates.perDay, true)} subtext="Estimated / day" />
          <MetricCard label="Hourly Rate" value={formatCurrency(rates.perHour, true)} subtext="Estimated / hour" />
          <MetricCard label="Per Second Rate" value={formatCurrency(rates.perSecond, true)} subtext="Estimated / sec" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
          <div className="p-4 rounded-lg bg-slate-50 border border-slate-200 space-y-2">
            <span className="text-xs font-bold text-slate-700 uppercase flex items-center gap-1.5">
              <Building2 className="w-3.5 h-3.5 text-blue-700" /> Primary Associated Agencies
            </span>
            <div className="space-y-1 text-xs font-mono font-semibold text-slate-800">
              {(selectedCategory.primaryAgencies || []).map((ag) => (
                <div key={ag} className="p-1.5 rounded bg-white border border-slate-200">{ag}</div>
              ))}
            </div>
          </div>

          <div className="p-4 rounded-lg bg-slate-50 border border-slate-200 space-y-2">
            <span className="text-xs font-bold text-slate-700 uppercase flex items-center gap-1.5">
              <Award className="w-3.5 h-3.5 text-blue-700" /> Top Primary Recipients
            </span>
            <div className="space-y-1 text-xs font-mono font-semibold text-slate-800">
              {(selectedCategory.topRecipients || []).map((rec) => (
                <div key={rec} className="p-1.5 rounded bg-white border border-slate-200">{rec}</div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
