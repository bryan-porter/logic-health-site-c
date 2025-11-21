import Link from "next/link";

import { CTA } from "@/components/sections/CTA";
import { Container } from "@/components/ui/Container";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Results & Outcomes | Logic Health Management",
  description:
    "Clinical, financial, and operational outcomes from CCM, RPM, and related programs—CFO- and board-ready benchmarks plus case snapshots for MSOs, multi-site groups, small hospitals, and rural RHCs/FQHCs.",
};

// ---------- Inline icons (no external deps) ----------
function ArrowDownIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden {...props}>
      <path d="M12 4v14" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" />
      <path d="M7 13l5 5 5-5" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ChartUpIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden {...props}>
      <path d="M3 20h18" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" />
      <path d="M5 16l4-4 3 3 5-7 2 2" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function HeartPulseIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden {...props}>
      <path d="M20 8.5A5.5 5.5 0 0 0 12 6a5.5 5.5 0 0 0-8 2.5C2 12.5 6.5 16 12 20c5.5-4 10-7.5 8-11.5Z" stroke="currentColor" strokeWidth={1.7} />
      <path d="M7 12h3l1.5-3 2.5 6 1-3H17" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ClockIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden {...props}>
      <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth={1.7} />
      <path d="M12 7v5l3 2" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ShieldIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden {...props}>
      <path d="M12 3l7 3v6c0 5-3.5 7.5-7 9-3.5-1.5-7-4-7-9V6l7-3Z" stroke="currentColor" strokeWidth={1.7} strokeLinejoin="round" />
      <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// ---------- Types ----------
type Metric = {
  label: string;
  value: string;
  sublabel?: string;
  Icon: (props: React.SVGProps<SVGSVGElement>) => React.ReactElement;
  tone?: "good" | "neutral";
};

type CaseSnap = {
  title: string;
  org: string;
  population: string;
  programMix: string[];
  timeline: string;
  highlights: string[];
  outcomes: { label: string; value: string }[];
};

