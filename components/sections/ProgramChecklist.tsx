import { cn } from "@/lib/utils";
import { Check } from "@/components/icons";

export interface ChecklistItem {
  text: string;
}

interface ProgramChecklistProps {
  title?: string;
  items: ChecklistItem[];
  className?: string;
}

export function ProgramChecklist({ title, items, className }: ProgramChecklistProps) {
  return (
    <section className={cn("rounded-lg border border-neutral-200 bg-white p-6 shadow-sm", className)}>
      {title && <h3 className="text-base font-semibold text-neutral-900">{title}</h3>}
      <ul className={cn("mt-2 space-y-2", !title && "mt-0")}>
        {items.map((it, i) => (
          <li key={i} className="flex gap-3 text-sm text-neutral-700">
            <span className="mt-0.5 inline-flex size-5 shrink-0 items-center justify-center rounded-full bg-emerald-50">
              <Check className="size-3.5 stroke-[2] text-emerald-600" aria-hidden="true" />
            </span>
            <span>{it.text}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
