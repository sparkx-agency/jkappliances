import React from 'react';
import ServiceAreaPageTemplate from '@/components/templates/ServiceAreaPageTemplate';
import type { ServiceAreaData } from '@/types/serviceArea';
import type { BrandItem } from '@/components/sections/brands/BrandsSliderSection';
import { createStandardServices } from '@/data/servicesData';


// Ajax area data
const ajaxData: ServiceAreaData = {
  id: 'ajax',
  name: 'Ajax',
  fullName: 'Ajax, Ontario',
  description: 'From lakeside homes to new deve lopments, our appliance repair technicians provide prompt service throughout Ajax with same-day appointments available.',
  heroImage: '/images/areas/areas-hero.webp',
  neighborhoodImage: '/images/areas/ajax-map.webp',
  mapImage: '/images/areas/coverage.jpg',
  
  // Location information
  address: {
    street: '18 Yonge St',
    city: 'Toronto',
    province: 'ON',
    postalCode: 'M5E 1Z8',
  },
  
  // Service radius and coverage details
  serviceRadius: '15',
  responseTime: 'Same-day service available in most Ajax neighborhoods',
  
  // Neighborhoods served
  neighborhoods: [
    'Downtown Ajax',
    'South Ajax',
    'Central Ajax',
    'North Ajax',
    'Pickering Beach',
    'Applecroft',
    'Carruthers Creek',
    'Nottingham',
    'Memorial Village',
    'Discovery Bay',
    'Westney Heights',
    'Lakeside',
    'Duffins Bay',
    'Salem',
    'Hermitage',
    'Deer Creek',
    'Audley'
  ],
  
  // Most common services in this area
  popularServices: [],
  
  // Recent projects in this area
  recentProjects: [],
  
  // Testimonials specific to this area
  testimonials: [],
  
  // Local information - tailored to Ajax
  localInfo: {
    applianceUsage: "Ajax residents typically own newer appliances due to the recent housing developments in the area. Many homes feature energy-efficient models and smart appliances that require specialized service knowledge.",
    commonIssues: "In Ajax, we commonly address issues related to hard water damage in dishwashers and washing machines. The lakeside locations also often experience humidity-related problems with refrigerators and freezers, especially during summer months.",
    serviceNotes: "Our Ajax technicians are familiar with all neighborhoods and can provide quick service throughout the town. We maintain parts inventory for the most common appliance brands found in Ajax homes."
  }
};

// Brand data for Ajax
const ajaxBrands: BrandItem[] = [
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

// Ajax page using the template
export default function AjaxAreaPage() {
  const ajaxServices = createStandardServices(ajaxData.name);
  return (
    <ServiceAreaPageTemplate
      areaData={ajaxData}
      services={ajaxServices}
      brands={ajaxBrands}
    />
  );
}
