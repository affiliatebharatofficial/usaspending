'use client';

import React, { useState } from 'react';
import { AwardRecord } from '@/lib/data/spendingData';
import { formatCurrency } from '@/lib/utils/formatters';
import { ChevronLeft, ChevronRight, FileText } from 'lucide-react';

interface Props {
  awards: AwardRecord[];
  pageSize?: number;
}

export default function PaginatedAwardTable({ awards, pageSize = 5 }: Props) {
  const [currentPage, setCurrentPage] = useState(1);

  if (!awards || awards.length === 0) {
    return (
      <div className="p-6 rounded-lg bg-slate-50 text-center text-xs text-slate-500">
        No official award records available for this selection.
      </div>
    );
  }

  const totalPages = Math.ceil(awards.length / pageSize);
  const startIndex = (currentPage - 1) * pageSize;
  const currentAwards = awards.slice(startIndex, startIndex + pageSize);

  return (
    <div className="data-card rounded-xl p-6 sm:p-8 border border-slate-200 bg-white space-y-4">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-3">
        <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
          <FileText className="w-4 h-4 text-blue-700" />
          Official Award Details Table ({awards.length} Verified Records)
        </h3>
        <span className="text-xs text-slate-500 font-mono">
          Page {currentPage} of {totalPages}
        </span>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left text-xs font-mono">
          <thead>
            <tr className="border-b border-slate-200 text-slate-500 font-sans uppercase tracking-wider text-[11px]">
              <th className="pb-3 font-semibold">Award ID</th>
              <th className="pb-3 font-semibold">Agency</th>
              <th className="pb-3 font-semibold">Award Type</th>
              <th className="pb-3 font-semibold text-right">Amount</th>
              <th className="pb-3 font-semibold text-center">Start Date</th>
              <th className="pb-3 font-semibold text-center">End Date</th>
              <th className="pb-3 font-semibold text-center">Fiscal Year</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 text-slate-800">
            {currentAwards.map((item) => (
              <tr key={item.awardId} className="hover:bg-slate-50 font-sans">
                <td className="py-3.5 font-mono font-bold text-blue-900">{item.awardId}</td>
                <td className="py-3.5 text-slate-800 font-medium">{item.agency}</td>
                <td className="py-3.5 text-slate-600 text-[11px]">{item.awardType}</td>
                <td className="py-3.5 text-right font-mono font-extrabold text-slate-900 numeral-tabular">
                  {formatCurrency(item.amount, true)}
                </td>
                <td className="py-3.5 text-center font-mono text-[11px] text-slate-500">{item.startDate}</td>
                <td className="py-3.5 text-center font-mono text-[11px] text-slate-500">{item.endDate}</td>
                <td className="py-3.5 text-center font-mono font-bold text-slate-700">FY{item.fiscalYear}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="flex items-center justify-between pt-3 border-t border-slate-100 text-xs font-semibold">
          <button
            onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
            disabled={currentPage === 1}
            className="inline-flex items-center space-x-1 px-3 py-1.5 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed text-slate-700 transition-colors"
          >
            <ChevronLeft className="w-3.5 h-3.5" />
            <span>Previous</span>
          </button>

          <div className="flex space-x-1 font-mono">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((pg) => (
              <button
                key={pg}
                onClick={() => setCurrentPage(pg)}
                className={`w-7 h-7 rounded text-xs font-bold transition-colors ${
                  pg === currentPage
                    ? 'bg-blue-800 text-white'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {pg}
              </button>
            ))}
          </div>

          <button
            onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="inline-flex items-center space-x-1 px-3 py-1.5 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed text-slate-700 transition-colors"
          >
            <span>Next</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>
      )}
    </div>
  );
}
