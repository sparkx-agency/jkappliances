
import React from 'react';
import ServiceAreaPageTemplate from '@/components/templates/ServiceAreaPageTemplate';
import type { ServiceAreaData } from '@/types/serviceArea';
import type { ServiceItem } from '@/components/sections/common/ServicesTabSection';
import type { BrandItem } from '@/components/sections/brands/BrandsSliderSection';
import ServicesTabSection from '@/components/sections/common/ServicesTabSection';
import { createStandardServices } from '@/data/servicesData';


// Bowmanville area data
const bowmanvilleData: ServiceAreaData = {
  id: 'bowmanville',
  name: 'Bowmanville',
  fullName: 'Bowmanville, Ontario',
  description: 'From historic downtown to suburban neighborhoods, our appliance repair technicians provide prompt service throughout Bowmanville with same-day appointments available.',
  heroImage: '/images/areas/areas-hero.webp',
  neighborhoodImage: '/images/bowmanville-map.webp',
  mapImage: '/images/bowmanville.webp',
  
  // Location information
  address: {
    street: '18 Yonge St',
    city: 'Toronto',
    province: 'ON',
    postalCode: 'M5E 1Z8',
  },
  
  // Service radius and coverage details
  serviceRadius: '20',
  responseTime: 'Same-day service available in most Bowmanville neighborhoods',
  
  // Neighborhoods served
  neighborhoods: [
    'Downtown Bowmanville',
    'Port Darlington',
    'Bowmanville East',
    'Bowmanville West',
    'Bowmanville North',
    'Darlington',
    'Hampton',
    'Maple Grove',
    'Wilmot Creek',
    'Haydon',
    'Enniskillen',
    'Tyrone',
    'Concession Street',
    'King Street East',
    'King Street West',
    'Bowmanville Ave',
    'Liberty Street',
    'Waverly Road',
    'Longworth Ave',
    'Mearns Ave'
  ],
  
  // Most common services in this area
  popularServices: [],
  
  // Recent projects in this area
  recentProjects: [],
  
  // Testimonials specific to this area
  testimonials: [],
  
  // Local information - tailored for Bowmanville
  localInfo: {
    applianceUsage: "Bowmanville residents live in a mix of historic homes, established neighborhoods, and newer developments. This diversity means our technicians encounter everything from brand new smart appliances to classic models that require specialized knowledge.",
    commonIssues: "In Bowmanville, we frequently address issues with refrigeration systems and laundry appliances. The town's mix of older homes and new developments means we encounter both vintage appliances requiring special care and the latest models with advanced technology.",
    serviceNotes: "Our Bowmanville technicians are familiar with all neighborhoods from the historic downtown to the newer northern developments. We maintain a specialized inventory for both modern and older appliance models to ensure fast, efficient service anywhere in Bowmanville."
  }
};

// Sample services data for Bowmanville
const bowmanvilleServices: ServiceItem[] = [
  {
    id: 'refrigerator-repair',
    name: 'Refrigerator Repair',
        description: 'Our Bowmanville refrigerator repair technicians can fix all brands and models of refrigerators. From cooling issues to ice maker problems, our experts can diagnose and repair your refrigerator quickly and efficiently. We service all Bowmanville neighborhoods with same-day appointments available.',
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
        description: 'Our washer repair services in Bowmanville cover all major brands and models. Whether your washing machine is leaking, not spinning, or making unusual noises, our skilled technicians can identify the problem and provide efficient, long-lasting repairs right in your Bowmanville home.',
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
        description: 'When your dryer stops working properly in Bowmanville, our expert technicians are just a call away. We repair all types of dryers including gas and electric models. From heating issues to strange noises, our Bowmanville team can solve your dryer problems quickly and effectively.',
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
        description: 'Our Bowmanville dishwasher repair services cover all brands and models. We fix common issues like poor cleaning performance, leaking, and drainage problems. Our experienced technicians provide fast, reliable dishwasher repairs throughout Bowmanville, often on the same day you call.',
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
        description: 'For oven and stove repairs in Bowmanville, our technicians are experienced with all types including gas, electric, and induction. Whether your oven isn\'t heating properly or your stove burners won\'t light, we provide expert diagnoses and repairs throughout the Bowmanville area.',
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

// Brand data for Bowmanville
const bowmanvilleBrands: BrandItem[] = [
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

// Bowmanville page using the template
export default function BowmanvilleAreaPage() {
  return (
    <ServiceAreaPageTemplate
      areaData={bowmanvilleData}
      services={bowmanvilleServices}
      brands={bowmanvilleBrands}
    />
  );
}
