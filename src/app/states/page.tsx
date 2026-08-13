'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Breadcrumbs from '@/components/navigation/Breadcrumbs';
import USStateMap from '@/components/maps/USStateMap';
import FiscalYearSelector from '@/components/visualizations/FiscalYearSelector';
import DataFreshness from '@/components/visualizations/DataFreshness';
import { STATES_DATA } from '@/lib/data/spendingData';
import { formatCurrency, formatNumber, calculateSpendingRates } from '@/lib/utils/formatters';
import { MapPin, Search, ArrowUpDown, ArrowRight, ShieldCheck } from 'lucide-react';

export default function StatesExplorerPage() {
  const [selectedFY, setSelectedFY] = useState<number>(2026);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [sortBy, setSortBy] = useState<'highest' | 'lowest' | 'alphabetical' | 'perCapita' | 'yoy'>('highest');

  // Filter states by search query
  const filteredStates = STATES_DATA.filter(
    (s) =>
      s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.code.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Sort states dynamically
  const sortedStates = [...filteredStates].sort((a, b) => {
    if (sortBy === 'highest') return b.totalSpending - a.totalSpending;
    if (sortBy === 'lowest') return a.totalSpending - b.totalSpending;
    if (sortBy === 'alphabetical') return a.name.localeCompare(b.name);
    if (sortBy === 'perCapita') return b.perCapita - a.perCapita;
    if (sortBy === 'yoy') return parseFloat(b.yoyChange) - parseFloat(a.yoyChange);
    return 0;
  });

  return (
    <div className="space-y-10 py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <Breadcrumbs items={[{ name: 'State Explorer', url: '/states' }]} />

      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-6">
        <div>
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-blue-700 px-3 py-1 rounded bg-blue-50 border border-blue-200 mb-2">
            <MapPin className="w-3.5 h-3.5" />
            Geographic Federal Spending Allocation
          </div>
          <h1 className="text-3xl font-black text-slate-900">
            Federal Spending Associated With U.S. States
          </h1>
          <p className="text-xs text-slate-500 mt-1">
            Explore federal contract awards, grants, and direct outlays associated with all 50 states, Washington D.C., and territories.
          </p>
        </div>

        <FiscalYearSelector selectedYear={selectedFY} onChange={setSelectedFY} />
      </div>

      {/* Control Bar: Search + Sort */}
      <div className="data-card p-4 sm:p-6 rounded-xl border border-slate-200 bg-white flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="relative w-full sm:w-80">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search states by name or code..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-slate-50 border border-slate-300 rounded-lg py-2 pl-9 pr-3 text-xs font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
        </div>

        <div className="flex items-center space-x-2 w-full sm:w-auto">
          <ArrowUpDown className="w-3.5 h-3.5 text-slate-500" />
          <span className="text-xs font-semibold text-slate-600">Sort By:</span>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as any)}
            className="bg-slate-50 text-slate-900 border border-slate-300 rounded-lg px-3 py-1.5 text-xs font-bold focus:outline-none"
          >
            <option value="highest">Highest Spending</option>
            <option value="lowest">Lowest Spending</option>
            <option value="alphabetical">Alphabetical</option>
            <option value="perCapita">Highest Per-Capita</option>
            <option value="yoy">Highest YoY Increase</option>
          </select>
        </div>
      </div>

      {/* Interactive SVG U.S. Map */}
      <USStateMap states={STATES_DATA} fiscalYear={selectedFY} />

      {/* Ranking Table */}
      <div className="data-card rounded-xl p-6 sm:p-8 border border-slate-200 bg-white space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-blue-700" />
            Federal Spending by State Ranking Table (FY{selectedFY})
          </h2>
          <DataFreshness />
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm font-mono">
            <thead>
              <tr className="border-b border-slate-200 text-slate-500 font-sans text-xs uppercase">
                <th className="pb-3 font-semibold w-12 text-center">Rank</th>
                <th className="pb-3 font-semibold">State / Territory</th>
                <th className="pb-3 font-semibold text-right">Associated Spending</th>
                <th className="pb-3 font-semibold text-right">Share of Total</th>
                <th className="pb-3 font-semibold text-right">Per Capita</th>
                <th className="pb-3 font-semibold text-right">YoY Shift</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-800">
              {sortedStates.map((state, idx) => (
                <tr key={state.id} className="hover:bg-slate-50">
                  <td className="py-3 font-sans text-slate-400 font-bold text-center text-xs">{idx + 1}</td>
                  <td className="py-3 font-sans font-bold text-slate-900">
                    <Link href={`/states/${state.slug}`} className="hover:text-blue-700 hover:underline flex items-center gap-2">
                      <span>{state.name}</span>
                      <span className="text-[10px] font-mono text-slate-400">({state.code})</span>
                    </Link>
                  </td>
                  <td className="py-3 text-right font-extrabold text-blue-900 numeral-tabular">
                    {formatCurrency(state.totalSpending, true)}
                  </td>
                  <td className="py-3 text-right font-sans text-slate-600 font-semibold">{state.percentage}%</td>
                  <td className="py-3 text-right text-slate-900 font-bold">${formatNumber(state.perCapita)}</td>
                  <td className="py-3 text-right font-semibold text-emerald-600 font-sans">{state.yoyChange}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* State Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {sortedStates.map((state) => {
          const rates = calculateSpendingRates(state.totalSpending);
          return (
            <Link
              key={state.id}
              href={`/states/${state.slug}`}
              className="data-card p-6 rounded-xl border border-slate-200 bg-white hover:border-blue-400 hover:shadow-md transition-all flex flex-col justify-between space-y-4 group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold font-mono px-2.5 py-0.5 rounded bg-blue-100 text-blue-900 uppercase">
                    {state.code}
                  </span>
                  {state.isTerritory && (
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-amber-100 text-amber-900">
                      Territory
                    </span>
                  )}
                </div>

                <div>
                  <h3 className="text-xl font-extrabold text-slate-900 group-hover:text-blue-700 transition-colors">
                    {state.name}
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Population: {formatNumber(state.population)}
                  </p>
                </div>

                <div className="p-3 rounded-lg bg-slate-50 border border-slate-200 space-y-1">
                  <div className="text-xl font-mono font-extrabold text-blue-900 numeral-tabular">
                    {formatCurrency(state.totalSpending, true)}
                  </div>
                  <div className="text-xs text-slate-600 font-medium">
                    <strong className="text-slate-900">{state.percentage}%</strong> of selected federal spending
                  </div>
                  <div className="text-[11px] text-slate-500 font-mono pt-1">
                    Estimated rate: <span className="font-bold text-slate-800">{formatCurrency(rates.perHour, true)} / hour</span>
                  </div>
                </div>
              </div>

              <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-blue-700">
                <span>View FY{selectedFY} State Details</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
