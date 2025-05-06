import React from 'react';
import ServiceAreaPageTemplate from '@/components/templates/ServiceAreaPageTemplate';
import type { ServiceAreaData } from '@/types/serviceArea';
import type { ServiceItem } from '@/components/sections/common/ServicesTabSection';
import type { BrandItem } from '@/components/sections/brands/BrandsSliderSection';
import ServicesTabSection from '@/components/sections/common/ServicesTabSection';
import { createStandardServices } from '@/data/servicesData';

// Milton area data
const miltonData: ServiceAreaData = {
  id: 'milton',
  name: 'Milton',
  fullName: 'Milton, Ontario',
  description: 'Our skilled technicians provide fast, reliable appliance repair services throughout Milton, with same-day appointments available for your convenience.',
  heroImage: '/images/areas/areas-hero.webp',
  neighborhoodImage: '/images/toronto-map.webp', // Should be replaced with Milton specific map
  mapImage: '/images/toronto.webp', // Should be replaced with Milton specific map
  
  // Location information
  address: {
    street: '55 Ontario St S',
    city: 'Milton',
    province: 'ON',
    postalCode: 'L9T 2M3',
  },
  
  // Service radius and coverage details
  serviceRadius: '20',
  responseTime: 'Same-day service available in most Milton neighborhoods',
  
  // Neighborhoods served
  neighborhoods: [
    'Old Milton',
    'Beaty',
    'Bronte Meadows',
    'Clarke',
    'Coates',
    'Dempsey',
    'Dorset Park',
    'Derry Green Business Park',
    'Bowes',
    'Timberlea',
    'Willmott',
    'Scott',
    'Harrison',
    'Mountainview',
    'Britannia',
    'Milton Heights',
    'Campbellville',
    'Brookville',
    'Haltonville',
    'Moffat'
  ],
  
  // Most common services in this area
  popularServices: [],
  
  // Recent projects in this area
  recentProjects: [],
  
  // Testimonials specific to this area
  testimonials: [],
  
  // Local information - can be tailored per service area
  localInfo: {
    applianceUsage: "Milton homes feature a mix of newer energy-efficient appliances in the growing subdivisions and established models in the older neighborhoods. Many families in this rapidly growing community rely heavily on full-sized, high-capacity appliances to meet their daily needs.",
    commonIssues: "In Milton, we frequently service washing machines and dishwashers affected by the area's hard water. Newer developments may experience installation-related issues, while homes in established neighborhoods often need service for aging appliances.",
    serviceNotes: "Our Milton technicians are familiar with both the historic downtown area and newer subdivisions, ensuring efficient service across all neighborhoods. We understand the unique needs of Milton's diverse housing stock, from century homes to modern developments."
  }
};

// Services data for Milton
const miltonServices: ServiceItem[] = [
  {
    id: 'refrigerator-repair',
    name: 'Refrigerator Repair',
    description: 'Our Milton refrigerator repair technicians can fix all brands and models of refrigerators. From cooling issues to ice maker problems, our experts can diagnose and repair your refrigerator quickly and efficiently. We service all Milton neighborhoods with same-day appointments available.',
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
    description: 'Our washer repair services in Milton cover all major brands and models. Whether your washing machine is leaking, not spinning, or making unusual noises, our skilled technicians can identify the problem and provide efficient, long-lasting repairs right in your Milton home.',
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
    description: 'When your dryer stops working properly in Milton, our expert technicians are just a call away. We repair all types of dryers including gas and electric models. From heating issues to strange noises, our Milton team can solve your dryer problems quickly and effectively.',
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
    description: 'Our Milton dishwasher repair services cover all brands and models. We fix common issues like poor cleaning performance, leaking, and drainage problems. Our experienced technicians provide fast, reliable dishwasher repairs throughout Milton, often on the same day you call.',
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
    description: 'For oven and stove repairs in Milton, our technicians are experienced with all types including gas, electric, and induction. Whether your oven isn\'t heating properly or your stove burners won\'t light, we provide expert diagnoses and repairs throughout the Milton area.',
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

// Brand data for Milton
const miltonBrands: BrandItem[] = [
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

// Milton page using the template
export default function MiltonAreaPage() {
  return (
    <ServiceAreaPageTemplate
      areaData={miltonData}
      services={miltonServices}
      brands={miltonBrands}
    />
  );
} 