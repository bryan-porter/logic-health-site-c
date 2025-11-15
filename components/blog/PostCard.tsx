import Link from "next/link";
import { BlogPost } from "@/lib/types";

interface PostCardProps {
  post: BlogPost;
}

export function PostCard({ post }: PostCardProps) {
  return (
    <article className="flex flex-col rounded-lg border border-neutral-200 bg-white shadow-sm transition-shadow hover:shadow-md">
      <Link href={`/blog/${post.slug}`}>
        <div className="p-6">
          <div className="mb-2 text-sm text-neutral-500">{post.publishedAt}</div>
          <h3 className="mb-2 text-xl font-semibold text-neutral-900">
            {post.title}
          </h3>
          <p className="text-neutral-600">{post.description}</p>
          <div className="mt-4 text-sm font-medium text-primary-600">
            Read more →
          </div>
        </div>
      </Link>
    </article>
  );
}
