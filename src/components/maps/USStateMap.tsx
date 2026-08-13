'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { StateSpendingItem } from '@/lib/data/spendingData';
import { formatCurrency } from '@/lib/utils/formatters';
import { MapPin } from 'lucide-react';

interface USStateMapProps {
  states: StateSpendingItem[];
  fiscalYear?: number;
}

export default function USStateMap({ states, fiscalYear = 2026 }: USStateMapProps) {
  const [hoveredState, setHoveredState] = useState<StateSpendingItem | null>(null);

  return (
    <div className="data-card p-6 sm:p-8 rounded-xl border border-slate-200 bg-white space-y-4">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-3">
        <div>
          <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
            <MapPin className="w-5 h-5 text-blue-700" />
            Interactive U.S. Geographic Allocation Map
          </h2>
          <p className="text-xs text-slate-500">
            Hover over or tap any state to inspect federal award allocations associated with that state.
          </p>
        </div>
        {hoveredState && (
          <div className="px-3 py-1 rounded bg-slate-900 text-white font-mono text-xs space-x-2">
            <span className="font-bold">{hoveredState.name}:</span>
            <span className="text-amber-400 font-extrabold">{formatCurrency(hoveredState.totalSpending, true)}</span>
          </div>
        )}
      </div>

      {/* Grid State Explorer Visual Map */}
      <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-2 pt-2">
        {states.slice(0, 50).map((st) => (
          <Link
            key={st.id}
            href={`/states/${st.slug}`}
            onMouseEnter={() => setHoveredState(st)}
            onMouseLeave={() => setHoveredState(null)}
            className={`p-2.5 rounded-lg border text-center transition-all duration-150 group ${
              hoveredState?.id === st.id
                ? 'border-blue-600 bg-blue-600 text-white shadow-md scale-105 z-10'
                : 'border-slate-200 bg-slate-50 text-slate-800 hover:border-blue-400 hover:bg-blue-50'
            }`}
          >
            <div className="font-mono font-bold text-xs group-hover:text-blue-900">{st.code}</div>
            <div className="text-[10px] font-sans truncate font-medium mt-0.5 opacity-90">{st.name}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}
