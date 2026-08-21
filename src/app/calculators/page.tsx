import React from 'react';
import Link from 'next/link';
import Breadcrumbs from '@/components/navigation/Breadcrumbs';
import JsonLd from '@/components/seo/JsonLd';
import FAQSection, { FAQItem } from '@/components/common/FAQSection';
import { Calculator, Clock, Percent, GitCompare, Calendar, MapPin, PieChart, ArrowRight, BookOpen } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'U.S. Government Spending Calculators — Interactive Budget Suite',
  description: 'Use interactive calculators to understand U.S. government spending, compare amounts, explore historical changes, and see where money goes.',
  alternates: {
    canonical: 'https://www.usaspending.us/calculators',
  },
};

export default function CalculatorHubPage() {
  const calculatorCards = [
    {
      title: 'Main Government Spending Calculator',
      description: 'Enter any dollar amount to see its share of total federal outlays, time equivalent, and category ratios.',
      url: '/calculator',
      icon: Calculator,
      badge: 'Primary Tool',
    },
    {
      title: 'Spending Rate Calculator',
      description: 'Calculate daily, hourly, minute, and per-second rates for any budget amount using exact fiscal year durations.',
      url: '/calculators/spending-rate',
      icon: Clock,
      badge: 'Rate Analysis',
    },
    {
      title: 'Spending Percentage Calculator',
      description: 'Compare any custom dollar amount against Defense, Medicare, Social Security, or total federal outlays.',
      url: '/calculators/spending-percentage',
      icon: Percent,
      badge: 'Relative Share',
    },
    {
      title: 'Government Spending Comparison Calculator',
      description: 'Side-by-side comparison tool for categories, agencies, states, recipients, or fiscal years.',
      url: '/calculators/compare',
      icon: GitCompare,
      badge: 'Side-by-Side',
    },
    {
      title: 'Year-over-Year Spending Calculator',
      description: 'Analyze budget shifts, absolute dollar differences, and percentage growth between FY2026 and prior fiscal years.',
      url: '/calculators/year-comparison',
      icon: Calendar,
      badge: 'YoY Growth',
    },
    {
      title: 'Per Capita Federal Spending Calculator',
      description: 'Calculate federal outlays associated with states divided by population baselines.',
      url: '/calculators/per-capita',
      icon: MapPin,
      badge: 'Geographic Ratio',
    },
    {
      title: 'Amount-to-Time Calculator',
      description: 'Convert any dollar amount into how many days, hours, minutes, or seconds of federal spending it represents.',
      url: '/calculators/amount-to-time',
      icon: Clock,
      badge: 'Time Equivalency',
    },
    {
      title: 'Spending Breakdown Calculator',
      description: 'See an illustrative breakdown of any entered amount distributed using actual federal category proportions.',
      url: '/calculators/breakdown',
      icon: PieChart,
      badge: 'Illustrative Allocation',
    },
  ];

  const hubFAQs: FAQItem[] = [
    {
      question: 'What are the U.S. Government Spending Calculators?',
      answer: 'The U.S. Government Spending Calculators are interactive financial tools designed to convert multi-trillion dollar federal budgets into understandable metrics such as per-hour rates, budget percentages, time equivalents, and per-resident ratios.',
    },
    {
      question: 'How does the Main Government Spending Calculator work?',
      answer: 'By entering any custom dollar amount, the calculator divides the figure by total U.S. federal outlays ($6.75 Trillion in FY2026) to compute the exact percentage share and equivalent rate velocity.',
    },
    {
      question: 'What is the formula used for per-capita spending calculations?',
      answer: 'Per-capita spending is calculated as (Total Federal Outlays in State ÷ State Population Baseline). It represents an average geographic allocation quotient, not personal citizen tax payments.',
    },
    {
      question: 'Are rate conversions (per-second, per-hour) live wire transfers?',
      answer: 'No. Time-based rates are mathematical averages computed over 365 days (or 366 days in leap years) of the federal fiscal year (October 1 through September 30).',
    },
    {
      question: 'How is Year-over-Year (YoY) spending growth calculated?',
      answer: 'YoY growth is calculated as ((Selected FY Outlays - Base FY Outlays) ÷ Base FY Outlays) × 100, providing net growth percentages and dollar differences across historical budget years.',
    },
    {
      question: 'Are all figures on the calculators based on official government data?',
      answer: 'Yes. All baseline totals, agency outlays, category proportions, and historical data points are ingested directly from official public USAspending.gov API feeds.',
    },
    {
      question: 'Can I export or share my calculator results?',
      answer: 'Yes. Every calculator includes built-in CSV export functionality and instant social share links to export calculated figures for research and commentary.',
    },
  ];

  return (
    <div className="space-y-10 py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <Breadcrumbs items={[{ name: 'Calculators Hub', url: '/calculators' }]} />
      <JsonLd
        type="CollectionPage"
        data={{
          name: 'U.S. Government Spending Calculators',
          description: 'Interactive budget calculator suite for U.S. Federal outlays.',
          url: '/calculators',
        }}
      />

      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-blue-700 px-3 py-1 rounded bg-blue-50 border border-blue-200">
          <Calculator className="w-3.5 h-3.5" />
          Interactive Budget Calculator Suite
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-slate-900">
          U.S. Government Spending Calculators
        </h1>
        <p className="text-sm text-slate-600">
          Use interactive calculators to understand U.S. government spending, compare amounts, explore historical changes, and see where money goes.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {calculatorCards.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.url}
              href={item.url}
              className="data-card p-6 rounded-xl border border-slate-200 bg-white hover:border-blue-400 hover:shadow-md transition-all space-y-4 flex flex-col justify-between group"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded bg-blue-100 text-blue-900 font-mono">
                    {item.badge}
                  </span>
                  <Icon className="w-4 h-4 text-blue-700" />
                </div>
                <h3 className="text-lg font-extrabold text-slate-900 group-hover:text-blue-700 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-blue-700">
                <span>Launch Calculator</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          );
        })}
      </div>

      {/* 300+ Words Educational Guide Section */}
      <div className="data-card p-6 sm:p-8 rounded-xl border border-slate-200 bg-white space-y-6">
        <div className="border-b border-slate-100 pb-4 flex items-center space-x-2">
          <BookOpen className="w-5 h-5 text-blue-700" />
          <h2 className="text-xl font-bold text-slate-900">
            Guide to Federal Budget Modeling & Financial Calculators
          </h2>
        </div>

        <div className="space-y-4 text-xs text-slate-700 leading-relaxed max-w-4xl">
          <p>
            Understanding federal government spending requires converting multi-trillion dollar outlays into scales that human minds can easily contextualize. In Fiscal Year 2026, total U.S. federal government spending reaches approximately <strong>$6.75 Trillion ($6,750,000,000,000)</strong>. Because numbers of this magnitude can be difficult to interpret, our <strong>Interactive Budget Calculator Suite</strong> provides mathematical models that break down annual federal outlays into time, percentage, and per-resident metrics.
          </p>
          <p>
            The suite includes eight specialized tools designed for citizens, policy researchers, journalists, and financial analysts. For instance, the <strong>Spending Rate Calculator</strong> converts annual outlays into exact time rates: at $6.75 Trillion per year, the federal government spends roughly <strong>$18.49 Billion per day</strong>, <strong>$770.5 million per hour</strong>, <strong>$12.84 million per minute</strong>, and <strong>$214,044 every single second</strong>.
          </p>
          <p>
            Similarly, the <strong>Per Capita Calculator</strong> combines state population baselines from the U.S. Census Bureau with official federal prime contract and assistance awards from USAspending.gov to compute geographic per-resident ratios. The <strong>Amount-to-Time Calculator</strong> enables users to enter any custom dollar figure—such as a $1 Billion infrastructure project—and discover that it represents approximately 1 hour and 17 minutes of total U.S. federal spending velocity.
          </p>
          <p>
            All mathematical calculations strictly adhere to official Treasury fiscal year boundaries (October 1 to September 30). These tools are provided strictly for research, civic education, and budget transparency, using non-partisan public government data.
          </p>
        </div>
      </div>

      {/* 7 FAQs + Schema */}
      <FAQSection
        title="Frequently Asked Questions: Budget Calculators"
        subtitle="Verified explanations of mathematical models, time conversions, and budget baseline formulas."
        faqs={hubFAQs}
      />
    </div>
  );
}
