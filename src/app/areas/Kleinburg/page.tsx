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

// Kleinburg area data
const kleinburgData = {
  id: 'kleinburg',
  name: 'Kleinburg',
  fullName: 'Kleinburg, Vaughan',
  description: 'From historic properties in Old Kleinburg to luxury homes in Copper Creek, our appliance repair technicians provide prompt service throughout Kleinburg with same-day appointments available.',
  heroImage: '/images/areas/areas-hero.webp',
  neighborhoodImage: '/images/kleinburg-map.webp',
  mapImage: '/images/kleinburg.webp',
  
  // Location information
  address: {
    street: '18 Yonge St',
    city: 'Toronto',
    province: 'ON',
    postalCode: 'M5E 1Z8',
  },
  
  // Service radius and coverage details
  serviceRadius: '25',
  responseTime: 'Same-day service available in all Kleinburg neighborhoods',
  
  // Neighborhoods served
  neighborhoods: [
    'Old Kleinburg',
    'Nashville',
    'Copper Creek',
    'Carrying Place',
    'Kleinburg Core',
    'Humber Summit',
    'Huntington Ridge',
    'Humber Trails',
    'Kleinburg Heritage Estates',
    'Suburban Kleinburg',
    'Islington Woods',
    'Hazelton Place',
    'Cranston Park',
    'Vaughanwood Estates',
    'Belvedere',
    'Purpleville',
    'Elder Mills',
    'Kleinburg North',
    'Kleinburg South',
    'Bindertwine',
    'Lakeview Estates',
    'Kortright Hills'
  ],
  
  // Most common services in this area
  popularServices: [
    {
      id: 'refrigerator-repair',
      name: 'Refrigerator Repair',
      image: '/images/services/refrigerator-repair.webp',
      description: 'Expert refrigerator repair for all major brands in Kleinburg.'
    },
    {
      id: 'washer-repair',
      name: 'Washer Repair',
      image: '/images/services/washer-repair.webp',
      description: 'Professional washing machine repairs for homes throughout Kleinburg.'
    },
    {
      id: 'dryer-repair',
      name: 'Dryer Repair',
      image: '/images/services/dryer-repair.webp',
      description: 'Fast, reliable dryer repair services throughout Kleinburg.'
    },
    {
      id: 'dishwasher-repair',
      name: 'Dishwasher Repair',
      image: '/images/services/dishwasher-repair.webp',
      description: 'Expert dishwasher technicians serving the Kleinburg area.'
    }
  ],
  
  // Recent projects in this area
  recentProjects: [
    {
      title: 'Luxury Estate Appliance Service',
      location: 'Copper Creek, Kleinburg',
      description: 'Complete high-end appliance installation and maintenance for a luxury estate home in the prestigious Copper Creek area.',
      image: '/images/projects/kleinburg-luxury.webp'
    },
    {
      title: 'Restaurant Equipment Repair',
      location: 'Old Kleinburg',
      description: 'Commercial kitchen equipment repair for a popular upscale restaurant in historic Old Kleinburg.',
      image: '/images/projects/kleinburg-restaurant.webp'
    },
    {
      title: 'Smart Home Integration',
      location: 'Huntington Ridge, Kleinburg',
      description: 'Installation and configuration of connected smart appliances for a newly built custom home in Huntington Ridge.',
      image: '/images/projects/kleinburg-smarthome.webp'
    }
  ],
  
  // Local information - tailored for Kleinburg
  localInfo: {
    applianceUsage: "Kleinburg features a blend of historic properties in Old Kleinburg and Nashville with upscale luxury estates in newer developments like Copper Creek and Huntington Ridge. Our technicians are experienced with premium European appliances common in Kleinburg's luxury homes as well as traditional appliances in heritage properties.",
    commonIssues: "In Kleinburg's luxury estates, we frequently service high-end integrated appliance systems requiring specialized knowledge. In established neighborhoods, we often address issues with premium appliances from brands like Sub-Zero, Wolf, and Miele that require expert technicians familiar with their sophisticated components.",
    serviceNotes: "Our Kleinburg technicians understand the unique character of this prestigious community. We provide discreet, professional service to all neighborhoods from historic Old Kleinburg to newer luxury developments, with specialized expertise in premium appliance brands and custom installations."
  }
};

