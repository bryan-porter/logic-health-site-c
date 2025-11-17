"use client";

import { cn } from "@/lib/utils";

type ResourceKind = "Guide" | "Template" | "Checklist" | "Brief" | "Calculator" | "Tool";

export type ResourceItem = {
  key: string;
  kind: ResourceKind;
  title: string;
  blurb: string;
  href?: string;
  points?: string[];
};

export function ResourceCard({ kind, title, blurb, href = "/contact", points }: ResourceItem) {
  return (
    <a
      href={href}
      className={cn(
        "block h-full rounded-xl border border-neutral-200 bg-white p-5 shadow-sm transition-shadow hover:shadow-md"
      )}
      aria-label={title}
    >
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-base font-semibold text-neutral-900">{title}</h3>
        <span className="shrink-0 rounded-full bg-neutral-100 px-2.5 py-1 text-xs font-medium text-neutral-700">
          {kind}
        </span>
      </div>
      <p className="mt-2 text-sm text-neutral-600">{blurb}</p>
      {points?.length ? (
        <ul className="mt-3 space-y-1.5 text-sm text-neutral-700">
          {points.map((p, i) => (
            <li key={i} className="flex gap-2">
              <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-primary-500" />
              <span>{p}</span>
            </li>
          ))}
        </ul>
      ) : null}
      <div className="mt-4 text-sm font-semibold text-primary-700">Open →</div>
    </a>
  );
}

type ResourceGridProps = {
  heading: string;
  subheading?: string;
  items: ResourceItem[];
};

export function ResourceGrid({ heading, subheading, items }: ResourceGridProps) {
  return (
    <section className="bg-white py-10 md:py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold text-neutral-900 md:text-3xl">{heading}</h2>
          {subheading ? <p className="mt-2 text-neutral-600">{subheading}</p> : null}
        </div>
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map(({ key, ...rest }) => (
            <ResourceCard key={key} {...rest} />
          ))}
        </div>
      </div>
    </section>
  );
}
