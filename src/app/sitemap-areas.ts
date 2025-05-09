import { MetadataRoute } from 'next';

export default function sitemapAreas(): MetadataRoute.Sitemap {
  const baseUrl = 'https://jkappliances.ca';
  
  // Service area pages
  return [
    '/areas/toronto',
    '/areas/north-york',
    '/areas/etobicoke',
    '/areas/scarborough',
    '/areas/mississauga',
    '/areas/brampton',
    '/areas/markham',
    '/areas/york',
    '/areas/vaughan',
    '/areas/richmond-hill',
    '/areas/oakville',
    '/areas/oshawa',
    '/areas/ajax',
    '/areas/aurora',
    '/areas/bowmanville',
    '/areas/burlington',
    '/areas/caledon',
    '/areas/cambridge',
    '/areas/claremont',
    '/areas/clarington',
    '/areas/downtown-toronto',
    '/areas/east-york',
    '/areas/georgetown',
    '/areas/georgina',
    '/areas/halton-hills',
    '/areas/king-city',
    '/areas/kleinburg',
    '/areas/milton',
    '/areas/newmarket',
    '/areas/pickering',
    '/areas/stouffville',
    '/areas/thornhill',
    '/areas/whitby',
    '/areas/woodbridge',
  ].map(route => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.5,
  }));
} 