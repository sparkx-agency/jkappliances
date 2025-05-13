import React from 'react';
import ServiceAreaPageTemplate from '@/components/templates/ServiceAreaPageTemplate';
import type { ServiceAreaData } from '@/types/serviceArea';
import type { BrandItem } from '@/components/sections/brands/BrandsSliderSection';
import { createStandardServices } from '@/data/servicesData';


// Burlington area data
const burlingtonData: ServiceAreaData = {
  id: 'burlington',
  name: 'Burlington',
  fullName: 'Burlington, Ontario',
  description: 'From lakefront homes to suburban neighborhoods, our appliance repair technicians provide prompt service throughout Burlington with same-day appointments available.',
  heroImage: '/images/areas/areas-hero.webp',
  neighborhoodImage: '/images/burlington-map.webp',
  mapImage: '/images/areas/coverage.jpg',
  
  // Location information
  address: {
    street: '18 Yonge St',
    city: 'Toronto',
    province: 'ON',
    postalCode: 'M5E 1Z8',
  },
  
  // Service radius and coverage details
  serviceRadius: '20',
  responseTime: 'Same-day service available in most Burlington neighborhoods',
  
  // Neighborhoods served
  neighborhoods: [
    'Downtown Burlington',
    'Aldershot',
    'Tyandaga',
    'Roseland',
    'Headon Forest',
    'Millcroft',
    'The Orchard',
    'Brant Hills',
    'Palmer',
    'Pinedale',
    'Elizabeth Gardens',
    'Shoreacres',
    'Dynes',
    'Plains',
    'Alton Village',
    'Corporate',
    'Mountainside',
    'Central',
    'Tansley',
    'Rural Burlington'
  ],
  
  // Most common services in this area
  popularServices: [],
  
  // Recent projects in this area
  recentProjects: [],
  
  // Testimonials specific to this area
  testimonials: [],
  
  // Local information - tailored for Burlington
  localInfo: {
    applianceUsage: "Burlington residents have a diverse range of homes, from lakefront properties and heritage homes to new developments and suburban houses. This variety means our technicians encounter everything from high-end appliances to standard models requiring different expertise.",
    commonIssues: "In Burlington, we frequently address issues with refrigeration systems and laundry appliances. Lakefront properties often experience unique challenges due to humidity, while newer developments in Alton Village and The Orchard typically have smart appliances requiring specialized knowledge.",
    serviceNotes: "Our Burlington technicians are familiar with all neighborhoods from the waterfront to rural areas in the north. We maintain inventory specifically for the most common brands and models found in Burlington homes, ensuring faster service and repairs."
  }
};

// Brand data for Burlington
const burlingtonBrands: BrandItem[] = [
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

// Burlington page using the template
export default function BurlingtonAreaPage() {
  const burlingtonServices = createStandardServices(burlingtonData.name);
  return (
    <ServiceAreaPageTemplate
      areaData={burlingtonData}
      services={burlingtonServices}
      brands={burlingtonBrands}
    />
  );
}
     