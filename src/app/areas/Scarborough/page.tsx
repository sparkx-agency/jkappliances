import React from 'react';
import ServiceAreaPageTemplate from '@/components/templates/ServiceAreaPageTemplate';
import type { ServiceAreaData } from '@/types/serviceArea';
import type { BrandItem } from '@/components/sections/brands/BrandsSliderSection';
import { createStandardServices } from '@/data/servicesData';
// Scarborough area data
const scarboroughData: ServiceAreaData = {
  id: 'scarborough',
  name: 'Scarborough',
  fullName: 'Scarborough, Toronto, Ontario',
  description: 'Our skilled technicians provide prompt, reliable appliance repair throughout Scarborough communities, with same-day service available for many common issues.',
  heroImage: '/images/areas/areas-hero.webp',
  neighborhoodImage: '/images/toronto-map.webp', // Should be replaced with Scarborough specific map
  mapImage: '/images/toronto.webp', // Should be replaced with Scarborough specific map
  
  // Location information
  address: {
    street: '1900 Eglinton Ave E',
    city: 'Toronto',
    province: 'ON',
    postalCode: 'M1L 2L9',
  },
  
  // Service radius and coverage details
  serviceRadius: '15',
  responseTime: 'Same-day service available throughout Scarborough and surrounding areas',
  
  // Neighborhoods served
  neighborhoods: [
    'Agincourt',
    'Bendale',
    'Birch Cliff',
    'Clairlea',
    'Cliffside',
    'Dorset Park',
    'Eglinton East',
    'Highland Creek',
    'L\'Amoreaux',
    'Malvern',
    'Milliken',
    'Morningside',
    'Oakridge',
    'Port Union',
    'Rouge',
    'Scarborough Junction',
    'Scarborough Village',
    'Tam O\'Shanter',
    'West Hill',
    'Woburn'
  ],
  
  // Most common services in this area
  popularServices: [],
    
  
  // Recent projects in this area
  recentProjects: [],
    
  
  // Testimonials specific to this area
  testimonials: [],
  
  // Local information - can be tailored per service area
  localInfo: {
    applianceUsage: "Scarborough features a diverse mix of housing, from high-rise apartments to single-family homes, leading to a wide variety of appliance needs. Many households maintain a balance of newer energy-efficient models and reliable older appliances across this large community.",
    commonIssues: "In Scarborough, we frequently address issues related to hard water affecting washing machines and dishwashers. Older neighborhoods often require service for aging appliance models, while newer developments typically need support with modern features and connectivity.",
    serviceNotes: "Our Scarborough technicians are familiar with the unique layout of this expansive community, from the apartment complexes in Malvern to the lakefront properties in Guildwood. We understand the specific service requirements for Scarborough's diverse residential areas."
  }
};


// Brand data for Scarborough
const scarboroughBrands: BrandItem[] = [
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

// Scarborough page using the template
export default function ScarboroughAreaPage() {
  const scarboroughServices = createStandardServices(scarboroughData.name);
  return (
    <ServiceAreaPageTemplate
      areaData={scarboroughData}
      services={scarboroughServices}
      brands={scarboroughBrands}
    />
  );
} 