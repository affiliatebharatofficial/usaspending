'use client';

import React, { useState } from 'react';
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip } from 'recharts';
import { DataMetadata } from '@/types';
import { formatCurrency, formatPercent } from '@/lib/utils/formatters';
import { SPENDING_CATEGORIES } from '@/lib/data/spendingData';
import { DEFAULT_METADATA } from '@/lib/services/dataService';
import ChartContainer from './ChartContainer';

export interface PieChartDataItem {
  category: string;
  amount: number;
  percentage: number;
  icon?: string;
  slug?: string;
}

interface GovernmentSpendingPieChartProps {
  data?: PieChartDataItem[];
  metadata?: DataMetadata;
  loading?: boolean;
  empty?: boolean;
}

const PIE_COLORS = [
  '#0b192c', // Deep navy
  '#1e3a8a', // Blue 900
  '#2563eb', // Brand blue
  '#0284c7', // Sky blue
  '#0d9488', // Teal
  '#16a34a', // Emerald green
  '#d97706', // Amber
  '#dc2626', // Red
  '#7c3aed', // Purple
  '#475569', // Slate
];

export default function GovernmentSpendingPieChart({
  data,
  metadata = DEFAULT_METADATA,
  loading = false,
  empty = false,
}: GovernmentSpendingPieChartProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // If no custom data is passed, default to SPENDING_CATEGORIES
  const effectiveData = data && data.length > 0 ? data : SPENDING_CATEGORIES.map((c) => ({
    category: c.name,
    amount: c.amount,
    percentage: c.percentage,
    icon: c.icon,
    slug: c.slug,
  }));

  const formattedData = effectiveData.map((d, idx) => ({
    name: d.category,
    value: d.amount,
    percentage: d.percentage,
    icon: d.icon,
    color: PIE_COLORS[idx % PIE_COLORS.length],
  }));

  const activeItem = hoveredIndex !== null ? formattedData[hoveredIndex] : null;

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      const item = payload[0].payload;
      return (
        <div className="bg-slate-900 text-white p-3 rounded-lg text-xs shadow-xl space-y-1 z-50 border border-slate-700">
          <div className="font-bold flex items-center gap-1.5 border-b border-slate-700 pb-1">
            {item.icon && <span>{item.icon}</span>}
            <span>{item.name}</span>
          </div>
          <div className="text-blue-300 font-mono font-extrabold text-sm pt-0.5 numeral-tabular">
            {formatCurrency(item.value, true)}
          </div>
          <div className="text-slate-300">
            {formatPercent(item.percentage)} of Total Federal Outlays
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <ChartContainer
      title="U.S. Government Spending Pie Chart"
      subtitle="Composition of U.S. Federal Government spending by major spending categories."
      metadata={metadata}
      loading={loading}
      empty={empty || formattedData.length === 0}
      emptyMessage="No official pie chart data available for this selection."
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Pie Chart Viewport */}
        <div className="lg:col-span-7 h-[320px] sm:h-[380px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={formattedData}
                cx="50%"
                cy="50%"
                innerRadius={65}
                outerRadius={125}
                paddingAngle={3}
                dataKey="value"
                onMouseEnter={(_, index) => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {formattedData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={entry.color}
                    stroke="#ffffff"
                    strokeWidth={2}
                    className="transition-all duration-150 cursor-pointer hover:opacity-85"
                    style={{
                      filter: hoveredIndex === index ? 'brightness(1.15)' : 'none',
                    }}
                  />
                ))}
              </Pie>
              <Tooltip content={<CustomTooltip />} />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Legend Panel */}
        <div className="lg:col-span-5 space-y-4">
          {activeItem ? (
            <div className="p-4 rounded-lg bg-slate-900 text-white space-y-1 shadow-md">
              <div className="text-[11px] text-slate-400 uppercase font-semibold">Selected Category</div>
              <div className="font-bold text-base flex items-center gap-1.5">
                {activeItem.icon && <span>{activeItem.icon}</span>}
                <span>{activeItem.name}</span>
              </div>
              <div className="text-xl font-mono font-extrabold text-blue-300 numeral-tabular">
                {formatCurrency(activeItem.value, true)}
              </div>
              <div className="text-xs text-emerald-400 font-semibold">
                {formatPercent(activeItem.percentage)} of Federal Outlays
              </div>
            </div>
          ) : (
            <div className="p-4 rounded-lg bg-slate-50 border border-slate-200 text-center text-xs text-slate-500">
              Hover over or tap any slice to inspect category outlays and percentage allocation.
            </div>
          )}

          {/* Accessible Category Grid */}
          <div className="space-y-1.5 max-h-[240px] overflow-y-auto pr-1">
            {formattedData.map((item, idx) => (
              <div
                key={item.name}
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`p-2 rounded-md border text-xs flex items-center justify-between cursor-pointer transition-colors ${
                  hoveredIndex === idx
                    ? 'border-blue-600 bg-blue-50 text-blue-900 font-semibold'
                    : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50'
                }`}
              >
                <div className="flex items-center space-x-2 truncate">
                  <span
                    className="w-3 h-3 rounded-full flex-shrink-0"
                    style={{ backgroundColor: item.color }}
                  ></span>
                  <span className="truncate">{item.name}</span>
                </div>
                <span className="font-mono font-bold text-slate-900 ml-2 flex-shrink-0">
                  {formatPercent(item.percentage)}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </ChartContainer>
  );
}
