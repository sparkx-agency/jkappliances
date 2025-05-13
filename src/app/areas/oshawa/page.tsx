import React from 'react';
import ServiceAreaPageTemplate from '@/components/templates/ServiceAreaPageTemplate';
import type { ServiceAreaData } from '@/types/serviceArea';
import type { BrandItem } from '@/components/sections/brands/BrandsSliderSection';
import { createStandardServices } from '@/data/servicesData';

// Oshawa area data
const oshawaData: ServiceAreaData = {
  id: 'oshawa',
  name: 'Oshawa',
  fullName: 'Oshawa, Ontario',
  description: 'Our expert technicians provide reliable appliance repair services throughout Oshawa, with quick response times and same-day appointments available for many common issues.',
  heroImage: '/images/areas/areas-hero.webp',
  neighborhoodImage: '/images/toronto-map.webp', // Should be replaced with Oshawa specific map
  mapImage: '/images/toronto.webp', // Should be replaced with Oshawa specific map
  
  // Location information
  address: {
    street: '8 Lorraine Crescent',
    city: 'Brampton',
    province: 'ON',
    postalCode: 'L6S 2R7',
  },
  
  // Service radius and coverage details
  serviceRadius: '20',
  responseTime: 'Same-day service available throughout Oshawa and surrounding areas',
  
  // Neighborhoods served
  neighborhoods: [
    'Downtown Oshawa',
    'Central Oshawa',
    'Northglen',
    'Centennial',
    'Eastdale',
    'Donevan',
    'Vanier',
    'Farewell',
    'Whitby Shores',
    'Taunton',
    'Pinecrest',
    'Cedar Valley',
    'Windfields',
    'Kedron',
    'Samac',
    'Northwood',
    'McLaughlin',
    'O\'Neill',
    'Columbus',
    'Raglan'
  ],
  
  // Most common services in this area
  popularServices: [],
  
  // Recent projects in this area
  recentProjects: [],
  
  // Testimonials specific to this area
  testimonials: [],
  
  // Local information - can be tailored per service area
  localInfo: {
    applianceUsage: "Oshawa residents use a diverse range of appliances, from newer energy-efficient models in the growing northern developments to established appliances in the city's older neighborhoods. Many homes feature full-sized appliances suited to family living.",
    commonIssues: "In Oshawa, we commonly address issues related to hard water affecting washing machines and dishwashers. Older neighborhoods often require service for aging appliance models, while newer areas typically need support with smart appliance configurations and warranty service.",
    serviceNotes: "Our Oshawa technicians are familiar with both the established downtown area and newer northern developments, ensuring efficient service throughout the city. We understand the specific needs of Oshawa's diverse housing stock and community layout."
  }
};


// Brand data for Oshawa
const oshawaBrands: BrandItem[] = [
  {
    id: 'samsung',
    name: 'Samsung',
    logo: '/images/brands/samsung.webp',
    link: '/brands/samsung'
  },
  {
    id: 'lg',
    name: 'LG',
    logo: '/images/brands/lg.webp',
    link: '/brands/lg'
  },
  {
    id: 'whirlpool',
    name: 'Whirlpool',
    logo: '/images/brands/whirlpool.webp',
    link: '/brands/whirlpool'
  },
  {
    id: 'ge',
    name: 'GE',
    logo: '/images/brands/ge.webp',
    link: '/brands/ge'
  },
  {
    id: 'maytag',
    name: 'Maytag',
    logo: '/images/brands/maytag.webp',
    link: '/brands/maytag'
  },
  {
    id: 'kitchenaid',
    name: 'KitchenAid',
    logo: '/images/brands/kitchen-aid.webp',
    link: '/brands/kitchenaid'
  },
  {
    id: 'electrolux',
    name: 'Electrolux',
    logo: '/images/brands/electrolux.webp',
    link: '/brands/electrolux'
  },
  {
    id: 'bosch',
    name: 'Bosch',
    logo: '/images/brands/bosch.webp',
    link: '/brands/bosch'
  },
  {
    id: 'miele',
    name: 'Miele',
    logo: '/images/brands/miele.webp',
    link: '/brands/miele'
  },
  {
    id: 'frigidaire',
    name: 'Frigidaire',
    logo: '/images/brands/frigidaire.webp',
    link: '/brands/frigidaire'
  }
];

// Oshawa page using the template
export default function OshawaAreaPage() {
  const oshawaServices = createStandardServices(oshawaData.name);
  return (
    <ServiceAreaPageTemplate
      areaData={oshawaData}
      services={oshawaServices}
      brands={oshawaBrands}
    />
  );
} 