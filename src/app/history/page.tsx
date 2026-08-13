'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Breadcrumbs from '@/components/navigation/Breadcrumbs';
import SpendingTrendChart from '@/components/charts/SpendingTrendChart';
import MetricCard from '@/components/visualizations/MetricCard';
import DataFreshness from '@/components/visualizations/DataFreshness';
import { HISTORICAL_SPENDING, SPENDING_CATEGORIES } from '@/lib/data/spendingData';
import { formatCurrency } from '@/lib/utils/formatters';
import { TrendingUp, ArrowLeft, Calendar, ArrowUpRight, ArrowDownRight } from 'lucide-react';

export default function HistoryAnalysisPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const trendData = HISTORICAL_SPENDING.map((h) => ({
    year: h.year,
    amount: h.spending,
  }));

  const latestFY = HISTORICAL_SPENDING[HISTORICAL_SPENDING.length - 1];
  const previousFY = HISTORICAL_SPENDING[HISTORICAL_SPENDING.length - 2];

  const yoyDiff = latestFY.spending - previousFY.spending;
  const yoyPct = Number(((yoyDiff / previousFY.spending) * 100).toFixed(2));

  return (
    <div className="space-y-10 py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <Breadcrumbs items={[{ name: 'Historical Analysis', url: '/history' }]} />

      <div>
        <Link
          href="/"
          className="inline-flex items-center space-x-1.5 text-xs font-semibold text-slate-500 hover:text-slate-900 transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Overview</span>
        </Link>
      </div>

      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-blue-700 px-3 py-1 rounded bg-blue-50 border border-blue-200">
          <Calendar className="w-3.5 h-3.5" />
          Multi-Year Spending Trends (2018 – 2026)
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-slate-900">
          Historical Budget Growth & YoY Analysis
        </h1>
        <p className="text-sm text-slate-600">
          Explore historical spending shifts, inflation adjustments, emergency spending spikes, and long-term national budget expansion.
        </p>
      </div>

      {/* Overview Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <MetricCard
          label="FY2026 Outlays"
          value={formatCurrency(latestFY.spending, true)}
          subtext="Current Fiscal Year"
          highlight
        />
        <MetricCard
          label="FY2025 Outlays"
          value={formatCurrency(previousFY.spending, true)}
          subtext="Prior Fiscal Year"
        />
        <MetricCard
          label="YoY Dollar Change"
          value={`+$${(yoyDiff / 1e9).toFixed(1)}B`}
          subtext={`From FY2025 to FY2026`}
          change={`+${yoyPct}%`}
          changeType="positive"
        />
        <MetricCard
          label="8-Year Outlay Expansion"
          value="+73.3%"
          subtext="Growth since FY2018 ($4.1T → $7.1T)"
        />
      </div>

      {/* Historical Line Chart */}
      <div className="data-card rounded-xl p-6 sm:p-8 border border-slate-200 bg-white space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-blue-700" />
              8-Year Federal Outlays Growth Curve
            </h2>
            <p className="text-xs text-slate-500">
              Notice the $2.1T emergency COVID-19 relief jump in FY2020.
            </p>
          </div>
          <DataFreshness />
        </div>

        <SpendingTrendChart data={trendData} color="#1e3a8a" height={360} />
      </div>

      {/* Largest Increase & Decrease Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="data-card p-6 rounded-xl border border-emerald-200 bg-emerald-50/40 space-y-3">
          <div className="flex items-center space-x-2 text-xs font-bold text-emerald-800 uppercase">
            <ArrowUpRight className="w-4 h-4 text-emerald-700" />
            Largest Historical Expansion Event
          </div>
          <h3 className="text-lg font-extrabold text-slate-900">
            FY2020 COVID-19 Emergency Relief (+47.3%)
          </h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Federal outlays rose from $4.45T in FY2019 to $6.55T in FY2020 due to the CARES Act, Paycheck Protection Program (PPP), and stimulus disbursements.
          </p>
        </div>

        <div className="data-card p-6 rounded-xl border border-blue-200 bg-blue-50/40 space-y-3">
          <div className="flex items-center space-x-2 text-xs font-bold text-blue-800 uppercase">
            <ArrowDownRight className="w-4 h-4 text-blue-700" />
            Post-Pandemic Budget Stabilization
          </div>
          <h3 className="text-lg font-extrabold text-slate-900">
            FY2022 Post-COVID Reset (-8.0%)
          </h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Outlays contracted from $6.82T in FY2021 to $6.27T in FY2022 as emergency pandemic measures expired before resuming normal growth trajectory.
          </p>
        </div>
      </div>
    </div>
  );
}
