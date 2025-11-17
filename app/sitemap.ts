import { MetadataRoute } from 'next';
import { getAllPosts } from '@/lib/blog';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = 'https://logichm.com';

  // Static routes
  const staticPages = [
    '',
    '/why-outsource',
    '/how-it-works',
    '/solutions',
    '/solutions/ccm',
    '/solutions/rpm',
    '/compliance',
    '/pricing',
    '/results',
    '/resources',
    '/resources/ccm-rpm-readiness-checklist',
    '/blog',
    '/contact',
    '/contact/thank-you',
  ];

  const staticRoutes: MetadataRoute.Sitemap = staticPages.map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: path === '' ? 1 : 0.8,
  }));

  // Blog posts
  const posts = await getAllPosts();
  const blogRoutes: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${base}/blog/${post.slug}`,
    lastModified: post.publishedAt ? new Date(post.publishedAt) : new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...blogRoutes];
}
