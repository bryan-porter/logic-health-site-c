import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { CTA } from "@/components/sections/CTA";
import ChecklistCTA from "@/components/ChecklistCTA";
import ReimbursementDisclaimer from "@/components/ReimbursementDisclaimer";

export const metadata: Metadata = {
  title: 'Chronic Care Management (CCM)',
  description:
    'Proactive, monthly management for patients with multiple chronic conditions. Improve continuity of care while generating predictable revenue for physician practices, small hospitals, and RHCs/FQHCs.',
  alternates: {
    canonical: '/solutions/ccm',
  },
};

export default function CCMPage() {
  return (
    <>
      <PageHeader
        title="Chronic Care Management (CCM)"
        description="Proactive, monthly management for patients with multiple chronic conditions — improving continuity of care while generating predictable revenue for physician practices, small hospitals, and RHCs/FQHCs."
      />

      <section className="bg-white py-8 md:py-12">
        <Container>
          <ChecklistCTA variant="banner" utm="solutions" />
        </Container>
      </section>

      {/* Eligibility */}
      <section className="bg-white py-16 md:py-24">
        <Container>
          <h2 className="mb-8 text-3xl font-bold text-neutral-900 md:text-4xl">
            Eligibility (High Level)
          </h2>
          <ul className="space-y-4 text-lg text-neutral-700">
            <li className="flex gap-3">
              <span className="text-primary-600">•</span>
              <span>
                ≥ <strong>2 chronic conditions</strong> expected to last ≥12 months (or until death)
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary-600">•</span>
              <span>
                Conditions place the patient at <strong>significant risk</strong> of death, acute exacerbation, or functional decline
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary-600">•</span>
              <span>
                <strong>Documented consent</strong> and a <strong>comprehensive care plan</strong> in the medical record
              </span>
            </li>
          </ul>
        </Container>
      </section>

      {/* CPT Codes */}
      <section className="bg-neutral-50 py-16 md:py-24">
        <Container>
          <h2 className="mb-8 text-3xl font-bold text-neutral-900 md:text-4xl">
            Common CPT Codes (Reference)
          </h2>
          <div className="mx-auto max-w-3xl space-y-4">
            <div className="rounded-lg bg-white p-6 shadow-sm">
              <h3 className="font-semibold text-neutral-900">99490</h3>
              <p className="mt-2 text-neutral-700">First 20 minutes of clinical staff time under general supervision</p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-sm">
              <h3 className="font-semibold text-neutral-900">99439</h3>
              <p className="mt-2 text-neutral-700">Each additional 20 minutes (add-on to 99490)</p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-sm">
              <h3 className="font-semibold text-neutral-900">99491</h3>
              <p className="mt-2 text-neutral-700">60 minutes of physician/APP time personally</p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-sm">
              <h3 className="font-semibold text-neutral-900">99437</h3>
              <p className="mt-2 text-neutral-700">Each additional 30 minutes (add-on to 99491)</p>
            </div>
          </div>

          <div className="mt-8 rounded-lg border-l-4 border-primary-600 bg-primary-50 p-6 mx-auto max-w-3xl">
            <p className="text-sm text-neutral-700">
              Track CCM minutes separately from RPM and other time-based services. Do not double count.
            </p>
          </div>
        </Container>
      </section>

      {/* How LogicHM Runs CCM */}
      <section className="bg-white py-16 md:py-24">
        <Container>
          <h2 className="mb-8 text-3xl font-bold text-neutral-900 md:text-4xl">
            How LogicHM Runs CCM
          </h2>
          <div className="mx-auto max-w-3xl">
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

      {/* Outcomes & Operations */}
      <section className="bg-neutral-50 py-16 md:py-24">
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
          </div>

          <div className="mt-8 rounded-lg border-l-4 border-primary-600 bg-primary-50 p-6">
            <p className="text-sm text-neutral-700">
              <strong>Disclaimer:</strong> Coding and coverage vary by payer and change over time. Confirm current requirements; nothing here is legal advice.
            </p>
          </div>
          <ReimbursementDisclaimer />
        </Container>
      </section>

      <CTA
        headline="Launch CCM with LogicHM"
        description="Start delivering proactive chronic care management without adding staff."
        buttonText="Schedule a Strategy Call"
        buttonHref="/contact"
        variant="primary"
      />
    </>
  );
}
