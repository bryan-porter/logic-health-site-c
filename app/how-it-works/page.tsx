import type { Metadata } from "next";
import { ProgramTiles } from "@/components/sections/ProgramTiles";
import { HowItWorksTiles } from "@/components/sections/HowItWorksTiles";

export const metadata: Metadata = {
  title: 'How It Works',
  description:
    'Learn how LogicHM delivers end-to-end CMS-recognized CCM and RPM programs integrated with your EHR, aligned to supervision rules, and measured against outcomes and ROI.',
};

export default function HowItWorksPage() {
  return (
    <div>
      <section className="bg-neutral-50 py-12 md:py-16">
        <div className="mx-auto max-w-3xl px-6 lg:px-8 text-center">
          <h1 className="text-3xl font-bold tracking-tight text-neutral-900 md:text-4xl">
            How it works
          </h1>
          <p className="mt-4 text-neutral-700">
            We design and operate CMS‑recognized programs end‑to‑end—integrated with your EHR,
            aligned to supervision rules, and measured against outcomes and ROI.
          </p>
        </div>
      </section>

      <ProgramTiles />
      <HowItWorksTiles />
    </div>
  );
}
