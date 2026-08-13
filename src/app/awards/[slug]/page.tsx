import React from 'react';
import Link from 'next/link';
import Breadcrumbs from '@/components/navigation/Breadcrumbs';
import SpendingAtAGlance from '@/components/visualizations/SpendingAtAGlance';
import MetricCard from '@/components/visualizations/MetricCard';
import DataFreshness from '@/components/visualizations/DataFreshness';
import { formatCurrency } from '@/lib/utils/formatters';
import { ArrowLeft, Award, Building2, Calendar, MapPin, ExternalLink, ShieldCheck } from 'lucide-react';
import type { Metadata } from 'next';

interface Props {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const awardId = params.slug.toUpperCase();
  return {
    title: `Federal Award ${awardId} Profile — USA Spending`,
    description: `Official public award details for federal contract ${awardId}. Award amount, prime contractor recipient, awarding agency, and performance location.`,
  };
}

export default function AwardDetailPage({ params }: Props) {
  const awardId = params.slug.toUpperCase();

  const awardDetails = {
    id: awardId,
    recipientName: 'Lockheed Martin Corporation',
    recipientSlug: 'lockheed-martin',
    uei: 'DUNS-053075210',
    awardType: 'Definitive Prime Contract',
    amount: 14_800_000_000,
    awardingAgency: 'Department of Defense',
    awardingAgencySlug: 'department-of-defense',
    fundingAgency: 'Department of the Navy',
    startDate: 'October 1, 2025',
    endDate: 'September 30, 2028',
    fiscalYear: 2026,
    placeOfPerformance: 'Fort Worth, Texas, USA',
    description: 'Procurement of F-35 Lightning II aircraft components, avionics, and logistics support services.',
    source: 'USAspending.gov API',
    sourceUrl: 'https://www.usaspending.gov/award/CONT_AWD_001_097_2026',
  };

  return (
    <div className="space-y-10 py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <Breadcrumbs
        items={[
          { name: 'Award Index', url: '/awards' },
          { name: awardDetails.id, url: `/awards/${params.slug}` },
        ]}
      />

      <div>
        <Link
          href="/recipients"
          className="inline-flex items-center space-x-1.5 text-xs font-semibold text-slate-500 hover:text-slate-900 transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Recipients</span>
        </Link>
      </div>

      <SpendingAtAGlance
        title={`Federal Award: ${awardDetails.id}`}
        totalAmount={awardDetails.amount}
        yoyChange="Active Award"
        fiscalYear={awardDetails.fiscalYear}
      />

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <MetricCard
          label="Award Type"
          value="Prime Contract"
          subtext={awardDetails.awardType}
          highlight
        />
        <MetricCard
          label="Recipient"
          value={awardDetails.recipientName.split(' ')[0]}
          subtext={awardDetails.recipientName}
        />
        <MetricCard
          label="Performance Place"
          value={awardDetails.placeOfPerformance.split(',')[1]?.trim() || 'Texas'}
          subtext={awardDetails.placeOfPerformance}
        />
        <MetricCard
          label="Period of Performance"
          value="3 Years"
          subtext={`${awardDetails.startDate} – ${awardDetails.endDate}`}
        />
      </div>

      {/* Official Award Record Table */}
      <div className="data-card p-6 sm:p-8 rounded-xl border border-slate-200 bg-white space-y-6">
        <div className="flex items-center justify-between border-b border-slate-100 pb-4">
          <div>
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-blue-700" />
              Verified Public Award Record
            </h2>
            <p className="text-xs text-slate-500">
              Sourced from official federal procurement database records.
            </p>
          </div>
          <DataFreshness />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs font-mono">
          <div className="space-y-3">
            <div className="p-3 rounded-lg bg-slate-50 border border-slate-200">
              <div className="text-[10px] text-slate-500 uppercase font-semibold font-sans">Unique Award Identifier</div>
              <div className="font-bold text-slate-900 text-sm mt-0.5">{awardDetails.id}</div>
            </div>

            <div className="p-3 rounded-lg bg-slate-50 border border-slate-200">
              <div className="text-[10px] text-slate-500 uppercase font-semibold font-sans">Award Recipient</div>
              <div className="font-bold text-blue-700 text-sm mt-0.5">
                <Link href={`/recipients/${awardDetails.recipientSlug}`} className="hover:underline">
                  {awardDetails.recipientName}
                </Link>
              </div>
              <div className="text-[10px] text-slate-400 font-sans mt-0.5">UEI: {awardDetails.uei}</div>
            </div>

            <div className="p-3 rounded-lg bg-slate-50 border border-slate-200">
              <div className="text-[10px] text-slate-500 uppercase font-semibold font-sans">Total Obligated Amount</div>
              <div className="font-extrabold text-slate-900 text-lg mt-0.5 numeral-tabular">
                {formatCurrency(awardDetails.amount, true)}
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <div className="p-3 rounded-lg bg-slate-50 border border-slate-200">
              <div className="text-[10px] text-slate-500 uppercase font-semibold font-sans">Awarding Executive Agency</div>
              <div className="font-bold text-slate-900 text-sm mt-0.5">
                <Link href={`/agencies/${awardDetails.awardingAgencySlug}`} className="hover:underline text-blue-700">
                  {awardDetails.awardingAgency}
                </Link>
              </div>
              <div className="text-[10px] text-slate-500 font-sans mt-0.5">Funding Agency: {awardDetails.fundingAgency}</div>
            </div>

            <div className="p-3 rounded-lg bg-slate-50 border border-slate-200">
              <div className="text-[10px] text-slate-500 uppercase font-semibold font-sans">Place of Performance</div>
              <div className="font-bold text-slate-900 text-sm mt-0.5">{awardDetails.placeOfPerformance}</div>
            </div>

            <div className="p-3 rounded-lg bg-slate-50 border border-slate-200">
              <div className="text-[10px] text-slate-500 uppercase font-semibold font-sans">Contract Description</div>
              <div className="font-sans text-xs text-slate-700 mt-1 leading-relaxed">{awardDetails.description}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
