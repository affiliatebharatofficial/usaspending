import React from 'react';
import Link from 'next/link';
import Breadcrumbs from '@/components/navigation/Breadcrumbs';
import JsonLd from '@/components/seo/JsonLd';
import { Calculator, Clock, Percent, GitCompare, Calendar, MapPin, PieChart, ArrowRight } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'U.S. Government Spending Calculators — Interactive Budget Suite',
  description: 'Use interactive calculators to understand U.S. government spending, compare amounts, explore historical changes, and see where money goes.',
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
    </div>
  );
}
