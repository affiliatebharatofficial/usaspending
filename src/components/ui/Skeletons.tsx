import React from 'react';
import { AlertTriangle, Database, HelpCircle } from 'lucide-react';

export function ChartSkeleton({ height = 300 }: { height?: number }) {
  return (
    <div
      style={{ height }}
      className="w-full rounded-xl bg-slate-100 animate-pulse flex items-center justify-center border border-slate-200"
    >
      <div className="text-center space-y-2">
        <div className="w-8 h-8 rounded-full bg-slate-200 mx-auto" />
        <div className="w-32 h-3 bg-slate-200 rounded mx-auto" />
      </div>
    </div>
  );
}

export function MetricSkeleton() {
  return (
    <div className="p-5 rounded-xl bg-slate-100 border border-slate-200 animate-pulse space-y-2">
      <div className="w-24 h-3 bg-slate-200 rounded" />
      <div className="w-36 h-7 bg-slate-300 rounded" />
      <div className="w-20 h-2 bg-slate-200 rounded" />
    </div>
  );
}

export function TableSkeleton({ rows = 5 }: { rows?: number }) {
  return (
    <div className="w-full space-y-3 animate-pulse">
      <div className="w-full h-8 bg-slate-200 rounded" />
      {Array.from({ length: rows }).map((_, idx) => (
        <div key={idx} className="w-full h-10 bg-slate-100 rounded" />
      ))}
    </div>
  );
}

export function ErrorNotice({
  message = 'Government data is temporarily unavailable. Displaying last verified dataset.',
}: {
  message?: string;
}) {
  return (
    <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-xs flex items-center space-x-3">
      <AlertTriangle className="w-4 h-4 text-amber-600 flex-shrink-0" />
      <span className="font-semibold">{message}</span>
    </div>
  );
}

export function EmptyState({
  title = 'No verified spending data available',
  description = 'No official government records match your current fiscal selection.',
}: {
  title?: string;
  description?: string;
}) {
  return (
    <div className="p-8 text-center bg-slate-50 rounded-xl border border-slate-200 space-y-3 my-4">
      <Database className="w-8 h-8 text-slate-400 mx-auto" />
      <h4 className="text-sm font-bold text-slate-800">{title}</h4>
      <p className="text-xs text-slate-500 max-w-md mx-auto">{description}</p>
    </div>
  );
}
