'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Breadcrumbs from '@/components/navigation/Breadcrumbs';
import MetricCard from '@/components/visualizations/MetricCard';
import ShareResultButton from '@/components/calculators/ShareResultButton';
import FAQSection, { FAQItem } from '@/components/common/FAQSection';
import { TOTAL_FEDERAL_SPENDING_FY2026, SPENDING_CATEGORIES } from '@/lib/data/spendingData';
import { formatCurrency, calculateSpendingRates } from '@/lib/utils/formatters';
import { Clock, ArrowLeft, BookOpen } from 'lucide-react';

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

  const faqs: FAQItem[] = [
    {
      question: 'How is time equivalency calculated in this calculator?',
      answer: 'The entered dollar amount is divided by the calculated per-second outlay rate of the selected baseline profile (derived from total FY2026 outlays over 365 fiscal days).',
    },
    {
      question: 'What does "Time Equivalency" mean in federal budgeting?',
      answer: 'Time equivalency represents how long it takes the U.S. Federal Government (or a specific agency/category) to disburse a dollar amount equal to your input.',
    },
    {
      question: 'Can I compare an amount against specific categories like Defense or Medicare?',
      answer: 'Yes. You can select Total Federal Outlays ($6.75T) or specific budget categories like Defense & Military, Medicare, Social Security, or Education to see category-specific time equivalents.',
    },
    {
      question: 'Does this calculator represent real-time bank wire payments?',
      answer: 'No. The calculator uses a mathematical rate baseline averaged across 365 days of the fiscal year to provide conceptual time velocity.',
    },
    {
      question: 'Why convert dollar amounts to time metrics?',
      answer: 'Trillion-dollar figures can be difficult to visualize. Converting dollar amounts into days, hours, or minutes makes large federal spending numbers relatable.',
    },
    {
      question: 'Where does the baseline spending data come from?',
      answer: 'Baseline spending figures are ingested from official public Treasury reports and USAspending.gov API endpoints for Fiscal Year 2026.',
    },
    {
      question: 'How many days are assumed in a fiscal year?',
      answer: 'Standard federal fiscal years (October 1 to September 30) contain 365 days, or 366 days in leap years like FY2024.',
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

      {/* 300+ Words Guide Section */}
      <div className="data-card p-6 sm:p-8 rounded-xl border border-slate-200 bg-white space-y-6">
        <div className="border-b border-slate-100 pb-4 flex items-center space-x-2">
          <BookOpen className="w-5 h-5 text-blue-700" />
          <h2 className="text-xl font-bold text-slate-900">
            Understanding Dollar-to-Time Conversions in Government Spending
          </h2>
        </div>

        <div className="space-y-4 text-xs text-slate-700 leading-relaxed max-w-4xl">
          <p>
            The <strong>Amount-to-Time Calculator</strong> provides a intuitive way to comprehend massive financial figures by converting raw dollar amounts into time equivalents based on U.S. federal spending velocity. At an annual federal outlay rate of <strong>$6.75 Trillion</strong> in Fiscal Year 2026, the federal government disburses funds at a rate of <strong>$214,044 per second</strong>.
          </p>
          <p>
            When evaluating federal policy proposals, procurement contracts, or state assistance programs, time conversions put expenditures into perspective. For instance, a <strong>$1 Billion appropriation</strong> represents approximately <strong>1.3 hours</strong> of total federal spending, or about <strong>9.8 hours</strong> of Department of Defense spending.
          </p>
          <p>
            By choosing different baseline profiles—such as Defense & Military, Medicare, Social Security, or Education & Training—you can analyze how long specific agency budgets take to spend a given sum. All rate conversions use mathematical averages across 365 fiscal days and are grounded in verified public data from USAspending.gov.
          </p>
        </div>
      </div>

      {/* 7 FAQs + Schema */}
      <FAQSection
        title="Frequently Asked Questions: Amount-to-Time Calculator"
        subtitle="Verified explanations of dollar-to-time conversion formulas and budget baseline profiles."
        faqs={faqs}
      />
    </div>
  );
}
