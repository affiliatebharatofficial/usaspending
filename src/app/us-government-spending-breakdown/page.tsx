import React from 'react';
import Link from 'next/link';
import SpendingPieChart from '@/components/charts/SpendingPieChart';
import CategoryGrid from '@/components/categories/CategoryGrid';
import { SPENDING_CATEGORIES, TOTAL_FEDERAL_SPENDING_FY2026, CURRENT_FISCAL_YEAR } from '@/lib/data/spendingData';
import { formatCurrency, calculateSpendingRates } from '@/lib/utils/formatters';
import { Layers, ArrowLeft, CheckCircle2, AlertTriangle } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'U.S. Government Spending Breakdown — Complete FY2026 Budget Outlays',
  description: 'Complete breakdown of U.S. Federal Government spending. Mandatory spending, discretionary defense outlays, net interest on debt, healthcare, and social security numbers.',
};

export default function SpendingBreakdownPage() {
  const rates = calculateSpendingRates(TOTAL_FEDERAL_SPENDING_FY2026);

  return (
    <div className="space-y-12 py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div>
        <Link
          href="/"
          className="inline-flex items-center space-x-1.5 text-xs font-semibold text-slate-400 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Overview</span>
        </Link>
      </div>

      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-amber-400 px-3 py-1 rounded-full bg-amber-950/60 border border-amber-800/40">
          <Layers className="w-3.5 h-3.5" />
          Detailed Budget Breakdown
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-white">
          U.S. Government Spending Breakdown
        </h1>
        <p className="text-sm text-slate-300">
          Comprehensive breakdown of America's $6.75 Trillion federal budget outlays for Fiscal Year {CURRENT_FISCAL_YEAR}.
        </p>
      </div>

      {/* Mandatory vs Discretionary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="glass-card p-6 rounded-2xl border border-slate-800 bg-slate-950/80 space-y-2">
          <div className="text-xs text-slate-400 uppercase font-semibold">Mandatory Spending (~60%)</div>
          <div className="text-2xl font-extrabold text-blue-400 font-mono">
            {formatCurrency(TOTAL_FEDERAL_SPENDING_FY2026 * 0.60, true)}
          </div>
          <p className="text-xs text-slate-400 leading-relaxed">
            Social Security, Medicare, Medicaid, and federal pensions required by existing entitlement law without annual congressional appropriation.
          </p>
        </div>

        <div className="glass-card p-6 rounded-2xl border border-slate-800 bg-slate-950/80 space-y-2">
          <div className="text-xs text-slate-400 uppercase font-semibold">Discretionary Spending (~27%)</div>
          <div className="text-2xl font-extrabold text-amber-400 font-mono">
            {formatCurrency(TOTAL_FEDERAL_SPENDING_FY2026 * 0.27, true)}
          </div>
          <p className="text-xs text-slate-400 leading-relaxed">
            Defense & military outlays ($895B), Education, NASA, Transportation, and Cabinet agency operational budgets enacted by Congress annually.
          </p>
        </div>

        <div className="glass-card p-6 rounded-2xl border border-slate-800 bg-slate-950/80 space-y-2">
          <div className="text-xs text-slate-400 uppercase font-semibold">Net Interest on Debt (~13%)</div>
          <div className="text-2xl font-extrabold text-emerald-400 font-mono">
            {formatCurrency(TOTAL_FEDERAL_SPENDING_FY2026 * 0.13, true)}
          </div>
          <p className="text-xs text-slate-400 leading-relaxed">
            Interest payments disbursed to holders of Treasury securities to service the U.S. National Debt ($36+ Trillion total).
          </p>
        </div>
      </div>

      {/* Interactive Pie Chart */}
      <SpendingPieChart />

      {/* Full Category Table */}
      <div className="glass-card rounded-3xl p-6 sm:p-8 border border-slate-800 bg-slate-950/80">
        <h2 className="text-xl font-bold text-white mb-4">
          Complete Category Outlay Breakdown Table
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-slate-800 text-slate-400">
                <th className="pb-3 font-semibold">Category Name</th>
                <th className="pb-3 font-semibold text-right">Annual Amount</th>
                <th className="pb-3 font-semibold text-right">Share (%)</th>
                <th className="pb-3 font-semibold text-right">Daily Rate</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60 font-mono text-slate-200">
              {SPENDING_CATEGORIES.map((cat) => (
                <tr key={cat.id} className="hover:bg-slate-900/60">
                  <td className="py-3 font-sans font-semibold text-white flex items-center space-x-2">
                    <span>{cat.icon}</span>
                    <span>{cat.name}</span>
                  </td>
                  <td className="py-3 text-right font-bold text-amber-400">
                    {formatCurrency(cat.annualAmount, true)}
                  </td>
                  <td className="py-3 text-right font-sans text-slate-300">
                    {cat.percentage}%
                  </td>
                  <td className="py-3 text-right text-emerald-400">
                    {formatCurrency(cat.dailyRate, true)} / day
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
