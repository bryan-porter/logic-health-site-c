import { Hero } from "@/components/sections/Hero";
import { Stats } from "@/components/sections/Stats";
import { CTA } from "@/components/sections/CTA";
import { Container } from "@/components/ui/Container";

export default function Home() {
  const stats = [
    { value: "23%", label: "Reduction in 30-day readmissions" },
    { value: "$42-84", label: "Monthly revenue per CCM patient" },
    { value: "500+", label: "Physician practices served" },
    { value: "< 2 hrs", label: "Weekly staff time required" },
  ];

  return (
    <>
      <Hero
        headline="Scale Chronic Care Without Hiring"
        subheadline="LogicHM delivers turnkey CCM & RPM programs — from patient enrollment to billing — fully integrated with your EHR and built for compliance."
        primaryCTA={{
          text: "Schedule Strategy Call",
          href: "/contact",
        }}
        secondaryCTA={{
          text: "See How It Works",
          href: "/how-it-works",
        }}
      />

      <Stats stats={stats} />

      {/* Value Proposition Section */}
      <section className="bg-neutral-50 py-16 md:py-24">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-neutral-900 md:text-4xl">
              Proactive Chronic Care, Zero Staffing Burden
            </h2>
            <p className="mt-6 text-lg text-neutral-700">
              Your practice gets predictable recurring revenue from CCM & RPM codes
              (99490, 99439, 99491, 99457, 99458) while our U.S.-based clinical team
              handles patient outreach, device management, care coordination, and
              audit-ready documentation.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            <div className="rounded-lg bg-white p-8 shadow-sm">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary-100">
                <svg className="h-6 w-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-neutral-900">Clinical Excellence</h3>
              <p className="mt-4 text-neutral-700">
                RN/MA care teams follow evidence-based protocols. Earlier intervention
                on BP, A1c, and medication adherence improves outcomes and reduces readmissions.
              </p>
            </div>

            <div className="rounded-lg bg-white p-8 shadow-sm">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-accent-100">
                <svg className="h-6 w-6 text-accent-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-neutral-900">Financial Impact</h3>
              <p className="mt-4 text-neutral-700">
                Add $15-40K monthly recurring revenue per provider. Clean billing,
                transparent pricing, and RHC/FQHC-compatible models ensure maximum reimbursement.
              </p>
            </div>

            <div className="rounded-lg bg-white p-8 shadow-sm">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary-100">
                <svg className="h-6 w-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-neutral-900">Compliance Built-In</h3>
              <p className="mt-4 text-neutral-700">
                HIPAA, SOC 2, BAA included. Automated time tracking, separate CCM/RPM
                documentation, and one-provider-per-month safeguards keep you audit-ready.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <CTA
        headline="Ready to Launch CCM & RPM in 30 Days?"
        description="Schedule a 15-minute strategy call to see if LogicHM is right for your practice."
        buttonText="Schedule Your Call"
        buttonHref="/contact"
        variant="primary"
      />
    </>
  );
}
