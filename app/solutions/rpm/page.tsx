import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { CTA } from "@/components/sections/CTA";

export default function RPMPage() {
  return (
    <>
      <PageHeader
        title="Remote Patient Monitoring (RPM)"
        description="Daily physiologic data reveals deterioration earlier, enabling timely intervention for hypertension, heart failure, COPD, diabetes, and other chronic conditions."
      />

      {/* Devices & Data */}
      <section className="bg-white py-16 md:py-24">
        <Container>
          <h2 className="mb-8 text-3xl font-bold text-neutral-900 md:text-4xl">
            Devices & Data
          </h2>
          <ul className="space-y-4 text-lg text-neutral-700">
            <li className="flex gap-3">
              <span className="text-primary-600">•</span>
              <span>
                Cellular <strong>BP monitors</strong>, <strong>weight scales</strong>, <strong>pulse oximeters</strong>, <strong>glucometers</strong>
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary-600">•</span>
              <span>Cellular first to avoid app pairing friction and "dark devices"</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary-600">•</span>
              <span>Thresholds and alerts configured per diagnosis and provider preference</span>
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
              <h3 className="font-semibold text-neutral-900">99453</h3>
              <p className="mt-2 text-neutral-700">Initial setup and patient education (one-time)</p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-sm">
              <h3 className="font-semibold text-neutral-900">99454</h3>
              <p className="mt-2 text-neutral-700">
                Device supply, provisioning, and data transmission <strong>(requires ≥16 days of data in 30 days)</strong>
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-sm">
              <h3 className="font-semibold text-neutral-900">99457</h3>
              <p className="mt-2 text-neutral-700">First 20 minutes of treatment management per month</p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-sm">
              <h3 className="font-semibold text-neutral-900">99458</h3>
              <p className="mt-2 text-neutral-700">Each additional 20 minutes</p>
            </div>
          </div>

          <div className="mt-8 rounded-lg border-l-4 border-primary-600 bg-primary-50 p-6 mx-auto max-w-3xl">
            <p className="text-sm text-neutral-700">
              RPM time cannot overlap with CCM minutes. Count separately.
            </p>
          </div>
        </Container>
      </section>

      {/* How LogicHM Runs RPM */}
      <section className="bg-white py-16 md:py-24">
        <Container>
          <h2 className="mb-8 text-3xl font-bold text-neutral-900 md:text-4xl">
            How LogicHM Runs RPM
          </h2>
          <div className="mx-auto max-w-3xl">
            <ol className="space-y-6">
              <li className="flex gap-4">
                <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary-600 text-sm font-semibold text-white">1</span>
                <div>
                  <p className="text-neutral-700">Provision and ship cellular kits; confirm receipt and first successful reading</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary-600 text-sm font-semibold text-white">2</span>
                <div>
                  <p className="text-neutral-700">Daily review by RN/MA; protocol-based outreach and coaching</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary-600 text-sm font-semibold text-white">3</span>
                <div>
                  <p className="text-neutral-700">Escalation to providers for out-of-range or trend concerns</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary-600 text-sm font-semibold text-white">4</span>
                <div>
                  <p className="text-neutral-700">EHR documentation and monthly summaries for signature</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary-600 text-sm font-semibold text-white">5</span>
                <div>
                  <p className="text-neutral-700">Denial prevention: 16-day rule adherence, time tracking, one-provider safeguards</p>
                </div>
              </li>
            </ol>
          </div>
        </Container>
      </section>

      {/* Program KPIs */}
      <section className="bg-neutral-50 py-16 md:py-24">
        <Container>
          <h2 className="mb-8 text-3xl font-bold text-neutral-900 md:text-4xl">
            Program KPIs
          </h2>
          <div className="mx-auto max-w-3xl">
            <ul className="space-y-4 text-lg text-neutral-700">
              <li className="flex gap-3">
                <span className="text-accent-600">•</span>
                <span>Transmission adherence rate</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent-600">•</span>
                <span>Time-to-intervention for sustained out-of-range readings</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent-600">•</span>
                <span>Patient retention across 90/180 days</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent-600">•</span>
                <span>Net revenue per enrolled patient</span>
              </li>
            </ul>
          </div>

          <div className="mt-8 rounded-lg border-l-4 border-primary-600 bg-primary-50 p-6 mx-auto max-w-3xl">
            <p className="text-sm text-neutral-700">
              <strong>Disclaimer:</strong> Code requirements and coverage vary. Verify payer policies; this content is not billing advice.
            </p>
          </div>
        </Container>
      </section>

      <CTA
        headline="See RPM Devices & Workflow"
        description="Book a demo to see our cellular devices, alert protocols, and adherence strategies."
        buttonText="Schedule a Demo"
        buttonHref="/contact"
        variant="primary"
      />
    </>
  );
}
