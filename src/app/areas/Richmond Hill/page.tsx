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

// Richmond Hill area data
const richmondHillData = {
  id: 'richmondhill',
  name: 'Richmond Hill',
  fullName: 'Richmond Hill, Ontario',
  description: 'From luxury estates in Bayview Hill to family homes in Oak Ridges, our appliance repair technicians provide prompt service throughout Richmond Hill with same-day appointments available.',
  heroImage: '/images/richmondhill-skyline.webp',
  neighborhoodImage: '/images/richmondhill-map.webp',
  mapImage: '/images/richmondhill.webp',
  
  // Location information
  address: {
    street: '18 Yonge St',
    city: 'Toronto',
    province: 'ON',
    postalCode: 'M5E 1Z8',
  },
  
  // Service radius and coverage details
  serviceRadius: '25',
  responseTime: 'Same-day service available in all Richmond Hill neighborhoods',
  
  // Neighborhoods served
  neighborhoods: [
    'Bayview Hill',
    'Oak Ridges',
    'Mill Pond',
    'Headford',
    'Elgin Mills',
    'Jefferson',
    'Richvale',
    'Beaver Creek',
    'North Richvale',
    'Crosby',
    'Langstaff',
    'Harding',
    'Rouge Woods',
    'Lake Wilcox',
    'Doncrest',
    'David Dunlap Observatory',
    'Windham',
    'Tower Hill',
    'Bayview Glen',
    'Gormley',
    'Beverly Acres',
    'French Royalist'
  ],
  
  // Most common services in this area
  popularServices: [
    {
      id: 'refrigerator-repair',
      name: 'Refrigerator Repair',
      image: '/images/services/refrigerator-repair.webp',
      description: 'Expert refrigerator repair for all major brands in Richmond Hill.'
    },
    {
      id: 'washer-repair',
      name: 'Washer Repair',
      image: '/images/services/washer-repair.webp',
      description: 'Professional washing machine repairs for homes throughout Richmond Hill.'
    },
    {
      id: 'dryer-repair',
      name: 'Dryer Repair',
      image: '/images/services/dryer-repair.webp',
      description: 'Fast, reliable dryer repair services throughout Richmond Hill.'
    },
    {
      id: 'dishwasher-repair',
      name: 'Dishwasher Repair',
      image: '/images/services/dishwasher-repair.webp',
      description: 'Expert dishwasher technicians serving the Richmond Hill area.'
    }
  ],
  
  // Recent projects in this area
  recentProjects: [
    {
      title: 'Premium Home Appliance Suite',
      location: 'Bayview Hill, Richmond Hill',
      description: 'Complete high-end appliance installation and maintenance for a luxury estate in the prestigious Bayview Hill neighborhood.',
      image: '/images/projects/richmondhill-luxury.webp'
    },
    {
      title: 'Restaurant Equipment Repair',
      location: 'Yonge Street, Richmond Hill',
      description: 'Commercial kitchen equipment repair for a popular restaurant along Yonge Street\'s vibrant dining corridor.',
      image: '/images/projects/richmondhill-restaurant.webp'
    },
    {
      title: 'Smart Home Integration',
      location: 'Oak Ridges, Richmond Hill',
      description: 'Installation and configuration of connected smart appliances throughout a newly built family home in Oak Ridges.',
      image: '/images/projects/richmondhill-smarthome.webp'
    }
  ],
  
  // Local information - tailored for Richmond Hill
  localInfo: {
    applianceUsage: "Richmond Hill features a mix of luxury estates in areas like Bayview Hill, spacious family homes in Oak Ridges, and elegant townhomes near the city center. Our technicians are experienced with both premium appliance brands common in high-end homes and family-friendly models found throughout the community.",
    commonIssues: "In Richmond Hill's luxury neighborhoods, we frequently service high-end European appliances that require specialized knowledge. In family-centered communities, we commonly address issues with high-efficiency washers, dryers, and refrigerators designed for busy households with children.",
    serviceNotes: "Our Richmond Hill technicians are familiar with all areas from southern communities near Highway 7 to northern neighborhoods in Oak Ridges, providing exceptional service with specialized knowledge of both premium and standard appliance models."
  }
};

