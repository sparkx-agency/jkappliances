 

import React from 'react';
import ServiceAreaPageTemplate from '@/components/templates/ServiceAreaPageTemplate';
import type { ServiceAreaData } from '@/types/serviceArea';
import type { ServiceItem } from '@/components/sections/common/ServicesTabSection';
import type { BrandItem } from '@/components/sections/brands/BrandsSliderSection';
import ServicesTabSection from '@/components/sections/common/ServicesTabSection';
import { createStandardServices } from '@/data/servicesData';
 


// Georgetown area data
const georgetownData: ServiceAreaData = {
  id: 'georgetown',
  name: 'Georgetown',
  fullName: 'Georgetown, Halton Hills',
  description: 'From historic downtown to newer suburban neighborhoods, our appliance repair technicians provide prompt service throughout Georgetown with same-day appointments available.',
  heroImage: '/images/areas/areas-hero.webp',
  neighborhoodImage: '/images/georgetown-map.webp',
  mapImage: '/images/georgetown.webp',

  // Location information
  address: {
    street: '18 Yonge St',
    city: 'Toronto',
    province: 'ON',
    postalCode: 'M5E 1Z8',
  },

  // Service radius and coverage details
  serviceRadius: '25',
  responseTime: 'Same-day service available in most Georgetown neighborhoods',

  // Neighborhoods served
  neighborhoods: [
    'Downtown Georgetown',
    'Georgetown South',
    'Delrex',
    'Moore Park',
    'Trafalgar Country',
    'Arbour Glen',
    'Stewart\'s Mills',
    'Four Corners',
    'Glen Williams',
    'Norval',
    'Limehouse',
    'Stewarttown'
  ],

  // Most common services in this area
  popularServices: [],

  // Recent projects in this area
  recentProjects: [],

  // Local information - tailored for Georgetown
  localInfo: {
    applianceUsage: "Georgetown residents live in a mix of historic homes in the downtown core, established residential neighborhoods like Delrex and Moore Park, and newer developments in Georgetown South. This diverse housing requires our technicians to be familiar with both older model appliances and the latest high-efficiency units.",
    commonIssues: "In Georgetown's historic downtown, we frequently address issues with appliances in older homes that may have unique space constraints or electrical requirements. In newer developments like Georgetown South, we often service smart appliances and high-efficiency units that require specialized expertise.",
    serviceNotes: "Our Georgetown technicians are familiar with the area's distinct neighborhoods, from the historic downtown core to the newer developments in Georgetown South. We maintain inventory specifically for models common in Georgetown homes to ensure faster service and repairs."
  },
  

  testimonials: [
    {
      author: "Daniel W.",
      location: "Downtown Georgetown",
      rating: 5,
      text: "The team at JK Appliance was fantastic when our refrigerator stopped cooling right before a holiday weekend. They arrived quickly, identified the problem, and had it fixed the same day. Friendly, knowledgeable service that saved our holiday plans!",
    },
    {
      author: "Laura M.",
      location: "Georgetown South",
      rating: 5,
      text: "I've used JK Appliance Repair twice now - once for my washing machine and recently for my dishwasher. Both times they were prompt, professional, and fixed the issues quickly. Their technicians explain everything clearly and the pricing is fair. Definitely recommend!",
    },
    {
      author: "Richard K.",
      location: "Delrex, Georgetown",
      rating: 5,
      text: "As a longtime Georgetown resident, I've tried several appliance repair services over the years. JK Appliance stands out for their reliability and expertise. They repaired our 10-year-old dryer that other companies said needed replacement. It's been working perfectly ever since!",
    },
    {
      author: "Michelle T.",
      location: "Moore Park, Georgetown",
      rating: 5,
      text: "When our oven stopped working right before a dinner party, JK Appliance came to the rescue with same-day service. The technician was professional, efficient, and even helped me understand how to prevent similar issues in the future. Outstanding customer service!",
    }

  ]
};

// Sample services data for Georgetown
const georgetownServices: ServiceItem[] = [
  {
    id: 'refrigerator-repair',
    name: 'Refrigerator Repair',
        description: 'Our Georgetown refrigerator repair technicians can fix all brands and models of refrigerators. From cooling issues to ice maker problems, our experts can diagnose and repair your refrigerator quickly and efficiently. We service all Georgetown neighborhoods with same-day appointments available.',
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
        description: 'Our washer repair services in Georgetown cover all major brands and models. Whether your washing machine is leaking, not spinning, or making unusual noises, our skilled technicians can identify the problem and provide efficient, long-lasting repairs right in your Georgetown home.',
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
        description: 'When your dryer stops working properly in Georgetown, our expert technicians are just a call away. We repair all types of dryers including gas and electric models. From heating issues to strange noises, our Georgetown team can solve your dryer problems quickly and effectively.',
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
        description: 'Our Georgetown dishwasher repair services cover all brands and models. We fix common issues like poor cleaning performance, leaking, and drainage problems. Our experienced technicians provide fast, reliable dishwasher repairs throughout Georgetown, often on the same day you call.',
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
        description: 'For oven and stove repairs in Georgetown, our technicians are experienced with all types including gas, electric, and induction. Whether your oven isn\'t heating properly or your stove burners won\'t light, we provide expert diagnoses and repairs throughout the Georgetown area.',
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

// Brand data for Georgetown
const georgetownBrands: BrandItem[] = [
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



// Georgetown page using the template
export default function GeorgetownAreaPage() {
  return (
    <ServiceAreaPageTemplate
      areaData={georgetownData}
      services={georgetownServices}
      brands={georgetownBrands}
    />
  );
}