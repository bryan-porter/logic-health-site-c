import { CTA } from "@/components/sections/CTA";
import { Container } from "@/components/ui/Container";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing & Commercial Models | Logic Health Management",
  description:
    "Pricing built for thin margins and real risk—designed for MSOs, IPAs, small hospitals, and rural RHCs/FQHCs. Low fixed costs, fees that scale with enrollment, and a turnkey path into value-based care.",
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
  const pricingPrinciples = [
    {
      title: "Start small, expand by cohort and site",
      Icon: LayersIcon,
      description:
        "We usually launch with a focused cohort (for example, uncontrolled HTN/DM or high-risk Medicare lives in a subset of practices), then expand by site and contract once the workflows and ROI are visible. You don't have to light up every clinic and every payer on day one to access enterprise-grade care-management.",
    },
    {
      title: "Low fixed cost, mostly variable with enrollment",
      Icon: UsersIcon,
      description:
        "Pricing is structured so the bulk of your spend scales with enrolled panels and program complexity—not with ambitious but unused seat counts. There is typically a one-time implementation layer (EHR build, playbook design, training), then ongoing service fees that track with active CCM/RPM and related program enrollment.",
    },
    {
      title: "A revenue + quality engine, not just an expense line",
      Icon: WrenchIcon,
      description:
        "LOGIC is designed to be a revenue + quality engine: recurring, defensible care-management revenue per enrolled patient, plus measurable improvements in quality measures and avoidable utilization. We use conservative CCM/RPM ROI ranges (for example, illustrative net revenue of roughly $40–$150 per enrolled patient per month depending on payer mix, program mix, and engagement) when modeling with your finance team—not best-case scenarios.",
    },
  ];

  const includes = [
    {
      label: "Centralized care-management team across your sites",
      description:
        "Shared RNs, MAs, and navigators who handle outreach, monitoring, and documentation for CCM, RPM, and related programs across your practices—under your supervision, in your EHR. No need to build a care-management department location by location.",
      Icon: UsersIcon,
    },
    {
      label: "EHR workflows, templates, and time tracking",
      description:
        "We design and implement EHR-native note types, care-plan templates, time-tracking, and supervision workflows for CCM, RPM, G0511, BHI, and related programs. The goal: documentation that supports billing, quality reporting, and audits without forcing clinicians into a new portal.",
      Icon: LinkIcon,
    },
    {
      label: "Compliance-conscious operating model",
      description:
        "Our workflows are designed around CMS care-management frameworks and your CPOM, Stark/AKS, and FCA posture. Documentation patterns are built to support audit-ready 'evidence packs' for care-management claims, not just revenue cycle convenience.",
      Icon: ShieldIcon,
    },
    {
      label: "VBC and ACO scorecards built from your EHR",
      description:
        "We turn CCM/RPM and related program data into scorecards your VBC and finance teams can actually use—connecting enrollment and engagement to quality metrics, ED/admissions trends, and contract performance. No separate data wrangling required.",
      Icon: ChartIcon,
    },
  ];

  const segments = [
    {
      heading: "For MSOs and multi-site groups",
      points: [
        "Standardized operating model across 5–50+ practices without building care-management departments site by site.",
        "Shared-service economics that scale with enrolled panels, not fixed headcount per location.",
        "VBC and ACO scorecards that tie care-management activity to quality, utilization, and contract performance.",
      ],
    },
    {
      heading: "For small hospitals and rural RHCs/FQHCs",
      points: [
        "Low fixed-cost path into CCM, RPM, G0511, and related programs without hiring full-time care coordinators.",
        "EHR-native workflows that fit into existing clinical and billing patterns—no separate portal or reporting system.",
        "Conservative ROI modeling and phased rollout designed for thin margins and capital constraints.",
      ],
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-b from-primary-50 to-white py-14 md:py-20">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl">
              Pricing built for thin margins and real risk
            </h1>
            <p className="mx-auto mt-3 max-w-2xl text-sm text-neutral-700 sm:text-base">
              LOGIC packages CCM, RPM, and related care-management as a centralized service inside your EHR—designed for MSOs, IPAs,
              small hospitals, and rural RHCs/FQHCs that can&apos;t afford to hire a full care-management department or gamble on
              unproven pilots. Our economics are built around the same reality you live in: reimbursement pressure, staffing
              constraints, and value-based risk.
            </p>
            <p className="mx-auto mt-2 max-w-2xl text-xs text-neutral-600 sm:text-sm">
              Instead of large fixed costs or per-seat software licenses, we give you a low-friction way to turn CCM/RPM and related
              programs into a revenue + quality engine—with fees tied to actual enrolled panels and clearly documented work.
            </p>
          </div>
        </Container>
      </section>

      {/* How our pricing works */}
      <section className="bg-white py-12 md:py-16">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl">
              How our pricing works
            </h2>
            <p className="mt-2 max-w-3xl text-sm text-neutral-700">
              We price like an operator would design it: minimal fixed cost, economics that scale with enrollment and
              program mix, and clear expectations about what you get in return. The goal is a low-risk, high-return path into
              improved care, not a long-term bet on internal FTEs and custom build-outs.
            </p>
          </div>

          <div className="mx-auto mt-10 grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-3">
            {pricingPrinciples.map((p) => (
              <article key={p.title} className="rounded-xl border border-neutral-200 bg-neutral-50 p-6 shadow-sm">
                <p.Icon className="h-6 w-6 text-primary-600" aria-hidden />
                <h3 className="mt-3 text-sm font-semibold text-neutral-900">{p.title}</h3>
                <p className="mt-1 text-xs text-neutral-700">{p.description}</p>
              </article>
            ))}
          </div>

          <p className="mx-auto mt-6 max-w-3xl text-[11px] leading-5 text-neutral-500">
            Ranges are illustrative and not a guarantee of reimbursement or financial performance. Actual results depend on your
            baseline performance, payer mix, engagement, coding, and evolving payer policies. We document assumptions explicitly
            in any pro forma we share and track actuals against them over time.
          </p>
        </Container>
      </section>

      {/* What you're paying for */}
      <section className="bg-neutral-50 py-12 md:py-16">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl">What you&apos;re paying for</h2>
            <p className="mt-2 max-w-3xl text-sm text-neutral-700">
              You&apos;re not just buying staff hours. You&apos;re buying a standardized operating model that runs CCM, RPM, and related
              programs inside your EHR with audit-ready documentation and VBC reporting baked in.
            </p>
          </div>

          <div className="mx-auto mt-8 grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {includes.map((i) => (
              <div key={i.label} className="rounded-xl border border-neutral-200 bg-white p-6">
                <i.Icon className="h-6 w-6 text-primary-600" aria-hidden />
                <h3 className="mt-2 text-sm font-semibold text-neutral-900">{i.label}</h3>
                <p className="mt-1 text-xs text-neutral-700">{i.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Segments */}
      <section className="bg-white py-12 md:py-16">
        <Container>
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2">
            {segments.map((s) => (
              <article key={s.heading} className="rounded-xl border border-neutral-200 bg-neutral-50 p-6">
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
        headline="See your pro forma before you commit"
        description="Share your panel size, payer mix, and a sense of your current CCM/RPM activity, and we'll build a conservative model of what a LOGIC-run program could look like—month-by-month revenue, staffing avoided, and directional impact on quality and utilization. No obligation, no aggressive assumptions."
        buttonText="Talk to a Program Architect"
        buttonHref="/contact"
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
