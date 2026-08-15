import React from 'react';
import InfoPageLayout from '@/components/layout/InfoPageLayout';
import JsonLd from '@/components/seo/JsonLd';
import { SITE_CONFIG } from '@/lib/config/site';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: `Terms of Service | USA Spending`,
  description: `Read the Terms of Service governing access and acceptable use of the independent USA Spending visual data explorer platform.`,
  alternates: {
    canonical: 'https://www.usaspending.us/terms',
  },
};

export default function TermsPage() {
  const toc = [
    { id: 'acceptance', title: '1. Acceptance of Terms' },
    { id: 'service-description', title: '2. Service Description' },
    { id: 'no-guarantee', title: '3. No Guarantee or Warranty' },
    { id: 'acceptable-use', title: '4. Acceptable Use Policy' },
    { id: 'intellectual-property', title: '5. Intellectual Property' },
    { id: 'government-data-notice', title: '6. Government Data Rights' },
    { id: 'calculators-notice', title: '7. Calculators & Rate Tools' },
    { id: 'limitation-of-liability', title: '8. Limitation of Liability' },
    { id: 'governing-law', title: '9. Governing Law' },
    { id: 'contact-info', title: '10. Contact Information' },
  ];

  return (
    <InfoPageLayout
      title="Terms of Service"
      subtitle="Terms and conditions governing access and use of USA Spending tools and visualizations."
      breadcrumbName="Terms of Service"
      breadcrumbUrl="/terms"
      toc={toc}
    >
      <JsonLd
        type="TechArticle"
        data={{
          name: 'USA Spending Terms of Service',
          description: 'Official Terms of Service for USA Spending.',
          url: '/terms',
        }}
      />

      <section id="acceptance" className="data-card p-6 sm:p-8 rounded-xl border border-slate-200 bg-white space-y-4">
        <h2 className="text-2xl font-black text-slate-900">1. Acceptance of Terms</h2>
        <p className="text-slate-600 text-sm leading-relaxed">
          By accessing or using USA Spending, you agree to be bound by these Terms of Service. If you do not agree to these terms, you should discontinue use of the website immediately.
        </p>
      </section>

      <section id="service-description" className="data-card p-6 sm:p-8 rounded-xl border border-slate-200 bg-white space-y-4">
        <h2 className="text-2xl font-black text-slate-900">2. Service Description</h2>
        <p className="text-slate-600 text-sm leading-relaxed">
          USA Spending provides independent web-based visual data exploration tools, charts, tables, calculators, and research profiles based on public U.S. government spending datasets.
        </p>
      </section>

      <section id="no-guarantee" className="data-card p-6 sm:p-8 rounded-xl border border-slate-200 bg-white space-y-4">
        <h2 className="text-2xl font-black text-slate-900">3. No Guarantee or Warranty</h2>
        <p className="text-slate-600 text-sm leading-relaxed">
          The service is provided on an "as is" and "as available" basis without warranties of any kind, express or implied. We do not warrant that service will be error-free or uninterrupted.
        </p>
      </section>

      <section id="acceptable-use" className="data-card p-6 sm:p-8 rounded-xl border border-slate-200 bg-white space-y-4">
        <h2 className="text-2xl font-black text-slate-900">4. Acceptable Use Policy</h2>
        <p className="text-slate-600 text-sm leading-relaxed">
          Users agree not to misuse service endpoints, launch denial-of-service attacks, scrape content at unreasonable request rates that disrupt site stability, or misrepresent site content as official government pronouncements.
        </p>
      </section>

      <section id="intellectual-property" className="data-card p-6 sm:p-8 rounded-xl border border-slate-200 bg-white space-y-4">
        <h2 className="text-2xl font-black text-slate-900">5. Intellectual Property</h2>
        <p className="text-slate-600 text-sm leading-relaxed">
          The website architecture, design tokens, software code, custom graphics, and written commentary are protected by copyright. Original public government datasets remain public domain.
        </p>
      </section>

      <section id="government-data-notice" className="data-card p-6 sm:p-8 rounded-xl border border-slate-200 bg-white space-y-4">
        <h2 className="text-2xl font-black text-slate-900">6. Government Data Rights</h2>
        <p className="text-slate-600 text-sm leading-relaxed">
          Government data displayed on this website originates from public government sources (primarily USAspending.gov) and remains subject to applicable public domain policies of the U.S. Government.
        </p>
      </section>

      <section id="calculators-notice" className="data-card p-6 sm:p-8 rounded-xl border border-slate-200 bg-white space-y-4">
        <h2 className="text-2xl font-black text-slate-900">7. Calculators & Rate Tools</h2>
        <p className="text-slate-600 text-sm leading-relaxed">
          Calculators provide mathematical estimates for informational purposes only. Results must not be construed as financial, accounting, tax, or legal advice.
        </p>
      </section>

      <section id="limitation-of-liability" className="data-card p-6 sm:p-8 rounded-xl border border-slate-200 bg-white space-y-4">
        <h2 className="text-2xl font-black text-slate-900">8. Limitation of Liability</h2>
        <p className="text-slate-600 text-sm leading-relaxed">
          To the maximum extent permitted by applicable law, USA Spending and its operators shall not be liable for any direct, indirect, incidental, or consequential damages resulting from site use.
        </p>
      </section>

      <section id="governing-law" className="data-card p-6 sm:p-8 rounded-xl border border-slate-200 bg-white space-y-4">
        <h2 className="text-2xl font-black text-slate-900">9. Governing Law</h2>
        <p className="text-slate-600 text-sm leading-relaxed">
          These Terms shall be governed by and construed in accordance with the laws of the <strong>{SITE_CONFIG.governingLaw}</strong>.
        </p>
      </section>

      <section id="contact-info" className="data-card p-6 sm:p-8 rounded-xl border border-slate-200 bg-white space-y-4">
        <h2 className="text-2xl font-black text-slate-900">10. Contact Information</h2>
        <p className="text-slate-600 text-sm leading-relaxed">
          For questions regarding these Terms of Service, contact:
        </p>
        <div className="p-3 rounded-lg bg-slate-50 border border-slate-200 font-mono text-xs text-blue-900 font-bold">
          {SITE_CONFIG.contactEmail}
        </div>
      </section>
    </InfoPageLayout>
  );
}
