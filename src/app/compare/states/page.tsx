'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Breadcrumbs from '@/components/navigation/Breadcrumbs';
import DonutChart from '@/components/visualizations/DonutChart';
import MetricCard from '@/components/visualizations/MetricCard';
import { STATES_DATA } from '@/lib/data/spendingData';
import { formatCurrency, formatNumber } from '@/lib/utils/formatters';
import { GitCompare, ArrowLeft } from 'lucide-react';

export default function CompareStatesPage() {
  const [stateASlug, setStateASlug] = useState<string>('california');
  const [stateBSlug, setStateBSlug] = useState<string>('texas');

  const stateA = STATES_DATA.find((s) => s.slug === stateASlug) || STATES_DATA[0];
  const stateB = STATES_DATA.find((s) => s.slug === stateBSlug) || STATES_DATA[1];

  const diff = stateA.totalSpending - stateB.totalSpending;
  const ratio = Number((stateA.totalSpending / stateB.totalSpending).toFixed(2));

  const comparisonDonut = [
    { name: stateA.name, amount: stateA.totalSpending, percentage: Number(((stateA.totalSpending / (stateA.totalSpending + stateB.totalSpending)) * 100).toFixed(1)), color: '#1e3a8a' },
    { name: stateB.name, amount: stateB.totalSpending, percentage: Number(((stateB.totalSpending / (stateA.totalSpending + stateB.totalSpending)) * 100).toFixed(1)), color: '#2563eb' },
  ];

  return (
    <div className="space-y-10 py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <Breadcrumbs
        items={[
          { name: 'Comparison', url: '/compare' },
          { name: 'State Comparison', url: '/compare/states' },
        ]}
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

      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-blue-700 px-3 py-1 rounded bg-blue-50 border border-blue-200">
          <GitCompare className="w-3.5 h-3.5" />
          Side-by-Side State Comparison Tool
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-slate-900">
          U.S. State Spending Comparison Engine
        </h1>
        <p className="text-sm text-slate-600">
          Select State A and State B to compare federal outlays, per-capita figures, and agency allocations.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="data-card p-6 rounded-xl border border-slate-200 bg-white space-y-3">
          <label className="text-xs font-bold text-slate-700 uppercase">State A:</label>
          <select
            value={stateASlug}
            onChange={(e) => setStateASlug(e.target.value)}
            className="w-full bg-slate-50 border border-slate-300 rounded-lg p-2.5 text-xs font-semibold text-slate-900 focus:outline-none"
          >
            {STATES_DATA.map((s) => (
              <option key={s.id} value={s.slug}>
                {s.name} ({formatCurrency(s.totalSpending, true)})
              </option>
            ))}
          </select>
          <div className="text-2xl font-extrabold text-blue-900 font-mono pt-2 numeral-tabular">
            {formatCurrency(stateA.totalSpending, true)}
          </div>
          <div className="text-xs text-slate-500 font-mono">
            Per Capita: ${formatNumber(stateA.perCapita)}
          </div>
        </div>

        <div className="data-card p-6 rounded-xl border border-slate-200 bg-white space-y-3">
          <label className="text-xs font-bold text-slate-700 uppercase">State B:</label>
          <select
            value={stateBSlug}
            onChange={(e) => setStateBSlug(e.target.value)}
            className="w-full bg-slate-50 border border-slate-300 rounded-lg p-2.5 text-xs font-semibold text-slate-900 focus:outline-none"
          >
            {STATES_DATA.map((s) => (
              <option key={s.id} value={s.slug}>
                {s.name} ({formatCurrency(s.totalSpending, true)})
              </option>
            ))}
          </select>
          <div className="text-2xl font-extrabold text-blue-700 font-mono pt-2 numeral-tabular">
            {formatCurrency(stateB.totalSpending, true)}
          </div>
          <div className="text-xs text-slate-500 font-mono">
            Per Capita: ${formatNumber(stateB.perCapita)}
          </div>
        </div>
      </div>

      {/* Side-by-Side Table */}
      <div className="data-card rounded-xl p-6 sm:p-8 border border-slate-200 bg-white space-y-4">
        <h2 className="text-xl font-bold text-slate-900">
          Side-by-Side Metric Table
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm font-mono">
            <thead>
              <tr className="border-b border-slate-200 text-slate-500 font-sans text-xs uppercase">
                <th className="pb-3 font-semibold">Financial Metric</th>
                <th className="pb-3 font-semibold text-right text-blue-900">{stateA.name}</th>
                <th className="pb-3 font-semibold text-right text-blue-700">{stateB.name}</th>
                <th className="pb-3 font-semibold text-right">Difference</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-800">
              <tr>
                <td className="py-3.5 font-sans font-bold text-slate-900">Total Outlays</td>
                <td className="py-3.5 text-right font-extrabold text-blue-900 numeral-tabular">{formatCurrency(stateA.totalSpending, true)}</td>
                <td className="py-3.5 text-right font-extrabold text-blue-700 numeral-tabular">{formatCurrency(stateB.totalSpending, true)}</td>
                <td className="py-3.5 text-right font-bold text-slate-900 numeral-tabular">{diff >= 0 ? '+' : ''}{formatCurrency(diff, true)}</td>
              </tr>
              <tr>
                <td className="py-3.5 font-sans font-bold text-slate-900">Per Resident Figure</td>
                <td className="py-3.5 text-right text-slate-900">${formatNumber(stateA.perCapita)}</td>
                <td className="py-3.5 text-right text-slate-900">${formatNumber(stateB.perCapita)}</td>
                <td className="py-3.5 text-right font-bold text-slate-900">${formatNumber(stateA.perCapita - stateB.perCapita)}</td>
              </tr>
              <tr>
                <td className="py-3.5 font-sans font-bold text-slate-900">Population Baseline</td>
                <td className="py-3.5 text-right text-slate-900">{formatNumber(stateA.population)}</td>
                <td className="py-3.5 text-right text-slate-900">{formatNumber(stateB.population)}</td>
                <td className="py-3.5 text-right font-bold text-slate-900">{formatNumber(stateA.population - stateB.population)}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="data-card p-6 sm:p-8 rounded-xl border border-slate-200 bg-white space-y-4">
        <h3 className="text-lg font-bold text-slate-900">
          Proportional Donut Comparison
        </h3>
        <DonutChart data={comparisonDonut} centerLabel="Combined Total" centerValue={formatCurrency(stateA.totalSpending + stateB.totalSpending, true)} height={260} />
      </div>
    </div>
  );
}
