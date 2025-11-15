import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { CTA } from "@/components/sections/CTA";

export default function ResourcesPage() {
  return (
    <>
      <PageHeader
        title="Resources"
        description="Checklists, guides, and tools to help you launch and scale CCM/RPM programs."
      />

      {/* Downloads */}
      <section className="bg-white py-16 md:py-24">
        <Container>
          <h2 className="mb-8 text-3xl font-bold text-neutral-900 md:text-4xl">
            Downloads
          </h2>
          <div className="mx-auto max-w-3xl space-y-4">
            <div className="rounded-lg border border-neutral-200 p-6">
              <h3 className="mb-2 font-semibold text-neutral-900">CCM/RPM Readiness Checklist</h3>
              <p className="text-neutral-700">
                Scope, staffing, and payer‑mix quick assessment
              </p>
            </div>
            <div className="rounded-lg border border-neutral-200 p-6">
              <h3 className="mb-2 font-semibold text-neutral-900">ROI Calculator (Spreadsheet)</h3>
              <p className="text-neutral-700">
                Inputs for panel, adherence, and code mix
              </p>
            </div>
            <div className="rounded-lg border border-neutral-200 p-6">
              <h3 className="mb-2 font-semibold text-neutral-900">Sample Consent Language</h3>
              <p className="text-neutral-700">
                CCM and RPM consent templates (edit with counsel)
              </p>
            </div>
            <div className="rounded-lg border border-neutral-200 p-6">
              <h3 className="mb-2 font-semibold text-neutral-900">Coding Quick Sheet</h3>
              <p className="text-neutral-700">
                CCM (99490/99439/99491/99437) and RPM (99453/99454/99457/99458)
              </p>
            </div>
            <div className="rounded-lg border border-neutral-200 p-6">
              <h3 className="mb-2 font-semibold text-neutral-900">Audit‑Ready Documentation Pack</h3>
              <p className="text-neutral-700">
                Example time logs, monthly summaries, policies
              </p>
            </div>
            <div className="rounded-lg border border-neutral-200 p-6">
              <h3 className="mb-2 font-semibold text-neutral-900">Implementation Checklist</h3>
              <p className="text-neutral-700">
                EHR templates, roles, device logistics
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Guides */}
      <section className="bg-neutral-50 py-16 md:py-24">
        <Container>
          <h2 className="mb-8 text-3xl font-bold text-neutral-900 md:text-4xl">
            Guides
          </h2>
          <div className="mx-auto max-w-3xl space-y-4">
            <div className="rounded-lg bg-white p-6 shadow-sm">
              <h3 className="mb-2 font-semibold text-neutral-900">Launching CCM in 30 Days</h3>
              <p className="text-neutral-700">Pilot first, then scale</p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-sm">
              <h3 className="mb-2 font-semibold text-neutral-900">Avoiding "Dark Devices"</h3>
              <p className="text-neutral-700">
                Cellular first, week‑one coaching, adherence nudges
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-sm">
              <h3 className="mb-2 font-semibold text-neutral-900">Denial Prevention</h3>
              <p className="text-neutral-700">
                One‑provider rule, minutes separation, payer policy mapping
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* FAQs */}
      <section className="bg-white py-16 md:py-24">
        <Container>
          <h2 className="mb-8 text-3xl font-bold text-neutral-900 md:text-4xl">
            FAQs
          </h2>
          <div className="mx-auto max-w-3xl space-y-6">
            <div>
              <h3 className="mb-2 text-lg font-semibold text-neutral-900">
                Do we need new FTEs?
              </h3>
              <p className="text-neutral-700">
                No. LogicHM supplies RN/MA care teams. Providers review and sign summaries.
              </p>
            </div>
            <div>
              <h3 className="mb-2 text-lg font-semibold text-neutral-900">
                Which EHRs do you support?
              </h3>
              <p className="text-neutral-700">
                We integrate with leading EHRs via templates and workflows. We'll confirm specifics during scoping.
              </p>
            </div>
            <div>
              <h3 className="mb-2 text-lg font-semibold text-neutral-900">
                What about after‑hours requirements?
              </h3>
              <p className="text-neutral-700">
                We configure coverage consistent with CMS policies and your practice agreement.
              </p>
            </div>
            <div>
              <h3 className="mb-2 text-lg font-semibold text-neutral-900">
                How fast can we launch?
              </h3>
              <p className="text-neutral-700">
                Weeks, not months. Typical timeline is 2–4 weeks depending on EHR and consent logistics.
              </p>
            </div>
            <div>
              <h3 className="mb-2 text-lg font-semibold text-neutral-900">
                How are devices handled?
              </h3>
              <p className="text-neutral-700">
                We provision, ship, and replace cellular kits; we manage returns and spares.
              </p>
            </div>
          </div>

          <div className="mt-8 rounded-lg border-l-4 border-primary-600 bg-primary-50 p-6 mx-auto max-w-3xl">
            <p className="text-sm text-neutral-700">
              <strong>Note:</strong> Templates are examples only. Verify with your compliance counsel and payers.
            </p>
          </div>
        </Container>
      </section>

      <CTA
        headline="Download the Readiness Checklist"
        description="Get our CCM/RPM readiness assessment to see if your practice is ready to scale chronic care management."
        buttonText="Request the ROI Calculator"
        buttonHref="/contact"
        variant="primary"
      />
    </>
  );
}
