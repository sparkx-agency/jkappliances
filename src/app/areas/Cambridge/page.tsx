 

import React from 'react';
import ServiceAreaPageTemplate from '@/components/templates/ServiceAreaPageTemplate';
import type { ServiceAreaData } from '@/types/serviceArea';
import type { ServiceItem } from '@/components/sections/common/ServicesTabSection';
import type { BrandItem } from '@/components/sections/brands/BrandsSliderSection';
import ServicesTabSection from '@/components/sections/common/ServicesTabSection';
import { createStandardServices } from '@/data/servicesData';
 


// Cambridge area data
const cambridgeData: ServiceAreaData = {
  id: 'cambridge',
  name: 'Cambridge',
  fullName: 'Cambridge, Ontario',
  description: 'From historic Galt to Preston and Hespeler, our appliance repair technicians provide prompt service throughout Cambridge with same-day appointments available.',
  heroImage: '/images/areas/areas-hero.webp',
  neighborhoodImage: '/images/cambridge-map.webp',
  mapImage: '/images/cambridge.webp',
  
  // Location information
  address: {
    street: '18 Yonge St',
    city: 'Toronto',
    province: 'ON',
    postalCode: 'M5E 1Z8',
  },
  
  // Service radius and coverage details
  serviceRadius: '25',
  responseTime: 'Same-day service available in all Cambridge neighborhoods',
  
  // Neighborhoods served
  neighborhoods: [
    'Galt',
    'Preston',
    'Hespeler',
    'Blair',
    'Branchton',
    'Carlisle',
    'Clyde',
    'Countryside',
    'Dickie Settlement',
    'Galt City Centre',
    'North Cambridge',
    'South Cambridge',
    'West Galt',
    'Preston Heights',
    'East Preston',
    'Hespeler Village',
    'Greenway-Chaplin',
    'Shades Mill',
    'Fiddlesticks',
    'Lang\'s Farm',
    'Saginaw',
    'Inverness'
  ],
  
  // Most common services in this area
  popularServices: [],
  
  // Recent projects in this area
  recentProjects: [],
  
  // Testimonials specific to this area
  testimonials: [],
  
  // Local information - tailored for Cambridge
  localInfo: {
    applianceUsage: "Cambridge residents live in a diverse mix of heritage homes in Galt, established family neighborhoods in Preston, and newer developments in North Cambridge. Our technicians understand the unique requirements of both historic properties and modern homes.",
    commonIssues: "In Cambridge's historic areas like Galt and Hespeler Village, we often address issues with appliances in older homes that have specific space or electrical requirements. In newer developments, we frequently service high-efficiency and smart appliances that need specialized expertise.",
    serviceNotes: "Our Cambridge technicians are familiar with the city's unique tri-city layout and serve all communities from Galt to Preston to Hespeler with equal expertise and response times."
  }
};

// Sample services data for Cambridge
const cambridgeServices: ServiceItem[] = [
  {
    id: 'refrigerator-repair',
    name: 'Refrigerator Repair',
        description: 'Our Cambridge refrigerator repair technicians can fix all brands and models of refrigerators. From cooling issues to ice maker problems, our experts can diagnose and repair your refrigerator quickly and efficiently. We service all Cambridge neighborhoods with same-day appointments available.',
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
        description: 'Our washer repair services in Cambridge cover all major brands and models. Whether your washing machine is leaking, not spinning, or making unusual noises, our skilled technicians can identify the problem and provide efficient, long-lasting repairs right in your Cambridge home.',
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
        description: 'When your dryer stops working properly in Cambridge, our expert technicians are just a call away. We repair all types of dryers including gas and electric models. From heating issues to strange noises, our Cambridge team can solve your dryer problems quickly and effectively.',
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
        description: 'Our Cambridge dishwasher repair services cover all brands and models. We fix common issues like poor cleaning performance, leaking, and drainage problems. Our experienced technicians provide fast, reliable dishwasher repairs throughout Cambridge, often on the same day you call.',
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
        description: 'For oven and stove repairs in Cambridge, our technicians are experienced with all types including gas, electric, and induction. Whether your oven isn\'t heating properly or your stove burners won\'t light, we provide expert diagnoses and repairs throughout the Cambridge area.',
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

// Brand data for Cambridge
const cambridgeBrands: BrandItem[] = [
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



// Cambridge page using the template
export default function CambridgeAreaPage() {
  return (
    <ServiceAreaPageTemplate
      areaData={cambridgeData}
      services={cambridgeServices}
      brands={cambridgeBrands}
    />
  );
}