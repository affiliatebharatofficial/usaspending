import React from 'react';
import Link from 'next/link';
import Breadcrumbs from '@/components/navigation/Breadcrumbs';
import FAQSection, { FAQItem } from '@/components/common/FAQSection';
import { GitCompare, ArrowRight, Shield, HeartPulse, MapPin, Building2, Award, BookOpen } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'U.S. Spending Comparison Engine — Compare States, Categories & Contractors',
  description: 'Compare federal outlays, per-capita allocations, YoY trends, and recipient distributions across states, categories, agencies, and defense contractors.',
  alternates: {
    canonical: 'https://www.usaspending.us/compare',
  },
};

export default function CompareOverviewPage() {
  const popularComparisons = [
    { title: 'California vs. Texas', type: 'State Comparison', url: '/compare/california-vs-texas', icon: MapPin },
    { title: 'Defense vs. Education', type: 'Category Comparison', url: '/compare/defense-vs-education', icon: Shield },
    { title: 'Social Security vs. Medicare', type: 'Category Comparison', url: '/compare/medicare-vs-social-security', icon: HeartPulse },
    { title: 'Boeing vs. Lockheed Martin', type: 'Recipient Comparison', url: '/compare/boeing-vs-lockheed-martin', icon: Award },
    { title: 'Dept of Defense vs. HHS', type: 'Agency Comparison', url: '/compare/dod-vs-hhs', icon: Building2 },
    { title: 'NASA vs. Dept of Energy', type: 'Agency Comparison', url: '/compare/nasa-vs-doe', icon: Building2 },
  ];

  const compareFAQs: FAQItem[] = [
    {
      question: 'What is the U.S. Spending Comparison Engine?',
      answer: 'The U.S. Spending Comparison Engine is a side-by-side analytical tool that enables users to compare federal outlays, per-capita allocations, historical growth trends, and recipient awards across states, spending categories, executive agencies, and top prime contractors.',
    },
    {
      question: 'How are state comparisons calculated (e.g. California vs. Texas)?',
      answer: 'State comparisons evaluate total federal outlays, per-capita spending, Census population baselines, prime contract awards vs. grant assistance, and historical spending trajectories from 2018 through 2026.',
    },
    {
      question: 'How are category comparisons calculated (e.g. Defense vs. Education)?',
      answer: 'Category comparisons measure relative percentage shares of the total $6.75 Trillion federal budget, net dollar differences, hourly disbursement rates, and primary administering agencies.',
    },
    {
      question: 'How are prime contractor comparisons calculated (e.g. Lockheed Martin vs. Boeing)?',
      answer: 'Contractor comparisons compare total federal prime contract obligations, awarding agency portfolios (DoD vs NASA), UEI numbers, and primary performing state locations.',
    },
    {
      question: 'Where does the comparison data come from?',
      answer: 'All underlying financial data is ingested from official public REST API feeds provided by USAspending.gov and the U.S. Department of the Treasury.',
    },
    {
      question: 'Are comparisons updated for Fiscal Year 2026?',
      answer: 'Yes. All comparison tools incorporate official FY2026 budget outlays and multi-year historical data spanning FY2018 to FY2026.',
    },
    {
      question: 'Can I request a custom comparison between any two entities?',
      answer: 'Yes. You can use the interactive dropdown selectors in our Comparison Calculators to compare any two states, categories, or agencies.',
    },
  ];

  return (
    <div className="space-y-10 py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <Breadcrumbs items={[{ name: 'Comparison Engine', url: '/compare' }]} />

      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-blue-700 px-3 py-1 rounded bg-blue-50 border border-blue-200">
          <GitCompare className="w-3.5 h-3.5" />
          Side-by-Side Analytical Tool
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-slate-900">
          U.S. Spending Comparison Engine
        </h1>
        <p className="text-sm text-slate-600">
          Compare federal outlays, per-capita allocations, YoY trends, and recipient distributions across states, categories, agencies, and defense contractors.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {popularComparisons.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.url}
              href={item.url}
              className="data-card p-6 rounded-xl border border-slate-200 bg-white hover:border-blue-400 hover:shadow-md transition-all space-y-3 flex flex-col justify-between group"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded bg-blue-100 text-blue-900">
                    {item.type}
                  </span>
                  <Icon className="w-4 h-4 text-blue-700" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-700 transition-colors">
                  {item.title}
                </h3>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-blue-700">
                <span>Run Comparison</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          );
        })}
      </div>

      {/* 300+ Words Guide Section */}
      <div className="data-card p-6 sm:p-8 rounded-xl border border-slate-200 bg-white space-y-6">
        <div className="border-b border-slate-100 pb-4 flex items-center space-x-2">
          <BookOpen className="w-5 h-5 text-blue-700" />
          <h2 className="text-xl font-bold text-slate-900">
            Guide to Side-by-Side Federal Budget Comparisons
          </h2>
        </div>

        <div className="space-y-4 text-xs text-slate-700 leading-relaxed max-w-4xl">
          <p>
            The <strong>U.S. Spending Comparison Engine</strong> provides comparative analytical models designed to contrast federal government spending across states, budget functions, executive departments, and defense industrial contractors.
          </p>
          <p>
            Evaluating spending side-by-side reveals critical fiscal insights. For instance, comparing <strong>California ($520.0 Billion) versus Texas ($410.0 Billion)</strong> highlights distinct population baselines and prime contract distributions, while comparing <strong>Defense & Military ($895.0 Billion) versus Education & Training ($240.0 Billion)</strong> demonstrates how federal resources are split between national security and domestic human capital.
          </p>
          <p>
            Similarly, comparing major defense contractors such as <strong>Lockheed Martin ($48.5 Billion) versus Boeing ($32.1 Billion)</strong> illuminates prime contractor market share, contract vehicle types, and state-level place-of-performance allocations. All comparison models rely strictly on official, non-partisan datasets sourced from USAspending.gov.
          </p>
        </div>
      </div>

      {/* 7 FAQs + Schema */}
      <FAQSection
        title="Frequently Asked Questions: Comparison Engine"
        subtitle="Verified explanations of side-by-side comparison models, ratios, and datasets."
        faqs={compareFAQs}
      />
    </div>
  );
}
