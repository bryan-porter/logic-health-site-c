// app/careers/page.tsx
import dynamic from "next/dynamic";

import { Container } from "@/components/ui/Container";

const CareersForm = dynamic(() => import("@/components/sections/CareersForm"), {
  loading: () => <div className="animate-pulse h-96 bg-gray-100 rounded-xl" />,
});

export const metadata = {
  title: "Careers | LogicHM",
  description:
    "Join Logic Health Management as a remote nurse or care‑management professional. Work inside partner EHRs, build real relationships with patients, and help providers deliver audit‑ready chronic care at scale.",
};

export default function CareersPage() {
  return (
    <section className="bg-white py-16 md:py-24">
      <Container>
        {/* Hero */}
        <header className="mx-auto max-w-3xl text-center">
          <p className="inline-flex items-center gap-2 rounded-full bg-primary-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary-700">
            Careers at LogicHM
          </p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-neutral-900 md:text-4xl">
            Help providers care for complex patients—without burning out
          </h1>
          <p className="mt-4 text-base leading-7 text-neutral-700 md:text-lg">
            Logic Health Management (LogicHM) runs care‑management programs{" "}
            <span className="font-semibold">inside our partners&apos; EHRs</span> for MSOs, practices, and small
            hospitals. Our remote nurses and care‑team members build long‑term relationships with high‑need patients,
            not just &quot;check the box&quot; calls.
          </p>
        </header>

        {/* Remote nurse spotlight */}
        <section className="mx-auto mt-12 max-w-5xl md:mt-16">
          <div className="grid gap-10 md:grid-cols-2 md:items-start">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-neutral-900">
                Remote work, real clinical impact
              </h2>
              <p className="mt-3 text-sm leading-6 text-neutral-700 md:text-base">
                If you&apos;re an RN, LPN, or experienced MA who loves talking with patients, organizing care, and
                closing loops—but you&apos;re done with 12‑hour shifts and constant hallway pivots—LogicHM may be a
                good fit.
              </p>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-neutral-700">
                <li>
                  • <span className="font-medium">Remote‑first:</span> Work from home while documenting directly in the
                  partner&apos;s EHR (no copy‑paste into mystery portals).
                </li>
                <li>
                  • <span className="font-medium">Relationship‑based:</span> Manage longitudinal panels of patients for
                  CCM, RPM, BHI, TCM, and care‑gap closure—not one‑off, scripted outbound campaigns.
                </li>
                <li>
                  • <span className="font-medium">Clinical‑grade workflows:</span> You operate under physician
                  supervision, using evidence‑based protocols and standardized templates that stand up to audits.
                </li>
                <li>
                  • <span className="font-medium">Predictable schedules:</span> No overnight hospital shifts; we focus
                  on sustainable hours and clear boundaries.
                </li>
              </ul>
            </div>
            <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-6 md:p-7">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-neutral-900">
                Who we&apos;re often hiring
              </h3>
              <ul className="mt-3 space-y-2 text-sm leading-6 text-neutral-700">
                <li>• RNs with ambulatory, cardiology, primary care, or care‑management experience</li>
                <li>• LPNs and LVNs with strong phone‑based assessment skills</li>
                <li>• MAs / health coaches experienced with chronic disease outreach</li>
                <li>• Behavioral health clinicians interested in BHI + CCM models</li>
              </ul>
              <p className="mt-4 text-xs text-neutral-500">
                Exact openings vary over time. If you don&apos;t see a public job posting that fits you yet, you can
                still introduce yourself below.
              </p>
            </div>
          </div>
        </section>

        {/* Company values */}
        <section className="mx-auto mt-16 max-w-5xl">
          <h2 className="text-2xl font-semibold tracking-tight text-neutral-900">How we work & what we value</h2>
          <p className="mt-3 text-sm leading-6 text-neutral-700 md:text-base">
            LogicHM exists to help providers deliver measurable outcomes while keeping every workflow{" "}
            <span className="font-semibold">compliant</span>,{" "}
            <span className="font-semibold">equity‑aware</span>, and{" "}
            <span className="font-semibold">sustainable for staff</span>. Our values are built around that.
          </p>

          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <div className="rounded-lg border border-neutral-200 bg-white p-5">
              <h3 className="text-sm font-semibold text-neutral-900">Clinical integrity over shortcuts</h3>
              <p className="mt-2 text-sm leading-6 text-neutral-700">
                We don&apos;t &quot;game&quot; minutes or copy‑paste notes. Every interaction has to make clinical sense and be
                defensible to patients, providers, and auditors.
              </p>
            </div>
            <div className="rounded-lg border border-neutral-200 bg-white p-5">
              <h3 className="text-sm font-semibold text-neutral-900">Remote, but not alone</h3>
              <p className="mt-2 text-sm leading-6 text-neutral-700">
                You&apos;ll work from home, but with a team: clinical leads, peers, and operations support who handle
                tech, schedules, and EHR workflows so you can focus on patients.
              </p>
            </div>
            <div className="rounded-lg border border-neutral-200 bg-white p-5">
              <h3 className="text-sm font-semibold text-neutral-900">Equity & respect for patients</h3>
              <p className="mt-2 text-sm leading-6 text-neutral-700">
                Many of our patients are older adults, rural residents, or living with multiple chronic conditions.
                We meet them with patience, clarity, and practical help—not judgment.
              </p>
            </div>
            <div className="rounded-lg border border-neutral-200 bg-white p-5">
              <h3 className="text-sm font-semibold text-neutral-900">Shared accountability</h3>
              <p className="mt-2 text-sm leading-6 text-neutral-700">
                We measure ourselves on clinical quality, patient experience, and partner trust—not just call volume
                or minutes logged. Everyone at LogicHM owns the outcome.
              </p>
            </div>
          </div>
        </section>

        {/* Tell us about you form */}
        <section className="mx-auto mt-16 max-w-5xl">
          <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-6 md:p-8">
            <div className="md:flex md:items-start md:justify-between">
              <div className="md:max-w-xl">
                <h2 className="text-xl font-semibold tracking-tight text-neutral-900 md:text-2xl">
                  Tell us about you
                </h2>
                <p className="mt-2 text-sm leading-6 text-neutral-700 md:text-base">
                  If you&apos;d like to explore working with LogicHM, share a few details about your background and what
                  you&apos;re looking for. We review every submission, even when we&apos;re not actively posting roles.
                </p>
              </div>
              <p className="mt-4 text-xs text-neutral-500 md:mt-0 md:text-right">
                We typically hire across the U.S. You&apos;ll need a reliable internet connection and a quiet, private
                space for patient calls.
              </p>
            </div>

            <CareersForm />
          </div>
        </section>
      </Container>
    </section>
  );
}
