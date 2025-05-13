import React from 'react';
import ServiceAreaPageTemplate from '@/components/templates/ServiceAreaPageTemplate';
import type { ServiceAreaData } from '@/types/serviceArea';
import type { BrandItem } from '@/components/sections/brands/BrandsSliderSection';
import { createStandardServices } from '@/data/servicesData';


// Aurora area data
const auroraData: ServiceAreaData = {
  id: 'aurora',
  name: 'Aurora',
  fullName: 'Aurora, Ontario',
  description: 'From historic downtown to growing suburban areas, our appliance repair technicians provide prompt service throughout Aurora with same-day appointments available.',
  heroImage: '/images/areas/areas-hero.webp',
  neighborhoodImage: '/images/areas/aurora-map.webp',
  mapImage: '/images/areas/coverage.jpg',
  
  // Location information
  address: {
    street: '18 Yonge St',
    city: 'Toronto',
    province: 'ON',
    postalCode: 'M5E 1Z8',
  },
  
  // Service radius and coverage details
  serviceRadius: '25',
  responseTime: 'Same-day service available in most Aurora neighborhoods',
  
  // Neighborhoods served
  neighborhoods: [
    'Downtown Aurora',
    'Highland Gate',
    'Bayview Northeast',
    'Bayview Southeast',
    'Bayview Wellington',
    'Bayview Southwest',
    'Aurora Heights',
    'Regency Acres',
    'Aurora Grove',
    'Temperance Street',
    'Town Centre',
    "Sheppard's Bush",
    "St. Andrew's Village",
    'Aurora Highlands',
    'Aurora Estates',
    "St. John's Sideroad",
    'Vandorf Sideroad',
    'Wellington East',
    'Wellington West',
    'Oak Ridges'
  ],
  
  // Most common services in this area
  popularServices: [],
  
  // Recent projects in this area
  recentProjects: [],
  
  // Testimonials specific to this area
  testimonials: [],
  
  // Local information - tailored for Aurora
  localInfo: {
    applianceUsage: "Aurora residents have a mix of heritage homes with updated appliances and new developments with modern smart home technology. The growing population means many homes have newer, high-efficiency appliances that require specialized service.",
    commonIssues: "In Aurora, we frequently address issues with refrigeration systems and smart appliances. Heritage homes in downtown Aurora often require specialized knowledge for integrating modern appliances into older electrical systems.",
    serviceNotes: "Our Aurora technicians are familiar with both the century homes in established neighborhoods and the latest appliances in newer developments. We maintain inventory specifically for the most common brands and models found in Aurora homes."
  }
};


// Brand data for Aurora
const auroraBrands: BrandItem[] = [
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

// Aurora page using the template
export default function AuroraAreaPage() {
  const auroraServices = createStandardServices(auroraData.name);
  return (
    <ServiceAreaPageTemplate
      areaData={auroraData}
      services={auroraServices}
      brands={auroraBrands}
    />
  );
}