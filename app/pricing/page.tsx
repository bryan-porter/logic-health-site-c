import * as React from "react";
import { Container } from "@/components/ui/Container";
import { Hero } from "@/components/sections/Hero";
import { Button } from "@/components/ui/Button";
import {
  ShieldCheck,
  BarChart3,
  Users,
  Stethoscope,
  Activity,
  HeartPulse,
} from "lucide-react";

type IconType = React.ComponentType<React.SVGProps<SVGSVGElement>>;

type Tier = {
  name: string;
  headline: string;
  price: string;
  priceNote?: string;
  billing: string;
  description: string;
  highlights: string[];
  programs: string[];
  cta: { text: string; href: string };
  mostPopular?: boolean;
};

const TIERS: Tier[] = [
  {
    name: "Practice Starter",
    headline: "Launch CCM/RPM without hiring",
    price: "Per enrolled pt / active month",
    priceNote: "Volume pricing available",
    billing: "Month‑to‑month • no setup fee",
    description:
      "Turnkey outreach, monitoring, documentation, and clean CPT capture for 1–3 clinics.",
    highlights: [
      "Navigator + RN/MA team",
      "Consent, time & supervision artifacts in your EHR",
      "Device logistics available for RPM",
      "Quality & compliance controls built‑in",
    ],
    programs: ["CCM", "RPM", "PCM", "BHI"],
    cta: { text: "Get a starter quote", href: "/contact" },
    mostPopular: true,
  },
  {
    name: "Group Growth",
    headline: "Scale across multi‑site groups",
    price: "Lower PEPM with tiered discounts",
    priceNote: "Annual prepay discount available",
    billing: "Monthly with true‑up • SOW by site",
    description:
      "Centralized operations with site‑level reporting and consistent supervision language by license.",
    highlights: [
      "Multi‑site playbooks & dashboards",
      "Eligibility & claim‑ready signals in‑workflow",
      "Co‑branded patient comms",
      "Dedicated success & clinical QA",
    ],
    programs: ["AWV", "CCM", "RPM", "RTM", "PCM", "BHI"],
    cta: { text: "Discuss multi‑site pricing", href: "/contact" },
  },
  {
    name: "Hospital Partner",
    headline: "Small & rural hospital operating model",
    price: "Site base + PEPM",
    priceNote: "Configurable to service lines",
    billing: "SOW per service line • quarterly review",
    description:
      "Central monitoring hub with service‑line escalation from inpatient → outpatient; TCM and TEAMs support.",
    highlights: [
      "Hub‑and‑spoke coverage for discharges",
      "Readmission risk routing & handoffs",
      "Unit‑friendly documentation & audits",
      "Joint QI & finance scorecards",
    ],
    programs: ["TCM", "TEAMs", "CCM", "RPM", "CHI/PIN"],
    cta: { text: "Talk to hospital team", href: "/contact" },
  },
];

