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

// North York area data
const northYorkData = {
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
  popularServices: [
    {
      id: 'refrigerator-repair',
      name: 'Refrigerator Repair',
      image: '/images/services/refrigerator-repair.webp',
      description: 'Expert refrigerator repair for all major brands in North York.'
    },
    {
      id: 'washer-repair',
      name: 'Washer Repair',
      image: '/images/services/washer-repair.webp',
      description: 'Professional washing machine repairs for homes and condos throughout North York.'
    },
    {
      id: 'dryer-repair',
      name: 'Dryer Repair',
      image: '/images/services/dryer-repair.webp',
      description: 'Fast, reliable dryer repair services throughout North York.'
    },
    {
      id: 'dishwasher-repair',
      name: 'Dishwasher Repair',
      image: '/images/services/dishwasher-repair.webp',
      description: 'Expert dishwasher technicians serving the North York area.'
    }
  ],
  
  // Recent projects in this area
  recentProjects: [
    {
      title: 'Luxury Home Appliance Suite',
      location: 'The Bridle Path, North York',
      description: 'Complete high-end appliance installation and maintenance for a luxury estate home in the prestigious Bridle Path area.',
      image: '/images/projects/northyork-luxury.webp'
    },
    {
      title: 'Condo Building Service',
      location: 'Yonge & Sheppard, North York',
      description: 'Regular maintenance and repair program for multiple units in a modern high-rise condominium building near Yonge and Sheppard.',
      image: '/images/projects/northyork-condo.webp'
    },
    {
      title: 'Smart Home Integration',
      location: 'Bayview Village, North York',
      description: 'Installation and configuration of connected smart appliances throughout a newly renovated family home in Bayview Village.',
      image: '/images/projects/northyork-smarthome.webp'
    }
  ],
  
  // Local information - tailored for North York
  localInfo: {
    applianceUsage: "North York features a diverse mix of housing, from luxury estates in The Bridle Path and Hoggs Hollow to modern condos along the Yonge Street corridor and family homes in communities like Willowdale and Bayview Village. Our technicians are experienced with appliances in all types of homes throughout the area.",
    commonIssues: "In North York's luxury neighborhoods, we frequently service high-end European and designer appliances. In condominium buildings, we often address issues with space-efficient appliances and stackable washer/dryer units. In family neighborhoods, we regularly maintain larger capacity appliances designed for busy households.",
    serviceNotes: "Our North York technicians are familiar with all areas from upscale residential neighborhoods to high-density condominium communities, providing exceptional service with specialized knowledge of both premium brands and everyday appliances across this diverse area."
  }
};

