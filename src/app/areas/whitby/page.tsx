import React from 'react';
import ServiceAreaPageTemplate from '@/components/templates/ServiceAreaPageTemplate';
import type { ServiceAreaData } from '@/types/serviceArea';
import type { BrandItem } from '@/components/sections/brands/BrandsSliderSection';
import { createStandardServices } from '@/data/servicesData';

// Whitby area data
const whitbyData: ServiceAreaData = {
  id: 'whitby',
  name: 'Whitby',
  fullName: 'Whitby, Ontario',
  description: 'Our skilled technicians provide fast, reliable appliance repair throughout Whitby, with same-day service available for many common issues.',
  heroImage: '/images/areas/areas-hero.webp',
  neighborhoodImage: '/images/toronto-map.webp', // Should be replaced with Whitby specific map
  mapImage: '/images/toronto.webp', // Should be replaced with Whitby specific map
  
  // Location information
  address: {
    street: '8 Lorraine Crescent',
    city: 'Brampton',
    province: 'ON',
    postalCode: 'L6S 2R7',
  },
  
  // Service radius and coverage details
  serviceRadius: '20',
  responseTime: 'Same-day service available throughout Whitby and surrounding communities',
  
  // Neighborhoods served
  neighborhoods: [
    'Brooklin',
    'Port Whitby',
    'Downtown Whitby',
    'Blue Grass Meadows',
    'Williamsburg',
    'Rolling Acres',
    'Pringle Creek',
    'Lynde Creek',
    'Taunton North',
    'West Lynde',
    'Whitby Shores',
    'Kendalwood Park',
    'Cachet',
    'Fallingbrook',
    'Manning Ridge',
    'Dundas Valley',
    'Ashburn',
    'Myrtle Station',
    'Macedonian Village',
    'Country Lane'
  ],
  
  // Most common services in this area
  popularServices: [],
  
  // Recent projects in this area
  recentProjects: [],
  
  // Testimonials specific to this area
  testimonials: [],
  
  // Local information - can be tailored per service area
  localInfo: {
    applianceUsage: "Whitby features a mix of established neighborhoods and newer developments, with appliance needs varying accordingly. Many homes in growing areas like Brooklin feature modern, energy-efficient appliances, while established neighborhoods often maintain a combination of newer and classic models.",
    commonIssues: "In Whitby, we frequently address issues related to water quality affecting dishwashers and washing machines. Newer developments may experience installation-related problems, while homes in more established areas often need service for aging appliance components.",
    serviceNotes: "Our Whitby technicians are familiar with the town's varied landscape, from lakefront properties to rural areas and suburban developments. We understand the specific service requirements for Whitby's diverse neighborhoods and housing types."
  }
};

// Brand data for Whitby
const whitbyBrands: BrandItem[] = [
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

// Whitby page using the template
export default function WhitbyAreaPage() {
  const whitbyServices = createStandardServices(whitbyData.name);
  return (
    <ServiceAreaPageTemplate
      areaData={whitbyData}
      services={whitbyServices}
      brands={whitbyBrands}
    />
  );
} 