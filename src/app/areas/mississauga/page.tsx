"use client";

import ServiceAreaTemplate from '@/components/templates/ServiceAreaTemplate';
import type { ServiceAreaData } from '@/components/templates/ServiceAreaTemplate';

// Mississauga area data
const mississaugaData: ServiceAreaData = {
  id: 'mississauga',
  name: 'Mississauga',
  fullName: 'Mississauga, Ontario',
  description: 'Professional appliance repair services throughout Mississauga with fast response times and competitive pricing for all major brands.',
  heroImage: '/images/areas/mississauga-skyline.jpg',
  neighborhoodImage: '/images/areas/mississauga-neighborhoods.jpg',
  mapImage: '/images/areas/mississauga-map.jpg',
  
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
    'Erin Mills',
    'Streetsville',
    'Meadowvale',
    'Churchill Meadows',
    'Central Erin Mills',
    'Lisgar',
    'Cooksville',
    'Dixie',
    'Lakeview',
    'Mineola',
    'Applewood',
    'Rathwood',
    'Mississauga Valley',
    'Fairview',
    'Square One',
    'City Centre',
    'Hurontario',
    'Erindale',
    'Sheridan',
    'Malton'
  ],
  
  // Most common services in this area
  popularServices: [
    {
      id: 'refrigerator-repair',
      name: 'Refrigerator Repair',
      image: '/images/services/refrigerator-repair.jpg',
      description: 'Expert refrigerator repair for all major brands in Mississauga.'
    },
    {
      id: 'washer-repair',
      name: 'Washer Repair',
      image: '/images/services/washer-repair.jpg',
      description: 'Professional washing machine repairs for residential homes.'
    },
    {
      id: 'dryer-repair',
      name: 'Dryer Repair',
      image: '/images/services/dryer-repair.jpg',
      description: 'Fast, reliable dryer repair services throughout Mississauga.'
    },
    {
      id: 'dishwasher-repair',
      name: 'Dishwasher Repair',
      image: '/images/services/dishwasher-repair.jpg',
      description: 'Expert dishwasher technicians serving the Mississauga area.'
    }
  ],
  
  // Recent projects in this area
  recentProjects: [
    {
      title: 'Residential Complex Maintenance',
      location: 'Port Credit, Mississauga',
      description: 'Regular maintenance program for a waterfront condominium complex.',
      image: '/images/projects/mississauga-condo.jpg'
    },
    {
      title: 'Restaurant Kitchen Equipment',
      location: 'City Centre, Mississauga',
      description: 'Commercial appliance installation and maintenance for a new restaurant.',
      image: '/images/projects/mississauga-restaurant.jpg'
    },
    {
      title: 'Whole Home Appliance Upgrade',
      location: 'Mineola, Mississauga',
      description: 'Complete replacement and installation of smart appliances in a luxury home.',
      image: '/images/projects/mississauga-luxury.jpg'
    }
  ],
  
  // Testimonials specific to this area
  testimonials: [
    {
      text: "The technician was professional and fixed our dishwasher faster than expected. Very impressed with the service!",
      author: "Robert K.",
      location: "Erin Mills, Mississauga",
      rating: 5
    },
    {
      text: "We've been using JK Appliances for all our rental properties in Mississauga. Always reliable and fairly priced.",
      author: "Jennifer T.",
      location: "Port Credit, Mississauga",
      rating: 5
    },
    {
      text: "Same-day service for my broken fridge saved all our food. Very grateful for the quick response.",
      author: "Ahmed M.",
      location: "Cooksville, Mississauga",
      rating: 5
    }
  ],
  
  // Local information - can be tailored per service area
  localInfo: {
    applianceUsage: "Mississauga residents typically own a wide range of appliance types, from standard models in older neighborhoods to high-end smart appliances in newer developments and luxury homes.",
    commonIssues: "In Mississauga, we frequently service water quality-related issues with dishwashers and washing machines. Refrigerator compressor problems are also common during hot summer months.",
    serviceNotes: "Our Mississauga technicians are familiar with the local building types from high-rise condos to detached homes, ensuring efficient service regardless of your property type."
  }
};

export default function MississaugaServiceAreaPage() {
  return <ServiceAreaTemplate areaData={mississaugaData} />;
} 