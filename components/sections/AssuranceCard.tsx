import { cn } from "@/lib/utils";

interface AssuranceCardProps {
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  description?: string;
  bullets?: string[];
  className?: string;
}

export function AssuranceCard({
  Icon,
  title,
  description,
  bullets,
  className,
}: AssuranceCardProps) {
  return (
    <article
      className={cn(
        "h-full rounded-lg border border-neutral-200 bg-white p-6 shadow-sm",
        "transition-shadow hover:shadow-md",
        className
      )}
    >
      <div className="flex items-start gap-4">
        <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-md bg-primary-50">
          <Icon className="size-5 stroke-[1.6] text-primary-600" aria-hidden="true" />
        </span>
        <div className="min-w-0">
          <h3 className="text-base font-semibold text-neutral-900">{title}</h3>
          {description && (
            <p className="mt-1 text-sm text-neutral-600">{description}</p>
          )}
        </div>
      </div>

      {bullets && bullets.length > 0 && (
        <ul className="mt-4 list-disc space-y-1 pl-6 text-sm text-neutral-700">
          {bullets.map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>
      )}
    </article>
  );
}
