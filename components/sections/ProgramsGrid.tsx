// components/sections/ProgramsGrid.tsx
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import type { Program } from "@/lib/types";

interface ProgramsGridProps {
  title?: string;
  subtitle?: string;
  programs: Program[];
}

export function ProgramsGrid({
  title = "Programs We Operate",
  subtitle,
  programs,
}: ProgramsGridProps) {
  return (
    <section className="bg-neutral-50 py-16 md:py-24">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-neutral-900 md:text-4xl">
            {title}
          </h2>
          {subtitle ? (
            <p className="mt-4 text-lg text-neutral-700">{subtitle}</p>
          ) : null}
        </div>

        <div className="mx-auto mt-10 grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {programs.map((p) => {
            const Card = (
              <article
                key={p.key}
                className="group rounded-xl border border-neutral-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-50 ring-1 ring-primary-200">
                  <span aria-hidden className="text-lg">{p.icon ?? "•"}</span>
                </div>
                <h3 className="mt-4 text-lg font-semibold text-neutral-900">
                  {p.title}
                </h3>
                <p className="mt-2 text-neutral-700">{p.description}</p>
                {p.href ? (
                  <div className="mt-4 text-sm font-medium text-primary-600">
                    <span className="inline-flex items-center gap-1">
                      Learn more <span aria-hidden>→</span>
                    </span>
                  </div>
                ) : null}
              </article>
            );

            return p.href ? (
              <Link
                key={p.key}
                href={p.href}
                aria-label={`Learn more about ${p.title}`}
                className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500"
              >
                {Card}
              </Link>
            ) : (
              Card
            );
          })}
        </div>
      </Container>
    </section>
  );
}
