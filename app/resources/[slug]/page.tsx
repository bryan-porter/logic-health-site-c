// app/resources/[slug]/page.tsx
import Link from "next/link";
import { notFound } from "next/navigation";

import { PostBody } from "@/components/blog/PostBody";
import { PostHeader } from "@/components/blog/PostHeader";
import { ArticleJsonLd } from "@/components/seo/ArticleJsonLd";
import { Container } from "@/components/ui/Container";
import { getAllResources, getResourceBySlug } from "@/lib/mdx";

export async function generateStaticParams() {
  const resources = await getAllResources();
  return resources.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const resource = await getResourceBySlug(slug);
  if (!resource) return { title: "Resource not found | Resources | LogicHM" };

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://logichm.com';

  return {
    title: `${resource.frontmatter.title} | Resources | LogicHM`,
    description: resource.frontmatter.description || undefined,
    alternates: {
      canonical: `${baseUrl}/resources/${slug}`,
    },
    openGraph: {
      images: [resource.frontmatter.image || '/og.png'],
    },
  };
}

export default async function ResourcePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const resource = await getResourceBySlug(slug);
  if (!resource) return notFound();

  // Create a BlogPost-compatible object for PostHeader
  const resourceForHeader = {
    slug,
    ...resource.frontmatter,
    content: "",
    readingTime: resource.readingTime,
  };

  return (
    <div className="bg-white">
      <ArticleJsonLd
        url={`${process.env.NEXT_PUBLIC_SITE_URL ?? 'https://logichm.com'}/resources/${slug}`}
        title={resource.frontmatter.title}
        description={resource.frontmatter.description}
        image={resource.frontmatter.image}
        datePublished={resource.frontmatter.publishedAt}
        authorName={resource.frontmatter.author}
      />
      <Container className="py-12 md:py-16 lg:py-20">
        <Link href="/resources" className="text-sm font-medium text-primary-700 hover:underline">
          ← Back to resources
        </Link>

        <article className="mx-auto mt-6 max-w-3xl">
          <PostHeader post={resourceForHeader} />
          <PostBody source={resource.content} />
        </article>
      </Container>
    </div>
  );
}
