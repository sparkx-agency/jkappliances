import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://jkappliances.ca';
  
  // Main pages
  const mainRoutes = [
    '',
    // '/services', - Removed as services are now in mega menu
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

  // Service pages - keep these as they're individual service pages
  const serviceRoutes = [
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
    // Remove non-existent services
    // '/services/commercial-appliance-repair',
    // '/services/outdoor-kitchen-repair',
    // '/services/business-solutions',
  ].map(route => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // Brand pages
  const brandRoutes = [
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
  ].map(route => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  // Service area pages
  const areaRoutes = [
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

  return [...mainRoutes, ...serviceRoutes, ...brandRoutes, ...areaRoutes];
} 