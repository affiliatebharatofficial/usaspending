import React from 'react';
import Link from 'next/link';
import { Calculator, ArrowRight, Info, AlertTriangle, ShieldCheck } from 'lucide-react';

interface CalculatorMethodologyBoxProps {
  calculatorName: string;
  sourceName?: string;
  sourceUrl?: string;
  metric: string;
  formula: string | React.ReactNode;
  example: string | React.ReactNode;
  limitations: string | React.ReactNode;
  isPerCapita?: boolean;
}

export default function CalculatorMethodologyBox({
  calculatorName,
  sourceName = 'USAspending.gov (U.S. Department of the Treasury)',
  sourceUrl = 'https://www.usaspending.gov',
  metric,
  formula,
  example,
  limitations,
  isPerCapita = false,
}: CalculatorMethodologyBoxProps) {
  return (
    <div className="data-card p-6 sm:p-8 rounded-xl border border-slate-200 bg-white space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-4">
        <div className="flex items-center space-x-2">
          <div className="p-2 rounded-lg bg-blue-50 text-blue-700">
            <Calculator className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-slate-900">
              How This Calculator Works
            </h2>
            <p className="text-xs text-slate-500">
              Transparency, data origin, and mathematical calculation logic for {calculatorName}
            </p>
          </div>
        </div>

        <span className="self-start sm:self-auto inline-flex items-center gap-1 px-2.5 py-1 rounded bg-slate-100 text-slate-700 text-xs font-semibold">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
          Methodology v1.0
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-slate-700">
        {/* Source & Metric */}
        <div className="space-y-4">
          <div>
            <span className="font-bold text-slate-900 uppercase tracking-wider block mb-1">
              Primary Data Source:
            </span>
            <p className="text-slate-600">
              {sourceName}.{' '}
              <a
                href={sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 font-semibold hover:underline inline-flex items-center gap-0.5"
              >
                Official government portal
              </a>
              {' '}or view our{' '}
              <Link href="/data-sources" className="text-blue-700 font-semibold hover:underline">
                Data Sources documentation
              </Link>.
            </p>
          </div>

          <div>
            <span className="font-bold text-slate-900 uppercase tracking-wider block mb-1">
              Metric Calculated:
            </span>
            <p className="text-slate-600 font-medium">{metric}</p>
          </div>

          <div>
            <span className="font-bold text-slate-900 uppercase tracking-wider block mb-1">
              Exact Mathematical Formula:
            </span>
            <div className="p-3 rounded-lg bg-slate-50 border border-slate-200 font-mono text-xs text-slate-800 break-words whitespace-pre-wrap">
              {formula}
            </div>
          </div>
        </div>

        {/* Example & Limitations */}
        <div className="space-y-4">
          <div>
            <span className="font-bold text-slate-900 uppercase tracking-wider block mb-1">
              Worked Example:
            </span>
            <div className="p-3 rounded-lg bg-blue-50/50 border border-blue-100 text-slate-700 leading-relaxed">
              {example}
            </div>
          </div>

          <div>
            <span className="font-bold text-slate-900 uppercase tracking-wider block mb-1">
              Assumptions & Limitations:
            </span>
            <p className="text-slate-600 leading-relaxed">{limitations}</p>
          </div>
        </div>
      </div>

      {/* Mandatory Per-Capita Ratio Notice */}
      {isPerCapita && (
        <div className="p-3.5 rounded-lg bg-amber-50 border border-amber-200 text-amber-900 text-xs flex items-start space-x-2.5">
          <AlertTriangle className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong>Mandatory Ratio Definition:</strong> This is a mathematical ratio. It does not mean that each resident received this amount, paid this amount in taxes, or personally benefited from this amount.
          </p>
        </div>
      )}

      {/* Cross-Link to Full Methodology */}
      <div className="pt-3 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
        <p className="text-slate-500">
          USAspending.us is an independent project and is not affiliated with or endorsed by the U.S. Government or USAspending.gov.
        </p>
        <Link
          href="/methodology"
          className="inline-flex items-center gap-1 font-bold text-blue-700 hover:text-blue-900 whitespace-nowrap"
        >
          <span>Read Full Calculation Methodology</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
}
