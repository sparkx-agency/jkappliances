"use client";
import React from 'react';
import ServiceAreaPageTemplate from '@/components/templates/ServiceAreaPageTemplate';
import type { ServiceAreaData } from '@/types/serviceArea';
import type { BrandItem } from '@/components/sections/brands/BrandsSliderSection';
import { createStandardServices } from '@/data/servicesData';

// Vaughan area data
const vaughanData: ServiceAreaData = {
  id: 'vaughan',
  name: 'Vaughan',
  fullName: 'Vaughan, Ontario',
  description: 'From bustling urban centers like Woodbridge to family neighborhoods in Maple, our appliance repair technicians provide prompt service throughout Vaughan with same-day appointments available.',
  heroImage: '/images/areas/areas-hero.webp',
  neighborhoodImage: '/images/vaughan-map.webp',
  mapImage: '/images/vaughan.webp',
  
  // Location information
  address: {
    street: '18 Yonge St',
    city: 'Toronto',
    province: 'ON',
    postalCode: 'M5E 1Z8',
  },
  
  // Service radius and coverage details
  serviceRadius: '25',
  responseTime: 'Same-day service available in all Vaughan neighborhoods',
  
  // Neighborhoods served
  neighborhoods: [
    'Woodbridge',
    'Maple',
    'Thornhill',
    'Concord',
    'Kleinburg',
    'Vellore Village',
    'Sonoma Heights',
    'Beverley Glen',
    'Vaughan Mills',
    'Patterson',
    'Uplands',
    'Islington Woods',
    'Sunset Ridge',
    'Brownridge',
    'Dufferin Hill',
    'Elder Mills',
    'Vaughan Valley',
    'Nashville',
    'Carrville',
    'Crestwood',
    'Kipling Heights',
    'Pinewood'
  ],
  
  // Most common services in this area
  popularServices: [],
  
  // Recent projects in this area
  recentProjects: [],
  
  // Testimonials specific to this area
  testimonials: [],
  
  // Local information - tailored for Vaughan
  localInfo: {
    applianceUsage: "Vaughan residents predominantly live in spacious single-family homes and luxury properties that often feature high-end appliances. From established neighborhoods in Woodbridge to newer developments in Vellore Village, our technicians are familiar with both premium and standard models.",
    commonIssues: "In Vaughan's luxury homes like those in Kleinburg, we frequently address issues with high-end, built-in appliances. In family-oriented neighborhoods like Maple and Thornhill, we often service large-capacity, high-efficiency appliances designed for busy households.",
    serviceNotes: "Our Vaughan technicians are ready to serve all communities from Woodbridge to Maple and beyond, with specialized knowledge of both luxury European brands and everyday North American models popular throughout Vaughan homes."
  }
};

// Brand data for Vaughan
const vaughanBrands: BrandItem[] = [
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

// Vaughan page using the template
export default function VaughanAreaPage() {
  const vaughanServices = createStandardServices(vaughanData.name);
  return (
    <ServiceAreaPageTemplate
      areaData={vaughanData}
      services={vaughanServices}
      brands={vaughanBrands}
    />
  );
} 