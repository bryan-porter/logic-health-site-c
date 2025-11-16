// app/solutions/page.tsx
import SolutionsHero from "@/components/sections/SolutionsHero";
import KPIStrip from "@/components/sections/KPIStrip";
import ProgramsGrid from "@/components/sections/ProgramsGrid";
import { CTA } from "@/components/sections/CTA";

export default function SolutionsIndexPage() {
  return (
    <div className="bg-white">
      <SolutionsHero />
      <KPIStrip />
      <ProgramsGrid />
      <CTA
        headline="Design a small‑hospital program that works on day one"
        description="We'll map staffing, supervision, and escalation logic to your environment and EHR."
        buttonText="Schedule a 15‑minute strategy call"
        buttonHref="/contact"
        variant="secondary"
      />
    </div>
  );
}
