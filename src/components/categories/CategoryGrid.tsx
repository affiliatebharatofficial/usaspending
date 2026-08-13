import React from 'react';
import Link from 'next/link';
import { SPENDING_CATEGORIES } from '@/lib/data/spendingData';
import { formatCurrency, formatPercent } from '@/lib/utils/formatters';
import { ArrowUpRight, TrendingUp } from 'lucide-react';

export default function CategoryGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {SPENDING_CATEGORIES.map((cat) => (
        <Link
          key={cat.id}
          href={`/${cat.slug}`}
          className="group glass-card p-5 rounded-2xl border border-slate-800 bg-slate-950/80 glass-card-hover flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center space-x-2.5">
                <span className="text-2xl">{cat.icon}</span>
                <h3 className="font-bold text-white group-hover:text-blue-400 transition-colors">
                  {cat.name}
                </h3>
              </div>
              <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-blue-950 text-blue-400 border border-blue-800/50">
                {formatPercent(cat.percentage)}
              </span>
            </div>

            <p className="text-xs text-slate-400 line-clamp-2 mb-4 leading-relaxed">
              {cat.description}
            </p>
          </div>

          <div className="pt-4 border-t border-slate-800/80 flex items-end justify-between">
            <div>
              <div className="text-[10px] uppercase font-semibold text-slate-500">Annual Budget</div>
              <div className="text-lg font-bold font-mono text-white mt-0.5">
                {formatCurrency(cat.annualAmount, true)}
              </div>
              <div className="text-[10px] text-emerald-400 font-mono mt-0.5">
                {formatCurrency(cat.dailyRate, true)} / day
              </div>
            </div>

            <div className="p-2 rounded-xl bg-slate-900 group-hover:bg-blue-600 text-slate-400 group-hover:text-white transition-colors">
              <ArrowUpRight className="w-4 h-4" />
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
