import React from 'react';
import ServiceAreaPageTemplate from '@/components/templates/ServiceAreaPageTemplate';
import type { ServiceAreaData } from '@/types/serviceArea';
import type { BrandItem } from '@/components/sections/brands/BrandsSliderSection';
import { createStandardServices } from '@/data/servicesData';

// Stouffville area data
const stouffvilleData: ServiceAreaData = {
  id: 'stouffville',
  name: 'Stouffville',
  fullName: 'Whitchurch-Stouffville, Ontario',
  description: 'Our experienced technicians provide reliable appliance repair services throughout Stouffville and surrounding communities, with prompt response times and convenient scheduling options.',
  heroImage: '/images/areas/areas-hero.webp',
  neighborhoodImage: '/images/toronto-map.webp', // Should be replaced with Stouffville specific map
  mapImage: '/images/toronto.webp', // Should be replaced with Stouffville specific map
  
  // Location information
  address: {
    street: '6240 Main St',
    city: 'Whitchurch-Stouffville',
    province: 'ON',
    postalCode: 'L4A 1G8',
  },
  
  // Service radius and coverage details
  serviceRadius: '20',
  responseTime: 'Same-day or next-day service available throughout Stouffville',
  
  // Neighborhoods served
  neighborhoods: [
    'Downtown Stouffville',
    'Stouffville North',
    'Bethesda',
    'Bloomington',
    'Gormley',
    'Lemonville',
    'Musselman\'s Lake',
    'Ringwood',
    'Ballantrae',
    'Cedar Valley',
    'Churchill',
    'Vandorf',
    'Preston Lake',
    'Pleasantville',
    'Baker Hill',
    'Shadow Lake',
    'Parkview',
    'Fieldside',
    'Meadowlea',
    'White Rose'
  ],
  
  // Most common services in this area
  popularServices: [],
  
  // Recent projects in this area
  recentProjects: [],
  
  
  
  
  // Testimonials specific to this area
  testimonials: [],
  
  // Local information - can be tailored per service area
  localInfo: {
    applianceUsage: "Stouffville residents typically maintain a mix of newer energy-efficient appliances in the growing subdivisions and established models in the older neighborhoods. Lakeside properties and rural homes often have specialized appliance configurations to meet their unique needs.",
    commonIssues: "In Stouffville, we frequently address issues related to water quality affecting dishwashers and washing machines. Rural properties may experience voltage fluctuations that impact electronic components, while lakeside homes often require service for seasonal usage patterns.",
    serviceNotes: "Our Stouffville technicians are familiar with both the established downtown area and newer developments, ensuring efficient service throughout the community. We understand the access considerations for rural and lakeside properties in the surrounding areas."
  }
};


// Brand data for Stouffville
const stouffvilleBrands: BrandItem[] = [
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

// Stouffville page using the template
export default function StouffvilleAreaPage() {
  const stouffvilleServices = createStandardServices(stouffvilleData.name);
  return (
    <ServiceAreaPageTemplate
      areaData={stouffvilleData}
      services={stouffvilleServices}
      brands={stouffvilleBrands}
    />
  );
} 