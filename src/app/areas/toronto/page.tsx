"use client";

import ServiceAreaTemplate from '@/components/templates/ServiceAreaTemplate';
import type { ServiceAreaData } from '@/components/templates/ServiceAreaTemplate';

// Toronto area data
const torontoData: ServiceAreaData = {
  id: 'toronto',
  name: 'Toronto',
  fullName: 'Toronto, Ontario',
  description: 'From downtown condos to suburban homes, our appliance repair technicians provide prompt service throughout Toronto with same-day appointments available.',
  heroImage: '/images/areas/toronto-skyline.jpg',
  neighborhoodImage: '/images/areas/toronto-neighborhoods.jpg',
  mapImage: '/images/areas/toronto-map.jpg',
  
  // Location information
  address: {
    street: '18 Yonge St',
    city: 'Toronto',
    province: 'ON',
    postalCode: 'M5E 1Z8',
  },
  
  // Service radius and coverage details
  serviceRadius: '30',
  responseTime: 'Same-day service available in most Toronto neighborhoods',
  
  // Neighborhoods served
  neighborhoods: [
    'Downtown Core',
    'Yorkville',
    'Liberty Village',
    'The Beaches',
    'Leslieville',
    'The Annex',
    'Kensington Market',
    'Chinatown',
    'Little Italy',
    'Greektown',
    'Forest Hill',
    'Rosedale',
    'Cabbagetown',
    'Harbourfront',
    'Entertainment District',
    'Financial District',
    'Queen West',
    'King West',
    'Yonge & Eglinton',
    'North York',
    'Scarborough',
    'Etobicoke'
  ],
  
  // Most common services in this area
  popularServices: [
    {
      id: 'refrigerator-repair',
      name: 'Refrigerator Repair',
      image: '/images/services/refrigerator-repair.jpg',
      description: 'Expert refrigerator repair for all major brands in Toronto.'
    },
    {
      id: 'washer-repair',
      name: 'Washer Repair',
      image: '/images/services/washer-repair.jpg',
      description: 'Professional washing machine repairs for condos and homes.'
    },
    {
      id: 'dryer-repair',
      name: 'Dryer Repair',
      image: '/images/services/dryer-repair.jpg',
      description: 'Fast, reliable dryer repair services throughout Toronto.'
    },
    {
      id: 'dishwasher-repair',
      name: 'Dishwasher Repair',
      image: '/images/services/dishwasher-repair.jpg',
      description: 'Expert dishwasher technicians serving the Toronto area.'
    }
  ],
  
  // Recent projects in this area
  recentProjects: [
    {
      title: 'Condo Complex Appliance Service',
      location: 'Downtown Toronto',
      description: 'Regular maintenance program for 200+ units in a luxury high-rise building.',
      image: '/images/projects/toronto-condo.jpg'
    },
    {
      title: 'Restaurant Equipment Repair',
      location: 'Financial District',
      description: 'Commercial kitchen equipment repair for a chain of restaurants.',
      image: '/images/projects/toronto-restaurant.jpg'
    },
    {
      title: 'Smart Home Integration',
      location: 'Rosedale',
      description: 'Installation and repair of connected appliances in a smart home.',
      image: '/images/projects/toronto-smarthome.jpg'
    }
  ],
  
  // Testimonials specific to this area
  testimonials: [
    {
      text: "The technician arrived within the promised window and fixed my refrigerator quickly. Very professional service.",
      author: "Michael J.",
      location: "Downtown Toronto",
      rating: 5
    },
    {
      text: "I needed an emergency washer repair and they came same-day. Excellent service and fair pricing.",
      author: "Sarah L.",
      location: "North York, Toronto",
      rating: 5
    },
    {
      text: "They've been servicing our apartment building for years - always reliable and thorough.",
      author: "David T.",
      location: "Harbourfront, Toronto",
      rating: 5
    }
  ],
  
  // Local information - can be tailored per service area
  localInfo: {
    applianceUsage: "Toronto residents, especially in condos and apartments, rely heavily on efficient appliances. The city's diverse housing stock includes a mix of newer buildings with smart appliances and older homes with classic models.",
    commonIssues: "In Toronto's downtown core, we frequently address issues related to compact appliances in condos. Older neighborhoods often need service for legacy models, while luxury homes in areas like Rosedale typically require high-end appliance expertise.",
    serviceNotes: "Our Toronto technicians are familiar with building access protocols for condos and apartments, ensuring smooth service calls in multi-unit buildings."
  }
};

export default function TorontoServiceAreaPage() {
  return <ServiceAreaTemplate areaData={torontoData} />;
} 