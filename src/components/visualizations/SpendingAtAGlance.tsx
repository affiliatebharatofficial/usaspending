'use client';

import React from 'react';
import { formatCurrency, formatPercent } from '@/lib/utils/formatters';
import DataFreshness from './DataFreshness';
import { TrendingUp, Clock, Calendar } from 'lucide-react';

export interface SpendingAtAGlanceProps {
  title?: string;
  totalAmount: number;
  sharePercent?: number;
  sharePercentage?: number;
  shareOfBudget?: string;
  share?: number;
  dailyRate?: number;
  yoyChange?: string;
  fiscalYear?: number | string;
  updatedAt?: string;
}

export default function SpendingAtAGlance({
  title = 'Government Spending at a Glance',
  totalAmount,
  sharePercent,
  sharePercentage,
  shareOfBudget,
  share,
  dailyRate,
  yoyChange = '+4.2%',
  fiscalYear = 2026,
  updatedAt,
}: SpendingAtAGlanceProps) {
  const percentVal = sharePercent ?? sharePercentage ?? share;
  const displayShare = percentVal !== undefined
    ? `${percentVal.toFixed(1)}%`
    : shareOfBudget || '100.0%';

  const calculatedDaily = dailyRate || totalAmount / 365;

  return (
    <div className="data-card p-6 sm:p-8 rounded-xl border border-blue-200 bg-slate-900 text-white space-y-6 shadow-xl">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
        <div>
          <span className="text-[11px] font-semibold text-blue-400 uppercase tracking-wider font-mono">
            Key Financial Summary • FY{fiscalYear}
          </span>
          <h2 className="text-xl sm:text-2xl font-black text-white mt-0.5">{title}</h2>
        </div>
        <DataFreshness lastUpdated={updatedAt} />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="space-y-1">
          <div className="text-xs text-slate-400 font-semibold uppercase">Total Outlays</div>
          <div className="text-3xl sm:text-4xl font-black font-mono text-amber-400 numeral-tabular">
            {formatCurrency(totalAmount, true)}
          </div>
          <div className="text-[11px] text-slate-400">Total reported federal spending</div>
        </div>

        <div className="space-y-1">
          <div className="text-xs text-slate-400 font-semibold uppercase">Share of Budget</div>
          <div className="text-3xl sm:text-4xl font-black font-mono text-blue-300 numeral-tabular">
            {displayShare}
          </div>
          <div className="text-[11px] text-slate-400">Relative allocation percentage</div>
        </div>

        <div className="space-y-1">
          <div className="text-xs text-slate-400 font-semibold uppercase">Daily Outlay Rate</div>
          <div className="text-3xl sm:text-4xl font-black font-mono text-emerald-400 numeral-tabular">
            {formatCurrency(calculatedDaily, true)}
          </div>
          <div className="text-[11px] text-slate-400">Estimated outlay per day</div>
        </div>
      </div>
    </div>
  );
}
