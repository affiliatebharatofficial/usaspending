'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { RECIPIENTS_DATA } from '@/lib/data/spendingData';
import { formatCurrency } from '@/lib/utils/formatters';
import { Search, Building2, ShieldCheck, ArrowRight, Award } from 'lucide-react';

export default function RecipientSearch() {
  const [query, setQuery] = useState('');

  const filteredRecipients = RECIPIENTS_DATA.filter(
    (r) =>
      r.name.toLowerCase().includes(query.toLowerCase()) ||
      r.category.toLowerCase().includes(query.toLowerCase()) ||
      r.headquarters.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {/* Search Input Box */}
      <div className="relative max-w-2xl mx-auto">
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-slate-400" />
        </div>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search recipient, company, contractor or organization (e.g. Lockheed, Boeing, Pfizer)..."
          className="block w-full pl-11 pr-4 py-3.5 border border-slate-700 rounded-2xl bg-slate-900/90 text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all shadow-xl"
        />
        {query && (
          <button
            onClick={() => setQuery('')}
            className="absolute inset-y-0 right-0 pr-4 flex items-center text-xs font-semibold text-slate-400 hover:text-white"
          >
            Clear
          </button>
        )}
      </div>

      {/* Recipient Results Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredRecipients.length > 0 ? (
          filteredRecipients.map((rec) => (
            <Link
              key={rec.id}
              href={`/recipients/${rec.slug}`}
              className="glass-card p-5 rounded-2xl border border-slate-800 bg-slate-950/80 glass-card-hover flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-[10px] font-semibold uppercase px-2 py-0.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                    {rec.category}
                  </span>
                  <span className="text-[10px] text-slate-400">{rec.headquarters}</span>
                </div>

                <h3 className="font-bold text-white text-base hover:text-blue-400 transition-colors mt-1">
                  {rec.name}
                </h3>
                <p className="text-xs text-slate-400 line-clamp-2 mt-2 leading-relaxed">
                  {rec.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800/80 mt-4 flex items-end justify-between">
                <div>
                  <div className="text-[10px] uppercase font-semibold text-slate-500 flex items-center gap-1">
                    <Award className="w-3 h-3 text-amber-400" />
                    Total Federal Awards
                  </div>
                  <div className="text-lg font-bold font-mono text-amber-400 mt-0.5">
                    {formatCurrency(rec.totalAwards, true)}
                  </div>
                </div>

                <div className="p-2 rounded-xl bg-slate-900 text-blue-400 hover:bg-blue-600 hover:text-white transition-colors">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </Link>
          ))
        ) : (
          <div className="col-span-full text-center py-12 glass-card rounded-2xl">
            <Building2 className="w-10 h-10 text-slate-600 mx-auto mb-2" />
            <p className="text-sm text-slate-400">No federal recipients found matching "{query}"</p>
            <p className="text-xs text-slate-500 mt-1">Try searching for "Lockheed", "Boeing", "Pfizer", or "University"</p>
          </div>
        )}
      </div>
    </div>
  );
}
