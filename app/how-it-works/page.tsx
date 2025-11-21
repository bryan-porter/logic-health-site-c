import { HowItWorksTiles } from "@/components/sections/HowItWorksTiles";
import { ProgramTiles } from "@/components/sections/ProgramTiles";
import { Container } from "@/components/ui/Container";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'How It Works',
  description:
    'See how LOGIC runs CCM, RPM, and related care-management programs as a centralized team inside your EHR—with CPOM-safe role design, MSO-ready standardization, rural-ready workflows, and clear revenue and quality reporting.',
  alternates: {
    canonical: '/how-it-works',
  },
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
            LOGIC becomes your centralized care-management team, running CCM, RPM, and related CMS-recognized programs inside your EHR. We standardize workflows across sites, respect CPOM boundaries, and measure performance in revenue, outcomes, and reduced acute utilization.
          </p>
          <p className="mt-3 text-sm text-neutral-600">
            You get one operating model that works for MSOs, IPAs, small hospitals, and rural RHCs/FQHCs—without hiring a new team or standing up yet another platform.
          </p>
        </div>
      </section>

      <ProgramTiles />
      <HowItWorksTiles />

      {/* Built for MSOs, IPAs, and rural providers */}
      <section className="border-t border-neutral-200 bg-neutral-50 py-16 md:py-20">
        <Container>
          <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 md:text-3xl">
            Built for MSOs, IPAs, and rural providers
          </h2>
          <p className="mt-3 max-w-3xl text-sm text-neutral-700">
            The same operating model flexes for different organizations: large MSOs and IPAs, small hospitals, and rural RHCs/FQHCs. What changes is how we tune staffing, device strategies, and reporting—not the underlying playbook.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {/* Card 1 – MSO & IPA overlay */}
            <div className="rounded-lg border border-neutral-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-neutral-900">
                MSO and IPA overlay: one playbook across sites
              </h3>
              <p className="mt-2 text-sm text-neutral-700">
                MSOs and IPAs fight margin pressure and variability by site. LOGIC standardizes care-management workflows across practices—eligibility lists, templates, time tracking, and QA—so you have one model for CCM and RPM and a single set of metrics to roll up to the board.
              </p>
            </div>

            {/* Card 2 – Rural blueprint */}
            <div className="rounded-lg border border-neutral-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-neutral-900">
                Rural blueprint for RHCs and FQHCs
              </h3>
              <p className="mt-2 text-sm text-neutral-700">
                Rural clinics run on thin staff and tight budgets. We design workflows around G0511-driven revenue, low bandwidth, and transportation barriers—shared care teams, phone-first outreach, and simple device strategies that don&apos;t require a big capital spend.
              </p>
            </div>

            {/* Card 3 – Governance & CPOM */}
            <div className="rounded-lg border border-neutral-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-neutral-900">
                Governance and CPOM-safe role design
              </h3>
              <p className="mt-2 text-sm text-neutral-700">
                LOGIC operates under your supervision policies and management agreements. Physicians make clinical decisions and sign off on plans; our teams execute defined tasks, document carefully, and stay inside clearly documented CPOM boundaries.
              </p>
            </div>

            {/* Card 4 – Measurement & ROI */}
            <div className="rounded-lg border border-neutral-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-neutral-900">
                Measurement and ROI your CFO can trust
              </h3>
              <p className="mt-2 text-sm text-neutral-700">
                We baseline assumptions with your finance team, then report on incremental revenue per enrolled patient, ED and hospital utilization trends, care-gap closure, and documentation quality—by practice, payer, and program—so you can defend the investment.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
