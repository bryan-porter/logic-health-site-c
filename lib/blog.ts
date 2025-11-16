// lib/blog.ts
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";

export interface BlogFrontmatter {
  title: string;
  description?: string;
  publishedAt: string; // ISO date
  author?: string;
  category?: string;
  image?: string;
}

export interface BlogPostMeta extends BlogFrontmatter {
  slug: string;
  readingTime: string;
}

export interface BlogPost extends BlogPostMeta {
  content: string; // raw MDX
}

const postsDirectory = path.join(process.cwd(), "content", "blog");

function isMDX(file: string) {
  return file.endsWith(".mdx") || file.endsWith(".md");
}

export function getAllPosts(): BlogPostMeta[] {
  if (!fs.existsSync(postsDirectory)) return [];
  const files = fs.readdirSync(postsDirectory).filter(isMDX);

  const posts = files.map((file) => {
    const slug = file.replace(/\.mdx?$/, "");
    const fullPath = path.join(postsDirectory, file);
    const raw = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(raw);

    const fm = data as Partial<BlogFrontmatter>;
    if (!fm.title || !fm.publishedAt) {
      throw new Error(`Post "${file}" is missing required frontmatter (title, publishedAt).`);
    }

    const meta: BlogPostMeta = {
      slug,
      title: fm.title,
      description: fm.description ?? "",
      publishedAt: fm.publishedAt,
      author: fm.author ?? "LogicHM Editorial",
      category: fm.category ?? "General",
      image: fm.image,
      readingTime: readingTime(content).text,
    };

    return meta;
  });

  // sort newest first
  posts.sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
  return posts;
}

export function getPostBySlug(slug: string): BlogPost | null {
  const mdxPath = path.join(postsDirectory, `${slug}.mdx`);
  const mdPath = path.join(postsDirectory, `${slug}.md`);

  const targetPath = fs.existsSync(mdxPath)
    ? mdxPath
    : fs.existsSync(mdPath)
    ? mdPath
    : null;

  if (!targetPath) return null;

  const raw = fs.readFileSync(targetPath, "utf8");
  const { data, content } = matter(raw);
  const fm = data as Partial<BlogFrontmatter>;

  if (!fm.title || !fm.publishedAt) {
    throw new Error(`Post "${slug}" missing required frontmatter (title, publishedAt).`);
  }

  const meta: BlogPost = {
    slug,
    title: fm.title,
    description: fm.description ?? "",
    publishedAt: fm.publishedAt,
    author: fm.author ?? "LogicHM Editorial",
    category: fm.category ?? "General",
    image: fm.image,
    content,
    readingTime: readingTime(content).text,
  };

  return meta;
}

export function getRelatedPosts(slug: string, category?: string, limit = 3) {
  const all = getAllPosts().filter((p) => p.slug !== slug);
  const sameCat = category
    ? all.filter((p) => p.category?.toLowerCase() === category.toLowerCase())
    : [];
  const pool = sameCat.length >= limit ? sameCat : all;
  return pool.slice(0, limit);
}
