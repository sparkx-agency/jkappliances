import React from 'react';
import ServiceAreaPageTemplate from '@/components/templates/ServiceAreaPageTemplate';
import type { ServiceAreaData } from '@/types/serviceArea';
import type { ServiceItem } from '@/components/sections/common/ServicesTabSection';
import type { BrandItem } from '@/components/sections/brands/BrandsSliderSection';
import ServicesTabSection from '@/components/sections/common/ServicesTabSection';
import { createStandardServices } from '@/data/servicesData';

// Oshawa area data
const oshawaData: ServiceAreaData = {
  id: 'oshawa',
  name: 'Oshawa',
  fullName: 'Oshawa, Ontario',
  description: 'Our expert technicians provide reliable appliance repair services throughout Oshawa, with quick response times and same-day appointments available for many common issues.',
  heroImage: '/images/areas/areas-hero.webp',
  neighborhoodImage: '/images/toronto-map.webp', // Should be replaced with Oshawa specific map
  mapImage: '/images/toronto.webp', // Should be replaced with Oshawa specific map
  
  // Location information
  address: {
    street: '80 King St E',
    city: 'Oshawa',
    province: 'ON',
    postalCode: 'L1H 1B6',
  },
  
  // Service radius and coverage details
  serviceRadius: '20',
  responseTime: 'Same-day service available throughout Oshawa and surrounding areas',
  
  // Neighborhoods served
  neighborhoods: [
    'Downtown Oshawa',
    'Central Oshawa',
    'Northglen',
    'Centennial',
    'Eastdale',
    'Donevan',
    'Vanier',
    'Farewell',
    'Whitby Shores',
    'Taunton',
    'Pinecrest',
    'Cedar Valley',
    'Windfields',
    'Kedron',
    'Samac',
    'Northwood',
    'McLaughlin',
    'O\'Neill',
    'Columbus',
    'Raglan'
  ],
  
  // Most common services in this area
  popularServices: [],
  
  // Recent projects in this area
  recentProjects: [],
  
  // Testimonials specific to this area
  testimonials: [],
  
  // Local information - can be tailored per service area
  localInfo: {
    applianceUsage: "Oshawa residents use a diverse range of appliances, from newer energy-efficient models in the growing northern developments to established appliances in the city's older neighborhoods. Many homes feature full-sized appliances suited to family living.",
    commonIssues: "In Oshawa, we commonly address issues related to hard water affecting washing machines and dishwashers. Older neighborhoods often require service for aging appliance models, while newer areas typically need support with smart appliance configurations and warranty service.",
    serviceNotes: "Our Oshawa technicians are familiar with both the established downtown area and newer northern developments, ensuring efficient service throughout the city. We understand the specific needs of Oshawa's diverse housing stock and community layout."
  }
};

// Services data for Oshawa
const oshawaServices: ServiceItem[] = [
  {
    id: 'refrigerator-repair',
    name: 'Refrigerator Repair',
    description: 'Our Oshawa refrigerator repair technicians can fix all brands and models of refrigerators. From cooling issues to ice maker problems, our experts can diagnose and repair your refrigerator quickly and efficiently. We service all Oshawa neighborhoods with same-day appointments available.',
    commonServices: [
      'Temperature regulation issues',
      'Ice maker repairs',
      'Water dispenser problems',
      'Strange noises or leaking',
      'Compressor and condenser repairs',
      'Door seal replacement',
      'Smart refrigerator troubleshooting'
    ],
    image: '/images/services/fridge-repair.png'
  },  
  {
    id: 'washer-repair',
    name: 'Washer Repair',
    description: 'Our washer repair services in Oshawa cover all major brands and models. Whether your washing machine is leaking, not spinning, or making unusual noises, our skilled technicians can identify the problem and provide efficient, long-lasting repairs right in your Oshawa home.',
    commonServices: [
      'Drum and agitator problems',
      'Drainage and pump issues',
      'Water inlet and leaking repairs',
      'Control board and timer repairs',
      'Door latch and lock issues',
      'Bearing and motor replacements',
      'Hard water damage remediation'
    ],
    image: '/images/services/washer-repair.png'
  },
  {
    id: 'dryer-repair',
    name: 'Dryer Repair',
    description: 'When your dryer stops working properly in Oshawa, our expert technicians are just a call away. We repair all types of dryers including gas and electric models. From heating issues to strange noises, our Oshawa team can solve your dryer problems quickly and effectively.',
    commonServices: [
      'Heating element replacements',
      'Drum and belt repairs',
      'Thermostat and sensor calibration',
      'Vent cleaning and maintenance',
      'Motor and bearing replacements',
      'Control panel and timer repairs',
      'Gas valve and igniter servicing'
    ],
    image: '/images/services/dryer-repair.png'
  },
  {
    id: 'dishwasher-repair',
    name: 'Dishwasher Repair',
    description: 'Our Oshawa dishwasher repair services cover all brands and models. We fix common issues like poor cleaning performance, leaking, and drainage problems. Our experienced technicians provide fast, reliable dishwasher repairs throughout Oshawa, often on the same day you call.',
    commonServices: [
      'Spray arm repairs and replacements',
      'Pump and motor servicing',
      'Water inlet valve repairs',
      'Drainage system unclogging',
      'Control board and panel repairs',
      'Door seal replacements',
      'Water hardness adjustments'
    ],
    image: '/images/services/dishwasher-repair.png'
  },
  {
    id: 'oven-repair',
    name: 'Oven & Stove Repair',
    description: 'For oven and stove repairs in Oshawa, our technicians are experienced with all types including gas, electric, and induction. Whether your oven isn\'t heating properly or your stove burners won\'t light, we provide expert diagnoses and repairs throughout the Oshawa area.',
    commonServices: [
      'Heating element replacements',
      'Temperature sensor calibration',
      'Burner and igniter repairs',
      'Control board troubleshooting',
      'Door hinge and seal replacements',
      'Gas line and connection safety checks',
      'Self-cleaning system repairs'
    ],
    image: '/images/services/walloven-repair.png'
  },
  {
    id: 'stove-repair',
    name: 'Stove Repair',
    description: 'Our Oshawa stove repair services cover all brands and models. We fix common issues like poor heating, strange noises, and control panel malfunctions. Our experienced technicians provide fast, reliable stove repairs throughout Oshawa, often on the same day you call.',
    commonServices: [
      'Heating element replacements',
      'Temperature sensor calibration',
      'Burner and igniter repairs',
      'Control board troubleshooting',
      'Door hinge and seal replacements',
      'Gas line and connection safety checks',
      'Self-cleaning system repairs'
    ],
    image: '/images/services/walloven-repair.png'
  }
];

// Brand data for Oshawa
const oshawaBrands: BrandItem[] = [
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

// Oshawa page using the template
export default function OshawaAreaPage() {
  return (
    <ServiceAreaPageTemplate
      areaData={oshawaData}
      services={oshawaServices}
      brands={oshawaBrands}
    />
  );
} 