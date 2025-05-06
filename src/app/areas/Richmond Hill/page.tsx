"use client";

import React from 'react';
import ServiceAreaPageTemplate from '@/components/templates/ServiceAreaPageTemplate';
import type { ServiceAreaData } from '@/types/serviceArea';
import type { ServiceItem } from '@/components/sections/common/ServicesTabSection';
import type { BrandItem } from '@/components/sections/brands/BrandsSliderSection';
import ServicesTabSection from '@/components/sections/common/ServicesTabSection';
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
    street: '18 Yonge St',
    city: 'Toronto',
    province: 'ON',
    postalCode: 'M5E 1Z8',
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

// Sample services data for Richmond Hill
const richmondHillServices: ServiceItem[] = [
  {
    id: 'refrigerator-repair',
    name: 'Refrigerator Repair',
        description: 'Our Richmond Hill refrigerator repair technicians can fix all brands and models of refrigerators. From cooling issues to ice maker problems, our experts can diagnose and repair your refrigerator quickly and efficiently. We service all Richmond Hill neighborhoods with same-day appointments available.',
    commonServices: [
      'Temperature regulation issues',
      'Ice maker repairs',
      'Water dispenser problems',
      'Strange noises or leaking',
      'Compressor and condenser repairs',
      'Door seal replacement'
    ],
    image: '/images/services/fridge-repair.png'
  },
  {
    id: 'washer-repair',
    name: 'Washer Repair',
        description: 'Our washer repair services in Richmond Hill cover all major brands and models. Whether your washing machine is leaking, not spinning, or making unusual noises, our skilled technicians can identify the problem and provide efficient, long-lasting repairs right in your Richmond Hill home.',
    commonServices: [
      'Drum and agitator problems',
      'Drainage and pump issues',
      'Water inlet and leaking repairs',
      'Control board and timer repairs',
      'Door latch and lock issues',
      'Bearing and motor replacements'
    ],
    image: '/images/services/washer-repair.png'
  },
  {
    id: 'dryer-repair',
    name: 'Dryer Repair',
        description: 'When your dryer stops working properly in Richmond Hill, our expert technicians are just a call away. We repair all types of dryers including gas and electric models. From heating issues to strange noises, our Richmond Hill team can solve your dryer problems quickly and effectively.',
    commonServices: [
      'Heating element replacements',
      'Drum and belt repairs',
      'Thermostat and sensor calibration',
      'Vent cleaning and maintenance',
      'Motor and bearing replacements',
      'Control panel and timer repairs'
    ],
    image: '/images/services/dryer-repair.png'
  },
  {
    id: 'dishwasher-repair',
    name: 'Dishwasher Repair',
        description: 'Our Richmond Hill dishwasher repair services cover all brands and models. We fix common issues like poor cleaning performance, leaking, and drainage problems. Our experienced technicians provide fast, reliable dishwasher repairs throughout Richmond Hill, often on the same day you call.',
    commonServices: [
      'Spray arm repairs and replacements',
      'Pump and motor servicing',
      'Water inlet valve repairs',
      'Drainage system unclogging',
      'Control board and panel repairs',
      'Door seal replacements'
    ],
    image: '/images/services/dishwasher-repair.png'
  },
  {
    id: 'oven-repair',
    name: 'Oven & Stove Repair',
        description: 'For oven and stove repairs in Richmond Hill, our technicians are experienced with all types including gas, electric, and induction. Whether your oven isn\'t heating properly or your stove burners won\'t light, we provide expert diagnoses and repairs throughout the Richmond Hill area.',
    commonServices: [
      'Heating element replacements',
      'Temperature sensor calibration',
      'Burner and igniter repairs',
      'Control board troubleshooting',
      'Door hinge and seal replacements',
      'Gas line and connection safety checks'
    ],
    image: '/images/services/walloven-repair.png'
  }
];

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
  return(
    <ServiceAreaPageTemplate
    areaData={richmondHillData}
    services={richmondHillServices}
    brands={richmondHillBrands}
    />
  );
}
