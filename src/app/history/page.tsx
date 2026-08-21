'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Breadcrumbs from '@/components/navigation/Breadcrumbs';
import SpendingTrendChart from '@/components/charts/SpendingTrendChart';
import MetricCard from '@/components/visualizations/MetricCard';
import DataFreshness from '@/components/visualizations/DataFreshness';
import FAQSection, { FAQItem } from '@/components/common/FAQSection';
import { HISTORICAL_SPENDING, SPENDING_CATEGORIES } from '@/lib/data/spendingData';
import { formatCurrency } from '@/lib/utils/formatters';
import { TrendingUp, ArrowLeft, Calendar, ArrowUpRight, ArrowDownRight, BookOpen } from 'lucide-react';

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

  const historyFAQs: FAQItem[] = [
    {
      question: 'What caused the massive federal spending surge in FY2020?',
      answer: 'Federal outlays jumped from $4.45 Trillion in FY2019 to $6.55 Trillion in FY2020 (+47.3%) due to emergency legislation responding to COVID-19, including the CARES Act, Paycheck Protection Program (PPP), and stimulus disbursements.',
    },
    {
      question: 'How has federal spending grown overall from FY2018 to FY2026?',
      answer: 'Total annual federal outlays grew from $4.11 Trillion in FY2018 to $6.75 Trillion in FY2026, representing an overall 8-year outlay expansion of approximately +64.2%.',
    },
    {
      question: 'Why did federal outlays contract in FY2022?',
      answer: 'Outlays contracted from $6.82 Trillion in FY2021 to $6.27 Trillion in FY2022 (-8.0%) as temporary emergency pandemic funding expired before resuming baseline budgetary growth.',
    },
    {
      question: 'Are historical spending figures adjusted for inflation?',
      answer: 'Historical figures are presented in nominal Treasury outlay dollars as recorded at the end of each respective fiscal year (October 1 to September 30).',
    },
    {
      question: 'Which spending categories expanded fastest over the past 8 years?',
      answer: 'Mandatory entitlement outlays (Social Security and Medicare) and interest on the national debt grew at the fastest annual rates due to demographic aging and higher interest rates.',
    },
    {
      question: 'Where do historical spending figures come from?',
      answer: 'All historical figures are ingested from official end-of-year execution statements published by the U.S. Department of the Treasury and USAspending.gov.',
    },
    {
      question: 'How often are historical budget charts updated?',
      answer: 'Historical charts are updated continuously as monthly Treasury statements (MTS) and end-of-year budget reports are published.',
    },
  ];

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
          value="+64.2%"
          subtext="Growth since FY2018 ($4.1T → $6.75T)"
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
          <div className="flex items-center space-x-2 text-xs font-bold text-blue-700 uppercase">
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

      {/* 300+ Words Guide Section */}
      <div className="data-card p-6 sm:p-8 rounded-xl border border-slate-200 bg-white space-y-6">
        <div className="border-b border-slate-100 pb-4 flex items-center space-x-2">
          <BookOpen className="w-5 h-5 text-blue-700" />
          <h2 className="text-xl font-bold text-slate-900">
            Historical Trajectory of the U.S. Federal Budget
          </h2>
        </div>

        <div className="space-y-4 text-xs text-slate-700 leading-relaxed max-w-4xl">
          <p>
            Analyzing the historical budget trajectory of the United States Federal Government between Fiscal Years 2018 and 2026 provides essential context for understanding long-term fiscal expansion. Over this eight-year period, total annual federal outlays grew from <strong>$4.11 Trillion in FY2018</strong> to <strong>$6.75 Trillion in FY2026</strong>.
          </p>
          <p>
            The most significant single-year budgetary event occurred in <strong>FY2020</strong>, when emergency legislative responses to the COVID-19 pandemic drove annual outlays up by <strong>+$2.1 Trillion (+47.3%)</strong> in a single fiscal year. This expansion included emergency funding under the CARES Act, Paycheck Protection Program (PPP), expanded unemployment insurance, and direct economic impact payments.
          </p>
          <p>
            Following pandemic relief expiration in <strong>FY2022</strong>, outlays stabilized before resuming baseline structural growth driven by expanding entitlement commitments (Social Security and Medicare), net interest on the public debt, and defense modernization. All historical financial figures presented on USA Spending reflect verified end-of-year execution statements published by the U.S. Department of the Treasury.
          </p>
        </div>
      </div>

      {/* 7 FAQs + Schema */}
      <FAQSection
        title="Frequently Asked Questions: Historical Budget Analysis"
        subtitle="Verified explanations of historical budget growth, emergency spending events, and inflation trends."
        faqs={historyFAQs}
      />
    </div>
  );
}
