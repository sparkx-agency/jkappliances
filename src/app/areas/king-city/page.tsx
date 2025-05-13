import React from 'react';
import ServiceAreaPageTemplate from '@/components/templates/ServiceAreaPageTemplate';
import type { ServiceAreaData } from '@/types/serviceArea';
import type { BrandItem } from '@/components/sections/brands/BrandsSliderSection';
import { createStandardServices } from '@/data/servicesData';
 

// King City area data
const kingCityData: ServiceAreaData = {
  id: 'king-city',
  name: 'King City',
  fullName: 'King City, Ontario',
  description: 'From upscale homes to country estates, our appliance repair technicians provide prompt service throughout King City with same-day appointments available.',
  heroImage: '/images/areas/areas-hero.webp',
  neighborhoodImage: '/images/toronto-map.webp', // Can be updated with King City specific map later
  mapImage: '/images/toronto.webp', // Can be updated with King City specific map later
  
  // Location information
  address: {
    street: '2585 King Road',
    city: 'King City',
    province: 'ON',
    postalCode: 'L7B 1A1',
  },
  
  // Service radius and coverage details
  serviceRadius: '20',
  responseTime: 'Same-day service available in King City and surrounding areas',
  
  // Neighborhoods served
  neighborhoods: [
    'King City Village',
    'Kingscross Estates',
    'Kettleby',
    'Snowball',
    'Laskay',
    'Nobleton',
    'King Heights',
    'King Ridge',
    'Spring Hill',
    'Heritage Park',
    'Kinghorn',
    'King Summit',
    'Carrying Place',
    'King Valley',
    'King Station',
    'Fox Hill',
    'Kingscroft',
    'Cedar Valley',
    'Oak Ridges Moraine area',
    'Pottageville'
  ],
  
  // Most common services in this area
  popularServices: [],
  
  // Recent projects in this area
  recentProjects: [],
  
  // Testimonials specific to this area
  testimonials: [],
  
  // Local information - can be tailored per service area
  localInfo: {
    applianceUsage: "King City residents typically own upscale homes and estates with high-end appliances. The area features many luxury properties with professional-grade and built-in appliance systems that require specialized service.",
    commonIssues: "In King City, we frequently address issues related to high-end, built-in appliances and smart home systems. Many properties have specialized European models and luxury brands that require expert technical knowledge.",
    serviceNotes: "Our King City technicians are experienced with estate properties and understand the considerations of servicing large homes with integrated appliance systems. We maintain the highest standards of professionalism expected in this prestigious community."
  }
};


// Brand data for King City (same brands, different focus)
const kingCityBrands: BrandItem[] = [
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



// King City page using the template
export default function KingCityAreaPage() {
  const kingCityServices = createStandardServices(kingCityData.name);
  return (
    <ServiceAreaPageTemplate
      areaData={kingCityData}
      services={kingCityServices}
      brands={kingCityBrands}
    />
  );
} 