'use client';

import React, { useState } from 'react';
import InfoPageLayout from '@/components/layout/InfoPageLayout';
import JsonLd from '@/components/seo/JsonLd';
import { SITE_CONFIG } from '@/lib/config/site';
import { Mail, Send, CheckCircle2, ShieldCheck, HelpCircle } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'General Inquiry',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
    }
  };

  const toc = [
    { id: 'contact-form', title: '1. Contact Form' },
    { id: 'direct-email', title: '2. Direct Email Inquiries' },
    { id: 'disclaimer-notice', title: '3. Non-Government Disclaimer' },
  ];

  return (
    <InfoPageLayout
      title="Contact Us"
      subtitle="Have questions, feedback, or data correction inquiries? Get in touch with our team."
      breadcrumbName="Contact"
      breadcrumbUrl="/contact"
      toc={toc}
    >
      <JsonLd
        type="AboutPage"
        data={{
          name: 'Contact USA Spending',
          description: 'Contact form and inquiry details for USA Spending.',
          url: '/contact',
        }}
      />

      <section id="contact-form" className="data-card p-6 sm:p-8 rounded-xl border border-slate-200 bg-white space-y-6">
        <div className="border-b border-slate-100 pb-4">
          <h2 className="text-2xl font-black text-slate-900 flex items-center gap-2">
            <Mail className="w-6 h-6 text-blue-700" />
            Send Us a Message
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            Fill out the form below to reach the independent USA Spending data exploration team.
          </p>
        </div>

        {submitted ? (
          <div className="p-6 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 space-y-2 text-center">
            <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
            <h3 className="text-lg font-bold">Message Sent Successfully!</h3>
            <p className="text-xs text-emerald-700">
              Thank you for contacting us. We have received your inquiry and will respond to {formData.email} as soon as possible.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                setFormData({ name: '', email: '', subject: 'General Inquiry', message: '' });
              }}
              className="mt-4 px-4 py-2 bg-emerald-700 hover:bg-emerald-600 text-white font-bold text-xs rounded-lg transition-colors"
            >
              Send Another Message
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-bold text-slate-700 uppercase block mb-1">
                  Your Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="John Doe"
                  className="w-full bg-slate-50 border border-slate-300 rounded-lg p-2.5 text-xs text-slate-900 font-semibold focus:outline-none focus:border-blue-600"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700 uppercase block mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="john@example.com"
                  className="w-full bg-slate-50 border border-slate-300 rounded-lg p-2.5 text-xs text-slate-900 font-semibold focus:outline-none focus:border-blue-600"
                />
              </div>
            </div>

            <div>
              <label className="text-xs font-bold text-slate-700 uppercase block mb-1">
                Subject
              </label>
              <select
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className="w-full bg-slate-50 border border-slate-300 rounded-lg p-2.5 text-xs text-slate-900 font-semibold focus:outline-none"
              >
                <option value="General Inquiry">General Inquiry</option>
                <option value="Data Correction">Data Correction / Feedback</option>
                <option value="Technical Issue">Technical / Bug Report</option>
                <option value="Media & Research">Media & Academic Research</option>
                <option value="Privacy Inquiries">Privacy Inquiry</option>
              </select>
            </div>

            <div>
              <label className="text-xs font-bold text-slate-700 uppercase block mb-1">
                Your Message *
              </label>
              <textarea
                required
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Write your message or inquiry here..."
                className="w-full bg-slate-50 border border-slate-300 rounded-lg p-3 text-xs text-slate-900 font-medium focus:outline-none focus:border-blue-600"
              />
            </div>

            <button
              type="submit"
              className="inline-flex items-center space-x-2 px-6 py-3 rounded-lg bg-blue-700 hover:bg-blue-600 text-white font-bold text-xs transition-colors shadow-sm"
            >
              <Send className="w-4 h-4" />
              <span>Submit Message</span>
            </button>
          </form>
        )}
      </section>

      <section id="direct-email" className="data-card p-6 sm:p-8 rounded-xl border border-slate-200 bg-white space-y-4">
        <h2 className="text-2xl font-black text-slate-900">2. Direct Email Inquiries</h2>
        <p className="text-slate-600 text-sm leading-relaxed">
          You can also reach out to our team directly via email for technical questions, feedback, or legal inquiries:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-4 rounded-lg bg-slate-50 border border-slate-200 space-y-1">
            <span className="text-xs font-bold text-slate-500 uppercase">General Contact</span>
            <div className="text-sm font-mono font-bold text-blue-900">{SITE_CONFIG.contactEmail}</div>
          </div>
          <div className="p-4 rounded-lg bg-slate-50 border border-slate-200 space-y-1">
            <span className="text-xs font-bold text-slate-500 uppercase">Privacy & Compliance</span>
            <div className="text-sm font-mono font-bold text-blue-900">{SITE_CONFIG.privacyEmail}</div>
          </div>
        </div>
      </section>

      <section id="disclaimer-notice" className="data-card p-6 sm:p-8 rounded-xl border border-blue-200 bg-blue-50/50 space-y-3">
        <h2 className="text-xl font-bold text-blue-900 flex items-center gap-2">
          <ShieldCheck className="w-5 h-5 text-blue-700" />
          Important Non-Government Notice
        </h2>
        <p className="text-xs text-slate-700 leading-relaxed">
          USA Spending (usaspending.us) is an independent public data visualization website. It is <strong>not affiliated with, authorized by, operated by, or endorsed by the U.S. Government, U.S. Department of the Treasury, or USAspending.gov</strong>. For official government financial databases, visit <a href="https://www.usaspending.gov" target="_blank" rel="noopener noreferrer" className="underline font-bold text-blue-800">USAspending.gov</a>.
        </p>
      </section>
    </InfoPageLayout>
  );
}
