'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { AGENCIES_DATA, CURRENT_FISCAL_YEAR, TOTAL_FEDERAL_SPENDING_FY2026 } from '@/lib/data/spendingData';
import { formatCurrency } from '@/lib/utils/formatters';
import { Building2, ArrowLeft, ArrowUpDown } from 'lucide-react';

export default function AgencyExplorerPage() {
  const [sortBy, setSortBy] = useState<'highest' | 'lowest' | 'alphabetical'>('highest');
  const [searchTerm, setSearchTerm] = useState('');

  const filtered = AGENCIES_DATA.filter((a) =>
    a.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    a.abbreviation.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedAgencies = [...filtered].sort((a, b) => {
    if (sortBy === 'highest') return b.budget - a.budget;
    if (sortBy === 'lowest') return a.budget - b.budget;
    return a.name.localeCompare(b.name);
  });

  return (
    <div className="space-y-8 py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div>
        <Link
          href="/"
          className="inline-flex items-center space-x-1.5 text-xs font-semibold text-slate-500 hover:text-slate-900 transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Overview</span>
        </Link>
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-6">
        <div>
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-blue-700 px-3 py-1 rounded bg-blue-50 border border-blue-200 mb-2">
            <Building2 className="w-3.5 h-3.5" />
            Executive Agency Directory
          </div>
          <h1 className="text-3xl font-black text-slate-900">
            U.S. Executive Agencies Explorer
          </h1>
          <p className="text-xs text-slate-500 mt-1">
            Budgetary outlays and obligations managed by U.S. Federal Cabinet Departments in FY{CURRENT_FISCAL_YEAR}.
          </p>
        </div>

        {/* Filter & Sort Bar */}
        <div className="flex flex-wrap items-center gap-3">
          <input
            type="text"
            placeholder="Search agencies..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="bg-white border border-slate-300 rounded-lg px-3 py-1.5 text-xs font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600"
          />

          <div className="flex items-center space-x-1 text-xs font-semibold text-slate-600 bg-white border border-slate-300 rounded-lg px-2.5 py-1.5">
            <ArrowUpDown className="w-3.5 h-3.5 text-slate-400" />
            <span>Sort:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="bg-transparent text-slate-900 font-bold focus:outline-none cursor-pointer"
            >
              <option value="highest">Highest Budget</option>
              <option value="lowest">Lowest Budget</option>
              <option value="alphabetical">Alphabetical</option>
            </select>
          </div>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {sortedAgencies.map((agency) => {
          const pct = Number(((agency.budget / TOTAL_FEDERAL_SPENDING_FY2026) * 100).toFixed(1));
          return (
            <Link
              key={agency.id}
              href={`/agencies/${agency.slug}`}
              className="data-card p-6 rounded-xl border border-slate-200 bg-white hover:border-blue-400 hover:shadow-md transition-all flex flex-col justify-between space-y-4 group"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold font-mono px-2.5 py-0.5 rounded bg-blue-100 text-blue-900">
                    {agency.abbreviation}
                  </span>
                  <span className="text-xs font-bold text-slate-500 font-mono">
                    Code: {agency.code}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-700 transition-colors">
                  {agency.name}
                </h3>
                <p className="text-xs text-slate-500 line-clamp-2">
                  {agency.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-end justify-between">
                <div>
                  <div className="text-[10px] uppercase font-semibold text-slate-500">FY{CURRENT_FISCAL_YEAR} Budget</div>
                  <div className="text-xl font-extrabold font-mono text-slate-900 mt-0.5 numeral-tabular">
                    {formatCurrency(agency.budget, true)}
                  </div>
                </div>
                <div className="text-xs font-bold text-blue-700 font-mono">
                  {pct}% of Total
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
