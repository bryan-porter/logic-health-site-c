// app/solutions/page.tsx
import Image from "next/image";

import { CTA } from "@/components/sections/CTA";
import { Container } from "@/components/ui/Container";
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

      {/* Hero Image */}
      <section className="bg-white py-12 md:py-16">
        <Container>
          <div className="flex justify-center animate-float-slow">
            <div className="relative w-full max-w-3xl">
              <Image
                src="/images/bridge.png"
                alt="Bridge care from clinics to hospitals with EHR integrations."
                width={1600}
                height={900}
                priority
                className="h-auto w-full rounded-2xl shadow-xl object-cover transition-transform duration-500 hover:scale-[1.03] hover:shadow-2xl"
              />
            </div>
          </div>
        </Container>
      </section>

      <CTA
        headline="Design a program that works on day one"
        description="We&apos;ll map staffing, supervision, and escalation logic to your environment and EHR."
        buttonText="Schedule a 15‑minute strategy call"
        buttonHref="/contact"
        variant="secondary"
      />
    </div>
  );
}
