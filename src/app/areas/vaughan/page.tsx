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

// Vaughan area data
const vaughanData = {
  id: 'vaughan',
  name: 'Vaughan',
  fullName: 'Vaughan, Ontario',
  description: 'From bustling urban centers like Woodbridge to family neighborhoods in Maple, our appliance repair technicians provide prompt service throughout Vaughan with same-day appointments available.',
  heroImage: '/images/areas/areas-hero.webp',
  neighborhoodImage: '/images/vaughan-map.webp',
  mapImage: '/images/vaughan.webp',
  
  // Location information
  address: {
    street: '18 Yonge St',
    city: 'Toronto',
    province: 'ON',
    postalCode: 'M5E 1Z8',
  },
  
  // Service radius and coverage details
  serviceRadius: '25',
  responseTime: 'Same-day service available in all Vaughan neighborhoods',
  
  // Neighborhoods served
  neighborhoods: [
    'Woodbridge',
    'Maple',
    'Thornhill',
    'Concord',
    'Kleinburg',
    'Vellore Village',
    'Sonoma Heights',
    'Beverley Glen',
    'Vaughan Mills',
    'Patterson',
    'Uplands',
    'Islington Woods',
    'Sunset Ridge',
    'Brownridge',
    'Dufferin Hill',
    'Elder Mills',
    'Vaughan Valley',
    'Nashville',
    'Carrville',
    'Crestwood',
    'Kipling Heights',
    'Pinewood'
  ],
  
  // Most common services in this area
  popularServices: [
    {
      id: 'refrigerator-repair',
      name: 'Refrigerator Repair',
      image: '/images/services/refrigerator-repair.webp',
      description: 'Expert refrigerator repair for all major brands in Vaughan.'
    },
    {
      id: 'washer-repair',
      name: 'Washer Repair',
      image: '/images/services/washer-repair.webp',
      description: 'Professional washing machine repairs for homes throughout Vaughan.'
    },
    {
      id: 'dryer-repair',
      name: 'Dryer Repair',
      image: '/images/services/dryer-repair.webp',
      description: 'Fast, reliable dryer repair services throughout Vaughan.'
    },
    {
      id: 'dishwasher-repair',
      name: 'Dishwasher Repair',
      image: '/images/services/dishwasher-repair.webp',
      description: 'Expert dishwasher technicians serving the Vaughan area.'
    }
  ],
  
  // Recent projects in this area
  recentProjects: [
    {
      title: 'Luxury Home Appliance Service',
      location: 'Kleinburg, Vaughan',
      description: 'Complete high-end appliance maintenance for a luxury home in the prestigious Kleinburg area.',
      image: '/images/projects/vaughan-luxury.webp'
    },
    {
      title: 'Restaurant Equipment Repair',
      location: 'Woodbridge, Vaughan',
      description: 'Commercial kitchen equipment repair for a popular restaurant in Woodbridge\'s dining district.',
      image: '/images/projects/vaughan-restaurant.webp'
    },
    {
      title: 'New Home Appliance Setup',
      location: 'Vellore Village, Vaughan',
      description: 'Installation and configuration of complete appliance suite for a newly built family home.',
      image: '/images/projects/vaughan-newhome.webp'
    }
  ],
  
  // Local information - tailored for Vaughan
  localInfo: {
    applianceUsage: "Vaughan residents predominantly live in spacious single-family homes and luxury properties that often feature high-end appliances. From established neighborhoods in Woodbridge to newer developments in Vellore Village, our technicians are familiar with both premium and standard models.",
    commonIssues: "In Vaughan's luxury homes like those in Kleinburg, we frequently address issues with high-end, built-in appliances. In family-oriented neighborhoods like Maple and Thornhill, we often service large-capacity, high-efficiency appliances designed for busy households.",
    serviceNotes: "Our Vaughan technicians are ready to serve all communities from Woodbridge to Maple and beyond, with specialized knowledge of both luxury European brands and everyday North American models popular throughout Vaughan homes."
  }
};

