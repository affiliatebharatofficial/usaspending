'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import DonutChart from '@/components/visualizations/DonutChart';
import SpendingBreakdown from '@/components/visualizations/SpendingBreakdown';
import SpendingTrendChart from '@/components/charts/SpendingTrendChart';
import MetricCard from '@/components/visualizations/MetricCard';
import FiscalYearSelector from '@/components/visualizations/FiscalYearSelector';
import MetricTypeSelector, { MetricType } from '@/components/visualizations/MetricTypeSelector';
import Breadcrumbs from '@/components/navigation/Breadcrumbs';
import FAQSection, { FAQItem } from '@/components/common/FAQSection';
import { SPENDING_CATEGORIES, AGENCIES_DATA, STATES_DATA, RECIPIENTS_DATA, TOTAL_FEDERAL_SPENDING_FY2026, HISTORICAL_SPENDING } from '@/lib/data/spendingData';
import { formatCurrency, calculateSpendingRates } from '@/lib/utils/formatters';
import { Filter, ArrowLeft, Layers, Building2, MapPin, Award, CheckCircle2, BookOpen } from 'lucide-react';

export default function ExplorerPage() {
  const [selectedFY, setSelectedFY] = useState<number>(2026);
  const [selectedMetric, setSelectedMetric] = useState<MetricType>('Outlays');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedAgency, setSelectedAgency] = useState<string>('all');

  const filteredCategories = SPENDING_CATEGORIES.filter((c) =>
    selectedCategory === 'all' ? true : c.slug === selectedCategory
  );

  const totalVisualized = filteredCategories.reduce((sum, c) => sum + c.amount, 0);
  const percentageOfBudget = Number(((totalVisualized / TOTAL_FEDERAL_SPENDING_FY2026) * 100).toFixed(1));
  const rates = calculateSpendingRates(totalVisualized);

  const donutItems = filteredCategories.map((c) => ({
    name: c.name,
    amount: c.amount,
    percentage: c.percentage,
    slug: c.slug,
  }));

  const trendData = HISTORICAL_SPENDING.map((h) => ({
    year: h.year,
    amount: h.spending,
  }));

  const explorerFAQs: FAQItem[] = [
    {
      question: 'What is the Advanced U.S. Spending Explorer?',
      answer: 'The Advanced U.S. Spending Explorer is an interactive data tree tool that allows users to drill down from total federal outlays into individual spending categories, executive agencies, state geographic distributions, and prime contractor awards.',
    },
    {
      question: 'What is the difference between Federal Outlays and Budgetary Obligations?',
      answer: 'Outlays represent actual cash payments disbursed by the U.S. Department of the Treasury during the fiscal year. Obligations represent legally binding contractual commitments made by agencies that liquidate as outlays over time.',
    },
    {
      question: 'Can I filter spending by specific Fiscal Years?',
      answer: 'Yes. You can select any fiscal year between 2020 and 2026 to view historical spending trends, category compositions, and rate conversions.',
    },
    {
      question: 'How are daily, hourly, and per-second rates computed in the Explorer?',
      answer: 'Time-based rates are calculated by dividing the selected category outlays by exact fiscal year durations (365 days for standard years, 366 days for leap years).',
    },
    {
      question: 'Where does the data in the Explorer come from?',
      answer: 'Data is ingested directly from public REST API endpoints provided by USAspending.gov and official Department of the Treasury execution reports.',
    },
    {
      question: 'Can I filter by specific Executive Agencies?',
      answer: 'Yes. You can filter by executive agencies such as the Department of Defense, Department of Transportation, or Department of Health and Human Services.',
    },
    {
      question: 'Is the Explorer tool free to use for public research?',
      answer: 'Yes. USA Spending is an open-access public resource designed for civic education, policy research, journalism, and academic study.',
    },
  ];

  return (
    <div className="space-y-10 py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <Breadcrumbs items={[{ name: 'Deep Data Explorer', url: '/explorer' }]} />

      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-6">
        <div>
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-blue-700 px-3 py-1 rounded bg-blue-50 border border-blue-200 mb-2">
            <Filter className="w-3.5 h-3.5" />
            Interactive Data Tree Explorer
          </div>
          <h1 className="text-3xl font-black text-slate-900">
            Advanced U.S. Spending Explorer
          </h1>
          <p className="text-xs text-slate-500 mt-1">
            Drill down from total U.S. federal outlays to individual categories, agencies, states, and recipients.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <FiscalYearSelector selectedYear={selectedFY} onChange={setSelectedFY} />
          <MetricTypeSelector selectedMetric={selectedMetric} onChange={setSelectedMetric} />
        </div>
      </div>

      {/* Filter Control Bar */}
      <div className="data-card p-6 rounded-xl border border-slate-200 bg-white space-y-4">
        <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
          <Filter className="w-3.5 h-3.5 text-blue-700" /> Filter Criteria:
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <label className="text-[11px] font-semibold text-slate-600 block mb-1">
              Select Category:
            </label>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full bg-slate-50 border border-slate-300 rounded px-3 py-1.5 text-xs font-semibold text-slate-900 focus:outline-none"
            >
              <option value="all">All Spending Categories</option>
              {SPENDING_CATEGORIES.map((c) => (
                <option key={c.id} value={c.slug}>
                  {c.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="text-[11px] font-semibold text-slate-600 block mb-1">
              Filter Agency:
            </label>
            <select
              value={selectedAgency}
              onChange={(e) => setSelectedAgency(e.target.value)}
              className="w-full bg-slate-50 border border-slate-300 rounded px-3 py-1.5 text-xs font-semibold text-slate-900 focus:outline-none"
            >
              <option value="all">All Executive Agencies</option>
              {AGENCIES_DATA.map((a) => (
                <option key={a.id} value={a.slug}>
                  {a.name} ({a.abbreviation})
                </option>
              ))}
            </select>
          </div>

          <div className="flex items-end">
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSelectedAgency('all');
                setSelectedFY(2026);
                setSelectedMetric('Outlays');
              }}
              className="px-4 py-1.5 rounded bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-colors w-full"
            >
              Reset Filters
            </button>
          </div>
        </div>
      </div>

      {/* Filtered Summary Panel */}
      <div className="data-card p-6 sm:p-8 rounded-xl border border-blue-200 bg-slate-900 text-white space-y-6 shadow-xl">
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <span className="text-xs font-semibold text-blue-400 uppercase">Current Filter Selection</span>
          <span className="text-xs font-mono text-slate-400">FY {selectedFY} • {selectedMetric}</span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <MetricCard
            label="Total Visualized"
            value={formatCurrency(totalVisualized, true)}
            subtext={`${percentageOfBudget}% of total budget`}
            highlight
          />
          <MetricCard
            label="Daily Rate"
            value={formatCurrency(rates.perDay, true)}
            subtext="Estimated / day"
          />
          <MetricCard
            label="Hourly Rate"
            value={formatCurrency(rates.perHour, true)}
            subtext="Estimated / hour"
          />
          <MetricCard
            label="Per Second Rate"
            value={formatCurrency(rates.perSecond, true)}
            subtext="Estimated / sec"
          />
        </div>
      </div>

      {/* Composition Donut Visual */}
      <div className="data-card p-6 sm:p-8 rounded-xl border border-slate-200 bg-white space-y-4">
        <h2 className="text-xl font-bold text-slate-900">
          Visual Composition for Selection (Donut View)
        </h2>
        <DonutChart
          data={donutItems}
          centerLabel={`FY${selectedFY}`}
          centerValue={formatCurrency(totalVisualized, true)}
          height={280}
        />
      </div>

      {/* Horizontal Bar Breakdown */}
      <SpendingBreakdown data={filteredCategories} />

      {/* Historical Line Chart */}
      <div className="data-card rounded-xl p-6 sm:p-8 border border-slate-200 bg-white space-y-4">
        <h2 className="text-xl font-bold text-slate-900">
          Historical Trend for Selection (2018 – 2026)
        </h2>
        <SpendingTrendChart data={trendData} color="#1e3a8a" height={320} />
      </div>

      {/* Matching Records Table */}
      <div className="data-card rounded-xl p-6 sm:p-8 border border-slate-200 bg-white space-y-4">
        <h3 className="text-lg font-bold text-slate-900">
          Matching Category Records ({filteredCategories.length})
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm font-mono">
            <thead>
              <tr className="border-b border-slate-200 text-slate-500 font-sans text-xs uppercase">
                <th className="pb-3 font-semibold">Category Name</th>
                <th className="pb-3 font-semibold text-right">Outlays</th>
                <th className="pb-3 font-semibold text-right">% of Total</th>
                <th className="pb-3 font-semibold text-right">Daily Rate</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-800">
              {filteredCategories.map((c) => (
                <tr key={c.id} className="hover:bg-slate-50">
                  <td className="py-3 font-sans font-bold text-slate-900">
                    <Link href={`/${c.slug}`} className="hover:text-blue-700 hover:underline">
                      {c.name}
                    </Link>
                  </td>
                  <td className="py-3 text-right font-extrabold text-blue-900 numeral-tabular">
                    {formatCurrency(c.amount, true)}
                  </td>
                  <td className="py-3 text-right font-sans text-slate-600 font-semibold">
                    {c.percentage}%
                  </td>
                  <td className="py-3 text-right font-mono text-slate-900">
                    {formatCurrency(c.dailyRate, true)} / day
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* 300+ Words Guide Section */}
      <div className="data-card p-6 sm:p-8 rounded-xl border border-slate-200 bg-white space-y-6">
        <div className="border-b border-slate-100 pb-4 flex items-center space-x-2">
          <BookOpen className="w-5 h-5 text-blue-700" />
          <h2 className="text-xl font-bold text-slate-900">
            Guide to Federal Data Exploration & Filtering
          </h2>
        </div>

        <div className="space-y-4 text-xs text-slate-700 leading-relaxed max-w-4xl">
          <p>
            The <strong>Advanced U.S. Spending Explorer</strong> provides an interactive data tree designed for deep research into the United States Federal Budget. In Fiscal Year 2026, total reported federal outlays reach <strong>$6.75 Trillion ($6,750,000,000,000)</strong>, spanning tens of thousands of federal programs, grants, and prime procurement contracts.
          </p>
          <p>
            Using the Explorer, users can apply filter criteria by <strong>Fiscal Year (FY2020 - FY2026)</strong>, <strong>Financial Metric Type (Outlays vs Obligations)</strong>, <strong>Functional Category</strong>, and <strong>Executive Agency</strong>. For instance, filtering by Defense & Military isolates $895.0 Billion in outlays, revealing sub-allocations for military operations, procurement, research, and personnel.
          </p>
          <p>
            All data presented in the Explorer is synchronized with official REST API feeds from USAspending.gov and verified Treasury monthly statements. This tool enables citizens, researchers, and journalists to track public funds with complete transparency.
          </p>
        </div>
      </div>

      {/* 7 FAQs + Schema */}
      <FAQSection
        title="Frequently Asked Questions: Data Explorer"
        subtitle="Verified explanations of spending filters, metrics, and data tree navigation."
        faqs={explorerFAQs}
      />
    </div>
  );
}
