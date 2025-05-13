import React from 'react';
import ServiceAreaPageTemplate from '@/components/templates/ServiceAreaPageTemplate';
import type { ServiceAreaData } from '@/types/serviceArea';
import type { BrandItem } from '@/components/sections/brands/BrandsSliderSection';
import { createStandardServices } from '@/data/servicesData';

// Markham area data
const markhamData: ServiceAreaData = {
  id: 'markham',
  name: 'Markham',
  fullName: 'Markham, Ontario',
  description: 'From high-tech business districts to residential communities, our appliance repair technicians provide prompt service throughout Markham with same-day appointments available.',
  heroImage: '/images/areas/areas-hero.webp',
  neighborhoodImage: '/images/toronto-map.webp',
  mapImage: '/images/toronto.webp',
  
  // Location information
  address: {
    street: '8 Lorraine Crescent',
    city: 'Brampton',
    province: 'ON',
    postalCode: 'L6S 2R7',
  },
  
  // Service radius and coverage details
  serviceRadius: '25',
  responseTime: 'Same-day service available in most Markham neighborhoods',
  
  // Neighborhoods served
  neighborhoods: [
    'Unionville',
    'Thornhill',
    'Greensborough',
    'Cornell',
    'Berczy Village',
    'Markham Village',
    'Wismer',
    'Cathedraltown',
    'Commerce Valley',
    'Buttonville',
    'Legacy',
    'Victoria Square',
    'Raymerville',
    'Milliken Mills',
    'German Mills',
    'Cachet',
    'Rouge Fairways',
    'Angus Glen',
    'Box Grove',
    'Markville'
  ],
  
  // Most common services in this area
  popularServices: [],
  
  // Recent projects in this area
  recentProjects: [],
  
  // Testimonials specific to this area
  testimonials: [],
  
  // Local information - can be tailored per service area
  localInfo: {
    applianceUsage: "Markham residents, in both single-family homes and condos, rely on a wide range of modern appliances. As one of Canada's high-tech capitals, Markham homes often feature newer, energy-efficient models and smart home appliances.",
    commonIssues: "In Markham's newer developments, we frequently address issues related to smart appliance connectivity and calibration. Established neighborhoods often need service for a mix of newer and aging appliances, while families in areas like Unionville typically require service for high-capacity household appliances.",
    serviceNotes: "Our Markham technicians are familiar with the diverse community's needs, from servicing high-end appliances in luxury homes to addressing specialized requirements in multicultural households."
  }
};


// Brand data for Markham
const markhamBrands: BrandItem[] = [
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


// Markham page using the template
export default function MarkhamAreaPage() {
  // Create standardized services for Markham using our helper function
  const markhamServices = createStandardServices(markhamData.name);
  
  return (
    <ServiceAreaPageTemplate
      areaData={markhamData}
      services={markhamServices}
      brands={markhamBrands}
    />
  );
} 