// Sample services data for Vaughan
const vaughanServices: AreaServiceItem[] = [
  {
    id: 'refrigerator-repair',
    name: 'Refrigerator Repair',
    image: '/images/services/refrigerator-repair.webp',
    description: 'Our Vaughan refrigerator repair technicians can fix all brands and models of refrigerators. From cooling issues to ice maker problems, our experts can diagnose and repair your refrigerator quickly and efficiently. We service all Vaughan neighborhoods with same-day appointments available.',
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
    description: 'Our washer repair services in Vaughan cover all major brands and models. Whether your washing machine is leaking, not spinning, or making unusual noises, our skilled technicians can identify the problem and provide efficient, long-lasting repairs right in your Vaughan home.',
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
    description: 'When your dryer stops working properly in Vaughan, our expert technicians are just a call away. We repair all types of dryers including gas and electric models. From heating issues to strange noises, our Vaughan team can solve your dryer problems quickly and effectively.',
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
    description: 'Our Vaughan dishwasher repair services cover all brands and models. We fix common issues like poor cleaning performance, leaking, and drainage problems. Our experienced technicians provide fast, reliable dishwasher repairs throughout Vaughan, often on the same day you call.',
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
    description: 'For oven and stove repairs in Vaughan, our technicians are experienced with all types including gas, electric, and induction. Whether your oven isn\'t heating properly or your stove burners won\'t light, we provide expert diagnoses and repairs throughout the Vaughan area.',
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

// Brand data for Vaughan
const vaughanBrands: BrandItem[] = [
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

// Vaughan testimonials
const vaughanTestimonials: TestimonialItem[] = [
  {
    name: "Anthony R.",
    location: "Woodbridge, Vaughan",
    rating: 5,
    text: "JK Appliance provided exceptional service when our built-in refrigerator stopped cooling. Their technician arrived promptly, diagnosed the issue accurately, and completed the repair professionally. Our kitchen was left spotless. Highly recommend!",
    date: "May 2023"
  },
  {
    name: "Christina M.",
    location: "Maple, Vaughan",
    rating: 5,
    text: "When our washing machine started making strange noises, JK Appliance sent a technician the same day. He quickly identified a bearing issue, had the parts with him, and fixed it on the spot. Fair pricing and excellent service.",
    date: "April 2023"
  },
  {
    name: "Mark L.",
    location: "Kleinburg, Vaughan",
    rating: 5,
    text: "We've used JK Appliance for all our high-end kitchen appliances. Their technicians are knowledgeable about premium brands and always provide top-notch service. They respect our home and are extremely professional.",
    date: "June 2023"
  },
  {
    name: "Sophia P.",
    location: "Vellore Village, Vaughan",
    rating: 5,
    text: "Our dishwasher stopped draining right before a big family gathering. JK Appliance sent someone within hours, fixed the problem quickly, and saved our weekend plans. Reliable service and reasonable rates!",
    date: "March 2023"
  }
];

// Custom Vaughan page
export default function VaughanAreaPage() {
  // Convert string neighborhoods to AreaData format for NeighborhoodSection
  const neighborhoodAreas: AreaData[] = vaughanData.neighborhoods.map((name, index) => ({
    id: `${vaughanData.id}-neighborhood-${index}`,
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
                Appliance Repair in {vaughanData.name}
              </h1>
              <p className="text-xl sm:text-2xl text-gray-500 mb-12 max-w-3xl mx-auto font-light leading-relaxed">
                Fast, reliable appliance repair services throughout {vaughanData.name} with same-day service available. Serving all neighborhoods in the {vaughanData.fullName} area.
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
                  src={vaughanData.heroImage}
                  alt={`${vaughanData.name} Appliances`}
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
      <ServicesSectionArea areaName={vaughanData.name} />
      
      {/* Vaughan Communities Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-semibold text-gray-900 mb-4">
                Serving All Vaughan Communities
              </h2>
              <p className="text-xl text-gray-500 max-w-3xl mx-auto">
                From vibrant Woodbridge to family-friendly Maple and upscale Kleinburg, we provide expert appliance repair throughout Vaughan
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Woodbridge */}
              <div className="bg-[#f5f5f7] rounded-3xl overflow-hidden shadow-sm transition-all hover:shadow-md">
                <div className="relative h-64">
                  <Image 
                    src="/images/vaughan-woodbridge.webp"
                    alt="Woodbridge, Vaughan"
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-medium text-gray-900 mb-2">Woodbridge</h3>
                  <p className="text-gray-600">
                    We provide specialized service to Woodbridge and its many vibrant neighborhoods, with expertise in maintaining appliances in both established homes and newer developments that reflect the area's rich cultural heritage.
                  </p>
                </div>
              </div>
              
              {/* Maple & Thornhill */}
              <div className="bg-[#f5f5f7] rounded-3xl overflow-hidden shadow-sm transition-all hover:shadow-md">
                <div className="relative h-64">
                  <Image 
                    src="/images/vaughan-maple.webp"
                    alt="Maple and Thornhill, Vaughan"
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-medium text-gray-900 mb-2">Maple & Thornhill</h3>
                  <p className="text-gray-600">
                    Our technicians service the family-friendly communities of Maple, Thornhill, and surrounding neighborhoods, providing expert repairs for the high-efficiency appliances that these busy households rely on daily.
                  </p>
                </div>
              </div>
              
              {/* Kleinburg & Premium Areas */}
              <div className="bg-[#f5f5f7] rounded-3xl overflow-hidden shadow-sm transition-all hover:shadow-md">
                <div className="relative h-64">
                  <Image 
                    src="/images/vaughan-kleinburg.webp"
                    alt="Kleinburg, Vaughan"
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-medium text-gray-900 mb-2">Kleinburg & Luxury Areas</h3>
                  <p className="text-gray-600">
                    We provide specialized service to Kleinburg, Nashville, and other premium neighborhoods, with technicians specially trained in the repair and maintenance of high-end European and designer appliance brands found in luxury homes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our AreaServicesSection */}
      <AreaServicesSection 
        areaName="Vaughan"
        services={vaughanServices}
      />
      
      {/* Brand Slider Section */}
      <BrandsSliderSection
        title="Top Appliance Brands We Fix"
        subtitle="Our certified Vaughan technicians are experienced in repairing all major appliance brands"
        brands={vaughanBrands}
        locationName="Vaughan"
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
                    src={vaughanData.mapImage}
                    alt={`${vaughanData.name} Service Area Map`}
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
                <h3 className="text-3xl font-semibold text-[#1d1d1f] mb-6">Our {vaughanData.name} Coverage</h3>
                <p className="text-[#424245] mb-6 leading-relaxed">
                  {vaughanData.localInfo.applianceUsage}
                </p>
                <p className="text-[#424245] mb-8 leading-relaxed">
                  {vaughanData.localInfo.commonIssues}
                </p>
                
                <div className="bg-[#f5f5f7] rounded-2xl p-6 mb-8">
                  <h4 className="text-xl font-medium text-[#1d1d1f] mb-3">About Our {vaughanData.name} Service</h4>
                  <p className="text-[#424245]">
                    {vaughanData.localInfo.serviceNotes}
                  </p>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="bg-[#0071e3] rounded-full p-3">
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <p className="text-[#1d1d1f] font-medium">
                    {vaughanData.responseTime}
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <AppleTestimonialsSection
        title="What Our Vaughan Customers Say"
        subtitle="Read testimonials from satisfied customers across Vaughan neighborhoods"
        filterLocation="Vaughan"
        maxReviews={4}
      />

      {/* Neighborhoods Section */}
      <NeighborhoodSection 
        title={`${vaughanData.name} Neighborhoods We Serve`}
        description={`From vibrant Woodbridge to family-friendly Maple and exclusive Kleinburg, our technicians provide prompt, reliable service throughout ${vaughanData.name}.`}
        areas={neighborhoodAreas}
        mapImage={vaughanData.neighborhoodImage}
        companyName="JK"
        companyAddress={vaughanData.address.street}
      />
      
      {/* Coupon Section */}
      <CouponSection 
        title="Special Offers for Vaughan Residents"
        subtitle="Use these exclusive coupons for same-day appliance repair service in Vaughan"
        mainCoupons={[
          {
            amount: "25",
            type: "Repair",
            forCustomer: "New Customer Discount",
            code: "VGN25",
            website: "jkappliancerepair.ca",
            phone: "647-560-8966",
            primaryColor: "#0071e3"
          },
          {
            amount: "15",
            type: "Repair",
            forCustomer: "For Returning Customers",
            code: "VGNRETURN15",
            website: "jkappliancerepair.ca",
            phone: "647-560-8966",
            primaryColor: "#0071e3"
          },
          {
            amount: "30",
            type: "Repair",
            forCustomer: "Senior Customer Discount",
            code: "VGNSENIOR30",
            website: "jkappliancerepair.ca",
            phone: "647-560-8966",
            primaryColor: "#0071e3"
          }
        ]}
        extraCoupons={[
          {
            amount: "35",
            type: "Refrigerator Repair",
            forCustomer: "Woodbridge Residents",
            code: "VGNWOOD35",
            website: "jkappliancerepair.ca",
            phone: "647-560-8966",
            primaryColor: "#0071e3"
          },
          {
            amount: "25",
            type: "Washer Repair",
            forCustomer: "Maple Residents",
            code: "VGNMAPLE25",
            website: "jkappliancerepair.ca",
            phone: "647-560-8966",
            primaryColor: "#0071e3"
          }
        ]}
      />
      
      {/* Blog Section */}
      <BlogSection 
        title="Appliance Tips for Vaughan Residents"
        subtitle="Helpful guides and maintenance tips specifically for Vaughan homeowners and residents"
        areaId="vaughan"
        showCategories={true}
        limit={3}
        viewAllLink={true}
      />
      
      {/* Booking Section */}
      <BookingSection />
    </div>
  );
} 