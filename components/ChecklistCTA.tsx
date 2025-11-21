'use client';

import React from 'react';

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
  const base = 'rounded-md border border-gray-200 bg-white shadow-sm';
  const pad = variant === 'banner' ? 'p-6 md:p-8' : 'p-5';
  const layout =
    variant === 'sidebar'
      ? 'flex flex-col gap-3'
      : 'flex flex-col md:flex-row md:items-center md:justify-between gap-4';

  const href = `/api/checklist/pdf?utm_source=${encodeURIComponent(
    utm
  )}&utm_medium=${variant}&utm_campaign=ccm_rpm_checklist`;

  const onClick = () => trackEvent('Checklist Download Click', { location: variant });

  return (
    <section className={`${base} ${pad} ${layout} ${className}`}>
      <div className="space-y-1">
        <h3 className="text-lg font-semibold">CCM/RPM Readiness Checklist (Free PDF)</h3>
        <p className="text-sm text-gray-600">
          Quick-scan checklist to launch or scale compliant CCM & RPM—built for physician practices,{' '}
          community clinics, and <strong>small hospitals / rural facilities (RHCs/FQHCs)</strong>.
        </p>
      </div>
      <div className="flex items-center gap-3">
        <a
          href={href}
          onClick={onClick}
          aria-label="Download CCM/RPM Readiness Checklist PDF"
          className="inline-flex items-center justify-center rounded-md bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          rel="noopener"
        >
          Download PDF
        </a>
        <a
          href="/contact?topic=readiness-consult"
          className="text-sm text-gray-700 underline hover:text-gray-900"
        >
          Book a 30‑min consult
        </a>
      </div>
    </section>
  );
}
