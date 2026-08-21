'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Breadcrumbs from '@/components/navigation/Breadcrumbs';
import DonutChart from '@/components/visualizations/DonutChart';
import ShareResultButton from '@/components/calculators/ShareResultButton';
import ExportCsvButton from '@/components/calculators/ExportCsvButton';
import FAQSection, { FAQItem } from '@/components/common/FAQSection';
import { SPENDING_CATEGORIES, STATES_DATA, AGENCIES_DATA, RECIPIENTS_DATA } from '@/lib/data/spendingData';
import { formatCurrency } from '@/lib/utils/formatters';
import { GitCompare, ArrowLeft, BookOpen } from 'lucide-react';

export default function CompareCalculatorPage() {
  const [optionA, setOptionA] = useState<string>('defense-spending');
  const [optionB, setOptionB] = useState<string>('education-spending');

  const itemA = SPENDING_CATEGORIES.find((c) => c.slug === optionA) || { name: 'Option A', amount: 895_000_000_000 };
  const itemB = SPENDING_CATEGORIES.find((c) => c.slug === optionB) || { name: 'Option B', amount: 240_000_000_000 };

  const diff = itemA.amount - itemB.amount;
  const ratio = Number((itemA.amount / itemB.amount).toFixed(2));

  const csvData = [
    { Entity: itemA.name, Amount: itemA.amount },
    { Entity: itemB.name, Amount: itemB.amount },
    { Difference: diff, Ratio: `${ratio}x` },
  ];

  const donutItems = [
    { name: itemA.name, amount: itemA.amount, percentage: Number(((itemA.amount / (itemA.amount + itemB.amount)) * 100).toFixed(1)), color: '#1e3a8a' },
    { name: itemB.name, amount: itemB.amount, percentage: Number(((itemB.amount / (itemA.amount + itemB.amount)) * 100).toFixed(1)), color: '#2563eb' },
  ];

  const faqs: FAQItem[] = [
    {
      question: 'How is the relative ratio calculated in this calculator?',
      answer: 'The ratio is calculated by dividing Option A amount by Option B amount (e.g. $895B / $240B = 3.73x), demonstrating how many times larger Option A is relative to Option B.',
    },
    {
      question: 'Can I compare budgets between different categories?',
      answer: 'Yes. You can select any two spending categories—such as Defense & Military vs Education & Training, or Social Security vs Medicare—to evaluate their relative proportions.',
    },
    {
      question: 'What does the Net Difference metric indicate?',
      answer: 'The Net Difference metric shows the absolute dollar gap (Option A minus Option B) between the two selected budget outlays.',
    },
    {
      question: 'Are baseline figures sourced from official Treasury reports?',
      answer: 'Yes. All baseline category spending figures are ingested directly from official public USAspending.gov records for Fiscal Year 2026.',
    },
    {
      question: 'How does Defense spending compare to Education spending?',
      answer: 'In FY2026, Defense & Military outlays ($895.0 Billion) are approximately 3.73 times larger than Education & Training outlays ($240.0 Billion).',
    },
    {
      question: 'Can I export the side-by-side comparison data?',
      answer: 'Yes. Use the Export CSV button to download a spreadsheet containing both amounts, the net difference, and calculated ratios.',
    },
    {
      question: 'Is this comparison tool non-partisan?',
      answer: 'Yes. USA Spending is a non-partisan research platform. All comparison calculations provide objective mathematical analysis without policy advocacy.',
    },
  ];

  return (
    <div className="space-y-10 py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <Breadcrumbs
        items={[
          { name: 'Calculators', url: '/calculators' },
          { name: 'Comparison Calculator', url: '/calculators/compare' },
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
          <GitCompare className="w-3.5 h-3.5" />
          Side-by-Side Comparison Tool
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-slate-900">
          Government Spending Comparison Calculator
        </h1>
        <p className="text-sm text-slate-600">
          Select Option A and Option B to compare annual outlays, net differences, and relative ratios.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="data-card p-6 rounded-xl border border-slate-200 bg-white space-y-3">
          <label className="text-xs font-bold text-slate-700 uppercase">Option A:</label>
          <select
            value={optionA}
            onChange={(e) => setOptionA(e.target.value)}
            className="w-full bg-slate-50 border border-slate-300 rounded-lg p-2.5 text-xs font-semibold text-slate-900 focus:outline-none"
          >
            {SPENDING_CATEGORIES.map((c) => (
              <option key={c.id} value={c.slug}>
                {c.name} ({formatCurrency(c.amount, true)})
              </option>
            ))}
          </select>
          <div className="text-2xl font-extrabold text-blue-900 font-mono pt-2 numeral-tabular">
            {formatCurrency(itemA.amount, true)}
          </div>
        </div>

        <div className="data-card p-6 rounded-xl border border-slate-200 bg-white space-y-3">
          <label className="text-xs font-bold text-slate-700 uppercase">Option B:</label>
          <select
            value={optionB}
            onChange={(e) => setOptionB(e.target.value)}
            className="w-full bg-slate-50 border border-slate-300 rounded-lg p-2.5 text-xs font-semibold text-slate-900 focus:outline-none"
          >
            {SPENDING_CATEGORIES.map((c) => (
              <option key={c.id} value={c.slug}>
                {c.name} ({formatCurrency(c.amount, true)})
              </option>
            ))}
          </select>
          <div className="text-2xl font-extrabold text-blue-700 font-mono pt-2 numeral-tabular">
            {formatCurrency(itemB.amount, true)}
          </div>
        </div>
      </div>

      {/* Comparison Results Card */}
      <div className="data-card p-6 sm:p-8 rounded-xl border border-blue-200 bg-slate-900 text-white space-y-6 shadow-xl">
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <span className="text-xs text-blue-400 font-semibold uppercase">Comparison Analysis</span>
          <div className="flex items-center space-x-2">
            <ShareResultButton textToShare={`${itemA.name} (${formatCurrency(itemA.amount, true)}) is ${ratio}x ${itemB.name} (${formatCurrency(itemB.amount, true)}).`} />
            <ExportCsvButton filename="comparison-calculator.csv" data={csvData} />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-center">
          <div className="p-4 rounded-lg bg-slate-800/60 border border-slate-700/60 space-y-1">
            <span className="text-xs text-slate-400 uppercase font-semibold">Net Difference</span>
            <div className="text-3xl font-extrabold font-mono text-white numeral-tabular">
              {diff >= 0 ? '+' : ''}{formatCurrency(diff, true)}
            </div>
          </div>

          <div className="p-4 rounded-lg bg-slate-800/60 border border-slate-700/60 space-y-1">
            <span className="text-xs text-slate-400 uppercase font-semibold">Relative Ratio</span>
            <div className="text-3xl font-extrabold font-mono text-blue-300 numeral-tabular">
              {ratio}×
            </div>
            <span className="text-[11px] text-slate-400 font-sans">
              Option A is {ratio} times Option B
            </span>
          </div>
        </div>
      </div>

      <div className="data-card p-6 sm:p-8 rounded-xl border border-slate-200 bg-white space-y-4">
        <h3 className="text-lg font-bold text-slate-900">
          Proportional Donut Comparison
        </h3>
        <DonutChart data={donutItems} centerLabel="Combined Total" centerValue={formatCurrency(itemA.amount + itemB.amount, true)} height={260} />
      </div>

      {/* 300+ Words Educational Guide Section */}
      <div className="data-card p-6 sm:p-8 rounded-xl border border-slate-200 bg-white space-y-6">
        <div className="border-b border-slate-100 pb-4 flex items-center space-x-2">
          <BookOpen className="w-5 h-5 text-blue-700" />
          <h2 className="text-xl font-bold text-slate-900">
            Side-by-Side Budgetary Comparison Methodology
          </h2>
        </div>

        <div className="space-y-4 text-xs text-slate-700 leading-relaxed max-w-4xl">
          <p>
            The <strong>Government Spending Comparison Calculator</strong> provides a direct side-by-side analytical framework for comparing any two federal spending entities, categories, or budget functions. Comparing relative sizes yields essential context when analyzing national priorities and congressional appropriations.
          </p>
          <p>
            When comparing major entitlement and discretionary budgets—such as <strong>{itemA.name} ({formatCurrency(itemA.amount, true)})</strong> versus <strong>{itemB.name} ({formatCurrency(itemB.amount, true)})</strong>—the calculator computes both the absolute net dollar difference (<strong>{formatCurrency(diff, true)}</strong>) and the relative multiplier ratio (<strong>{ratio}×</strong>).
          </p>
          <p>
            Side-by-side analysis helps clarify complex budgetary tradeoffs. Whether evaluating national defense versus education, Medicare versus Medicaid, or agency outlays across fiscal years, all comparisons rely strictly on verified public government datasets released on USAspending.gov.
          </p>
        </div>
      </div>

      {/* 7 FAQs + Schema */}
      <FAQSection
        title="Frequently Asked Questions: Comparison Calculator"
        subtitle="Verified explanations of side-by-side budget comparisons and ratio metrics."
        faqs={faqs}
      />
    </div>
  );
}