export default function PricingPage() {
  return (
    <main>
      <Hero
        headline="Transparent pricing that aligns with outcomes"
        subheadline="Whether you're a single practice or a small hospital, we price to your program mix and scale—no hidden fees, no long contracts."
        primaryCTA={{ text: "Get a tailored quote", href: "/contact" }}
        secondaryCTA={{ text: "See how it works", href: "/how-it-works" }}
      />

      {/* Tiers */}
      <Container className="py-10">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {TIERS.map((tier) => (
            <section
              key={tier.name}
              className={`relative rounded-xl border border-neutral-200 bg-white p-6 shadow-sm ${
                tier.mostPopular ? "ring-2 ring-primary-600" : ""
              }`}
            >
              {tier.mostPopular && (
                <div className="absolute -top-3 left-4 rounded-full bg-primary-600 px-3 py-1 text-xs font-medium text-white">
                  Most popular
                </div>
              )}
              <header>
                <h2 className="text-xl font-semibold text-neutral-900">{tier.name}</h2>
                <p className="mt-1 text-neutral-700">{tier.headline}</p>
              </header>
              <div className="mt-4">
                <div className="text-lg font-semibold text-neutral-900">{tier.price}</div>
                {tier.priceNote && (
                  <div className="text-sm text-neutral-600">{tier.priceNote}</div>
                )}
                <div className="mt-1 text-xs text-neutral-500">{tier.billing}</div>
              </div>
              <p className="mt-4 text-neutral-700">{tier.description}</p>

              <div className="mt-5 space-y-2">
                {tier.highlights.map((h) => (
                  <div key={h} className="flex items-start gap-2">
                    <ShieldCheck className="mt-1 h-4 w-4 flex-none" aria-hidden />
                    <span className="text-sm text-neutral-700">{h}</span>
                  </div>
                ))}
              </div>

              <div className="mt-5 rounded-lg bg-neutral-50 p-4">
                <div className="text-xs font-medium uppercase tracking-wide text-neutral-600">
                  Programs included
                </div>
                <div className="mt-2 flex flex-wrap gap-2">
                  {tier.programs.map((p) => (
                    <span
                      key={p}
                      className="rounded-md border border-neutral-200 bg-white px-2 py-1 text-xs text-neutral-700"
                    >
                      {p}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6">
                <Button href={tier.cta.href} className="w-full">
                  {tier.cta.text}
                </Button>
              </div>
            </section>
          ))}
        </div>

        <p className="mt-4 text-xs text-neutral-500">
          Pricing shown as example structures. Final SOW depends on program mix, volumes, payer
          schedules, and device logistics (for RPM). Annual prepay discount available.
        </p>
      </Container>

      {/* Revenue model explainer */}
      <Container className="py-6">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="rounded-xl border border-neutral-200 bg-white p-6">
            <BarChart3 className="h-6 w-6" aria-hidden />
            <h3 className="mt-3 text-lg font-semibold text-neutral-900">
              How revenue accrues
            </h3>
            <p className="mt-2 text-neutral-700">
              Program‑eligible panels × engagement × compliant documentation → clean claims. We
              surface eligibility, time, and supervision signals in‑workflow.
            </p>
          </div>
          <div className="rounded-xl border border-neutral-200 bg-white p-6">
            <Users className="h-6 w-6" aria-hidden />
            <h3 className="mt-3 text-lg font-semibold text-neutral-900">No new FTE required</h3>
            <p className="mt-2 text-neutral-700">
              Navigator + RN/MA model closes gaps and manages alerts so clinics and units don't
              absorb extra workload.
            </p>
          </div>
          <div className="rounded-xl border border-neutral-200 bg-white p-6">
            <ShieldCheck className="h-6 w-6" aria-hidden />
            <h3 className="mt-3 text-lg font-semibold text-neutral-900">Audit‑ready by design</h3>
            <p className="mt-2 text-neutral-700">
              Consent, time, supervision artifacts, and standardized notes land in your EHR. Role‑
              based access and quality rules reduce billing friction.
            </p>
          </div>
        </div>
      </Container>

      {/* For small hospitals */}
      <Container className="py-6">
        <div className="rounded-xl border border-neutral-200 bg-neutral-50 p-6">
          <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 md:text-3xl">
            Small & rural hospital option
          </h2>
          <div className="mt-4 grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="rounded-lg border border-neutral-200 bg-white p-5">
              <Stethoscope className="h-5 w-5" aria-hidden />
              <div className="mt-2 text-base font-semibold text-neutral-900">Service‑line fit</div>
              <p className="mt-1 text-neutral-700">
                Configure CCM/RPM/TCM to cardiology, pulmonary, medicine, and rehab without
                bespoke rebuilds per unit.
              </p>
            </div>
            <div className="rounded-lg border border-neutral-200 bg-white p-5">
              <Activity className="h-5 w-5" aria-hidden />
              <div className="mt-2 text-base font-semibold text-neutral-900">Readmission focus</div>
              <p className="mt-1 text-neutral-700">
                Hub‑and‑spoke monitoring with discharge playbooks and 7‑day follow‑up support.
              </p>
            </div>
            <div className="rounded-lg border border-neutral-200 bg-white p-5">
              <HeartPulse className="h-5 w-5" aria-hidden />
              <div className="mt-2 text-base font-semibold text-neutral-900">Equity embedded</div>
              <p className="mt-1 text-neutral-700">
                PROMs and SDoH overlays guide outreach priorities and escalation thresholds.
              </p>
            </div>
          </div>
        </div>
      </Container>

      {/* FAQ */}
      <Container className="py-6">
        <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 md:text-3xl">
          Pricing FAQ
        </h2>
        <div className="mt-4 divide-y divide-neutral-200 rounded-xl border border-neutral-200 bg-white">
          <details className="group p-5">
            <summary className="cursor-pointer text-base font-medium text-neutral-900">
              Are devices included for RPM?
            </summary>
            <p className="mt-2 text-neutral-700">
              We support pass‑through device logistics (kit, ship, replace) or BYO devices. Device
              costs are separate from service fees.
            </p>
          </details>
          <details className="group p-5">
            <summary className="cursor-pointer text-base font-medium text-neutral-900">
              Do you work with FQHC/RHC?
            </summary>
            <p className="mt-2 text-neutral-700">
              Yes. We configure documentation and billing flows to RHC/FQHC requirements and provide
              roll‑ups for UDS/quality reporting.
            </p>
          </details>
          <details className="group p-5">
            <summary className="cursor-pointer text-base font-medium text-neutral-900">
              Is there a minimum term?
            </summary>
            <p className="mt-2 text-neutral-700">
              Starter tier is month‑to‑month. Growth and Hospital tiers typically include a 12‑month
              SOW with quarterly checkpoints.
            </p>
          </details>
          <details className="group p-5">
            <summary className="cursor-pointer text-base font-medium text-neutral-900">
              How do you charge for multiple programs?
            </summary>
            <p className="mt-2 text-neutral-700">
              We price by program mix and engagement. Bundles (e.g., CCM + RPM + PCM) receive
              tiered discounts and shared operations.
            </p>
          </details>
        </div>
      </Container>

      {/* Final CTA */}
      <Container className="py-10">
        <div className="flex flex-wrap gap-3">
          <Button href="/contact">Get a tailored quote</Button>
          <Button href="/how-it-works" variant="secondary">
            See the operating model
          </Button>
        </div>
        <p className="mt-3 text-xs text-neutral-500">
          Notes: Pricing depends on volumes, payer mix, and program selection. We provide complete
          documentation artifacts and audit logs with every SOW.
        </p>
      </Container>
    </main>
  );
}
