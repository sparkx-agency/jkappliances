"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import NeighborhoodSection, { AreaData } from '@/components/sections/NeighborhoodSection';
import ServicesSectionArea from '@/components/sections/ServicesSectionArea';
import BookingSection from '@/components/sections/BookingSection';
import AreaServicesSection from '@/components/sections/AreaServicesSection';
import type { AreaServiceItem } from '@/components/sections/AreaServicesSection';
import BrandsSliderSection from '@/components/sections/BrandsSliderSection';
import type { BrandItem } from '@/components/sections/BrandsSliderSection';
import BlogSection from '@/components/sections/BlogSection';
import CouponSection from '@/components/sections/CouponSection';
import TestimonialsSection, { TestimonialItem } from '@/components/sections/TestimonialsSection';

// East York area data
const eastYorkData = {
  id: 'eastyork',
  name: 'East York',
  fullName: 'East York, Toronto',
  description: 'From charming bungalows to mid-century homes and newer condos, our appliance repair technicians provide prompt service throughout East York with same-day appointments available.',
  heroImage: '/images/eastyork-skyline.jpg',
  neighborhoodImage: '/images/eastyork-map.jpg',
  mapImage: '/images/eastyork.jpg',
  
  // Location information
  address: {
    street: '18 Yonge St',
    city: 'Toronto',
    province: 'ON',
    postalCode: 'M5E 1Z8',
  },
  
  // Service radius and coverage details
  serviceRadius: '20',
  responseTime: 'Same-day service available in all East York neighborhoods',
  
  // Neighborhoods served
  neighborhoods: [
    'Broadview North',
    'Old East York',
    'Crescent Town',
    'Woodbine Heights',
    'Danforth Village',
    'Pape Village',
    'Parkview Hills',
    'Topham Park',
    'Bermondsey',
    'Thorncliffe Park',
    'Leaside',
    'O\'Connor-Parkview',
    'Taylor-Massey',
    'Flemingdon Park',
    'Victoria Village'
  ],
  
  // Most common services in this area
  popularServices: [
    {
      id: 'refrigerator-repair',
      name: 'Refrigerator Repair',
      image: '/images/services/refrigerator-repair.jpg',
      description: 'Expert refrigerator repair for all major brands in East York.'
    },
    {
      id: 'washer-repair',
      name: 'Washer Repair',
      image: '/images/services/washer-repair.jpg',
      description: 'Professional washing machine repairs for homes throughout East York.'
    },
    {
      id: 'dryer-repair',
      name: 'Dryer Repair',
      image: '/images/services/dryer-repair.jpg',
      description: 'Fast, reliable dryer repair services throughout East York.'
    },
    {
      id: 'dishwasher-repair',
      name: 'Dishwasher Repair',
      image: '/images/services/dishwasher-repair.jpg',
      description: 'Expert dishwasher technicians serving the East York area.'
    }
  ],
  
  // Recent projects in this area
  recentProjects: [
    {
      title: 'Multi-Appliance Home Upgrade',
      location: 'Danforth Village, East York',
      description: 'Complete appliance installation and setup for a fully renovated home in the Danforth area.',
      image: '/images/projects/eastyork-house.jpg'
    },
    {
      title: 'Commercial Kitchen Equipment Service',
      location: 'Pape Village, East York',
      description: 'Regular maintenance program for a local restaurant\'s kitchen equipment.',
      image: '/images/projects/eastyork-restaurant.jpg'
    },
    {
      title: 'Condo Building Service Plan',
      location: 'Thorncliffe Park, East York',
      description: 'Ongoing appliance maintenance program for a mid-rise condominium complex.',
      image: '/images/projects/eastyork-condo.jpg'
    }
  ],
  
  // Local information - tailored for East York
  localInfo: {
    applianceUsage: "East York features a diverse mix of housing, from post-war bungalows and semi-detached homes to newer condominiums in areas like Thorncliffe Park. This variety means our technicians work with both vintage appliances in established neighborhoods and modern systems in newer developments.",
    commonIssues: "In East York's older homes like those in Old East York and Woodbine Heights, we frequently service well-maintained vintage appliances that require specialized knowledge. Meanwhile, the area's apartment and condo buildings often need rapid response for essential appliance failures.",
    serviceNotes: "Our East York technicians are familiar with the area's unique blend of mid-century homes, apartment complexes, and new developments. We maintain inventory specifically for both modern and legacy appliance models common in East York homes."
  }
};

