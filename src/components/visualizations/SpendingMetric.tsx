import React from 'react';
import { formatCurrency } from '@/lib/utils/formatters';

interface SpendingMetricProps {
  label: string;
  amount: number;
  sublabel?: string;
  isMono?: boolean;
}

export default function SpendingMetric({
  label,
  amount,
  sublabel,
  isMono = true,
}: SpendingMetricProps) {
  return (
    <div className="p-3.5 rounded-lg border border-slate-200 bg-slate-50">
      <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">{label}</div>
      <div className={`text-xl font-extrabold text-slate-900 mt-1 ${isMono ? 'font-mono numeral-tabular' : ''}`}>
        {formatCurrency(amount, true)}
      </div>
      {sublabel && <div className="text-[10px] text-slate-500 mt-0.5">{sublabel}</div>}
    </div>
  );
}