// Sample services data for North York
const northYorkServices: AreaServiceItem[] = [
  {
    id: 'refrigerator-repair',
    name: 'Refrigerator Repair',
    image: '/images/services/refrigerator-repair.webp',
    description: 'Our North York refrigerator repair technicians can fix all brands and models of refrigerators. From cooling issues to ice maker problems, our experts can diagnose and repair your refrigerator quickly and efficiently. We service all North York neighborhoods with same-day appointments available.',
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
    description: 'Our washer repair services in North York cover all major brands and models. Whether your washing machine is leaking, not spinning, or making unusual noises, our skilled technicians can identify the problem and provide efficient, long-lasting repairs right in your North York home.',
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
    description: 'When your dryer stops working properly in North York, our expert technicians are just a call away. We repair all types of dryers including gas and electric models. From heating issues to strange noises, our North York team can solve your dryer problems quickly and effectively.',
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
    description: 'Our North York dishwasher repair services cover all brands and models. We fix common issues like poor cleaning performance, leaking, and drainage problems. Our experienced technicians provide fast, reliable dishwasher repairs throughout North York, often on the same day you call.',
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
    description: 'For oven and stove repairs in North York, our technicians are experienced with all types including gas, electric, and induction. Whether your oven isn\'t heating properly or your stove burners won\'t light, we provide expert diagnoses and repairs throughout the North York area.',
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

// North York testimonials
const northYorkTestimonials: TestimonialItem[] = [
  {
    name: "Richard T.",
    location: "The Bridle Path, North York",
    rating: 5,
    text: "JK Appliance provided exceptional service for our Sub-Zero refrigerator and Wolf range. Their technician was highly knowledgeable about luxury appliances and completed the repairs professionally and efficiently. Excellent service for high-end appliances.",
    date: "May 2023"
  },
  {
    name: "Sandra L.",
    location: "Willowdale, North York",
    rating: 5,
    text: "When our washing machine flooded our laundry room, JK Appliance sent a technician within hours. He quickly diagnosed the problem, had the parts on hand, and fixed it on the spot. Their prompt service saved us from further water damage!",
    date: "April 2023"
  },
  {
    name: "Daniel K.",
    location: "Bayview Village, North York",
    rating: 5,
    text: "We've used JK Appliance for several repairs in our home. Their technicians are always professional, knowledgeable, and take the time to explain what's happening. They're our go-to for all appliance issues in our North York home.",
    date: "June 2023"
  },
  {
    name: "Michelle Y.",
    location: "Yonge & Sheppard, North York",
    rating: 5,
    text: "JK Appliance was able to fix our condo's built-in dishwasher that two other companies couldn't repair. Their technician understood the challenges of working with limited space and fixed the issue permanently. Highly recommend for condo owners!",
    date: "March 2023"
  }
];

// Custom North York page
export default function NorthYorkAreaPage() {
  // Convert string neighborhoods to AreaData format for NeighborhoodSection
  const neighborhoodAreas: AreaData[] = northYorkData.neighborhoods.map((name, index) => ({
    id: `${northYorkData.id}-neighborhood-${index}`,
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
                Appliance Repair in {northYorkData.name}
              </h1>
              <p className="text-xl sm:text-2xl text-gray-500 mb-12 max-w-3xl mx-auto font-light leading-relaxed">
                Fast, reliable appliance repair services throughout {northYorkData.name} with same-day service available. Serving all neighborhoods in the {northYorkData.fullName} area.
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
                  src={northYorkData.heroImage}
                  alt={`${northYorkData.name} Appliances`}
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
      <ServicesSectionArea areaName={northYorkData.name} />
      
      {/* North York Areas Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-semibold text-gray-900 mb-4">
                Serving All North York Communities
              </h2>
              <p className="text-xl text-gray-500 max-w-3xl mx-auto">
                From luxury estates to high-rise condos and family neighborhoods, we provide expert appliance repair throughout North York
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Luxury Areas */}
              <div className="bg-[#f5f5f7] rounded-3xl overflow-hidden shadow-sm transition-all hover:shadow-md">
                <div className="relative h-64">
                  <Image 
                    src="/images/northyork-luxury.webp"
                    alt="Luxury North York Neighborhoods"
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-medium text-gray-900 mb-2">Luxury Neighborhoods</h3>
                  <p className="text-gray-600">
                    We provide specialized service to The Bridle Path, Hoggs Hollow, York Mills, and St. Andrew-Windfields, with expertise in maintaining high-end appliances in luxury estates and custom homes that require specialized knowledge and attention.
                  </p>
                </div>
              </div>
              
              {/* Urban Centers & Condos */}
              <div className="bg-[#f5f5f7] rounded-3xl overflow-hidden shadow-sm transition-all hover:shadow-md">
                <div className="relative h-64">
                  <Image 
                    src="/images/northyork-condos.webp"
                    alt="North York Urban Centers"
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-medium text-gray-900 mb-2">Urban Centers & Condos</h3>
                  <p className="text-gray-600">
                    Our technicians are experienced with the unique challenges of servicing appliances in high-rise buildings and condominiums along the Yonge Street corridor, Sheppard Avenue, and throughout North York's urban centers.
                  </p>
                </div>
              </div>
              
              {/* Family Neighborhoods */}
              <div className="bg-[#f5f5f7] rounded-3xl overflow-hidden shadow-sm transition-all hover:shadow-md">
                <div className="relative h-64">
                  <Image 
                    src="/images/northyork-residential.webp"
                    alt="North York Residential Areas"
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-medium text-gray-900 mb-2">Family Neighborhoods</h3>
                  <p className="text-gray-600">
                    We provide prompt, reliable service to Willowdale, Bayview Village, Don Mills, and other residential neighborhoods, with technicians specially trained to work with the full range of appliances found in North York's diverse family homes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our AreaServicesSection */}
      <AreaServicesSection 
        areaName="North York"
        services={northYorkServices}
      />
      
      {/* Brand Slider Section */}
      <BrandsSliderSection
        title="Top Appliance Brands We Fix"
        subtitle="Our certified North York technicians are experienced in repairing all major appliance brands"
        brands={northYorkBrands}
        locationName="North York"
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
                    src={northYorkData.mapImage}
                    alt={`${northYorkData.name} Service Area Map`}
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
                <h3 className="text-3xl font-semibold text-[#1d1d1f] mb-6">Our {northYorkData.name} Coverage</h3>
                <p className="text-[#424245] mb-6 leading-relaxed">
                  {northYorkData.localInfo.applianceUsage}
                </p>
                <p className="text-[#424245] mb-8 leading-relaxed">
                  {northYorkData.localInfo.commonIssues}
                </p>
                
                <div className="bg-[#f5f5f7] rounded-2xl p-6 mb-8">
                  <h4 className="text-xl font-medium text-[#1d1d1f] mb-3">About Our {northYorkData.name} Service</h4>
                  <p className="text-[#424245]">
                    {northYorkData.localInfo.serviceNotes}
                  </p>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="bg-[#0071e3] rounded-full p-3">
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <p className="text-[#1d1d1f] font-medium">
                    {northYorkData.responseTime}
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <AppleTestimonialsSection
        title="What Our North York Customers Say"
        subtitle="Read testimonials from satisfied customers across North York neighborhoods"
        maxReviews={4}
      />

      {/* Neighborhoods Section */}
      <NeighborhoodSection 
        title={`${northYorkData.name} Neighborhoods We Serve`}
        description={`From luxury estates to urban condos and family neighborhoods, our technicians provide prompt, reliable service throughout ${northYorkData.name}.`}
        areas={neighborhoodAreas}
        mapImage={northYorkData.neighborhoodImage}
        companyName="JK"
        companyAddress={northYorkData.address.street}
      />
      
      {/* Coupon Section */}
      <CouponSection 
        title="Special Offers for North York Residents"
        subtitle="Use these exclusive coupons for same-day appliance repair service in North York"
        mainCoupons={[
          {
            amount: "25",
            type: "Repair",
            forCustomer: "New Customer Discount",
            code: "NY25",
            website: "jkappliancerepair.ca",
            phone: "647-560-8966",
            primaryColor: "#0071e3"
          },
          {
            amount: "15",
            type: "Repair",
            forCustomer: "For Returning Customers",
            code: "NYRETURN15",
            website: "jkappliancerepair.ca",
            phone: "647-560-8966",
            primaryColor: "#0071e3"
          },
          {
            amount: "30",
            type: "Repair",
            forCustomer: "Senior Customer Discount",
            code: "NYSENIOR30",
            website: "jkappliancerepair.ca",
            phone: "647-560-8966",
            primaryColor: "#0071e3"
          }
        ]}
        extraCoupons={[
          {
            amount: "35",
            type: "Refrigerator Repair",
            forCustomer: "Willowdale Residents",
            code: "NYWILLOW35",
            website: "jkappliancerepair.ca",
            phone: "647-560-8966",
            primaryColor: "#0071e3"
          },
          {
            amount: "25",
            type: "Washer Repair",
            forCustomer: "Bayview Village Residents",
            code: "NYBAYVIEW25",
            website: "jkappliancerepair.ca",
            phone: "647-560-8966",
            primaryColor: "#0071e3"
          }
        ]}
      />
      
      {/* Blog Section */}
      <BlogSection 
        title="Appliance Tips for North York Residents"
        subtitle="Helpful guides and maintenance tips specifically for North York homeowners and residents"
        areaId="northyork"
        showCategories={true}
        limit={3}
        viewAllLink={true}
      />
      
      {/* Booking Section */}
      <BookingSection />
    </div>
  );
} 