// components/blog/PostList.tsx
import { PostCard } from "./PostCard";
import type { BlogPostMeta } from "@/lib/blog";

export function PostList({ posts }: { posts: BlogPostMeta[] }) {
  if (!posts.length) {
    return (
      <p className="rounded-md border border-dashed border-neutral-300 bg-neutral-50 p-6 text-neutral-600">
        No posts yet. Add MDX files to <code>content/blog</code>.
      </p>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
      {posts.map((p) => (
        <PostCard key={p.slug} post={p} />
      ))}
    </div>
  );
}
