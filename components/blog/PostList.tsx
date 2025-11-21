// components/blog/PostList.tsx
import { BlogPost } from "@/lib/types";

import { PostCard } from "./PostCard";

export function PostList({ posts }: { posts: BlogPost[] }) {
  if (!posts.length) {
    return (
      <p className="mt-8 text-neutral-600">
        No posts yet. Add files under <code className="rounded bg-neutral-100 px-1">/content/blog</code>.
      </p>
    );
  }
  return (
    <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {posts.map((p) => (
        <PostCard key={p.slug} post={p} />
      ))}
    </div>
  );
}
