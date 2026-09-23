import React from 'react';
import Link from 'next/link';
import { Flag } from 'lucide-react';

interface ReportDataIssueButtonProps {
  pageUrl?: string;
  dataPoint?: string;
  className?: string;
}

export default function ReportDataIssueButton({
  pageUrl,
  dataPoint,
  className = '',
}: ReportDataIssueButtonProps) {
  const queryParams = new URLSearchParams();
  queryParams.set('subject', 'Data Correction');
  if (pageUrl) queryParams.set('url', pageUrl);
  if (dataPoint) queryParams.set('dataPoint', dataPoint);

  return (
    <Link
      href={`/contact?${queryParams.toString()}`}
      className={`inline-flex items-center gap-1.5 text-xs text-slate-500 hover:text-blue-700 transition-colors ${className}`}
      title="Report a data discrepancy or request correction"
    >
      <Flag className="w-3.5 h-3.5" />
      <span>Report a Data Issue</span>
    </Link>
  );
}
