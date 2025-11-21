// app/blog/page.tsx
import { PostList } from "@/components/blog/PostList";
import { Container } from "@/components/ui/Container";
import { getAllPosts } from "@/lib/blog";

export const metadata = {
  title: "Blog | LogicHM",
  description:
    "Insights on CCM, RPM, AWV, BHI, PCM, TCM, CHI/PIN, RTM and TEAMs—covering workflows, billing, compliance, and equity-by-design.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="bg-white">
      <Container className="py-16 md:py-24">
        <header className="mx-auto max-w-3xl text-center">
          <h1 className="text-3xl font-bold tracking-tight text-neutral-900 md:text-4xl">LogicHM Blog</h1>
          <p className="mt-4 text-lg text-neutral-700">
            Practical guidance for physician practices, provider groups, and small hospitals—built on compliance, outcomes, and
            operational reality.
          </p>
        </header>

        <PostList posts={posts} />
      </Container>
    </div>
  );
}
