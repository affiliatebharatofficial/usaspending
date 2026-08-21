'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Breadcrumbs from '@/components/navigation/Breadcrumbs';
import MetricCard from '@/components/visualizations/MetricCard';
import ShareResultButton from '@/components/calculators/ShareResultButton';
import ExportCsvButton from '@/components/calculators/ExportCsvButton';
import FAQSection, { FAQItem } from '@/components/common/FAQSection';
import { STATES_DATA, CURRENT_FISCAL_YEAR } from '@/lib/data/spendingData';
import { formatCurrency } from '@/lib/utils/formatters';
import { MapPin, ArrowLeft, AlertCircle, BookOpen } from 'lucide-react';

export default function PerCapitaCalculatorPage() {
  const [selectedStateSlug, setSelectedStateSlug] = useState<string>('california');
  const selectedState = STATES_DATA.find((s) => s.slug === selectedStateSlug) || STATES_DATA[0];

  const csvData = [
    { State: selectedState.name, Population: selectedState.population, TotalSpending: selectedState.totalSpending, PerCapita: selectedState.perCapita },
  ];

  const faqs: FAQItem[] = [
    {
      question: 'What does the per-capita federal spending metric represent?',
      answer: 'It represents total federal prime contract awards, grants, and direct benefit outlays allocated to perform work or serve beneficiaries in the state divided by its Census population baseline.',
    },
    {
      question: 'Is per-capita spending the same as individual tax payments or taxpayer burden?',
      answer: 'No. Per-capita spending is NOT taxpayer contribution, tax burden, or direct cash sent to individual citizens. It is a mathematical quotient dividing federal allocations by resident population.',
    },
    {
      question: 'Why do small states or D.C. often have high per-capita figures?',
      answer: 'Per-capita figures in small states or Washington D.C. are elevated by major federal installations, military bases, or national headquarters located within geographic boundaries.',
    },
    {
      question: 'Where do population baselines come from?',
      answer: 'Population figures are based on official U.S. Census Bureau state resident population estimates.',
    },
    {
      question: 'Where does federal state spending data come from?',
      answer: 'Data is ingested from official USAspending.gov records based on registered primary place of performance or recipient addresses.',
    },
    {
      question: 'Can I compare per-capita figures across states?',
      answer: 'Yes. You can select any state or territory from the dropdown menu to view state population, total federal spending, and per-resident averages.',
    },
    {
      question: 'Can I export the state per-capita data as a CSV file?',
      answer: 'Yes. Use the Export CSV button to download state population, total spending, and per-capita metrics.',
    },
  ];

  return (
    <div className="space-y-10 py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <Breadcrumbs
        items={[
          { name: 'Calculators', url: '/calculators' },
          { name: 'Per Capita Calculator', url: '/calculators/per-capita' },
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
          <MapPin className="w-3.5 h-3.5" />
          Geographic Per-Capita Calculator
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-slate-900">
          Per Capita Federal Spending Calculator
        </h1>
        <p className="text-sm text-slate-600">
          Calculate federal outlays associated with states divided by population baselines.
        </p>
      </div>

      <div className="data-card p-6 rounded-xl border border-slate-200 bg-white max-w-xl mx-auto space-y-4">
        <label className="text-xs font-bold text-slate-700 uppercase block">
          Select U.S. State or Territory:
        </label>
        <select
          value={selectedStateSlug}
          onChange={(e) => setSelectedStateSlug(e.target.value)}
          className="w-full bg-slate-50 border border-slate-300 rounded-lg p-2.5 text-sm font-bold text-slate-900 focus:outline-none"
        >
          {STATES_DATA.map((s) => (
            <option key={s.id} value={s.slug}>
              {s.name} ({s.code})
            </option>
          ))}
        </select>
        <div className="pt-2 text-right">
          <ShareResultButton textToShare={`Federal spending associated with ${selectedState.name} is $${selectedState.perCapita.toLocaleString()} per person.`} />
        </div>
      </div>

      {/* Metric Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <MetricCard label="State Population" value={selectedState.population.toLocaleString()} subtext="Census baseline" />
        <MetricCard label="Total Federal Outlays" value={formatCurrency(selectedState.totalSpending, true)} subtext="Associated outlays" highlight />
        <MetricCard label="Per Capita Figure" value={`$${selectedState.perCapita.toLocaleString()}`} subtext="Per state resident" />
      </div>

      {/* Mandatory Disclaimer Box */}
      <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-xs flex items-start space-x-3 max-w-3xl mx-auto">
        <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
        <div className="space-y-1">
          <span className="font-bold block">Important Methodological Definition:</span>
          <p className="leading-relaxed">
            This metric represents <strong>federal spending associated with the state divided by population</strong>. It is NOT taxpayer contribution, tax burden, money received by every resident, or personal individual benefit.
          </p>
        </div>
      </div>

      {/* 300+ Words Guide Section */}
      <div className="data-card p-6 sm:p-8 rounded-xl border border-slate-200 bg-white space-y-6">
        <div className="border-b border-slate-100 pb-4 flex items-center space-x-2">
          <BookOpen className="w-5 h-5 text-blue-700" />
          <h2 className="text-xl font-bold text-slate-900">
            Per-Capita Federal Allocation Mechanics
          </h2>
        </div>

        <div className="space-y-4 text-xs text-slate-700 leading-relaxed max-w-4xl">
          <p>
            The <strong>Per Capita Federal Spending Calculator</strong> evaluates how total federal prime contract awards, grants, and direct financial assistance allocated to perform work in a specific U.S. state scale relative to its population size.
          </p>
          <p>
            For example, in <strong>{selectedState.name}</strong>, total associated federal spending of <strong>{formatCurrency(selectedState.totalSpending, true)}</strong> divided by its population of <strong>{selectedState.population.toLocaleString()}</strong> yields a per-capita allocation figure of <strong>${selectedState.perCapita.toLocaleString()} per resident</strong>.
          </p>
          <p>
            Per-capita spending provides valuable comparative insight across states of varying sizes. However, it is essential to remember that high per-capita spending in certain states (such as Virginia or Maryland) is driven by major federal headquarters, national defense installations, and research facilities located within those geographic boundaries.
          </p>
        </div>
      </div>

      {/* 7 FAQs + Schema */}
      <FAQSection
        title="Frequently Asked Questions: Per-Capita Calculator"
        subtitle="Verified explanations of state population baselines and per-capita spending formulas."
        faqs={faqs}
      />
    </div>
  );
}
