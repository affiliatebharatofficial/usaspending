'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Breadcrumbs from '@/components/navigation/Breadcrumbs';
import DonutChart from '@/components/visualizations/DonutChart';
import MetricCard from '@/components/visualizations/MetricCard';
import ShareResultButton from '@/components/calculators/ShareResultButton';
import CalculatorFAQ from '@/components/calculators/CalculatorFAQ';
import { SPENDING_CATEGORIES, TOTAL_FEDERAL_SPENDING_FY2026 } from '@/lib/data/spendingData';
import { formatCurrency } from '@/lib/utils/formatters';
import { Percent, ArrowLeft } from 'lucide-react';

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

  const faqs = [
    {
      question: 'Is my entered amount part of actual government spending?',
      answer: 'No. This is an illustrative mathematical proportion calculated against reported official spending totals.',
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

      <CalculatorFAQ faqs={faqs} />
    </div>
  );
}
