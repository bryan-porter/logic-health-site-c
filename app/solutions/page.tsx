// app/solutions/page.tsx
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { ProgramTiles } from "@/components/sections/ProgramTiles";
import { Button } from "@/components/ui/Button";

export default function SolutionsIndexPage() {
  return (
    <div className="bg-white">
      {/* Header / intro */}
      <section className="bg-neutral-50 py-16 md:py-24">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-3xl font-bold tracking-tight text-neutral-900 md:text-4xl">
              Solutions
            </h1>
            <p className="mt-4 text-neutral-700">
              We integrate clinical logic, regulatory nuance, and team‑based workflows across the
              full spectrum of CMS‑recognized models—so you can deliver high‑impact, audit‑ready
              care at scale.
            </p>
          </div>

          {/* Quick "Why us" strip (optional but keeps the page self-contained) */}
          <div className="mx-auto mt-10 grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3">
            <div className="rounded-xl border border-neutral-200 bg-white p-6">
              <h3 className="text-base font-semibold text-neutral-900">Logic‑Driven Design</h3>
              <p className="mt-2 text-sm text-neutral-600">
                Routing matrices, supervision engines, and dashboards aligned with CPT, HCPCS,
                ICD‑10, and Z‑Codes.
              </p>
            </div>
            <div className="rounded-xl border border-neutral-200 bg-white p-6">
              <h3 className="text-base font-semibold text-neutral-900">Equity Embedded</h3>
              <p className="mt-2 text-sm text-neutral-600">
                SDoH, PROMs, and demographic overlays ensure inclusive, patient‑centered care.
              </p>
            </div>
            <div className="rounded-xl border border-neutral-200 bg-white p-6">
              <h3 className="text-base font-semibold text-neutral-900">Audit‑Ready & Scalable</h3>
              <p className="mt-2 text-sm text-neutral-600">
                Built for compliance and growth—from solo practices to hospital systems.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Programs grid (lucide icons) */}
      <ProgramTiles
        title="Programs We Operate"
        caption="From prevention to post‑acute transitions, we support end‑to‑end, CMS‑recognized care models."
      />

      {/* CTA footer */}
      <section className="py-16 md:py-24">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 md:text-3xl">
              Ready to align care, compliance, and revenue?
            </h2>
            <p className="mt-3 text-neutral-700">
              See how LogicHM launches programs in weeks—not months—while keeping billing airtight.
            </p>
            <div className="mt-6 inline-flex gap-3">
              <Button href="/contact">Request a 15‑min consult</Button>
              <Link
                href="/resources"
                className="inline-flex items-center rounded-md border border-neutral-300 px-5 py-3 text-sm font-medium text-neutral-700 hover:bg-neutral-50"
              >
                Explore resources
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
