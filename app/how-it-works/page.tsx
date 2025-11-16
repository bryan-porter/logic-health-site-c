import { ProgramTiles } from "@/components/sections/ProgramTiles";

export default function HowItWorksPage() {
  return (
    <div>
      <section className="bg-neutral-50 py-12 md:py-16">
        <div className="mx-auto max-w-3xl px-6 lg:px-8 text-center">
          <h1 className="text-3xl font-bold tracking-tight text-neutral-900 md:text-4xl">
            How it works
          </h1>
          <p className="mt-4 text-neutral-700">
            Logic‑driven routing matrices, equity‑embedded workflows, and audit‑ready documentation—
            deployed as managed services across your patient panels and sites of care.
          </p>
        </div>
      </section>

      <ProgramTiles />
    </div>
  );
}
