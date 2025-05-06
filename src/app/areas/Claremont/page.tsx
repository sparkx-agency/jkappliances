import React from 'react';
import ServiceAreaPageTemplate from '@/components/templates/ServiceAreaPageTemplate';
import type { ServiceAreaData } from '@/types/serviceArea';
import type { ServiceItem } from '@/components/sections/common/ServicesTabSection';
import type { BrandItem } from '@/components/sections/brands/BrandsSliderSection';
import ServicesTabSection from '@/components/sections/common/ServicesTabSection';
import { createStandardServices } from '@/data/servicesData';

// Claremont area data
const claremontData: ServiceAreaData = {
  id: 'claremont',
  name: 'Claremont',
  fullName: 'Claremont, Ontario',
  description: 'Our skilled technicians provide fast, reliable appliance repair services throughout Claremont, with same-day appointments often available for your convenience.',
  heroImage: '/images/areas/areas-hero.webp',
  neighborhoodImage: '/images/toronto-map.webp', // Should be replaced with Claremont specific map
  mapImage: '/images/toronto.webp', // Should be replaced with Claremont specific map
  
  // Location information
  address: {
    street: '4951 Old Brock Rd',
    city: 'Claremont',
    province: 'ON',
    postalCode: 'L1Y 1A9',
  },
  
  // Service radius and coverage details
  serviceRadius: '15',
  responseTime: 'Same-day service available throughout Claremont and surrounding areas',
  
  // Neighborhoods served
  neighborhoods: [
    'Claremont Village',
    'Brougham',
    'Greenwood',
    'Whitevale',
    'Kinsale',
    'Dagmar',
    'Altona',
    'Balsam',
    'Ashburn',
    'Myrtle',
    'Myrtle Station',
    'Audley'
  ],
  
  // Most common services in this area
  popularServices: [],
  
  // Recent projects in this area
  recentProjects: [],
  
  // Testimonials specific to this area
  testimonials: [],
  
  // Local information - can be tailored per service area
  localInfo: {
    applianceUsage: "Claremont residents typically maintain a mix of newer energy-efficient appliances and reliable older models. Many homes feature larger capacity appliances to accommodate family needs in this predominantly residential community.",
    commonIssues: "In Claremont, we often service issues related to water quality affecting dishwashers and washing machines. Rural properties may experience voltage fluctuations that can impact electronic appliance components.",
    serviceNotes: "Our Claremont technicians are familiar with the area's homes and common appliance configurations, ensuring efficient service across the community."
  }
};

// Services data for Claremont
const claremontServices: ServiceItem[] = [
  {
    id: 'refrigerator-repair',
    name: 'Refrigerator Repair',
    description: 'Our Claremont refrigerator repair technicians can fix all brands and models of refrigerators. From cooling issues to ice maker problems, our experts can diagnose and repair your refrigerator quickly and efficiently. We service all Claremont neighborhoods with same-day appointments available.',
    commonServices: [
      'Temperature regulation issues',
      'Ice maker repairs',
      'Water dispenser problems',
      'Strange noises or leaking',
      'Compressor and condenser repairs',
      'Door seal replacement'
    ],
    image: '/images/services/fridge-repair.png'
  },
  {
    id: 'washer-repair',
    name: 'Washer Repair',
    description: 'Our washer repair services in Claremont cover all major brands and models. Whether your washing machine is leaking, not spinning, or making unusual noises, our skilled technicians can identify the problem and provide efficient, long-lasting repairs right in your Claremont home.',
    commonServices: [
      'Drum and agitator problems',
      'Drainage and pump issues',
      'Water inlet and leaking repairs',
      'Control board and timer repairs',
      'Door latch and lock issues',
      'Bearing and motor replacements'
    ],
    image: '/images/services/washer-repair.png'
  },
  {
    id: 'dryer-repair',
    name: 'Dryer Repair',
    description: 'When your dryer stops working properly in Claremont, our expert technicians are just a call away. We repair all types of dryers including gas and electric models. From heating issues to strange noises, our Claremont team can solve your dryer problems quickly and effectively.',
    commonServices: [
      'Heating element replacements',
      'Drum and belt repairs',
      'Thermostat and sensor calibration',
      'Vent cleaning and maintenance',
      'Motor and bearing replacements',
      'Control panel and timer repairs'
    ],
    image: '/images/services/dryer-repair.png'
  },
  {
    id: 'dishwasher-repair',
    name: 'Dishwasher Repair',
    description: 'Our Claremont dishwasher repair services cover all brands and models. We fix common issues like poor cleaning performance, leaking, and drainage problems. Our experienced technicians provide fast, reliable dishwasher repairs throughout Claremont, often on the same day you call.',
    commonServices: [
      'Spray arm repairs and replacements',
      'Pump and motor servicing',
      'Water inlet valve repairs',
      'Drainage system unclogging',
      'Control board and panel repairs',
      'Door seal replacements'
    ],
    image: '/images/services/dishwasher-repair.png'
  },
  {
    id: 'oven-repair',
    name: 'Oven & Stove Repair',
    description: 'For oven and stove repairs in Claremont, our technicians are experienced with all types including gas, electric, and induction. Whether your oven isn\'t heating properly or your stove burners won\'t light, we provide expert diagnoses and repairs throughout the Claremont area.',
    commonServices: [
      'Heating element replacements',
      'Temperature sensor calibration',
      'Burner and igniter repairs',
      'Control board troubleshooting',
      'Door hinge and seal replacements',
      'Gas line and connection safety checks'
    ],
    image: '/images/services/walloven-repair.png'
  }
];

// Brand data for Claremont
const claremontBrands: BrandItem[] = [
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

// Claremont page using the template
export default function ClaremontAreaPage() {
  return (
    <ServiceAreaPageTemplate
      areaData={claremontData}
      services={claremontServices}
      brands={claremontBrands}
    />
  );
} 