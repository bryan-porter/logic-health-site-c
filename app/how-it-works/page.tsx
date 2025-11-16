// app/how-it-works/page.tsx
import { Container } from "@/components/ui/Container";
import { ProgramsGrid } from "@/components/sections/ProgramsGrid";
import { PROGRAM_TILES } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { Hero } from "@/components/sections/Hero";

export default function HowItWorksPage() {
  return (
    <main>
      {/* Hero */}
      <Hero
        headline="How LogicHM Runs Your Remote‑Care Service Line"
        subheadline="We supply the staff, workflows, devices, documentation, and billing support. You retain clinical governance—and get a clean, audit‑ready trail in your EHR."
        primaryCTA={{ text: "Schedule a strategy call", href: "/contact" }}
        secondaryCTA={{ text: "See pricing & ROI", href: "/pricing" }}
      />

      {/* 4-Step Operating Model */}
      <section className="bg-white py-16 md:py-24">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-neutral-900 md:text-4xl">
              Go Live in 3–4 Weeks
            </h2>
            <p className="mt-4 text-neutral-700">
              Our approach is built on three pillars—Logic‑Driven Design, Equity Embedded, and Audit‑Ready Scale—implemented in four simple steps.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-4">
            <article className="rounded-xl border border-neutral-200 bg-neutral-50 p-6">
              <div className="text-sm font-medium text-neutral-500">Step 1</div>
              <h3 className="mt-2 text-lg font-semibold text-neutral-900">Configure</h3>
              <p className="mt-2 text-neutral-700">
                Connect to your EHR (Epic, eCW, Veradigm, DrChrono, athena, etc.). Define eligibility, escalation paths, and quality measures.
              </p>
            </article>

            <article className="rounded-xl border border-neutral-200 bg-neutral-50 p-6">
              <div className="text-sm font-medium text-neutral-500">Step 2</div>
              <h3 className="mt-2 text-lg font-semibold text-neutral-900">Enroll & Equip</h3>
              <p className="mt-2 text-neutral-700">
                We handle outreach, consent, bedside or home enrollment, and pre‑configured device logistics with simple pairing instructions.
              </p>
            </article>

            <article className="rounded-xl border border-neutral-200 bg-neutral-50 p-6">
              <div className="text-sm font-medium text-neutral-500">Step 3</div>
              <h3 className="mt-2 text-lg font-semibold text-neutral-900">Operate</h3>
              <p className="mt-2 text-neutral-700">
                RN panels manage monthly engagement and alert triage; providers get concise escalations and notes directly in your chart.
              </p>
            </article>

            <article className="rounded-xl border border-neutral-200 bg-neutral-50 p-6">
              <div className="text-sm font-medium text-neutral-500">Step 4</div>
              <h3 className="mt-2 text-lg font-semibold text-neutral-900">Report & Reimburse</h3>
              <p className="mt-2 text-neutral-700">
                Time stamps, vitals provenance, and code‑level logs power clean billing and CFO‑ready production reports. BAA, HIPAA, SOC 2 included.
              </p>
            </article>
          </div>
        </Container>
      </section>

      {/* Tile Grid */}
      <ProgramsGrid
        subtitle="We integrate clinical logic, regulatory nuance, equity, and team‑based workflows across the full spectrum of CMS‑recognized models."
        programs={PROGRAM_TILES}
      />

      {/* Final CTA */}
      <section className="bg-white py-16 md:py-24">
        <Container>
          <div className="mx-auto max-w-3xl rounded-xl border border-neutral-200 bg-neutral-50 p-8 text-center">
            <h2 className="text-2xl font-semibold text-neutral-900 md:text-3xl">
              Ready to launch CCM & RPM—plus the programs your population needs?
            </h2>
            <p className="mt-3 text-neutral-700">
              We'll share a tailored go‑live plan and ROI view for your practice or small hospital.
            </p>
            <div className="mt-6 flex justify-center gap-3">
              <Button href="/contact">Book a 15‑minute call</Button>
              <Button href="/resources" variant="secondary">Download ROI model</Button>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