// Sample services data for East York
const eastYorkServices: AreaServiceItem[] = [
  {
    id: 'refrigerator-repair',
    name: 'Refrigerator Repair',
    image: '/images/services/refrigerator-repair.jpg',
    description: 'Our East York refrigerator repair technicians can fix all brands and models of refrigerators. From cooling issues to ice maker problems, our experts can diagnose and repair your refrigerator quickly and efficiently. We service all East York neighborhoods with same-day appointments available.',
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
    image: '/images/services/washer-repair.jpg',
    description: 'Our washer repair services in East York cover all major brands and models. Whether your washing machine is leaking, not spinning, or making unusual noises, our skilled technicians can identify the problem and provide efficient, long-lasting repairs right in your East York home.',
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
    image: '/images/services/dryer-repair.jpg',
    description: 'When your dryer stops working properly in East York, our expert technicians are just a call away. We repair all types of dryers including gas and electric models. From heating issues to strange noises, our East York team can solve your dryer problems quickly and effectively.',
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
    image: '/images/services/dishwasher-repair.jpg',
    description: 'Our East York dishwasher repair services cover all brands and models. We fix common issues like poor cleaning performance, leaking, and drainage problems. Our experienced technicians provide fast, reliable dishwasher repairs throughout East York, often on the same day you call.',
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
    image: '/images/services/oven-repair.jpg',
    description: 'For oven and stove repairs in East York, our technicians are experienced with all types including gas, electric, and induction. Whether your oven isn\'t heating properly or your stove burners won\'t light, we provide expert diagnoses and repairs throughout the East York area.',
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

// Brand data for East York
const eastYorkBrands: BrandItem[] = [
  {
    id: 'samsung',
    name: 'Samsung',
    logo: '/images/brands/samsung.svg',
    link: '/brands/samsung'
  },
  {
    id: 'lg',
    name: 'LG',
    logo: '/images/brands/lg.svg',
    link: '/brands/lg'
  },
  {
    id: 'whirlpool',
    name: 'Whirlpool',
    logo: '/images/brands/whirlpool.svg',
    link: '/brands/whirlpool'
  },
  {
    id: 'ge',
    name: 'GE',
    logo: '/images/brands/ge.svg',
    link: '/brands/ge'
  },
  {
    id: 'maytag',
    name: 'Maytag',
    logo: '/images/brands/maytag.svg',
    link: '/brands/maytag'
  },
  {
    id: 'kitchenaid',
    name: 'KitchenAid',
    logo: '/images/brands/kitchen-aid.svg',
    link: '/brands/kitchenaid'
  },
  {
    id: 'electrolux',
    name: 'Electrolux',
    logo: '/images/brands/electrolux.svg',
    link: '/brands/electrolux'
  },
  {
    id: 'bosch',
    name: 'Bosch',
    logo: '/images/brands/bosch.svg',
    link: '/brands/bosch'
  },
  {
    id: 'miele',
    name: 'Miele',
    logo: '/images/brands/miele.svg',
    link: '/brands/miele'
  },
  {
    id: 'frigidaire',
    name: 'Frigidaire',
    logo: '/images/brands/frigidaire.svg',
    link: '/brands/frigidaire'
  }
];

// Testimonials specific to East York
const eastYorkTestimonials: TestimonialItem[] = [
  {
    name: "Patricia K.",
    location: "Danforth Village, East York",
    rating: 5,
    text: "Our vintage refrigerator in our 1950s East York home needed specialized repair. JK Appliance's technician knew exactly how to fix it and kept its original charm while making it work like new. Fantastic service!",
    date: "April 2023"
  },
  {
    name: "Thomas B.",
    location: "Thorncliffe Park, East York",
    rating: 5,
    text: "When the dishwasher in our condo stopped working, JK Appliance sent someone within hours. The technician diagnosed the issue quickly, had the necessary parts with him, and completed the repair efficiently. Great experience all around.",
    date: "May 2023"
  },
  {
    name: "Sophia L.",
    location: "Woodbine Heights, East York",
    rating: 5,
    text: "I've had JK Appliance repair both my washing machine and stove. Their technicians are always on time, professional, and take the time to explain what they're doing. They genuinely care about providing good service.",
    date: "March 2023"
  },
  {
    name: "Richard M.",
    location: "Old East York",
    rating: 5,
    text: "After our dryer stopped heating, JK Appliance came the same day we called. The technician was knowledgeable, thorough, and fixed the problem in less than an hour. Excellent service at a reasonable price.",
    date: "June 2023"
  }
];

// Custom East York page
export default function EastYorkAreaPage() {
  // Convert string neighborhoods to AreaData format for NeighborhoodSection
  const neighborhoodAreas: AreaData[] = eastYorkData.neighborhoods.map((name, index) => ({
    id: `${eastYorkData.id}-neighborhood-${index}`,
    name
  }));
  
  return (
    <div className="bg-[#f5f5f7]">
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-center mb-20"
            >
              <h1 className="text-6xl sm:text-7xl font-semibold text-gray-900 tracking-tight mb-8">
                Appliance Repair in {eastYorkData.name}
              </h1>
              <p className="text-xl sm:text-2xl text-gray-500 mb-12 max-w-3xl mx-auto font-light leading-relaxed">
                Fast, reliable appliance repair services throughout {eastYorkData.name} with same-day service available. Serving all neighborhoods in the {eastYorkData.fullName} area.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link 
                  href="/book" 
                  className="px-8 py-4 rounded-full bg-black text-white font-medium transition-all hover:bg-gray-800 shadow-sm text-lg"
                >
                  Book a Repair
                </Link>
                <Link 
                  href="tel:647-560-8966" 
                  className="px-8 py-4 rounded-full bg-gray-100 text-gray-900 font-medium transition-all hover:bg-gray-200 text-lg"
                >
                  Call 647-560-8966
                </Link>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="flex justify-center"
            >
              <div className="relative h-[600px] w-full max-w-5xl rounded-3xl overflow-hidden shadow-xl">
                <Image
                  src={eastYorkData.heroImage}
                  alt={`${eastYorkData.name} Appliances`}
                  fill
                  style={{ objectFit: 'cover' }}
                  className="transition-transform hover:scale-105 duration-700"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <ServicesSectionArea areaName={eastYorkData.name} />
      
      {/* East York Communities Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-semibold text-gray-900 mb-4">
                Serving All East York Communities
              </h2>
              <p className="text-xl text-gray-500 max-w-3xl mx-auto">
                From charming post-war neighborhoods to modern developments, we provide expert appliance repair throughout East York
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Classic East York */}
              <div className="bg-[#f5f5f7] rounded-3xl overflow-hidden shadow-sm transition-all hover:shadow-md">
                <div className="relative h-64">
                  <Image 
                    src="/images/eastyork-classic.jpg"
                    alt="Classic East York Neighborhoods"
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-medium text-gray-900 mb-2">Classic East York</h3>
                  <p className="text-gray-600">
                    We provide specialized service to Old East York, Broadview North, and Woodbine Heights, with expertise in maintaining appliances in charming post-war bungalows and semi-detached homes that require knowledge of both vintage and modern systems.
                  </p>
                </div>
              </div>
              
              {/* Danforth Area */}
              <div className="bg-[#f5f5f7] rounded-3xl overflow-hidden shadow-sm transition-all hover:shadow-md">
                <div className="relative h-64">
                  <Image 
                    src="/images/eastyork-danforth.jpg"
                    alt="Danforth Area"
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-medium text-gray-900 mb-2">Danforth Area</h3>
                  <p className="text-gray-600">
                    Our technicians service Danforth Village, Pape Village, and surrounding neighborhoods, providing expert repairs for homes and businesses along this vibrant corridor of East York with fast response times.
                  </p>
                </div>
              </div>
              
              {/* Apartment Communities */}
              <div className="bg-[#f5f5f7] rounded-3xl overflow-hidden shadow-sm transition-all hover:shadow-md">
                <div className="relative h-64">
                  <Image 
                    src="/images/eastyork-apartments.jpg"
                    alt="East York Apartment Communities"
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-medium text-gray-900 mb-2">Apartment Communities</h3>
                  <p className="text-gray-600">
                    We provide prompt, reliable service to Thorncliffe Park, Flemingdon Park, and Crescent Town, with technicians who understand the specific needs of these diverse apartment and condominium communities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our new AreaServicesSection */}
      <AreaServicesSection 
        areaName="East York"
        services={eastYorkServices}
      />
      
      {/* Brand Slider Section */}
      <BrandsSliderSection
        title="Top Appliance Brands We Fix"
        subtitle="Our certified East York technicians are experienced in repairing all major appliance brands"
        brands={eastYorkBrands}
        locationName="East York"
      />
      
      {/* Service Area Overview */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-lg">
                  <Image
                    src={eastYorkData.mapImage}
                    alt={`${eastYorkData.name} Service Area Map`}
                    width={600}
                    height={450}
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                <h3 className="text-3xl font-semibold text-[#1d1d1f] mb-6">Our {eastYorkData.name} Coverage</h3>
                <p className="text-[#424245] mb-6 leading-relaxed">
                  {eastYorkData.localInfo.applianceUsage}
                </p>
                <p className="text-[#424245] mb-8 leading-relaxed">
                  {eastYorkData.localInfo.commonIssues}
                </p>
                
                <div className="bg-[#f5f5f7] rounded-2xl p-6 mb-8">
                  <h4 className="text-xl font-medium text-[#1d1d1f] mb-3">About Our {eastYorkData.name} Service</h4>
                  <p className="text-[#424245]">
                    {eastYorkData.localInfo.serviceNotes}
                  </p>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="bg-[#0071e3] rounded-full p-3">
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <p className="text-[#1d1d1f] font-medium">
                    {eastYorkData.responseTime}
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <TestimonialsSection
        title="What Our East York Customers Say"
        subtitle="Read testimonials from satisfied customers across East York neighborhoods"
        testimonials={eastYorkTestimonials}
      />

      {/* Neighborhoods Section */}
      <NeighborhoodSection 
        title={`${eastYorkData.name} Neighborhoods We Serve`}
        description={`From classic neighborhoods to apartment communities, our technicians provide prompt, reliable service throughout ${eastYorkData.name}.`}
        areas={neighborhoodAreas}
        mapImage={eastYorkData.neighborhoodImage}
        companyName="JK"
        companyAddress={eastYorkData.address.street}
      />
      
      {/* Coupon Section */}
      <CouponSection 
        title="Special Offers for East York Residents"
        subtitle="Use these exclusive coupons for same-day appliance repair service in East York"
        mainCoupons={[
          {
            amount: "25",
            type: "Repair",
            forCustomer: "New Customer Discount",
            code: "EY25",
            website: "jkappliancerepair.ca",
            phone: "647-560-8966",
            primaryColor: "#0071e3"
          },
          {
            amount: "15",
            type: "Repair",
            forCustomer: "For Returning Customers",
            code: "EYRETURN15",
            website: "jkappliancerepair.ca",
            phone: "647-560-8966",
            primaryColor: "#0071e3"
          },
          {
            amount: "30",
            type: "Repair",
            forCustomer: "Senior Customer Discount",
            code: "EYSENIOR30",
            website: "jkappliancerepair.ca",
            phone: "647-560-8966",
            primaryColor: "#0071e3"
          }
        ]}
        extraCoupons={[
          {
            amount: "35",
            type: "Refrigerator Repair",
            forCustomer: "Danforth Area Residents",
            code: "EYDANFORTH35",
            website: "jkappliancerepair.ca",
            phone: "647-560-8966",
            primaryColor: "#0071e3"
          },
          {
            amount: "25",
            type: "Washer Repair",
            forCustomer: "Thorncliffe Park Residents",
            code: "EYTHORN25",
            website: "jkappliancerepair.ca",
            phone: "647-560-8966",
            primaryColor: "#0071e3"
          }
        ]}
      />
      
      {/* Blog Section */}
      <BlogSection 
        title="Appliance Tips for East York Residents"
        subtitle="Helpful guides and maintenance tips specifically for East York homeowners and residents"
        areaId="eastyork"
        showCategories={true}
        limit={3}
        viewAllLink={true}
      />
      
      {/* Booking Section */}
      <BookingSection />
    </div>
  );
} 