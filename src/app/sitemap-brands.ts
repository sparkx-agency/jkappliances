import { MetadataRoute } from 'next';

export default function sitemapBrands(): MetadataRoute.Sitemap {
  const baseUrl = 'https://jkappliances.ca';
  
  // Brand pages
  return [
    '/brands/samsung',
    '/brands/lg',
    '/brands/whirlpool',
    '/brands/ge',
    '/brands/maytag',
    '/brands/frigidaire',
    '/brands/kitchenaid',
    '/brands/kenmore',
    '/brands/bosch',
    '/brands/electrolux',
    '/brands/miele',
    '/brands/sub-zero',
    '/brands/wolf',
    '/brands/viking',
    '/brands/thermador',
    '/brands/dacor',
    '/brands/asko',
    '/brands/fisherpaykel',
    '/brands/jennair',
    '/brands/liebherr',
    '/brands/inglis',
    '/brands/panasonic',
    '/brands/moffat',
    '/brands/blomberg',
    '/brands/aeg',
    '/brands/haier',
    '/brands/amana',
    '/brands/bertazzoni',
    '/brands/fulgormilano',
    '/brands/gaggenau',
  ].map(route => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));
} 