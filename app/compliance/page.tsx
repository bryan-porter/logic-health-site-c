import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { CTA } from "@/components/sections/CTA";

export default function CompliancePage() {
  return (
    <>
      <PageHeader
        title="Compliance & Security"
        description="HIPAA-compliant operations with documentation integrity and quality management built in."
      />

      {/* Our Commitments */}
      <section className="bg-white py-16 md:py-24">
        <Container>
          <h2 className="mb-8 text-3xl font-bold text-neutral-900 md:text-4xl">
            Our Commitments
          </h2>
          <div className="mx-auto max-w-3xl space-y-6">
            <div className="rounded-lg border border-neutral-200 p-6">
              <h3 className="mb-2 font-semibold text-neutral-900">HIPAA program & BAA</h3>
              <p className="text-neutral-700">
                Covered‑entity workflows with signed BAAs
              </p>
            </div>
            <div className="rounded-lg border border-neutral-200 p-6">
              <h3 className="mb-2 font-semibold text-neutral-900">Access control</h3>
              <p className="text-neutral-700">
                Least‑privilege roles, audited activity
              </p>
            </div>
            <div className="rounded-lg border border-neutral-200 p-6">
              <h3 className="mb-2 font-semibold text-neutral-900">Data protection</h3>
              <p className="text-neutral-700">
                Encryption in transit and at rest; secure device provisioning
              </p>
            </div>
            <div className="rounded-lg border border-neutral-200 p-6">
              <h3 className="mb-2 font-semibold text-neutral-900">Vendor management</h3>
              <p className="text-neutral-700">
                Risk assessment and oversight for critical suppliers
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Documentation Integrity */}
      <section className="bg-neutral-50 py-16 md:py-24">
        <Container>
          <h2 className="mb-8 text-3xl font-bold text-neutral-900 md:text-4xl">
            Documentation Integrity
          </h2>
          <div className="mx-auto max-w-3xl space-y-6">
            <div className="rounded-lg bg-white p-6 shadow-sm">
              <h3 className="mb-2 font-semibold text-neutral-900">Minutes tracking</h3>
              <p className="text-neutral-700">
                CCM vs RPM separated, never double‑counted
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-sm">
              <h3 className="mb-2 font-semibold text-neutral-900">One‑provider rule</h3>
              <p className="text-neutral-700">
                Safeguards to prevent multiple CCM/RPM billers in the same month
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-sm">
              <h3 className="mb-2 font-semibold text-neutral-900">Audit trail</h3>
              <p className="text-neutral-700">
                Source notes, timestamps, and monthly summaries
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Quality Management */}
      <section className="bg-white py-16 md:py-24">
        <Container>
          <h2 className="mb-8 text-3xl font-bold text-neutral-900 md:text-4xl">
            Quality Management
          </h2>
          <ul className="mx-auto max-w-3xl space-y-4 text-lg text-neutral-700">
            <li className="flex gap-3">
              <span className="text-primary-600">•</span>
              <span>Protocols with clinical leadership oversight</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary-600">•</span>
              <span>Periodic chart audits and remediation</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary-600">•</span>
              <span>Denial monitoring and root‑cause analysis</span>
            </li>
          </ul>
        </Container>
      </section>

      {/* Policies & Training */}
      <section className="bg-neutral-50 py-16 md:py-24">
        <Container>
          <h2 className="mb-8 text-3xl font-bold text-neutral-900 md:text-4xl">
            Policies & Training
          </h2>
          <ul className="mx-auto max-w-3xl space-y-4 text-lg text-neutral-700">
            <li className="flex gap-3">
              <span className="text-primary-600">•</span>
              <span>Workforce privacy/security training</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary-600">•</span>
              <span>Incident response and breach notification procedures</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary-600">•</span>
              <span>Annual policy review cadence</span>
            </li>
          </ul>

          <div className="mt-8 rounded-lg border-l-4 border-primary-600 bg-primary-50 p-6 mx-auto max-w-3xl">
            <p className="text-sm text-neutral-700">
              <strong>Important:</strong> SOC 2/HITRUST refer to control frameworks and assessments. We align our controls accordingly; confirm current attestations during diligence.
            </p>
          </div>
        </Container>
      </section>

      <CTA
        headline="Request a Sample Compliance Packet"
        description="Review our security policies, BAA template, and audit documentation examples."
        buttonText="Schedule a Security Review"
        buttonHref="/contact"
        variant="primary"
      />
    </>
  );
}
