// components/blog/CategoryBadge.tsx
export function CategoryBadge({ category }: { category?: string }) {
  if (!category) return null;
  return (
    <span className="inline-flex items-center rounded-full bg-neutral-100 px-2.5 py-1 text-xs font-medium text-neutral-700">
      {category}
    </span>
  );
}
