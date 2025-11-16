// app/blog/page.tsx
import { Container } from "@/components/ui/Container";
import { PostList } from "@/components/blog/PostList";
import { getAllPosts } from "@/lib/blog";

export const metadata = {
  title: "Blog | LogicHM",
  description:
    "Clinical, operational, and compliance insights for CCM, RPM, AWV, BHI, PCM, RTM, TCM, CHI & PIN, and TEAMs programs.",
};

export default function BlogIndexPage() {
  const posts = getAllPosts();
  return (
    <section className="bg-white py-16 md:py-24">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-3xl font-bold tracking-tight text-neutral-900 md:text-4xl">
            Insights & Implementation Guides
          </h1>
          <p className="mt-4 text-lg text-neutral-700">
            Practical playbooks for building high‑impact, audit‑ready programs across outpatient
            and small hospital settings.
          </p>
        </div>

        <div className="mt-12">
          <PostList posts={posts} />
        </div>
      </Container>
    </section>
  );
}
