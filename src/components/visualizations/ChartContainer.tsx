import React from 'react';
import { DataMetadata } from '@/types';
import Link from 'next/link';
import { Info, ExternalLink } from 'lucide-react';

interface ChartContainerProps {
  title: string;
  subtitle?: string;
  metadata?: DataMetadata;
  loading?: boolean;
  empty?: boolean;
  emptyMessage?: string;
  children: React.ReactNode;
}

export default function ChartContainer({
  title,
  subtitle,
  metadata,
  loading = false,
  empty = false,
  emptyMessage = 'Official dataset will appear here once connected.',
  children,
}: ChartContainerProps) {
  return (
    <div className="data-card p-6 sm:p-8 bg-white border border-slate-200 rounded-xl space-y-6">
      {/* Header */}
      <div className="space-y-1 border-b border-slate-100 pb-4">
        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
          {title}
        </h3>
        {subtitle && <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{subtitle}</p>}
      </div>

      {/* Content Body */}
      {loading ? (
        <div className="h-64 flex flex-col items-center justify-center space-y-3 bg-slate-50 rounded-lg">
          <div className="w-8 h-8 border-3 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
          <span className="text-xs text-slate-500 font-medium">Loading official spending dataset...</span>
        </div>
      ) : empty ? (
        <div className="h-64 flex flex-col items-center justify-center p-6 bg-slate-50 rounded-lg border border-dashed border-slate-300 text-center space-y-2">
          <Info className="w-8 h-8 text-slate-400" />
          <p className="text-sm font-semibold text-slate-700">{emptyMessage}</p>
          <p className="text-xs text-slate-500">Source: USAspending.gov dataset pipeline pending initial sync.</p>
        </div>
      ) : (
        <div>{children}</div>
      )}

      {/* Required Data Metadata Footer */}
      {metadata && (
        <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-500">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
            <span>
              <strong>Source:</strong> {metadata.source}
            </span>
            <span>
              <strong>Fiscal Year:</strong> {metadata.fiscalYear}
            </span>
            <span>
              <strong>Data Type:</strong> {metadata.dataType}
            </span>
            <span>
              <strong>Updated:</strong> {metadata.lastUpdated}
            </span>
          </div>

          <Link
            href={metadata.methodologyUrl || '/methodology'}
            className="inline-flex items-center space-x-1 text-blue-600 hover:text-blue-800 font-medium transition-colors"
          >
            <span>Methodology</span>
            <ExternalLink className="w-3 h-3" />
          </Link>
        </div>
      )}
    </div>
  );
}
