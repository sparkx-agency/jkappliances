import React from 'react';
import ServiceAreaPageTemplate from '@/components/templates/ServiceAreaPageTemplate';
import type { ServiceAreaData } from '@/types/serviceArea';
import type { BrandItem } from '@/components/sections/brands/BrandsSliderSection';
import { createStandardServices } from '@/data/servicesData';

// East York area data
const eastYorkData: ServiceAreaData = {
  id: 'east-york',
  name: 'East York',
  fullName: 'East York, Toronto, Ontario',
  description: 'Our experienced technicians provide fast, reliable appliance repair throughout the East York community with same-day service available for many common problems.',
  heroImage: '/images/areas/areas-hero.webp',
  neighborhoodImage: '/images/toronto-map.webp', // Should be replaced with East York specific map
  mapImage: '/images/toronto.webp', // Should be replaced with East York specific map
  
  // Location information
  address: {
    street: '850 Coxwell Avenue',
    city: 'Toronto',
    province: 'ON',
    postalCode: 'M4C 5R1',
  },
  
  // Service radius and coverage details
  serviceRadius: '15',
  responseTime: 'Same-day service available throughout East York and surrounding areas',
  
  // Neighborhoods served
  neighborhoods: [
    'Broadview North',
    'Old East York',
    'Danforth',
    'Woodbine Heights',
    'Crescent Town',
    'Pape Village',
    'Parkview Hills',
    'Thorncliffe Park',
    'Leaside',
    'Flemingdon Park',
    'Topham Park',
    'Woodbine-Lumsden',
    'Taylor-Massey',
    'O\'Connor-Parkview'
  ],
  
  // Most common services in this area
  popularServices: [],
  
  // Recent projects in this area
  recentProjects: [],
  
  // Testimonials specific to this area
  testimonials: [],
  
  // Local information - can be tailored per service area
  localInfo: {
    applianceUsage: "East York features a mix of older homes and newer constructions, with appliance needs varying across neighborhoods. From classic models in established areas to energy-efficient appliances in renovated properties, our technicians are familiar with the diverse range found throughout the community.",
    commonIssues: "In East York, we commonly address issues with older appliance models in established homes, as well as water quality concerns affecting washing machines and dishwashers. Seasonal temperature variations can also impact refrigeration systems in some of the community's older properties.",
    serviceNotes: "Our East York technicians are familiar with the area's mixed housing stock, from traditional single-family homes to apartment buildings. We understand the parking considerations and access requirements throughout East York neighborhoods."
  }
};


// Brand data for East York
const eastYorkBrands: BrandItem[] = [
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

// East York page using the template
export default function EastYorkAreaPage() {
  const eastYorkServices = createStandardServices(eastYorkData.name);
  return (
    <ServiceAreaPageTemplate
      areaData={eastYorkData}
      services={eastYorkServices}
      brands={eastYorkBrands}
    />
  );
} 