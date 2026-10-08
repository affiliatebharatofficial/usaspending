import React from 'react';
import Link from 'next/link';
import { CalendarDays, Clock, Tag, ArrowRight, Lightbulb, ExternalLink } from 'lucide-react';
import Breadcrumbs from '@/components/navigation/Breadcrumbs';
import FAQSection from '@/components/common/FAQSection';
import JsonLd from '@/components/seo/JsonLd';
import ArticleChart from '@/components/blog/ArticleChart';
import type { ArticleData } from '@/lib/blog/types';

function formatDate(iso: string): string {
  const [y, m, d] = iso.split('-').map(Number);
  return new Date(y, m - 1, d).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default function ArticleView({
  article,
  related,
}: {
  article: ArticleData;
  related: ArticleData[];
}) {
  const calloutStyles: Record<string, string> = {
    info: 'border-blue-200 bg-blue-50 text-blue-900',
    tip: 'border-emerald-200 bg-emerald-50 text-emerald-900',
    warning: 'border-amber-200 bg-amber-50 text-amber-900',
  };

  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      <Breadcrumbs
        items={[
          { name: 'Blog', url: '/blog' },
          { name: article.title, url: `/blog/${article.slug}` },
        ]}
      />

      <JsonLd
        type="TechArticle"
        data={{
          headline: article.title,
          description: article.description,
          datePublished: article.datePublished,
          dateModified: article.dateModified,
          url: `https://www.usaspending.us/blog/${article.slug}`,
        }}
      />

      {/* Header */}
      <header className="mt-6 space-y-4">
        <div className="flex flex-wrap items-center gap-3 text-xs">
          <span className="inline-flex items-center gap-1 rounded-full bg-blue-100 px-3 py-1 font-semibold text-blue-800">
            <Tag className="w-3 h-3" /> {article.category}
          </span>
          <span className="inline-flex items-center gap-1 text-slate-500">
            <CalendarDays className="w-3.5 h-3.5" /> {formatDate(article.datePublished)}
          </span>
          <span className="inline-flex items-center gap-1 text-slate-500">
            <Clock className="w-3.5 h-3.5" /> {article.readingTime}
          </span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
          {article.title}
        </h1>
        <p className="text-base text-slate-600 leading-relaxed">{article.description}</p>
      </header>

      {/* Quick takeaways */}
      <div className="mt-8 rounded-xl border border-blue-200 bg-blue-50/60 p-5 sm:p-6">
        <h2 className="text-sm font-bold uppercase tracking-wide text-blue-900 flex items-center gap-2 mb-3">
          <Lightbulb className="w-4 h-4" /> Key takeaways
        </h2>
        <ul className="space-y-2">
          {article.quickTakeaways.map((t, i) => (
            <li key={i} className="text-sm text-slate-700 leading-relaxed">
              <strong className="text-slate-900">{t.label}:</strong> {t.text}
            </li>
          ))}
        </ul>
      </div>

      {/* Table of contents */}
      <nav className="mt-8 rounded-xl border border-slate-200 bg-white p-5 sm:p-6">
        <h2 className="text-sm font-bold uppercase tracking-wide text-slate-500 mb-3">
          In this article
        </h2>
        <ol className="space-y-1.5">
          {article.sections.map((s, i) => (
            <li key={s.id}>
              <a href={`#${s.id}`} className="text-sm text-blue-700 hover:underline">
                {i + 1}. {s.heading}
              </a>
            </li>
          ))}
        </ol>
      </nav>

      {/* Body */}
      <div className="mt-8 space-y-10">
        {article.sections.map((section) => (
          <section key={section.id} id={section.id} className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">{section.heading}</h2>
            <div className="space-y-4">
              {section.paragraphs.map((p, i) => (
                <p key={i} className="text-[15px] text-slate-700 leading-relaxed">
                  {p}
                </p>
              ))}
            </div>
            {section.bullets && (
              <ul className="mt-4 space-y-2">
                {section.bullets.map((b, i) => (
                  <li key={i} className="text-[15px] text-slate-700 leading-relaxed flex gap-2">
                    <span className="text-blue-700 font-bold mt-0.5">•</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            )}
            {section.callout && (
              <div className={`mt-4 rounded-xl border p-4 text-sm leading-relaxed ${calloutStyles[section.callout.type]}`}>
                {section.callout.text}
              </div>
            )}
            {section.chart && <ArticleChart chart={section.chart} />}
          </section>
        ))}
      </div>

      {/* FAQs */}
      <div className="mt-12">
        <FAQSection
          title="Frequently asked questions"
          subtitle="Quick answers about the numbers in this article."
          faqs={article.faqs}
        />
      </div>

      {/* Sources */}
      <div className="mt-10 rounded-xl border border-slate-200 bg-white p-5 sm:p-6">
        <h2 className="text-sm font-bold uppercase tracking-wide text-slate-500 mb-3">Sources</h2>
        <ul className="space-y-2">
          {article.sources.map((s, i) => (
            <li key={i}>
              <a
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-blue-700 hover:underline inline-flex items-center gap-1"
              >
                {s.name} <ExternalLink className="w-3 h-3" />
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Related */}
      {related.length > 0 && (
        <div className="mt-10">
          <h2 className="text-xl font-bold text-slate-900 mb-4">Related articles</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {related.map((r) => (
              <Link
                key={r.slug}
                href={`/blog/${r.slug}`}
                className="rounded-xl border border-slate-200 bg-white p-5 hover:border-blue-300 hover:shadow-sm transition group"
              >
                <div className="text-xs font-semibold text-blue-700 mb-1">{r.category}</div>
                <div className="font-bold text-slate-900 group-hover:text-blue-800 leading-snug">
                  {r.title}
                </div>
                <div className="text-xs text-slate-500 mt-2 inline-flex items-center gap-1">
                  Read article <ArrowRight className="w-3 h-3" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
