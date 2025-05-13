import React from 'react';
import ServiceAreaPageTemplate from '@/components/templates/ServiceAreaPageTemplate';
import type { ServiceAreaData } from '@/types/serviceArea';
import type { BrandItem } from '@/components/sections/brands/BrandsSliderSection';
import { createStandardServices } from '@/data/servicesData';
 

// Georgina area data
const georginaData: ServiceAreaData = {
  id: 'georgina',
  name: 'Georgina',
  fullName: 'Georgina, Ontario',
  description: 'Our skilled technicians provide prompt and reliable appliance repair services throughout Georgina, from Keswick to Sutton and surrounding lake communities.',
  heroImage: '/images/areas/areas-hero.webp',
  neighborhoodImage: '/images/toronto-map.webp', // Should be replaced with Georgina specific map
  mapImage: '/images/toronto.webp', // Should be replaced with Georgina specific map
  
  // Location information
  address: {
    street: '8 Lorraine Crescent',
    city: 'Brampton',
    province: 'ON',
    postalCode: 'L6S 2R7',
  },
  
  // Service radius and coverage details
  serviceRadius: '25',
  responseTime: 'Same-day or next-day service available throughout Georgina and Lake Simcoe communities',
  
  // Neighborhoods served
  neighborhoods: [
    'Keswick',
    'Sutton',
    'Jackson\'s Point',
    'Pefferlaw',
    'Udora',
    'Virginia',
    'Willow Beach',
    'Island Grove',
    'Roches Point',
    'Port Bolster',
    'Duclos Point',
    'Belhaven',
    'Baldwin',
    'Brownhill'
  ],
  
  // Most common services in this area
  popularServices: [],
  
  // Recent projects in this area
  recentProjects: [],
  
  // Testimonials specific to this area
  testimonials: [],
  
  // Local information - can be tailored per service area
  localInfo: {
    applianceUsage: "Georgina residents and cottage owners utilize a mix of standard home appliances and specialty units designed for seasonal properties. Lake homes often feature unique configurations including energy-efficient models and appliances designed to withstand seasonal use patterns.",
    commonIssues: "In Georgina, we frequently address issues related to water quality affecting dishwashers and washing machines. Seasonal properties may experience problems from extended periods without use, and winter weather can impact outdoor appliance components.",
    serviceNotes: "Our Georgina technicians are familiar with the unique needs of both year-round residences and seasonal lake properties. We understand the access considerations for waterfront homes and rural locations throughout the area."
  }
};

// Brand data for Georgina
const georginaBrands: BrandItem[] = [
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

// Georgina page using the template
export default function GeorginaAreaPage() {
  const georginaServices = createStandardServices(georginaData.name);
  return (
    <ServiceAreaPageTemplate
      areaData={georginaData}
      services={georginaServices}
      brands={georginaBrands}
    />
  );
} 