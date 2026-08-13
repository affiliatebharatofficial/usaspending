'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  PieChart as RePieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { formatCurrency } from '@/lib/utils/formatters';

export interface DonutSliceItem {
  name: string;
  amount: number;
  percentage: number;
  slug?: string;
  color?: string;
}

interface DonutChartProps {
  data: DonutSliceItem[];
  title?: string;
  subtitle?: string;
  centerLabel?: string;
  centerValue?: string;
  height?: number;
}

const DEFAULT_COLORS = [
  '#0b192c', // Navy 950
  '#1e3a8a', // Blue 900
  '#2563eb', // Brand Blue 600
  '#0284c7', // Sky 600
  '#0d9488', // Teal 600
  '#16a34a', // Green 600
  '#d97706', // Amber 600
  '#dc2626', // Red 600
  '#7c3aed', // Purple 600
  '#475569', // Slate 600
];

export default function DonutChart({
  data,
  title,
  subtitle,
  centerLabel = 'Total Budget',
  centerValue,
  height = 300,
}: DonutChartProps) {
  const router = useRouter();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  if (!data || data.length === 0) {
    return (
      <div className="p-8 text-center text-xs text-slate-500 bg-slate-50 rounded-lg border border-slate-200">
        No breakdown data available for this visualization.
      </div>
    );
  }

  const chartData = data.map((item, idx) => ({
    ...item,
    color: item.color || DEFAULT_COLORS[idx % DEFAULT_COLORS.length],
  }));

  const handleSliceClick = (entry: DonutSliceItem) => {
    if (entry.slug) {
      router.push(`/${entry.slug}`);
    }
  };

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      const item: DonutSliceItem = payload[0].payload;
      return (
        <div className="p-3 bg-slate-900 text-white rounded-lg shadow-xl border border-slate-700 text-xs space-y-1 z-50">
          <div className="font-bold border-b border-slate-700 pb-1 flex items-center justify-between gap-4">
            <span>{item.name}</span>
            <span className="font-mono text-blue-300">{item.percentage}%</span>
          </div>
          <div className="font-extrabold font-mono text-base text-white pt-0.5 numeral-tabular">
            {formatCurrency(item.amount, true)}
          </div>
          <div className="text-[10px] text-slate-400">
            {item.percentage}% of total visualized outlays
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="w-full space-y-4">
      {(title || subtitle) && (
        <div className="space-y-1">
          {title && <h3 className="text-base font-bold text-slate-900">{title}</h3>}
          {subtitle && <p className="text-xs text-slate-500">{subtitle}</p>}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
        {/* Donut Visual */}
        <div className="md:col-span-6 relative flex items-center justify-center">
          <div style={{ width: '100%', height }}>
            <ResponsiveContainer width="100%" height="100%">
              <RePieChart>
                <Pie
                  data={chartData}
                  cx="50%"
                  cy="50%"
                  innerRadius={70}
                  outerRadius={105}
                  paddingAngle={3}
                  dataKey="amount"
                  onClick={handleSliceClick}
                  onMouseEnter={(_, idx) => setActiveIndex(idx)}
                  onMouseLeave={() => setActiveIndex(null)}
                  className="cursor-pointer focus:outline-none"
                >
                  {chartData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={entry.color}
                      stroke="#ffffff"
                      strokeWidth={2}
                      style={{
                        filter: activeIndex === index ? 'brightness(1.15)' : 'none',
                        transition: 'all 0.2s ease',
                      }}
                    />
                  ))}
                </Pie>
                <Tooltip content={<CustomTooltip />} />
              </RePieChart>
            </ResponsiveContainer>
          </div>

          {/* Center Text overlay */}
          <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none text-center px-4">
            <span className="text-[10px] uppercase tracking-wider font-semibold text-slate-500">
              {centerLabel}
            </span>
            {centerValue && (
              <span className="text-base sm:text-lg font-extrabold text-slate-900 font-mono numeral-tabular">
                {centerValue}
              </span>
            )}
          </div>
        </div>

        {/* Legend / Breakdown List */}
        <div className="md:col-span-6 space-y-2 max-h-[300px] overflow-y-auto pr-1">
          {chartData.map((item, index) => (
            <div
              key={item.name}
              onClick={() => handleSliceClick(item)}
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
              className={`p-2.5 rounded-lg border transition-all cursor-pointer flex items-center justify-between text-xs ${
                activeIndex === index
                  ? 'bg-slate-100 border-slate-300 shadow-sm'
                  : 'bg-slate-50 border-slate-200 hover:bg-slate-100/70'
              }`}
            >
              <div className="flex items-center space-x-2.5 min-w-0 pr-2">
                <span
                  className="w-3 h-3 rounded-full flex-shrink-0"
                  style={{ backgroundColor: item.color }}
                />
                <span className="font-semibold text-slate-800 truncate">
                  {item.name}
                </span>
              </div>

              <div className="text-right flex-shrink-0 font-mono">
                <div className="font-bold text-slate-900 numeral-tabular">
                  {formatCurrency(item.amount, true)}
                </div>
                <div className="text-[10px] text-slate-500 font-bold">{item.percentage}%</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
