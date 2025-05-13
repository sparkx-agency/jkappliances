import React from 'react';
import ServiceAreaPageTemplate from '@/components/templates/ServiceAreaPageTemplate';
import type { ServiceAreaData } from '@/types/serviceArea';
import type { BrandItem } from '@/components/sections/brands/BrandsSliderSection';
import { createStandardServices } from '@/data/servicesData';

// Brampton area data
const bramptonData: ServiceAreaData = {
  id: 'brampton',
  name: 'Brampton',
  fullName: 'Brampton, Ontario',
  description: 'From new suburban developments to established neighborhoods, our appliance repair technicians provide prompt service throughout Brampton with same-day appointments available.',
  heroImage: '/images/areas/areas-hero.webp',
  neighborhoodImage: '/images/brampton-map.webp',
  mapImage: '/images/areas/coverage.jpg',
  
  // Location information
  address: {
    street: '8 Lorraine Crescent',
    city: 'Brampton',
    province: 'ON',
    postalCode: 'L6S 2R7',
  },
  
  // Service radius and coverage details
  serviceRadius: '20',
  responseTime: 'Same-day service available in most Brampton neighborhoods',
  
  // Neighborhoods served
  neighborhoods: [
    'Bramalea',
    'Heart Lake', 
    'Mount Pleasant',
    'Downtown Brampton',
    'Springdale',
    'Northgate',
    'Westgate',
    'Southgate',
    'Madoc',
    'Fletchers Creek',
    'Sandalwood',
    'Snelgrove',
    'Castlemore',
    'Goreway Drive',
    'Brampton East',
    'Brampton West',
    'Brampton North',
    'Peel Village',
    'Churchville',
    'Credit Valley',
    'Bram West',
    'Bram East'
  ],
  
  // Most common services in this area
  popularServices: [],
  
  // Recent projects in this area
  recentProjects: [],
  
  // Testimonials specific to this area
  testimonials: [],
  
  // Local information - tailored for Brampton
  localInfo: {
    applianceUsage: "Brampton's growing population means many homes have newer appliances, particularly in areas like Mount Pleasant and Springdale. Families in Brampton typically have larger capacity appliances to meet household needs.",
    commonIssues: "In Brampton, we often address issues with high-usage family appliances including large-capacity washers and refrigerators. The city's newer developments sometimes experience installation-related problems that require professional adjustment.",
    serviceNotes: "Our Brampton technicians are familiar with the various neighborhoods across the city and can provide quick service to both newly built communities and established areas. We maintain specialized inventory for the brands most common in Brampton homes."
  }
};

// Brand data for Brampton
const bramptonBrands: BrandItem[] = [
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

// Brampton page using the template
export default function BramptonAreaPage() {
  const bramptonServices = createStandardServices(bramptonData.name);
  return (
    <ServiceAreaPageTemplate
      areaData={bramptonData}
      services={bramptonServices}
      brands={bramptonBrands}
    />
  );
}