'use client';

import React, { useState } from 'react';
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from 'recharts';
import { DataMetadata } from '@/types';
import { formatCurrency } from '@/lib/utils/formatters';
import { HISTORICAL_SPENDING } from '@/lib/data/spendingData';
import { DEFAULT_METADATA } from '@/lib/services/dataService';
import ChartContainer from './ChartContainer';

export interface YearChartDataItem {
  year: number;
  spending: number;
  deficit?: number;
  debtTotal?: number;
}

interface GovernmentSpendingByYearProps {
  data?: YearChartDataItem[];
  metadata?: DataMetadata;
  loading?: boolean;
  empty?: boolean;
}

export default function GovernmentSpendingByYear({
  data,
  metadata = DEFAULT_METADATA,
  loading = false,
  empty = false,
}: GovernmentSpendingByYearProps) {
  const [selectedRange, setSelectedRange] = useState<'all' | 'recent'>('all');

  // Fallback to HISTORICAL_SPENDING when no data prop is provided
  const effectiveData: YearChartDataItem[] =
    data && data.length > 0
      ? data
      : HISTORICAL_SPENDING.map((h) => ({
          year: h.year,
          spending: h.spending || h.totalSpending || 0,
          deficit: h.deficit,
          debtTotal: h.debtTotal,
        }));

  const filteredData = selectedRange === 'recent' ? effectiveData.filter((d) => d.year >= 2020) : effectiveData;

  const formattedChartData = filteredData.map((d) => ({
    yearLabel: `FY ${d.year}`,
    year: d.year,
    rawSpending: d.spending,
  }));

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-slate-900 text-white p-3 rounded-lg text-xs shadow-xl space-y-1 z-50 border border-slate-700">
          <div className="font-bold text-slate-300">{label}</div>
          <div className="text-blue-300 font-mono font-extrabold text-sm numeral-tabular">
            {formatCurrency(payload[0].value, true)}
          </div>
          <div className="text-[11px] text-slate-400">Total U.S. Federal Outlays</div>
        </div>
      );
    }
    return null;
  };

  return (
    <ChartContainer
      title="U.S. Government Spending by Year"
      subtitle="Historical progression of U.S. Federal Government annual spending over time."
      metadata={metadata}
      loading={loading}
      empty={empty || filteredData.length === 0}
      emptyMessage="No historical year dataset available."
    >
      <div className="space-y-6">
        {/* Year Filter Controls */}
        <div className="flex items-center justify-between pb-2 border-b border-slate-100 text-xs">
          <span className="font-semibold text-slate-500 uppercase tracking-wider font-mono">
            Fiscal Years Shown: {filteredData[0]?.year} – {filteredData[filteredData.length - 1]?.year}
          </span>
          <div className="flex items-center space-x-1 bg-slate-100 p-1 rounded-lg">
            <button
              onClick={() => setSelectedRange('all')}
              className={`px-2.5 py-1 rounded text-xs font-semibold transition-colors ${
                selectedRange === 'all' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              All Years
            </button>
            <button
              onClick={() => setSelectedRange('recent')}
              className={`px-2.5 py-1 rounded text-xs font-semibold transition-colors ${
                selectedRange === 'recent' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              2020 – 2026
            </button>
          </div>
        </div>

        {/* Line Chart Canvas */}
        <div className="h-[320px] sm:h-[380px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={formattedChartData} margin={{ top: 15, right: 15, left: 0, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis dataKey="yearLabel" stroke="#64748b" tick={{ fontSize: 12 }} />
              <YAxis
                stroke="#64748b"
                tick={{ fontSize: 11 }}
                tickFormatter={(val) => `$${(val / 1e12).toFixed(1)}T`}
              />
              <Tooltip content={<CustomTooltip />} />
              <Line
                type="monotone"
                dataKey="rawSpending"
                stroke="#1e3a8a"
                strokeWidth={3}
                dot={{ fill: '#1e3a8a', r: 5 }}
                activeDot={{ r: 8, fill: '#2563eb' }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Data Summary Table */}
        <div className="pt-4 border-t border-slate-100">
          <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-2 font-mono">
            Historical Data Summary Table
          </h4>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs font-mono">
              <thead>
                <tr className="border-b border-slate-200 text-slate-500 font-sans">
                  <th className="pb-2 font-semibold">Fiscal Year</th>
                  <th className="pb-2 font-semibold text-right">Total Outlays</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-800">
                {filteredData.map((row) => (
                  <tr key={row.year} className="hover:bg-slate-50">
                    <td className="py-2 font-sans font-bold text-slate-900">FY {row.year}</td>
                    <td className="py-2 text-right font-extrabold text-blue-900 numeral-tabular">
                      {formatCurrency(row.spending, true)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </ChartContainer>
  );
}
