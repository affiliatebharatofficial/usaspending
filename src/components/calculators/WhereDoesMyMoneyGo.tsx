'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { SPENDING_CATEGORIES, TOTAL_FEDERAL_SPENDING_FY2026 } from '@/lib/data/spendingData';
import { formatCurrency, formatPercent } from '@/lib/utils/formatters';
import DataInterpretationCallout from '@/components/common/DataInterpretationCallout';
import ReportDataIssueButton from '@/components/common/ReportDataIssueButton';
import { ShieldAlert, DollarSign, PieChart, Info, CheckCircle2, AlertTriangle, ArrowRight, HelpCircle } from 'lucide-react';

export default function WhereDoesMyMoneyGo() {
  const [income, setIncome] = useState<number>(75_000);
  const [filingStatus, setFilingStatus] = useState<string>('single');

  // Estimated average federal effective income tax rate calculation (for illustrative allocation purposes)
  // Single: ~$75k income => ~12.5% effective tax ($9,375 tax)
  const getEstimatedTaxPaid = () => {
    if (income <= 20_000) return income * 0.05;
    if (income <= 50_000) return income * 0.09;
    if (income <= 100_000) return income * 0.135;
    if (income <= 250_000) return income * 0.19;
    return income * 0.24;
  };

  const estimatedTaxPaid = getEstimatedTaxPaid();

  const interpretationBullets = [
    'This calculator does NOT measure an individual\'s actual legal tax liability or calculate an IRS tax return.',
    'It does NOT account for itemized deductions, child tax credits, retirement deferrals, state/local taxes, or FICA payroll withholdings.',
    'It does NOT imply that your federal tax payment equals your direct share of federal spending or that your tax dollars are held in a separate personal account.',
    'Federal tax revenues are collected into the general fund of the U.S. Treasury and disbursed according to congressional appropriations, not segregated individual accounts.',
    'Category shares are illustrative proportional splits based on official FY2026 reported outlays ($6.75 Trillion).'
  ];

  return (
    <div className="space-y-8 max-w-4xl mx-auto">
      <div className="glass-card rounded-3xl p-6 sm:p-10 border border-slate-800 bg-slate-950/90 shadow-2xl">
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-8">
          <div className="inline-flex items-center gap-1.5 text-xs uppercase font-semibold text-emerald-400 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-800/40 mb-3">
            <PieChart className="w-3.5 h-3.5" />
            Estimated Federal Spending Share
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
            Where Does Federal Spending Go?
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-2">
            Enter an income figure to see an <strong>illustrative proportional distribution</strong> of an estimated federal tax payment across major government budget functions.
          </p>
        </div>

        {/* Income & Filing Form */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto mb-8">
          <div>
            <label className="block text-xs font-semibold text-slate-300 uppercase mb-2">
              Annual Income (USD)
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-sm font-bold text-slate-400">$</span>
              <input
                type="number"
                value={income}
                onChange={(e) => setIncome(Math.max(0, Number(e.target.value)))}
                className="block w-full pl-8 pr-4 py-3 text-lg font-bold font-mono text-white bg-slate-900 border border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-400"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 uppercase mb-2">
              Filing Status
            </label>
            <select
              value={filingStatus}
              onChange={(e) => setFilingStatus(e.target.value)}
              className="block w-full px-3 py-3 text-sm font-medium text-white bg-slate-900 border border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-400"
            >
              <option value="single">Single Filer</option>
              <option value="joint">Married Filing Jointly</option>
              <option value="head">Head of Household</option>
            </select>
          </div>
        </div>

        {/* Summary Box */}
        <div className="p-5 rounded-2xl bg-gradient-to-r from-slate-900 to-emerald-950/40 border border-emerald-900/50 mb-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <div className="text-xs text-slate-400">Estimated Federal Income Tax Share</div>
            <div className="text-3xl font-extrabold text-emerald-400 font-mono mt-1">
              {formatCurrency(estimatedTaxPaid)}
            </div>
            <div className="text-[11px] text-slate-500 mt-0.5">
              Based on ~{((estimatedTaxPaid / (income || 1)) * 100).toFixed(1)}% estimated effective federal tax rate benchmark
            </div>
          </div>

          <div className="text-right text-xs text-slate-400 border-t sm:border-t-0 sm:border-l border-slate-800 pt-3 sm:pt-0 sm:pl-6">
            <div>FY2026 Budget Basis</div>
            <div className="font-bold text-white font-mono text-sm mt-0.5">$6.75 Trillion Outlays</div>
          </div>
        </div>

        {/* Category Breakdown Table */}
        <div className="space-y-3 mb-8">
          <h3 className="text-sm font-bold text-white mb-2">
            Illustrative Spending Allocation for {formatCurrency(estimatedTaxPaid)}:
          </h3>

          <div className="grid grid-cols-1 gap-2.5">
            {SPENDING_CATEGORIES.map((cat) => {
              const catShare = estimatedTaxPaid * (cat.percentage / 100);
              return (
                <div
                  key={cat.id}
                  className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center justify-between hover:border-slate-700 transition-colors"
                >
                  <div className="flex items-center space-x-3">
                    <span className="text-xl">{cat.icon}</span>
                    <div>
                      <div className="font-semibold text-white text-sm">{cat.name}</div>
                      <div className="text-[11px] text-slate-400">{formatPercent(cat.percentage)} of total federal spending</div>
                    </div>
                  </div>

                  <div className="text-right">
                    <div className="font-bold text-emerald-400 font-mono text-base">
                      {formatCurrency(catShare)}
                    </div>
                    <div className="text-[10px] text-slate-500 font-mono">
                      {formatCurrency(catShare / 365, false)} / day
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mandated Disclaimer */}
        <div className="p-4 rounded-xl border border-amber-900/50 bg-amber-950/30 flex items-start gap-3 text-xs text-amber-300/90">
          <ShieldAlert className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
          <div className="space-y-1">
            <span className="font-bold text-amber-300 block">Important Methodological Disclosure:</span>
            <p className="leading-relaxed text-amber-200/80">
              This calculator provides an <strong>illustrative estimated federal spending share</strong>. It is not an official calculation of your actual individual federal tax return, tax bracket, or legal liability. Personal tax obligations depend on deductions, credits, and unique circumstances under Internal Revenue Code statutes.
            </p>
          </div>
        </div>
      </div>

      {/* Structured Transparency & Documentation Box */}
      <div className="data-card p-6 sm:p-8 rounded-xl border border-slate-200 bg-white space-y-5 text-xs text-slate-700">
        <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
          <HelpCircle className="w-4 h-4 text-blue-700" />
          Calculator Methodology & Limitations
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="space-y-2">
            <span className="font-bold text-slate-900 block uppercase tracking-wider text-[11px]">
              What This Calculator Measures:
            </span>
            <p className="text-slate-600 leading-relaxed">
              An illustrative proportional division of an estimated federal income tax contribution, computed by applying official FY2026 OMB budget function percentages ($6.75 Trillion total federal outlays) to an estimated tax bracket.
            </p>
          </div>

          <div className="space-y-2">
            <span className="font-bold text-slate-900 block uppercase tracking-wider text-[11px]">
              What This Calculator Does NOT Measure:
            </span>
            <p className="text-slate-600 leading-relaxed">
              It does not compute your legal tax liability, accounting for specific W-2/1099 details, child tax credits, state/local taxes, or FICA payroll taxes. The site does not imply that your tax payment equals your personal share of spending.
            </p>
          </div>
        </div>

        <div className="pt-3 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <p className="text-slate-500 text-[11px]">
            Data Sources: USAspending.gov (FY2026 Outlays) & U.S. Treasury Monthly Treasury Statements.
          </p>
          <Link
            href="/data-limitations#tax-calculators"
            className="inline-flex items-center gap-1 font-bold text-blue-700 hover:text-blue-900"
          >
            <span>Read Tax Interpretation Documentation</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>

      {/* Reusable Data Interpretation Callout */}
      <DataInterpretationCallout
        title="What This Personal Allocation Data Does Not Mean"
        items={interpretationBullets}
        pageUrl="/where-does-my-money-go"
        dataPoint="Estimated Federal Tax Allocation"
        sources={[
          { name: 'USAspending.gov', role: 'Category outlays', url: 'https://www.usaspending.gov' },
          { name: 'U.S. Treasury', role: 'FY2026 outlays baseline', url: 'https://fiscaldata.treasury.gov' }
        ]}
      />
    </div>
  );
}
