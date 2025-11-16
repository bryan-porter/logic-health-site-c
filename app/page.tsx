import { Hero } from "@/components/sections/Hero";
import { Stats } from "@/components/sections/Stats";
import { CTA } from "@/components/sections/CTA";
import FeatureTiles from "@/components/sections/FeatureTiles";
import { Container } from "@/components/ui/Container";
import Link from "next/link";

export default function Home() {
  const stats = [
    { value: "20%", label: "Fewer 30-day readmissions among enrolled high-risk patients" },
    { value: "$40-150", label: "Net monthly revenue per patient from CCM/RPM" },
    { value: "<2 hrs/wk", label: "Provider time to review and sign notes" },
    { value: "1 Partner", label: "One workflow for CCM, RPM, docs, & billing" },
  ];

  return (
    <>
      <Hero
        headline="Scale chronic care without hiring."
        subheadline="Logic Health Management (LogicHM) delivers turnkey Chronic Care Management (CCM) and Remote Patient Monitoring (RPM) for physician practices. We handle enrollment, devices, monitoring, documentation, and billing prep — integrated with your EHR and built for compliance."
        primaryCTA={{
          text: "Schedule a 15-Minute Strategy Call",
          href: "/contact",
        }}
        secondaryCTA={{
          text: "Request Your Personalized ROI Analysis",
          href: "/contact",
        }}
      />

      <Stats stats={stats} />

      {/* Why It Matters */}
      <FeatureTiles
        title="Why It Matters"
        caption="We redesign care so it's compliant, equitable, and financially durable—without adding burden to your clinicians."
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
        description="Whether you're starting fresh or replacing an underperforming vendor, LogicHM stands up a compliant, sustainable program with minimal staff burden."
        buttonText="Schedule a 15-Minute Strategy Call"
        buttonHref="/contact"
        variant="primary"
      />
    </>
  );
}
