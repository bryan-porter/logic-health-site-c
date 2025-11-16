// components/blog/PostBody.tsx
import { MDXRemote } from "next-mdx-remote/rsc";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";

interface PostBodyProps {
  source: string; // raw MDX string
}

const components = {
  // Example: map <Stats /> or other React components if you want to embed them inside MDX
  // Stats: (props: any) => <div className="rounded-md bg-neutral-50 p-4">[Stats placeholder]</div>,
};

export function PostBody({ source }: PostBodyProps) {
  return (
    <article className="prose mx-auto mt-8 max-w-3xl prose-headings:scroll-mt-24 prose-a:text-primary-600 hover:prose-a:underline">
      <MDXRemote
        source={source}
        options={{
          mdxOptions: {
            rehypePlugins: [
              rehypeSlug,
              [rehypeAutolinkHeadings, { behavior: "append", properties: { ariaLabel: "Link to section" } }],
            ],
          },
        }}
        components={components as any}
      />
    </article>
  );
}
