'use client';

import React from 'react';
import { Download } from 'lucide-react';

interface ExportCsvButtonProps {
  filename?: string;
  data: Record<string, any>[];
}

export default function ExportCsvButton({
  filename = 'usa-spending-data.csv',
  data,
}: ExportCsvButtonProps) {
  const handleExport = () => {
    if (!data || data.length === 0) return;

    const headers = Object.keys(data[0]);
    const csvRows = [
      headers.join(','),
      ...data.map((row) =>
        headers
          .map((h) => {
            const val = row[h] !== undefined ? String(row[h]) : '';
            return `"${val.replace(/"/g, '""')}"`;
          })
          .join(',')
      ),
    ];

    const blob = new Blob([csvRows.join('\n')], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', filename);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button
      onClick={handleExport}
      className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-slate-100 border border-slate-300 hover:bg-slate-200 text-slate-800 text-xs font-semibold transition-all"
    >
      <Download className="w-3.5 h-3.5 text-slate-600" />
      <span>Download CSV</span>
    </button>
  );
}
