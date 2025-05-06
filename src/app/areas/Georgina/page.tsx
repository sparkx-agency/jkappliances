import React from 'react';
import ServiceAreaPageTemplate from '@/components/templates/ServiceAreaPageTemplate';
import type { ServiceAreaData } from '@/types/serviceArea';
import type { ServiceItem } from '@/components/sections/common/ServicesTabSection';
import type { BrandItem } from '@/components/sections/brands/BrandsSliderSection';
import ServicesTabSection from '@/components/sections/common/ServicesTabSection';
import { createStandardServices } from '@/data/servicesData';

// Georgina area data
const georginaData: ServiceAreaData = {
  id: 'georgina',
  name: 'Georgina',
  fullName: 'Georgina, Ontario',
  description: 'Our skilled technicians provide prompt and reliable appliance repair services throughout Georgina, from Keswick to Sutton and surrounding lake communities.',
  heroImage: '/images/areas/areas-hero.webp',
  neighborhoodImage: '/images/toronto-map.webp', // Should be replaced with Georgina specific map
  mapImage: '/images/toronto.webp', // Should be replaced with Georgina specific map
  
  // Location information
  address: {
    street: '76 The Queensway S',
    city: 'Keswick',
    province: 'ON',
    postalCode: 'L4P 2E3',
  },
  
  // Service radius and coverage details
  serviceRadius: '25',
  responseTime: 'Same-day or next-day service available throughout Georgina and Lake Simcoe communities',
  
  // Neighborhoods served
  neighborhoods: [
    'Keswick',
    'Sutton',
    'Jackson\'s Point',
    'Pefferlaw',
    'Udora',
    'Virginia',
    'Willow Beach',
    'Island Grove',
    'Roches Point',
    'Port Bolster',
    'Duclos Point',
    'Belhaven',
    'Baldwin',
    'Brownhill'
  ],
  
  // Most common services in this area
  popularServices: [],
  
  // Recent projects in this area
  recentProjects: [],
  
  // Testimonials specific to this area
  testimonials: [],
  
  // Local information - can be tailored per service area
  localInfo: {
    applianceUsage: "Georgina residents and cottage owners utilize a mix of standard home appliances and specialty units designed for seasonal properties. Lake homes often feature unique configurations including energy-efficient models and appliances designed to withstand seasonal use patterns.",
    commonIssues: "In Georgina, we frequently address issues related to water quality affecting dishwashers and washing machines. Seasonal properties may experience problems from extended periods without use, and winter weather can impact outdoor appliance components.",
    serviceNotes: "Our Georgina technicians are familiar with the unique needs of both year-round residences and seasonal lake properties. We understand the access considerations for waterfront homes and rural locations throughout the area."
  }
};

// Services data for Georgina
const georginaServices: ServiceItem[] = [
  {
    id: 'refrigerator-repair',
    name: 'Refrigerator Repair',
    description: 'Our Georgina refrigerator repair service covers all brands and models found in permanent and seasonal homes. From cooling issues to ice maker problems, our technicians provide fast, reliable repairs throughout Keswick, Sutton, and all Georgina communities.',
    commonServices: [
      'Temperature regulation issues',
      'Ice maker repairs',
      'Water dispenser problems',
      'Strange noises or leaking',
      'Compressor and condenser repairs',
      'Door seal replacement',
      'Seasonal startup service'
    ]

  },
  {
    id: 'washer-repair',
    name: 'Washer Repair',
    description: 'Our washer repair services in Georgina address all common washing machine problems. Whether your machine is leaking, not spinning, or won\'t drain properly, our experienced technicians provide efficient, effective repairs for all Georgina residents.',
    commonServices: [
      'Drum and agitator problems',
      'Drainage and pump issues',
      'Water inlet and leaking repairs',
      'Control board and timer repairs',
      'Door latch and lock issues',
      'Bearing and motor replacements',
      'Water level sensor calibration'
    ]
  },
  {
    id: 'dryer-repair',
    name: 'Dryer Repair',
    description: 'When your dryer isn\'t working properly in Georgina, our expert technicians can help. We service both electric and gas dryers of all brands, addressing heating problems, unusual noises, and other issues with same-day or next-day service throughout the area.',
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
    description: 'Our Georgina dishwasher repair service addresses cleaning performance issues, drainage problems, leaks, and unusual noises. Our technicians are experienced with models from all major brands and provide prompt, reliable repairs throughout Georgina.',
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
    description: 'Our oven and stove repair services in Georgina cover all cooking appliances including electric and gas models, wall ovens, ranges, and cooktops. From temperature issues to burner problems, our technicians provide expert repairs for all Georgina residents.',
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

// Brand data for Georgina
const georginaBrands: BrandItem[] = [
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

// Georgina page using the template
export default function GeorginaAreaPage() {
  return (
    <ServiceAreaPageTemplate
      areaData={georginaData}
      services={georginaServices}
      brands={georginaBrands}
    />
  );
} 