import React from 'react';
import ServiceAreaPageTemplate from '@/components/templates/ServiceAreaPageTemplate';
import type { ServiceAreaData } from '@/types/serviceArea';
import type { BrandItem } from '@/components/sections/brands/BrandsSliderSection';
import { createStandardServices } from '@/data/servicesData';
 


// North York area data
const northYorkData: ServiceAreaData = {
  id: 'northyork',
  name: 'North York',
  fullName: 'North York, Toronto',
  description: 'From high-rise condos along Yonge Street to spacious homes in Willowdale, our appliance repair technicians provide prompt service throughout North York with same-day appointments available.',
  heroImage: '/images/areas/areas-hero.webp',
  neighborhoodImage: '/images/northyork-map.webp',
  mapImage: '/images/northyork.webp',

  // Location information
  address: {
    street: '18 Yonge St',
    city: 'Toronto',
    province: 'ON',
    postalCode: 'M5E 1Z8',
  },

  // Service radius and coverage details
  serviceRadius: '25',
  responseTime: 'Same-day service available in all North York neighborhoods',

  // Neighborhoods served
  neighborhoods: [
    'Willowdale',
    'Bayview Village',
    'York Mills',
    'Don Mills',
    'Hoggs Hollow',
    'The Bridle Path',
    'Newtonbrook',
    'Willowdale East',
    'Willowdale West',
    'Lansing',
    'Parkwoods',
    'Henry Farm',
    'Bathurst Manor',
    'Westminster-Branson',
    'Clanton Park',
    'Downsview',
    'St. Andrew-Windfields',
    'Banbury-Don Mills',
    'Victoria Village',
    'Flemingdon Park',
    'Lawrence Heights',
    'Lawrence Manor'
  ],

  // Most common services in this area
  popularServices: [],

  // Recent projects in this area
  recentProjects: [],

  // North York testimonials
testimonials: [],

  // Local information - tailored for North York
  localInfo: {
    applianceUsage: "North York features a diverse mix of housing, from luxury estates in The Bridle Path and Hoggs Hollow to modern condos along the Yonge Street corridor and family homes in communities like Willowdale and Bayview Village. Our technicians are experienced with appliances in all types of homes throughout the area.",
    commonIssues: "In North York's luxury neighborhoods, we frequently service high-end European and designer appliances. In condominium buildings, we often address issues with space-efficient appliances and stackable washer/dryer units. In family neighborhoods, we regularly maintain larger capacity appliances designed for busy households.",
    serviceNotes: "Our North York technicians are familiar with all areas from upscale residential neighborhoods to high-density condominium communities, providing exceptional service with specialized knowledge of both premium brands and everyday appliances across this diverse area."
  }
};

// Brand data for North York
const northYorkBrands: BrandItem[] = [
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


// Custom North York page
// North york page using the template
export default function NorthYorkAreaPage() {
  const northYorkServices = createStandardServices(northYorkData.name);
  return (
    <ServiceAreaPageTemplate
      areaData={northYorkData}
      services={northYorkServices}
      brands={northYorkBrands}
    />
  );
}