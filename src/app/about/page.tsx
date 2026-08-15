import React from 'react';
import Link from 'next/link';
import InfoPageLayout from '@/components/layout/InfoPageLayout';
import JsonLd from '@/components/seo/JsonLd';
import { SITE_CONFIG } from '@/lib/config/site';
import { ShieldCheck, BarChart3, Building2, MapPin, Award, Calculator, Calendar, ArrowRight } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: `About USA Spending | U.S. Government Spending Data`,
  description: `Learn about USA Spending, an independent data visualization platform for exploring public U.S. federal government spending data and fiscal tools.`,
  alternates: {
    canonical: 'https://www.usaspending.us/about',
  },
};

export default function AboutPage() {
  const toc = [
    { id: 'overview', title: '1. Overview' },
    { id: 'what-is-usa-spending', title: '2. What Is USA Spending?' },
    { id: 'what-can-you-explore', title: '3. What Can Users Explore?' },
    { id: 'our-goal', title: '4. Our Goal' },
    { id: 'data-philosophy', title: '5. Data First Philosophy' },
    { id: 'independent-notice', title: '6. Independent Project Notice' },
  ];

  return (
    <InfoPageLayout
      title="About USA Spending"
      subtitle="Making U.S. Government Spending Easier to Understand"
      breadcrumbName="About"
      breadcrumbUrl="/about"
      toc={toc}
    >
      <JsonLd
        type="AboutPage"
        data={{
          name: 'About USA Spending',
          description: 'Independent visual U.S. government spending explorer.',
          url: '/about',
        }}
      />

      <section id="overview" className="data-card p-6 sm:p-8 rounded-xl border border-slate-200 bg-white space-y-4">
        <h2 className="text-2xl font-black text-slate-900">1. Overview</h2>
        <p className="text-slate-600 text-sm leading-relaxed">
          <strong>USA Spending</strong> is an independent data visualization and research website that helps people explore publicly available U.S. government spending information through interactive charts, historical data, comparisons, and calculators.
        </p>
        <p className="text-slate-600 text-sm leading-relaxed">
          Federal spending datasets released by government authorities contain vast amounts of financial detail spread across fiscal years, executive departments, award instruments, states, and prime recipients. Our platform organizes these complex datasets into intuitive, accessible visual explorer tools.
        </p>
      </section>

      <section id="what-is-usa-spending" className="data-card p-6 sm:p-8 rounded-xl border border-slate-200 bg-white space-y-4">
        <h2 className="text-2xl font-black text-slate-900">2. What Is USA Spending?</h2>
        <p className="text-slate-600 text-sm leading-relaxed">
          USA Spending is built to make public government spending information easier for citizens, researchers, journalists, and analysts to navigate. Official federal datasets contain trillions of dollars in obligations and outlays, but raw spreadsheets can be difficult to interpret.
        </p>
        <p className="text-slate-600 text-sm leading-relaxed">
          We process official public API feeds—primarily from USAspending.gov—normalizing financial figures and presenting them with transparent fiscal-year context and mathematical rate models.
        </p>
      </section>

      <section id="what-can-you-explore" className="data-card p-6 sm:p-8 rounded-xl border border-slate-200 bg-white space-y-6">
        <h2 className="text-2xl font-black text-slate-900">3. What Can Users Explore?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 not-prose">
          <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-1">
            <div className="flex items-center gap-2 text-blue-900 font-bold text-sm">
              <BarChart3 className="w-4 h-4 text-blue-700" />
              <span>Government Spending</span>
            </div>
            <p className="text-xs text-slate-600">Explore overall federal outlays, budget totals, and daily spending velocity.</p>
          </div>

          <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-1">
            <div className="flex items-center gap-2 text-blue-900 font-bold text-sm">
              <BarChart3 className="w-4 h-4 text-blue-700" />
              <span>Spending Categories</span>
            </div>
            <p className="text-xs text-slate-600">Understand how spending is distributed across defense, healthcare, social security, and education.</p>
          </div>

          <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-1">
            <div className="flex items-center gap-2 text-blue-900 font-bold text-sm">
              <Building2 className="w-4 h-4 text-blue-700" />
              <span>Spending by Agency</span>
            </div>
            <p className="text-xs text-slate-600">Inspect budget allocations for executive departments like DOD, HHS, and NASA.</p>
          </div>

          <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-1">
            <div className="flex items-center gap-2 text-blue-900 font-bold text-sm">
              <MapPin className="w-4 h-4 text-blue-700" />
              <span>Spending by State</span>
            </div>
            <p className="text-xs text-slate-600">Examine federal contracts and assistance associated with all 50 states and territories.</p>
          </div>

          <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-1">
            <div className="flex items-center gap-2 text-blue-900 font-bold text-sm">
              <Award className="w-4 h-4 text-blue-700" />
              <span>Spending by Recipient</span>
            </div>
            <p className="text-xs text-slate-600">View prime contractors and organizations receiving federal contract and grant awards.</p>
          </div>

          <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-1">
            <div className="flex items-center gap-2 text-blue-900 font-bold text-sm">
              <Calculator className="w-4 h-4 text-blue-700" />
              <span>Interactive Calculators</span>
            </div>
            <p className="text-xs text-slate-600">Convert massive trillion-dollar numbers into relatable time and per-resident rates.</p>
          </div>
        </div>
      </section>

      <section id="our-goal" className="data-card p-6 sm:p-8 rounded-xl border border-slate-200 bg-white space-y-4">
        <h2 className="text-2xl font-black text-slate-900">4. Our Goal</h2>
        <p className="text-slate-600 text-sm leading-relaxed">
          Our goal is non-partisan and data-centric: we do not advocate for policy positions, political candidates, or specific budget decisions. Instead, we strive to make public financial data easier to discover, verify, and compare.
        </p>
      </section>

      <section id="data-philosophy" className="data-card p-6 sm:p-8 rounded-xl border border-slate-200 bg-white space-y-4">
        <h2 className="text-2xl font-black text-slate-900">5. Data First Philosophy</h2>
        <ul className="text-xs text-slate-600 space-y-2 list-disc pl-5">
          <li><strong>Official Sources:</strong> Primary reliance on official government API streams.</li>
          <li><strong>Transparent Methodology:</strong> Explicit formulas for rates, percentages, and fiscal year baselines.</li>
          <li><strong>Strict Terminology:</strong> Careful distinction between outlays, obligations, and state geographic allocations.</li>
          <li><strong>No Fake Data:</strong> Production UI displays only verified data or clear unavailable notices.</li>
        </ul>
      </section>

      <section id="independent-notice" className="data-card p-6 sm:p-8 rounded-xl border border-blue-200 bg-blue-50/50 space-y-3">
        <h2 className="text-xl font-bold text-blue-900">6. Independent Project Notice</h2>
        <p className="text-xs text-slate-700 leading-relaxed">
          {SITE_CONFIG.disclaimerNotice}
        </p>
      </section>
    </InfoPageLayout>
  );
}
