import React from 'react';
import InfoPageLayout from '@/components/layout/InfoPageLayout';
import JsonLd from '@/components/seo/JsonLd';
import { SITE_CONFIG } from '@/lib/config/site';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: `Privacy Policy | USA Spending`,
  description: `Privacy Policy for USA Spending detailing information processing, cookies, technical security measures, and privacy inquiry contacts.`,
};

export default function PrivacyPage() {
  const toc = [
    { id: 'information-collected', title: '1. Information We Collect' },
    { id: 'cookies', title: '2. Cookies & Storage' },
    { id: 'third-party-services', title: '3. Third-Party Services' },
    { id: 'advertising', title: '4. Advertising Policy' },
    { id: 'security', title: '5. Technical Security' },
    { id: 'user-rights', title: '6. User Privacy Rights' },
    { id: 'privacy-contact', title: '7. Privacy Inquiries' },
  ];

  return (
    <InfoPageLayout
      title="Privacy Policy"
      subtitle="Transparent explanation of website usage data, technical security, and privacy practices."
      breadcrumbName="Privacy Policy"
      breadcrumbUrl="/privacy"
      toc={toc}
    >
      <JsonLd
        type="TechArticle"
        data={{
          name: 'USA Spending Privacy Policy',
          description: 'Official Privacy Policy for USA Spending.',
          url: '/privacy',
        }}
      />

      <section id="information-collected" className="data-card p-6 sm:p-8 rounded-xl border border-slate-200 bg-white space-y-4">
        <h2 className="text-2xl font-black text-slate-900">1. Information We Collect</h2>
        <p className="text-slate-600 text-sm leading-relaxed">
          USA Spending does not require account registration or user login. When you browse the website, standard web server logs automatically log non-personal technical data including IP address, user-agent string, page requests, and timestamp.
        </p>
      </section>

      <section id="cookies" className="data-card p-6 sm:p-8 rounded-xl border border-slate-200 bg-white space-y-4">
        <h2 className="text-2xl font-black text-slate-900">2. Cookies & Storage</h2>
        <p className="text-slate-600 text-sm leading-relaxed">
          We use essential technical cookies and browser local storage strictly to store user interface preferences (such as selected fiscal year baselines or dark mode settings).
        </p>
      </section>

      <section id="third-party-services" className="data-card p-6 sm:p-8 rounded-xl border border-slate-200 bg-white space-y-4">
        <h2 className="text-2xl font-black text-slate-900">3. Third-Party Services</h2>
        <p className="text-slate-600 text-sm leading-relaxed">
          The website is hosted on secure cloud infrastructure (Vercel / Next.js) and connects directly to public data endpoints (api.usaspending.gov). No personal browsing histories are sold to third parties.
        </p>
      </section>

      <section id="advertising" className="data-card p-6 sm:p-8 rounded-xl border border-slate-200 bg-white space-y-4">
        <h2 className="text-2xl font-black text-slate-900">4. Advertising Policy</h2>
        <p className="text-slate-600 text-sm leading-relaxed">
          Advertising features may be deployed in the future to support research operations. This privacy policy will be updated prior to deploying any third-party ad networks or cookies.
        </p>
      </section>

      <section id="security" className="data-card p-6 sm:p-8 rounded-xl border border-slate-200 bg-white space-y-4">
        <h2 className="text-2xl font-black text-slate-900">5. Technical Security</h2>
        <p className="text-slate-600 text-sm leading-relaxed">
          All traffic to USA Spending is encrypted via standard HTTPS / Transport Layer Security (TLS). Strict Content Security Policies (CSP) guard against malicious scripts.
        </p>
      </section>

      <section id="user-rights" className="data-card p-6 sm:p-8 rounded-xl border border-slate-200 bg-white space-y-4">
        <h2 className="text-2xl font-black text-slate-900">6. User Privacy Rights</h2>
        <p className="text-slate-600 text-sm leading-relaxed">
          Depending on your jurisdiction, you may have rights regarding your personal data. Because we do not collect personal profiles, browsing on USA Spending remains anonymous.
        </p>
      </section>

      <section id="privacy-contact" className="data-card p-6 sm:p-8 rounded-xl border border-slate-200 bg-white space-y-4">
        <h2 className="text-2xl font-black text-slate-900">7. Privacy Inquiries</h2>
        <p className="text-slate-600 text-sm leading-relaxed">
          For privacy inquiries or compliance questions, contact our privacy team at:
        </p>
        <div className="p-3 rounded-lg bg-slate-50 border border-slate-200 font-mono text-xs text-blue-900 font-bold">
          {SITE_CONFIG.privacyEmail}
        </div>
      </section>
    </InfoPageLayout>
  );
}
