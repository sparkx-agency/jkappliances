import { MetadataRoute } from 'next';

export default function sitemapIndex(): MetadataRoute.Sitemap {
  const baseUrl = 'https://jkappliances.ca';
  
  // Create a sitemap index file that points to specific sitemap files
  return [
    {
      url: `${baseUrl}/sitemap-main.xml`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/sitemap-services.xml`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/sitemap-brands.xml`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/sitemap-areas.xml`,
      lastModified: new Date(),
    },
  ];
} 