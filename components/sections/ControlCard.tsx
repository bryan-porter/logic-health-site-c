import { cn } from "@/lib/utils";

export type ControlStatus =
  | "Certified"
  | "Aligned"
  | "In-Progress"
  | "Available"
  | "Not Applicable";

export interface ControlItem {
  label: string;
  status: ControlStatus;
  description?: string;
  docHref?: string;
}

const statusStyles: Record<ControlStatus, string> = {
  Certified: "bg-emerald-50 text-emerald-700 ring-emerald-200",
  Aligned: "bg-blue-50 text-blue-700 ring-blue-200",
  "In-Progress": "bg-amber-50 text-amber-700 ring-amber-200",
  Available: "bg-slate-50 text-slate-700 ring-slate-200",
  "Not Applicable": "bg-neutral-50 text-neutral-600 ring-neutral-200",
};

interface ControlCardProps {
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  item: ControlItem;
  className?: string;
}

export function ControlCard({ Icon, item, className }: ControlCardProps) {
  return (
    <article
      className={cn(
        "h-full rounded-lg border border-neutral-200 bg-white p-6 shadow-sm",
        "transition-shadow hover:shadow-md",
        className
      )}
    >
      <div className="flex items-start gap-4">
        <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-md bg-neutral-50">
          <Icon className="size-5 stroke-[1.6] text-neutral-700" aria-hidden="true" />
        </span>

        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="text-base font-semibold text-neutral-900">{item.label}</h3>
            <span
              className={cn(
                "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ring-1 ring-inset",
                statusStyles[item.status]
              )}
            >
              {item.status}
            </span>
          </div>

          {item.description && (
            <p className="mt-2 text-sm leading-6 text-neutral-600">
              {item.description}
            </p>
          )}

          {item.docHref && (
            <a
              href={item.docHref}
              className="mt-3 inline-flex text-sm font-medium text-primary-600 hover:underline"
            >
              View documentation →
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
