'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Breadcrumbs from '@/components/navigation/Breadcrumbs';
import FiscalYearSelector from '@/components/visualizations/FiscalYearSelector';
import DonutChart from '@/components/visualizations/DonutChart';
import DataFreshness from '@/components/visualizations/DataFreshness';
import { CANONICAL_CATEGORIES } from '@/lib/config/entities';
import { getCategoryDataForFY, ANNUAL_TOTAL_BUDGET } from '@/lib/data/spendingData';
import { formatCurrency } from '@/lib/utils/formatters';
import { Layers, ArrowUpDown, ArrowRight, ShieldCheck } from 'lucide-react';

export default function CategoriesExplorerPage() {
  const [selectedFY, setSelectedFY] = useState<number>(2026);
  const [sortBy, setSortBy] = useState<'highest' | 'lowest' | 'alphabetical'>('highest');

  const categories = CANONICAL_CATEGORIES.map((c) => getCategoryDataForFY(c.slug, selectedFY)!);

  const sortedCategories = [...categories].sort((a, b) => {
    if (sortBy === 'highest') return b.amount - a.amount;
    if (sortBy === 'lowest') return a.amount - b.amount;
    return a.name.localeCompare(b.name);
  });

  const totalFYBudget = ANNUAL_TOTAL_BUDGET[selectedFY] || ANNUAL_TOTAL_BUDGET[2026];

  const donutItems = sortedCategories.map((c) => ({
    name: c.name,
    amount: c.amount,
    percentage: c.percentage,
    slug: c.slug,
  }));

  return (
    <div className="space-y-10 py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <Breadcrumbs items={[{ name: 'Spending Categories', url: '/categories' }]} />

      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-6">
        <div>
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-blue-700 px-3 py-1 rounded bg-blue-50 border border-blue-200 mb-2">
            <Layers className="w-3.5 h-3.5" />
            Verified Federal Budget Functions
          </div>
          <h1 className="text-3xl font-black text-slate-900">
            U.S. Government Spending Categories
          </h1>
          <p className="text-xs text-slate-500 mt-1">
            Explore official U.S. federal budget functions, mandatory benefit programs, and key spending categories for FY{selectedFY}.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <FiscalYearSelector selectedYear={selectedFY} onChange={setSelectedFY} />
          <div className="flex items-center space-x-1.5 bg-white border border-slate-200 p-1.5 rounded-lg shadow-sm">
            <ArrowUpDown className="w-3.5 h-3.5 text-slate-500 ml-1" />
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="bg-slate-50 text-slate-900 border border-slate-300 rounded px-2 py-1 text-xs font-semibold focus:outline-none"
            >
              <option value="highest">Highest Amount</option>
              <option value="lowest">Lowest Amount</option>
              <option value="alphabetical">Alphabetical</option>
            </select>
          </div>
        </div>
      </div>

      {/* Reconciled Category Composition Donut */}
      <div className="data-card p-6 sm:p-8 rounded-xl border border-slate-200 bg-white space-y-4">
        <div className="flex items-center justify-between border-b border-slate-100 pb-3">
          <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-blue-700" />
            Federal Spending Category Composition (FY{selectedFY})
          </h2>
          <DataFreshness />
        </div>
        <DonutChart
          data={donutItems}
          centerLabel={`FY${selectedFY} Total`}
          centerValue={formatCurrency(totalFYBudget, true)}
          height={320}
        />
      </div>

      {/* Category Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {sortedCategories.map((c) => {
          const hourlyRateFormatted = formatCurrency(c.hourlyRate, true);
          return (
            <Link
              key={c.id}
              href={`/categories/${c.slug}`}
              className="data-card p-6 rounded-xl border border-slate-200 bg-white hover:border-blue-400 hover:shadow-md transition-all flex flex-col justify-between space-y-4 group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-2xl">{c.icon || '🏛️'}</span>
                  <span className="text-[10px] font-bold font-mono px-2 py-0.5 rounded bg-blue-50 text-blue-900 uppercase">
                    {c.categoryType}
                  </span>
                </div>

                <div>
                  <h3 className="text-lg font-extrabold text-slate-900 group-hover:text-blue-700 transition-colors">
                    {c.name}
                  </h3>
                  <p className="text-xs text-slate-500 line-clamp-2 mt-1">
                    {c.description}
                  </p>
                </div>

                <div className="p-3 rounded-lg bg-slate-50 border border-slate-200 space-y-1">
                  <div className="text-xl font-mono font-extrabold text-blue-900 numeral-tabular">
                    {formatCurrency(c.amount, true)}
                  </div>
                  <div className="text-xs text-slate-600 font-medium">
                    <strong className="text-slate-900">{c.percentage}%</strong> of FY{selectedFY} federal budget
                  </div>
                  <div className="text-[11px] text-slate-500 font-mono pt-1">
                    Hourly rate: <span className="font-bold text-slate-800">{hourlyRateFormatted} / hr</span>
                  </div>
                </div>
              </div>

              <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-blue-700">
                <span>View FY{selectedFY} Details</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
