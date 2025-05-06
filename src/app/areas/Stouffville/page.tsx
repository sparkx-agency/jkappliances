import React from 'react';
import ServiceAreaPageTemplate from '@/components/templates/ServiceAreaPageTemplate';
import type { ServiceAreaData } from '@/types/serviceArea';
import type { ServiceItem } from '@/components/sections/common/ServicesTabSection';
import type { BrandItem } from '@/components/sections/brands/BrandsSliderSection';
import ServicesTabSection from '@/components/sections/common/ServicesTabSection';
import { createStandardServices } from '@/data/servicesData';

// Stouffville area data
const stouffvilleData: ServiceAreaData = {
  id: 'stouffville',
  name: 'Stouffville',
  fullName: 'Whitchurch-Stouffville, Ontario',
  description: 'Our experienced technicians provide reliable appliance repair services throughout Stouffville and surrounding communities, with prompt response times and convenient scheduling options.',
  heroImage: '/images/areas/areas-hero.webp',
  neighborhoodImage: '/images/toronto-map.webp', // Should be replaced with Stouffville specific map
  mapImage: '/images/toronto.webp', // Should be replaced with Stouffville specific map
  
  // Location information
  address: {
    street: '6240 Main St',
    city: 'Whitchurch-Stouffville',
    province: 'ON',
    postalCode: 'L4A 1G8',
  },
  
  // Service radius and coverage details
  serviceRadius: '20',
  responseTime: 'Same-day or next-day service available throughout Stouffville',
  
  // Neighborhoods served
  neighborhoods: [
    'Downtown Stouffville',
    'Stouffville North',
    'Bethesda',
    'Bloomington',
    'Gormley',
    'Lemonville',
    'Musselman\'s Lake',
    'Ringwood',
    'Ballantrae',
    'Cedar Valley',
    'Churchill',
    'Vandorf',
    'Preston Lake',
    'Pleasantville',
    'Baker Hill',
    'Shadow Lake',
    'Parkview',
    'Fieldside',
    'Meadowlea',
    'White Rose'
  ],
  
  // Most common services in this area
  popularServices: [],
  
  // Recent projects in this area
  recentProjects: [],
  
  
  
  
  // Testimonials specific to this area
  testimonials: [],
  
  // Local information - can be tailored per service area
  localInfo: {
    applianceUsage: "Stouffville residents typically maintain a mix of newer energy-efficient appliances in the growing subdivisions and established models in the older neighborhoods. Lakeside properties and rural homes often have specialized appliance configurations to meet their unique needs.",
    commonIssues: "In Stouffville, we frequently address issues related to water quality affecting dishwashers and washing machines. Rural properties may experience voltage fluctuations that impact electronic components, while lakeside homes often require service for seasonal usage patterns.",
    serviceNotes: "Our Stouffville technicians are familiar with both the established downtown area and newer developments, ensuring efficient service throughout the community. We understand the access considerations for rural and lakeside properties in the surrounding areas."
  }
};

// Services data for Stouffville
const stouffvilleServices: ServiceItem[] = [
  {
    id: 'refrigerator-repair',
    name: 'Refrigerator Repair',
        description: 'Our Stouffville refrigerator repair technicians can fix all brands and models of refrigerators. From cooling issues to ice maker problems, our experts provide efficient diagnostic and repair services throughout the Stouffville area with prompt response times.',
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
        description: 'Our washer repair services in Stouffville address all common washing machine problems. Whether your unit is leaking, not spinning, or making unusual noises, our experienced technicians provide efficient, long-lasting repairs for all Stouffville residents.',
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
        description: 'When your dryer isn\'t working properly in Stouffville, our expert technicians can help. We service both electric and gas dryers of all brands, addressing heating issues, unusual noises, and other common problems with reliable, effective repairs.',
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
        description: 'Our Stouffville dishwasher repair services cover all brands and models. We address common issues like poor cleaning performance, leaking, and drainage problems with prompt, reliable repairs throughout the Stouffville community.',
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
        description: 'For oven and stove repairs in Stouffville, our technicians are experienced with all types including gas, electric, and induction models. Whether your oven isn\'t heating properly or your burners won\'t light, we provide expert service throughout the Stouffville area.',
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

// Brand data for Stouffville
const stouffvilleBrands: BrandItem[] = [
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

// Stouffville page using the template
export default function StouffvilleAreaPage() {
  return (
    <ServiceAreaPageTemplate
      areaData={stouffvilleData}
      services={stouffvilleServices}
      brands={stouffvilleBrands}
    />
  );
} 