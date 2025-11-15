import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { BlogPost } from "./types";

const postsDirectory = path.join(process.cwd(), "content/blog");

export function getAllPosts(): BlogPost[] {
  try {
    const fileNames = fs.readdirSync(postsDirectory);
    const allPosts = fileNames
      .filter((fileName) => fileName.endsWith(".mdx"))
      .map((fileName) => {
        const slug = fileName.replace(/\.mdx$/, "");
        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, "utf8");
        const { data, content } = matter(fileContents);

        return {
          slug,
          title: data.title,
          description: data.description,
          publishedAt: data.publishedAt,
          author: data.author,
          category: data.category,
          image: data.image,
          content,
        } as BlogPost;
      });

    // Sort posts by date (newest first)
    return allPosts.sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    );
  } catch (error) {
    return [];
  }
}

export function getPostBySlug(slug: string): BlogPost | null {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.mdx`);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    return {
      slug,
      title: data.title,
      description: data.description,
      publishedAt: data.publishedAt,
      author: data.author,
      category: data.category,
      image: data.image,
      content,
    } as BlogPost;
  } catch (error) {
    return null;
  }
}

export function getRelatedPosts(
  currentSlug: string,
  category: string,
  limit = 3
): BlogPost[] {
  const allPosts = getAllPosts();
  return allPosts
    .filter((post) => post.slug !== currentSlug && post.category === category)
    .slice(0, limit);
}
