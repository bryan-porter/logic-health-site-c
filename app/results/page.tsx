import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { CTA } from "@/components/sections/CTA";

export default function ResultsPage() {
  return (
    <>
      <PageHeader
        title="Results"
        description="We measure clinical outcomes, operational efficiency, and financial performance."
      />

      {/* What We Measure */}
      <section className="bg-white py-16 md:py-24">
        <Container>
          <h2 className="mb-8 text-3xl font-bold text-neutral-900 md:text-4xl">
            What We Measure
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-lg bg-neutral-50 p-6">
              <h3 className="mb-4 text-xl font-semibold text-neutral-900">Clinical</h3>
              <p className="text-neutral-700">
                BP control, A1c trends, avoidable ED visits/readmissions
              </p>
            </div>
            <div className="rounded-lg bg-neutral-50 p-6">
              <h3 className="mb-4 text-xl font-semibold text-neutral-900">Operational</h3>
              <p className="text-neutral-700">
                Enrollment rate, monthly engagement, adherence (RPM), documentation completeness
              </p>
            </div>
            <div className="rounded-lg bg-neutral-50 p-6">
              <h3 className="mb-4 text-xl font-semibold text-neutral-900">Financial</h3>
              <p className="text-neutral-700">
                Clean claim rate, denial rate, net revenue per patient, churn
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Example Impact */}
      <section className="bg-neutral-50 py-16 md:py-24">
        <Container>
          <h2 className="mb-8 text-3xl font-bold text-neutral-900 md:text-4xl">
            Example Impact (Illustrative)
          </h2>
          <div className="mx-auto max-w-3xl space-y-6">
            <div className="rounded-lg bg-white p-6 shadow-sm">
              <h3 className="mb-2 font-semibold text-neutral-900">Hypertension RPM</h3>
              <p className="text-neutral-700">
                ≥70% of active patients transmit ≥16 days/month after onboarding program; earlier outreach reduces severe outliers.
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-sm">
              <h3 className="mb-2 font-semibold text-neutral-900">CCM for multimorbidity</h3>
              <p className="text-neutral-700">
                Regular medication reconciliation and SDOH checks reduce gaps in care and support fewer avoidable ED visits.
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-sm">
              <h3 className="mb-2 font-semibold text-neutral-900">Denial avoidance</h3>
              <p className="text-neutral-700">
                Clear separation of CCM/RPM minutes and one-provider safeguards reduce recoupment risk.
              </p>
            </div>
          </div>
          <div className="mt-6 text-center text-sm italic text-neutral-600">
            Actual results vary by population, payer mix, and program maturity.
          </div>
        </Container>
      </section>

      {/* Case Studies */}
      <section className="bg-white py-16 md:py-24">
        <Container>
          <h2 className="mb-8 text-3xl font-bold text-neutral-900 md:text-4xl">
            Case Study Placeholders
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-lg border border-neutral-200 p-8">
              <h3 className="mb-4 text-xl font-semibold text-neutral-900">
                Primary Care Group (8 providers)
              </h3>
              <p className="text-neutral-700">
                CCM + RPM; scaled to 400 active patients; decreased denials with standardized documentation; sustainable monthly recurring revenue.
              </p>
            </div>
            <div className="rounded-lg border border-neutral-200 p-8">
              <h3 className="mb-4 text-xl font-semibold text-neutral-900">
                Cardiology Group (5 providers)
              </h3>
              <p className="text-neutral-700">
                HF + HTN RPM protocol; improved adherence with cellular devices and structured coaching.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Transparent Reporting */}
      <section className="bg-neutral-50 py-16 md:py-24">
        <Container>
          <h2 className="mb-8 text-3xl font-bold text-neutral-900 md:text-4xl">
            Transparent Reporting
          </h2>
          <ul className="mx-auto max-w-3xl space-y-4 text-lg text-neutral-700">
            <li className="flex gap-3">
              <span className="text-primary-600">•</span>
              <span>Monthly dashboards and trend analysis</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary-600">•</span>
              <span>Denial watchlist and RCA</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary-600">•</span>
              <span>Quarterly optimization review with leadership</span>
            </li>
          </ul>
        </Container>
      </section>

      <CTA
        headline="Get Your Customized ROI Model"
        description="See projected revenue, costs, and net impact based on your panel and payer mix."
        buttonText="Request ROI Analysis"
        buttonHref="/contact"
        variant="primary"
      />
    </>
  );
}
