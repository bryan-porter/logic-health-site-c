// components/blog/PostBody.tsx
// Lightweight, safe markdown-ish renderer for .md/.mdx previews (no installs).
// Supports headings (#/##/###), lists (-/*/1.), bold/italics/code, links.

function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function inlineMd(s: string) {
  // code first to avoid styling inside code
  s = s.replace(/`([^`]+)`/g, "<code class='rounded bg-neutral-100 px-1 py-0.5 text-[0.9em]'>$1</code>");
  // links
  s = s.replace(/\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g, "<a class='underline underline-offset-2' target='_blank' rel='noopener' href='$2'>$1</a>");
  // bold
  s = s.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
  // italics
  s = s.replace(/\*([^*]+)\*/g, "<em>$1</em>");
  return s;
}

function blockToHtml(block: string): string {
  const b = block.trim();
  if (!b) return "";

  // Lists
  if (/^(\-|\*|\d+\.)\s/m.test(b)) {
    const lines = b.split(/\r?\n/).map((l) => l.trim()).filter(Boolean);
    const isOrdered = /^\d+\.\s/.test(lines[0] ?? '');
    const items = lines.map((l) => {
      const item = l.replace(/^(\-|\*|\d+\.)\s+/, "");
      return `<li class="leading-7 text-neutral-800">${inlineMd(escapeHtml(item))}</li>`;
    });
    return isOrdered
      ? `<ol class="ml-6 list-decimal space-y-1">${items.join("")}</ol>`
      : `<ul class="ml-6 list-disc space-y-1">${items.join("")}</ul>`;
  }

  // Headings
  const m = b.match(/^(#{1,6})\s+(.*)$/);
  if (m && m[1] && m[2]) {
    const level = Math.min(3, m[1].length); // clamp to h1..h3 for style
    const txt = inlineMd(escapeHtml(m[2]));
    const size = level === 1 ? "text-3xl" : level === 2 ? "text-2xl" : "text-xl";
    return `<h${level} class="mt-8 ${size} font-semibold text-neutral-900">${txt}</h${level}>`;
  }

  // Paragraph
  return `<p class="leading-7 text-neutral-800">${inlineMd(escapeHtml(b))}</p>`;
}

function renderMarkdownLite(md: string): string {
  const blocks = md.split(/\r?\n\s*\r?\n/); // blank-line split
  return blocks.map(blockToHtml).join("\n");
}

export function PostBody({ content }: { content?: string }) {
  const html = renderMarkdownLite(content || "");
  return (
    <section className="mt-8">
      <div
        className="space-y-4"
        dangerouslySetInnerHTML={{ __html: html }}
      />
      {/* Note for MDX components */}
      {content && /<[A-Za-z]/.test(content) && (
        <p className="mt-6 text-sm text-neutral-500">
          Note: Inline MDX components are omitted in this preview. They will render once full MDX is enabled.
        </p>
      )}
    </section>
  );
}
