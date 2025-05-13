import React from 'react';
import ServiceAreaPageTemplate from '@/components/templates/ServiceAreaPageTemplate';
import type { ServiceAreaData } from '@/types/serviceArea';
import type { BrandItem } from '@/components/sections/brands/BrandsSliderSection';
import { createStandardServices } from '@/data/servicesData';



// Etobicoke area data
const etobicokeData: ServiceAreaData = {
  id: 'etobicoke',
  name: 'Etobicoke',
  fullName: 'Etobicoke, Toronto',
  description: 'From lakefront residences to family homes in quiet neighborhoods, our appliance repair technicians provide prompt service throughout Etobicoke with same-day appointments available.',
  heroImage: '/images/areas/areas-hero.webp',
  neighborhoodImage: '/images/etobicoke-map.webp',
  mapImage: '/images/etobicoke.webp',

  // Location information
  address: {
    street: '18 Yonge St',
    city: 'Toronto',
    province: 'ON',
    postalCode: 'M5E 1Z8',
  },

  // Service radius and coverage details
  serviceRadius: '25',
  responseTime: 'Same-day service available in most Etobicoke neighborhoods',

  // Neighborhoods served
  neighborhoods: [
    'The Kingsway',
    'Mimico',
    'New Toronto',
    'Long Branch',
    'Alderwood',
    'Humber Bay',
    'Islington-City Centre West',
    'Eringate-Centennial-West Deane',
    'Princess Gardens',
    'Markland Wood',
    'Sunnylea',
    'Stonegate-Queensway',
    'Humber Valley Village',
    'Rexdale',
    'Thistletown',
    'West Humber-Clairville',
    'Humber Heights',
    'Kingsview Village',
    'Mount Olive',
    'Richview',
    'Smithfield',
    'Willowridge'
  ],

  // Most common services in this area
  popularServices: [],

  // Recent projects in this area
  recentProjects: [],

  // Local information - tailored for Etobicoke
  localInfo: {
    applianceUsage: "Etobicoke residents live in a mix of single-family homes, townhouses, and lakefront condominiums. This diverse housing requires our technicians to be familiar with both standard home appliances and high-end luxury models common in waterfront properties.",
    commonIssues: "In Etobicoke's lakefront areas like Mimico and Humber Bay, we frequently address issues related to humidity affecting appliances. The older established neighborhoods like The Kingsway often require service for classic models, while newer developments feature smart appliances requiring specialized expertise.",
    serviceNotes: "Our Etobicoke technicians are familiar with the area's unique layout, from the lakefront communities to northern neighborhoods like Rexdale. We maintain inventory specifically for models common in Etobicoke homes to ensure faster service and repairs."
  },
  testimonials: []
};


// Brand data for Etobicoke
const etobicokeBrands: BrandItem[] = [
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

// Custom Etobicoke page
// Etobicoke page using the template
export default function EtobicokeAreaPage() {
  const etobicokeServices = createStandardServices(etobicokeData.name);
  return (
    <ServiceAreaPageTemplate
      areaData={etobicokeData}
      services={etobicokeServices}
      brands={etobicokeBrands}
    />
  );
}