import React from 'react';
import ServiceAreaPageTemplate from '@/components/templates/ServiceAreaPageTemplate';
import type { ServiceAreaData } from '@/types/serviceArea';
import type { BrandItem } from '@/components/sections/brands/BrandsSliderSection';
import { createStandardServices } from '@/data/servicesData';
 


// Newmarket area data
const newmarketData: ServiceAreaData = {
  id: 'newmarket',
  name: 'Newmarket',
  fullName: 'Newmarket, Ontario',
  description: 'From historic homes in Old Newmarket to modern developments in Stonehaven, our appliance repair technicians provide prompt service throughout Newmarket with same-day appointments available.',
  heroImage: '/images/areas/areas-hero.webp',
  neighborhoodImage: '/images/newmarket-map.webp',
  mapImage: '/images/newmarket.webp',
  
  // Location information
  address: {
    street: '18 Yonge St',
    city: 'Toronto',
    province: 'ON',
    postalCode: 'M5E 1Z8',
  },
  
  // Service radius and coverage details
  serviceRadius: '25',
  responseTime: 'Same-day service available in all Newmarket neighborhoods',
  
  // Neighborhoods served
  neighborhoods: [
    'Old Newmarket',
    'Glenway',
    'Stonehaven',
    'Woodland Hills',
    'Summerhill',
    'College Manor',
    'Armitage',
    'Bristol',
    'Central Newmarket',
    'Gorham',
    'Huron Heights',
    'Leslie Valley',
    'Copper Hills',
    'Maple Leaf',
    'Quaker Village',
    'Crossland',
    'Fernbank',
    'Beechwood',
    'Bogarttown',
    'Longford',
    'Maryfield',
    'Newmarket Heights'
  ],
  
  // Most common services in this area
  popularServices: [],
  
  // Recent projects in this area
  recentProjects: [],
  

  testimonials: [],

  // Local information - tailored for Newmarket
  localInfo: {
    applianceUsage: "Newmarket features a mix of historic homes in areas like Old Newmarket and Quaker Village, alongside family-friendly neighborhoods like Stonehaven and Woodland Hills. Our technicians are experienced with both vintage appliances in heritage homes and modern systems in newer properties.",
    commonIssues: "In Newmarket's established neighborhoods, we frequently address maintenance issues with well-maintained appliances in older homes. In newer communities like Stonehaven and Copper Hills, we often service higher-efficiency systems and smart appliances popular in modern family homes.",
    serviceNotes: "Our Newmarket technicians understand the town's blend of heritage charm and contemporary living. We provide reliable service to all neighborhoods from the historic downtown to the newer northern developments, with expertise in both traditional and modern appliances."
  }
};


// Brand data for Newmarket
const newmarketBrands: BrandItem[] = [
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

// Newmarket page using the template
export default function NewmarketAreaPage() {
  const newmarketServices = createStandardServices(newmarketData.name);
  return (
    <ServiceAreaPageTemplate
      areaData={newmarketData}
      services={newmarketServices}
      brands={newmarketBrands}
    />
  );
}