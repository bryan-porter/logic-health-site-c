// components/blog/PostBody.tsx
import { MDXRemote } from "next-mdx-remote/rsc";

import { getMDXComponents } from "@/lib/mdx-components";

interface PostBodyProps {
  source: string;
}

export function PostBody({ source }: PostBodyProps) {
  const components = getMDXComponents();

  return (
    <section className="mt-8">
      <div className="prose prose-neutral max-w-none space-y-4">
        <MDXRemote source={source} components={components} />
      </div>
    </section>
  );
}
