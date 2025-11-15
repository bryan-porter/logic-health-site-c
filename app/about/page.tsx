import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { CTA } from "@/components/sections/CTA";

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="About Logic Health Management"
        description="Enable physician practices to deliver proactive chronic care — efficiently, compliantly, and at scale."
      />

      {/* Mission */}
      <section className="bg-white py-16 md:py-24">
        <Container>
          <h2 className="mb-8 text-3xl font-bold text-neutral-900 md:text-4xl">
            Mission
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-neutral-700">
            Enable physician practices to deliver proactive chronic care — efficiently, compliantly, and at scale.
          </p>
        </Container>
      </section>

      {/* What Makes Us Different */}
      <section className="bg-neutral-50 py-16 md:py-24">
        <Container>
          <h2 className="mb-8 text-3xl font-bold text-neutral-900 md:text-4xl">
            What Makes Us Different
          </h2>
          <div className="mx-auto max-w-3xl space-y-6">
            <div className="rounded-lg bg-white p-6 shadow-sm">
              <h3 className="mb-2 font-semibold text-neutral-900">Clinical first</h3>
              <p className="text-neutral-700">
                U.S.-based RN/MA teams following physician‑approved protocols
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-sm">
              <h3 className="mb-2 font-semibold text-neutral-900">Documentation discipline</h3>
              <p className="text-neutral-700">
                Audit‑ready notes and minutes separation
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-sm">
              <h3 className="mb-2 font-semibold text-neutral-900">End‑to‑end operations</h3>
              <p className="text-neutral-700">
                Enrollment, devices, outreach, triage, summaries, and billing prep
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-sm">
              <h3 className="mb-2 font-semibold text-neutral-900">Partnership mindset</h3>
              <p className="text-neutral-700">
                Built to fit your workflows, not replace them
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Leadership & Governance */}
      <section className="bg-white py-16 md:py-24">
        <Container>
          <h2 className="mb-8 text-3xl font-bold text-neutral-900 md:text-4xl">
            Leadership & Governance
          </h2>
          <ul className="mx-auto max-w-3xl space-y-4 text-lg text-neutral-700">
            <li className="flex gap-3">
              <span className="text-primary-600">•</span>
              <span>Clinical leadership with chronic care expertise</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary-600">•</span>
              <span>Program governance and QA reviews</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary-600">•</span>
              <span>Security and privacy program with signed BAA; controls aligned to SOC 2/HITRUST principles</span>
            </li>
          </ul>
        </Container>
      </section>

      {/* Where We Operate */}
      <section className="bg-neutral-50 py-16 md:py-24">
        <Container>
          <h2 className="mb-8 text-3xl font-bold text-neutral-900 md:text-4xl">
            Where We Operate
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-neutral-700">
            U.S.-based teams serving practices nationwide.
          </p>
        </Container>
      </section>

      {/* Careers & Partners */}
      <section className="bg-white py-16 md:py-24">
        <Container>
          <h2 className="mb-8 text-3xl font-bold text-neutral-900 md:text-4xl">
            Careers & Partners
          </h2>
          <div className="mx-auto max-w-3xl">
            <p className="mb-6 text-lg text-neutral-700">
              We're always interested in clinical talent and mission‑aligned partners.
            </p>
            <div className="space-y-3 text-lg text-neutral-700">
              <p>
                Email <strong className="text-primary-600">careers@logichm.example</strong> or{" "}
                <strong className="text-primary-600">partners@logichm.example</strong>
              </p>
            </div>
          </div>
        </Container>
      </section>

      <CTA
        headline="Meet with Our Team"
        description="Schedule a call to discuss how LogicHM can support your chronic care programs."
        buttonText="Request a Sample Compliance Pack"
        buttonHref="/contact"
        variant="primary"
      />
    </>
  );
}
