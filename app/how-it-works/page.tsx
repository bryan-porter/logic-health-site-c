import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { CTA } from "@/components/sections/CTA";

export default function HowItWorksPage() {
  const steps = [
    {
      number: "0",
      title: "Readiness & ROI",
      items: [
        "Panel size and payer mix review",
        "CCM/RPM fit analysis (e.g., HTN, CHF, COPD, DM)",
        "Baseline assumptions → initial ROI estimate",
      ],
    },
    {
      number: "1",
      title: "Connect Your EHR",
      items: [
        "Templates and workflows set up in your environment",
        "Role-based access and PHI minimization",
        "Bidirectional documentation (no duplicate entry)",
      ],
    },
    {
      number: "2",
      title: "Identify & Consent Patients",
      items: [
        "Eligibility rules applied to your panel",
        "Documented consent captured per payer policy",
        "Welcome call and education scripts",
      ],
    },
    {
      number: "3",
      title: "Configure Care Plans & Devices",
      items: [
        "CCM: Care plans, goals, tasks, and monthly cadence",
        "RPM: Thresholds and alert logic; cellular devices provisioned and shipped",
      ],
    },
    {
      number: "4",
      title: "Deliver Services",
      items: [
        "Monthly CCM outreach by RN/MA care team",
        "Daily RPM review with protocol-driven triage",
        "Escalations routed to practice clinicians with clear context",
      ],
    },
    {
      number: "5",
      title: "Document & Track Minutes",
      items: [
        "Time logs with CCM vs RPM separation",
        "One-provider-per-month safeguard",
        "Monthly provider summary for review/signature",
      ],
    },
    {
      number: "6",
      title: "Review, Bill, Improve",
      items: [
        "Providers sign off; billing submits claims",
        "Denial watchlist and root-cause feedback",
        "Program KPIs and quarterly optimization",
      ],
    },
  ];

  return (
    <>
      <PageHeader
        title="How It Works"
        description="From kickoff to first claims in weeks, not months."
      />

      {/* Process Steps */}
      <section className="bg-white py-16 md:py-24">
        <Container>
          <h2 className="mb-12 text-center text-3xl font-bold text-neutral-900 md:text-4xl">
            From Kickoff to First Claims
          </h2>
          <div className="mx-auto max-w-4xl space-y-12">
            {steps.map((step, idx) => (
              <div key={idx} className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-600 text-xl font-bold text-white">
                    {step.number}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="mb-3 text-2xl font-semibold text-neutral-900">
                    {step.title}
                  </h3>
                  <ul className="space-y-2 text-neutral-700">
                    {step.items.map((item, itemIdx) => (
                      <li key={itemIdx} className="flex gap-2">
                        <span className="text-primary-600">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Launch Timeline */}
      <section className="bg-neutral-50 py-16 md:py-24">
        <Container>
          <h2 className="mb-8 text-center text-3xl font-bold text-neutral-900 md:text-4xl">
            Launch Timeline (Typical)
          </h2>
          <div className="mx-auto max-w-3xl">
            <div className="space-y-6">
              <div className="rounded-lg bg-white p-6 shadow-sm">
                <h3 className="font-semibold text-neutral-900">Week 1</h3>
                <p className="mt-2 text-neutral-700">
                  Kickoff, EHR workflows, panel analysis
                </p>
              </div>
              <div className="rounded-lg bg-white p-6 shadow-sm">
                <h3 className="font-semibold text-neutral-900">Week 2</h3>
                <p className="mt-2 text-neutral-700">
                  Consents, device provisioning, pilot cohort live
                </p>
              </div>
              <div className="rounded-lg bg-white p-6 shadow-sm">
                <h3 className="font-semibold text-neutral-900">Weeks 3–4</h3>
                <p className="mt-2 text-neutral-700">
                  Full cohort activation, first claims submitted
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Governance & Quality */}
      <section className="bg-white py-16 md:py-24">
        <Container>
          <h2 className="mb-8 text-center text-3xl font-bold text-neutral-900 md:text-4xl">
            Governance & Quality
          </h2>
          <div className="mx-auto max-w-3xl">
            <ul className="space-y-4 text-lg text-neutral-700">
              <li className="flex gap-3">
                <span className="text-primary-600">•</span>
                <span>Clinical protocols with medical director oversight</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary-600">•</span>
                <span>Documentation QA and periodic chart audits</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary-600">•</span>
                <span>
                  HIPAA program with signed BAA; security controls aligned to SOC 2/HITRUST practices
                </span>
              </li>
            </ul>
          </div>

          <div className="mt-8 rounded-lg border-l-4 border-primary-600 bg-primary-50 p-6 mx-auto max-w-3xl">
            <p className="text-sm text-neutral-700">
              <strong>Note:</strong> Requirements and coding vary by payer. Confirm local policies before launch.
            </p>
          </div>
        </Container>
      </section>

      <CTA
        headline="See a Live Walkthrough"
        description="Book a demo to see our workflows, EHR integrations, and reporting in action."
        buttonText="Schedule a Demo"
        buttonHref="/contact"
        variant="primary"
      />
    </>
  );
}