// Sample services data for Kleinburg
const kleinburgServices: AreaServiceItem[] = [
  {
    id: 'refrigerator-repair',
    name: 'Refrigerator Repair',
    image: '/images/services/refrigerator-repair.webp',
    description: 'Our Kleinburg refrigerator repair technicians can fix all brands and models of refrigerators. From cooling issues to ice maker problems, our experts can diagnose and repair your refrigerator quickly and efficiently. We service all Kleinburg neighborhoods with same-day appointments available.',
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
    description: 'Our washer repair services in Kleinburg cover all major brands and models. Whether your washing machine is leaking, not spinning, or making unusual noises, our skilled technicians can identify the problem and provide efficient, long-lasting repairs right in your Kleinburg home.',
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
    description: 'When your dryer stops working properly in Kleinburg, our expert technicians are just a call away. We repair all types of dryers including gas and electric models. From heating issues to strange noises, our Kleinburg team can solve your dryer problems quickly and effectively.',
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
    description: 'Our Kleinburg dishwasher repair services cover all brands and models. We fix common issues like poor cleaning performance, leaking, and drainage problems. Our experienced technicians provide fast, reliable dishwasher repairs throughout Kleinburg, often on the same day you call.',
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
    description: 'For oven and stove repairs in Kleinburg, our technicians are experienced with all types including gas, electric, and induction. Whether your oven isn\'t heating properly or your stove burners won\'t light, we provide expert diagnoses and repairs throughout the Kleinburg area.',
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

// Brand data for Kleinburg
const kleinburgBrands: BrandItem[] = [
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

// Kleinburg testimonials
const kleinburgTestimonials: TestimonialItem[] = [
  {
    name: "Victoria M.",
    location: "Copper Creek, Kleinburg",
    rating: 5,
    text: "JK Appliance has been maintaining all of our high-end kitchen appliances for years. Their technicians understand the complexities of premium brands and always provide exceptional service with the care our custom kitchen deserves.",
    date: "May 2023"
  },
  {
    name: "Jonathan K.",
    location: "Old Kleinburg",
    rating: 5,
    text: "When our built-in refrigerator and wine cooler needed repair, JK Appliance sent a specialist who knew exactly how to handle these integrated systems. Professional, knowledgeable service that saved us from a major issue.",
    date: "April 2023"
  },
  {
    name: "Elizabeth H.",
    location: "Huntington Ridge, Kleinburg",
    rating: 5,
    text: "We've used JK Appliance for several repairs in our new smart home. Their technicians are always professional and understand how to work with our connected appliances. Their ability to diagnose and fix complex issues is impressive.",
    date: "June 2023"
  },
  {
    name: "Richard B.",
    location: "Nashville, Kleinburg",
    rating: 5,
    text: "JK Appliance provided same-day service when our kitchen appliances stopped working before a family gathering. Their technician arrived promptly, identified the issues, and made the repairs efficiently. Excellent, reliable service!",
    date: "March 2023"
  }
];

// Custom Kleinburg page
export default function KleinburgAreaPage() {
  // Convert string neighborhoods to AreaData format for NeighborhoodSection
  const neighborhoodAreas: AreaData[] = kleinburgData.neighborhoods.map((name, index) => ({
    id: `${kleinburgData.id}-neighborhood-${index}`,
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
                Appliance Repair in {kleinburgData.name}
              </h1>
              <p className="text-xl sm:text-2xl text-gray-500 mb-12 max-w-3xl mx-auto font-light leading-relaxed">
                Fast, reliable appliance repair services throughout {kleinburgData.name} with same-day service available. Serving all neighborhoods in the {kleinburgData.fullName} area.
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
                  src={kleinburgData.heroImage}
                  alt={`${kleinburgData.name} Appliances`}
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
      <ServicesSectionArea areaName={kleinburgData.name} />
      
      {/* Kleinburg Areas Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-semibold text-gray-900 mb-4">
                Serving All Kleinburg Communities
              </h2>
              <p className="text-xl text-gray-500 max-w-3xl mx-auto">
                From historic village core to luxury estates, we provide expert appliance repair throughout Kleinburg
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Historic & Village Core */}
              <div className="bg-[#f5f5f7] rounded-3xl overflow-hidden shadow-sm transition-all hover:shadow-md">
                <div className="relative h-64">
                  <Image 
                    src="/images/kleinburg-historic.webp"
                    alt="Historic Kleinburg"
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-medium text-gray-900 mb-2">Historic & Village Core</h3>
                  <p className="text-gray-600">
                    We provide specialized service to Old Kleinburg, Kleinburg Core, and Nashville areas, with expertise in maintaining appliances in heritage homes and character properties that require careful, knowledgeable attention.
                  </p>
                </div>
              </div>
              
              {/* Luxury Estates */}
              <div className="bg-[#f5f5f7] rounded-3xl overflow-hidden shadow-sm transition-all hover:shadow-md">
                <div className="relative h-64">
                  <Image 
                    src="/images/kleinburg-luxury.webp"
                    alt="Luxury Kleinburg Estates"
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-medium text-gray-900 mb-2">Luxury Estates</h3>
                  <p className="text-gray-600">
                    Our technicians service Copper Creek, Kleinburg Heritage Estates, and other prestigious communities, providing expert repairs for high-end appliances and integrated systems found in Kleinburg's luxury homes.
                  </p>
                </div>
              </div>
              
              {/* Newer Communities */}
              <div className="bg-[#f5f5f7] rounded-3xl overflow-hidden shadow-sm transition-all hover:shadow-md">
                <div className="relative h-64">
                  <Image 
                    src="/images/kleinburg-newer.webp"
                    alt="New Kleinburg Developments"
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-medium text-gray-900 mb-2">Newer Communities</h3>
                  <p className="text-gray-600">
                    We provide prompt, reliable service to Huntington Ridge, Humber Trails, and other newer developments, with technicians specially trained to work with smart appliances and integrated systems in contemporary custom homes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our AreaServicesSection */}
      <AreaServicesSection 
        areaName="Kleinburg"
        services={kleinburgServices}
      />
      
      {/* Brand Slider Section */}
      <BrandsSliderSection
        title="Top Appliance Brands We Fix"
        subtitle="Our certified Kleinburg technicians are experienced in repairing all major appliance brands"
        brands={kleinburgBrands}
        locationName="Kleinburg"
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
                    src={kleinburgData.mapImage}
                    alt={`${kleinburgData.name} Service Area Map`}
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
                <h3 className="text-3xl font-semibold text-[#1d1d1f] mb-6">Our {kleinburgData.name} Coverage</h3>
                <p className="text-[#424245] mb-6 leading-relaxed">
                  {kleinburgData.localInfo.applianceUsage}
                </p>
                <p className="text-[#424245] mb-8 leading-relaxed">
                  {kleinburgData.localInfo.commonIssues}
                </p>
                
                <div className="bg-[#f5f5f7] rounded-2xl p-6 mb-8">
                  <h4 className="text-xl font-medium text-[#1d1d1f] mb-3">About Our {kleinburgData.name} Service</h4>
                  <p className="text-[#424245]">
                    {kleinburgData.localInfo.serviceNotes}
                  </p>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="bg-[#0071e3] rounded-full p-3">
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <p className="text-[#1d1d1f] font-medium">
                    {kleinburgData.responseTime}
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <AppleTestimonialsSection
        title="What Our Kleinburg Customers Say"
        subtitle="Read testimonials from satisfied customers across Kleinburg neighborhoods"
        maxReviews={4}
      />

      {/* Neighborhoods Section */}
      <NeighborhoodSection 
        title={`${kleinburgData.name} Neighborhoods We Serve`}
        description={`From the historic village core to luxury estates, our technicians provide prompt, reliable service throughout ${kleinburgData.name}.`}
        areas={neighborhoodAreas}
        mapImage={kleinburgData.neighborhoodImage}
        companyName="JK"
        companyAddress={kleinburgData.address.street}
      />
      
      {/* Coupon Section */}
      <CouponSection 
        title="Special Offers for Kleinburg Residents"
        subtitle="Use these exclusive coupons for same-day appliance repair service in Kleinburg"
        mainCoupons={[
          {
            amount: "25",
            type: "Repair",
            forCustomer: "New Customer Discount",
            code: "KLB25",
            website: "jkappliancerepair.ca",
            phone: "647-560-8966",
            primaryColor: "#0071e3"
          },
          {
            amount: "15",
            type: "Repair",
            forCustomer: "For Returning Customers",
            code: "KLBRETURN15",
            website: "jkappliancerepair.ca",
            phone: "647-560-8966",
            primaryColor: "#0071e3"
          },
          {
            amount: "30",
            type: "Repair",
            forCustomer: "Senior Customer Discount",
            code: "KLBSENIOR30",
            website: "jkappliancerepair.ca",
            phone: "647-560-8966",
            primaryColor: "#0071e3"
          }
        ]}
        extraCoupons={[
          {
            amount: "35",
            type: "Refrigerator Repair",
            forCustomer: "Copper Creek Residents",
            code: "KLBCOPPER35",
            website: "jkappliancerepair.ca",
            phone: "647-560-8966",
            primaryColor: "#0071e3"
          },
          {
            amount: "25",
            type: "Washer Repair",
            forCustomer: "Old Kleinburg Residents",
            code: "KLBOLD25",
            website: "jkappliancerepair.ca",
            phone: "647-560-8966",
            primaryColor: "#0071e3"
          }
        ]}
      />
      
      {/* Blog Section */}
      <BlogSection 
        title="Appliance Tips for Kleinburg Residents"
        subtitle="Helpful guides and maintenance tips specifically for Kleinburg homeowners and residents"
        areaId="kleinburg"
        showCategories={true}
        limit={3}
        viewAllLink={true}
      />
      
      {/* Booking Section */}
      <BookingSection />
    </div>
  );
} 