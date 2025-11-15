import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { CTA } from "@/components/sections/CTA";

export default function WhyOutsourcePage() {
  return (
    <>
      <PageHeader
        title="Why Outsource"
        description="Because your team is already stretched. CCM/RPM succeed when they're run like a service line — consistent outreach, daily monitoring, meticulous documentation, and clean billing — not an afterthought between visits."
      />

      {/* In-House Challenges */}
      <section className="bg-white py-16 md:py-24">
        <Container>
          <h2 className="text-3xl font-bold text-neutral-900 md:text-4xl">
            In-House Challenges
          </h2>
          <ul className="mt-8 space-y-4 text-lg text-neutral-700">
            <li className="flex gap-3">
              <span className="text-primary-600">•</span>
              <div>
                <strong>Hiring & training:</strong> Recruiting RNs/MAs for outreach/triage adds fixed cost and turnover risk.
              </div>
            </li>
            <li className="flex gap-3">
              <span className="text-primary-600">•</span>
              <div>
                <strong>Operational complexity:</strong> Panel identification, consent, device logistics, time tracking, and QA require SOPs and tooling.
              </div>
            </li>
            <li className="flex gap-3">
              <span className="text-primary-600">•</span>
              <div>
                <strong>EHR friction:</strong> Manual notes and duplicate data entry lead to gaps and denials.
              </div>
            </li>
            <li className="flex gap-3">
              <span className="text-primary-600">•</span>
              <div>
                <strong>Compliance risk:</strong> Minutes must be counted correctly; CCM and RPM time cannot overlap.
              </div>
            </li>
            <li className="flex gap-3">
              <span className="text-primary-600">•</span>
              <div>
                <strong>Device wastage (RPM):</strong> "Dark devices" erode ROI if adherence isn't actively managed.
              </div>
            </li>
          </ul>
        </Container>
      </section>

      {/* What Outsourcing Delivers */}
      <section className="bg-neutral-50 py-16 md:py-24">
        <Container>
          <h2 className="text-3xl font-bold text-neutral-900 md:text-4xl">
            What Outsourcing to LogicHM Delivers
          </h2>
          <ul className="mt-8 space-y-4 text-lg text-neutral-700">
            <li className="flex gap-3">
              <span className="text-accent-600">•</span>
              <div>
                <strong>Speed to value:</strong> Launch in weeks, not quarters; we bring the playbooks and staff.
              </div>
            </li>
            <li className="flex gap-3">
              <span className="text-accent-600">•</span>
              <div>
                <strong>Variable cost structure:</strong> Scale up or down without adding FTEs.
              </div>
            </li>
            <li className="flex gap-3">
              <span className="text-accent-600">•</span>
              <div>
                <strong>Documentation discipline:</strong> Audit-ready notes, minutes, and monthly summaries.
              </div>
            </li>
            <li className="flex gap-3">
              <span className="text-accent-600">•</span>
              <div>
                <strong>Denial prevention:</strong> One-provider-per-month safeguards; clear payer-specific rules.
              </div>
            </li>
            <li className="flex gap-3">
              <span className="text-accent-600">•</span>
              <div>
                <strong>Patient adherence:</strong> Proactive follow-up to keep RPM transmissions and CCM minutes on track.
              </div>
            </li>
          </ul>
        </Container>
      </section>

      {/* Cost of Ownership */}
      <section className="bg-white py-16 md:py-24">
        <Container>
          <h2 className="mb-8 text-3xl font-bold text-neutral-900 md:text-4xl">
            Cost-of-Ownership Snapshot
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-left">
              <thead>
                <tr className="border-b-2 border-neutral-300">
                  <th className="pb-4 pr-4 font-semibold text-neutral-900">Item</th>
                  <th className="pb-4 pr-4 font-semibold text-neutral-900">In-House (Typical)</th>
                  <th className="pb-4 font-semibold text-neutral-900">LogicHM (Typical)</th>
                </tr>
              </thead>
              <tbody className="text-neutral-700">
                <tr className="border-b border-neutral-200">
                  <td className="py-4 pr-4">Clinical labor (RN/MA)</td>
                  <td className="py-4 pr-4">Fixed FTEs + benefits</td>
                  <td className="py-4">Included in service</td>
                </tr>
                <tr className="border-b border-neutral-200">
                  <td className="py-4 pr-4">Training & SOPs</td>
                  <td className="py-4 pr-4">Build and maintain internally</td>
                  <td className="py-4">Included (proven playbooks)</td>
                </tr>
                <tr className="border-b border-neutral-200">
                  <td className="py-4 pr-4">Device logistics (RPM)</td>
                  <td className="py-4 pr-4">Source, ship, replace</td>
                  <td className="py-4">Included (cellular kits)</td>
                </tr>
                <tr className="border-b border-neutral-200">
                  <td className="py-4 pr-4">Minutes tracking & QA</td>
                  <td className="py-4 pr-4">Build tooling manually</td>
                  <td className="py-4">Included (audit-ready)</td>
                </tr>
                <tr className="border-b border-neutral-200">
                  <td className="py-4 pr-4">EHR templates/integration</td>
                  <td className="py-4 pr-4">Customize, maintain</td>
                  <td className="py-4">Provided & maintained</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-6 text-sm italic text-neutral-600">
            *Exact pricing varies by scope and volume.
          </p>
        </Container>
      </section>

      {/* What You Keep vs What We Do */}
      <section className="bg-neutral-50 py-16 md:py-24">
        <Container>
          <h2 className="mb-8 text-3xl font-bold text-neutral-900 md:text-4xl">
            What You Keep vs What We Do
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-lg bg-white p-8 shadow-sm">
              <h3 className="mb-4 text-xl font-semibold text-neutral-900">You</h3>
              <p className="text-neutral-700">
                Provider review/signature, ultimate clinical decisions, billing submission.
              </p>
            </div>
            <div className="rounded-lg bg-white p-8 shadow-sm">
              <h3 className="mb-4 text-xl font-semibold text-neutral-900">LogicHM</h3>
              <p className="text-neutral-700">
                Outreach/triage, documentation, device logistics, minutes tracking, program QA, monthly summaries.
              </p>
            </div>
          </div>

          <div className="mt-8 rounded-lg border-l-4 border-primary-600 bg-primary-50 p-6">
            <p className="text-sm text-neutral-700">
              <strong>Compliance Note:</strong> We align to payer rules and CMS policies, but reimbursement decisions are payer-specific. Verify locally.
            </p>
          </div>
        </Container>
      </section>

      <CTA
        headline="Schedule a 15-Minute Strategy Call"
        description="Let's review your panel, payer mix, and goals — and tell you if CCM/RPM will actually pencil out."
        buttonText="Schedule Your Call"
        buttonHref="/contact"
        variant="primary"
      />
    </>
  );
}
