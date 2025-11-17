import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://logichm.com';
  const pages = ['', '/solutions/ccm', '/solutions/rpm', '/blog', '/contact'];
  return pages.map((p) => ({
    url: `${base}${p}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: p === '' ? 1 : 0.7,
  })) as MetadataRoute.Sitemap;
}
