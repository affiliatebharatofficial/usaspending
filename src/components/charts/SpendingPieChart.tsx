'use client';

import React, { useState } from 'react';
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';
import { SPENDING_CATEGORIES } from '@/lib/data/spendingData';
import { formatCurrency, formatPercent } from '@/lib/utils/formatters';

const CATEGORY_COLORS = [
  '#3b82f6', // Social Security (Blue)
  '#10b981', // Medicare (Emerald)
  '#f59e0b', // Defense (Amber)
  '#ec4899', // Medicaid (Pink)
  '#8b5cf6', // Veterans (Purple)
  '#06b6d4', // Education (Cyan)
  '#f97316', // Agriculture (Orange)
  '#64748b', // Infrastructure (Slate)
  '#a855f7', // Science (Purple-pink)
  '#eab308', // NASA (Yellow)
];

export default function SpendingPieChart() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const data = SPENDING_CATEGORIES.map((cat, idx) => ({
    name: cat.name,
    value: cat.annualAmount,
    percentage: cat.percentage,
    icon: cat.icon,
    color: CATEGORY_COLORS[idx % CATEGORY_COLORS.length],
    slug: cat.slug,
  }));

  const activeCategory = activeIndex !== null ? data[activeIndex] : null;

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      const item = payload[0].payload;
      return (
        <div className="glass-card p-3 rounded-xl border border-slate-700 bg-slate-900/95 text-xs shadow-2xl space-y-1">
          <div className="flex items-center space-x-1.5 font-bold text-white">
            <span>{item.icon}</span>
            <span>{item.name}</span>
          </div>
          <div className="text-amber-400 font-mono font-extrabold text-sm">
            {formatCurrency(item.value, true)}
          </div>
          <div className="text-slate-400">
            {formatPercent(item.percentage)} of Total Federal Outlays
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="glass-card rounded-3xl p-6 sm:p-8 border border-slate-800 bg-slate-950/80">
      <div className="text-center max-w-xl mx-auto mb-6">
        <h3 className="text-xl sm:text-2xl font-bold text-white">
          U.S. Federal Government Spending Pie Chart
        </h3>
        <p className="text-xs text-slate-400 mt-1">
          Interactive proportional donut chart of the FY2026 U.S. Federal Budget outlays ($6.75 Trillion total).
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        {/* Pie Chart Canvas */}
        <div className="lg:col-span-7 h-[360px] sm:h-[400px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={75}
                outerRadius={135}
                paddingAngle={3}
                dataKey="value"
                onMouseEnter={(_, index) => setActiveIndex(index)}
                onMouseLeave={() => setActiveIndex(null)}
              >
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={entry.color}
                    stroke="#0b1320"
                    strokeWidth={2}
                    className="transition-all duration-200 cursor-pointer hover:opacity-80"
                  />
                ))}
              </Pie>
              <Tooltip content={<CustomTooltip />} />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Legend / Hover Details Side Box */}
        <div className="lg:col-span-5 space-y-3">
          {activeCategory ? (
            <div className="p-5 rounded-2xl border border-slate-700 bg-slate-900/90 space-y-2">
              <div className="text-xs text-slate-400 uppercase font-semibold">Hovered Category</div>
              <div className="flex items-center space-x-2 text-xl font-bold text-white">
                <span>{activeCategory.icon}</span>
                <span>{activeCategory.name}</span>
              </div>
              <div className="text-2xl font-mono font-extrabold text-amber-400">
                {formatCurrency(activeCategory.value, true)}
              </div>
              <div className="text-xs text-emerald-400 font-semibold">
                {formatPercent(activeCategory.percentage)} of $6.75T Federal Budget
              </div>
            </div>
          ) : (
            <div className="p-5 rounded-2xl border border-slate-800 bg-slate-900/40 text-center text-xs text-slate-400">
              Hover over any slice of the pie chart to view exact dollar outlays and percentage share.
            </div>
          )}

          {/* Mini Legend List */}
          <div className="max-h-[220px] overflow-y-auto space-y-1.5 pr-2 custom-scrollbar">
            {data.map((cat, idx) => (
              <div
                key={cat.name}
                onMouseEnter={() => setActiveIndex(idx)}
                onMouseLeave={() => setActiveIndex(null)}
                className={`p-2 rounded-lg border text-xs flex items-center justify-between transition-colors cursor-pointer ${
                  activeIndex === idx
                    ? 'border-slate-600 bg-slate-800 text-white'
                    : 'border-slate-800/80 bg-slate-950/60 text-slate-300 hover:bg-slate-900'
                }`}
              >
                <div className="flex items-center space-x-2 truncate">
                  <span
                    className="w-3 h-3 rounded-full flex-shrink-0"
                    style={{ backgroundColor: cat.color }}
                  ></span>
                  <span className="font-medium truncate">{cat.name}</span>
                </div>
                <span className="font-mono font-bold text-slate-200 ml-2 flex-shrink-0">
                  {formatPercent(cat.percentage)}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
