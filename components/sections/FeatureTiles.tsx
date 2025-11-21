// components/sections/FeatureTiles.tsx
"use client";

import { Container } from "@/components/ui/Container";
import {
  ShieldCheck, // Compliance
  LineChart,   // Outcomes/ROI
  Users,       // Team-based care
  HeartPulse,  // Clinical programs
} from "lucide-react";

type Feature = {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  body: string;
};

const FEATURES: Feature[] = [
  {
    icon: ShieldCheck,
    title: "Compliance-First",
    body:
      "HIPAA, SOC 2, audit-ready documentation. Supervisory logic mapped to CPT, HCPCS, ICD-10, and Z-codes.",
  },
  {
    icon: LineChart,
    title: "Measurable ROI",
    body:
      "Program design that drives attributable revenue and total-cost-of-care impact, not just device drops.",
  },
  {
    icon: Users,
    title: "Team-Based Workflows",
    body:
      "Routing matrices and escalation paths that fit your staffing model—from solo practice to small hospitals.",
  },
  {
    icon: HeartPulse,
    title: "End-to-End Models",
    body:
      "AWV, Prevention & Wellness, CCM, BHI, PCM, RPM/RTM, TCM, CHI/PIN, and TEAMs—run coherently, at scale.",
  },
];

export default function FeatureTiles({
  title = "Why It Matters",
  caption = "Where compliance meets outcomes. Purpose-built workflows that scale quality and revenue.",
}: {
  title?: string;
  caption?: string;
}) {
  return (
    <section className="bg-neutral-50 py-16 md:py-24">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 md:text-3xl">
            {title}
          </h2>
          <p className="mt-3 text-neutral-700 max-w-2xl mx-auto">{caption}</p>
        </div>

        <div className="mx-auto mt-10 grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((f, i) => {
            const Icon = f.icon;
            return (
              <div
                key={i}
                className="group rounded-xl border border-neutral-200 bg-white p-6 transition-shadow hover:shadow-md"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-neutral-200">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className="text-base font-semibold text-neutral-900">{f.title}</h3>
                </div>
                <p className="mt-3 text-sm text-neutral-600">{f.body}</p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
