import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { CTA } from "@/components/sections/CTA";

export default function PricingPage() {
  return (
    <>
      <PageHeader
        title="Pricing"
        description="Transparent, aligned, and sustainable pricing models for long‑term chronic care programs."
      />

      {/* Principles */}
      <section className="bg-white py-16 md:py-24">
        <Container>
          <h2 className="mb-8 text-3xl font-bold text-neutral-900 md:text-4xl">
            Principles
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-lg bg-neutral-50 p-6">
              <h3 className="mb-4 text-xl font-semibold text-neutral-900">Transparent</h3>
              <p className="text-neutral-700">No hidden fees</p>
            </div>
            <div className="rounded-lg bg-neutral-50 p-6">
              <h3 className="mb-4 text-xl font-semibold text-neutral-900">Aligned</h3>
              <p className="text-neutral-700">Pricing matches outcomes and scale</p>
            </div>
            <div className="rounded-lg bg-neutral-50 p-6">
              <h3 className="mb-4 text-xl font-semibold text-neutral-900">Sustainable</h3>
              <p className="text-neutral-700">Built for long‑term programs, not short pilots</p>
            </div>
          </div>
        </Container>
      </section>

      {/* Common Models */}
      <section className="bg-neutral-50 py-16 md:py-24">
        <Container>
          <h2 className="mb-8 text-3xl font-bold text-neutral-900 md:text-4xl">
            Common Models
          </h2>
          <div className="mx-auto max-w-3xl space-y-6">
            <div className="rounded-lg bg-white p-6 shadow-sm">
              <h3 className="mb-2 text-lg font-semibold text-neutral-900">
                1. Per‑Enrolled‑Patient (PEPM)
              </h3>
              <p className="text-neutral-700">
                Flat monthly rate per active CCM/RPM patient
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-sm">
              <h3 className="mb-2 text-lg font-semibold text-neutral-900">
                2. Performance‑Aligned
              </h3>
              <p className="text-neutral-700">
                Base PEPM + success component tied to adherence or outcomes
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-sm">
              <h3 className="mb-2 text-lg font-semibold text-neutral-900">
                3. Hybrid
              </h3>
              <p className="text-neutral-700">
                Lower PEPM with tiered volume discounts
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* What's Included */}
      <section className="bg-white py-16 md:py-24">
        <Container>
          <h2 className="mb-8 text-3xl font-bold text-neutral-900 md:text-4xl">
            What's Included
          </h2>
          <ul className="mx-auto max-w-3xl space-y-4 text-lg text-neutral-700">
            <li className="flex gap-3">
              <span className="text-primary-600">•</span>
              <span>RN/MA care team for outreach/triage</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary-600">•</span>
              <span>Documentation, time tracking, and monthly summaries</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary-600">•</span>
              <span>Device provisioning and logistics (RPM)</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary-600">•</span>
              <span>Program reporting and quarterly optimization</span>
            </li>
          </ul>
        </Container>
      </section>

      {/* Not Typically Included */}
      <section className="bg-neutral-50 py-16 md:py-24">
        <Container>
          <h2 className="mb-8 text-3xl font-bold text-neutral-900 md:text-4xl">
            Not Typically Included
          </h2>
          <ul className="mx-auto max-w-3xl space-y-4 text-lg text-neutral-700">
            <li className="flex gap-3">
              <span className="text-accent-600">•</span>
              <span>Replacement devices due to loss/damage beyond normal wear</span>
            </li>
            <li className="flex gap-3">
              <span className="text-accent-600">•</span>
              <span>Exceptional custom development or one‑off integrations</span>
            </li>
          </ul>
        </Container>
      </section>

      {/* Getting a Quote */}
      <section className="bg-white py-16 md:py-24">
        <Container>
          <h2 className="mb-8 text-3xl font-bold text-neutral-900 md:text-4xl">
            Getting a Quote
          </h2>
          <div className="mx-auto max-w-3xl">
            <p className="mb-6 text-lg text-neutral-700">
              Pricing depends on panel size, device mix, adherence goals, and EHR scope.
            </p>
            <p className="text-lg text-neutral-700">
              We'll model several scenarios and show sensitivities (adherence, payer mix, code mix).
            </p>
          </div>
        </Container>
      </section>

      <CTA
        headline="Request a Custom Quote"
        description="Get a detailed pricing model based on your panel size, payer mix, and program goals."
        buttonText="Get the ROI Calculator"
        buttonHref="/contact"
        variant="primary"
      />
    </>
  );
}
