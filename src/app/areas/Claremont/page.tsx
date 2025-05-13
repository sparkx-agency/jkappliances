import React from 'react';
import ServiceAreaPageTemplate from '@/components/templates/ServiceAreaPageTemplate';
import type { ServiceAreaData } from '@/types/serviceArea';
import type { BrandItem } from '@/components/sections/brands/BrandsSliderSection';
import { createStandardServices } from '@/data/servicesData';

// Claremont area data
const claremontData: ServiceAreaData = {
  id: 'claremont',
  name: 'Claremont',
  fullName: 'Claremont, Ontario',
  description: 'Our skilled technicians provide fast, reliable appliance repair services throughout Claremont, with same-day appointments often available for your convenience.',
  heroImage: '/images/areas/areas-hero.webp',
  neighborhoodImage: '/images/toronto-map.webp', // Should be replaced with Claremont specific map
  mapImage: '/images/toronto.webp', // Should be replaced with Claremont specific map
  
  // Location information
  address: {
    street: '4951 Old Brock Rd',
    city: 'Claremont',
    province: 'ON',
    postalCode: 'L1Y 1A9',
  },
  
  // Service radius and coverage details
  serviceRadius: '15',
  responseTime: 'Same-day service available throughout Claremont and surrounding areas',
  
  // Neighborhoods served
  neighborhoods: [
    'Claremont Village',
    'Brougham',
    'Greenwood',
    'Whitevale',
    'Kinsale',
    'Dagmar',
    'Altona',
    'Balsam',
    'Ashburn',
    'Myrtle',
    'Myrtle Station',
    'Audley'
  ],
  
  // Most common services in this area
  popularServices: [],
  
  // Recent projects in this area
  recentProjects: [],
  
  // Testimonials specific to this area
  testimonials: [],
  
  // Local information - can be tailored per service area
  localInfo: {
    applianceUsage: "Claremont residents typically maintain a mix of newer energy-efficient appliances and reliable older models. Many homes feature larger capacity appliances to accommodate family needs in this predominantly residential community.",
    commonIssues: "In Claremont, we often service issues related to water quality affecting dishwashers and washing machines. Rural properties may experience voltage fluctuations that can impact electronic appliance components.",
    serviceNotes: "Our Claremont technicians are familiar with the area's homes and common appliance configurations, ensuring efficient service across the community."
  }
};


// Brand data for Claremont
const claremontBrands: BrandItem[] = [
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

// Claremont page using the template
export default function ClaremontAreaPage() {
  const claremontServices = createStandardServices(claremontData.name);
  return (
    <ServiceAreaPageTemplate
      areaData={claremontData}
      services={claremontServices}
      brands={claremontBrands}
    />
  );
} 