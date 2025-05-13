import React from 'react';
import ServiceAreaPageTemplate from '@/components/templates/ServiceAreaPageTemplate';
import type { ServiceAreaData } from '@/types/serviceArea';
import type { BrandItem } from '@/components/sections/brands/BrandsSliderSection';
import { createStandardServices } from '@/data/servicesData';

// Milton area data
const miltonData: ServiceAreaData = {
  id: 'milton',
  name: 'Milton',
  fullName: 'Milton, Ontario',
  description: 'Our skilled technicians provide fast, reliable appliance repair services throughout Milton, with same-day appointments available for your convenience.',
  heroImage: '/images/areas/areas-hero.webp',
  neighborhoodImage: '/images/toronto-map.webp', // Should be replaced with Milton specific map
  mapImage: '/images/toronto.webp', // Should be replaced with Milton specific map
  
  // Location information
  address: {
    street: '55 Ontario St S',
    city: 'Milton',
    province: 'ON',
    postalCode: 'L9T 2M3',
  },
  
  // Service radius and coverage details
  serviceRadius: '20',
  responseTime: 'Same-day service available in most Milton neighborhoods',
  
  // Neighborhoods served
  neighborhoods: [
    'Old Milton',
    'Beaty',
    'Bronte Meadows',
    'Clarke',
    'Coates',
    'Dempsey',
    'Dorset Park',
    'Derry Green Business Park',
    'Bowes',
    'Timberlea',
    'Willmott',
    'Scott',
    'Harrison',
    'Mountainview',
    'Britannia',
    'Milton Heights',
    'Campbellville',
    'Brookville',
    'Haltonville',
    'Moffat'
  ],
  
  // Most common services in this area
  popularServices: [],
  
  // Recent projects in this area
  recentProjects: [],
  
  // Testimonials specific to this area
  testimonials: [],
  
  // Local information - can be tailored per service area
  localInfo: {
    applianceUsage: "Milton homes feature a mix of newer energy-efficient appliances in the growing subdivisions and established models in the older neighborhoods. Many families in this rapidly growing community rely heavily on full-sized, high-capacity appliances to meet their daily needs.",
    commonIssues: "In Milton, we frequently service washing machines and dishwashers affected by the area's hard water. Newer developments may experience installation-related issues, while homes in established neighborhoods often need service for aging appliances.",
    serviceNotes: "Our Milton technicians are familiar with both the historic downtown area and newer subdivisions, ensuring efficient service across all neighborhoods. We understand the unique needs of Milton's diverse housing stock, from century homes to modern developments."
  }
};

// Brand data for Milton
const miltonBrands: BrandItem[] = [
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

// Milton page using the template
export default function MiltonAreaPage() {
  const miltonServices = createStandardServices(miltonData.name);
  return (
    <ServiceAreaPageTemplate
      areaData={miltonData}
      services={miltonServices}
      brands={miltonBrands}
    />
  );
} 