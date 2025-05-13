import React from 'react';
import ServiceAreaPageTemplate from '@/components/templates/ServiceAreaPageTemplate';
import type { ServiceAreaData } from '@/types/serviceArea';
import type { BrandItem } from '@/components/sections/brands/BrandsSliderSection';
import { createStandardServices } from '@/data/servicesData';
 
 


// Kleinburg area data
const kleinburgData: ServiceAreaData = {
  id: 'kleinburg',
  name: 'Kleinburg',
  fullName: 'Kleinburg, Vaughan',
  description: 'From historic properties in Old Kleinburg to luxury homes in Copper Creek, our appliance repair technicians provide prompt service throughout Kleinburg with same-day appointments available.',
  heroImage: '/images/areas/areas-hero.webp',
  neighborhoodImage: '/images/kleinburg-map.webp',
  mapImage: '/images/kleinburg.webp',
  
  // Location information
  address: {
    street: '18 Yonge St',
    city: 'Toronto',
    province: 'ON',
    postalCode: 'M5E 1Z8',
  },
  
  // Service radius and coverage details
  serviceRadius: '25',
  responseTime: 'Same-day service available in all Kleinburg neighborhoods',
  
  // Neighborhoods served
  neighborhoods: [
    'Old Kleinburg',
    'Nashville',
    'Copper Creek',
    'Carrying Place',
    'Kleinburg Core',
    'Humber Summit',
    'Huntington Ridge',
    'Humber Trails',
    'Kleinburg Heritage Estates',
    'Suburban Kleinburg',
    'Islington Woods',
    'Hazelton Place',
    'Cranston Park',
    'Vaughanwood Estates',
    'Belvedere',
    'Purpleville',
    'Elder Mills',
    'Kleinburg North',
    'Kleinburg South',
    'Bindertwine',
    'Lakeview Estates',
    'Kortright Hills'
  ],
  
  // Most common services in this area
  popularServices: [],
  
  // Recent projects in this area
  recentProjects: [],
  
testimonials: [],

  // Local information - tailored for Kleinburg
  localInfo: {
    applianceUsage: "Kleinburg features a blend of historic properties in Old Kleinburg and Nashville with upscale luxury estates in newer developments like Copper Creek and Huntington Ridge. Our technicians are experienced with premium European appliances common in Kleinburg's luxury homes as well as traditional appliances in heritage properties.",
    commonIssues: "In Kleinburg's luxury estates, we frequently service high-end integrated appliance systems requiring specialized knowledge. In established neighborhoods, we often address issues with premium appliances from brands like Sub-Zero, Wolf, and Miele that require expert technicians familiar with their sophisticated components.",
    serviceNotes: "Our Kleinburg technicians understand the unique character of this prestigious community. We provide discreet, professional service to all neighborhoods from historic Old Kleinburg to newer luxury developments, with specialized expertise in premium appliance brands and custom installations."
  }
};

// Brand data for Kleinburg
const kleinburgBrands: BrandItem[] = [
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

// Kleinburg page using the template
export default function KleinburgAreaPage() {
  const kleinburgServices = createStandardServices(kleinburgData.name);
  return (
    <ServiceAreaPageTemplate
      areaData={kleinburgData}
      services={kleinburgServices}
      brands={kleinburgBrands}
    />
  );
}