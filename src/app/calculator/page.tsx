'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Breadcrumbs from '@/components/navigation/Breadcrumbs';
import AmountMeaning from '@/components/calculators/AmountMeaning';
import ShareResultButton from '@/components/calculators/ShareResultButton';
import ExportCsvButton from '@/components/calculators/ExportCsvButton';
import CalculatorFAQ from '@/components/calculators/CalculatorFAQ';
import MetricCard from '@/components/visualizations/MetricCard';
import FiscalYearSelector from '@/components/visualizations/FiscalYearSelector';
import { TOTAL_FEDERAL_SPENDING_FY2026, SPENDING_CATEGORIES } from '@/lib/data/spendingData';
import { formatCurrency, calculateSpendingRates } from '@/lib/utils/formatters';
import { Calculator, ArrowLeft, RefreshCw, Layers } from 'lucide-react';

export default function MainCalculatorPage() {
  const [amount, setAmount] = useState<number>(1_000_000_000);
  const [fiscalYear, setFiscalYear] = useState<number>(2026);

  const rates = calculateSpendingRates(amount);
  const totalBudget = TOTAL_FEDERAL_SPENDING_FY2026;
  const percentageOfBudget = Number(((amount / totalBudget) * 100).toFixed(4));

  const csvData = [
    { Label: 'Entered Amount', Value: formatCurrency(amount, true) },
    { Label: 'Share of Federal Outlays', Value: `${percentageOfBudget}%` },
    { Label: 'Daily Rate Equivalent', Value: formatCurrency(rates.perDay, true) },
    { Label: 'Hourly Rate Equivalent', Value: formatCurrency(rates.perHour, true) },
  ];

  const faqs = [
    {
      question: 'How is the percentage of federal spending calculated?',
      answer: 'The entered dollar amount is divided by total FY2026 federal outlays ($6.75 Trillion) and multiplied by 100.',
    },
    {
      question: 'Is this live government spending?',
      answer: 'No. It is an estimated mathematical rate derived from reported spending data on USAspending.gov.',
    },
  ];

  return (
    <div className="space-y-10 py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <Breadcrumbs items={[{ name: 'Main Calculator', url: '/calculator' }]} />

      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-blue-700 px-3 py-1 rounded bg-blue-50 border border-blue-200">
          <Calculator className="w-3.5 h-3.5" />
          Flagship Budget Calculator
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-slate-900">
          U.S. Government Spending Calculator
        </h1>
        <p className="text-sm text-slate-600">
          Enter any amount to see how big it is compared with total U.S. government outlays, spending categories, and time equivalents.
        </p>
      </div>

      {/* Main Input Card */}
      <div className="data-card p-6 sm:p-8 rounded-xl border border-slate-200 bg-white space-y-6 max-w-3xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <label className="text-xs uppercase font-bold text-slate-700">
            Enter Dollar Amount ($):
          </label>
          <FiscalYearSelector selectedYear={fiscalYear} onChange={setFiscalYear} />
        </div>

        <div className="relative">
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-3xl font-extrabold text-slate-400 font-mono">
            $
          </span>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(Math.max(Number(e.target.value), 0))}
            className="w-full bg-slate-50 text-slate-900 border-2 border-slate-300 rounded-xl py-4 pl-12 pr-4 text-3xl font-extrabold font-mono focus:outline-none focus:border-blue-600"
          />
        </div>

        {/* Preset Buttons */}
        <div className="flex flex-wrap items-center justify-between gap-2 pt-1">
          <div className="flex items-center space-x-2">
            <span className="text-[11px] font-semibold text-slate-500">Presets:</span>
            {[100_000_000, 500_000_000, 1_000_000_000, 10_000_000_000].map((preset) => (
              <button
                key={preset}
                onClick={() => setAmount(preset)}
                className="px-2.5 py-1 rounded bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-mono font-bold transition-colors"
              >
                {formatCurrency(preset, true)}
              </button>
            ))}
          </div>

          <button
            onClick={() => setAmount(1_000_000_000)}
            className="text-xs text-slate-500 hover:text-slate-900 flex items-center gap-1"
          >
            <RefreshCw className="w-3 h-3" /> Reset
          </button>
        </div>

        <div className="flex items-center justify-end space-x-2 pt-2 border-t border-slate-100">
          <ShareResultButton textToShare={`${formatCurrency(amount, true)} is ${percentageOfBudget}% of total federal outlays.`} />
          <ExportCsvButton filename="main-spending-calculator.csv" data={csvData} />
        </div>
      </div>

      {/* Primary Result Banner */}
      <div className="data-card p-6 sm:p-8 rounded-xl border border-blue-200 bg-slate-900 text-white space-y-6 text-center max-w-3xl mx-auto shadow-xl">
        <span className="text-xs text-blue-400 font-semibold uppercase">Percentage of Federal Outlays</span>
        <div className="text-4xl sm:text-6xl font-black font-mono text-blue-300 numeral-tabular">
          {percentageOfBudget}%
        </div>
        <p className="text-xs text-slate-300">
          {formatCurrency(amount, true)} represents approximately {percentageOfBudget}% of total FY{fiscalYear} federal spending ({formatCurrency(totalBudget, true)}).
        </p>
      </div>

      {/* Visual Proportional Scaling Bar */}
      <div className="data-card p-6 sm:p-8 rounded-xl border border-slate-200 bg-white space-y-4 max-w-3xl mx-auto">
        <h3 className="text-base font-bold text-slate-900">
          Visual Proportional Comparison: How Big Is {formatCurrency(amount, true)}?
        </h3>
        <div className="space-y-3 font-mono text-xs">
          <div>
            <div className="flex justify-between text-slate-700 font-bold mb-1">
              <span>Your Entered Amount</span>
              <span>{formatCurrency(amount, true)}</span>
            </div>
            <div className="w-full h-4 bg-slate-100 rounded-full overflow-hidden">
              <div
                className="h-full bg-blue-600 rounded-full transition-all duration-300"
                style={{ width: `${Math.max(Math.min(percentageOfBudget * 5, 100), 1)}%` }}
              ></div>
            </div>
          </div>

          <div>
            <div className="flex justify-between text-slate-700 font-bold mb-1">
              <span>Annual Federal Outlays</span>
              <span>{formatCurrency(totalBudget, true)}</span>
            </div>
            <div className="w-full h-4 bg-blue-900 rounded-full"></div>
          </div>
        </div>
      </div>

      <AmountMeaning amount={amount} fiscalYear={fiscalYear} />

      <CalculatorFAQ faqs={faqs} />
    </div>
  );
}
