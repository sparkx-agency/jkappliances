import { MetadataRoute } from 'next';

export default function sitemapServices(): MetadataRoute.Sitemap {
  const baseUrl = 'https://jkappliances.ca';
  
  // Service pages
  return [
    '/services/refrigerator-repair',
    '/services/washer-repair',
    '/services/dryer-repair',
    '/services/stove-repair',
    '/services/oven-repair',
    '/services/dishwasher-repair',
    '/services/freezer-repair',
    '/services/gas-appliance-repair',
    '/services/installation-services',
    '/services/maintenance-services',
  ].map(route => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));
} 