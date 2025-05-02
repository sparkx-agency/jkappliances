import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://jkappliancerepair.ca';
  
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
    '/services/stove-cooktop-repair',
    '/services/oven-repair',
    '/services/dishwasher-repair',
    '/services/freezer-repair',
    '/services/gas-appliance-repair',
    '/services/commercial-repair',
    '/services/outdoor-kitchen-repair',
    '/services/installation',
    '/services/maintenance',
    '/services/business-solutions',
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
    '/areas/vaughan',
    '/areas/richmond-hill',
    '/areas/oakville',
    '/areas/oshawa',
  ].map(route => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.5,
  }));

  return [...mainRoutes, ...serviceRoutes, ...brandRoutes, ...areaRoutes];
} 