// app/solutions/page.tsx
import { CTA } from "@/components/sections/CTA";
import KPIStrip from "@/components/sections/KPIStrip";
import ProgramsGrid from "@/components/sections/ProgramsGrid";
import SolutionsHero from "@/components/sections/SolutionsHero";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Solutions',
  description:
    'Comprehensive CCM and RPM solutions for physician practices and small hospitals. Explore our programs designed to improve patient outcomes and generate predictable revenue.',
  alternates: {
    canonical: '/solutions',
  },
};

export default function SolutionsIndexPage() {
  return (
    <div className="bg-white">
      <SolutionsHero />
      <KPIStrip />
      <ProgramsGrid />
      <CTA
        headline="Design a small‑hospital program that works on day one"
        description="We&apos;ll map staffing, supervision, and escalation logic to your environment and EHR."
        buttonText="Schedule a 15‑minute strategy call"
        buttonHref="/contact"
        variant="secondary"
      />
    </div>
  );
}
