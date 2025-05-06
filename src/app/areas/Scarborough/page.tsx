import React from 'react';
import ServiceAreaPageTemplate from '@/components/templates/ServiceAreaPageTemplate';
import type { ServiceAreaData } from '@/types/serviceArea';
import type { ServiceItem } from '@/components/sections/common/ServicesTabSection';
import type { BrandItem } from '@/components/sections/brands/BrandsSliderSection';
import ServicesTabSection from '@/components/sections/common/ServicesTabSection';
import { createStandardServices } from '@/data/servicesData';

// Scarborough area data
const scarboroughData: ServiceAreaData = {
  id: 'scarborough',
  name: 'Scarborough',
  fullName: 'Scarborough, Toronto, Ontario',
  description: 'Our skilled technicians provide prompt, reliable appliance repair throughout Scarborough communities, with same-day service available for many common issues.',
  heroImage: '/images/areas/areas-hero.webp',
  neighborhoodImage: '/images/toronto-map.webp', // Should be replaced with Scarborough specific map
  mapImage: '/images/toronto.webp', // Should be replaced with Scarborough specific map
  
  // Location information
  address: {
    street: '1900 Eglinton Ave E',
    city: 'Toronto',
    province: 'ON',
    postalCode: 'M1L 2L9',
  },
  
  // Service radius and coverage details
  serviceRadius: '15',
  responseTime: 'Same-day service available throughout Scarborough and surrounding areas',
  
  // Neighborhoods served
  neighborhoods: [
    'Agincourt',
    'Bendale',
    'Birch Cliff',
    'Clairlea',
    'Cliffside',
    'Dorset Park',
    'Eglinton East',
    'Highland Creek',
    'L\'Amoreaux',
    'Malvern',
    'Milliken',
    'Morningside',
    'Oakridge',
    'Port Union',
    'Rouge',
    'Scarborough Junction',
    'Scarborough Village',
    'Tam O\'Shanter',
    'West Hill',
    'Woburn'
  ],
  
  // Most common services in this area
  popularServices: [],
    
  
  // Recent projects in this area
  recentProjects: [],
    
  
  // Testimonials specific to this area
  testimonials: [],
  
  // Local information - can be tailored per service area
  localInfo: {
    applianceUsage: "Scarborough features a diverse mix of housing, from high-rise apartments to single-family homes, leading to a wide variety of appliance needs. Many households maintain a balance of newer energy-efficient models and reliable older appliances across this large community.",
    commonIssues: "In Scarborough, we frequently address issues related to hard water affecting washing machines and dishwashers. Older neighborhoods often require service for aging appliance models, while newer developments typically need support with modern features and connectivity.",
    serviceNotes: "Our Scarborough technicians are familiar with the unique layout of this expansive community, from the apartment complexes in Malvern to the lakefront properties in Guildwood. We understand the specific service requirements for Scarborough's diverse residential areas."
  }
};

// Services data for Scarborough
const scarboroughServices: ServiceItem[] = [
  {
    id: 'refrigerator-repair',
    name: 'Refrigerator Repair',
    description: 'Our Scarborough refrigerator repair specialists can diagnose and fix all brands and models of refrigerators. From cooling issues to ice maker problems, our experts provide efficient repairs throughout Scarborough with same-day service often available.',
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
    description: 'Our washer repair services in Scarborough address all common washing machine problems. Whether your machine is leaking, not spinning, or making unusual noises, our skilled technicians can identify the problem and provide effective repairs right in your Scarborough home.',
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
    description: 'When your dryer isn\'t working properly in Scarborough, our expert technicians can help. We service both electric and gas dryers of all brands, addressing heating problems, unusual noises, and other issues with same-day service throughout the Scarborough area.',
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
    description: 'Our Scarborough dishwasher repair specialists fix common issues like poor cleaning performance, leaking, and drainage problems. We service all brands and models, providing prompt, reliable repairs throughout Scarborough, often on the same day you call.',
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
    description: 'For oven and stove repairs in Scarborough, our technicians are experienced with all types including gas, electric, and induction models. From temperature issues to burner problems, we provide expert diagnoses and repairs throughout all Scarborough neighborhoods.',
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

// Brand data for Scarborough
const scarboroughBrands: BrandItem[] = [
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

// Scarborough page using the template
export default function ScarboroughAreaPage() {
  return (
    <ServiceAreaPageTemplate
      areaData={scarboroughData}
      services={scarboroughServices}
      brands={scarboroughBrands}
    />
  );
} 