// ---------- Page ----------
export default function ResultsPage() {
  const metrics: Metric[] = [
    {
      label: "Net new program revenue (1,000 enrolled patients)",
      value: "$80k–$200k/mo",
      sublabel: "≈$40–$150 per enrolled patient; payer mix and engagement drive actuals",
      Icon: ChartUpIcon,
      tone: "good",
    },
    {
      label: "Avoidable ED visits & admissions",
      value: "−10–25%",
      sublabel: "monitored CCM/RPM cohorts vs baseline",
      Icon: ArrowDownIcon,
      tone: "good",
    },
    {
      label: "BP/A1c at goal (uncontrolled cohorts)",
      value: "+15–30%",
      sublabel: "within ~3–6 months of program start",
      Icon: HeartPulseIcon,
      tone: "good",
    },
    {
      label: "Care gaps closed",
      value: "+15–35%",
      sublabel: "AWVs, key preventive measures, and adherence",
      Icon: ChartUpIcon,
      tone: "good",
    },
    {
      label: "Monthly engagement",
      value: "70–85%",
      sublabel: "2+ meaningful touches per month for enrolled patients",
      Icon: ClockIcon,
      tone: "neutral",
    },
    {
      label: "CCM/RPM time capture",
      value: "95–100%",
      sublabel: "audit-ready logs and one-provider-per-month checks",
      Icon: ShieldIcon,
      tone: "neutral",
    },
    {
      label: "Time-to-launch",
      value: "< 30 days",
      sublabel: "from signed BAA to first live patients",
      Icon: ClockIcon,
      tone: "neutral",
    },
  ];

  const cases: CaseSnap[] = [
    {
      title: "Small Hospital System (CAH + Rural Clinics)",
      org: "Critical Access Hospital + 5 affiliated rural clinics",
      population: "~3,200 Medicare attributed; HTN, DM, CHF prevalence",
      programMix: ["AWV", "CCM", "G0511 (rural)", "RPM (BP/WT)", "TCM"],
      timeline: "Go-live 28 days; scale over 90 days",
      highlights: [
        "Centralized RN hub with clinic-level escalation paths",
        "FHIR data flows + minimal EHR clicks for onsite staff",
        "Dashboard for CFO + QI: revenue, readmits, BP at goal",
      ],
      outcomes: [
        { label: "30-day readmit", value: "−12%" },
        { label: "BP at goal", value: "+22%" },
        { label: "Net margin", value: "+$85k/mo" },
      ],
    },
    {
      title: "MSO / Multi-site Primary Care Group",
      org: "42-provider IM group across 8 sites",
      population: "~5,800 attributed lives; rising-risk cohorts",
      programMix: ["CCM", "PCM (CHF/COPD)", "RPM (BP/SpO₂)", "AWV"],
      timeline: "Phase-in over 60 days; site-by-site rollout",
      highlights: [
        "Risk stratification + proactive enrollment by site",
        "Automated time capture & claim bundling per payer",
        "Closed-loop escalation routed back to site care teams",
      ],
      outcomes: [
        { label: "A1c at goal", value: "+17%" },
        { label: "ED visits", value: "−9%" },
        { label: "EBITDA lift", value: "+$120k/qtr" },
      ],
    },
    {
      title: "Specialty Service Line (Cardiology & CHF)",
      org: "Hospital-owned cardiology practice, CHF clinic focus",
      population: "~450 CHF patients; device + symptom monitoring",
      programMix: ["PCM (CHF)", "RPM (scale/BP/SpO₂)", "TCM"],
      timeline: "Launch 21 days; early outcomes 60–90 days",
      highlights: [
        "Daily weight + symptom trends; early intervention SOP",
        "Tiered routing: RN → APP → MD with documented SLAs",
        "Billing conformance checks pre-claim submission",
      ],
      outcomes: [
        { label: "Admissions", value: "−8%" },
        { label: "Time-to-action", value: "−36 hrs" },
        { label: "Program ROI", value: "2.6×" },
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
              Outcomes & Results
            </h1>
            <p className="mt-4 text-lg text-neutral-700">
              Clinical, financial, and operational outcomes—documented, defensible, and built for boards, CFOs, and
              compliance.
            </p>
            <p className="mt-2 text-sm text-neutral-600">
              Ranges below reflect what we typically see across CCM, RPM, and related programs for MSOs, multi-site
              groups, small hospitals, and rural RHCs/FQHCs; your baseline, payer mix, and engagement will drive actuals.
            </p>
          </div>
        </Container>
      </section>

      {/* Outcome metrics */}
      <section className="bg-white py-12 md:py-16">
        <Container>
          <div className="mx-auto max-w-6xl">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {metrics.map(({ label, value, sublabel, Icon, tone }) => (
                <article
                  key={label}
                  className="relative rounded-xl border border-neutral-200 bg-neutral-50 p-6 shadow-sm"
                >
                  <Icon
                    className={["h-6 w-6", tone === "good" ? "text-primary-600" : "text-neutral-600"].join(" ")}
                    aria-hidden
                  />
                  <div className="mt-3 text-2xl font-bold text-neutral-900">{value}</div>
                  <div className="mt-1 text-sm font-medium text-neutral-800">{label}</div>
                  {sublabel ? <p className="mt-1 text-xs text-neutral-600">{sublabel}</p> : null}
                </article>
              ))}
            </div>
            <p className="mt-4 text-xs text-neutral-500">
              Illustrative ranges; not a guarantee of results. We provide transparent assumptions and measurement plans before go‑live.
            </p>
          </div>
        </Container>
      </section>

      {/* Case snapshots */}
      <section className="bg-neutral-50 py-12 md:py-16">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-semibold text-neutral-900 md:text-3xl">Case snapshots</h2>
            <p className="mt-3 text-sm text-neutral-700">
              How different organizations stand up programs quickly—and show measurable value.
            </p>
          </div>

          <div className="mx-auto mt-8 grid max-w-6xl grid-cols-1 gap-6 lg:grid-cols-3">
            {cases.map((c) => (
              <article key={c.title} className="flex flex-col rounded-xl border border-neutral-200 bg-white p-6">
                <div>
                  <h3 className="text-base font-semibold text-neutral-900">{c.title}</h3>
                  <p className="mt-1 text-sm text-neutral-700">{c.org}</p>
                  <p className="mt-1 text-xs text-neutral-600">Population: {c.population}</p>
                  <p className="mt-1 text-xs text-neutral-600">Program mix: {c.programMix.join(" · ")}</p>
                  <p className="mt-1 text-xs text-neutral-600">Timeline: {c.timeline}</p>
                </div>

                <div className="mt-4">
                  <h4 className="text-sm font-medium text-neutral-900">Highlights</h4>
                  <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-neutral-700">
                    {c.highlights.map((h) => (
                      <li key={h}>{h}</li>
                    ))}
                  </ul>
                </div>

                <div className="mt-4">
                  <h4 className="text-sm font-medium text-neutral-900">Early outcomes</h4>
                  <div className="mt-2 grid grid-cols-3 gap-2 text-center">
                    {c.outcomes.map((o) => (
                      <div key={o.label} className="rounded-lg border border-neutral-200 p-3">
                        <div className="text-sm font-semibold text-neutral-900">{o.value}</div>
                        <div className="mt-1 text-[11px] text-neutral-600">{o.label}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-4">
                  <Link
                    href="/contact?topic=case-review"
                    className="text-sm font-medium text-primary-600 underline-offset-4 hover:underline"
                  >
                    Request a detailed case review →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* Compliance note & cross-links */}
      <section className="bg-white py-6">
        <Container>
          <div className="mx-auto max-w-6xl rounded-lg border border-neutral-200 bg-neutral-50 p-4 text-sm text-neutral-700">
            <p className="font-medium text-neutral-900">Measurement rigor & audit readiness</p>
            <p className="mt-1">
              Before go-live we define cohorts, baselines, and KPIs with your finance and clinical leaders, then track time,
              touches, and outcomes automatically so you have audit-ready logs, CFO-ready dashboards, and documentation you can
              hand to payers or your board without scrambling. See{" "}
              <Link href="/compliance" className="text-primary-600 underline-offset-4 hover:underline">
                Compliance & Security
              </Link>{" "}
              for our CPOM-sensitive controls and documentation approach, or view program details on{" "}
              <Link href="/solutions/ccm" className="text-primary-600 underline-offset-4 hover:underline">
                CCM
              </Link>{" "}
              and{" "}
              <Link href="/solutions/rpm" className="text-primary-600 underline-offset-4 hover:underline">
                RPM
              </Link>
              .
            </p>
          </div>
        </Container>
      </section>

      <CTA
        headline="Want your own outcome model?"
        description="We&apos;ll map your population and payer mix, then share a transparent, CFO‑ready projection with milestones."
        buttonText="Request a custom ROI analysis"
        buttonHref="/contact?topic=roi-model"
        variant="primary"
      />

      <section className="bg-white pb-10">
        <Container>
          <p className="text-[11px] leading-5 text-neutral-500">
            Disclaimer: The ranges and case outcomes on this page are illustrative and depend on your attribution model,
            patient engagement, payer mix, baseline utilization, and existing workflows. LogicHM documents assumptions,
            data sources, and measurement methods with your finance and clinical teams before go‑live, tracks outcomes
            transparently over time, and provides defensible evidence for internal and external reviews. Nothing on this
            page is a guarantee of specific results, and customers remain responsible for their own billing, compliance,
            and regulatory decisions in consultation with their advisors.
          </p>
        </Container>
      </section>
    </div>
  );
}
