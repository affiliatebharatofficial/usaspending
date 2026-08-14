'use client';

import React from 'react';
import Link from 'next/link';
import { formatCurrency } from '@/lib/utils/formatters';
import { MapPin } from 'lucide-react';

interface StateRef {
  state: string;
  code: string;
  amount: number;
  percentage: number;
}

interface Props {
  title?: string;
  subtitle?: string;
  states: StateRef[];
  fiscalYear?: number;
}

export default function StateDistributionSection({
  title = 'Geographic Distribution by State',
  subtitle = 'State-level outlay distribution where supported by official place-of-performance data.',
  states,
  fiscalYear = 2026,
}: Props) {
  if (!states || states.length === 0) {
    return null;
  }

  const maxAmount = Math.max(...states.map((s) => s.amount));

  return (
    <div className="data-card p-6 sm:p-8 rounded-xl border border-slate-200 bg-white space-y-6">
      <div className="border-b border-slate-100 pb-3">
        <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
          <MapPin className="w-5 h-5 text-blue-700" />
          {title} (FY{fiscalYear})
        </h3>
        <p className="text-xs text-slate-500 mt-1">{subtitle}</p>
      </div>

      <div className="space-y-4">
        {states.map((st) => {
          const barWidth = maxAmount > 0 ? (st.amount / maxAmount) * 100 : 0;
          const stateSlug = st.state.toLowerCase().replace(/\s+/g, '-');

          return (
            <div key={st.code} className="space-y-1.5">
              <div className="flex items-center justify-between text-xs">
                <Link
                  href={`/states/${stateSlug}`}
                  className="font-bold text-slate-900 hover:text-blue-700 transition-colors flex items-center gap-1.5"
                >
                  <span className="font-mono text-[10px] font-extrabold px-1.5 py-0.5 rounded bg-slate-100 text-slate-700">
                    {st.code}
                  </span>
                  <span>{st.state}</span>
                </Link>
                <div className="font-mono text-slate-900 font-extrabold flex items-center gap-2">
                  <span>{formatCurrency(st.amount, true)}</span>
                  <span className="text-slate-500 font-normal font-sans">({st.percentage}%)</span>
                </div>
              </div>

              <div className="w-full h-2.5 rounded-full bg-slate-100 overflow-hidden">
                <div
                  className="h-full bg-blue-800 rounded-full transition-all duration-500"
                  style={{ width: `${Math.max(barWidth, 2)}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
