 

import React from 'react';
import ServiceAreaPageTemplate from '@/components/templates/ServiceAreaPageTemplate';
import type { ServiceAreaData } from '@/types/serviceArea';
import type { ServiceItem } from '@/components/sections/common/ServicesTabSection';
import type { BrandItem } from '@/components/sections/brands/BrandsSliderSection';
import ServicesTabSection from '@/components/sections/common/ServicesTabSection';
import { createStandardServices } from '@/data/servicesData';
 


// Kleinburg area data
const kleinburgData: ServiceAreaData = {
  id: 'kleinburg',
  name: 'Kleinburg',
  fullName: 'Kleinburg, Vaughan',
  description: 'From historic properties in Old Kleinburg to luxury homes in Copper Creek, our appliance repair technicians provide prompt service throughout Kleinburg with same-day appointments available.',
  heroImage: '/images/areas/areas-hero.webp',
  neighborhoodImage: '/images/kleinburg-map.webp',
  mapImage: '/images/kleinburg.webp',
  
  // Location information
  address: {
    street: '18 Yonge St',
    city: 'Toronto',
    province: 'ON',
    postalCode: 'M5E 1Z8',
  },
  
  // Service radius and coverage details
  serviceRadius: '25',
  responseTime: 'Same-day service available in all Kleinburg neighborhoods',
  
  // Neighborhoods served
  neighborhoods: [
    'Old Kleinburg',
    'Nashville',
    'Copper Creek',
    'Carrying Place',
    'Kleinburg Core',
    'Humber Summit',
    'Huntington Ridge',
    'Humber Trails',
    'Kleinburg Heritage Estates',
    'Suburban Kleinburg',
    'Islington Woods',
    'Hazelton Place',
    'Cranston Park',
    'Vaughanwood Estates',
    'Belvedere',
    'Purpleville',
    'Elder Mills',
    'Kleinburg North',
    'Kleinburg South',
    'Bindertwine',
    'Lakeview Estates',
    'Kortright Hills'
  ],
  
  // Most common services in this area
  popularServices: [],
  
  // Recent projects in this area
  recentProjects: [],
  
testimonials: [],

  // Local information - tailored for Kleinburg
  localInfo: {
    applianceUsage: "Kleinburg features a blend of historic properties in Old Kleinburg and Nashville with upscale luxury estates in newer developments like Copper Creek and Huntington Ridge. Our technicians are experienced with premium European appliances common in Kleinburg's luxury homes as well as traditional appliances in heritage properties.",
    commonIssues: "In Kleinburg's luxury estates, we frequently service high-end integrated appliance systems requiring specialized knowledge. In established neighborhoods, we often address issues with premium appliances from brands like Sub-Zero, Wolf, and Miele that require expert technicians familiar with their sophisticated components.",
    serviceNotes: "Our Kleinburg technicians understand the unique character of this prestigious community. We provide discreet, professional service to all neighborhoods from historic Old Kleinburg to newer luxury developments, with specialized expertise in premium appliance brands and custom installations."
  }
};

// Sample services data for Kleinburg
const kleinburgServices: ServiceItem[] = [
  {
    id: 'refrigerator-repair',
    name: 'Refrigerator Repair',
        description: 'Our Kleinburg refrigerator repair technicians can fix all brands and models of refrigerators. From cooling issues to ice maker problems, our experts can diagnose and repair your refrigerator quickly and efficiently. We service all Kleinburg neighborhoods with same-day appointments available.',
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
        description: 'Our washer repair services in Kleinburg cover all major brands and models. Whether your washing machine is leaking, not spinning, or making unusual noises, our skilled technicians can identify the problem and provide efficient, long-lasting repairs right in your Kleinburg home.',
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
        description: 'When your dryer stops working properly in Kleinburg, our expert technicians are just a call away. We repair all types of dryers including gas and electric models. From heating issues to strange noises, our Kleinburg team can solve your dryer problems quickly and effectively.',
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
        description: 'Our Kleinburg dishwasher repair services cover all brands and models. We fix common issues like poor cleaning performance, leaking, and drainage problems. Our experienced technicians provide fast, reliable dishwasher repairs throughout Kleinburg, often on the same day you call.',
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
        description: 'For oven and stove repairs in Kleinburg, our technicians are experienced with all types including gas, electric, and induction. Whether your oven isn\'t heating properly or your stove burners won\'t light, we provide expert diagnoses and repairs throughout the Kleinburg area.',
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

// Brand data for Kleinburg
const kleinburgBrands: BrandItem[] = [
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

// Kleinburg page using the template
export default function KleinburgAreaPage() {
  return (
    <ServiceAreaPageTemplate
      areaData={kleinburgData}
      services={kleinburgServices}
      brands={kleinburgBrands}
    />
  );
}