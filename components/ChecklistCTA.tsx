'use client';

import React, { useState } from 'react';

import { trackEvent } from '@/lib/analytics';

type Variant = 'inline' | 'sidebar' | 'banner';

export default function ChecklistCTA({
  variant = 'inline',
  className = '',
  utm = 'site_cta',
}: {
  variant?: Variant;
  className?: string;
  utm?: string;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [canDownload, setCanDownload] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const base = 'rounded-md border border-gray-200 bg-white shadow-sm';
  const pad = variant === 'banner' ? 'p-6 md:p-8' : 'p-5';
  const layout =
    variant === 'sidebar'
      ? 'flex flex-col gap-3'
      : 'flex flex-col md:flex-row md:items-center md:justify-between gap-4';

  const CHECKLIST_PDF_HREF = `/api/checklist/pdf?utm_source=${encodeURIComponent(
    utm
  )}&utm_medium=${variant}&utm_campaign=ccm_rpm_checklist`;

  const handleButtonClick = () => {
    trackEvent('Checklist Download Click', { location: variant });
    setIsOpen(true);
  };

  return (
    <>
      <section className={`${base} ${pad} ${layout} ${className}`}>
        <div className="space-y-1">
          <h3 className="text-lg font-semibold">CCM/RPM Readiness Checklist (Free PDF)</h3>
          <p className="text-sm text-gray-600">
            Quick-scan checklist to launch or scale compliant CCM & RPM—built for physician practices,{' '}
            community clinics, and <strong>small hospitals / rural facilities (RHCs/FQHCs)</strong>.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={handleButtonClick}
            aria-label="Download CCM/RPM Readiness Checklist PDF"
            className="inline-flex items-center justify-center rounded-md bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Download PDF
          </button>
          <a
            href="/contact?topic=readiness-consult"
            className="text-sm text-gray-700 underline hover:text-gray-900"
          >
            Book a 30‑min consult
          </a>
        </div>
      </section>

      {/* Email gate modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div
            className="w-full max-w-md rounded-lg bg-white p-6 shadow-xl"
            role="dialog"
            aria-modal="true"
          >
            <div className="flex items-start justify-between">
              <h2 className="text-base font-semibold text-neutral-900">
                Get the CCM/RPM Readiness Checklist
              </h2>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="ml-3 text-sm text-neutral-500 hover:text-neutral-700"
                aria-label="Close"
              >
                ✕
              </button>
            </div>

            {!canDownload ? (
              <form
                className="mt-4 space-y-3"
                onSubmit={async (e) => {
                  e.preventDefault();
                  setError(null);

                  if (!email || !email.includes('@')) {
                    setError('Please enter a valid email address.');
                    return;
                  }

                  try {
                    setIsSubmitting(true);
                    await fetch('/api/checklist-lead', {
                      method: 'POST',
                      headers: { 'Content-Type': 'application/json' },
                      body: JSON.stringify({
                        email,
                        source: 'ccm-rpm-readiness-checklist',
                        variant,
                      }),
                    });
                    setCanDownload(true);
                    trackEvent('Checklist Email Submitted', { location: variant, email });
                  } catch (err) {
                    // Fail open: allow download if tracking fails
                    setCanDownload(true);
                  } finally {
                    setIsSubmitting(false);
                  }
                }}
              >
                <label className="block text-sm font-medium text-neutral-900">
                  Work email
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-1 block w-full rounded-md border border-neutral-300 px-3 py-2 text-sm text-neutral-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="you@organization.com"
                />
                {error && (
                  <p className="text-xs text-red-600">
                    {error}
                  </p>
                )}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="mt-2 inline-flex w-full items-center justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-medium text-white hover:bg-indigo-700 disabled:opacity-60"
                >
                  {isSubmitting ? 'Sending...' : 'Email me the checklist link'}
                </button>
                <p className="mt-2 text-[11px] leading-4 text-neutral-500">
                  We&apos;ll send you the checklist and may follow up about CCM/RPM programs.
                  You can unsubscribe at any time.
                </p>
              </form>
            ) : (
              <div className="mt-4 space-y-3">
                <p className="text-sm text-neutral-700">
                  Thanks&mdash;you can download the checklist now.
                </p>
                <a
                  href={CHECKLIST_PDF_HREF}
                  download
                  className="inline-flex w-full items-center justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-medium text-white hover:bg-indigo-700"
                  onClick={() => trackEvent('Checklist PDF Downloaded', { location: variant, email })}
                >
                  Download PDF
                </a>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Fallback for non-JS environments */}
      <noscript>
        <a
          href={CHECKLIST_PDF_HREF}
          className="inline-flex items-center justify-center rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white"
        >
          Download PDF
        </a>
      </noscript>
    </>
  );
}
