import { CTA } from "@/components/sections/CTA";
import { Container } from "@/components/ui/Container";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing & Commercial Models | Logic Health Management",
  description:
    "Simple commercial options for practices and small hospitals—full‑service, co‑managed, or build‑operate‑transfer—covering CCM, RPM, RTM, TCM, BHI, CHI/PIN, TEAMs, and AWV/wellness.",
};

// Minimal inline icons (no external deps)
function LayersIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden {...props}>
      <path d="M12 2 3 7l9 5 9-5-9-5Z" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M3 12l9 5 9-5" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M3 17l9 5 9-5" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
function UsersIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden {...props}>
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round"/>
      <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth={1.7}/>
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round"/>
      <path d="M16 3.13a4 4 0 0 1 0 7.75" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round"/>
    </svg>
  );
}
function WrenchIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden {...props}>
      <path d="M14.7 6.3A4.5 4.5 0 0 0 7.3 9.7L3 14l7 7 4.3-4.3a4.5 4.5 0 0 0 3.4-7.4" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="15" cy="5" r="2" stroke="currentColor" strokeWidth={1.7}/>
    </svg>
  );
}
function ShieldIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden {...props}>
      <path d="M12 22s8-3 8-10V6l-8-3-8 3v6c0 7 8 10 8 10Z" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
function LinkIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden {...props}>
      <path d="M10 13a5 5 0 0 0 7.07 0l2.83-2.83a5 5 0 0 0-7.07-7.07L11 4" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M14 11a5 5 0 0 0-7.07 0L4.1 13.83a5 5 0 1 0 7.07 7.07L13 20" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
function ChartIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden {...props}>
      <path d="M3 3v18h18" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M7 15v3M12 11v7M17 7v11" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export default function PricingPage() {
  const models = [
    {
      title: "Full‑service programs",
      subtitle: "We operate end‑to‑end delivery",
      Icon: LayersIcon,
      bullets: [
        "CCM, RPM, RTM, TCM, BHI, CHI/PIN, AWV/wellness, TEAMs (hospital).",
        "RN/MA navigators, device logistics, alerts, outreach, documentation, and QA.",
        "Time and supervision notes aligned to program criteria; production views each month.",
      ],
      idealFor: "Busy practices and small hospitals wanting turnkey delivery with clear governance.",
    },
    {
      title: "Co‑managed (your staff + our operating model)",
      subtitle: "You staff; we provide model, training, QA",
      Icon: UsersIcon,
      bullets: [
        "Standardized protocols, routing matrices, templates, and reporting.",
        "Training, supervision logic, coding/billing checks, and monthly quality review.",
        "Flexible coverage: we can absorb after‑hours/overflow or specialty cohorts.",
      ],
      idealFor: "Groups with care teams in place who want structure, oversight, and scale.",
    },
    {
      title: "Build‑Operate‑Transfer",
      subtitle: "Stand‑up, stabilize, then hand off",
      Icon: WrenchIcon,
      bullets: [
        "Blueprint → pilot → scale; we operate to steady state before transition.",
        "Policy bundle, documentation library, reporting pack, and handover plan.",
        "Option to keep LogicHM for QA, analytics, and escalation protocols.",
      ],
      idealFor: "Systems targeting long‑term internal ownership with a lower‑risk path to launch.",
    },
  ];

  const includes = [
    { label: "Compliance‑first design (HIPAA, SOC 2 practices, audit‑ready docs)", Icon: ShieldIcon },
    { label: "EHR connection patterns and documentation templates", Icon: LinkIcon },
    { label: "Monthly production & outcomes views (board‑ready)", Icon: ChartIcon },
  ];

  const segments = [
    {
      heading: "For practices",
      points: [
        "Primary care, cardiology, endocrinology, pulmonology, nephrology, and multi‑specialty.",
        "Simple per‑enrolled‑patient commercial structures with volume tiering.",
        "Programs commonly paired: CCM + RPM; AWV + wellness; BHI where indicated.",
      ],
    },
    {
      heading: "For small hospitals",
      points: [
        "Hospital‑based clinics and service lines (e.g., cardiometabolic, pulmonary, post‑discharge).",
        "Central monitoring and navigator coverage with clear handoffs to inpatient/outpatient teams.",
        "Governance model + QA + reporting pack suitable for leadership and compliance review.",
      ],
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-b from-primary-50 to-white py-14 md:py-20">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-neutral-900 md:text-5xl">
              Pricing & Commercial Models
            </h1>
            <p className="mt-4 text-lg text-neutral-700">
              Choose how you want to run your programs—full‑service, co‑managed, or build‑operate‑transfer.
              We&apos;ll map your panel, payer mix, and goals to the right structure.
            </p>
          </div>
        </Container>
      </section>

      {/* Models */}
      <section className="bg-white py-12 md:py-16">
        <Container>
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-3">
            {models.map((m) => (
              <article key={m.title} className="rounded-xl border border-neutral-200 bg-neutral-50 p-6 shadow-sm">
                <m.Icon className="h-6 w-6 text-primary-600" aria-hidden />
                <h2 className="mt-3 text-lg font-semibold text-neutral-900">{m.title}</h2>
                <p className="text-sm text-neutral-600">{m.subtitle}</p>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-neutral-800">
                  {m.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
                <p className="mt-4 text-xs text-neutral-500">{m.idealFor}</p>
              </article>
            ))}
          </div>

          {/* What's included */}
          <div className="mx-auto mt-10 max-w-3xl text-center">
            <h3 className="text-2xl font-semibold text-neutral-900 md:text-3xl">What&apos;s included</h3>
            <p className="mt-3 text-sm text-neutral-700">
              Regardless of model, programs are built to be compliant, measurable, and reviewable.
            </p>
          </div>
          <div className="mx-auto mt-6 grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-3">
            {includes.map((i) => (
              <div key={i.label} className="rounded-xl border border-neutral-200 bg-white p-6">
                <i.Icon className="h-6 w-6 text-primary-600" aria-hidden />
                <p className="mt-2 text-sm text-neutral-800">{i.label}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Segments */}
      <section className="bg-neutral-50 py-12 md:py-16">
        <Container>
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2">
            {segments.map((s) => (
              <article key={s.heading} className="rounded-xl border border-neutral-200 bg-white p-6">
                <h3 className="text-base font-semibold text-neutral-900">{s.heading}</h3>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-neutral-800">
                  {s.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <CTA
        headline="Want a tailored quote and ROI view?"
        description="Share your panel size, payer mix, and program priorities. We&apos;ll map a commercial model and an outcomes/production view."
        buttonText="Request pricing"
        buttonHref="/contact?topic=pricing"
        variant="primary"
      />

      <section className="bg-white pb-10">
        <Container>
          <p className="text-xs text-neutral-500">
            Notes: Pricing varies with volume, scope, payer mix, device needs, and EHR patterns. Commercial terms are subject to due diligence and agreement.
            Nothing here is legal, coding, or reimbursement advice.
          </p>
        </Container>
      </section>
    </div>
  );
}
