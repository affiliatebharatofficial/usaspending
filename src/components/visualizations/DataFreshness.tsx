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
    <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs font-semibold">
      <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
      <span>Verified Data • Sourced from {sourceName} ({displayDate})</span>
    </div>
  );
}
