'use client';

import React from 'react';
import { ShieldCheck, RefreshCw } from 'lucide-react';

export interface DataFreshnessProps {
  lastUpdated?: string;
  timestamp?: string;
  sourceName?: string;
}

export default function DataFreshness({
  lastUpdated = 'August 2026',
  timestamp,
  sourceName = 'USAspending.gov API',
}: DataFreshnessProps) {
  const displayDate = timestamp || lastUpdated;

  return (
    <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-800 text-xs font-semibold">
      <ShieldCheck className="w-3.5 h-3.5 text-blue-600 flex-shrink-0" />
      <span>Public Government Data • Sourced from {sourceName} ({displayDate})</span>
    </div>
  );
}
