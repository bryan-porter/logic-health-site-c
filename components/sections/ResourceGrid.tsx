import { Container } from "@/components/ui/Container";

export interface ResourceItem {
  label: string;       // e.g., "Guide", "Calculator", "Template", "Packet"
  title: string;
  description: string;
  href: string;
  external?: boolean;
}

interface ResourceGridProps {
  heading?: string;
  subheading?: string;
  items: ResourceItem[];
  columns?: 2 | 3;
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-md bg-neutral-100 px-2.5 py-1 text-xs font-medium text-neutral-700 ring-1 ring-neutral-200">
      {children}
    </span>
  );
}

export function ResourceGrid({
  heading,
  subheading,
  items,
  columns = 3,
}: ResourceGridProps) {
  return (
    <section className="bg-white py-12 md:py-16">
      <Container>
        {(heading || subheading) && (
          <div className="mx-auto max-w-3xl text-center">
            {heading ? (
              <h2 className="text-2xl font-semibold text-neutral-900 md:text-3xl">
                {heading}
              </h2>
            ) : null}
            {subheading ? <p className="mt-3 text-neutral-700">{subheading}</p> : null}
          </div>
        )}

        <div
          className={[
            "mx-auto mt-8 grid max-w-6xl gap-6",
            columns === 2 ? "grid-cols-1 sm:grid-cols-2" : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
          ].join(" ")}
        >
          {items.map((it) => {
            const isExternal = it.external && /^https?:\/\//.test(it.href);
            return (
              <article
                key={it.title}
                className="group relative rounded-xl border border-neutral-200 bg-neutral-50 p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="flex items-start justify-between gap-4">
                  <Pill>{it.label}</Pill>
                </div>
                <h3 className="mt-3 text-lg font-semibold text-neutral-900">{it.title}</h3>
                <p className="mt-2 text-sm text-neutral-700">{it.description}</p>

                <a
                  href={it.href}
                  className="mt-4 inline-flex text-sm font-semibold text-primary-700"
                  {...(isExternal
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                >
                  {isExternal ? "Open" : "View"} →
                </a>

                {/* Full-card focus/hover affordance */}
                <span className="absolute inset-0 rounded-xl ring-1 ring-transparent focus-within:ring-primary-300" />
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
