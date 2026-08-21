'use client';

import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import JsonLd from '@/components/seo/JsonLd';

export interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  title?: string;
  subtitle?: string;
  faqs: FAQItem[];
}

export default function FAQSection({
  title = 'Frequently Asked Questions',
  subtitle = 'Verified answers regarding data methodology, calculation baselines, and public records.',
  faqs,
}: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  if (!faqs || faqs.length === 0) return null;

  return (
    <div className="data-card p-6 sm:p-8 rounded-xl border border-slate-200 bg-white space-y-6">
      <JsonLd type="FAQPage" data={faqs} />

      <div className="border-b border-slate-100 pb-4">
        <div className="flex items-center space-x-2">
          <HelpCircle className="w-5 h-5 text-blue-700" />
          <h2 className="text-xl font-bold text-slate-900">{title}</h2>
        </div>
        {subtitle && <p className="text-xs text-slate-500 mt-1">{subtitle}</p>}
      </div>

      <div className="space-y-3">
        {faqs.map((faq, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div
              key={idx}
              className="rounded-lg border border-slate-200 bg-slate-50/50 overflow-hidden transition-all"
            >
              <button
                onClick={() => setOpenIndex(isOpen ? null : idx)}
                className="w-full p-4 text-left font-bold text-sm text-slate-900 flex items-center justify-between hover:bg-slate-100/80 transition-colors"
              >
                <span className="pr-4">{faq.question}</span>
                <ChevronDown
                  className={`w-4 h-4 text-slate-500 flex-shrink-0 transition-transform ${
                    isOpen ? 'rotate-180 text-blue-700' : ''
                  }`}
                />
              </button>

              {isOpen && (
                <div className="px-4 pb-4 text-xs text-slate-600 border-t border-slate-200/60 pt-3 leading-relaxed bg-white">
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
