"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";

interface ChecklistCTAProps {
  variant?: "inline" | "banner";
  href?: string;
  utm?: string;
  className?: string;
}

export default function ChecklistCTA({
  variant = "banner",
  href = "/api/checklist/pdf",
  utm = "?utm_source=site&utm_medium=cta&utm_campaign=ccm-rpm-readiness-checklist",
  className,
}: ChecklistCTAProps) {
  const base =
    "rounded-md border border-neutral-200 bg-white/80 px-4 py-4 md:px-6 md:py-5 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-white/60";
  const layout = variant === "banner" ? "my-8 md:my-10" : "my-4";
  return (
    <aside className={cn(base, layout, className)}>
      <h3 className="text-lg font-semibold text-neutral-900">
        CCM/RPM Readiness Checklist
      </h3>
      <p className="mt-1 text-sm text-neutral-700">
        A 2-page, audit-ready checklist to assess whether your workflows, integration, billing, and
        patient engagement are prepared for CCM and RPM—built for physician practices, small
        hospitals, and RHCs/FQHCs.
      </p>
      <div className="mt-3">
        <Link
          href={`${href}${utm}`}
          className="inline-flex items-center rounded-md border border-neutral-900 px-3 py-2 text-sm font-medium text-neutral-900 hover:bg-neutral-900 hover:text-white"
        >
          Download the 2-page PDF
        </Link>
      </div>
    </aside>
  );
}
