import React from 'react';
import ServiceAreaPageTemplate from '@/components/templates/ServiceAreaPageTemplate';
import type { ServiceAreaData } from '@/types/serviceArea';
import type { BrandItem } from '@/components/sections/brands/BrandsSliderSection';
import { createStandardServices } from '@/data/servicesData';

// York area data
const yorkData: ServiceAreaData = {
  id: 'york',
  name: 'York',
  fullName: 'York, Ontario',
  description: 'From historic neighborhoods to bustling urban areas, our appliance repair technicians provide prompt service throughout York with same-day appointments available.',
  heroImage: '/images/areas/areas-hero.webp',
  neighborhoodImage: '/images/toronto-map.webp',
  mapImage: '/images/toronto.webp',
  
  // Location information
  address: {
    street: '18 Yonge St',
    city: 'Toronto',
    province: 'ON',
    postalCode: 'M5E 1Z8',
  },
  
  // Service radius and coverage details
  serviceRadius: '20',
  responseTime: 'Same-day service available in most York neighborhoods',
  
  // Neighborhoods served
  neighborhoods: [
    'Weston',
    'Mount Dennis',
    'Silverthorn',
    'Rockcliffe-Smythe',
    'Keelesdale',
    'Eglinton West',
    'Caledonia',
    'Fairbank',
    'Oakwood Village',
    'Cedarvale',
    'Humewood',
    'Vaughan Road',
    'Corso Italia',
    'Earlscourt',
    'Dovercourt Village',
    'Junction Triangle',
    'Carleton Village',
    'Pelmo Park',
    'Lambton',
    'Baby Point'
  ],
  
  // Most common services in this area
  popularServices: [],
  
  // Recent projects in this area
  recentProjects: [],
  
  // Testimonials specific to this area
  testimonials: [],
  
  // Local information - can be tailored per service area
  localInfo: {
    applianceUsage: "York residents live in a mix of older heritage homes and newer developments, creating a diverse range of appliance needs. The area features many pre-war homes with updated appliances alongside newer construction with modern amenities.",
    commonIssues: "In York's character-filled older homes, we often address issues related to electrical compatibility and space-constrained installations. The mix of vintage and modern appliances in this area requires technicians with versatile expertise and knowledge of both older and contemporary models.",
    serviceNotes: "Our York technicians are experienced with the challenges of servicing appliances in historic homes and buildings, navigating narrow stairways, and working in older kitchens while preserving the integrity of these cherished spaces."
  }
};


// Brand data for York
const yorkBrands: BrandItem[] = [
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


// York page using the template
export default function YorkAreaPage() {
  // Create standardized services for York using our helper function
  const yorkServices = createStandardServices(yorkData.name);
  
  return (
    <ServiceAreaPageTemplate
      areaData={yorkData}
      services={yorkServices}
      brands={yorkBrands}
    />
  );
} 