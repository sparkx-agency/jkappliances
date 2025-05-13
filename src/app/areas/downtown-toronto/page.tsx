import React from 'react';
import ServiceAreaPageTemplate from '@/components/templates/ServiceAreaPageTemplate';
import type { ServiceAreaData } from '@/types/serviceArea';
import type { BrandItem } from '@/components/sections/brands/BrandsSliderSection';
import { createStandardServices } from '@/data/servicesData';
// Downtown Toronto area data
const downtownTorontoData: ServiceAreaData = {
  id: 'downtown-toronto',
  name: 'Downtown Toronto',
  fullName: 'Downtown Toronto, Ontario',
  description: 'From high-rise condos to heritage buildings, our skilled technicians provide fast, reliable appliance repair throughout Downtown Toronto with same-day service available.',
  heroImage: '/images/areas/areas-hero.webp',
  neighborhoodImage: '/images/toronto-map.webp', // Should be replaced with Downtown Toronto specific map
  mapImage: '/images/toronto.webp', // Should be replaced with Downtown Toronto specific map
  
  // Location information
  address: {
    street: '8 Lorraine Crescent',
    city: 'Brampton',
    province: 'ON',
    postalCode: 'L6S 2R7',
  },
  
  // Service radius and coverage details
  serviceRadius: '10',
  responseTime: 'Same-day service available in all Downtown Toronto neighborhoods',
  
  // Neighborhoods served
  neighborhoods: [
    'Financial District',
    'Entertainment District',
    'Fashion District',
    'Harbourfront',
    'St. Lawrence Market',
    'Distillery District',
    'Corktown',
    'Chinatown',
    'Kensington Market',
    'Grange Park',
    'Queen West',
    'King West',
    'Liberty Village',
    'CityPlace',
    'Waterfront',
    'Old Town',
    'Garden District',
    'Church-Wellesley Village',
    'Ryerson University Area',
    'Bay Street Corridor'
  ],
  
  // Most common services in this area
  popularServices: [],
  
  // Recent projects in this area
  recentProjects: [],
  
  // Testimonials specific to this area
  testimonials: [],
  
  // Local information - can be tailored per service area
  localInfo: {
    applianceUsage: "Downtown Toronto residents primarily use compact, high-efficiency appliances suited for urban condo living. Many buildings feature integrated or built-in appliances, and smart home technology adoption is particularly high in newer developments.",
    commonIssues: "In Downtown Toronto, we frequently address issues related to high-usage appliances in dense urban settings. Condos often present unique challenges like limited access space, building-specific water systems, and ventilation considerations for dryers and range hoods.",
    serviceNotes: "Our Downtown Toronto technicians are experts at navigating high-rise buildings, understanding condo regulations, and working efficiently in urban spaces. We're familiar with building access protocols and parking limitations throughout downtown."
  }
};

// Brand data for Downtown Toronto
const downtownTorontoBrands: BrandItem[] = [
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
    id: 'thermador',
    name: 'Thermador',
    logo: '/images/brands/frigidaire.webp', // Should be replaced with Thermador logo
    link: '/brands/thermador'
  }
];

// Downtown Toronto page using the template
export default function DowntownTorontoAreaPage() {
  const downtownTorontoServices = createStandardServices(downtownTorontoData.name);
  return (
    <ServiceAreaPageTemplate
      areaData={downtownTorontoData}
      services={downtownTorontoServices}
      brands={downtownTorontoBrands}
    />
  );
} 