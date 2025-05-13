import React from 'react';
import ServiceAreaPageTemplate from '@/components/templates/ServiceAreaPageTemplate';
import type { ServiceAreaData } from '@/types/serviceArea';
import type { BrandItem } from '@/components/sections/brands/BrandsSliderSection';
import { createStandardServices } from '@/data/servicesData';


// Cambridge area data
const cambridgeData: ServiceAreaData = {
  id: 'cambridge',
  name: 'Cambridge',
  fullName: 'Cambridge, Ontario',
  description: 'From historic Galt to Preston and Hespeler, our appliance repair technicians provide prompt service throughout Cambridge with same-day appointments available.',
  heroImage: '/images/areas/areas-hero.webp',
  neighborhoodImage: '/images/cambridge-map.webp',
  mapImage: '/images/cambridge.webp',
  
  // Location information
  address: {
    street: '18 Yonge St',
    city: 'Toronto',
    province: 'ON',
    postalCode: 'M5E 1Z8',
  },
  
  // Service radius and coverage details
  serviceRadius: '25',
  responseTime: 'Same-day service available in all Cambridge neighborhoods',
  
  // Neighborhoods served
  neighborhoods: [
    'Galt',
    'Preston',
    'Hespeler',
    'Blair',
    'Branchton',
    'Carlisle',
    'Clyde',
    'Countryside',
    'Dickie Settlement',
    'Galt City Centre',
    'North Cambridge',
    'South Cambridge',
    'West Galt',
    'Preston Heights',
    'East Preston',
    'Hespeler Village',
    'Greenway-Chaplin',
    'Shades Mill',
    'Fiddlesticks',
    'Lang\'s Farm',
    'Saginaw',
    'Inverness'
  ],
  
  // Most common services in this area
  popularServices: [],
  
  // Recent projects in this area
  recentProjects: [],
  
  // Testimonials specific to this area
  testimonials: [],
  
  // Local information - tailored for Cambridge
  localInfo: {
    applianceUsage: "Cambridge residents live in a diverse mix of heritage homes in Galt, established family neighborhoods in Preston, and newer developments in North Cambridge. Our technicians understand the unique requirements of both historic properties and modern homes.",
    commonIssues: "In Cambridge's historic areas like Galt and Hespeler Village, we often address issues with appliances in older homes that have specific space or electrical requirements. In newer developments, we frequently service high-efficiency and smart appliances that need specialized expertise.",
    serviceNotes: "Our Cambridge technicians are familiar with the city's unique tri-city layout and serve all communities from Galt to Preston to Hespeler with equal expertise and response times."
  }
};


// Brand data for Cambridge
const cambridgeBrands: BrandItem[] = [
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



// Cambridge page using the template
export default function CambridgeAreaPage() {
  const cambridgeServices = createStandardServices(cambridgeData.name);
  return (
    <ServiceAreaPageTemplate
      areaData={cambridgeData}
      services={cambridgeServices}
      brands={cambridgeBrands}
    />
  );
}