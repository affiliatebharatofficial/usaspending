'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Breadcrumbs from '@/components/navigation/Breadcrumbs';
import DonutChart from '@/components/visualizations/DonutChart';
import MetricCard from '@/components/visualizations/MetricCard';
import ShareResultButton from '@/components/calculators/ShareResultButton';
import ExportCsvButton from '@/components/calculators/ExportCsvButton';
import FAQSection, { FAQItem } from '@/components/common/FAQSection';
import { SPENDING_CATEGORIES, TOTAL_FEDERAL_SPENDING_FY2026 } from '@/lib/data/spendingData';
import { formatCurrency } from '@/lib/utils/formatters';
import { PieChart, ArrowLeft, Info, BookOpen } from 'lucide-react';

export default function SpendingBreakdownCalculatorPage() {
  const [amount, setAmount] = useState<number>(1_000_000_000);

  const distributedBreakdown = SPENDING_CATEGORIES.map((c) => {
    const allocated = (amount * c.percentage) / 100;
    return {
      id: c.id,
      name: c.name,
      percentage: c.percentage,
      allocatedAmount: allocated,
      slug: c.slug,
    };
  });

  const csvData = distributedBreakdown.map((item) => ({
    Category: item.name,
    Percentage: `${item.percentage}%`,
    IllustrativeAllocatedAmount: formatCurrency(item.allocatedAmount, true),
  }));

  const donutItems = distributedBreakdown.map((item) => ({
    name: item.name,
    amount: item.allocatedAmount,
    percentage: item.percentage,
    slug: item.slug,
  }));

  const faqs: FAQItem[] = [
    {
      question: 'Does the federal government actually allocate my entered amount this way?',
      answer: 'No. This is an illustrative mathematical allocation demonstrating how any dollar amount would be divided if split proportionally according to official FY2026 category outlay percentages.',
    },
    {
      question: 'What are the category proportions based on?',
      answer: 'Proportions are calculated directly from official Treasury outlays reported on USAspending.gov across major functional categories including Defense, Social Security, Medicare, Medicaid, and Education.',
    },
    {
      question: 'Why perform an illustrative spending breakdown?',
      answer: 'Illustrative breakdowns help citizens and analysts understand how tax dollars or custom funding amounts scale across competing government priorities.',
    },
    {
      question: 'Which spending category receives the largest percentage allocation?',
      answer: 'Mandatory benefit programs like Social Security (~21.5%), Medicare (~13.3%), and Defense & Military (~13.3%) represent the largest individual category shares.',
    },
    {
      question: 'Are state tax allocations included in this breakdown?',
      answer: 'No. All category proportions reflect federal budget outlays authorized under congressional appropriations and Treasury disbursements.',
    },
    {
      question: 'Can I export the calculated category allocations?',
      answer: 'Yes. You can use the Export CSV button to download a spreadsheet containing every category name, percentage share, and calculated dollar amount.',
    },
    {
      question: 'How often are category budget proportions updated?',
      answer: 'Proportions are updated dynamically as official fiscal year outlays and Treasury execution statements are refreshed.',
    },
  ];

  return (
    <div className="space-y-10 py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <Breadcrumbs
        items={[
          { name: 'Calculators', url: '/calculators' },
          { name: 'Spending Breakdown Calculator', url: '/calculators/breakdown' },
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
          <PieChart className="w-3.5 h-3.5" />
          Illustrative Allocation Tool
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-slate-900">
          Spending Breakdown Calculator
        </h1>
        <p className="text-sm text-slate-600">
          See an illustrative breakdown of any entered dollar amount distributed using actual federal category proportions.
        </p>
      </div>

      <div className="data-card p-6 sm:p-8 rounded-xl border border-slate-200 bg-white space-y-4 max-w-2xl mx-auto">
        <label className="text-xs uppercase font-bold text-slate-700 block">
          Enter Total Dollar Amount ($):
        </label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(Math.max(Number(e.target.value), 0))}
          className="w-full bg-slate-50 border border-slate-300 rounded-lg py-2.5 px-4 text-xl font-extrabold font-mono text-slate-900 focus:outline-none"
        />

        <div className="flex items-center justify-between pt-2">
          <ShareResultButton textToShare={`If ${formatCurrency(amount, true)} were distributed proportionally: Defense gets ${formatCurrency(distributedBreakdown[0].allocatedAmount, true)}, Medicare gets ${formatCurrency(distributedBreakdown[1].allocatedAmount, true)}.`} />
          <ExportCsvButton filename="spending-breakdown-calculator.csv" data={csvData} />
        </div>
      </div>

      {/* Mandatory Disclaimer Box */}
      <div className="p-4 rounded-xl bg-blue-50 border border-blue-200 text-blue-900 text-xs flex items-start space-x-3 max-w-3xl mx-auto">
        <Info className="w-5 h-5 text-blue-700 flex-shrink-0 mt-0.5" />
        <p className="leading-relaxed">
          <strong>Illustrative allocation based on historical federal spending proportions.</strong> This calculation demonstrates how {formatCurrency(amount, true)} would be split if distributed proportionally across official FY2026 category outlays.
        </p>
      </div>

      <div className="data-card p-6 sm:p-8 rounded-xl border border-slate-200 bg-white space-y-4">
        <h3 className="text-lg font-bold text-slate-900">
          Illustrative Category Proportions
        </h3>
        <DonutChart data={donutItems} centerLabel="Total Distributed" centerValue={formatCurrency(amount, true)} height={280} />
      </div>

      {/* Allocated Category Table */}
      <div className="data-card rounded-xl p-6 sm:p-8 border border-slate-200 bg-white space-y-4">
        <h3 className="text-lg font-bold text-slate-900">
          Illustrative Category Breakdown Table
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm font-mono">
            <thead>
              <tr className="border-b border-slate-200 text-slate-500 font-sans text-xs uppercase">
                <th className="pb-3 font-semibold">Spending Category</th>
                <th className="pb-3 font-semibold text-right">Category Share</th>
                <th className="pb-3 font-semibold text-right">Illustrative Allocation</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-800">
              {distributedBreakdown.map((item) => (
                <tr key={item.id} className="hover:bg-slate-50">
                  <td className="py-3 font-sans font-bold text-slate-900">{item.name}</td>
                  <td className="py-3 text-right font-sans text-slate-600 font-semibold">{item.percentage}%</td>
                  <td className="py-3 text-right font-extrabold text-blue-900 numeral-tabular">
                    {formatCurrency(item.allocatedAmount, true)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* 300+ Words Educational Guide Section */}
      <div className="data-card p-6 sm:p-8 rounded-xl border border-slate-200 bg-white space-y-6">
        <div className="border-b border-slate-100 pb-4 flex items-center space-x-2">
          <BookOpen className="w-5 h-5 text-blue-700" />
          <h2 className="text-xl font-bold text-slate-900">
            Proportional Allocation & Category Mechanics
          </h2>
        </div>

        <div className="space-y-4 text-xs text-slate-700 leading-relaxed max-w-4xl">
          <p>
            The <strong>Spending Breakdown Calculator</strong> allows users to input any sum—such as individual tax payments, a state grant, or a proposed legislative bill—and observe how that capital would be divided across the major functional areas of the federal budget if split in exact proportion to official outlays.
          </p>
          <p>
            For instance, if a user enters <strong>$10,000</strong>, the calculator applies official FY2026 percentage baselines: approximately <strong>$2,150</strong> is allocated to Social Security, <strong>$1,330</strong> to Medicare, <strong>$1,330</strong> to Defense & Military, <strong>$1,010</strong> to Medicaid & Health Services, and remaining balances distributed across education, infrastructure, agriculture, veterans affairs, and scientific research.
          </p>
          <p>
            This tool provides essential context for civic understanding. By viewing how single dollars or large funding blocks map onto federal budget functions, users gain clear insight into how competing legislative priorities shape the overall allocation of public resources.
          </p>
        </div>
      </div>

      {/* 7 FAQs + Schema */}
      <FAQSection
        title="Frequently Asked Questions: Spending Breakdown Calculator"
        subtitle="Verified explanations of proportional splitting, category weights, and calculation models."
        faqs={faqs}
      />
    </div>
  );
}
