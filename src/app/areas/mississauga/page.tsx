import React from 'react';
import ServiceAreaPageTemplate from '@/components/templates/ServiceAreaPageTemplate';
import type { ServiceAreaData } from '@/types/serviceArea';
import type { BrandItem } from '@/components/sections/brands/BrandsSliderSection';
import { createStandardServices } from '@/data/servicesData';

// Mississauga area data
const mississaugaData: ServiceAreaData = {
  id: 'mississauga',
  name: 'Mississauga',
  fullName: 'Mississauga, Ontario',
  description: 'From lakefront homes to urban condos, our appliance repair technicians provide prompt service throughout Mississauga with same-day appointments available.',
  heroImage: '/images/areas/areas-hero.webp',
  neighborhoodImage: '/images/mississauga-map.webp',
  mapImage: '/images/mississauga.webp',
  
  // Location information
  address: {
    street: '18 Yonge St',
    city: 'Toronto',
    province: 'ON',
    postalCode: 'M5E 1Z8',
  },
  
  // Service radius and coverage details
  serviceRadius: '25',
  responseTime: 'Same-day service available in most Mississauga neighborhoods',
  
  // Neighborhoods served
  neighborhoods: [
    'Port Credit',
    'Clarkson',
    'Lorne Park',
    'Erin Mills',
    'Central Erin Mills',
    'Meadowvale',
    'Streetsville',
    'Lisgar',
    'Churchill Meadows',
    'Hurontario',
    'City Centre',
    'Cooksville',
    'Mississauga Valley',
    'Fairview',
    'Applewood',
    'Rathwood',
    'Creditview',
    'Malton',
    'East Credit',
    'Lakeview',
    'Sheridan',
    'Dixie'
  ],
  
  // Most common services in this area
  popularServices: [],
  
  // Recent projects in this area
  recentProjects: [],
  
  // Testimonials specific to this area
  testimonials: [],
  
  // Local information - tailored for Mississauga
  localInfo: {
    applianceUsage: "Mississauga residents own a diverse range of appliances, from high-end smart appliances in luxury condos near Square One to family-sized units in suburban neighborhoods like Erin Mills and Meadowvale.",
    commonIssues: "In Mississauga, we frequently service issues with refrigerator cooling systems, especially in waterfront areas like Port Credit where humidity can be a factor. Condo residents often require specialized dishwasher and compact appliance repairs.",
    serviceNotes: "Our Mississauga technicians are familiar with the various building types across the city, from high-rise condos to detached homes, and maintain specialized equipment for both residential and commercial appliance service."
  }
};

// Brand data for Mississauga
const mississaugaBrands: BrandItem[] = [
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

// Mississauga page using the template
export default function MississaugaAreaPage() {
  const mississaugaServices = createStandardServices(mississaugaData.name);
  return (
    <ServiceAreaPageTemplate
      areaData={mississaugaData}
      services={mississaugaServices}
      brands={mississaugaBrands}
    />
  );
}