// app/blog/[slug]/page.tsx
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArticleJsonLd } from "@/components/seo/ArticleJsonLd";
import { Container } from "@/components/ui/Container";
import { getAllPosts, getPostBySlug, getRelatedPosts } from "@/lib/blog";
import { PostHeader } from "@/components/blog/PostHeader";
import { PostBody } from "@/components/blog/PostBody";
import { PostCard } from "@/components/blog/PostCard";

export async function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Post not found | Blog | LogicHM" };

  // Use NEXT_PUBLIC_SITE_URL for canonical URLs if set, otherwise default to production domain.
  // In dev/preview: may be unset or point to preview URL; canonical still defaults to prod.
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://logichm.com';

  return {
    title: `${post.title} | Blog | LogicHM`,
    description: post.description || undefined,
    alternates: {
      canonical: `${baseUrl}/blog/${slug}`,
    },
    openGraph: {
      images: [post.image || '/og.png'],
    },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return notFound();

  const related = getRelatedPosts(slug, 3);

  return (
    <div className="bg-white">
      {/* ArticleJsonLd uses NEXT_PUBLIC_SITE_URL for structured data URL */}
      <ArticleJsonLd
        url={`${process.env.NEXT_PUBLIC_SITE_URL ?? 'https://logichm.com'}/blog/${post.slug}`}
        title={post.title}
        description={post.description}
        image={post.image}
        datePublished={post.publishedAt}
        authorName={post.author}
      />
      <Container className="py-12 md:py-16 lg:py-20">
        <Link href="/blog" className="text-sm font-medium text-primary-700 hover:underline">
          ← Back to blog
        </Link>

        <article className="mx-auto mt-6 max-w-3xl">
          <PostHeader post={post} />
          <PostBody content={post.content} />
        </article>

        {related.length > 0 && (
          <section className="mx-auto mt-16 max-w-5xl">
            <h3 className="text-lg font-semibold text-neutral-900">Related reading</h3>
            <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((r) => (
                <PostCard key={r.slug} post={r} />
              ))}
            </div>
          </section>
        )}
      </Container>
    </div>
  );
}
