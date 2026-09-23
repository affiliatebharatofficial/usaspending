import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import InfoPageLayout from '@/components/layout/InfoPageLayout';
import JsonLd from '@/components/seo/JsonLd';
import { SITE_CONFIG } from '@/lib/config/site';
import {
  UserCheck,
  Code2,
  ExternalLink,
  ShieldAlert,
  BookOpen,
  Database,
  Calculator,
  Mail,
  ArrowRight,
  FileText,
  Layers,
  CheckCircle2,
} from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: `Firoz Khan — Maintainer Profile | USA Spending`,
  description: `Factual maintainer profile for Firoz Khan, independent web developer and data visualization developer behind USAspending.us.`,
  alternates: {
    canonical: 'https://www.usaspending.us/about/firoz-khan',
  },
};

export default function FirozKhanProfilePage() {
  const toc = [
    { id: 'about-maintainer', title: '1. About the Maintainer' },
    { id: 'responsibilities', title: '2. Responsibilities & Scope' },
    { id: 'project-purpose', title: '3. Project Purpose & Data Philosophy' },
    { id: 'source-links', title: '4. Data Sources & Limitations' },
    { id: 'professional-links', title: '5. Profiles & Contact' },
    { id: 'project-statement', title: '6. Independent Project Statement' },
  ];

  return (
    <InfoPageLayout
      title="Firoz Khan"
      subtitle="Independent Web Developer & Data Visualization Developer"
      breadcrumbName="Firoz Khan"
      breadcrumbUrl="/about/firoz-khan"
      toc={toc}
    >
      {/* Structured Data: Person */}
      <JsonLd
        type="Person"
        data={{
          name: 'Firoz Khan',
          jobTitle: 'Independent Web Developer & Data Visualization Developer',
          image: 'https://www.usaspending.us/images/firoz-khan.webp',
          url: '/about/firoz-khan',
          sameAs: [
            'https://github.com/fkdigitalmedia',
            'https://www.linkedin.com/in/firoz-khan-1153358a/',
          ],
        }}
      />

      {/* 1. About the Maintainer */}
      <section id="about-maintainer" className="data-card p-6 sm:p-8 rounded-xl border border-slate-200 bg-white space-y-6">
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 border-b border-slate-100 pb-6">
          <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-2xl overflow-hidden shadow-md border-2 border-blue-600/30 flex-shrink-0 bg-slate-900">
            <Image
              src="/images/firoz-khan.webp"
              alt="Firoz Khan - Independent Web Developer & Data Visualization Developer"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="space-y-2 text-center sm:text-left flex-1">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-800 border border-blue-200">
              <UserCheck className="w-3.5 h-3.5 text-blue-700" />
              <span>Independent Developer & Site Maintainer</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900">Firoz Khan</h2>
            <p className="text-xs sm:text-sm text-slate-600 font-medium">
              Web Developer & Data Visualization Developer • Founder & Maintainer of USAspending.us
            </p>
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 pt-1 text-xs">
              <a
                href="https://github.com/fkdigitalmedia"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-slate-700 hover:text-blue-700 font-semibold transition-colors"
              >
                <Code2 className="w-3.5 h-3.5 text-blue-600" />
                <span>github.com/fkdigitalmedia</span>
              </a>
              <span className="text-slate-300">•</span>
              <a
                href="https://www.linkedin.com/in/firoz-khan-1153358a/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-slate-700 hover:text-blue-700 font-semibold transition-colors"
              >
                <ExternalLink className="w-3.5 h-3.5 text-blue-600" />
                <span>LinkedIn Profile</span>
              </a>
            </div>
          </div>
        </div>

        <p className="text-slate-700 text-sm leading-relaxed">
          <strong>Firoz Khan</strong> is an independent web developer and data visualization developer based in India. He built and actively maintains <strong>USAspending.us</strong>, an independent public data research and web visualization platform designed to make public U.S. federal spending datasets clear, structured, and interactive.
        </p>

        <p className="text-slate-600 text-sm leading-relaxed">
          As the sole developer and maintainer, Firoz Khan manages the full software lifecycle of the website—from initial UI component architecture and public API ingestion pipelines to mathematical rate calculators, responsive layout design, and methodology documentation.
        </p>
      </section>

      {/* 2. Responsibilities & Scope */}
      <section id="responsibilities" className="data-card p-6 sm:p-8 rounded-xl border border-slate-200 bg-white space-y-6">
        <h2 className="text-2xl font-black text-slate-900 flex items-center gap-2">
          <Layers className="w-6 h-6 text-blue-700" />
          2. Responsibilities & Scope of Work
        </h2>

        <p className="text-xs text-slate-600 leading-relaxed">
          Firoz Khan is responsible for the overall technical architecture and maintenance of USAspending.us, including the following specific tasks:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 not-prose">
          <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-1.5">
            <div className="flex items-center gap-2 text-blue-900 font-bold text-xs uppercase tracking-wider">
              <Code2 className="w-4 h-4 text-blue-700" />
              <span>Website Development</span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Designing and developing Next.js frontend code, TypeScript data models, layout structures, and responsive CSS styling.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-1.5">
            <div className="flex items-center gap-2 text-blue-900 font-bold text-xs uppercase tracking-wider">
              <Database className="w-4 h-4 text-blue-700" />
              <span>Data & API Integration</span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Ingesting, normalizing, and formatting public REST API datasets provided by USAspending.gov and Treasury Fiscal Data streams.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-1.5">
            <div className="flex items-center gap-2 text-blue-900 font-bold text-xs uppercase tracking-wider">
              <BookOpen className="w-4 h-4 text-blue-700" />
              <span>Interactive Visualizations</span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Building interactive donut charts, historical trend lines, spending clocks, and comparative data tables.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-1.5">
            <div className="flex items-center gap-2 text-blue-900 font-bold text-xs uppercase tracking-wider">
              <Calculator className="w-4 h-4 text-blue-700" />
              <span>Calculator Implementation</span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Programming mathematical models for time-based spending velocity, personal tax allocation, and state per-capita spending.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-1.5">
            <div className="flex items-center gap-2 text-blue-900 font-bold text-xs uppercase tracking-wider">
              <FileText className="w-4 h-4 text-blue-700" />
              <span>Methodology & Documentation</span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Writing transparent explanations of financial data definitions, calculations, outlays, obligations, and data limitations. Read the <Link href="/methodology" className="text-blue-700 font-bold underline hover:text-blue-900">Calculation Methodology & Transparency Guide</Link>.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-1.5">
            <div className="flex items-center gap-2 text-blue-900 font-bold text-xs uppercase tracking-wider">
              <CheckCircle2 className="w-4 h-4 text-blue-700" />
              <span>Website Maintenance</span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Performing regular software updates, bug fixes, accessibility enhancements, performance optimizations, and security patches.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Project Purpose & Data Philosophy */}
      <section id="project-purpose" className="data-card p-6 sm:p-8 rounded-xl border border-slate-200 bg-white space-y-4">
        <h2 className="text-2xl font-black text-slate-900">3. Project Purpose & Data Philosophy</h2>
        <p className="text-slate-600 text-sm leading-relaxed">
          The purpose of USAspending.us is strictly educational and analytical. Raw government financial spreadsheets and multi-gigabyte data dumps can be difficult for general audiences to interpret. This website presents public spending data through clean visual dashboards, categorized breakdowns, and mathematical rate conversions.
        </p>
        <p className="text-slate-600 text-sm leading-relaxed">
          The project adheres to a non-partisan, objective data philosophy: no political opinions, policy advocacy, or partisan commentary are added to the figures. All metrics present published figures as recorded in public federal database records.
        </p>
      </section>

      {/* 4. Data Sources & Limitations Links */}
      <section id="source-links" className="data-card p-6 sm:p-8 rounded-xl border border-slate-200 bg-white space-y-4">
        <h2 className="text-2xl font-black text-slate-900">4. Key Documentation & Internal Links</h2>
        <p className="text-xs text-slate-600 leading-relaxed">
          To ensure transparency, explore the following documentation pages explaining how data is processed and presented on USAspending.us:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 not-prose text-xs font-bold">
          <Link href="/about" className="p-3 rounded-lg bg-slate-50 border border-slate-200 text-blue-900 hover:border-blue-400 flex items-center justify-between">
            <span>About USA Spending Overview</span>
            <ArrowRight className="w-3.5 h-3.5 text-blue-600" />
          </Link>
          <Link href="/methodology" className="p-3 rounded-lg bg-slate-50 border border-slate-200 text-blue-900 hover:border-blue-400 flex items-center justify-between">
            <span>Data Methodology</span>
            <ArrowRight className="w-3.5 h-3.5 text-blue-600" />
          </Link>
          <Link href="/data-sources" className="p-3 rounded-lg bg-slate-50 border border-slate-200 text-blue-900 hover:border-blue-400 flex items-center justify-between">
            <span>Government Data Sources</span>
            <ArrowRight className="w-3.5 h-3.5 text-blue-600" />
          </Link>
          <Link href="/disclaimer" className="p-3 rounded-lg bg-slate-50 border border-slate-200 text-blue-900 hover:border-blue-400 flex items-center justify-between">
            <span>Data Limitations & Legal Disclaimer</span>
            <ArrowRight className="w-3.5 h-3.5 text-blue-600" />
          </Link>
          <Link href="/contact" className="p-3 rounded-lg bg-slate-50 border border-slate-200 text-blue-900 hover:border-blue-400 flex items-center justify-between sm:col-span-2">
            <span>Contact & Feedback Form</span>
            <ArrowRight className="w-3.5 h-3.5 text-blue-600" />
          </Link>
        </div>
      </section>

      {/* 5. Professional Profiles & Contact Options */}
      <section id="professional-links" className="data-card p-6 sm:p-8 rounded-xl border border-slate-200 bg-white space-y-4">
        <h2 className="text-2xl font-black text-slate-900 flex items-center gap-2">
          <UserCheck className="w-6 h-6 text-blue-700" />
          5. Professional Profiles & Contact Information
        </h2>
        <p className="text-slate-600 text-sm leading-relaxed">
          For technical feedback, data correction requests, or web development inquiries, connect via professional profiles or email:
        </p>

        <div className="flex flex-wrap gap-3 pt-2 not-prose">
          <a
            href="https://github.com/fkdigitalmedia"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs transition-colors shadow-sm"
          >
            <Code2 className="w-4 h-4 text-blue-400" />
            <span>GitHub Profile (fkdigitalmedia)</span>
            <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
          </a>
          <a
            href="https://www.linkedin.com/in/firoz-khan-1153358a/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-blue-700 hover:bg-blue-600 text-white font-bold text-xs transition-colors shadow-sm"
          >
            <UserCheck className="w-4 h-4 text-blue-200" />
            <span>LinkedIn Profile (Firoz Khan)</span>
            <ExternalLink className="w-3.5 h-3.5 text-blue-200" />
          </a>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-900 font-bold text-xs transition-colors border border-slate-300"
          >
            <Mail className="w-4 h-4 text-blue-700" />
            <span>Website Contact Form</span>
          </Link>
        </div>

        <div className="pt-2 text-xs text-slate-500 font-mono">
          Direct Contact Email: <span className="font-bold text-blue-900">{SITE_CONFIG.contactEmail}</span>
        </div>
      </section>

      {/* 6. Independent Project Statement */}
      <section id="project-statement" className="data-card p-6 sm:p-8 rounded-xl border border-blue-200 bg-blue-50/50 space-y-3">
        <h2 className="text-xl font-bold text-blue-900 flex items-center gap-2">
          <ShieldAlert className="w-5 h-5 text-blue-700" />
          6. Independent Project Statement
        </h2>
        <p className="text-xs text-slate-700 leading-relaxed">
          USA Spending is an independent data visualization project. It is not affiliated with, operated by, or endorsed by the U.S. Government or USAspending.gov. Firoz Khan is an independent web developer and is not a government employee or government contractor.
        </p>
      </section>
    </InfoPageLayout>
  );
}
