import Link from "next/link";

import { CTA } from "@/components/sections/CTA";
import FeatureTiles from "@/components/sections/FeatureTiles";
import { Hero } from "@/components/sections/Hero";
import { Stats } from "@/components/sections/Stats";
import { Container } from "@/components/ui/Container";

import type { Metadata } from "next";


export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'https://logichm.com'),
  title: 'Logic Health Management',
  description: 'Compliant CCM & RPM programs… integrated with your EHR.',
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    url: '/',
    title: 'Logic Health Management',
    siteName: 'Logic Health Management',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'Logic Health Management' }],
  },
  twitter: { card: 'summary_large_image' },
};

export default function Home() {
  // CFO Metrics Band
  const cfoMetrics = [
    { value: "$40–$150", label: "Illustrative net monthly revenue per enrolled patient; varies by payer mix and engagement." },
    { value: "< 2 hours/week", label: "Approximate weekly provider time for review and sign-off per program." },
    { value: "1 workflow", label: "Shared operating model used across all participating sites." },
  ];

  return (
    <>
      {/* UPDATED: Hero with new copy targeting MSOs, IPAs, small hospitals, and rural providers */}
      <Hero
        headline={
          <>
            <span className="block text-center">Scale care-management</span>
            <span className="block text-center">Improve outcomes without hiring</span>
          </>
        }
        subheadline="LOGIC designs and runs Chronic Care Management (CCM), Remote Patient Monitoring (RPM), and related programs inside your EHR with audit-ready workflows—built for MSOs, IPAs, small hospitals, and rural providers (including RHCs/FQHCs using G0511)."
        bullets={[
          "Turnkey programs that generate recurring, defensible revenue per enrolled patient.",
          "One standard operating model across sites with consistent workflows, documentation, and QA.",
          "Value-based ready: closes care gaps, delivers measurable outcomes, and supports exec-level reporting.",
          "Compliance built in with HIPAA- and SOC 2-aligned controls and CPOM-sensitive role design.",
        ]}
        primaryCTA={{
          text: "See MSO/IPA ROI",
          href: "/contact?topic=mso-roi",
        }}
        secondaryCTA={{
          text: "RHC/FQHC G0511 game plan",
          href: "/contact?topic=rhc-g0511",
        }}
      />

      {/* UPDATED: CFO Metrics Band */}
      <Stats stats={cfoMetrics} />

      {/* NEW: CFO Metrics Disclaimer */}
      <section className="bg-white py-4">
        <Container>
          <p className="text-center text-xs text-neutral-500 max-w-2xl mx-auto">
            These ranges are illustrative and not a guarantee of reimbursement or financial performance. Always validate assumptions and coverage with your billing team and your payers.
          </p>
        </Container>
      </section>

      {/* NEW: Who We Serve Section */}
      <section className="bg-neutral-50 py-16 md:py-24">
        <Container>
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="text-3xl font-bold text-neutral-900 md:text-4xl">
              Who we serve
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-lg bg-white p-8 shadow-sm">
              <h3 className="text-xl font-semibold text-neutral-900 mb-4">MSOs & IPAs</h3>
              <p className="text-neutral-700">
                Standardized CCM/RPM and care-management across affiliated practices—one shared playbook, consistent documentation, and roll-up reporting for executives.
              </p>
            </div>

            <div className="rounded-lg bg-white p-8 shadow-sm">
              <h3 className="text-xl font-semibold text-neutral-900 mb-4">RHCs, FQHCs & rural providers</h3>
              <p className="text-neutral-700">
                G0511-aligned workflows, shared staffing, and outreach that accounts for access barriers, broadband limitations, and social drivers of health.
              </p>
            </div>

            <div className="rounded-lg bg-white p-8 shadow-sm">
              <h3 className="text-xl font-semibold text-neutral-900 mb-4">Small hospitals & health systems</h3>
              <p className="text-neutral-700">
                ED and inpatient follow-up, transitions of care, and longitudinal outreach that keeps patients connected to ambulatory care and reduces avoidable utilization.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Why It Matters */}
      <FeatureTiles
        title="Why It Matters"
        caption="We redesign care to be compliant, equitable, and financially durable—without adding burden to your clinicians."
      />

      {/* Why Practices Choose LogicHM */}
      <section className="bg-neutral-50 py-16 md:py-24">
        <Container>
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="text-3xl font-bold text-neutral-900 md:text-4xl">
              Why Practices Choose LogicHM
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-lg bg-white p-8 shadow-sm">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary-100">
                <svg className="h-6 w-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-neutral-900">Clinical Excellence</h3>
              <ul className="mt-4 space-y-2 text-neutral-700">
                <li>• U.S.-based RNs/MAs perform structured monthly CCM and daily RPM triage.</li>
                <li>• Protocol-driven outreach surfaces risk earlier to support BP/A1c control and fewer avoidable ED visits.</li>
                <li>• Clear escalation paths and physician sign-off in your EHR.</li>
              </ul>
            </div>

            <div className="rounded-lg bg-white p-8 shadow-sm">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-accent-100">
                <svg className="h-6 w-6 text-accent-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-neutral-900">Financial Impact</h3>
              <ul className="mt-4 space-y-2 text-neutral-700">
                <li>• Consistent capture of CCM (99490, 99439, 99491, 99437) and RPM (99453, 99454, 99457, 99458).</li>
                <li>• Predictable recurring revenue without new FTEs.</li>
                <li>• FQHC/RHC support for G0511 workflows.</li>
              </ul>
            </div>

            <div className="rounded-lg bg-white p-8 shadow-sm">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary-100">
                <svg className="h-6 w-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-neutral-900">Compliance Built-In</h3>
              <ul className="mt-4 space-y-2 text-neutral-700">
                <li>• Audit-ready time logs with CCM/RPM minutes tracked separately.</li>
                <li>• One-provider-per-month safeguards to prevent double billing.</li>
                <li>• HIPAA posture, signed BAA, security controls aligned to SOC 2/HITRUST principles.</li>
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* How It Works Overview */}
      <section className="bg-white py-16 md:py-24">
        <Container>
          <div className="mx-auto max-w-3xl text-center mb-12">
            <h2 className="text-3xl font-bold text-neutral-900 md:text-4xl">
              How It Works
            </h2>
          </div>

          <div className="mx-auto max-w-3xl">
            <ol className="space-y-6">
              <li className="flex gap-4">
                <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary-600 text-sm font-semibold text-white">1</span>
                <div>
                  <h3 className="font-semibold text-neutral-900">Connect your EHR</h3>
                  <p className="mt-1 text-neutral-700">Secure, bidirectional workflows; no duplicate data entry.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary-600 text-sm font-semibold text-white">2</span>
                <div>
                  <h3 className="font-semibold text-neutral-900">Identify & consent</h3>
                  <p className="mt-1 text-neutral-700">Patient eligibility review; documented consent obtained.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary-600 text-sm font-semibold text-white">3</span>
                <div>
                  <h3 className="font-semibold text-neutral-900">Deploy devices (RPM)</h3>
                  <p className="mt-1 text-neutral-700">Cellular kits shipped directly; thresholds configured.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary-600 text-sm font-semibold text-white">4</span>
                <div>
                  <h3 className="font-semibold text-neutral-900">Deliver services</h3>
                  <p className="mt-1 text-neutral-700">Our team runs monthly CCM + daily RPM triage with notes in your EHR.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary-600 text-sm font-semibold text-white">5</span>
                <div>
                  <h3 className="font-semibold text-neutral-900">Review & bill</h3>
                  <p className="mt-1 text-neutral-700">Provider reviews/signs; billing submits clean claims.</p>
                </div>
              </li>
            </ol>

            <div className="mt-8 text-center">
              <Link href="/how-it-works" className="text-primary-600 font-medium hover:text-primary-700">
                See details →
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Trust Signals */}
      <section className="bg-neutral-50 py-12 md:py-16">
        <Container>
          <div className="mx-auto max-w-4xl text-center">
            <div className="flex flex-wrap justify-center gap-8 text-sm text-neutral-600">
              <div className="flex items-center gap-2">
                <svg className="h-5 w-5 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <span>HIPAA program and signed BAA</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="h-5 w-5 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <span>Security controls aligned to SOC 2 Type II practices</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="h-5 w-5 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <span>Audit-ready documentation and time tracking</span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <CTA
        headline="Ready to launch CCM & RPM in the next 30 days?"
        description="Whether you&apos;re starting fresh or replacing an underperforming vendor, LogicHM stands up a compliant, sustainable program with minimal staff burden."
        buttonText="See MSO/IPA ROI"
        buttonHref="/contact?topic=mso-roi"
        variant="primary"
      />
    </>
  );
}
