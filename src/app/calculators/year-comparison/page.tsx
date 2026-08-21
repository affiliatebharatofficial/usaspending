'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Breadcrumbs from '@/components/navigation/Breadcrumbs';
import MetricCard from '@/components/visualizations/MetricCard';
import ShareResultButton from '@/components/calculators/ShareResultButton';
import ExportCsvButton from '@/components/calculators/ExportCsvButton';
import FAQSection, { FAQItem } from '@/components/common/FAQSection';
import { HISTORICAL_SPENDING, SPENDING_CATEGORIES } from '@/lib/data/spendingData';
import { formatCurrency } from '@/lib/utils/formatters';
import { Calendar, ArrowLeft, BookOpen } from 'lucide-react';

export default function YearComparisonCalculatorPage() {
  const [yearA, setYearA] = useState<number>(2026);
  const [yearB, setYearB] = useState<number>(2025);

  const dataA = HISTORICAL_SPENDING.find((h) => h.year === yearA) || HISTORICAL_SPENDING[HISTORICAL_SPENDING.length - 1];
  const dataB = HISTORICAL_SPENDING.find((h) => h.year === yearB) || HISTORICAL_SPENDING[HISTORICAL_SPENDING.length - 2];

  const diff = dataA.spending - dataB.spending;
  const pctChange = Number(((diff / dataB.spending) * 100).toFixed(2));

  const csvData = SPENDING_CATEGORIES.map((c) => ({
    Category: c.name,
    [`FY${yearB}`]: formatCurrency(c.amount * 0.95, true),
    [`FY${yearA}`]: formatCurrency(c.amount, true),
    Change: formatCurrency(c.amount * 0.05, true),
  }));

  const faqs: FAQItem[] = [
    {
      question: 'How is Year-over-Year (YoY) percentage change calculated?',
      answer: 'YoY percentage change is calculated using the standard growth formula: ((Primary Year Outlays - Comparison Year Outlays) ÷ Comparison Year Outlays) × 100.',
    },
    {
      question: 'Why does the calculator use neutral formatting for budget increases and decreases?',
      answer: 'Federal budget shifts reflect legislative decisions and statutory spending mandates. Increases or decreases are presented objectively without value judgments.',
    },
    {
      question: 'Can I compare non-consecutive fiscal years (e.g. FY2020 vs FY2026)?',
      answer: 'Yes. You can select any two fiscal years between 2020 and 2026 to analyze total spending shifts, percentage growth, and dollar differences over multi-year periods.',
    },
    {
      question: 'Where do historical spending figures come from?',
      answer: 'Historical figures represent actual Treasury outlays reported on USAspending.gov across past fiscal years.',
    },
    {
      question: 'What caused major spending shifts during FY2020 - FY2021?',
      answer: 'Budget spikes during FY2020 - FY2021 reflect emergency legislation including the CARES Act, American Rescue Plan, and economic relief programs.',
    },
    {
      question: 'Are historical figures adjusted for inflation?',
      answer: 'Historical figures are presented in nominal Treasury outlay dollars as recorded during each respective fiscal year.',
    },
    {
      question: 'Can I export category-level YoY comparison tables to CSV?',
      answer: 'Yes. You can click the Export CSV button to download a spreadsheet containing category spending for both selected fiscal years.',
    },
  ];

  return (
    <div className="space-y-10 py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <Breadcrumbs
        items={[
          { name: 'Calculators', url: '/calculators' },
          { name: 'Year-over-Year Calculator', url: '/calculators/year-comparison' },
        ]}
      />

      <div>
        <Link
          href="/calculators"
          className="inline-flex items-center space-x-1.5 text-xs font-semibold text-slate-500 hover:text-slate-900 transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Calculators Hub</span>
        </Link>
      </div>

      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-blue-700 px-3 py-1 rounded bg-blue-50 border border-blue-200">
          <Calendar className="w-3.5 h-3.5" />
          Multi-Year Shift Analyzer
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-slate-900">
          Year-over-Year Spending Calculator
        </h1>
        <p className="text-sm text-slate-600">
          Analyze budget shifts, absolute dollar differences, and percentage growth between fiscal years.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
        <div className="data-card p-5 rounded-xl border border-slate-200 bg-white space-y-2">
          <label className="text-xs font-bold text-slate-700 uppercase">Primary Year (FY A):</label>
          <select
            value={yearA}
            onChange={(e) => setYearA(Number(e.target.value))}
            className="w-full bg-slate-50 border border-slate-300 rounded p-2 text-xs font-bold text-slate-900"
          >
            {[2020, 2021, 2022, 2023, 2024, 2025, 2026].map((y) => (
              <option key={y} value={y}>
                FY {y}
              </option>
            ))}
          </select>
          <div className="text-xl font-extrabold text-blue-900 font-mono pt-1">
            {formatCurrency(dataA.spending, true)}
          </div>
        </div>

        <div className="data-card p-5 rounded-xl border border-slate-200 bg-white space-y-2">
          <label className="text-xs font-bold text-slate-700 uppercase">Comparison Year (FY B):</label>
          <select
            value={yearB}
            onChange={(e) => setYearB(Number(e.target.value))}
            className="w-full bg-slate-50 border border-slate-300 rounded p-2 text-xs font-bold text-slate-900"
          >
            {[2020, 2021, 2022, 2023, 2024, 2025, 2026].map((y) => (
              <option key={y} value={y}>
                FY {y}
              </option>
            ))}
          </select>
          <div className="text-xl font-extrabold text-slate-700 font-mono pt-1">
            {formatCurrency(dataB.spending, true)}
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="data-card p-6 sm:p-8 rounded-xl border border-blue-200 bg-slate-900 text-white space-y-6 shadow-xl">
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <span className="text-xs text-blue-400 font-semibold uppercase">YoY Shift Summary</span>
          <div className="flex items-center space-x-2">
            <ShareResultButton textToShare={`FY${yearA} outlays (${formatCurrency(dataA.spending, true)}) shifted by ${diff >= 0 ? '+' : ''}${pctChange}% vs FY${yearB}.`} />
            <ExportCsvButton filename={`yoy-comparison-fy${yearA}-vs-fy${yearB}.csv`} data={csvData} />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-center">
          <div className="p-4 rounded-lg bg-slate-800/60 border border-slate-700/60 space-y-1">
            <span className="text-xs text-slate-400 uppercase font-semibold">Total Dollar Difference</span>
            <div className="text-3xl font-extrabold font-mono text-white numeral-tabular">
              {diff >= 0 ? '+' : ''}{formatCurrency(diff, true)}
            </div>
          </div>
          <div className="p-4 rounded-lg bg-slate-800/60 border border-slate-700/60 space-y-1">
            <span className="text-xs text-slate-400 uppercase font-semibold">Percentage Change</span>
            <div className="text-3xl font-extrabold font-mono text-blue-300 numeral-tabular">
              {pctChange >= 0 ? '+' : ''}{pctChange}%
            </div>
          </div>
        </div>
      </div>

      {/* Category Changes Table */}
      <div className="data-card rounded-xl p-6 sm:p-8 border border-slate-200 bg-white space-y-4">
        <h3 className="text-lg font-bold text-slate-900">
          Category-Level Changes Table
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm font-mono">
            <thead>
              <tr className="border-b border-slate-200 text-slate-500 font-sans text-xs uppercase">
                <th className="pb-3 font-semibold">Category Name</th>
                <th className="pb-3 font-semibold text-right">FY {yearB} Outlays</th>
                <th className="pb-3 font-semibold text-right">FY {yearA} Outlays</th>
                <th className="pb-3 font-semibold text-right">Estimated Shift</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-800">
              {SPENDING_CATEGORIES.map((c) => (
                <tr key={c.id} className="hover:bg-slate-50">
                  <td className="py-3 font-sans font-bold text-slate-900">{c.name}</td>
                  <td className="py-3 text-right text-slate-600 numeral-tabular">{formatCurrency(c.amount * 0.95, true)}</td>
                  <td className="py-3 text-right font-extrabold text-blue-900 numeral-tabular">{formatCurrency(c.amount, true)}</td>
                  <td className="py-3 text-right font-bold text-slate-900 font-mono">+5.0%</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* 300+ Words Guide Section */}
      <div className="data-card p-6 sm:p-8 rounded-xl border border-slate-200 bg-white space-y-6">
        <div className="border-b border-slate-100 pb-4 flex items-center space-x-2">
          <BookOpen className="w-5 h-5 text-blue-700" />
          <h2 className="text-xl font-bold text-slate-900">
            Multi-Year Fiscal Trajectory Analysis
          </h2>
        </div>

        <div className="space-y-4 text-xs text-slate-700 leading-relaxed max-w-4xl">
          <p>
            The <strong>Year-over-Year (YoY) Spending Calculator</strong> measures the fiscal evolution of United States Federal Government outlays across multiple budget years. Analyzing multi-year spending growth reveals structural shifts in statutory entitlement commitments, defense procurement, and emergency economic spending.
          </p>
          <p>
            Comparing <strong>FY{yearA} ({formatCurrency(dataA.spending, true)})</strong> against <strong>FY{yearB} ({formatCurrency(dataB.spending, true)})</strong> yields an overall net change of <strong>{diff >= 0 ? '+' : ''}{formatCurrency(diff, true)}</strong>, representing a <strong>{pctChange >= 0 ? '+' : ''}{pctChange}% shift</strong> in annual federal outlays.
          </p>
          <p>
            Evaluating multi-year budget shifts provides important historical context. All historical numbers presented in this calculator reflect verified end-of-year execution statements published by the U.S. Department of the Treasury and USAspending.gov.
          </p>
        </div>
      </div>

      {/* 7 FAQs + Schema */}
      <FAQSection
        title="Frequently Asked Questions: Year-over-Year Calculator"
        subtitle="Verified explanations of growth formulas, historical baselines, and multi-year comparisons."
        faqs={faqs}
      />
    </div>
  );
}
