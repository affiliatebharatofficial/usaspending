'use client';

import React from 'react';
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from 'recharts';
import { formatCurrency } from '@/lib/utils/formatters';

interface SpendingTrendChartProps {
  data: { year: number; amount: number }[];
  type?: 'area' | 'bar';
  color?: string;
  height?: number;
}

export default function SpendingTrendChart({
  data,
  type = 'area',
  color = '#3b82f6',
  height = 300,
}: SpendingTrendChartProps) {
  const formattedData = data.map((d) => ({
    year: `FY ${d.year}`,
    rawAmount: d.amount,
    formatted: formatCurrency(d.amount, true),
  }));

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="glass-card p-3 rounded-lg border border-slate-700 bg-slate-900/95 text-xs shadow-xl">
          <div className="font-semibold text-slate-300">{label}</div>
          <div className="text-sm font-bold text-amber-400 mt-1">
            {formatCurrency(payload[0].value)}
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <div style={{ width: '100%', height }}>
      <ResponsiveContainer width="100%" height="100%">
        {type === 'area' ? (
          <AreaChart data={formattedData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id={`colorGrad-${color}`} x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={color} stopOpacity={0.4} />
                <stop offset="95%" stopColor={color} stopOpacity={0.0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
            <XAxis dataKey="year" stroke="#64748b" tick={{ fontSize: 12 }} />
            <YAxis
              stroke="#64748b"
              tick={{ fontSize: 11 }}
              tickFormatter={(val) => `$${(val / 1e9).toFixed(0)}B`}
            />
            <Tooltip content={<CustomTooltip />} />
            <Area
              type="monotone"
              dataKey="rawAmount"
              stroke={color}
              strokeWidth={3}
              fillOpacity={1}
              fill={`url(#colorGrad-${color})`}
            />
          </AreaChart>
        ) : (
          <BarChart data={formattedData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
            <XAxis dataKey="year" stroke="#64748b" tick={{ fontSize: 12 }} />
            <YAxis
              stroke="#64748b"
              tick={{ fontSize: 11 }}
              tickFormatter={(val) => `$${(val / 1e9).toFixed(0)}B`}
            />
            <Tooltip content={<CustomTooltip />} />
            <Bar dataKey="rawAmount" fill={color} radius={[6, 6, 0, 0]} />
          </BarChart>
        )}
      </ResponsiveContainer>
    </div>
  );
}
