"use client";
import React from 'react';
import ServiceAreaPageTemplate from '@/components/templates/ServiceAreaPageTemplate';
import type { ServiceAreaData } from '@/types/serviceArea';
import type { BrandItem } from '@/components/sections/brands/BrandsSliderSection';
import { createStandardServices } from '@/data/servicesData';

// Richmond Hill area data
const richmondHillData: ServiceAreaData = {
  id: 'richmondhill',
  name: 'Richmond Hill',
  fullName: 'Richmond Hill, Ontario',
  description: 'From luxury estates in Bayview Hill to family homes in Oak Ridges, our appliance repair technicians provide prompt service throughout Richmond Hill with same-day appointments available.',
  heroImage: '/images/areas/areas-hero.webp',
  neighborhoodImage: '/images/richmondhill-map.webp',
  mapImage: '/images/richmondhill.webp',
  
  // Location information
  address: {
    street: '8 Lorraine Crescent',
    city: 'Brampton',
    province: 'ON',
    postalCode: 'L6S 2R7',
  },
  
  // Service radius and coverage details
  serviceRadius: '25',
  responseTime: 'Same-day service available in all Richmond Hill neighborhoods',
  
  // Neighborhoods served
  neighborhoods: [
    'Bayview Hill',
    'Oak Ridges',
    'Mill Pond',
    'Headford',
    'Elgin Mills',
    'Jefferson',
    'Richvale',
    'Beaver Creek',
    'North Richvale',
    'Crosby',
    'Langstaff',
    'Harding',
    'Rouge Woods',
    'Lake Wilcox',
    'Doncrest',
    'David Dunlap Observatory',
    'Windham',
    'Tower Hill',
    'Bayview Glen',
    'Gormley',
    'Beverly Acres',
    'French Royalist'
  ],
  
  // Most common services in this area
  popularServices: [],
  
  // Recent projects in this area
  recentProjects: [],
  
  // Testimonials specific to this area
  testimonials: [],
    

  // Local information - tailored for Richmond Hill
  localInfo: {
    applianceUsage: "Richmond Hill features a mix of luxury estates in areas like Bayview Hill, spacious family homes in Oak Ridges, and elegant townhomes near the city center. Our technicians are experienced with both premium appliance brands common in high-end homes and family-friendly models found throughout the community.",
    commonIssues: "In Richmond Hill's luxury neighborhoods, we frequently service high-end European appliances that require specialized knowledge. In family-centered communities, we commonly address issues with high-efficiency washers, dryers, and refrigerators designed for busy households with children.",
    serviceNotes: "Our Richmond Hill technicians are familiar with all areas from southern communities near Highway 7 to northern neighborhoods in Oak Ridges, providing exceptional service with specialized knowledge of both premium and standard appliance models."
  }
};

// Brand data for Richmond Hill
const richmondHillBrands: BrandItem[] = [
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

export default function RichmondhillAreaPage() {
  const richmondHillServices = createStandardServices(richmondHillData.name);
  return(
    <ServiceAreaPageTemplate
    areaData={richmondHillData}
    services={richmondHillServices}
    brands={richmondHillBrands}
    />
  );
}
