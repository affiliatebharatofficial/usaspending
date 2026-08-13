import React from 'react';
import { LucideIcon } from 'lucide-react';

interface MetricCardProps {
  label: string;
  value: string | number;
  subtext?: string;
  change?: string;
  changeType?: 'positive' | 'negative' | 'neutral';
  icon?: LucideIcon;
  highlight?: boolean;
}

export default function MetricCard({
  label,
  value,
  subtext,
  change,
  changeType = 'neutral',
  icon: Icon,
  highlight = false,
}: MetricCardProps) {
  return (
    <div
      className={`data-card p-5 rounded-xl border transition-all ${
        highlight
          ? 'bg-blue-900 text-white border-blue-900 shadow-md'
          : 'bg-white text-slate-900 border-slate-200 hover:border-slate-300'
      }`}
    >
      <div className="flex items-center justify-between">
        <span
          className={`text-xs font-bold uppercase tracking-wider ${
            highlight ? 'text-blue-200' : 'text-slate-500'
          }`}
        >
          {label}
        </span>
        {Icon && (
          <Icon
            className={`w-4 h-4 ${highlight ? 'text-blue-300' : 'text-blue-700'}`}
          />
        )}
      </div>

      <div
        className={`text-2xl sm:text-3xl font-black font-mono mt-1.5 numeral-tabular ${
          highlight ? 'text-white' : 'text-slate-900'
        }`}
      >
        {value}
      </div>

      <div className="mt-2 flex items-center justify-between text-xs">
        {subtext && (
          <span className={`font-semibold ${highlight ? 'text-blue-200' : 'text-slate-500'}`}>
            {subtext}
          </span>
        )}
        {change && (
          <span
            className={`font-semibold font-mono ${
              changeType === 'positive'
                ? highlight ? 'text-emerald-300' : 'text-emerald-700'
                : changeType === 'negative'
                ? highlight ? 'text-rose-300' : 'text-rose-700'
                : highlight ? 'text-blue-200' : 'text-slate-600'
            }`}
          >
            {change}
          </span>
        )}
      </div>
    </div>
  );
}
