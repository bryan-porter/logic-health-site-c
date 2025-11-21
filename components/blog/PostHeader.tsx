// components/blog/PostHeader.tsx
import { BlogPost } from "@/lib/types";

import { CategoryBadge } from "./CategoryBadge";

function formatDate(iso: string) {
  const d = new Date(iso);
  return isNaN(d.getTime())
    ? iso
    : d.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
}

export function PostHeader({ post }: { post: BlogPost }) {
  return (
    <header className="text-left">
      <div className="flex items-center gap-3">
        <CategoryBadge category={post.category} />
        {post.readingTime && (
          <span className="text-xs text-neutral-600">{post.readingTime}</span>
        )}
      </div>
      <h1 className="mt-3 text-3xl font-bold tracking-tight text-neutral-900 md:text-4xl">
        {post.title}
      </h1>
      <p className="mt-3 text-neutral-700">{post.description}</p>
      <div className="mt-4 text-sm text-neutral-600">
        {post.author && <span className="font-medium">{post.author}</span>}
        <span className="mx-2">•</span>
        <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
      </div>
    </header>
  );
}
