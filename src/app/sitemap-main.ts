import { MetadataRoute } from 'next';

export default function sitemapMain(): MetadataRoute.Sitemap {
  const baseUrl = 'https://jkappliances.ca';
  
  // Main pages
  return [
    '',
    '/about',
    '/contact',
    '/book',
    '/faq',
    '/brands',
    '/areas',
    '/warranty',
    '/store',
    '/reviews',
    '/sitemap-page',
    '/coupons',
    '/newsletter',
  ].map(route => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }));
} 