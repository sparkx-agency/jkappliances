import React from 'react';
import ServiceAreaPageTemplate from '@/components/templates/ServiceAreaPageTemplate';
import type { ServiceAreaData } from '@/types/serviceArea';
import type { BrandItem } from '@/components/sections/brands/BrandsSliderSection';
import { createStandardServices } from '@/data/servicesData';

// Toronto area data
const torontoData: ServiceAreaData = {
  id: 'toronto',
  name: 'Toronto',
  fullName: 'Toronto, Ontario',
  description: 'From downtown condos to suburban homes, our appliance repair technicians provide prompt service throughout Toronto with same-day appointments available.',
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
  serviceRadius: '30',
  responseTime: 'Same-day service available in most Toronto neighborhoods',
  
  // Neighborhoods served
  neighborhoods: [
    'Downtown Core',
    'Yorkville',
    'Liberty Village',
    'The Beaches',
    'Leslieville',
    'The Annex',
    'Kensington Market',
    'Chinatown',
    'Little Italy',
    'Greektown',
    'Forest Hill',
    'Rosedale',
    'Cabbagetown',
    'Harbourfront',
    'Entertainment District',
    'Financial District',
    'Queen West',
    'King West',
    'Yonge & Eglinton',
    'North York',
    'Scarborough',
    'Etobicoke'
  ],
  
  // Most common services in this area
  popularServices: [],
  
  // Recent projects in this area
  recentProjects: [],
  
  // Testimonials specific to this area
  testimonials: [],
  
  // Local information - can be tailored per service area
  localInfo: {
    applianceUsage: "Toronto residents, especially in condos and apartments, rely heavily on efficient appliances. The city's diverse housing stock includes a mix of newer buildings with smart appliances and older homes with classic models.",
    commonIssues: "In Toronto's downtown core, we frequently address issues related to compact appliances in condos. Older neighborhoods often need service for legacy models, while luxury homes in areas like Rosedale typically require high-end appliance expertise.",
    serviceNotes: "Our Toronto technicians are familiar with building access protocols for condos and apartments, ensuring smooth service calls in multi-unit buildings."
  }
};


// Brand data for Toronto
const torontoBrands: BrandItem[] = [
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


// Toronto page using the template
export default function TorontoAreaPage() {
  // Create standardized services for Toronto using our helper function
  const torontoServices = createStandardServices(torontoData.name);
  
  return (
    <ServiceAreaPageTemplate
      areaData={torontoData}
      services={torontoServices}
      brands={torontoBrands}
    />
  );
} 