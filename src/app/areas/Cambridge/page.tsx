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
import AppleTestimonialsSection from '@/components/sections/AppleTestimonialsSection';

// Cambridge area data
const cambridgeData = {
  id: 'cambridge',
  name: 'Cambridge',
  fullName: 'Cambridge, Ontario',
  description: 'From historic Galt to Preston and Hespeler, our appliance repair technicians provide prompt service throughout Cambridge with same-day appointments available.',
  heroImage: '/images/areas/areas-hero.webp',
  neighborhoodImage: '/images/cambridge-map.webp',
  mapImage: '/images/cambridge.webp',
  
  // Location information
  address: {
    street: '18 Yonge St',
    city: 'Toronto',
    province: 'ON',
    postalCode: 'M5E 1Z8',
  },
  
  // Service radius and coverage details
  serviceRadius: '25',
  responseTime: 'Same-day service available in all Cambridge neighborhoods',
  
  // Neighborhoods served
  neighborhoods: [
    'Galt',
    'Preston',
    'Hespeler',
    'Blair',
    'Branchton',
    'Carlisle',
    'Clyde',
    'Countryside',
    'Dickie Settlement',
    'Galt City Centre',
    'North Cambridge',
    'South Cambridge',
    'West Galt',
    'Preston Heights',
    'East Preston',
    'Hespeler Village',
    'Greenway-Chaplin',
    'Shades Mill',
    'Fiddlesticks',
    'Lang\'s Farm',
    'Saginaw',
    'Inverness'
  ],
  
  // Most common services in this area
  popularServices: [
    {
      id: 'refrigerator-repair',
      name: 'Refrigerator Repair',
      image: '/images/services/refrigerator-repair.webp',
      description: 'Expert refrigerator repair for all major brands in Cambridge.'
    },
    {
      id: 'washer-repair',
      name: 'Washer Repair',
      image: '/images/services/washer-repair.webp',
      description: 'Professional washing machine repairs for families throughout Cambridge.'
    },
    {
      id: 'dryer-repair',
      name: 'Dryer Repair',
      image: '/images/services/dryer-repair.webp',
      description: 'Fast, reliable dryer repair services throughout Cambridge.'
    },
    {
      id: 'dishwasher-repair',
      name: 'Dishwasher Repair',
      image: '/images/services/dishwasher-repair.webp',
      description: 'Expert dishwasher technicians serving the Cambridge area.'
    }
  ],
  
  // Recent projects in this area
  recentProjects: [
    {
      title: 'Heritage Home Appliance Service',
      location: 'Galt, Cambridge',
      description: 'Complete appliance upgrade for a beautifully preserved historic home in Galt.',
      image: '/images/projects/cambridge-heritage.webp'
    },
    {
      title: 'Restaurant Equipment Repair',
      location: 'Hespeler, Cambridge',
      description: 'Commercial kitchen equipment repair for a local restaurant in Hespeler Village.',
      image: '/images/projects/cambridge-restaurant.webp'
    },
    {
      title: 'New Home Appliance Setup',
      location: 'Preston, Cambridge',
      description: 'Installation and configuration of all major appliances in a new build home.',
      image: '/images/projects/cambridge-newhome.webp'
    }
  ],
  
  // Testimonials specific to this area
  testimonials: [
    {
      text: "The technician was prompt, professional, and fixed our dishwasher on the first visit. Excellent service!",
      author: "Robert S.",
      location: "Galt, Cambridge",
      rating: 5
    },
    {
      text: "Had an emergency with my fridge on a weekend and they came within hours. Great service at a reasonable price.",
      author: "Emma L.",
      location: "Preston, Cambridge",
      rating: 5
    },
    {
      text: "JK has been servicing our appliances for years - always reliable, honest, and skilled technicians.",
      author: "Thomas H.",
      location: "Hespeler, Cambridge",
      rating: 5
    }
  ],
  
  // Local information - tailored for Cambridge
  localInfo: {
    applianceUsage: "Cambridge residents live in a diverse mix of heritage homes in Galt, established family neighborhoods in Preston, and newer developments in North Cambridge. Our technicians understand the unique requirements of both historic properties and modern homes.",
    commonIssues: "In Cambridge's historic areas like Galt and Hespeler Village, we often address issues with appliances in older homes that have specific space or electrical requirements. In newer developments, we frequently service high-efficiency and smart appliances that need specialized expertise.",
    serviceNotes: "Our Cambridge technicians are familiar with the city's unique tri-city layout and serve all communities from Galt to Preston to Hespeler with equal expertise and response times."
  }
};

