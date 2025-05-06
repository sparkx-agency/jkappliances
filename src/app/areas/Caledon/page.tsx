 

import React from 'react';
import ServiceAreaPageTemplate from '@/components/templates/ServiceAreaPageTemplate';
import type { ServiceAreaData } from '@/types/serviceArea';
import type { ServiceItem } from '@/components/sections/common/ServicesTabSection';
import type { BrandItem } from '@/components/sections/brands/BrandsSliderSection';
import ServicesTabSection from '@/components/sections/common/ServicesTabSection';
import { createStandardServices } from '@/data/servicesData';
 


// Area data for Caledon
const caledonData: ServiceAreaData = {
  id: 'caledon',
  name: 'Caledon',
  fullName: 'Caledon, Ontario',
  description: 'Professional appliance repair services throughout Caledon and surrounding areas. Our experienced technicians service all major brands including Samsung, LG, Whirlpool, and more.',
  heroImage: '/images/areas/areas-hero.webp',
  neighborhoodImage: '/images/caledon-map.webp',
  mapImage: '/images/caledon.webp',

  // Location information
  address: {
    street: '18 Yonge St',
    city: 'Toronto',
    province: 'ON',
    postalCode: 'M5E 1Z8',
  },

  // Service radius and coverage details
  serviceRadius: '30',
  responseTime: 'Same-day service available in most Caledon areas',

  // Neighborhoods served
  neighborhoods: [
    'Bolton',
    'Caledon Village',
    'Caledon East',
    'Alton',
    'Palgrave',
    'Inglewood',
    'Belfountain',
    'Terra Cotta',
    'Cheltenham',
    'Mono Mills',
    'Albion',
    'Mono Road',
    'Mayfield West',
    'Valleywood',
    'Cedar Mills',
    'Campbell\'s Cross',
    'Melville',
    'Victoria',
    'Claude',
    'Sandhill'
  ],

  testimonials: [
    {
      author: 'Jennifer K.',
      location: 'Bolton, Caledon',
      rating: 5,
      text: 'After our refrigerator stopped cooling overnight, I called JK Appliances in a panic. Their technician arrived the same day, quickly diagnosed a faulty compressor, and had it repaired within hours. The service was exceptional, and they even cleaned up afterward!',
    },
    {
      author: 'Michael R.',
      location: 'Caledon Village',
      rating: 5,
      text: 'We\'ve used JK Appliances twice now - once for our washing machine and once for our dishwasher. Both times the technicians were professional, knowledgeable, and efficient. They explained what was wrong and how they fixed it. Great service at a fair price.',
    },
    {
      author: 'Laura T.',
      location: 'Caledon East',
      rating: 5,
      text: 'Living in a rural area, it\'s sometimes hard to get service people to come out. JK Appliances was different - they came exactly when scheduled and fixed our dryer that same visit. The technician was friendly and professional. Highly recommend!',
    },
    {
      author: 'David S.',
      location: 'Belfountain, Caledon',
      rating: 5,
      text: 'Our oven stopped working during a dinner party preparation. JK Appliances sent a technician within hours who diagnosed and repaired a faulty heating element. They saved our evening! Excellent emergency service and very reasonable pricing.',
    },
],
  // Local information - tailored for Caledon
  localInfo: {
    applianceUsage: "Caledon residents live in a diverse range of homes, from historic properties in heritage villages to modern estates and rural farms. This variety requires our technicians to be versatile in handling both traditional and cutting-edge appliances.",
    commonIssues: "In Caledon, we frequently address issues unique to rural properties such as power fluctuations affecting appliances, as well as maintenance needs for high-end appliances in luxury homes. Our technicians are also familiar with the distinct needs of heritage properties in villages like Belfountain and Alton.",
    serviceNotes: "Our Caledon technicians are experienced in navigating the municipality's rural roads and large geographical area. We plan our routes efficiently to ensure prompt service to all areas from Bolton to the more remote northern communities."
  },
  popularServices: [],
  recentProjects: [],
};

// Available services for area - properly typed as ServiceItem[]
const caledonServices: ServiceItem[] = [
    {
      id: 'refrigerator-repair',
      name: 'Refrigerator Repair',
            description: 'From classic kitchens in historic Caledon homes to modern appliances in newer builds, our technicians have the expertise to repair all refrigerator types. We diagnose and fix cooling issues, ice maker problems, and more.',
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
      id: 'oven-repair',
      name: 'Oven & Stove Repair',
            description: 'Whether you\'re in Bolton or a rural property in Caledon East, we provide fast, reliable oven and stove repair. Our technicians can fix temperature issues, faulty elements, ignition problems, and more for all models.',
      commonServices: [
        'Heating element replacements',
        'Temperature sensor calibration',
        'Burner and igniter repairs',
        'Control board troubleshooting',
        'Door hinge and seal replacements',
        'Gas line and connection safety checks'
      ]
    },
    {
      id: 'dishwasher-repair',
      name: 'Dishwasher Repair',
            description: 'Having dishwasher troubles in your Caledon home? Our local technicians can quickly diagnose and repair leaks, drainage problems, cleaning issues, and electrical faults in all dishwasher brands and models.',
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
    id: 'washer-repair',
    name: 'Washer Repair',
          description: 'For washing machine repairs throughout Caledon Village, Bolton, and beyond, our experienced technicians can fix everything from drainage issues to mechanical problems, unusual noises, and control panel malfunctions.',
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
          description: 'When your dryer isn\'t heating, is making strange noises, or won\'t start, our Caledon technicians can help. We service all types of dryers across the region, from Bolton to the scenic villages of Belfountain and Alton.',
    commonServices: [
      'Heating element replacements',
      'Drum and belt repairs',
      'Thermostat and sensor calibration',
      'Vent cleaning and maintenance',
      'Motor and bearing replacements',
      'Control panel and timer repairs'
    ]
    }
  ];

// Brands serviced - properly typed as BrandItem[]
const caledonBrands: BrandItem[] = [
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
    id: 'bosch',
    name: 'Bosch',
    logo: '/images/brands/bosch.webp',
    link: '/brands/bosch'
  },
  {
      id: 'kitchenaid',
      name: 'KitchenAid', 
      logo: '/images/brands/kitchen-aid.webp',
      link: '/brands/kitchenaid'
  },
  {
    id: 'frigidaire',
    name: 'Frigidaire',
    logo: '/images/brands/frigidaire.webp',
    link: '/brands/frigidaire'
    },
    { 
      id: 'electrolux',
      name: 'Electrolux', 
      logo: '/images/brands/electrolux.webp',
      link: '/brands/electrolux'
    },
    { 
      id: 'kenmore',
      name: 'Kenmore', 
      logo: '/images/brands/kenmore.webp',
      link: '/brands/kenmore'
    },
  ];

  // Caledon page using the template
export default function CaledonAreaPage() {
  return (
    <ServiceAreaPageTemplate
      areaData={caledonData}
      services={caledonServices}
      brands={caledonBrands}
    />
  );
}
     