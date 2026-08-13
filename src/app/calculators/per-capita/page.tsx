'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Breadcrumbs from '@/components/navigation/Breadcrumbs';
import MetricCard from '@/components/visualizations/MetricCard';
import ShareResultButton from '@/components/calculators/ShareResultButton';
import ExportCsvButton from '@/components/calculators/ExportCsvButton';
import CalculatorFAQ from '@/components/calculators/CalculatorFAQ';
import { STATES_DATA, CURRENT_FISCAL_YEAR } from '@/lib/data/spendingData';
import { formatCurrency } from '@/lib/utils/formatters';
import { MapPin, ArrowLeft, AlertCircle } from 'lucide-react';

export default function PerCapitaCalculatorPage() {
  const [selectedStateSlug, setSelectedStateSlug] = useState<string>('california');
  const selectedState = STATES_DATA.find((s) => s.slug === selectedStateSlug) || STATES_DATA[0];

  const csvData = [
    { State: selectedState.name, Population: selectedState.population, TotalSpending: selectedState.totalSpending, PerCapita: selectedState.perCapita },
  ];

  const faqs = [
    {
      question: 'What does the per-capita spending figure represent?',
      answer: 'It represents total federal prime contract awards, grants, and direct payments associated with the state divided by the state population baseline. It is NOT taxpayer tax burden or direct cash received by individual residents.',
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

      <CalculatorFAQ faqs={faqs} />
    </div>
  );
}
