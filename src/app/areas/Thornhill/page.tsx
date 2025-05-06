import React from 'react';
import ServiceAreaPageTemplate from '@/components/templates/ServiceAreaPageTemplate';
import type { ServiceAreaData } from '@/types/serviceArea';
import type { ServiceItem } from '@/components/sections/common/ServicesTabSection';
import type { BrandItem } from '@/components/sections/brands/BrandsSliderSection';
import ServicesTabSection from '@/components/sections/common/ServicesTabSection';
import { createStandardServices } from '@/data/servicesData';

// Thornhill area data
const thornhillData: ServiceAreaData = {
  id: 'thornhill',
  name: 'Thornhill',
  fullName: 'Thornhill, Ontario',
  description: 'Our expert technicians provide prompt, reliable appliance repair services throughout Thornhill, with same-day appointments often available for your convenience.',
  heroImage: '/images/areas/areas-hero.webp',
  neighborhoodImage: '/images/toronto-map.webp', // Should be replaced with Thornhill specific map
  mapImage: '/images/toronto.webp', // Should be replaced with Thornhill specific map
  
  // Location information
  address: {
    street: '7700 Bathurst St',
    city: 'Thornhill',
    province: 'ON',
    postalCode: 'L4J 7Y3',
  },
  
  // Service radius and coverage details
  serviceRadius: '15',
  responseTime: 'Same-day service available throughout Thornhill and neighboring communities',
  
  // Neighborhoods served
  neighborhoods: [
    'Thornhill Woods',
    'Bayview Glen',
    'Royal Orchard',
    'Uplands',
    'Grandview',
    'Thornhill Village',
    'Thornhill Estates',
    'Spring Farm',
    'Beverley Glen',
    'Concord',
    'Brownridge',
    'Glen Shields',
    'Willowdale',
    'Rosedale North',
    'Richvale',
    'Langstaff',
    'German Mills',
    'Bayview Hill',
    'Oak Ridges',
    'Fisherville'
  ],
  
  // Most common services in this area
  popularServices: [],
  
  // Recent projects in this area
  recentProjects: [],
  
  // Testimonials specific to this area
  testimonials: [],
  
  // Local information - can be tailored per service area
  localInfo: {
    applianceUsage: "Thornhill homes feature a mix of premium, high-end appliances in the established neighborhoods and energy-efficient models in newer developments. Many residents opt for built-in and integrated appliances that complement their home's design.",
    commonIssues: "In Thornhill, we frequently service high-end refrigerators and wine coolers, as well as built-in cooking appliances. Water quality in certain neighborhoods can affect dishwashers and washing machines, while power fluctuations occasionally impact sensitive electronic components.",
    serviceNotes: "Our Thornhill technicians specialize in working with luxury appliance brands and complex integrated systems. We understand the specific needs of Thornhill's diverse communities and provide service that matches the area's premium standards."
  }
};

// Services data for Thornhill
const thornhillServices: ServiceItem[] = [
  {
    id: 'refrigerator-repair',
    name: 'Refrigerator Repair',
    description: 'Our Thornhill refrigerator repair technicians specialize in all brands and models, including high-end built-in and integrated refrigeration systems. From cooling issues to ice maker problems, our experts provide prompt, reliable service throughout Thornhill.',
    commonServices: [
      'Temperature regulation issues',
      'Ice maker repairs',
      'Water dispenser problems',
      'Strange noises or leaking',
      'Compressor and condenser repairs',
      'Door seal replacement',
      'Smart refrigerator troubleshooting',
      'Wine cooler and beverage center repairs'
    ],
    image: '/images/services/fridge-repair.png'
  },
  {
    id: 'washer-repair',
    name: 'Washer Repair',
    description: 'Our washer repair services in Thornhill cover all major brands and models. Whether you have a front-loading, top-loading, or combination washer-dryer unit, our skilled technicians can address leaking, noise issues, and performance problems with efficient repairs.',
    commonServices: [
      'Drum and agitator problems',
      'Drainage and pump issues',
      'Water inlet and leaking repairs',
      'Control board and timer repairs',
      'Door latch and lock issues',
      'Bearing and motor replacements',
      'Smart washer connectivity problems'
    ],
    image: '/images/services/washer-repair.png'
  },
  {
    id: 'dryer-repair',
    name: 'Dryer Repair',
    description: 'When your dryer stops working properly in Thornhill, our expert technicians are ready to help. We repair electric, gas, and heat pump models from all major brands, addressing heating issues, noise problems, and sensor malfunctions with prompt, effective service.',
    commonServices: [
      'Heating element replacements',
      'Drum and belt repairs',
      'Thermostat and sensor calibration',
      'Vent cleaning and maintenance',
      'Motor and bearing replacements',
      'Control panel and timer repairs',
      'Gas valve and igniter servicing',
      'Heat pump system diagnostics'
    ],
    image: '/images/services/dryer-repair.png'
  },
  {
    id: 'dishwasher-repair',
    name: 'Dishwasher Repair',
    description: 'Our Thornhill dishwasher repair technicians service all models from standard to high-end integrated units. We address cleaning performance issues, leaks, drainage problems, and unusual noises with efficient, reliable repairs throughout the Thornhill area.',
    commonServices: [
      'Spray arm repairs and replacements',
      'Pump and motor servicing',
      'Water inlet valve repairs',
      'Drainage system unclogging',
      'Control board and panel repairs',
      'Door seal replacements',
      'Water hardness adjustments',
      'Panel-ready and integrated model expertise'
    ],
    image: '/images/services/dishwasher-repair.png'
  },
  {
    id: 'oven-repair',
    name: 'Oven & Stove Repair',
    description: 'For oven and stove repairs in Thornhill, our technicians specialize in all cooking appliances including wall ovens, ranges, cooktops, and warming drawers. We service gas, electric, and induction models, providing expert diagnostics and repairs for Thornhill residents.',
    commonServices: [
      'Heating element replacements',
      'Temperature sensor calibration',
      'Burner and igniter repairs',
      'Control board troubleshooting',
      'Door hinge and seal replacements',
      'Gas line and connection safety checks',
      'Self-cleaning system repairs',
      'Convection fan and element service'
    ],
    image: '/images/services/walloven-repair.png'
  }
];

// Brand data for Thornhill
const thornhillBrands: BrandItem[] = [
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
    id: 'subzero',
    name: 'Sub-Zero',
    logo: '/images/brands/miele.webp', // Should be replaced with Sub-Zero logo
    link: '/brands/subzero'
  },
  {
    id: 'wolf',
    name: 'Wolf',
    logo: '/images/brands/bosch.webp', // Should be replaced with Wolf logo
    link: '/brands/wolf'
  },
  {
    id: 'miele',
    name: 'Miele',
    logo: '/images/brands/miele.webp',
    link: '/brands/miele'
  },
  {
    id: 'thermador',
    name: 'Thermador',
    logo: '/images/brands/frigidaire.webp', // Should be replaced with Thermador logo
    link: '/brands/thermador'
  }
];

// Thornhill page using the template
export default function ThornhillAreaPage() {
  return (
    <ServiceAreaPageTemplate
      areaData={thornhillData}
      services={thornhillServices}
      brands={thornhillBrands}
    />
  );
} 