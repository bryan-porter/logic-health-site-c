// app/blog/[slug]/page.tsx
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { getAllPosts, getPostBySlug, getRelatedPosts } from "@/lib/blog";
import { PostHeader } from "@/components/blog/PostHeader";
import { PostBody } from "@/components/blog/PostBody";
import Link from "next/link";

export async function generateStaticParams() {
  // Optional: enables static generation when you build
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  if (!post) return notFound();

  const related = getRelatedPosts(post.slug, post.category, 3);

  return (
    <section className="bg-white py-12 md:py-20">
      <Container>
        <PostHeader
          title={post.title}
          description={post.description}
          publishedAt={post.publishedAt}
          author={post.author}
          readingTime={post.readingTime}
        />
        <PostBody source={post.content} />

        {related.length ? (
          <div className="mx-auto mt-16 max-w-3xl">
            <h2 className="text-xl font-semibold text-neutral-900">Related reading</h2>
            <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {related.map((p) => (
                <li key={p.slug} className="rounded-md border border-neutral-200 p-4">
                  <Link
                    href={`/blog/${p.slug}`}
                    className="font-medium text-primary-600 hover:underline"
                  >
                    {p.title}
                  </Link>
                  <div className="mt-1 text-sm text-neutral-500">
                    {new Date(p.publishedAt).toLocaleDateString()}
                    {p.readingTime ? ` • ${p.readingTime}` : null}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </Container>
    </section>
  );
}
