'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { RECIPIENTS_DATA, CURRENT_FISCAL_YEAR } from '@/lib/data/spendingData';
import { formatCurrency } from '@/lib/utils/formatters';
import { Award, ArrowLeft, Search, ChevronLeft, ChevronRight } from 'lucide-react';

const ITEMS_PER_PAGE = 5;

export default function RecipientsExplorerPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const filtered = RECIPIENTS_DATA.filter((r) =>
    r.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    r.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
    r.headquarters.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE) || 1;
  const paginatedItems = filtered.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

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
            <Award className="w-3.5 h-3.5" />
            Prime Awardee Index
          </div>
          <h1 className="text-3xl font-black text-slate-900">
            Top Contractor & Award Recipients
          </h1>
          <p className="text-xs text-slate-500 mt-1">
            Search prime defense contractors, university research labs, and commercial suppliers.
          </p>
        </div>

        <div className="relative">
          <input
            type="text"
            placeholder="Search recipient or organization..."
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setCurrentPage(1);
            }}
            className="bg-white border border-slate-300 rounded-lg py-1.5 pl-9 pr-4 text-xs font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
          <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
        </div>
      </div>

      <div className="space-y-4">
        {paginatedItems.map((rec) => (
          <div
            key={rec.id}
            className="data-card p-6 rounded-xl border border-slate-200 bg-white flex flex-col md:flex-row items-start md:items-center justify-between gap-4 hover:border-blue-400 transition-all"
          >
            <div className="space-y-1">
              <div className="flex items-center space-x-2">
                <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded bg-slate-100 text-slate-800">
                  {rec.category}
                </span>
                <span className="text-xs text-slate-400 font-mono">HQ: {rec.headquarters}</span>
              </div>
              <h3 className="text-lg font-extrabold text-slate-900">{rec.name}</h3>
              <p className="text-xs text-slate-500 max-w-2xl line-clamp-1">{rec.description}</p>
            </div>

            <div className="flex items-center space-x-6">
              <div className="text-right">
                <div className="text-[10px] uppercase text-slate-500 font-semibold">Total Awards FY{CURRENT_FISCAL_YEAR}</div>
                <div className="text-xl font-extrabold font-mono text-blue-900 numeral-tabular">
                  {formatCurrency(rec.totalAwards, true)}
                </div>
              </div>

              <Link
                href={`/recipients/${rec.slug}`}
                className="px-3.5 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold transition-colors"
              >
                View Profile
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Bar */}
      <div className="flex items-center justify-between border-t border-slate-200 pt-4 text-xs font-semibold text-slate-600">
        <div>
          Showing page <strong>{currentPage}</strong> of <strong>{totalPages}</strong> ({filtered.length} total recipients)
        </div>

        <div className="flex items-center space-x-2">
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
            className="p-1.5 rounded bg-white border border-slate-300 disabled:opacity-40 hover:bg-slate-50"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
            className="p-1.5 rounded bg-white border border-slate-300 disabled:opacity-40 hover:bg-slate-50"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
