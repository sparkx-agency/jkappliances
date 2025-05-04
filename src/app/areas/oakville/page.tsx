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

// Oakville area data
const oakvilleData = {
  id: 'oakville',
  name: 'Oakville',
  fullName: 'Oakville, Ontario',
  description: 'From lakefront estates in Old Oakville to family homes in Glen Abbey, our appliance repair technicians provide prompt service throughout Oakville with same-day appointments available.',
  heroImage: '/images/oakville-skyline.webp',
  neighborhoodImage: '/images/oakville-map.webp',
  mapImage: '/images/oakville.webp',
  
  // Location information
  address: {
    street: '18 Yonge St',
    city: 'Toronto',
    province: 'ON',
    postalCode: 'M5E 1Z8',
  },
  
  // Service radius and coverage details
  serviceRadius: '25',
  responseTime: 'Same-day service available in all Oakville neighborhoods',
  
  // Neighborhoods served
  neighborhoods: [
    'Old Oakville',
    'Bronte',
    'Glen Abbey',
    'West Oak Trails',
    'River Oaks',
    'Clearview',
    'College Park',
    'Iroquois Ridge North',
    'Iroquois Ridge South',
    'Upper Glen Abbey',
    'Eastlake',
    'Joshua Creek',
    'Wedgewood Creek',
    'Falgarwood',
    'Morrison',
    'Kerr Village',
    'Bronte Creek',
    'Westmount',
    'Palermo',
    'West Oak Trails',
    'Glenorchy',
    'Uptown Core'
  ],
  
  // Most common services in this area
  popularServices: [
    {
      id: 'refrigerator-repair',
      name: 'Refrigerator Repair',
      image: '/images/services/refrigerator-repair.webp',
      description: 'Expert refrigerator repair for all major brands in Oakville.'
    },
    {
      id: 'washer-repair',
      name: 'Washer Repair',
      image: '/images/services/washer-repair.webp',
      description: 'Professional washing machine repairs for homes throughout Oakville.'
    },
    {
      id: 'dryer-repair',
      name: 'Dryer Repair',
      image: '/images/services/dryer-repair.webp',
      description: 'Fast, reliable dryer repair services throughout Oakville.'
    },
    {
      id: 'dishwasher-repair',
      name: 'Dishwasher Repair',
      image: '/images/services/dishwasher-repair.webp',
      description: 'Expert dishwasher technicians serving the Oakville area.'
    }
  ],
  
  // Recent projects in this area
  recentProjects: [
    {
      title: 'Luxury Home Appliance Service',
      location: 'Lakefront, Oakville',
      description: 'Complete high-end appliance installation and maintenance for a luxury waterfront estate in Old Oakville.',
      image: '/images/projects/oakville-luxury.webp'
    },
    {
      title: 'Restaurant Equipment Repair',
      location: 'Downtown Oakville',
      description: 'Commercial kitchen equipment repair for a popular restaurant in Oakville\'s vibrant downtown district.',
      image: '/images/projects/oakville-restaurant.webp'
    },
    {
      title: 'Smart Home Integration',
      location: 'Joshua Creek, Oakville',
      description: 'Installation and configuration of connected smart appliances for a newly built custom home in Joshua Creek.',
      image: '/images/projects/oakville-smarthome.webp'
    }
  ],
  
  // Local information - tailored for Oakville
  localInfo: {
    applianceUsage: "Oakville features a mix of historic homes in Old Oakville and Bronte, spacious executive homes in areas like Glen Abbey and Joshua Creek, and newer family-friendly developments in River Oaks and Iroquois Ridge. Our technicians are experienced with both premium appliance brands common in Oakville's luxury homes and quality family-oriented models.",
    commonIssues: "In Oakville's luxury lakefront neighborhoods, we frequently service high-end European appliances and built-in systems. In family-focused communities like Glen Abbey and River Oaks, we commonly address issues with high-capacity washers, dryers, and refrigerators designed for active households.",
    serviceNotes: "Our Oakville technicians are familiar with all areas from the historic lakefront neighborhoods to newer northern developments, providing exceptional service with specialized knowledge of both premium brands and everyday appliances in this prestigious community."
  }
};

