"use client";
import React from 'react';
import ServiceAreaPageTemplate from '@/components/templates/ServiceAreaPageTemplate';
import type { ServiceAreaData } from '@/types/serviceArea';
import type { BrandItem } from '@/components/sections/brands/BrandsSliderSection';
import { createStandardServices } from '@/data/servicesData';

// Woodbridge area data
const woodbridgeData: ServiceAreaData = {
  id: 'woodbridge',
  name: 'Woodbridge',
  fullName: 'Woodbridge, Vaughan',
  description: 'From historic homes in Old Woodbridge to modern developments in Vellore Village, our appliance repair technicians provide prompt service throughout Woodbridge with same-day appointments available.',
  heroImage: '/images/areas/areas-hero.webp',
  neighborhoodImage: '/images/woodbridge-map.webp',
  mapImage: '/images/woodbridge.webp',
  
  // Location information
  address: {
    street: '18 Yonge St',
    city: 'Toronto',
    province: 'ON',
    postalCode: 'M5E 1Z8',
  },
  
  // Service radius and coverage details
  serviceRadius: '25',
  responseTime: 'Same-day service available in all Woodbridge neighborhoods',
  
  // Neighborhoods served
  neighborhoods: [
    'Woodbridge',
    'Islington Woods',
    'Vellore Village',
    'Weston Downs',
    'Pine Grove',
    'Sonoma Heights',
    'Tuscany',
    'Woodbridge Highlands',
    'Market Lane',
    'Vaughan Valley',
    'Vaughan Chase',
    'West Woodbridge',
    'East Woodbridge',
    'Woodbridge Acres',
    'Boyd Conservation',
    'Kortright',
    'Clarence',
    'Woodbridge North',
    'Brownridge',
    'Foxwood',
    'Sunset Ridge',
    'Chancellor District'
  ],
  
  // Most common services in this area
  popularServices: [],
  
  // Recent projects in this area
  recentProjects: [],

  // Testimonials specific to this area
  testimonials: [],


  // Local information - tailored for Woodbridge
  localInfo: {
    applianceUsage: "Woodbridge features a mix of older established neighborhoods like Old Woodbridge and Pine Grove, alongside modern developments in areas like Vellore Village and Sonoma Heights. Our technicians are experienced with both traditional appliances in older homes and advanced smart systems in newer properties.",
    commonIssues: "In Woodbridge's established neighborhoods, we frequently address maintenance issues with longer-lasting traditional appliances. In newer developments like Vellore Village and Sonoma Heights, we often service high-efficiency smart appliances and integrated systems popular in modern family homes.",
    serviceNotes: "Our Woodbridge technicians are familiar with the area's unique blend of historic charm and modern development, providing excellent service across all neighborhoods with specialized knowledge of both traditional and cutting-edge appliances."
  }
};


// Brand data for Woodbridge
const woodbridgeBrands: BrandItem[] = [
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


export default function WoodbridgeAreaPage() {
  const woodbridgeServices = createStandardServices(woodbridgeData.name);
  return (
    <ServiceAreaPageTemplate
      areaData={woodbridgeData}
      services={woodbridgeServices}
      brands={woodbridgeBrands}
    />
  );
}

