 

import React from 'react';
import ServiceAreaPageTemplate from '@/components/templates/ServiceAreaPageTemplate';
import type { ServiceAreaData } from '@/types/serviceArea';
import type { AreaServiceItem } from '@/components/sections/areas/AreaServicesSection';
import type { BrandItem } from '@/components/sections/brands/BrandsSliderSection';
import ServicesTabSection from '@/components/sections/common/ServicesTabSection';
import { createStandardServices } from '@/data/servicesData';

// King City area data
const kingCityData: ServiceAreaData = {
  id: 'king-city',
  name: 'King City',
  fullName: 'King City, Ontario',
  description: 'From upscale homes to country estates, our appliance repair technicians provide prompt service throughout King City with same-day appointments available.',
  heroImage: '/images/areas/areas-hero.webp',
  neighborhoodImage: '/images/toronto-map.webp', // Can be updated with King City specific map later
  mapImage: '/images/toronto.webp', // Can be updated with King City specific map later
  
  // Location information
  address: {
    street: '2585 King Road',
    city: 'King City',
    province: 'ON',
    postalCode: 'L7B 1A1',
  },
  
  // Service radius and coverage details
  serviceRadius: '20',
  responseTime: 'Same-day service available in King City and surrounding areas',
  
  // Neighborhoods served
  neighborhoods: [
    'King City Village',
    'Kingscross Estates',
    'Kettleby',
    'Snowball',
    'Laskay',
    'Nobleton',
    'King Heights',
    'King Ridge',
    'Spring Hill',
    'Heritage Park',
    'Kinghorn',
    'King Summit',
    'Carrying Place',
    'King Valley',
    'King Station',
    'Fox Hill',
    'Kingscroft',
    'Cedar Valley',
    'Oak Ridges Moraine area',
    'Pottageville'
  ],
  
  // Most common services in this area
  popularServices: [],
  
  // Recent projects in this area
  recentProjects: [],
  
  // Testimonials specific to this area
  testimonials: [],
  
  // Local information - can be tailored per service area
  localInfo: {
    applianceUsage: "King City residents typically own upscale homes and estates with high-end appliances. The area features many luxury properties with professional-grade and built-in appliance systems that require specialized service.",
    commonIssues: "In King City, we frequently address issues related to high-end, built-in appliances and smart home systems. Many properties have specialized European models and luxury brands that require expert technical knowledge.",
    serviceNotes: "Our King City technicians are experienced with estate properties and understand the considerations of servicing large homes with integrated appliance systems. We maintain the highest standards of professionalism expected in this prestigious community."
  }
};

// Sample services data for King City
const kingCityServices: AreaServiceItem[] = [
  {
    id: 'refrigerator-repair',
    name: 'Refrigerator Repair',
        description: 'Our King City refrigerator repair technicians can fix all brands and models of refrigerators, including high-end and built-in units. From cooling issues to ice maker problems, our experts can diagnose and repair your refrigerator quickly and efficiently. We service all King City neighborhoods with same-day appointments available.',
    commonServices: [
      'Temperature regulation issues',
      'Ice maker repairs',
      'Water dispenser problems',
      'Strange noises or leaking',
      'Compressor and condenser repairs',
      'Door seal replacement'
    ],
    image: '/images/areas/king-city/refrigerator-repair.webp'
  },
  {
    id: 'washer-repair',
    name: 'Washer Repair',
        description: 'Our washer repair services in King City cover all major brands and models, including luxury and European brands. Whether your washing machine is leaking, not spinning, or making unusual noises, our skilled technicians can identify the problem and provide efficient, long-lasting repairs right in your King City home.',
    commonServices: [
      'Drum and agitator problems',
      'Drainage and pump issues',
      'Water inlet and leaking repairs',
      'Control board and timer repairs',
      'Door latch and lock issues',
      'Bearing and motor replacements'
    ],
    image: '/images/areas/king-city/washer-repair.webp'
  },
  {
    id: 'dryer-repair',
    name: 'Dryer Repair',
        description: 'When your dryer stops working properly in King City, our expert technicians are just a call away. We repair all types of dryers including gas and electric models, as well as high-end steam dryers. From heating issues to strange noises, our King City team can solve your dryer problems quickly and effectively.',
    commonServices: [
      'Heating element replacements',
      'Drum and belt repairs',
      'Thermostat and sensor calibration',
      'Vent cleaning and maintenance',
      'Motor and bearing replacements',
      'Control panel and timer repairs'
    ],
    image: '/images/areas/king-city/dryer-repair.webp'
  },
  {
    id: 'dishwasher-repair',
    name: 'Dishwasher Repair',
        description: 'Our King City dishwasher repair services cover all brands and models, including high-end and panel-ready units. We fix common issues like poor cleaning performance, leaking, and drainage problems. Our experienced technicians provide fast, reliable dishwasher repairs throughout King City, often on the same day you call.',
    commonServices: [
      'Spray arm repairs and replacements',
      'Pump and motor servicing',
      'Water inlet valve repairs',
      'Drainage system unclogging',
      'Control board and panel repairs',
      'Door seal replacements'
    ],
    image: '/images/areas/king-city/dishwasher-repair.webp'
  },
  {
    id: 'oven-repair',
    name: 'Oven & Stove Repair',
        description: 'For oven and stove repairs in King City, our technicians are experienced with all types including gas, electric, induction, and professional-grade models. Whether your oven isn\'t heating properly or your stove burners won\'t light, we provide expert diagnoses and repairs throughout the King City area.',
    commonServices: [
      'Heating element replacements',
      'Temperature sensor calibration',
      'Burner and igniter repairs',
      'Control board troubleshooting',
      'Door hinge and seal replacements',
      'Gas line and connection safety checks'
    ],
    image: '/images/areas/king-city/oven-repair.webp'
  }
];

// Brand data for King City (same brands, different focus)
const kingCityBrands: BrandItem[] = [
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

// King City coupons data
const kingCityCoupons = {
  main: [
    {
      amount: "30",
      type: "Repair",
      forCustomer: "New Customer Discount",
      code: "KCNEW30",
      website: "jkappliancerepair.ca",
      phone: "647-560-8966",
      primaryColor: "#0071e3"
    },
    {
      amount: "15",
      type: "Repair",
      forCustomer: "For Returning Customers",
      code: "KCRETURN15",
      website: "jkappliancerepair.ca",
      phone: "647-560-8966",
      primaryColor: "#0071e3"
    },
    {
      amount: "30",
      type: "Repair",
      forCustomer: "Senior Customer Discount",
      code: "KCSENIOR30",
      website: "jkappliancerepair.ca",
      phone: "647-560-8966",
      primaryColor: "#0071e3"
    }
  ],
  extra: [
    {
      amount: "35",
      type: "Refrigerator Repair",
      forCustomer: "For King City Residents",
      code: "KCFRIDGE35",
      website: "jkappliancerepair.ca",
      phone: "647-560-8966",
      primaryColor: "#0071e3"
    },
    {
      amount: "25",
      type: "Washer Repair",
      forCustomer: "Kingscross Estates Residents",
      code: "KCWASH25",
      website: "jkappliancerepair.ca",
      phone: "647-560-8966",
      primaryColor: "#0071e3"
    }
  ]
};

// King City page using the template
export default function KingCityAreaPage() {
  return (
    <ServiceAreaPageTemplate
      areaData={kingCityData}
      services={kingCityServices}
      brands={kingCityBrands}
    />
  );
} 