// Sample services data for Oakville
const oakvilleServices: AreaServiceItem[] = [
  {
    id: 'refrigerator-repair',
    name: 'Refrigerator Repair',
    image: '/images/services/refrigerator-repair.webp',
    description: 'Our Oakville refrigerator repair technicians can fix all brands and models of refrigerators. From cooling issues to ice maker problems, our experts can diagnose and repair your refrigerator quickly and efficiently. We service all Oakville neighborhoods with same-day appointments available.',
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
    description: 'Our washer repair services in Oakville cover all major brands and models. Whether your washing machine is leaking, not spinning, or making unusual noises, our skilled technicians can identify the problem and provide efficient, long-lasting repairs right in your Oakville home.',
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
    description: 'When your dryer stops working properly in Oakville, our expert technicians are just a call away. We repair all types of dryers including gas and electric models. From heating issues to strange noises, our Oakville team can solve your dryer problems quickly and effectively.',
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
    description: 'Our Oakville dishwasher repair services cover all brands and models. We fix common issues like poor cleaning performance, leaking, and drainage problems. Our experienced technicians provide fast, reliable dishwasher repairs throughout Oakville, often on the same day you call.',
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
    description: 'For oven and stove repairs in Oakville, our technicians are experienced with all types including gas, electric, and induction. Whether your oven isn\'t heating properly or your stove burners won\'t light, we provide expert diagnoses and repairs throughout the Oakville area.',
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

// Brand data for Oakville
const oakvilleBrands: BrandItem[] = [
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

// Oakville testimonials
const oakvilleTestimonials: TestimonialItem[] = [
  {
    name: "Victoria L.",
    location: "Old Oakville",
    rating: 5,
    text: "JK Appliance provided exceptional service when our Sub-Zero refrigerator stopped working. The technician was knowledgeable about our high-end appliances and fixed the issue quickly. Very professional and respectful of our home.",
    date: "May 2023"
  },
  {
    name: "Robert K.",
    location: "Glen Abbey, Oakville",
    rating: 5,
    text: "When our family's washer and dryer both had issues in the same week, JK Appliance came through with fast service. The technician was friendly, efficient, and explained everything clearly. Highly recommend for Oakville residents!",
    date: "April 2023"
  },
  {
    name: "Jennifer P.",
    location: "Bronte, Oakville",
    rating: 5,
    text: "I've used JK Appliance for our heritage home's kitchen appliances. They understand the challenges of integrating modern appliance technology with older homes and always provide excellent solutions and service.",
    date: "June 2023"
  },
  {
    name: "Thomas G.",
    location: "River Oaks, Oakville",
    rating: 5,
    text: "Our smart oven was having connection issues that other companies couldn't resolve. JK Appliance sent a technician who understood both the appliance and the technology. Problem solved on the first visit!",
    date: "March 2023"
  }
];

// Custom Oakville page
export default function OakvilleAreaPage() {
  // Convert string neighborhoods to AreaData format for NeighborhoodSection
  const neighborhoodAreas: AreaData[] = oakvilleData.neighborhoods.map((name, index) => ({
    id: `${oakvilleData.id}-neighborhood-${index}`,
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
                Appliance Repair in {oakvilleData.name}
              </h1>
              <p className="text-xl sm:text-2xl text-gray-500 mb-12 max-w-3xl mx-auto font-light leading-relaxed">
                Fast, reliable appliance repair services throughout {oakvilleData.name} with same-day service available. Serving all neighborhoods in the {oakvilleData.fullName} area.
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
                  src={oakvilleData.heroImage}
                  alt={`${oakvilleData.name} Appliances`}
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
      <ServicesSectionArea areaName={oakvilleData.name} />
      
      {/* Oakville Areas Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-semibold text-gray-900 mb-4">
                Serving All Oakville Communities
              </h2>
              <p className="text-xl text-gray-500 max-w-3xl mx-auto">
                From historic lakefront estates to family-friendly northern neighborhoods, we provide expert appliance repair throughout Oakville
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Lakefront & Heritage Areas */}
              <div className="bg-[#f5f5f7] rounded-3xl overflow-hidden shadow-sm transition-all hover:shadow-md">
                <div className="relative h-64">
                  <Image 
                    src="/images/oakville-historic.webp"
                    alt="Historic Oakville"
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-medium text-gray-900 mb-2">Lakefront & Heritage Areas</h3>
                  <p className="text-gray-600">
                    We provide specialized service to Old Oakville, Bronte, and other lakefront communities, with expertise in maintaining high-end appliances in heritage homes and luxury waterfront estates that require custom solutions.
                  </p>
                </div>
              </div>
              
              {/* Established Family Neighborhoods */}
              <div className="bg-[#f5f5f7] rounded-3xl overflow-hidden shadow-sm transition-all hover:shadow-md">
                <div className="relative h-64">
                  <Image 
                    src="/images/oakville-established.webp"
                    alt="Established Oakville Neighborhoods"
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-medium text-gray-900 mb-2">Established Neighborhoods</h3>
                  <p className="text-gray-600">
                    Our technicians service Glen Abbey, College Park, Morrison, and other established communities, providing expert repairs for a wide range of quality appliances in these well-developed residential areas.
                  </p>
                </div>
              </div>
              
              {/* Newer Northern Communities */}
              <div className="bg-[#f5f5f7] rounded-3xl overflow-hidden shadow-sm transition-all hover:shadow-md">
                <div className="relative h-64">
                  <Image 
                    src="/images/oakville-newer.webp"
                    alt="New Oakville Developments"
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-medium text-gray-900 mb-2">Northern Communities</h3>
                  <p className="text-gray-600">
                    We provide prompt, reliable service to River Oaks, Joshua Creek, Iroquois Ridge, and other newer northern neighborhoods, with technicians specially trained to work with smart appliances and high-efficiency systems in modern homes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our AreaServicesSection */}
      <AreaServicesSection 
        areaName="Oakville"
        services={oakvilleServices}
      />
      
      {/* Brand Slider Section */}
      <BrandsSliderSection
        title="Top Appliance Brands We Fix"
        subtitle="Our certified Oakville technicians are experienced in repairing all major appliance brands"
        brands={oakvilleBrands}
        locationName="Oakville"
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
                    src={oakvilleData.mapImage}
                    alt={`${oakvilleData.name} Service Area Map`}
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
                <h3 className="text-3xl font-semibold text-[#1d1d1f] mb-6">Our {oakvilleData.name} Coverage</h3>
                <p className="text-[#424245] mb-6 leading-relaxed">
                  {oakvilleData.localInfo.applianceUsage}
                </p>
                <p className="text-[#424245] mb-8 leading-relaxed">
                  {oakvilleData.localInfo.commonIssues}
                </p>
                
                <div className="bg-[#f5f5f7] rounded-2xl p-6 mb-8">
                  <h4 className="text-xl font-medium text-[#1d1d1f] mb-3">About Our {oakvilleData.name} Service</h4>
                  <p className="text-[#424245]">
                    {oakvilleData.localInfo.serviceNotes}
                  </p>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="bg-[#0071e3] rounded-full p-3">
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <p className="text-[#1d1d1f] font-medium">
                    {oakvilleData.responseTime}
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <TestimonialsSection
        title="What Our Oakville Customers Say"
        subtitle="Read testimonials from satisfied customers across Oakville neighborhoods"
        testimonials={oakvilleTestimonials}
      />

      {/* Neighborhoods Section */}
      <NeighborhoodSection 
        title={`${oakvilleData.name} Neighborhoods We Serve`}
        description={`From lakefront estates to northern family neighborhoods, our technicians provide prompt, reliable service throughout ${oakvilleData.name}.`}
        areas={neighborhoodAreas}
        mapImage={oakvilleData.neighborhoodImage}
        companyName="JK"
        companyAddress={oakvilleData.address.street}
      />
      
      {/* Coupon Section */}
      <CouponSection 
        title="Special Offers for Oakville Residents"
        subtitle="Use these exclusive coupons for same-day appliance repair service in Oakville"
        mainCoupons={[
          {
            amount: "25",
            type: "Repair",
            forCustomer: "New Customer Discount",
            code: "OAK25",
            website: "jkappliancerepair.ca",
            phone: "647-560-8966",
            primaryColor: "#0071e3"
          },
          {
            amount: "15",
            type: "Repair",
            forCustomer: "For Returning Customers",
            code: "OAKRETURN15",
            website: "jkappliancerepair.ca",
            phone: "647-560-8966",
            primaryColor: "#0071e3"
          },
          {
            amount: "30",
            type: "Repair",
            forCustomer: "Senior Customer Discount",
            code: "OAKSENIOR30",
            website: "jkappliancerepair.ca",
            phone: "647-560-8966",
            primaryColor: "#0071e3"
          }
        ]}
        extraCoupons={[
          {
            amount: "35",
            type: "Refrigerator Repair",
            forCustomer: "Lakefront Residents",
            code: "OAKLAKE35",
            website: "jkappliancerepair.ca",
            phone: "647-560-8966",
            primaryColor: "#0071e3"
          },
          {
            amount: "25",
            type: "Washer Repair",
            forCustomer: "Glen Abbey Residents",
            code: "OAKGLEN25",
            website: "jkappliancerepair.ca",
            phone: "647-560-8966",
            primaryColor: "#0071e3"
          }
        ]}
      />
      
      {/* Blog Section */}
      <BlogSection 
        title="Appliance Tips for Oakville Residents"
        subtitle="Helpful guides and maintenance tips specifically for Oakville homeowners and residents"
        areaId="oakville"
        showCategories={true}
        limit={3}
        viewAllLink={true}
      />
      
      {/* Booking Section */}
      <BookingSection />
    </div>
  );
} 