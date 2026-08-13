import React from 'react';
import { formatCurrency } from '@/lib/utils/formatters';

interface StatCardProps {
  title: string;
  value: number | string;
  subtitle?: string;
  isCurrency?: boolean;
  highlight?: boolean;
}

export default function StatCard({
  title,
  value,
  subtitle,
  isCurrency = true,
  highlight = false,
}: StatCardProps) {
  const formattedValue = typeof value === 'number' && isCurrency ? formatCurrency(value, true) : value;

  return (
    <div className={`data-card p-5 border rounded-xl ${highlight ? 'bg-blue-50/50 border-blue-200' : 'bg-white border-slate-200'}`}>
      <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">{title}</div>
      <div className="text-2xl sm:text-3xl font-extrabold font-mono text-slate-900 mt-1.5 numeral-tabular">
        {formattedValue}
      </div>
      {subtitle && <div className="text-[11px] text-slate-500 mt-1">{subtitle}</div>}
    </div>
  );
}
