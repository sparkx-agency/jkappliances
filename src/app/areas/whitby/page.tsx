import React from 'react';
import ServiceAreaPageTemplate from '@/components/templates/ServiceAreaPageTemplate';
import type { ServiceAreaData } from '@/types/serviceArea';
import type { ServiceItem } from '@/components/sections/common/ServicesTabSection';
import type { BrandItem } from '@/components/sections/brands/BrandsSliderSection';
import ServicesTabSection from '@/components/sections/common/ServicesTabSection';
import { createStandardServices } from '@/data/servicesData';

// Whitby area data
const whitbyData: ServiceAreaData = {
  id: 'whitby',
  name: 'Whitby',
  fullName: 'Whitby, Ontario',
  description: 'Our skilled technicians provide fast, reliable appliance repair throughout Whitby, with same-day service available for many common issues.',
  heroImage: '/images/areas/areas-hero.webp',
  neighborhoodImage: '/images/toronto-map.webp', // Should be replaced with Whitby specific map
  mapImage: '/images/toronto.webp', // Should be replaced with Whitby specific map
  
  // Location information
  address: {
    street: '1615 Dundas St E',
    city: 'Whitby',
    province: 'ON',
    postalCode: 'L1N 2L1',
  },
  
  // Service radius and coverage details
  serviceRadius: '20',
  responseTime: 'Same-day service available throughout Whitby and surrounding communities',
  
  // Neighborhoods served
  neighborhoods: [
    'Brooklin',
    'Port Whitby',
    'Downtown Whitby',
    'Blue Grass Meadows',
    'Williamsburg',
    'Rolling Acres',
    'Pringle Creek',
    'Lynde Creek',
    'Taunton North',
    'West Lynde',
    'Whitby Shores',
    'Kendalwood Park',
    'Cachet',
    'Fallingbrook',
    'Manning Ridge',
    'Dundas Valley',
    'Ashburn',
    'Myrtle Station',
    'Macedonian Village',
    'Country Lane'
  ],
  
  // Most common services in this area
  popularServices: [],
  
  // Recent projects in this area
  recentProjects: [],
  
  // Testimonials specific to this area
  testimonials: [],
  
  // Local information - can be tailored per service area
  localInfo: {
    applianceUsage: "Whitby features a mix of established neighborhoods and newer developments, with appliance needs varying accordingly. Many homes in growing areas like Brooklin feature modern, energy-efficient appliances, while established neighborhoods often maintain a combination of newer and classic models.",
    commonIssues: "In Whitby, we frequently address issues related to water quality affecting dishwashers and washing machines. Newer developments may experience installation-related problems, while homes in more established areas often need service for aging appliance components.",
    serviceNotes: "Our Whitby technicians are familiar with the town's varied landscape, from lakefront properties to rural areas and suburban developments. We understand the specific service requirements for Whitby's diverse neighborhoods and housing types."
  }
};

// Services data for Whitby
const whitbyServices: ServiceItem[] = [
  {
    id: 'refrigerator-repair',
    name: 'Refrigerator Repair',
    description: 'Our Whitby refrigerator repair experts can diagnose and fix all brands and models of refrigerators. From cooling problems to ice maker issues, our technicians provide prompt, reliable service throughout Whitby with same-day appointments often available.',
    commonServices: [
      'Temperature regulation issues',
      'Ice maker repairs',
      'Water dispenser problems',
      'Strange noises or leaking',
      'Compressor and condenser repairs',
      'Door seal replacement',
      'Smart refrigerator troubleshooting'
    ]
  },
  {
    id: 'washer-repair',
    name: 'Washer Repair',
    description: 'Our washer repair services in Whitby cover all major brands and models. Whether your machine is leaking, not spinning, or making unusual noises, our skilled technicians can identify and resolve the problem efficiently, right in your Whitby home.',
    commonServices: [
      'Drum and agitator problems',
      'Drainage and pump issues',
      'Water inlet and leaking repairs',
      'Control board and timer repairs',
      'Door latch and lock issues',
      'Bearing and motor replacements',
      'Hard water damage remediation'
    ]
  },
  {
    id: 'dryer-repair',
    name: 'Dryer Repair',
    description: 'When your dryer isn\'t working properly in Whitby, our expert technicians are ready to help. We service all types of dryers including gas and electric models, addressing heating problems, noise issues, and sensor malfunctions with reliable, effective repairs.',
    commonServices: [
      'Heating element replacements',
      'Drum and belt repairs',
      'Thermostat and sensor calibration',
      'Vent cleaning and maintenance',
      'Motor and bearing replacements',
      'Control panel and timer repairs',
      'Gas valve and igniter servicing'
    ]
  },
  {
    id: 'dishwasher-repair',
    name: 'Dishwasher Repair',
    description: 'Our Whitby dishwasher repair specialists address all common issues like poor cleaning performance, leaking, and unusual noises. We service all brands and models, providing prompt, reliable repairs throughout Whitby, often on the same day you call.',
    commonServices: [
      'Spray arm repairs and replacements',
      'Pump and motor servicing',
      'Water inlet valve repairs',
      'Drainage system unclogging',
      'Control board and panel repairs',
      'Door seal replacements',
      'Water hardness adjustments'
    ]
  },
  {
    id: 'oven-repair',
    name: 'Oven & Stove Repair',
    description: 'For oven and stove repairs in Whitby, our technicians are experienced with all types including gas, electric, and induction models. We provide expert diagnostics and repairs throughout the Whitby area, addressing temperature issues, burner problems, and control malfunctions.',
    commonServices: [
      'Heating element replacements',
      'Temperature sensor calibration',
      'Burner and igniter repairs',
      'Control board troubleshooting',
      'Door hinge and seal replacements',
      'Gas line and connection safety checks',
      'Self-cleaning system repairs'
    ]
  }
];

// Brand data for Whitby
const whitbyBrands: BrandItem[] = [
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

// Whitby page using the template
export default function WhitbyAreaPage() {
  return (
    <ServiceAreaPageTemplate
      areaData={whitbyData}
      services={whitbyServices}
      brands={whitbyBrands}
    />
  );
} 