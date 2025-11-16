// components/sections/ProgramsGrid.tsx
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import {
  ClipboardCheck,   // AWV
  ShieldCheck,      // Prevention & Wellness
  Stethoscope,      // CCM
  Brain,            // BHI
  ClipboardList,    // PCM
  Activity,         // RPM
  Smartphone,       // RTM
  LogOut,           // TCM
  MapPin,           // CHI & PIN
  Users,            // TEAMs
} from "lucide-react";

type Program = {
  title: string;
  body: string;
  href: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  active?: boolean;
};

const PROGRAMS: Program[] = [
  {
    title: "Annual Wellness Visit (AWV)",
    body: "Personalized prevention plans, HRA logic, and Z‑code capture aligned with CMS.",
    href: "/contact?program=awv",
    icon: ClipboardCheck,
  },
  {
    title: "Prevention & Wellness",
    body: "Evidence‑based screenings, immunizations, and lifestyle interventions (CMS + USPSTF).",
    href: "/contact?program=prevention",
    icon: ShieldCheck,
  },
  {
    title: "Chronic Care Management (CCM)",
    body: "Streamlined documentation, supervision logic, and Z‑code overlays.",
    href: "/solutions/ccm",
    icon: Stethoscope,
    active: true,
  },
  {
    title: "Behavioral Health Integration (BHI)",
    body: "Embedded PROMs and risk stratification for integrated behavioral care.",
    href: "/contact?program=bhi",
    icon: Brain,
  },
  {
    title: "Principal Care Management (PCM)",
    body: "Specialty‑aligned protocols for high‑risk, single‑condition patients.",
    href: "/contact?program=pcm",
    icon: ClipboardList,
  },
  {
    title: "Remote Patient Monitoring (RPM)",
    body: "Device integration, alert routing, and compliance dashboards.",
    href: "/solutions/rpm",
    icon: Activity,
    active: true,
  },
  {
    title: "Remote Therapeutic Monitoring (RTM)",
    body: "Track non‑physiological data like therapy adherence and pain levels.",
    href: "/contact?program=rtm",
    icon: Smartphone,
  },
  {
    title: "Transitional Care Management (TCM)",
    body: "Discharge coordination, care management, and equity mapping.",
    href: "/contact?program=tcm",
    icon: LogOut,
  },
  {
    title: "CHI & PIN",
    body: "Community Health Integration & Principal Illness Navigation with SDoH workflows.",
    href: "/contact?program=chi-pin",
    icon: MapPin,
  },
  {
    title: "TEAMs",
    body: "Team Evaluation & Augmented Management for scalable inpatient/outpatient care.",
    href: "/contact?program=teams",
    icon: Users,
  },
];

export default function ProgramsGrid() {
  return (
    <section className="bg-neutral-50 py-16 md:py-24">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 md:text-3xl">
            Programs We Operate
          </h2>
          <p className="mt-3 text-neutral-700">
            Logic‑driven design. Equity embedded. Audit‑ready at scale.
          </p>
        </div>

        <div className="mx-auto mt-10 grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PROGRAMS.map((p, i) => {
            const Icon = p.icon;
            const card = (
              <div className="h-full rounded-xl border border-neutral-200 bg-white p-6 transition-shadow hover:shadow-md">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-neutral-200">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className="text-base font-semibold text-neutral-900">{p.title}</h3>
                </div>
                <p className="mt-3 text-sm text-neutral-600">{p.body}</p>
                <div className="mt-4 text-sm font-medium text-primary-600">
                  {p.active ? "Explore program →" : "Request details →"}
                </div>
              </div>
            );

            return (
              <div key={i} className="h-full">
                {p.active ? (
                  <Link href={p.href} className="block h-full">
                    {card}
                  </Link>
                ) : (
                  <Link href={p.href} className="block h-full">
                    {card}
                  </Link>
                )}
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
