import React from 'react';
import SpendingPieChart from '@/components/charts/SpendingPieChart';
import CategoryGrid from '@/components/categories/CategoryGrid';
import { PieChart, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'U.S. Government Spending Pie Chart — FY2026 Budget Breakdown',
  description: 'Interactive U.S. Federal Government spending pie chart visualization. View exact percentages and dollar outlays for Defense, Medicare, Social Security, Education, and NASA.',
};

export default function SpendingPieChartPage() {
  return (
    <div className="space-y-10 py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div>
        <Link
          href="/"
          className="inline-flex items-center space-x-1.5 text-xs font-semibold text-slate-400 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Overview</span>
        </Link>
      </div>

      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-emerald-400 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-800/40">
          <PieChart className="w-3.5 h-3.5" />
          Visual Data Presentation
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-white">
          U.S. Government Spending Pie Chart
        </h1>
        <p className="text-sm text-slate-300">
          Visual proportion of America's $6.75 Trillion annual federal budget across major national categories.
        </p>
      </div>

      {/* Main Pie Chart */}
      <SpendingPieChart />

      {/* Grid */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-white">Category Breakdown Cards</h2>
        <CategoryGrid />
      </div>
    </div>
  );
}
