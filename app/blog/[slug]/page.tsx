// app/blog/[slug]/page.tsx
import dynamic from "next/dynamic";
import Link from "next/link";
import { notFound } from "next/navigation";

import { PostCard } from "@/components/blog/PostCard";
import { PostHeader } from "@/components/blog/PostHeader";
import { ArticleJsonLd } from "@/components/seo/ArticleJsonLd";
import { Container } from "@/components/ui/Container";
import { getAllPosts, getPostBySlug, getRelatedPosts } from "@/lib/mdx";

const PostBody = dynamic(() => import("@/components/blog/PostBody").then(mod => ({ default: mod.PostBody })), {
  loading: () => <div className="mt-8 animate-pulse"><div className="h-96 bg-gray-100 rounded" /></div>,
});

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return { title: "Post not found | Blog | LogicHM" };

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://logichm.com';

  return {
    title: `${post.frontmatter.title} | Blog | LogicHM`,
    description: post.frontmatter.description || undefined,
    alternates: {
      canonical: `${baseUrl}/blog/${slug}`,
    },
    openGraph: {
      images: [post.frontmatter.image || '/og.png'],
    },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return notFound();

  const related = await getRelatedPosts(slug, 3);

  // Create a BlogPost-compatible object for PostHeader
  const postForHeader = {
    slug,
    ...post.frontmatter,
    content: "",
    readingTime: post.readingTime,
  };

  return (
    <div className="bg-white">
      <ArticleJsonLd
        url={`${process.env.NEXT_PUBLIC_SITE_URL ?? 'https://logichm.com'}/blog/${slug}`}
        title={post.frontmatter.title}
        description={post.frontmatter.description}
        image={post.frontmatter.image}
        datePublished={post.frontmatter.publishedAt}
        authorName={post.frontmatter.author}
      />
      <Container className="py-12 md:py-16 lg:py-20">
        <Link href="/blog" className="text-sm font-medium text-primary-700 hover:underline">
          ← Back to blog
        </Link>

        <article className="mx-auto mt-6 max-w-3xl">
          <PostHeader post={postForHeader} />
          <PostBody source={post.content} />
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
