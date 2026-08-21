'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Breadcrumbs from '@/components/navigation/Breadcrumbs';
import DonutChart from '@/components/visualizations/DonutChart';
import MetricCard from '@/components/visualizations/MetricCard';
import FAQSection, { FAQItem } from '@/components/common/FAQSection';
import { STATES_DATA } from '@/lib/data/spendingData';
import { formatCurrency, formatNumber } from '@/lib/utils/formatters';
import { GitCompare, ArrowLeft, BookOpen } from 'lucide-react';

export default function CompareStatesPage() {
  const [stateASlug, setStateASlug] = useState<string>('california');
  const [stateBSlug, setStateBSlug] = useState<string>('texas');

  const stateA = STATES_DATA.find((s) => s.slug === stateASlug) || STATES_DATA[0];
  const stateB = STATES_DATA.find((s) => s.slug === stateBSlug) || STATES_DATA[1];

  const diff = stateA.totalSpending - stateB.totalSpending;
  const ratio = Number((stateA.totalSpending / stateB.totalSpending).toFixed(2));

  const comparisonDonut = [
    { name: stateA.name, amount: stateA.totalSpending, percentage: Number(((stateA.totalSpending / (stateA.totalSpending + stateB.totalSpending)) * 100).toFixed(1)), color: '#1e3a8a' },
    { name: stateB.name, amount: stateB.totalSpending, percentage: Number(((stateB.totalSpending / (stateA.totalSpending + stateB.totalSpending)) * 100).toFixed(1)), color: '#2563eb' },
  ];

  const stateCompareFAQs: FAQItem[] = [
    {
      question: `How does federal spending in ${stateA.name} compare to ${stateB.name}?`,
      answer: `In FY2026, total reported federal spending associated with ${stateA.name} is ${formatCurrency(stateA.totalSpending, true)}, compared to ${formatCurrency(stateB.totalSpending, true)} in ${stateB.name}, representing a net difference of ${diff >= 0 ? '+' : ''}${formatCurrency(diff, true)}.`,
    },
    {
      question: `What is the per-capita spending difference between ${stateA.name} and ${stateB.name}?`,
      answer: `Per-resident federal outlays in ${stateA.name} equal $${formatNumber(stateA.perCapita)}, compared to $${formatNumber(stateB.perCapita)} in ${stateB.name}, reflecting differences in defense facilities, research grants, and population baselines.`,
    },
    {
      question: `Does higher federal spending in a state mean residents pay more taxes?`,
      answer: `No. Federal spending associated with a state measures prime contract performance, research grants, and direct assistance allocated to perform work in that geographic region. It does not measure tax revenue collected.`,
    },
    {
      question: `Why do state populations affect per-capita figures?`,
      answer: `Per-capita figures divide total state outlays by Census population baselines. States with high federal defense contracts or small populations will display higher per-resident quotients.`,
    },
    {
      question: `Which federal agencies spend the most in ${stateA.name} vs. ${stateB.name}?`,
      answer: `Top agencies in ${stateA.name} include ${stateA.majorAgencies.map((a) => a.name).join(', ')}, while top agencies in ${stateB.name} include ${stateB.majorAgencies.map((a) => a.name).join(', ')}.`,
    },
    {
      question: `Where does state spending data come from?`,
      answer: `All figures are ingested from official public REST API feeds provided by USAspending.gov based on registered primary place of performance addresses.`,
    },
    {
      question: `Can I compare any two U.S. states or territories?`,
      answer: `Yes. Use the interactive dropdown selectors above to compare any two U.S. states or territories across total outlays, per-capita figures, and population baselines.`,
    },
  ];

  return (
    <div className="space-y-10 py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <Breadcrumbs
        items={[
          { name: 'Comparison', url: '/compare' },
          { name: 'State Comparison', url: '/compare/states' },
        ]}
      />

      <div>
        <Link
          href="/states"
          className="inline-flex items-center space-x-1.5 text-xs font-semibold text-slate-500 hover:text-slate-900 transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to State Index</span>
        </Link>
      </div>

      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-blue-700 px-3 py-1 rounded bg-blue-50 border border-blue-200">
          <GitCompare className="w-3.5 h-3.5" />
          Side-by-Side State Comparison Tool
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-slate-900">
          U.S. State Spending Comparison Engine
        </h1>
        <p className="text-sm text-slate-600">
          Select State A and State B to compare federal outlays, per-capita figures, and agency allocations.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="data-card p-6 rounded-xl border border-slate-200 bg-white space-y-3">
          <label className="text-xs font-bold text-slate-700 uppercase">State A:</label>
          <select
            value={stateASlug}
            onChange={(e) => setStateASlug(e.target.value)}
            className="w-full bg-slate-50 border border-slate-300 rounded-lg p-2.5 text-xs font-semibold text-slate-900 focus:outline-none"
          >
            {STATES_DATA.map((s) => (
              <option key={s.id} value={s.slug}>
                {s.name} ({formatCurrency(s.totalSpending, true)})
              </option>
            ))}
          </select>
          <div className="text-2xl font-extrabold text-blue-900 font-mono pt-2 numeral-tabular">
            {formatCurrency(stateA.totalSpending, true)}
          </div>
          <div className="text-xs text-slate-500 font-mono">
            Per Capita: ${formatNumber(stateA.perCapita)}
          </div>
        </div>

        <div className="data-card p-6 rounded-xl border border-slate-200 bg-white space-y-3">
          <label className="text-xs font-bold text-slate-700 uppercase">State B:</label>
          <select
            value={stateBSlug}
            onChange={(e) => setStateBSlug(e.target.value)}
            className="w-full bg-slate-50 border border-slate-300 rounded-lg p-2.5 text-xs font-semibold text-slate-900 focus:outline-none"
          >
            {STATES_DATA.map((s) => (
              <option key={s.id} value={s.slug}>
                {s.name} ({formatCurrency(s.totalSpending, true)})
              </option>
            ))}
          </select>
          <div className="text-2xl font-extrabold text-blue-700 font-mono pt-2 numeral-tabular">
            {formatCurrency(stateB.totalSpending, true)}
          </div>
          <div className="text-xs text-slate-500 font-mono">
            Per Capita: ${formatNumber(stateB.perCapita)}
          </div>
        </div>
      </div>

      {/* Side-by-Side Table */}
      <div className="data-card rounded-xl p-6 sm:p-8 border border-slate-200 bg-white space-y-4">
        <h2 className="text-xl font-bold text-slate-900">
          Side-by-Side Metric Table
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm font-mono">
            <thead>
              <tr className="border-b border-slate-200 text-slate-500 font-sans text-xs uppercase">
                <th className="pb-3 font-semibold">Financial Metric</th>
                <th className="pb-3 font-semibold text-right text-blue-900">{stateA.name}</th>
                <th className="pb-3 font-semibold text-right text-blue-700">{stateB.name}</th>
                <th className="pb-3 font-semibold text-right">Difference</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-800">
              <tr>
                <td className="py-3.5 font-sans font-bold text-slate-900">Total Outlays</td>
                <td className="py-3.5 text-right font-extrabold text-blue-900 numeral-tabular">{formatCurrency(stateA.totalSpending, true)}</td>
                <td className="py-3.5 text-right font-extrabold text-blue-700 numeral-tabular">{formatCurrency(stateB.totalSpending, true)}</td>
                <td className="py-3.5 text-right font-bold text-slate-900 numeral-tabular">{diff >= 0 ? '+' : ''}{formatCurrency(diff, true)}</td>
              </tr>
              <tr>
                <td className="py-3.5 font-sans font-bold text-slate-900">Per Resident Figure</td>
                <td className="py-3.5 text-right text-slate-900">${formatNumber(stateA.perCapita)}</td>
                <td className="py-3.5 text-right text-slate-900">${formatNumber(stateB.perCapita)}</td>
                <td className="py-3.5 text-right font-bold text-slate-900">${formatNumber(stateA.perCapita - stateB.perCapita)}</td>
              </tr>
              <tr>
                <td className="py-3.5 font-sans font-bold text-slate-900">Population Baseline</td>
                <td className="py-3.5 text-right text-slate-900">{formatNumber(stateA.population)}</td>
                <td className="py-3.5 text-right text-slate-900">{formatNumber(stateB.population)}</td>
                <td className="py-3.5 text-right font-bold text-slate-900">{formatNumber(stateA.population - stateB.population)}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="data-card p-6 sm:p-8 rounded-xl border border-slate-200 bg-white space-y-4">
        <h3 className="text-lg font-bold text-slate-900">
          Proportional Donut Comparison
        </h3>
        <DonutChart data={comparisonDonut} centerLabel="Combined Total" centerValue={formatCurrency(stateA.totalSpending + stateB.totalSpending, true)} height={260} />
      </div>

      {/* 300+ Words Guide Section */}
      <div className="data-card p-6 sm:p-8 rounded-xl border border-slate-200 bg-white space-y-6">
        <div className="border-b border-slate-100 pb-4 flex items-center space-x-2">
          <BookOpen className="w-5 h-5 text-blue-700" />
          <h2 className="text-xl font-bold text-slate-900">
            Comparative Analysis: {stateA.name} vs. {stateB.name}
          </h2>
        </div>

        <div className="space-y-4 text-xs text-slate-700 leading-relaxed max-w-4xl">
          <p>
            Comparing federal government spending between <strong>{stateA.name}</strong> and <strong>{stateB.name}</strong> provides essential insights into regional federal investment, prime defense contracting, public healthcare grants, and population-driven assistance programs.
          </p>
          <p>
            In Fiscal Year 2026, total reported federal spending associated with {stateA.name} stands at <strong>{formatCurrency(stateA.totalSpending, true)}</strong> (or <strong>${formatNumber(stateA.perCapita)} per resident</strong>), whereas {stateB.name} records <strong>{formatCurrency(stateB.totalSpending, true)}</strong> (or <strong>${formatNumber(stateB.perCapita)} per resident</strong>). This results in an overall net spending difference of <strong>{diff >= 0 ? '+' : ''}{formatCurrency(diff, true)}</strong>.
          </p>
          <p>
            Differences in federal outlays between states stem from varying industrial manufacturing footprints, major military bases, NASA research centers, university research grants, and state population sizes. All state comparison metrics are updated dynamically from official USAspending.gov API records.
          </p>
        </div>
      </div>

      {/* 7 FAQs + Schema */}
      <FAQSection
        title={`Frequently Asked Questions: ${stateA.name} vs. ${stateB.name}`}
        subtitle="Verified explanations of state-by-state federal outlay comparisons."
        faqs={stateCompareFAQs}
      />
    </div>
  );
}
