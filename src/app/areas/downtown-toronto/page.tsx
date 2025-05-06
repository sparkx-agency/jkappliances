import React from 'react';
import ServiceAreaPageTemplate from '@/components/templates/ServiceAreaPageTemplate';
import type { ServiceAreaData } from '@/types/serviceArea';
import type { ServiceItem } from '@/components/sections/common/ServicesTabSection';
import type { BrandItem } from '@/components/sections/brands/BrandsSliderSection';
import ServicesTabSection from '@/components/sections/common/ServicesTabSection';
import { createStandardServices } from '@/data/servicesData';

// Downtown Toronto area data
const downtownTorontoData: ServiceAreaData = {
  id: 'downtown-toronto',
  name: 'Downtown Toronto',
  fullName: 'Downtown Toronto, Ontario',
  description: 'From high-rise condos to heritage buildings, our skilled technicians provide fast, reliable appliance repair throughout Downtown Toronto with same-day service available.',
  heroImage: '/images/areas/areas-hero.webp',
  neighborhoodImage: '/images/toronto-map.webp', // Should be replaced with Downtown Toronto specific map
  mapImage: '/images/toronto.webp', // Should be replaced with Downtown Toronto specific map
  
  // Location information
  address: {
    street: '100 Queen Street West',
    city: 'Toronto',
    province: 'ON',
    postalCode: 'M5H 2N2',
  },
  
  // Service radius and coverage details
  serviceRadius: '10',
  responseTime: 'Same-day service available in all Downtown Toronto neighborhoods',
  
  // Neighborhoods served
  neighborhoods: [
    'Financial District',
    'Entertainment District',
    'Fashion District',
    'Harbourfront',
    'St. Lawrence Market',
    'Distillery District',
    'Corktown',
    'Chinatown',
    'Kensington Market',
    'Grange Park',
    'Queen West',
    'King West',
    'Liberty Village',
    'CityPlace',
    'Waterfront',
    'Old Town',
    'Garden District',
    'Church-Wellesley Village',
    'Ryerson University Area',
    'Bay Street Corridor'
  ],
  
  // Most common services in this area
  popularServices: [],
  
  // Recent projects in this area
  recentProjects: [],
  
  // Testimonials specific to this area
  testimonials: [],
  
  // Local information - can be tailored per service area
  localInfo: {
    applianceUsage: "Downtown Toronto residents primarily use compact, high-efficiency appliances suited for urban condo living. Many buildings feature integrated or built-in appliances, and smart home technology adoption is particularly high in newer developments.",
    commonIssues: "In Downtown Toronto, we frequently address issues related to high-usage appliances in dense urban settings. Condos often present unique challenges like limited access space, building-specific water systems, and ventilation considerations for dryers and range hoods.",
    serviceNotes: "Our Downtown Toronto technicians are experts at navigating high-rise buildings, understanding condo regulations, and working efficiently in urban spaces. We're familiar with building access protocols and parking limitations throughout downtown."
  }
};

// Services data for Downtown Toronto
const downtownTorontoServices: ServiceItem[] = [
  {
    id: 'refrigerator-repair',
    name: 'Refrigerator Repair',
    description: 'Our Downtown Toronto refrigerator repair technicians specialize in all brands and models, including high-end built-in and compact refrigerators common in urban condos. From cooling issues to ice maker problems, our experts provide same-day diagnosis and repair throughout Downtown Toronto.',
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
    description: 'Our washer repair services in Downtown Toronto cover standard and compact models perfect for urban living. Whether your washing machine is leaking, not spinning, or making unusual noises, our skilled technicians provide efficient repairs with minimal disruption to your busy downtown lifestyle.',
    commonServices: [
      'Drum and agitator problems',
      'Drainage and pump issues',
      'Water inlet and leaking repairs',
      'Control board and timer repairs',
      'Door latch and lock issues',
      'Bearing and motor replacements',
      'Stackable and compact washer expertise'
    ]
  },
  {
    id: 'dryer-repair',
    name: 'Dryer Repair',
    description: 'When your dryer stops working in your Downtown Toronto condo or apartment, our expert technicians can help. We specialize in ventless, compact, and combination washer-dryer units common in urban homes, providing fast, effective repairs throughout the downtown core.',
    commonServices: [
      'Heating element replacements',
      'Drum and belt repairs',
      'Thermostat and sensor calibration',
      'Vent cleaning and maintenance',
      'Motor and bearing replacements',
      'Control panel and timer repairs',
      'Condenser and heat pump dryer expertise'
    ]
  },
  {
    id: 'dishwasher-repair',
    name: 'Dishwasher Repair',
    description: 'Our Downtown Toronto dishwasher repair technicians service all models from compact to full-size, built-in to portable. We understand the unique water pressure and space constraints of downtown living and provide fast, reliable repairs often on the same day you call.',
    commonServices: [
      'Spray arm repairs and replacements',
      'Pump and motor servicing',
      'Water inlet valve repairs',
      'Drainage system unclogging',
      'Control board and panel repairs',
      'Door seal replacements',
      'Integrated and panel-ready model expertise'
    ]
  },
  {
    id: 'oven-repair',
    name: 'Oven & Stove Repair',
    description: 'Our Downtown Toronto oven and stove repair experts specialize in all cooking appliances found in urban kitchens, from high-end built-in wall ovens to induction cooktops. We understand condo regulations and provide safe, efficient repairs throughout the downtown core.',
    commonServices: [
      'Heating element replacements',
      'Temperature sensor calibration',
      'Burner and igniter repairs',
      'Control board troubleshooting',
      'Door hinge and seal replacements',
      'Gas line and connection safety checks',
      'Induction and smart cooktop expertise'
    ]
  }
];

// Brand data for Downtown Toronto
const downtownTorontoBrands: BrandItem[] = [
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
    id: 'thermador',
    name: 'Thermador',
    logo: '/images/brands/frigidaire.webp', // Should be replaced with Thermador logo
    link: '/brands/thermador'
  }
];

// Downtown Toronto page using the template
export default function DowntownTorontoAreaPage() {
  return (
    <ServiceAreaPageTemplate
      areaData={downtownTorontoData}
      services={downtownTorontoServices}
      brands={downtownTorontoBrands}
    />
  );
} 