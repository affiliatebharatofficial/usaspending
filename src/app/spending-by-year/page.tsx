'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import SpendingTrendChart from '@/components/charts/SpendingTrendChart';
import DonutChart from '@/components/visualizations/DonutChart';
import MetricCard from '@/components/visualizations/MetricCard';
import FiscalYearSelector from '@/components/visualizations/FiscalYearSelector';
import DataFreshness from '@/components/visualizations/DataFreshness';
import { HISTORICAL_SPENDING, SPENDING_CATEGORIES } from '@/lib/data/spendingData';
import { formatCurrency, calculateSpendingRates } from '@/lib/utils/formatters';
import { ArrowLeft, Calendar, TrendingUp, GitCompare, Clock, CheckCircle2 } from 'lucide-react';

export default function SpendingByYearPage() {
  const [selectedYear, setSelectedYear] = useState<number>(2026);
  const [compareYear, setCompareYear] = useState<number>(2025);

  const selectedData = HISTORICAL_SPENDING.find((h) => h.year === selectedYear) || HISTORICAL_SPENDING[HISTORICAL_SPENDING.length - 1];
  const compareData = HISTORICAL_SPENDING.find((h) => h.year === compareYear) || HISTORICAL_SPENDING[HISTORICAL_SPENDING.length - 2];

  const rates = calculateSpendingRates(selectedData.spending || selectedData.totalSpending);

  // Math for year comparison
  const diffAmount = selectedData.spending - compareData.spending;
  const diffPercent = Number(((diffAmount / compareData.spending) * 100).toFixed(2));

  const chartTrendData = HISTORICAL_SPENDING.map((h) => ({
    year: h.year,
    amount: h.spending || h.totalSpending || 0,
  }));

  const categoryDonutData = SPENDING_CATEGORIES.map((c) => ({
    name: c.name,
    amount: c.amount,
    percentage: c.percentage,
    slug: c.slug,
  }));

  return (
    <div className="space-y-12 py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div>
        <Link
          href="/"
          className="inline-flex items-center space-x-1.5 text-xs font-semibold text-slate-500 hover:text-slate-900 transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Overview</span>
        </Link>
      </div>

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-blue-700 px-3 py-1 rounded bg-blue-50 border border-blue-200">
          <Calendar className="w-3.5 h-3.5" />
          Interactive Multi-Year Explorer
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-slate-900">
          U.S. Government Spending by Year
        </h1>
        <p className="text-sm text-slate-600">
          Analyze United States Federal Outlays, rate metrics, and year-over-year budget comparisons from 2018 to 2026.
        </p>
      </div>

      {/* Historical Line Chart */}
      <div className="data-card rounded-xl p-6 sm:p-8 border border-slate-200 bg-white space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-blue-700" />
              Federal Outlays Trajectory (2018 – 2026)
            </h2>
            <p className="text-xs text-slate-500">
              Notice emergency COVID-19 relief spending spikes in FY2020 and FY2021.
            </p>
          </div>
          <DataFreshness />
        </div>

        <SpendingTrendChart data={chartTrendData} color="#1e3a8a" height={340} />
      </div>

      {/* Selected Year Interactive Section */}
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-slate-900 text-white p-6 rounded-xl border border-slate-800">
          <div>
            <div className="text-xs text-blue-300 uppercase font-semibold">Interactive Selection</div>
            <h2 className="text-2xl font-extrabold">
              Fiscal Year {selectedYear} Deep Dive
            </h2>
          </div>
          <FiscalYearSelector
            selectedYear={selectedYear}
            onChange={(fy) => setSelectedYear(fy)}
          />
        </div>

        {/* Selected Year Metrics */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <MetricCard
            label="Total Annual Outlays"
            value={formatCurrency(selectedData.spending, true)}
            subtext={`FY ${selectedYear}`}
            highlight
          />
          <MetricCard
            label="Daily Rate"
            value={formatCurrency(rates.perDay, true)}
            subtext="Estimated / day"
          />
          <MetricCard
            label="Hourly Rate"
            value={formatCurrency(rates.perHour, true)}
            subtext="Estimated / hour"
          />
          <MetricCard
            label="Per Second Rate"
            value={formatCurrency(rates.perSecond, true)}
            subtext="Estimated / sec"
          />
        </div>

        {/* Selected Year Donut Visual */}
        <div className="data-card p-6 sm:p-8 rounded-xl border border-slate-200 bg-white">
          <h3 className="text-lg font-bold text-slate-900 mb-4">
            FY {selectedYear} Category Composition
          </h3>
          <DonutChart
            data={categoryDonutData}
            centerLabel={`FY${selectedYear}`}
            centerValue={formatCurrency(selectedData.spending, true)}
          />
        </div>
      </div>

      {/* Compare Years Tool */}
      <div className="data-card p-6 sm:p-8 rounded-xl border border-blue-200 bg-gradient-to-br from-slate-50 via-white to-blue-50/40 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-4">
          <div>
            <div className="inline-flex items-center gap-1 text-xs font-bold text-blue-700 uppercase">
              <GitCompare className="w-3.5 h-3.5" /> Compare Fiscal Years
            </div>
            <h2 className="text-xl font-extrabold text-slate-900">
              FY {selectedYear} vs. FY {compareYear} Analysis
            </h2>
          </div>

          <div className="flex items-center space-x-3 text-xs font-semibold">
            <span>Compare with:</span>
            <select
              value={compareYear}
              onChange={(e) => setCompareYear(Number(e.target.value))}
              className="bg-white border border-slate-300 rounded px-3 py-1 font-mono font-bold text-slate-900"
            >
              {[2020, 2021, 2022, 2023, 2024, 2025, 2026]
                .filter((y) => y !== selectedYear)
                .map((y) => (
                  <option key={y} value={y}>
                    FY {y}
                  </option>
                ))}
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-5 rounded-lg bg-white border border-slate-200 space-y-1">
            <span className="text-xs text-slate-500 font-semibold uppercase">Total Difference</span>
            <div
              className={`text-2xl font-extrabold font-mono numeral-tabular ${
                diffAmount >= 0 ? 'text-red-700' : 'text-emerald-700'
              }`}
            >
              {diffAmount >= 0 ? '+' : ''}
              {formatCurrency(diffAmount, true)}
            </div>
            <span className="text-[11px] text-slate-500">
              From FY{compareYear} to FY{selectedYear}
            </span>
          </div>

          <div className="p-5 rounded-lg bg-white border border-slate-200 space-y-1">
            <span className="text-xs text-slate-500 font-semibold uppercase">Percentage Shift</span>
            <div
              className={`text-2xl font-extrabold font-mono numeral-tabular ${
                diffPercent >= 0 ? 'text-red-700' : 'text-emerald-700'
              }`}
            >
              {diffPercent >= 0 ? '+' : ''}
              {diffPercent}%
            </div>
            <span className="text-[11px] text-slate-500">
              Net relative budget growth
            </span>
          </div>

          <div className="p-5 rounded-lg bg-white border border-slate-200 space-y-1">
            <span className="text-xs text-slate-500 font-semibold uppercase">Annual Deficit Impact</span>
            <div className="text-2xl font-extrabold text-slate-900 font-mono numeral-tabular">
              {formatCurrency(selectedData.deficit || 0, true)}
            </div>
            <span className="text-[11px] text-slate-500">
              Reported deficit for FY{selectedYear}
            </span>
          </div>
        </div>
      </div>

      {/* Historical Data Table */}
      <div className="data-card rounded-xl p-6 sm:p-8 border border-slate-200 bg-white space-y-4">
        <h2 className="text-xl font-bold text-slate-900">
          Complete Fiscal Year Data Table (2018 – 2026)
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm font-mono">
            <thead>
              <tr className="border-b border-slate-200 text-slate-500 font-sans text-xs uppercase">
                <th className="pb-3 font-semibold">Fiscal Year</th>
                <th className="pb-3 font-semibold text-right">Total Outlays</th>
                <th className="pb-3 font-semibold text-right">Deficit</th>
                <th className="pb-3 font-semibold text-right">Public Debt</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-800">
              {HISTORICAL_SPENDING.map((row) => (
                <tr
                  key={row.year}
                  onClick={() => setSelectedYear(row.year)}
                  className={`hover:bg-slate-50 cursor-pointer ${
                    row.year === selectedYear ? 'bg-blue-50/70 font-bold' : ''
                  }`}
                >
                  <td className="py-3.5 font-sans font-bold text-slate-900 flex items-center gap-2">
                    {row.year === selectedYear && <CheckCircle2 className="w-4 h-4 text-blue-700" />}
                    FY {row.year}
                  </td>
                  <td className="py-3.5 text-right font-extrabold text-blue-900 numeral-tabular">
                    {formatCurrency(row.spending || row.totalSpending || 0, true)}
                  </td>
                  <td className="py-3.5 text-right text-red-700 numeral-tabular">
                    {row.deficit ? formatCurrency(row.deficit, true) : 'N/A'}
                  </td>
                  <td className="py-3.5 text-right text-slate-900 numeral-tabular">
                    {row.debtTotal ? formatCurrency(row.debtTotal, true) : 'N/A'}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
