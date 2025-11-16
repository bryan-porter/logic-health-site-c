// components/blog/PostHeader.tsx
import { cn } from "@/lib/utils";

interface PostHeaderProps {
  title: string;
  description?: string;
  publishedAt: string; // ISO
  author?: string;
  readingTime?: string;
  className?: string;
}

export function PostHeader({
  title,
  description,
  publishedAt,
  author = "LogicHM Editorial",
  readingTime,
  className,
}: PostHeaderProps) {
  const date = new Date(publishedAt).toLocaleDateString(undefined, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <header className={cn("mx-auto max-w-3xl", className)}>
      <p className="text-sm text-neutral-500">
        {date} • {author}
        {readingTime ? ` • ${readingTime}` : null}
      </p>
      <h1 className="mt-2 text-3xl font-bold tracking-tight text-neutral-900 md:text-4xl">
        {title}
      </h1>
      {description ? (
        <p className="mt-3 text-lg text-neutral-700">{description}</p>
      ) : null}
    </header>
  );
}
