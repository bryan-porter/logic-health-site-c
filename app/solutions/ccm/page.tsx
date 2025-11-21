import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { CTA } from "@/components/sections/CTA";
import ChecklistCTA from "@/components/ChecklistCTA";
import ReimbursementDisclaimer from "@/components/ReimbursementDisclaimer";
import Link from "next/link";
import {
  HeartPulse,
  Smartphone,
  LogOut,
} from "lucide-react";

export const metadata: Metadata = {
  title: 'Chronic Care Management (CCM)',
  description:
    'Proactive, monthly management for patients with multiple chronic conditions. Improve continuity of care while generating predictable revenue for physician practices, small hospitals, and RHCs/FQHCs.',
  alternates: {
    canonical: '/solutions/ccm',
  },
};

function ServiceJsonLd() {
  const payload = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Chronic Care Management (CCM)',
    url: 'https://logichm.com/solutions/ccm',
    provider: {
      '@type': 'Organization',
      name: 'Logic Health Management',
      url: 'https://logichm.com',
    },
    areaServed: 'United States',
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(payload) }}
    />
  );
}

export default function CCMPage() {
  const related = [
    {
      title: "Remote Patient Monitoring (RPM)",
      description: "Connected devices + nurse-led monitoring for early risk detection.",
      href: "/solutions/rpm",
      icon: HeartPulse,
    },
    {
      title: "Remote Therapeutic Monitoring (RTM)",
      description: "Behavioral & therapy adherence signals beyond vitals.",
      href: "/contact?program=rtm",
      icon: Smartphone,
    },
    {
      title: "Transitional Care Management (TCM)",
      description: "Post‑discharge coordination to prevent readmissions.",
      href: "/contact?program=tcm",
      icon: LogOut,
    },
  ];

  return (
    <>
      <PageHeader
        title="Chronic Care Management (CCM)"
        description="Proactive, monthly management for patients with multiple chronic conditions — improving continuity of care while generating predictable revenue for physician practices, small hospitals, and RHCs/FQHCs."
      />

      {/* Pays and stands up to audit */}
      <section className="bg-gradient-to-b from-primary-50 to-white py-16 md:py-24">
        <Container>
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-6 text-3xl font-bold text-neutral-900 md:text-4xl">
              Chronic Care Management that pays—and stands up to audit.
            </h2>
            <p className="mb-8 text-lg text-neutral-700">
              Eligibility, consent, care plan, time, and attestation—captured cleanly and signed in your EHR, so CCM is both billable and defensible.
            </p>
            <ul className="space-y-4 text-base text-neutral-700 md:text-lg">
              <li className="flex items-start gap-3">
                <svg className="h-6 w-6 flex-shrink-0 text-primary-600 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>CCM programs designed around CPT 99490, 99439, 99491, and 99437 with clear documentation and supervision rules.</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="h-6 w-6 flex-shrink-0 text-primary-600 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>One-provider-per-month safeguards and workflows that prevent double billing and confusion across sites.</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="h-6 w-6 flex-shrink-0 text-primary-600 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Support for FQHCs and RHCs, including G0511 structures, staffing models, and aligned note types.</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="h-6 w-6 flex-shrink-0 text-primary-600 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Measurement plans that track readmissions, ED use, and care-gap closure for value-based care programs.</span>
              </li>
            </ul>
          </div>
        </Container>
      </section>

      {/* Outcomes & Operations */}
      <section className="bg-white py-16 md:py-24">
        <Container>
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <h2 className="mb-6 text-2xl font-bold text-neutral-900">
                Outcomes We Target
              </h2>
              <ul className="space-y-3 text-neutral-700">
                <li className="flex gap-2">
                  <span className="text-accent-600">•</span>
                  <span>Better adherence and self-management</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-accent-600">•</span>
                  <span>Fewer avoidable ED visits and readmissions</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-accent-600">•</span>
                  <span>Higher patient satisfaction with proactive touchpoints</span>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-2xl font-bold text-neutral-900">
                What to Expect Operationally
              </h2>
              <ul className="space-y-3 text-neutral-700">
                <li className="flex gap-2">
                  <span className="text-primary-600">•</span>
                  <span>Minimal impact on provider schedules</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary-600">•</span>
                  <span>Standardized templates and summaries</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary-600">•</span>
                  <span>Monthly program reporting with KPIs</span>
                </li>
              </ul>
            </div>

            <p className="mt-8 text-sm text-neutral-600 md:col-span-2">
              Medicare policy and payment rates vary by locality and change over time. Examples on this site are illustrative only and do not guarantee coverage or payment. Confirm payer rules and clinical eligibility before billing.
            </p>
          </div>
        </Container>
      </section>

      {/* How LogicHM Runs CCM */}
      <section className="bg-white py-16 md:py-24">
        <Container>
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-8 text-3xl font-bold text-neutral-900 md:text-4xl">
              How LogicHM Runs CCM
            </h2>
            <ol className="space-y-6">
              <li className="flex gap-4">
                <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary-600 text-sm font-semibold text-white">1</span>
                <div>
                  <p className="text-neutral-700">Monthly outreach by U.S.-based RN/MA team</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary-600 text-sm font-semibold text-white">2</span>
                <div>
                  <p className="text-neutral-700">Medication reconciliation, SDOH screening, goal review, coordination tasks</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary-600 text-sm font-semibold text-white">3</span>
                <div>
                  <p className="text-neutral-700">Escalation to provider when clinical thresholds or concerns are met</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary-600 text-sm font-semibold text-white">4</span>
                <div>
                  <p className="text-neutral-700">Audit-ready documentation and time logs in your EHR</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary-600 text-sm font-semibold text-white">5</span>
                <div>
                  <p className="text-neutral-700">Provider reviews/signs the monthly summary; billing submits 99490/99439 or 99491/99437 as appropriate</p>
                </div>
              </li>
            </ol>
          </div>
        </Container>
      </section>

      {/* Billing Integrity and Audit Readiness Callout */}
      <section className="bg-neutral-50 py-16 md:py-24">
        <Container>
          <div className="mx-auto max-w-3xl">
            <div className="rounded-lg border-2 border-primary-200 bg-primary-50 p-8">
              <h3 className="mb-4 text-2xl font-bold text-neutral-900">
                Billing integrity and audit readiness
              </h3>
              <p className="text-base text-neutral-700 leading-relaxed">
                CCM work is tracked with clear timestamps, responsible staff, and program type, so CCM time is cleanly separated from RPM and other services. We surface one-provider-per-month checks, consent status, and attestation prompts inside your EHR, and we can export logs that support internal audits, payer reviews, and compliance inquiries.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* MSO/IPA Subsection */}
      <section className="bg-white py-16 md:py-24">
        <Container>
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-6 text-3xl font-bold text-neutral-900 md:text-4xl">
              For MSOs and IPAs: one CCM model across every practice
            </h2>
            <p className="mb-8 text-lg text-neutral-700">
              LOGIC gives MSOs and IPAs a single CCM operating model that works across all affiliated practices. We standardize eligibility lists, care-plan templates, note types, and time tracking so every site documents CCM the same way. That means cleaner billing files, fewer denials, and roll-up reporting that lets executives see performance by practice, region, or payer.
            </p>
            <ul className="space-y-4 text-base text-neutral-700 md:text-lg">
              <li className="flex items-start gap-3">
                <svg className="h-6 w-6 flex-shrink-0 text-accent-600 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Standardized templates and workflows across all locations.</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="h-6 w-6 flex-shrink-0 text-accent-600 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Centralized training, QA, and audit sampling from a shared playbook.</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="h-6 w-6 flex-shrink-0 text-accent-600 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Roll-up CCM performance views by practice, group, and payer.</span>
              </li>
            </ul>
          </div>
        </Container>
      </section>

      {/* RHC/FQHC & Rural Subsection */}
      <section className="bg-neutral-50 py-16 md:py-24">
        <Container>
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-6 text-3xl font-bold text-neutral-900 md:text-4xl">
              For RHCs, FQHCs, and rural providers: CCM built around G0511
            </h2>
            <p className="mb-8 text-lg text-neutral-700">
              Rural providers, RHCs, and FQHCs need CCM to work under G0511, with limited staff and patients who may face access barriers. LOGIC designs CCM workflows that match your volumes and constraints—shared care teams, phone-first outreach, and documentation that supports G0511 billing without overloading your clinicians.
            </p>
            <ul className="space-y-4 text-base text-neutral-700 md:text-lg">
              <li className="flex items-start gap-3">
                <svg className="h-6 w-6 flex-shrink-0 text-accent-600 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>G0511-aligned scheduling, documentation, and staffing patterns.</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="h-6 w-6 flex-shrink-0 text-accent-600 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Phone-first outreach and follow-up tailored to rural connectivity and access.</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="h-6 w-6 flex-shrink-0 text-accent-600 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Shared CCM resources that support multiple sites without adding local FTEs.</span>
              </li>
            </ul>
          </div>
        </Container>
      </section>

      {/* ChecklistCTA - Moved to bottom */}
      <section className="bg-white py-16 md:py-24">
        <Container>
          <ChecklistCTA variant="banner" utm="solutions" />
          <ReimbursementDisclaimer />
        </Container>
      </section>

      {/* Related programs */}
      <section className="bg-neutral-50 py-16 md:py-24">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-semibold text-neutral-900 md:text-3xl">
              Related programs
            </h2>
            <p className="mt-3 text-neutral-700">
              CCM works best when it is part of a broader care-management engine. LOGIC connects CCM with RPM, RTM, TCM, PCM, BHI, and care-gap analytics so high-risk patients move smoothly between programs instead of falling into silos.
            </p>
          </div>
          <div className="mx-auto mt-10 grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((program) => {
              const Icon = program.icon;
              return (
                <Link
                  key={program.title}
                  href={program.href}
                  className="block h-full rounded-xl border border-neutral-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
                >
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-neutral-200">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <h3 className="text-base font-semibold text-neutral-900">{program.title}</h3>
                  </div>
                  <p className="mt-3 text-sm text-neutral-600">{program.description}</p>
                  <div className="mt-4 text-sm font-medium text-primary-600">
                    Learn more →
                  </div>
                </Link>
              );
            })}
          </div>
        </Container>
      </section>

      <CTA
        headline="Launch CCM with LogicHM"
        description="Start delivering proactive chronic care management without adding staff."
        buttonText="Schedule a Strategy Call"
        buttonHref="/contact"
        variant="primary"
      />
      <ServiceJsonLd />
    </>
  );
}
