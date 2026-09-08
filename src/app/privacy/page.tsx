import React from 'react';
import InfoPageLayout from '@/components/layout/InfoPageLayout';
import JsonLd from '@/components/seo/JsonLd';
import { SITE_CONFIG } from '@/lib/config/site';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: `Privacy Policy | USA Spending`,
  description: `Read the privacy policy for USA Spending detailing data handling, Google AdSense third-party cookie disclosures, security, and user rights.`,
  alternates: {
    canonical: 'https://www.usaspending.us/privacy-policy',
  },
};

export default function PrivacyPage() {
  const toc = [
    { id: 'information-collected', title: '1. Information We Collect' },
    { id: 'cookies', title: '2. Cookies & Local Storage' },
    { id: 'adsense-policy', title: '3. Google AdSense & Third-Party Advertising' },
    { id: 'opt-out', title: '4. Advertising Opt-Out Options' },
    { id: 'security', title: '5. Technical Security' },
    { id: 'user-rights', title: '6. User Privacy Rights' },
    { id: 'privacy-contact', title: '7. Privacy Inquiries' },
  ];

  return (
    <InfoPageLayout
      title="Privacy Policy"
      subtitle="Transparent explanation of website data practices, Google AdSense disclosures, and user choices."
      breadcrumbName="Privacy Policy"
      breadcrumbUrl="/privacy-policy"
      toc={toc}
    >
      <JsonLd
        type="TechArticle"
        data={{
          name: 'USA Spending Privacy Policy',
          description: 'Privacy Policy for USA Spending including Google AdSense disclosures.',
          url: '/privacy-policy',
        }}
      />

      <section id="information-collected" className="data-card p-6 sm:p-8 rounded-xl border border-slate-200 bg-white space-y-4">
        <h2 className="text-2xl font-black text-slate-900">1. Information We Collect</h2>
        <p className="text-slate-600 text-sm leading-relaxed">
          USA Spending does not require account registration or user login. When you browse the website, standard web server logs automatically record non-personal technical information, such as IP address, browser type (user-agent), referring pages, and timestamps.
        </p>
      </section>

      <section id="cookies" className="data-card p-6 sm:p-8 rounded-xl border border-slate-200 bg-white space-y-4">
        <h2 className="text-2xl font-black text-slate-900">2. Cookies & Local Storage</h2>
        <p className="text-slate-600 text-sm leading-relaxed">
          We use essential technical cookies and browser local storage strictly to store user interface preferences (such as selected fiscal year baselines or calculator input state).
        </p>
      </section>

      <section id="adsense-policy" className="data-card p-6 sm:p-8 rounded-xl border border-slate-200 bg-white space-y-4">
        <h2 className="text-2xl font-black text-slate-900">3. Google AdSense & Third-Party Advertising Disclosures</h2>
        <p className="text-slate-600 text-sm leading-relaxed">
          We may partner with Google AdSense and third-party advertising vendors to display advertisements on our website.
        </p>
        <ul className="text-xs text-slate-600 space-y-2 list-disc pl-5 leading-relaxed">
          <li>
            <strong>Third-Party Vendors:</strong> Third-party vendors, including Google, use cookies to serve ads based on a user's prior visits to this website or other websites on the Internet.
          </li>
          <li>
            <strong>Advertising Cookies:</strong> Google's use of advertising cookies enables it and its partners to serve relevant advertisements to users based on their browsing activity across websites.
          </li>
          <li>
            <strong>Third-Party Ad Networks:</strong> Other third-party advertising networks or ad servers may also use cookies, web beacons, or tracking technologies to measure ad effectiveness and personalize advertising content.
          </li>
        </ul>
      </section>

      <section id="opt-out" className="data-card p-6 sm:p-8 rounded-xl border border-slate-200 bg-white space-y-4">
        <h2 className="text-2xl font-black text-slate-900">4. Advertising Opt-Out Options</h2>
        <p className="text-slate-600 text-sm leading-relaxed">
          Users have complete control over personalized advertising preferences:
        </p>
        <ul className="text-xs text-slate-600 space-y-2 list-disc pl-5 leading-relaxed">
          <li>
            You may opt out of personalized Google advertising by visiting <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" className="underline font-bold text-blue-700">Google Ads Settings</a>.
          </li>
          <li>
            Alternatively, you can opt out of a third-party vendor's use of cookies for personalized advertising by visiting <a href="https://www.aboutads.info/choices/" target="_blank" rel="noopener noreferrer" className="underline font-bold text-blue-700">www.aboutads.info</a>.
          </li>
        </ul>
      </section>

      <section id="security" className="data-card p-6 sm:p-8 rounded-xl border border-slate-200 bg-white space-y-4">
        <h2 className="text-2xl font-black text-slate-900">5. Technical Security</h2>
        <p className="text-slate-600 text-sm leading-relaxed">
          All traffic to USA Spending is encrypted via standard HTTPS / Transport Layer Security (TLS). Strict Content Security Policies guard against unauthorized script execution.
        </p>
      </section>

      <section id="user-rights" className="data-card p-6 sm:p-8 rounded-xl border border-slate-200 bg-white space-y-4">
        <h2 className="text-2xl font-black text-slate-900">6. User Privacy Rights</h2>
        <p className="text-slate-600 text-sm leading-relaxed">
          Depending on your jurisdiction (such as GDPR or CCPA/CPRA), you have rights regarding your data. Because we do not collect personal user profiles, browsing on USA Spending remains anonymous.
        </p>
      </section>

      <section id="privacy-contact" className="data-card p-6 sm:p-8 rounded-xl border border-slate-200 bg-white space-y-4">
        <h2 className="text-2xl font-black text-slate-900">7. Privacy Inquiries</h2>
        <p className="text-slate-600 text-sm leading-relaxed">
          For privacy inquiries, GDPR/CCPA requests, or compliance questions, contact:
        </p>
        <div className="p-3 rounded-lg bg-slate-50 border border-slate-200 font-mono text-xs text-blue-900 font-bold">
          {SITE_CONFIG.privacyEmail}
        </div>
      </section>
    </InfoPageLayout>
  );
}
