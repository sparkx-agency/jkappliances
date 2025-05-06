
import React from 'react';
import ServiceAreaPageTemplate from '@/components/templates/ServiceAreaPageTemplate';
import type { ServiceAreaData } from '@/types/serviceArea';
import type { ServiceItem } from '@/components/sections/common/ServicesTabSection';
import type { BrandItem } from '@/components/sections/brands/BrandsSliderSection';
import ServicesTabSection from '@/components/sections/common/ServicesTabSection';
import { createStandardServices } from '@/data/servicesData';


// Etobicoke area data
const etobicokeData: ServiceAreaData = {
  id: 'etobicoke',
  name: 'Etobicoke',
  fullName: 'Etobicoke, Toronto',
  description: 'From lakefront residences to family homes in quiet neighborhoods, our appliance repair technicians provide prompt service throughout Etobicoke with same-day appointments available.',
  heroImage: '/images/areas/areas-hero.webp',
  neighborhoodImage: '/images/etobicoke-map.webp',
  mapImage: '/images/etobicoke.webp',

  // Location information
  address: {
    street: '18 Yonge St',
    city: 'Toronto',
    province: 'ON',
    postalCode: 'M5E 1Z8',
  },

  // Service radius and coverage details
  serviceRadius: '25',
  responseTime: 'Same-day service available in most Etobicoke neighborhoods',

  // Neighborhoods served
  neighborhoods: [
    'The Kingsway',
    'Mimico',
    'New Toronto',
    'Long Branch',
    'Alderwood',
    'Humber Bay',
    'Islington-City Centre West',
    'Eringate-Centennial-West Deane',
    'Princess Gardens',
    'Markland Wood',
    'Sunnylea',
    'Stonegate-Queensway',
    'Humber Valley Village',
    'Rexdale',
    'Thistletown',
    'West Humber-Clairville',
    'Humber Heights',
    'Kingsview Village',
    'Mount Olive',
    'Richview',
    'Smithfield',
    'Willowridge'
  ],

  // Most common services in this area
  popularServices: [],

  // Recent projects in this area
  recentProjects: [],

  // Local information - tailored for Etobicoke
  localInfo: {
    applianceUsage: "Etobicoke residents live in a mix of single-family homes, townhouses, and lakefront condominiums. This diverse housing requires our technicians to be familiar with both standard home appliances and high-end luxury models common in waterfront properties.",
    commonIssues: "In Etobicoke's lakefront areas like Mimico and Humber Bay, we frequently address issues related to humidity affecting appliances. The older established neighborhoods like The Kingsway often require service for classic models, while newer developments feature smart appliances requiring specialized expertise.",
    serviceNotes: "Our Etobicoke technicians are familiar with the area's unique layout, from the lakefront communities to northern neighborhoods like Rexdale. We maintain inventory specifically for models common in Etobicoke homes to ensure faster service and repairs."
  },
  testimonials: []
};

// Sample services data for Etobicoke
const etobicokeServices: ServiceItem[] = [
  {
    id: 'refrigerator-repair',
    name: 'Refrigerator Repair',
        description: 'Our Etobicoke refrigerator repair technicians can fix all brands and models of refrigerators. From cooling issues to ice maker problems, our experts can diagnose and repair your refrigerator quickly and efficiently. We service all Etobicoke neighborhoods with same-day appointments available.',
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
        description: 'Our washer repair services in Etobicoke cover all major brands and models. Whether your washing machine is leaking, not spinning, or making unusual noises, our skilled technicians can identify the problem and provide efficient, long-lasting repairs right in your Etobicoke home.',
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
        description: 'When your dryer stops working properly in Etobicoke, our expert technicians are just a call away. We repair all types of dryers including gas and electric models. From heating issues to strange noises, our Etobicoke team can solve your dryer problems quickly and effectively.',
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
        description: 'Our Etobicoke dishwasher repair services cover all brands and models. We fix common issues like poor cleaning performance, leaking, and drainage problems. Our experienced technicians provide fast, reliable dishwasher repairs throughout Etobicoke, often on the same day you call.',
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
        description: 'For oven and stove repairs in Etobicoke, our technicians are experienced with all types including gas, electric, and induction. Whether your oven isn\'t heating properly or your stove burners won\'t light, we provide expert diagnoses and repairs throughout the Etobicoke area.',
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

// Brand data for Etobicoke
const etobicokeBrands: BrandItem[] = [
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

// Testimonials specific to Etobicoke
testmonials: [    
  {
    name: "Robert M.",
    location: "The Kingsway, Etobicoke",
    rating: 5,
    text: "After several unsuccessful attempts to get our high-end refrigerator fixed, JK Appliance solved the problem on their first visit. Their technician was knowledgeable and professional. Excellent service from start to finish!",
    date: "May 2023"
  },
  {
    name: "Jennifer L.",
    location: "Mimico, Etobicoke",
    rating: 5,
    text: "When our dishwasher stopped mid-cycle, JK Appliance was able to send a technician the same day. He quickly diagnosed the issue, had the parts on hand, and had it running again within an hour. Highly recommended!",
    date: "April 2023"
  },
  {
    name: "James P.",
    location: "Humber Bay, Etobicoke",
    rating: 5,
    text: "As a property manager for several lakefront condos, I've been using JK Appliance for all our maintenance needs. Their service is consistently reliable, and they're always available for emergency repairs. Fantastic company to work with.",
    date: "June 2023"
  },
  {
    name: "Samantha T.",
    location: "Alderwood, Etobicoke",
    rating: 5,
    text: "My dryer stopped heating properly, and JK Appliance came the next morning. The technician was friendly, explained everything clearly, and completed the repair efficiently. Fair pricing and great service!",
    date: "March 2023"
  }
];

// Custom Etobicoke page
// Etobicoke page using the template
export default function EtobicokeAreaPage() {
  return (
    <ServiceAreaPageTemplate
      areaData={etobicokeData}
      services={etobicokeServices}
      brands={etobicokeBrands}
    />
  );
}