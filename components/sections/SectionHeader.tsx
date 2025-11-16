import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = "left",
  className,
}: SectionHeaderProps) {
  const alignClass = align === "center" ? "text-center" : "text-left";
  return (
    <header className={cn("mx-auto max-w-3xl", alignClass, className)}>
      {eyebrow && (
        <p className="text-xs font-medium uppercase tracking-wide text-primary-600">
          {eyebrow}
        </p>
      )}
      <h2 className="mt-1 text-2xl font-semibold text-neutral-900 md:text-3xl">
        {title}
      </h2>
      {subtitle && <p className="mt-2 text-neutral-600">{subtitle}</p>}
    </header>
  );
}