// Sample services data for Cambridge
const cambridgeServices: AreaServiceItem[] = [
  {
    id: 'refrigerator-repair',
    name: 'Refrigerator Repair',
    image: '/images/services/refrigerator-repair.webp',
    description: 'Our Cambridge refrigerator repair technicians can fix all brands and models of refrigerators. From cooling issues to ice maker problems, our experts can diagnose and repair your refrigerator quickly and efficiently. We service all Cambridge neighborhoods with same-day appointments available.',
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
    description: 'Our washer repair services in Cambridge cover all major brands and models. Whether your washing machine is leaking, not spinning, or making unusual noises, our skilled technicians can identify the problem and provide efficient, long-lasting repairs right in your Cambridge home.',
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
    description: 'When your dryer stops working properly in Cambridge, our expert technicians are just a call away. We repair all types of dryers including gas and electric models. From heating issues to strange noises, our Cambridge team can solve your dryer problems quickly and effectively.',
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
    description: 'Our Cambridge dishwasher repair services cover all brands and models. We fix common issues like poor cleaning performance, leaking, and drainage problems. Our experienced technicians provide fast, reliable dishwasher repairs throughout Cambridge, often on the same day you call.',
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
    description: 'For oven and stove repairs in Cambridge, our technicians are experienced with all types including gas, electric, and induction. Whether your oven isn\'t heating properly or your stove burners won\'t light, we provide expert diagnoses and repairs throughout the Cambridge area.',
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

// Brand data for Cambridge
const cambridgeBrands: BrandItem[] = [
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

// Cambridge testimonials
const cambridgeTestimonials: TestimonialItem[] = [
  {
    name: "Robert S.",
    location: "Galt, Cambridge",
    rating: 5,
    text: "The technician was prompt, professional, and fixed our dishwasher on the first visit. He explained what was wrong and how to prevent future issues. Excellent service at a fair price!",
    date: "May 2023"
  },
  {
    name: "Emma L.",
    location: "Preston, Cambridge",
    rating: 5,
    text: "Had an emergency with my fridge on a weekend and JK Appliance came within hours. The technician knew exactly what was wrong and had the parts to fix it immediately. Great service at a reasonable price.",
    date: "April 2023"
  },
  {
    name: "Thomas H.",
    location: "Hespeler, Cambridge",
    rating: 5,
    text: "JK has been servicing our appliances for years - always reliable, honest, and skilled technicians. Recently they fixed our washer when another company said it needed to be replaced. Saved us hundreds of dollars!",
    date: "June 2023"
  },
  {
    name: "Sarah M.",
    location: "North Cambridge",
    rating: 5,
    text: "When our dryer stopped heating, JK Appliance had a technician at our home the same day. He diagnosed the problem quickly and had it fixed within an hour. Very impressive service and professionalism.",
    date: "March 2023"
  }
];

// Custom Cambridge page
export default function CambridgeAreaPage() {
  // Convert string neighborhoods to AreaData format for NeighborhoodSection
  const neighborhoodAreas: AreaData[] = cambridgeData.neighborhoods.map((name, index) => ({
    id: `${cambridgeData.id}-neighborhood-${index}`,
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
                Appliance Repair in {cambridgeData.name}
              </h1>
              <p className="text-xl sm:text-2xl text-gray-500 mb-12 max-w-3xl mx-auto font-light leading-relaxed">
                Fast, reliable appliance repair services throughout {cambridgeData.name} with same-day service available. Serving all neighborhoods in the {cambridgeData.fullName} area.
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
                  src={cambridgeData.heroImage}
                  alt={`${cambridgeData.name} Appliances`}
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
      <ServicesSectionArea areaName={cambridgeData.name} />
      
      {/* Cambridge Areas Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-semibold text-gray-900 mb-4">
                Serving All Cambridge Communities
              </h2>
              <p className="text-xl text-gray-500 max-w-3xl mx-auto">
                From historic Galt to Preston and Hespeler, we provide expert appliance repair throughout Cambridge
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Galt */}
              <div className="bg-[#f5f5f7] rounded-3xl overflow-hidden shadow-sm transition-all hover:shadow-md">
                <div className="relative h-64">
                  <Image 
                    src="/images/cambridge-galt.webp"
                    alt="Galt, Cambridge"
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-medium text-gray-900 mb-2">Galt</h3>
                  <p className="text-gray-600">
                    We provide specialized service to Galt's historic downtown and surrounding neighborhoods, with expertise in maintaining appliances in heritage homes that often have unique requirements and space constraints.
                  </p>
                </div>
              </div>
              
              {/* Preston */}
              <div className="bg-[#f5f5f7] rounded-3xl overflow-hidden shadow-sm transition-all hover:shadow-md">
                <div className="relative h-64">
                  <Image 
                    src="/images/cambridge-preston.webp"
                    alt="Preston, Cambridge"
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-medium text-gray-900 mb-2">Preston</h3>
                  <p className="text-gray-600">
                    Our technicians service the established family neighborhoods of Preston, Preston Heights, and East Preston, providing expert repairs for all types of appliances in these long-established residential areas.
                  </p>
                </div>
              </div>
              
              {/* Hespeler */}
              <div className="bg-[#f5f5f7] rounded-3xl overflow-hidden shadow-sm transition-all hover:shadow-md">
                <div className="relative h-64">
                  <Image 
                    src="/images/cambridge-hespeler.webp"
                    alt="Hespeler, Cambridge"
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-medium text-gray-900 mb-2">Hespeler</h3>
                  <p className="text-gray-600">
                    We provide prompt, reliable service to Hespeler Village and surrounding areas, with technicians who understand the specific needs of this historic community with its mix of heritage homes and newer developments.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our AreaServicesSection */}
      <AreaServicesSection 
        areaName="Cambridge"
        services={cambridgeServices}
      />
      
      {/* Brand Slider Section */}
      <BrandsSliderSection
        title="Top Appliance Brands We Fix"
        subtitle="Our certified Cambridge technicians are experienced in repairing all major appliance brands"
        brands={cambridgeBrands}
        locationName="Cambridge"
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
                    src={cambridgeData.mapImage}
                    alt={`${cambridgeData.name} Service Area Map`}
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
                <h3 className="text-3xl font-semibold text-[#1d1d1f] mb-6">Our {cambridgeData.name} Coverage</h3>
                <p className="text-[#424245] mb-6 leading-relaxed">
                  {cambridgeData.localInfo.applianceUsage}
                </p>
                <p className="text-[#424245] mb-8 leading-relaxed">
                  {cambridgeData.localInfo.commonIssues}
                </p>
                
                <div className="bg-[#f5f5f7] rounded-2xl p-6 mb-8">
                  <h4 className="text-xl font-medium text-[#1d1d1f] mb-3">About Our {cambridgeData.name} Service</h4>
                  <p className="text-[#424245]">
                    {cambridgeData.localInfo.serviceNotes}
                  </p>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="bg-[#0071e3] rounded-full p-3">
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <p className="text-[#1d1d1f] font-medium">
                    {cambridgeData.responseTime}
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <AppleTestimonialsSection
        title="What Our Cambridge Customers Say"
        subtitle="Read testimonials from satisfied customers across Cambridge neighborhoods"
        maxReviews={4}
      />

      {/* Neighborhoods Section */}
      <NeighborhoodSection 
        title={`${cambridgeData.name} Neighborhoods We Serve`}
        description={`From historic Galt to Preston and Hespeler, our technicians provide prompt, reliable service throughout ${cambridgeData.name}.`}
        areas={neighborhoodAreas}
        mapImage={cambridgeData.neighborhoodImage}
        companyName="JK"
        companyAddress={cambridgeData.address.street}
      />
      
      {/* Coupon Section */}
      <CouponSection 
        title="Special Offers for Cambridge Residents"
        subtitle="Use these exclusive coupons for same-day appliance repair service in Cambridge"
        mainCoupons={[
          {
            amount: "25",
            type: "Repair",
            forCustomer: "New Customer Discount",
            code: "CAM25",
            website: "jkappliancerepair.ca",
            phone: "647-560-8966",
            primaryColor: "#0071e3"
          },
          {
            amount: "15",
            type: "Repair",
            forCustomer: "For Returning Customers",
            code: "CAMRETURN15",
            website: "jkappliancerepair.ca",
            phone: "647-560-8966",
            primaryColor: "#0071e3"
          },
          {
            amount: "30",
            type: "Repair",
            forCustomer: "Senior Customer Discount",
            code: "CAMSENIOR30",
            website: "jkappliancerepair.ca",
            phone: "647-560-8966",
            primaryColor: "#0071e3"
          }
        ]}
        extraCoupons={[
          {
            amount: "35",
            type: "Refrigerator Repair",
            forCustomer: "Galt Residents",
            code: "CAMGALT35",
            website: "jkappliancerepair.ca",
            phone: "647-560-8966",
            primaryColor: "#0071e3"
          },
          {
            amount: "25",
            type: "Washer Repair",
            forCustomer: "Preston Residents",
            code: "CAMPRESTON25",
            website: "jkappliancerepair.ca",
            phone: "647-560-8966",
            primaryColor: "#0071e3"
          }
        ]}
      />
      
      {/* Blog Section */}
      <BlogSection 
        title="Appliance Tips for Cambridge Residents"
        subtitle="Helpful guides and maintenance tips specifically for Cambridge homeowners and residents"
        areaId="cambridge"
        showCategories={true}
        limit={3}
        viewAllLink={true}
      />
      
      {/* Booking Section */}
      <BookingSection />
    </div>
  );
} 