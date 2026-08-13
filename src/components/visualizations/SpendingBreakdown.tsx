'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { DataMetadata } from '@/types';
import { formatCurrency, formatPercent } from '@/lib/utils/formatters';
import ChartContainer from './ChartContainer';
import { ArrowUpRight, ArrowUpDown } from 'lucide-react';

export interface BreakdownDataItem {
  category: string;
  amount: number;
  percentage: number;
  hourlyRate?: number;
  slug?: string;
  icon?: string;
}

interface SpendingBreakdownProps {
  data?: BreakdownDataItem[];
  metadata?: DataMetadata;
  loading?: boolean;
  empty?: boolean;
}

export default function SpendingBreakdown({
  data = [],
  metadata,
  loading = false,
  empty = false,
}: SpendingBreakdownProps) {
  const [sortOrder, setSortOrder] = useState<'desc' | 'asc' | 'alpha'>('desc');

  const sortedData = [...data].sort((a, b) => {
    if (sortOrder === 'desc') return b.amount - a.amount;
    if (sortOrder === 'asc') return a.amount - b.amount;
    return a.category.localeCompare(b.category);
  });

  const maxAmount = Math.max(...data.map((d) => d.amount), 1);

  return (
    <ChartContainer
      title="U.S. Government Spending Breakdown"
      subtitle="Detailed breakdown of federal spending outlays across major national categories."
      metadata={metadata}
      loading={loading}
      empty={empty || data.length === 0}
      emptyMessage="No spending breakdown data available."
    >
      <div className="space-y-6">
        {/* Controls Bar */}
        <div className="flex items-center justify-between pb-3 border-b border-slate-100 text-xs">
          <span className="font-semibold text-slate-500 uppercase tracking-wider">
            Showing {sortedData.length} Categories
          </span>
          <div className="flex items-center space-x-2">
            <ArrowUpDown className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-slate-600 font-medium">Sort:</span>
            <select
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value as any)}
              className="bg-white border border-slate-300 text-slate-800 rounded px-2 py-1 focus:outline-none focus:ring-1 focus:ring-blue-600 font-medium"
            >
              <option value="desc">Highest Amount</option>
              <option value="asc">Lowest Amount</option>
              <option value="alpha">Alphabetical</option>
            </select>
          </div>
        </div>

        {/* Horizontal Bar Breakdown Rows */}
        <div className="space-y-4">
          {sortedData.map((item) => {
            const barWidthPercent = (item.amount / maxAmount) * 100;
            const categorySlug = item.slug || item.category.toLowerCase().replace(/[^a-z0-9]+/g, '-');

            return (
              <div
                key={item.category}
                className="p-4 rounded-xl border border-slate-200 bg-white hover:border-slate-300 transition-colors space-y-2"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div className="flex items-center space-x-2">
                    {item.icon && <span className="text-lg">{item.icon}</span>}
                    <Link
                      href={`/categories/${categorySlug}`}
                      className="font-bold text-slate-900 text-base hover:text-blue-600 transition-colors flex items-center gap-1 group"
                    >
                      <span>{item.category}</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-blue-600" />
                    </Link>
                  </div>

                  <div className="flex items-center space-x-3 font-mono text-sm">
                    <span className="font-extrabold text-slate-900">
                      {formatCurrency(item.amount, true)}
                    </span>
                    <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 font-bold text-xs">
                      {formatPercent(item.percentage)}
                    </span>
                  </div>
                </div>

                {/* Horizontal Progress Bar */}
                <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-blue-700 rounded-full transition-all duration-500"
                    style={{ width: `${Math.max(barWidthPercent, 2)}%` }}
                  ></div>
                </div>

                {/* Sub-rate note */}
                {item.hourlyRate && (
                  <div className="text-[11px] text-slate-500 font-mono flex items-center justify-between pt-1">
                    <span>Hourly Rate: {formatCurrency(item.hourlyRate, true)} / hr</span>
                    <Link
                      href={`/categories/${categorySlug}`}
                      className="text-blue-600 hover:underline font-sans font-medium"
                    >
                      View details →
                    </Link>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </ChartContainer>
  );
}
