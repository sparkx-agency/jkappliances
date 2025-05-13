import React from 'react';
import ServiceAreaPageTemplate from '@/components/templates/ServiceAreaPageTemplate';
import type { ServiceAreaData } from '@/types/serviceArea';
import type { BrandItem } from '@/components/sections/brands/BrandsSliderSection';
import { createStandardServices } from '@/data/servicesData';

// Thornhill area data
const thornhillData: ServiceAreaData = {
  id: 'thornhill',
  name: 'Thornhill',
  fullName: 'Thornhill, Ontario',
  description: 'Our expert technicians provide prompt, reliable appliance repair services throughout Thornhill, with same-day appointments often available for your convenience.',
  heroImage: '/images/areas/areas-hero.webp',
  neighborhoodImage: '/images/toronto-map.webp', // Should be replaced with Thornhill specific map
  mapImage: '/images/toronto.webp', // Should be replaced with Thornhill specific map
  
  // Location information
  address: {
    street: '8 Lorraine Crescent',
    city: 'Brampton',
    province: 'ON',
    postalCode: 'L6S 2R7',
  },
  
  // Service radius and coverage details
  serviceRadius: '15',
  responseTime: 'Same-day service available throughout Thornhill and neighboring communities',
  
  // Neighborhoods served
  neighborhoods: [
    'Thornhill Woods',
    'Bayview Glen',
    'Royal Orchard',
    'Uplands',
    'Grandview',
    'Thornhill Village',
    'Thornhill Estates',
    'Spring Farm',
    'Beverley Glen',
    'Concord',
    'Brownridge',
    'Glen Shields',
    'Willowdale',
    'Rosedale North',
    'Richvale',
    'Langstaff',
    'German Mills',
    'Bayview Hill',
    'Oak Ridges',
    'Fisherville'
  ],
  
  // Most common services in this area
  popularServices: [],
  
  // Recent projects in this area
  recentProjects: [],
  
  // Testimonials specific to this area
  testimonials: [],
  
  // Local information - can be tailored per service area
  localInfo: {
    applianceUsage: "Thornhill homes feature a mix of premium, high-end appliances in the established neighborhoods and energy-efficient models in newer developments. Many residents opt for built-in and integrated appliances that complement their home's design.",
    commonIssues: "In Thornhill, we frequently service high-end refrigerators and wine coolers, as well as built-in cooking appliances. Water quality in certain neighborhoods can affect dishwashers and washing machines, while power fluctuations occasionally impact sensitive electronic components.",
    serviceNotes: "Our Thornhill technicians specialize in working with luxury appliance brands and complex integrated systems. We understand the specific needs of Thornhill's diverse communities and provide service that matches the area's premium standards."
  }
};


// Brand data for Thornhill
const thornhillBrands: BrandItem[] = [
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
    id: 'subzero',
    name: 'Sub-Zero',
    logo: '/images/brands/miele.webp', // Should be replaced with Sub-Zero logo
    link: '/brands/subzero'
  },
  {
    id: 'wolf',
    name: 'Wolf',
    logo: '/images/brands/bosch.webp', // Should be replaced with Wolf logo
    link: '/brands/wolf'
  },
  {
    id: 'miele',
    name: 'Miele',
    logo: '/images/brands/miele.webp',
    link: '/brands/miele'
  },
  {
    id: 'thermador',
    name: 'Thermador',
    logo: '/images/brands/frigidaire.webp', // Should be replaced with Thermador logo
    link: '/brands/thermador'
  }
];

// Thornhill page using the template
export default function ThornhillAreaPage() {
  const thornhillServices = createStandardServices(thornhillData.name);
  return (
    <ServiceAreaPageTemplate
      areaData={thornhillData}
      services={thornhillServices}
      brands={thornhillBrands}
    />
  );
} 