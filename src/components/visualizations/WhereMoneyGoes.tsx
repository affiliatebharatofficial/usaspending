import React from 'react';
import DonutChart, { DonutSliceItem } from './DonutChart';
import { formatCurrency } from '@/lib/utils/formatters';

interface WhereMoneyGoesProps {
  title?: string;
  items: DonutSliceItem[];
  totalAmount?: number;
}

export default function WhereMoneyGoes({
  title = 'Where Does the Money Go?',
  items,
  totalAmount,
}: WhereMoneyGoesProps) {
  const calculatedTotal = totalAmount || items.reduce((acc, curr) => acc + curr.amount, 0);

  return (
    <div className="data-card p-6 sm:p-8 rounded-xl border border-slate-200 bg-white space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-4">
        <div>
          <h2 className="text-xl font-bold text-slate-900">{title}</h2>
          <p className="text-xs text-slate-500">
            Composition breakdown of federal outlays and allocations.
          </p>
        </div>

        {calculatedTotal > 0 && (
          <div className="bg-slate-50 border border-slate-200 px-3.5 py-1.5 rounded-lg text-right font-mono">
            <span className="text-[10px] uppercase text-slate-500 font-semibold block">Total Visualized</span>
            <span className="text-sm font-extrabold text-slate-900 numeral-tabular">
              {formatCurrency(calculatedTotal, true)}
            </span>
          </div>
        )}
      </div>

      <DonutChart
        data={items}
        centerLabel="Allocated"
        centerValue={formatCurrency(calculatedTotal, true)}
        height={260}
      />
    </div>
  );
}
