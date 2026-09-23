import React from 'react';
import Link from 'next/link';
import { AlertCircle, RefreshCw, ExternalLink, Flag, HelpCircle } from 'lucide-react';
import ReportDataIssueButton from './ReportDataIssueButton';

export interface SourceItem {
  name: string;
  role?: string;
  url?: string;
}

interface DataInterpretationCalloutProps {
  title?: string;
  subtitle?: string;
  items: string[];
  showRevisionNotice?: boolean;
  sources?: SourceItem[];
  pageUrl?: string;
  dataPoint?: string;
}

export default function DataInterpretationCallout({
  title = 'What This Data Does Not Mean',
  subtitle = 'Important analytical context to prevent misinterpretation of public federal spending figures:',
  items,
  showRevisionNotice = true,
  sources,
  pageUrl,
  dataPoint,
}: DataInterpretationCalloutProps) {
  return (
    <div className="data-card p-6 sm:p-7 rounded-xl border border-slate-200 bg-white space-y-5 text-xs">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-3.5">
        <div className="flex items-center space-x-2">
          <div className="p-1.5 rounded-lg bg-amber-50 text-amber-700">
            <AlertCircle className="w-4 h-4" />
          </div>
          <div>
            <h3 className="text-sm font-bold text-slate-900">{title}</h3>
            <p className="text-[11px] text-slate-500">{subtitle}</p>
          </div>
        </div>

        <ReportDataIssueButton pageUrl={pageUrl} dataPoint={dataPoint} />
      </div>

      {/* Relevant Bullet Points */}
      <ul className="space-y-2 text-slate-700 list-disc pl-5 leading-relaxed">
        {items.map((item, idx) => (
          <li key={idx} className="marker:text-amber-600">
            {item}
          </li>
        ))}
      </ul>

      {/* Data Revision Notice */}
      {showRevisionNotice && (
        <div className="p-3 rounded-lg bg-slate-50 border border-slate-200 text-slate-600 flex items-start space-x-2">
          <RefreshCw className="w-3.5 h-3.5 text-slate-500 flex-shrink-0 mt-0.5" />
          <p className="text-[11px] leading-relaxed">
            <strong>Data Revision Notice:</strong> Federal spending data may be revised or corrected by the underlying reporting systems. Historical figures may therefore change over time as agencies update their accounting submissions.
          </p>
        </div>
      )}

      {/* Source Attribution (if provided) */}
      {sources && sources.length > 0 && (
        <div className="pt-2 border-t border-slate-100 flex flex-wrap items-center gap-x-4 gap-y-2 text-[11px] text-slate-500">
          <span className="font-bold text-slate-700 uppercase tracking-wider text-[10px]">Data Source:</span>
          {sources.map((s, idx) => (
            <span key={idx} className="inline-flex items-center gap-1">
              {s.url ? (
                <a
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 font-semibold hover:underline inline-flex items-center gap-0.5"
                >
                  <span>{s.name}</span>
                  <ExternalLink className="w-2.5 h-2.5" />
                </a>
              ) : (
                <span className="text-slate-800 font-semibold">{s.name}</span>
              )}
              {s.role && <span className="text-slate-400">({s.role})</span>}
              {idx < sources.length - 1 && <span className="text-slate-300 ml-2">•</span>}
            </span>
          ))}
        </div>
      )}

      {/* Cross-Link to Data Limitations Guide */}
      <div className="pt-1 text-[11px] text-slate-500 flex items-center justify-between">
        <span>Independent project — Not affiliated with USAspending.gov or U.S. Government.</span>
        <Link
          href="/data-limitations"
          className="font-bold text-blue-700 hover:text-blue-900 underline whitespace-nowrap ml-2"
        >
          Read Full Data Limitations Guide →
        </Link>
      </div>
    </div>
  );
}
