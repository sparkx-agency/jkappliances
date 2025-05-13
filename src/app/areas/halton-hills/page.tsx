import React from 'react';
import ServiceAreaPageTemplate from '@/components/templates/ServiceAreaPageTemplate';
import type { ServiceAreaData } from '@/types/serviceArea';
import type { BrandItem } from '@/components/sections/brands/BrandsSliderSection';
import { createStandardServices } from '@/data/servicesData';

 
 


// Halton Hills area data
const haltonHillsData: ServiceAreaData = {
  id: 'haltonhills',
  name: 'Halton Hills',
  fullName: 'Halton Hills, Ontario',
  description: 'From historic homes in Georgetown to rural properties in Acton, our appliance repair technicians provide prompt service throughout Halton Hills with same-day appointments available.',
  heroImage: '/images/areas/areas-hero.webp',
  neighborhoodImage: '/images/haltonhills-map.webp',
  mapImage: '/images/haltonhills.webp',
  
  // Location information
  address: {
    street: '18 Yonge St',
    city: 'Toronto',
    province: 'ON',
    postalCode: 'M5E 1Z8',
  },
  
  // Service radius and coverage details
  serviceRadius: '25',
  responseTime: 'Same-day service available in all Halton Hills communities',
  
  // Neighborhoods served
  neighborhoods: [
    'Georgetown',
    'Acton',
    'Glen Williams',
    'Limehouse',
    'Norval',
    'Terra Cotta',
    'Ballinafad',
    'Stewarttown',
    'Ashgrove',
    'Maple Creek',
    'Georgetown South',
    'Hungry Hollow',
    'Trafalgar',
    'Cedarvale',
    'Moore Park',
    'Delrex',
    'Mountainview',
    'Downtown Georgetown',
    'Silver Creek',
    'Credit River',
    'Blue Springs',
    'Crewsons Corners'
  ],
  
  // Most common services in this area
  popularServices: [],
  
  // Recent projects in this area
  recentProjects: [],
  
  testimonials: [],

  // Local information - tailored for Halton Hills
  localInfo: {
    applianceUsage: "Halton Hills features a mix of historic homes in areas like Downtown Georgetown and Glen Williams, alongside newer developments in Georgetown South and Mountainview. Our technicians are experienced with both traditional appliances in heritage properties and modern systems in newer homes.",
    commonIssues: "In Halton Hills' established neighborhoods, we frequently service older, well-maintained appliances that require specialized parts and knowledge. In newer developments, we often address issues with high-efficiency appliances and smart home systems popular in modern family homes.",
    serviceNotes: "Our Halton Hills technicians understand the unique mix of urban, suburban, and rural properties in the area. We provide reliable service to all communities from Georgetown and Acton to rural hamlets, with expertise in both traditional and cutting-edge appliances."
  }
};

// Brand data for Halton Hills
const haltonHillsBrands: BrandItem[] = [
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


// Custom Halton Hills page
// Halton hills page using the template
export default function HaltonHillsAreaPage() {
  const haltonHillsServices = createStandardServices(haltonHillsData.name);
  return (
    <ServiceAreaPageTemplate
      areaData={haltonHillsData}
      services={haltonHillsServices}
      brands={haltonHillsBrands}
    />
  );
}