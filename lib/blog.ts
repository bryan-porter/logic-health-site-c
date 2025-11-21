// lib/blog.ts
import fs from "fs";
import path from "path";

import matter from "gray-matter";
import readingTime from "reading-time";

import { BlogPost } from "./types";

const POSTS_DIR = path.join(process.cwd(), "content", "blog");

function toDate(input?: string) {
  if (!input) return null;
  const d = new Date(input);
  return isNaN(d.getTime()) ? null : d;
}

function listPostFiles(): string[] {
  if (!fs.existsSync(POSTS_DIR)) return [];
  return fs
    .readdirSync(POSTS_DIR)
    .filter((f) => f.endsWith(".md") || f.endsWith(".mdx"));
}

export function getAllPosts(): BlogPost[] {
  const files = listPostFiles();
  const posts: BlogPost[] = files.map((file) => {
    const slug = file.replace(/\.(md|mdx)$/, "");
    const fullPath = path.join(POSTS_DIR, file);
    const raw = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(raw);
    const stat = fs.statSync(fullPath);

    return {
      slug,
      title: data.title ?? slug,
      description: data.description ?? "",
      publishedAt: (data.publishedAt || data.date || stat.mtime.toISOString()) as string,
      author: data.author ?? "LogicHM",
      category: data.category ?? "General",
      image: data.image ?? undefined,
      content,
      readingTime: readingTime(content || "").text,
    };
  });

  return posts.sort((a, b) => {
    const da = toDate(a.publishedAt) ?? new Date(0);
    const db = toDate(b.publishedAt) ?? new Date(0);
    return db.getTime() - da.getTime();
  });
}

export function getPostBySlug(slug: string): BlogPost | null {
  const candidates = [".mdx", ".md"].map((ext) =>
    path.join(POSTS_DIR, `${slug}${ext}`)
  );
  const filePath = candidates.find((p) => fs.existsSync(p));
  if (!filePath) return null;

  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);
  const stat = fs.statSync(filePath);

  return {
    slug,
    title: data.title ?? slug,
    description: data.description ?? "",
    publishedAt: (data.publishedAt || data.date || stat.mtime.toISOString()) as string,
    author: data.author ?? "LogicHM",
    category: data.category ?? "General",
    image: data.image ?? undefined,
    content,
    readingTime: readingTime(content || "").text,
  };
}

export function getRelatedPosts(slug: string, limit = 3): BlogPost[] {
  const all = getAllPosts();
  const current = getPostBySlug(slug);
  const pool = current
    ? all.filter((p) => p.slug !== slug && p.category === current.category)
    : all.filter((p) => p.slug !== slug);

  const source = (pool.length >= limit ? pool : all.filter((p) => p.slug !== slug));
  return source.slice(0, limit);
}
