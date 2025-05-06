import React from 'react';
import ServiceAreaPageTemplate from '@/components/templates/ServiceAreaPageTemplate';
import type { ServiceAreaData } from '@/types/serviceArea';
import type { ServiceItem } from '@/components/sections/common/ServicesTabSection';
import type { BrandItem } from '@/components/sections/brands/BrandsSliderSection';
import ServicesTabSection from '@/components/sections/common/ServicesTabSection';
import { createStandardServices } from '@/data/servicesData';

// Pickering area data
const pickeringData: ServiceAreaData = {
  id: 'pickering',
  name: 'Pickering',
  fullName: 'Pickering, Ontario',
  description: 'Our experienced technicians provide prompt, reliable appliance repair services throughout Pickering, with same-day appointments available for many common issues.',
  heroImage: '/images/areas/areas-hero.webp',
  neighborhoodImage: '/images/toronto-map.webp', // Should be replaced with Pickering specific map
  mapImage: '/images/toronto.webp', // Should be replaced with Pickering specific map
  
  // Location information
  address: {
    street: '1355 Kingston Rd',
    city: 'Pickering',
    province: 'ON',
    postalCode: 'L1V 1B8',
  },
  
  // Service radius and coverage details
  serviceRadius: '15',
  responseTime: 'Same-day service available throughout Pickering and surrounding areas',
  
  // Neighborhoods served
  neighborhoods: [
    'Rosebank',
    'West Shore',
    'Dunbarton',
    'Brock Ridge',
    'Bay Ridges',
    'Amberlea',
    'Liverpool',
    'Duffin Heights',
    'Highbush',
    'Rouge Park',
    'Woodlands',
    'Village East',
    'Brock Industrial',
    'Pickering Town Centre',
    'Pickering Village',
    'Rougemount',
    'Whites',
    'Fairport Beach',
    'Maple Ridge',
    'Altona'
  ],
  
  // Most common services in this area
  popularServices: [],
  
  // Recent projects in this area
  recentProjects: [],
  
  // Testimonials specific to this area
  testimonials: [],
  
  // Local information - can be tailored per service area
  localInfo: {
    applianceUsage: "Pickering homes feature a diverse range of appliances, from newer energy-efficient models in recently developed neighborhoods to established brands in the city's older communities. Many lakefront properties have specialty appliances designed for their unique needs.",
    commonIssues: "In Pickering, we frequently address issues related to water quality affecting dishwashers and washing machines. Lakefront properties may experience specific challenges related to humidity and seasonal usage patterns, while newer developments often need support with smart appliance connectivity.",
    serviceNotes: "Our Pickering technicians are familiar with the unique layout of both established neighborhoods and newer developments. We understand access considerations for lakefront properties and are knowledgeable about the specific appliance needs throughout all Pickering communities."
  }
};

// Services data for Pickering
const pickeringServices: ServiceItem[] = [
  {
    id: 'refrigerator-repair',
    name: 'Refrigerator Repair',
    description: 'Our Pickering refrigerator repair specialists can diagnose and fix all brands and models of refrigerators. From cooling issues to ice maker problems, our experts provide fast, efficient repairs throughout all Pickering neighborhoods with same-day service often available.',
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
    description: 'Our washer repair services in Pickering address all common washing machine problems. Whether your machine is leaking, not spinning, or making unusual noises, our experienced technicians provide efficient, effective repairs for all Pickering residents.',
    commonServices: [
      'Drum and agitator problems',
      'Drainage and pump issues',
      'Water inlet and leaking repairs',
      'Control board and timer repairs',
      'Door latch and lock issues',
      'Bearing and motor replacements',
      'Water level sensor calibration'
    ],
    image: '/images/services/washer-repair.png'
  },
  {
    id: 'dryer-repair',
    name: 'Dryer Repair',
    description: 'When your dryer isn\'t working properly in Pickering, our expert technicians can help. We service both electric and gas dryers of all brands, addressing heating problems, unusual noises, and other issues with same-day service throughout Pickering.',
    commonServices: [
      'Heating element replacements',
      'Drum and belt repairs',
      'Thermostat and sensor calibration',
      'Vent cleaning and maintenance',
      'Motor and bearing replacements',
      'Control panel and timer repairs',
      'Gas  valve and igniter servicing'
    ],
    image: '/images/services/dryer-repair.png'
  },
  {
    id: 'dishwasher-repair',
    name: 'Dishwasher Repair',
    description: 'Our Pickering dishwasher repair technicians fix common issues like poor cleaning performance, leaking, and drainage problems. We service all brands and models, providing prompt, reliable repairs throughout Pickering, often on the same day you call.',
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
    description: 'For oven and stove repairs in Pickering, our technicians are experienced with all types including gas, electric, and induction models. From temperature issues to burner problems, we provide expert diagnoses and repairs throughout all Pickering neighborhoods.',
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

// Brand data for Pickering
const pickeringBrands: BrandItem[] = [
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

// Pickering page using the template
export default function PickeringAreaPage() {
  return (
    <ServiceAreaPageTemplate
      areaData={pickeringData}
      services={pickeringServices}
      brands={pickeringBrands}
    />
  );
} 