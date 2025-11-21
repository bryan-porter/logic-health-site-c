// lib/mdx-components.tsx
import type { MDXComponents } from "mdx/types";

import ChecklistCTA from "@/components/ChecklistCTA";
import { CTA } from "@/components/sections/CTA";

// Define which components are available in MDX files
export function getMDXComponents(): MDXComponents {
  return {
    // Custom components - these can be used in MDX without importing
    ChecklistCTA,
    CTA,

    // Override default HTML elements with styled versions
    h1: ({ children, ...props }) => (
      <h1 className="mt-8 text-3xl font-semibold text-neutral-900" {...props}>
        {children}
      </h1>
    ),
    h2: ({ children, ...props }) => (
      <h2 className="mt-8 text-2xl font-semibold text-neutral-900" {...props}>
        {children}
      </h2>
    ),
    h3: ({ children, ...props }) => (
      <h3 className="mt-6 text-xl font-semibold text-neutral-900" {...props}>
        {children}
      </h3>
    ),
    p: ({ children, ...props }) => (
      <p className="leading-7 text-neutral-800" {...props}>
        {children}
      </p>
    ),
    ul: ({ children, ...props }) => (
      <ul className="ml-6 list-disc space-y-1" {...props}>
        {children}
      </ul>
    ),
    ol: ({ children, ...props }) => (
      <ol className="ml-6 list-decimal space-y-1" {...props}>
        {children}
      </ol>
    ),
    li: ({ children, ...props }) => (
      <li className="leading-7 text-neutral-800" {...props}>
        {children}
      </li>
    ),
    code: ({ children, ...props }) => (
      <code className="rounded bg-neutral-100 px-1 py-0.5 text-[0.9em]" {...props}>
        {children}
      </code>
    ),
    a: ({ children, href, ...props }) => (
      <a
        href={href}
        className="underline underline-offset-2"
        target={href?.startsWith("http") ? "_blank" : undefined}
        rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
        {...props}
      >
        {children}
      </a>
    ),
    blockquote: ({ children, ...props }) => (
      <blockquote className="border-l-4 border-primary-600 pl-4 italic text-neutral-700" {...props}>
        {children}
      </blockquote>
    ),
    hr: (props) => (
      <hr className="my-8 border-neutral-200" {...props} />
    ),
  };
}
