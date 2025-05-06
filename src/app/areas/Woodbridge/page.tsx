"use client";
import React from 'react';
import ServiceAreaPageTemplate from '@/components/templates/ServiceAreaPageTemplate';
import type { ServiceAreaData } from '@/types/serviceArea';
import type { ServiceItem } from '@/components/sections/common/ServicesTabSection';
import type { BrandItem } from '@/components/sections/brands/BrandsSliderSection';
import ServicesTabSection from '@/components/sections/common/ServicesTabSection';
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

// Sample services data for Woodbridge
const woodbridgeServices: ServiceItem[] = [
  {
    id: 'refrigerator-repair',
    name: 'Refrigerator Repair',
        description: 'Our Woodbridge refrigerator repair technicians can fix all brands and models of refrigerators. From cooling issues to ice maker problems, our experts can diagnose and repair your refrigerator quickly and efficiently. We service all Woodbridge neighborhoods with same-day appointments available.',
    commonServices: [
      'Temperature regulation issues',
      'Ice maker repairs',
      'Water dispenser problems',
      'Strange noises or leaking',
      'Compressor and condenser repairs',
      'Door seal replacement'
    ]
  },
  {
    id: 'washer-repair',
    name: 'Washer Repair',
        description: 'Our washer repair services in Woodbridge cover all major brands and models. Whether your washing machine is leaking, not spinning, or making unusual noises, our skilled technicians can identify the problem and provide efficient, long-lasting repairs right in your Woodbridge home.',
    commonServices: [
      'Drum and agitator problems',
      'Drainage and pump issues',
      'Water inlet and leaking repairs',
      'Control board and timer repairs',
      'Door latch and lock issues',
      'Bearing and motor replacements'
    ]
  },
  {
    id: 'dryer-repair',
    name: 'Dryer Repair',
        description: 'When your dryer stops working properly in Woodbridge, our expert technicians are just a call away. We repair all types of dryers including gas and electric models. From heating issues to strange noises, our Woodbridge team can solve your dryer problems quickly and effectively.',
    commonServices: [
      'Heating element replacements',
      'Drum and belt repairs',
      'Thermostat and sensor calibration',
      'Vent cleaning and maintenance',
      'Motor and bearing replacements',
      'Control panel and timer repairs'
    ]
  },
  {
    id: 'dishwasher-repair',
    name: 'Dishwasher Repair',
        description: 'Our Woodbridge dishwasher repair services cover all brands and models. We fix common issues like poor cleaning performance, leaking, and drainage problems. Our experienced technicians provide fast, reliable dishwasher repairs throughout Woodbridge, often on the same day you call.',
    commonServices: [
      'Spray arm repairs and replacements',
      'Pump and motor servicing',
      'Water inlet valve repairs',
      'Drainage system unclogging',
      'Control board and panel repairs',
      'Door seal replacements'
    ]
  },
  {
    id: 'oven-repair',
    name: 'Oven & Stove Repair',
        description: 'For oven and stove repairs in Woodbridge, our technicians are experienced with all types including gas, electric, and induction. Whether your oven isn\'t heating properly or your stove burners won\'t light, we provide expert diagnoses and repairs throughout the Woodbridge area.',
    commonServices: [
      'Heating element replacements',
      'Temperature sensor calibration',
      'Burner and igniter repairs',
      'Control board troubleshooting',
      'Door hinge and seal replacements',
      'Gas line and connection safety checks'
    ]
  }
];

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
  return (
    <ServiceAreaPageTemplate
      areaData={woodbridgeData}
      services={woodbridgeServices}
      brands={woodbridgeBrands}
    />
  );
}

