import React from 'react';
import ServiceAreaPageTemplate from '@/components/templates/ServiceAreaPageTemplate';
import type { ServiceAreaData } from '@/types/serviceArea';
import type { BrandItem } from '@/components/sections/brands/BrandsSliderSection';
import { createStandardServices } from '@/data/servicesData';

// Pickering area data
const pickeringData: ServiceAreaData = {
  id: 'pickering',
  name: 'Pickering',
  fullName: 'Pickering, Ontario',
  description: 'Our experienced technicians provide prompt, reliable appliance repair services throughout Pickering, with same-day appointments available for many common issues.',
  heroImage: '/images/areas/areas-hero.webp',
  neighborhoodImage: '/images/toronto-map.webp', // Should be replaced with Pickering specific map
  mapImage: '/images/toronto.webp', // Should be replaced with Pickering specific map
  
  // Location information
  address: {
    street: '1355 Kingston Rd',
    city: 'Pickering',
    province: 'ON',
    postalCode: 'L1V 1B8',
  },
  
  // Service radius and coverage details
  serviceRadius: '15',
  responseTime: 'Same-day service available throughout Pickering and surrounding areas',
  
  // Neighborhoods served
  neighborhoods: [
    'Rosebank',
    'West Shore',
    'Dunbarton',
    'Brock Ridge',
    'Bay Ridges',
    'Amberlea',
    'Liverpool',
    'Duffin Heights',
    'Highbush',
    'Rouge Park',
    'Woodlands',
    'Village East',
    'Brock Industrial',
    'Pickering Town Centre',
    'Pickering Village',
    'Rougemount',
    'Whites',
    'Fairport Beach',
    'Maple Ridge',
    'Altona'
  ],
  
  // Most common services in this area
  popularServices: [],
  
  // Recent projects in this area
  recentProjects: [],
  
  // Testimonials specific to this area
  testimonials: [],
  
  // Local information - can be tailored per service area
  localInfo: {
    applianceUsage: "Pickering homes feature a diverse range of appliances, from newer energy-efficient models in recently developed neighborhoods to established brands in the city's older communities. Many lakefront properties have specialty appliances designed for their unique needs.",
    commonIssues: "In Pickering, we frequently address issues related to water quality affecting dishwashers and washing machines. Lakefront properties may experience specific challenges related to humidity and seasonal usage patterns, while newer developments often need support with smart appliance connectivity.",
    serviceNotes: "Our Pickering technicians are familiar with the unique layout of both established neighborhoods and newer developments. We understand access considerations for lakefront properties and are knowledgeable about the specific appliance needs throughout all Pickering communities."
  }
};


// Brand data for Pickering
const pickeringBrands: BrandItem[] = [
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

// Pickering page using the template
export default function PickeringAreaPage() {
  const pickeringServices = createStandardServices(pickeringData.name);
  return (
    <ServiceAreaPageTemplate
      areaData={pickeringData}
      services={pickeringServices}
      brands={pickeringBrands}
    />
  );
} 