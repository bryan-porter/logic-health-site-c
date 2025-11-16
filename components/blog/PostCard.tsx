// components/blog/PostCard.tsx
import Link from "next/link";
import type { BlogPost } from "@/lib/types";

interface PostCardProps {
  post: BlogPost;
}

export function PostCard({ post }: PostCardProps) {
  const date = new Date(post.publishedAt).toLocaleDateString(undefined, {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <article className="flex flex-col rounded-lg border border-neutral-200 bg-white shadow-sm transition-shadow hover:shadow-md">
      <Link href={`/blog/${post.slug}`} className="p-6">
        <div className="text-sm text-neutral-500">
          {date} • {post.readingTime}
        </div>
        <h3 className="mt-2 text-xl font-semibold text-neutral-900">{post.title}</h3>
        {post.description ? (
          <p className="mt-2 line-clamp-3 text-neutral-600">{post.description}</p>
        ) : null}
        <div className="mt-4 text-sm font-medium text-primary-600">Read more →</div>
      </Link>
    </article>
  );
}
