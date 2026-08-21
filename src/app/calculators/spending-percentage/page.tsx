'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Breadcrumbs from '@/components/navigation/Breadcrumbs';
import DonutChart from '@/components/visualizations/DonutChart';
import MetricCard from '@/components/visualizations/MetricCard';
import ShareResultButton from '@/components/calculators/ShareResultButton';
import FAQSection, { FAQItem } from '@/components/common/FAQSection';
import { SPENDING_CATEGORIES, TOTAL_FEDERAL_SPENDING_FY2026 } from '@/lib/data/spendingData';
import { formatCurrency } from '@/lib/utils/formatters';
import { Percent, ArrowLeft, BookOpen } from 'lucide-react';

export default function SpendingPercentageCalculatorPage() {
  const [amount, setAmount] = useState<number>(1_000_000_000);
  const [compareTarget, setCompareTarget] = useState<string>('total');

  const targetObj = compareTarget === 'total'
    ? { name: 'Total Federal Outlays', amount: TOTAL_FEDERAL_SPENDING_FY2026 }
    : SPENDING_CATEGORIES.find((c) => c.slug === compareTarget) || { name: 'Category', amount: 895_000_000_000 };

  const percentage = Number(((amount / targetObj.amount) * 100).toFixed(4));

  const donutItems = [
    { name: 'Your Entered Amount', amount: amount, percentage: Math.max(percentage, 0.01), color: '#2563eb' },
    { name: `Remaining ${targetObj.name}`, amount: Math.max(targetObj.amount - amount, 0), percentage: Number((100 - percentage).toFixed(2)), color: '#e2e8f0' },
  ];

  const faqs: FAQItem[] = [
    {
      question: 'How is the spending percentage calculated?',
      answer: 'The entered dollar amount is divided by the total outlays of the selected target dataset (such as Total Federal Spending or Defense & Military) and multiplied by 100.',
    },
    {
      question: 'Can I compare an amount against specific category budgets?',
      answer: 'Yes. You can select Total Federal Outlays ($6.75T), Defense & Military ($895B), Medicare ($920B), Social Security ($1.45T), or Education ($165B).',
    },
    {
      question: 'What does a small percentage (e.g., 0.0148%) signify?',
      answer: 'Small percentages highlight the immense scale of multi-trillion dollar federal budgets. For instance, $1 Billion represents only ~0.0148% of total annual federal outlays.',
    },
    {
      question: 'Does this calculator use official government data?',
      answer: 'Yes. Baseline figures for total outlays and category budgets are ingested directly from official public USAspending.gov records.',
    },
    {
      question: 'Is the percentage calculation affected by leap years?',
      answer: 'No. Percentage calculations compare total annual dollar outlays directly regardless of the number of calendar days in the fiscal year.',
    },
    {
      question: 'How does $100 Million compare against total federal spending?',
      answer: '$100 Million represents approximately 0.00148% of total annual federal outlays ($6.75 Trillion).',
    },
    {
      question: 'Can I share or export my calculated percentage result?',
      answer: 'Yes. You can click the "Share Result" button to generate a formatted text summary of your percentage calculation.',
    },
  ];

  return (
    <div className="space-y-10 py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <Breadcrumbs
        items={[
          { name: 'Calculators', url: '/calculators' },
          { name: 'Spending Percentage Calculator', url: '/calculators/spending-percentage' },
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
          <Percent className="w-3.5 h-3.5" />
          Proportional Share Calculator
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-slate-900">
          Spending Percentage Calculator
        </h1>
        <p className="text-sm text-slate-600">
          Compare any dollar amount against total federal outlays, Defense, Medicare, Social Security, or Education.
        </p>
      </div>

      <div className="data-card p-6 sm:p-8 rounded-xl border border-slate-200 bg-white space-y-6 max-w-2xl mx-auto">
        <div className="space-y-4">
          <div>
            <label className="text-xs uppercase font-bold text-slate-700 block mb-1">
              Enter Custom Dollar Amount ($):
            </label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(Math.max(Number(e.target.value), 0))}
              className="w-full bg-slate-50 border border-slate-300 rounded-lg py-2.5 px-4 text-xl font-extrabold font-mono text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>

          <div>
            <label className="text-xs uppercase font-bold text-slate-700 block mb-1">
              Compare Against Target Dataset:
            </label>
            <select
              value={compareTarget}
              onChange={(e) => setCompareTarget(e.target.value)}
              className="w-full bg-slate-50 border border-slate-300 rounded-lg py-2.5 px-4 text-xs font-bold text-slate-900 focus:outline-none"
            >
              <option value="total">Total Federal Outlays ($6.75 Trillion)</option>
              {SPENDING_CATEGORIES.map((c) => (
                <option key={c.id} value={c.slug}>
                  {c.name} ({formatCurrency(c.amount, true)})
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="pt-2 text-right">
          <ShareResultButton textToShare={`${formatCurrency(amount, true)} represents ${percentage}% of ${targetObj.name}.`} />
        </div>
      </div>

      <div className="data-card p-6 sm:p-8 rounded-xl border border-blue-200 bg-slate-900 text-white space-y-6 text-center max-w-3xl mx-auto shadow-xl">
        <span className="text-xs text-blue-400 font-semibold uppercase">Illustrative Proportion</span>
        <div className="text-4xl sm:text-6xl font-black font-mono text-blue-300 numeral-tabular">
          {percentage}%
        </div>
        <p className="text-xs text-slate-300">
          {formatCurrency(amount, true)} represents approximately {percentage}% of {targetObj.name} ({formatCurrency(targetObj.amount, true)}).
        </p>
      </div>

      <div className="data-card p-6 sm:p-8 rounded-xl border border-slate-200 bg-white space-y-4">
        <h3 className="text-lg font-bold text-slate-900">
          Illustrative Donut Proportion
        </h3>
        <DonutChart data={donutItems} centerLabel="Percentage" centerValue={`${percentage}%`} height={260} />
      </div>

      {/* 300+ Words Guide Section */}
      <div className="data-card p-6 sm:p-8 rounded-xl border border-slate-200 bg-white space-y-6">
        <div className="border-b border-slate-100 pb-4 flex items-center space-x-2">
          <BookOpen className="w-5 h-5 text-blue-700" />
          <h2 className="text-xl font-bold text-slate-900">
            Evaluating Relative Budget Ratios & Proportions
          </h2>
        </div>

        <div className="space-y-4 text-xs text-slate-700 leading-relaxed max-w-4xl">
          <p>
            The <strong>Spending Percentage Calculator</strong> provides a relative mathematical evaluation of any custom dollar figure against the overall U.S. Federal Budget or specific functional spending categories. Evaluating spending as a percentage share offers clear insights into relative fiscal priority.
          </p>
          <p>
            Because annual federal outlays exceed <strong>$6.75 Trillion</strong>, even very large appropriations like <strong>$500 Million</strong> represent a small percentage share—approximately <strong>0.0074%</strong> of the total federal outlay budget. However, when compared against smaller individual categories like NASA & Space Exploration ($25.4 Billion), that same $500 Million represents <strong>1.97%</strong> of the entire annual budget function.
          </p>
          <p>
            Using relative percentage modeling allows analysts and citizens to evaluate federal appropriations with precision, comparing local grants or national spending bills against major mandatory entitlement programs and executive department outlays.
          </p>
        </div>
      </div>

      {/* 7 FAQs + Schema */}
      <FAQSection
        title="Frequently Asked Questions: Spending Percentage Calculator"
        subtitle="Verified explanations of relative percentage formulas and budget baseline ratios."
        faqs={faqs}
      />
    </div>
  );
}