// Sample services data for Richmond Hill
const richmondHillServices: AreaServiceItem[] = [
  {
    id: 'refrigerator-repair',
    name: 'Refrigerator Repair',
    image: '/images/services/refrigerator-repair.webp',
    description: 'Our Richmond Hill refrigerator repair technicians can fix all brands and models of refrigerators. From cooling issues to ice maker problems, our experts can diagnose and repair your refrigerator quickly and efficiently. We service all Richmond Hill neighborhoods with same-day appointments available.',
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
    image: '/images/services/washer-repair.webp',
    description: 'Our washer repair services in Richmond Hill cover all major brands and models. Whether your washing machine is leaking, not spinning, or making unusual noises, our skilled technicians can identify the problem and provide efficient, long-lasting repairs right in your Richmond Hill home.',
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
    image: '/images/services/dryer-repair.webp',
    description: 'When your dryer stops working properly in Richmond Hill, our expert technicians are just a call away. We repair all types of dryers including gas and electric models. From heating issues to strange noises, our Richmond Hill team can solve your dryer problems quickly and effectively.',
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
    image: '/images/services/dishwasher-repair.webp',
    description: 'Our Richmond Hill dishwasher repair services cover all brands and models. We fix common issues like poor cleaning performance, leaking, and drainage problems. Our experienced technicians provide fast, reliable dishwasher repairs throughout Richmond Hill, often on the same day you call.',
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
    image: '/images/services/oven-repair.webp',
    description: 'For oven and stove repairs in Richmond Hill, our technicians are experienced with all types including gas, electric, and induction. Whether your oven isn\'t heating properly or your stove burners won\'t light, we provide expert diagnoses and repairs throughout the Richmond Hill area.',
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

// Brand data for Richmond Hill
const richmondHillBrands: BrandItem[] = [
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

// Richmond Hill testimonials
const richmondHillTestimonials: TestimonialItem[] = [
  {
    name: "Jonathan P.",
    location: "Bayview Hill, Richmond Hill",
    rating: 5,
    text: "JK Appliance provided exceptional service for our built-in refrigerator and wine cooler. The technician was knowledgeable about our high-end European brands and completed the repairs efficiently. Very impressed with their professionalism.",
    date: "May 2023"
  },
  {
    name: "Michelle K.",
    location: "Oak Ridges, Richmond Hill",
    rating: 5,
    text: "When our family's washer broke down with a house full of guests, JK Appliance came the same day. The technician was friendly, explained everything clearly, and had our machine running perfectly within the hour. Highly recommend!",
    date: "April 2023"
  },
  {
    name: "Robert L.",
    location: "Mill Pond, Richmond Hill",
    rating: 5,
    text: "I've used JK Appliance for several repairs in our home. Their technicians are always professional, arrive on time, and fix the problem right the first time. They're now our go-to for all appliance issues.",
    date: "June 2023"
  },
  {
    name: "Sandra T.",
    location: "Elgin Mills, Richmond Hill",
    rating: 5,
    text: "Our smart oven was having connectivity issues that other companies couldn't fix. JK Appliance sent a technician who understood both the appliance and the technology. Problem solved quickly and efficiently!",
    date: "March 2023"
  }
];

// Custom Richmond Hill page
export default function RichmondHillAreaPage() {
  // Convert string neighborhoods to AreaData format for NeighborhoodSection
  const neighborhoodAreas: AreaData[] = richmondHillData.neighborhoods.map((name, index) => ({
    id: `${richmondHillData.id}-neighborhood-${index}`,
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
                Appliance Repair in {richmondHillData.name}
              </h1>
              <p className="text-xl sm:text-2xl text-gray-500 mb-12 max-w-3xl mx-auto font-light leading-relaxed">
                Fast, reliable appliance repair services throughout {richmondHillData.name} with same-day service available. Serving all neighborhoods in the {richmondHillData.fullName} area.
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
                  src={richmondHillData.heroImage}
                  alt={`${richmondHillData.name} Appliances`}
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
      <ServicesSectionArea areaName={richmondHillData.name} />
      
      {/* Richmond Hill Communities Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-semibold text-gray-900 mb-4">
                Serving All Richmond Hill Communities
              </h2>
              <p className="text-xl text-gray-500 max-w-3xl mx-auto">
                From upscale Bayview Hill to family-friendly Oak Ridges, we provide expert appliance repair throughout Richmond Hill
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Bayview Hill & Luxury Communities */}
              <div className="bg-[#f5f5f7] rounded-3xl overflow-hidden shadow-sm transition-all hover:shadow-md">
                <div className="relative h-64">
                  <Image 
                    src="/images/richmondhill-bayview.webp"
                    alt="Bayview Hill, Richmond Hill"
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-medium text-gray-900 mb-2">Bayview Hill & Luxury Areas</h3>
                  <p className="text-gray-600">
                    We provide specialized service to Bayview Hill, Richvale, and other premium neighborhoods, with expertise in maintaining high-end European and designer appliances found in Richmond Hill's luxury estates.
                  </p>
                </div>
              </div>
              
              {/* Central Richmond Hill */}
              <div className="bg-[#f5f5f7] rounded-3xl overflow-hidden shadow-sm transition-all hover:shadow-md">
                <div className="relative h-64">
                  <Image 
                    src="/images/richmondhill-central.webp"
                    alt="Central Richmond Hill"
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-medium text-gray-900 mb-2">Central Richmond Hill</h3>
                  <p className="text-gray-600">
                    Our technicians service Mill Pond, Headford, Beaver Creek, and surrounding neighborhoods, providing expert repairs for a wide range of appliances in these established residential communities.
                  </p>
                </div>
              </div>
              
              {/* Oak Ridges & Northern Communities */}
              <div className="bg-[#f5f5f7] rounded-3xl overflow-hidden shadow-sm transition-all hover:shadow-md">
                <div className="relative h-64">
                  <Image 
                    src="/images/richmondhill-oakridges.webp"
                    alt="Oak Ridges, Richmond Hill"
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-medium text-gray-900 mb-2">Oak Ridges & North</h3>
                  <p className="text-gray-600">
                    We provide prompt, reliable service to Oak Ridges, Lake Wilcox, Jefferson, and other northern communities, with technicians who understand the specific needs of these family-oriented neighborhoods with newer homes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our AreaServicesSection */}
      <AreaServicesSection 
        areaName="Richmond Hill"
        services={richmondHillServices}
      />
      
      {/* Brand Slider Section */}
      <BrandsSliderSection
        title="Top Appliance Brands We Fix"
        subtitle="Our certified Richmond Hill technicians are experienced in repairing all major appliance brands"
        brands={richmondHillBrands}
        locationName="Richmond Hill"
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
                    src={richmondHillData.mapImage}
                    alt={`${richmondHillData.name} Service Area Map`}
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
                <h3 className="text-3xl font-semibold text-[#1d1d1f] mb-6">Our {richmondHillData.name} Coverage</h3>
                <p className="text-[#424245] mb-6 leading-relaxed">
                  {richmondHillData.localInfo.applianceUsage}
                </p>
                <p className="text-[#424245] mb-8 leading-relaxed">
                  {richmondHillData.localInfo.commonIssues}
                </p>
                
                <div className="bg-[#f5f5f7] rounded-2xl p-6 mb-8">
                  <h4 className="text-xl font-medium text-[#1d1d1f] mb-3">About Our {richmondHillData.name} Service</h4>
                  <p className="text-[#424245]">
                    {richmondHillData.localInfo.serviceNotes}
                  </p>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="bg-[#0071e3] rounded-full p-3">
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <p className="text-[#1d1d1f] font-medium">
                    {richmondHillData.responseTime}
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <TestimonialsSection
        title="What Our Richmond Hill Customers Say"
        subtitle="Read testimonials from satisfied customers across Richmond Hill neighborhoods"
        testimonials={richmondHillTestimonials}
      />

      {/* Neighborhoods Section */}
      <NeighborhoodSection 
        title={`${richmondHillData.name} Neighborhoods We Serve`}
        description={`From upscale Bayview Hill to family-friendly Oak Ridges, our technicians provide prompt, reliable service throughout ${richmondHillData.name}.`}
        areas={neighborhoodAreas}
        mapImage={richmondHillData.neighborhoodImage}
        companyName="JK"
        companyAddress={richmondHillData.address.street}
      />
      
      {/* Coupon Section */}
      <CouponSection 
        title="Special Offers for Richmond Hill Residents"
        subtitle="Use these exclusive coupons for same-day appliance repair service in Richmond Hill"
        mainCoupons={[
          {
            amount: "25",
            type: "Repair",
            forCustomer: "New Customer Discount",
            code: "RH25",
            website: "jkappliancerepair.ca",
            phone: "647-560-8966",
            primaryColor: "#0071e3"
          },
          {
            amount: "15",
            type: "Repair",
            forCustomer: "For Returning Customers",
            code: "RHRETURN15",
            website: "jkappliancerepair.ca",
            phone: "647-560-8966",
            primaryColor: "#0071e3"
          },
          {
            amount: "30",
            type: "Repair",
            forCustomer: "Senior Customer Discount",
            code: "RHSENIOR30",
            website: "jkappliancerepair.ca",
            phone: "647-560-8966",
            primaryColor: "#0071e3"
          }
        ]}
        extraCoupons={[
          {
            amount: "35",
            type: "Refrigerator Repair",
            forCustomer: "Bayview Hill Residents",
            code: "RHBAYVIEW35",
            website: "jkappliancerepair.ca",
            phone: "647-560-8966",
            primaryColor: "#0071e3"
          },
          {
            amount: "25",
            type: "Washer Repair",
            forCustomer: "Oak Ridges Residents",
            code: "RHOAKRIDGES25",
            website: "jkappliancerepair.ca",
            phone: "647-560-8966",
            primaryColor: "#0071e3"
          }
        ]}
      />
      
      {/* Blog Section */}
      <BlogSection 
        title="Appliance Tips for Richmond Hill Residents"
        subtitle="Helpful guides and maintenance tips specifically for Richmond Hill homeowners and residents"
        areaId="richmondhill"
        showCategories={true}
        limit={3}
        viewAllLink={true}
      />
      
      {/* Booking Section */}
      <BookingSection />
    </div>
  );
} 