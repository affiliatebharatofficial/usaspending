'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Breadcrumbs from '@/components/navigation/Breadcrumbs';
import MetricCard from '@/components/visualizations/MetricCard';
import AmountMeaning from '@/components/calculators/AmountMeaning';
import ShareResultButton from '@/components/calculators/ShareResultButton';
import ExportCsvButton from '@/components/calculators/ExportCsvButton';
import CalculatorFAQ from '@/components/calculators/CalculatorFAQ';
import FiscalYearSelector from '@/components/visualizations/FiscalYearSelector';
import { calculateSpendingRates, formatCurrency } from '@/lib/utils/formatters';
import { Clock, ArrowLeft, RefreshCw } from 'lucide-react';

export default function SpendingRateCalculatorPage() {
  const [amount, setAmount] = useState<number>(1_000_000_000);
  const [fiscalYear, setFiscalYear] = useState<number>(2026);

  const rates = calculateSpendingRates(amount);

  const csvData = [
    { Timeframe: 'Annual Total', Rate: rates.annual },
    { Timeframe: 'Per Day', Rate: rates.perDay },
    { Timeframe: 'Per Hour', Rate: rates.perHour },
    { Timeframe: 'Per Minute', Rate: rates.perMinute },
    { Timeframe: 'Per Second', Rate: rates.perSecond },
  ];

  const faqs = [
    {
      question: 'How is the spending rate per second calculated?',
      answer: 'The annual dollar amount is divided by the exact number of days in the selected fiscal year (365 for standard years, 366 for leap years like FY2024), then divided by 24 hours, 60 minutes, and 60 seconds.',
    },
    {
      question: 'Is this live government spending?',
      answer: 'No. It is an estimated rate derived from reported government spending data on USAspending.gov. It does not represent a live transaction feed.',
    },
  ];

  return (
    <div className="space-y-10 py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <Breadcrumbs
        items={[
          { name: 'Calculators', url: '/calculators' },
          { name: 'Spending Rate Calculator', url: '/calculators/spending-rate' },
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
          Rate Breakdown Calculator
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-slate-900">
          Spending Rate Calculator
        </h1>
        <p className="text-sm text-slate-600">
          Calculate annual, daily, hourly, minute, and second rates for any budget amount using exact fiscal year durations.
        </p>
      </div>

      {/* Input Form */}
      <div className="data-card p-6 sm:p-8 rounded-xl border border-slate-200 bg-white space-y-6 max-w-2xl mx-auto">
        <div className="flex items-center justify-between">
          <label className="text-xs uppercase font-bold text-slate-700">
            Enter Annual Dollar Amount:
          </label>
          <FiscalYearSelector selectedYear={fiscalYear} onChange={setFiscalYear} />
        </div>

        <div className="relative">
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-2xl font-extrabold text-slate-400 font-mono">
            $
          </span>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(Math.max(Number(e.target.value), 0))}
            className="w-full bg-slate-50 text-slate-900 border-2 border-slate-300 rounded-xl py-3 pl-10 pr-4 text-2xl font-extrabold font-mono focus:outline-none focus:border-blue-600"
          />
        </div>

        <div className="flex items-center justify-between pt-2">
          <button
            onClick={() => setAmount(1_000_000_000)}
            className="text-xs text-slate-500 hover:text-slate-900 flex items-center gap-1"
          >
            <RefreshCw className="w-3 h-3" /> Reset to $1B
          </button>
          <div className="flex items-center space-x-2">
            <ShareResultButton textToShare={`${formatCurrency(amount, true)} represents ${formatCurrency(rates.perSecond)}/sec in FY${fiscalYear}.`} />
            <ExportCsvButton filename="spending-rate-calculator.csv" data={csvData} />
          </div>
        </div>
      </div>

      {/* Result Metrics */}
      <div className="space-y-4">
        <h2 className="text-xl font-extrabold text-slate-900 text-center">
          Calculated Rates for {formatCurrency(amount, true)} (FY{fiscalYear})
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <MetricCard label="Per Day Rate" value={formatCurrency(rates.perDay)} subtext="Daily allocation" highlight />
          <MetricCard label="Per Hour Rate" value={formatCurrency(rates.perHour)} subtext="Hourly allocation" />
          <MetricCard label="Per Minute Rate" value={formatCurrency(rates.perMinute)} subtext="Minute allocation" />
          <MetricCard label="Per Second Rate" value={formatCurrency(rates.perSecond)} subtext="Second allocation" />
        </div>
      </div>

      <AmountMeaning amount={amount} fiscalYear={fiscalYear} />

      <CalculatorFAQ faqs={faqs} />
    </div>
  );
}
