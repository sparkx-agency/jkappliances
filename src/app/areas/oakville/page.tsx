"use client";

import React from 'react';
import ServiceAreaPageTemplate from '@/components/templates/ServiceAreaPageTemplate';
import type { ServiceAreaData } from '@/types/serviceArea';
import type { ServiceItem } from '@/components/sections/common/ServicesTabSection';
import type { BrandItem } from '@/components/sections/brands/BrandsSliderSection';
import ServicesTabSection from '@/components/sections/common/ServicesTabSection';
import { createStandardServices } from '@/data/servicesData';

// Oakville area data
const oakvilleData: ServiceAreaData = {
  id: 'oakville',
  name: 'Oakville',
  fullName: 'Oakville, Ontario',
  description: 'From lakefront estates in Old Oakville to family homes in Glen Abbey, our appliance repair technicians provide prompt service throughout Oakville with same-day appointments available.',
  heroImage: '/images/areas/areas-hero.webp',
  neighborhoodImage: '/images/oakville-map.webp',
  mapImage: '/images/oakville.webp',
  
  // Location information
  address: {
    street: '18 Yonge St',
    city: 'Toronto',
    province: 'ON',
    postalCode: 'M5E 1Z8',
  },
  
  // Service radius and coverage details
  serviceRadius: '25',
  responseTime: 'Same-day service available in all Oakville neighborhoods',
  
  // Neighborhoods served
  neighborhoods: [
    'Old Oakville',
    'Bronte',
    'Glen Abbey',
    'West Oak Trails',
    'River Oaks',
    'Clearview',
    'College Park',
    'Iroquois Ridge North',
    'Iroquois Ridge South',
    'Upper Glen Abbey',
    'Eastlake',
    'Joshua Creek',
    'Wedgewood Creek',
    'Falgarwood',
    'Morrison',
    'Kerr Village',
    'Bronte Creek',
    'Westmount',
    'Palermo',
    'West Oak Trails',
    'Glenorchy',
    'Uptown Core'
  ],
  
  // Most common services in this area
  popularServices: [],
  
  // Recent projects in this area
  recentProjects: [],
  
  testimonials: [

    {
      author: "Victoria L.",
      location: "Old Oakville",
      rating: 5,
      text: "JK Appliance provided exceptional service when our Sub-Zero refrigerator stopped working. The technician was knowledgeable about our high-end appliances and fixed the issue quickly. Very professional and respectful of our home.",
    },
    {
      author: "Robert K.",
      location: "Glen Abbey, Oakville",
      rating: 5,
      text: "When our family's washer and dryer both had issues in the same week, JK Appliance came through with fast service. The technician was friendly, efficient, and explained everything clearly. Highly recommend for Oakville residents!",
    },
    {
      author: "Jennifer P.",
      location: "Bronte, Oakville",
      rating: 5,
      text: "I've used JK Appliance for our heritage home's kitchen appliances. They understand the challenges of integrating modern appliance technology with older homes and always provide excellent solutions and service.",
    },
    {
      author: "Thomas G.",
      location: "River Oaks, Oakville",
      rating: 5,
      text: "Our smart oven was having connection issues that other companies couldn't resolve. JK Appliance sent a technician who understood both the appliance and the technology. Problem solved on the first visit!",
    },
  ],

  // Local information - tailored for Oakville
  localInfo: {
    applianceUsage: "Oakville features a mix of historic homes in Old Oakville and Bronte, spacious executive homes in areas like Glen Abbey and Joshua Creek, and newer family-friendly developments in River Oaks and Iroquois Ridge. Our technicians are experienced with both premium appliance brands common in Oakville's luxury homes and quality family-oriented models.",
    commonIssues: "In Oakville's luxury lakefront neighborhoods, we frequently service high-end European appliances and built-in systems. In family-focused communities like Glen Abbey and River Oaks, we commonly address issues with high-capacity washers, dryers, and refrigerators designed for active households.",
    serviceNotes: "Our Oakville technicians are familiar with all areas from the historic lakefront neighborhoods to newer northern developments, providing exceptional service with specialized knowledge of both premium brands and everyday appliances in this prestigious community."
  }
};

// Sample services data for Oakville
const oakvilleServices: ServiceItem[] = [
  {
    id: 'refrigerator-repair',
    name: 'Refrigerator Repair',
        description: 'Our Oakville refrigerator repair technicians can fix all brands and models of refrigerators. From cooling issues to ice maker problems, our experts can diagnose and repair your refrigerator quickly and efficiently. We service all Oakville neighborhoods with same-day appointments available.',
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
        description: 'Our washer repair services in Oakville cover all major brands and models. Whether your washing machine is leaking, not spinning, or making unusual noises, our skilled technicians can identify the problem and provide efficient, long-lasting repairs right in your Oakville home.',
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
        description: 'When your dryer stops working properly in Oakville, our expert technicians are just a call away. We repair all types of dryers including gas and electric models. From heating issues to strange noises, our Oakville team can solve your dryer problems quickly and effectively.',
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
        description: 'Our Oakville dishwasher repair services cover all brands and models. We fix common issues like poor cleaning performance, leaking, and drainage problems. Our experienced technicians provide fast, reliable dishwasher repairs throughout Oakville, often on the same day you call.',
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
        description: 'For oven and stove repairs in Oakville, our technicians are experienced with all types including gas, electric, and induction. Whether your oven isn\'t heating properly or your stove burners won\'t light, we provide expert diagnoses and repairs throughout the Oakville area.',
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

// Brand data for Oakville
const oakvilleBrands: BrandItem[] = [
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

// oakville page using the template
export default function OakvilleAreaPage() {
  return (
    <ServiceAreaPageTemplate
      areaData={oakvilleData}
      services={oakvilleServices}
      brands={oakvilleBrands}
    />
  );
} 