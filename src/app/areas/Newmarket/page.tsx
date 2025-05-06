 

import React from 'react';
import ServiceAreaPageTemplate from '@/components/templates/ServiceAreaPageTemplate';
import type { ServiceAreaData } from '@/types/serviceArea';
import type { ServiceItem } from '@/components/sections/common/ServicesTabSection';
import type { BrandItem } from '@/components/sections/brands/BrandsSliderSection';
import ServicesTabSection from '@/components/sections/common/ServicesTabSection';
import { createStandardServices } from '@/data/servicesData';
 


// Newmarket area data
const newmarketData: ServiceAreaData = {
  id: 'newmarket',
  name: 'Newmarket',
  fullName: 'Newmarket, Ontario',
  description: 'From historic homes in Old Newmarket to modern developments in Stonehaven, our appliance repair technicians provide prompt service throughout Newmarket with same-day appointments available.',
  heroImage: '/images/areas/areas-hero.webp',
  neighborhoodImage: '/images/newmarket-map.webp',
  mapImage: '/images/newmarket.webp',
  
  // Location information
  address: {
    street: '18 Yonge St',
    city: 'Toronto',
    province: 'ON',
    postalCode: 'M5E 1Z8',
  },
  
  // Service radius and coverage details
  serviceRadius: '25',
  responseTime: 'Same-day service available in all Newmarket neighborhoods',
  
  // Neighborhoods served
  neighborhoods: [
    'Old Newmarket',
    'Glenway',
    'Stonehaven',
    'Woodland Hills',
    'Summerhill',
    'College Manor',
    'Armitage',
    'Bristol',
    'Central Newmarket',
    'Gorham',
    'Huron Heights',
    'Leslie Valley',
    'Copper Hills',
    'Maple Leaf',
    'Quaker Village',
    'Crossland',
    'Fernbank',
    'Beechwood',
    'Bogarttown',
    'Longford',
    'Maryfield',
    'Newmarket Heights'
  ],
  
  // Most common services in this area
  popularServices: [],
  
  // Recent projects in this area
  recentProjects: [],
  

  testimonials: [],

  // Local information - tailored for Newmarket
  localInfo: {
    applianceUsage: "Newmarket features a mix of historic homes in areas like Old Newmarket and Quaker Village, alongside family-friendly neighborhoods like Stonehaven and Woodland Hills. Our technicians are experienced with both vintage appliances in heritage homes and modern systems in newer properties.",
    commonIssues: "In Newmarket's established neighborhoods, we frequently address maintenance issues with well-maintained appliances in older homes. In newer communities like Stonehaven and Copper Hills, we often service higher-efficiency systems and smart appliances popular in modern family homes.",
    serviceNotes: "Our Newmarket technicians understand the town's blend of heritage charm and contemporary living. We provide reliable service to all neighborhoods from the historic downtown to the newer northern developments, with expertise in both traditional and modern appliances."
  }
};

// Sample services data for Newmarket
const newmarketServices: ServiceItem[] = [
  {
    id: 'refrigerator-repair',
    name: 'Refrigerator Repair',
        description: 'Our Newmarket refrigerator repair technicians can fix all brands and models of refrigerators. From cooling issues to ice maker problems, our experts can diagnose and repair your refrigerator quickly and efficiently. We service all Newmarket neighborhoods with same-day appointments available.',
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
        description: 'Our washer repair services in Newmarket cover all major brands and models. Whether your washing machine is leaking, not spinning, or making unusual noises, our skilled technicians can identify the problem and provide efficient, long-lasting repairs right in your Newmarket home.',
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
        description: 'When your dryer stops working properly in Newmarket, our expert technicians are just a call away. We repair all types of dryers including gas and electric models. From heating issues to strange noises, our Newmarket team can solve your dryer problems quickly and effectively.',
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
        description: 'Our Newmarket dishwasher repair services cover all brands and models. We fix common issues like poor cleaning performance, leaking, and drainage problems. Our experienced technicians provide fast, reliable dishwasher repairs throughout Newmarket, often on the same day you call.',
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
        description: 'For oven and stove repairs in Newmarket, our technicians are experienced with all types including gas, electric, and induction. Whether your oven isn\'t heating properly or your stove burners won\'t light, we provide expert diagnoses and repairs throughout the Newmarket area.',
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

// Brand data for Newmarket
const newmarketBrands: BrandItem[] = [
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

// Newmarket page using the template
export default function NewmarketAreaPage() {
  return (
    <ServiceAreaPageTemplate
      areaData={newmarketData}
      services={newmarketServices}
      brands={newmarketBrands}
    />
  );
}