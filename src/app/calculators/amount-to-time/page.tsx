'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Breadcrumbs from '@/components/navigation/Breadcrumbs';
import MetricCard from '@/components/visualizations/MetricCard';
import ShareResultButton from '@/components/calculators/ShareResultButton';
import CalculatorFAQ from '@/components/calculators/CalculatorFAQ';
import { TOTAL_FEDERAL_SPENDING_FY2026, SPENDING_CATEGORIES } from '@/lib/data/spendingData';
import { formatCurrency, calculateSpendingRates } from '@/lib/utils/formatters';
import { Clock, ArrowLeft } from 'lucide-react';

export default function AmountToTimeCalculatorPage() {
  const [amount, setAmount] = useState<number>(1_000_000_000);
  const [selectedProfile, setSelectedProfile] = useState<string>('total');

  const profileObj = selectedProfile === 'total'
    ? { name: 'Total Federal Outlays', amount: TOTAL_FEDERAL_SPENDING_FY2026 }
    : SPENDING_CATEGORIES.find((c) => c.slug === selectedProfile) || { name: 'Category', amount: 895_000_000_000 };

  const rates = calculateSpendingRates(profileObj.amount);

  const secondsEquiv = amount / rates.perSecond;
  const minutesEquiv = secondsEquiv / 60;
  const hoursEquiv = minutesEquiv / 60;
  const daysEquiv = hoursEquiv / 24;

  const faqs = [
    {
      question: 'How is time equivalency calculated?',
      answer: 'The entered dollar amount is divided by the calculated per-second outlay rate of the selected budget category.',
    },
  ];

  return (
    <div className="space-y-10 py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <Breadcrumbs
        items={[
          { name: 'Calculators', url: '/calculators' },
          { name: 'Amount-to-Time Calculator', url: '/calculators/amount-to-time' },
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
          <Clock className="w-3.5 h-3.5" />
          Time Equivalency Converter
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-slate-900">
          Amount-to-Time Calculator
        </h1>
        <p className="text-sm text-slate-600">
          Convert any dollar amount into how many days, hours, minutes, or seconds of federal spending it represents.
        </p>
      </div>

      <div className="data-card p-6 sm:p-8 rounded-xl border border-slate-200 bg-white space-y-4 max-w-2xl mx-auto">
        <div>
          <label className="text-xs uppercase font-bold text-slate-700 block mb-1">
            Enter Dollar Amount ($):
          </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(Math.max(Number(e.target.value), 0))}
            className="w-full bg-slate-50 border border-slate-300 rounded-lg py-2.5 px-4 text-xl font-extrabold font-mono text-slate-900 focus:outline-none"
          />
        </div>

        <div>
          <label className="text-xs uppercase font-bold text-slate-700 block mb-1">
            Select Spending Baseline Profile:
          </label>
          <select
            value={selectedProfile}
            onChange={(e) => setSelectedProfile(e.target.value)}
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

        <div className="pt-2 text-right">
          <ShareResultButton textToShare={`${formatCurrency(amount, true)} represents approximately ${hoursEquiv.toFixed(1)} hours of ${profileObj.name} outlays.`} />
        </div>
      </div>

      <div className="data-card p-6 sm:p-8 rounded-xl border border-blue-200 bg-slate-900 text-white space-y-6 shadow-xl text-center max-w-3xl mx-auto">
        <span className="text-xs text-blue-400 font-semibold uppercase">Estimated Time Equivalent</span>
        <div className="text-3xl sm:text-5xl font-black font-mono text-white numeral-tabular">
          {hoursEquiv >= 24 ? `${daysEquiv.toFixed(2)} Days` : `${hoursEquiv.toFixed(1)} Hours`}
        </div>
        <p className="text-xs text-slate-300">
          This amount represents approximately {daysEquiv.toFixed(2)} days ({Math.round(secondsEquiv).toLocaleString()} seconds) of {profileObj.name} outlays.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <MetricCard label="Days Equivalent" value={`${daysEquiv.toFixed(2)} days`} subtext="Days of spending" highlight />
        <MetricCard label="Hours Equivalent" value={`${hoursEquiv.toFixed(1)} hrs`} subtext="Hours of spending" />
        <MetricCard label="Minutes Equivalent" value={`${minutesEquiv.toFixed(1)} mins`} subtext="Minutes of spending" />
        <MetricCard label="Seconds Equivalent" value={`${Math.round(secondsEquiv).toLocaleString()} sec`} subtext="Seconds of spending" />
      </div>

      <CalculatorFAQ faqs={faqs} />
    </div>
  );
}
