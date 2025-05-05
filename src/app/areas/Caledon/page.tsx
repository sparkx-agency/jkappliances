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
import TestimonialsSection, { TestimonialItem } from '@/components/sections/TestimonialsSection';
import AppleTestimonialsSection from '@/components/sections/AppleTestimonialsSection';
import CouponSection from '@/components/sections/CouponSection';

const CaledonPage: React.FC = () => {
  // Area data for Caledon
  const caledonData = {
    id: 'caledon',
    name: 'Caledon',
    fullName: 'Caledon, Ontario',
    description: 'Professional appliance repair services throughout Caledon and surrounding areas. Our experienced technicians service all major brands including Samsung, LG, Whirlpool, and more.',
    heroImage: '/images/areas/areas-hero.webp',
    neighborhoodImage: '/images/caledon-map.webp',
    mapImage: '/images/caledon.webp',
  
  // Location information
  address: {
    street: '18 Yonge St',
    city: 'Toronto',
    province: 'ON',
    postalCode: 'M5E 1Z8',
  },
  
  // Service radius and coverage details
  serviceRadius: '30',
    responseTime: 'Same-day service available in most Caledon areas',
  
  // Neighborhoods served
  neighborhoods: [
      'Bolton',
      'Caledon Village',
      'Caledon East',
      'Alton',
      'Palgrave',
      'Inglewood',
      'Belfountain',
      'Terra Cotta',
      'Cheltenham',
      'Mono Mills',
      'Albion',
      'Mono Road',
      'Mayfield West',
      'Valleywood',
      'Cedar Mills',
      'Campbell\'s Cross',
      'Melville',
      'Victoria',
      'Claude',
      'Sandhill'
    ],
    
    // Local information - tailored for Caledon
    localInfo: {
      applianceUsage: "Caledon residents live in a diverse range of homes, from historic properties in heritage villages to modern estates and rural farms. This variety requires our technicians to be versatile in handling both traditional and cutting-edge appliances.",
      commonIssues: "In Caledon, we frequently address issues unique to rural properties such as power fluctuations affecting appliances, as well as maintenance needs for high-end appliances in luxury homes. Our technicians are also familiar with the distinct needs of heritage properties in villages like Belfountain and Alton.",
      serviceNotes: "Our Caledon technicians are experienced in navigating the municipality's rural roads and large geographical area. We plan our routes efficiently to ensure prompt service to all areas from Bolton to the more remote northern communities."
    }
  };

  // Available services for area - properly typed as AreaServiceItem[]
  const areaServices: AreaServiceItem[] = [
    {
      id: 'refrigerator-repair',
      name: 'Refrigerator Repair',
      image: '/images/services/refrigerator-repair.webp',
      description: 'From classic kitchens in historic Caledon homes to modern appliances in newer builds, our technicians have the expertise to repair all refrigerator types. We diagnose and fix cooling issues, ice maker problems, and more.',
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
      id: 'oven-repair',
      name: 'Oven & Stove Repair',
      image: '/images/services/oven-repair.webp',
      description: 'Whether you\'re in Bolton or a rural property in Caledon East, we provide fast, reliable oven and stove repair. Our technicians can fix temperature issues, faulty elements, ignition problems, and more for all models.',
      commonServices: [
        'Heating element replacements',
        'Temperature sensor calibration',
        'Burner and igniter repairs',
        'Control board troubleshooting',
        'Door hinge and seal replacements',
        'Gas line and connection safety checks'
      ]
    },
    {
      id: 'dishwasher-repair',
      name: 'Dishwasher Repair',
      image: '/images/services/dishwasher-repair.webp',
      description: 'Having dishwasher troubles in your Caledon home? Our local technicians can quickly diagnose and repair leaks, drainage problems, cleaning issues, and electrical faults in all dishwasher brands and models.',
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
    id: 'washer-repair',
    name: 'Washer Repair',
    image: '/images/services/washer-repair.webp',
      description: 'For washing machine repairs throughout Caledon Village, Bolton, and beyond, our experienced technicians can fix everything from drainage issues to mechanical problems, unusual noises, and control panel malfunctions.',
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
      description: 'When your dryer isn\'t heating, is making strange noises, or won\'t start, our Caledon technicians can help. We service all types of dryers across the region, from Bolton to the scenic villages of Belfountain and Alton.',
    commonServices: [
      'Heating element replacements',
      'Drum and belt repairs',
      'Thermostat and sensor calibration',
      'Vent cleaning and maintenance',
      'Motor and bearing replacements',
      'Control panel and timer repairs'
    ]
    }
  ];

  // Customer testimonials properly typed
  const testimonials: TestimonialItem[] = [
    {
      name: 'Jennifer K.',
      location: 'Bolton, Caledon',
      rating: 5,
      text: 'After our refrigerator stopped cooling overnight, I called JK Appliances in a panic. Their technician arrived the same day, quickly diagnosed a faulty compressor, and had it repaired within hours. The service was exceptional, and they even cleaned up afterward!',
      date: 'May 2023',
    },
    {
      name: 'Michael R.',
      location: 'Caledon Village',
      rating: 5,
      text: 'We\'ve used JK Appliances twice now - once for our washing machine and once for our dishwasher. Both times the technicians were professional, knowledgeable, and efficient. They explained what was wrong and how they fixed it. Great service at a fair price.',
      date: 'April 2023',
    },
    {
      name: 'Laura T.',
      location: 'Caledon East',
      rating: 5,
      text: 'Living in a rural area, it\'s sometimes hard to get service people to come out. JK Appliances was different - they came exactly when scheduled and fixed our dryer that same visit. The technician was friendly and professional. Highly recommend!',
      date: 'June 2023',
    },
    {
      name: 'David S.',
      location: 'Belfountain, Caledon',
      rating: 5,
      text: 'Our oven stopped working during a dinner party preparation. JK Appliances sent a technician within hours who diagnosed and repaired a faulty heating element. They saved our evening! Excellent emergency service and very reasonable pricing.',
      date: 'March 2023',
    },
];

  // Brands serviced - properly typed as BrandItem[]
  const brands: BrandItem[] = [
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
    id: 'bosch',
    name: 'Bosch',
    logo: '/images/brands/bosch.webp',
    link: '/brands/bosch'
  },
  {
      id: 'kitchenaid',
      name: 'KitchenAid', 
      logo: '/images/brands/kitchen-aid.webp',
      link: '/brands/kitchenaid'
  },
  {
    id: 'frigidaire',
    name: 'Frigidaire',
    logo: '/images/brands/frigidaire.webp',
    link: '/brands/frigidaire'
    },
    { 
      id: 'electrolux',
      name: 'Electrolux', 
      logo: '/images/brands/electrolux.webp',
      link: '/brands/electrolux'
    },
    { 
      id: 'kenmore',
      name: 'Kenmore', 
      logo: '/images/brands/kenmore.webp',
      link: '/brands/kenmore'
    },
  ];

  // Convert neighborhoods to AreaData format for NeighborhoodSection
  const neighborhoodAreas: AreaData[] = caledonData.neighborhoods.map((name, index) => ({
    id: `${caledonData.id}-neighborhood-${index}`,
    name
  }));
  
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-green-600 to-green-800 text-white py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Caledon Appliance Repair</h1>
              <p className="text-xl mb-6">Fast, reliable appliance repair services throughout Caledon and surrounding areas. Same-day service available!</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/booking" className="bg-white text-green-600 hover:bg-gray-100 px-6 py-3 rounded-md font-semibold text-center">
                  Book a Repair
                </Link>
                <Link href="tel:(647) 503-6655" className="bg-transparent border-2 border-white hover:bg-white hover:text-green-600 px-6 py-3 rounded-md font-semibold transition duration-300 text-center">
                  Call Us Now
                </Link>
              </div>
            </div>
            <div className="relative h-64 md:h-96">
                <Image
                src="/images/areas/caledon-hero.webp"
                alt="Caledon Appliance Repair"
                  fill
                className="rounded-lg object-cover shadow-xl"
                sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                style={{ objectFit: "contain" }} />
              </div>
          </div>
        </div>
      </section>
      
      {/* Caledon Unique Features */}
      <section className="py-16 px-4 md:px-8 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose JK Appliance Repair in Caledon?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-center mb-2">Serving All Caledon Areas</h3>
            <p className="text-gray-600 text-center">From urban Bolton to the historic villages of Belfountain and Alton, we provide prompt service across Caledon's diverse communities.</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-center mb-2">Local Caledon Experts</h3>
            <p className="text-gray-600 text-center">Our technicians are familiar with Caledon's rural terrain and understand the unique appliance needs of country and heritage homes.</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-center mb-2">All Major Brands</h3>
            <p className="text-gray-600 text-center">From historic heritage homes to modern developments, we service all appliance brands and models found throughout Caledon.</p>
          </div>
        </div>
      </section>
      
      {/* Area Info Section */}
      <NeighborhoodSection 
        title={`${caledonData.name} Communities We Serve`}
        description={`From urban centers to rural properties, our technicians provide prompt, reliable service throughout ${caledonData.name}.`}
        areas={neighborhoodAreas}
        mapImage={caledonData.neighborhoodImage}
        companyName="JK"
        companyAddress={caledonData.address.street}
      />
      
      {/* Services in Caledon Section */}
      <AreaServicesSection 
        areaName="Caledon"
        services={areaServices}
      />

      {/* Caledon Communities Section */}
      <section className="py-16 px-4 md:px-8 bg-gray-100">
          <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Serving Caledon's Diverse Communities</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-center mb-4">Bolton</h3>
              <p className="text-gray-600 mb-4">As Caledon's largest community, Bolton combines urban amenities with small-town charm. Our technicians provide appliance repair services throughout Bolton's residential areas, from historic downtown to newer developments.</p>
                  <Image
                src="/images/areas/caledon-bolton.webp"
                alt="Bolton, Caledon"
                width={350}
                height={200}
                className="rounded-lg mx-auto"
                  style={{ objectFit: "contain" }} />
                </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-center mb-4">Caledon Village & Caledon East</h3>
              <p className="text-gray-600 mb-4">These historic communities feature a mix of heritage homes and newer residences. Our technicians are familiar with both modern appliances and the unique needs of vintage kitchens in older Caledon properties.</p>
              <Image
                src="/images/areas/caledon-village.webp"
                alt="Caledon Village"
                width={350}
                height={200}
                className="rounded-lg mx-auto"
              style={{ objectFit: "contain" }} />
                </div>
                
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-center mb-4">Scenic Villages</h3>
              <p className="text-gray-600 mb-4">From the picturesque communities of Belfountain, Alton, and Inglewood to Terra Cotta and Cheltenham, we provide reliable appliance repair services to all of Caledon's charming villages and rural properties.</p>
              <Image
                src="/images/areas/caledon-villages.webp"
                alt="Caledon Villages"
                width={350}
                height={200}
                className="rounded-lg mx-auto"
              style={{ objectFit: "contain" }} />
            </div>
          </div>
        </div>
      </section>
      
      {/* Customer Testimonials */}
      <AppleTestimonialsSection
        title="What Caledon Customers Say About Us"
        subtitle="Read about experiences from our satisfied Caledon customers"
        maxReviews={4}
      />

      {/* Brands We Service */}
      <BrandsSliderSection 
        title="Appliance Brands We Service in Caledon"
        subtitle="Our technicians are trained to repair all major appliance brands"
        brands={brands}
        locationName="Caledon"
      />
      
      {/* Coupon Section */}
      <CouponSection 
        title="Special Offer for Caledon Residents"
        subtitle="Use these exclusive coupons for same-day appliance repair service in Caledon"
        mainCoupons={[
          {
            amount: "25",
            type: "Repair",
            forCustomer: "New Customer Discount",
            code: "CAL25",
            website: "jkappliancerepair.ca",
            phone: "647-560-8966",
            primaryColor: "#16a34a"
          },
          {
            amount: "15",
            type: "Repair",
            forCustomer: "For Returning Customers",
            code: "CALRETURN15",
            website: "jkappliancerepair.ca",
            phone: "647-560-8966",
            primaryColor: "#16a34a"
          },
          {
            amount: "30",
            type: "Repair",
            forCustomer: "Senior Customer Discount",
            code: "CALSENIOR30",
            website: "jkappliancerepair.ca",
            phone: "647-560-8966",
            primaryColor: "#16a34a"
          }
        ]}
        extraCoupons={[
          {
            amount: "35",
            type: "Refrigerator Repair",
            forCustomer: "Bolton Residents",
            code: "CALBOLT35",
            website: "jkappliancerepair.ca",
            phone: "647-560-8966",
            primaryColor: "#16a34a"
          },
          {
            amount: "25",
            type: "Washer Repair",
            forCustomer: "Rural Caledon",
            code: "CALRURAL25",
            website: "jkappliancerepair.ca",
            phone: "647-560-8966",
            primaryColor: "#16a34a"
          }
        ]}
      />
      
      {/* Caledon Projects Section */}
      <section className="py-16 px-4 md:px-8 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Recent Appliance Repair Projects in Caledon</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3">Heritage Home Refrigeration in Belfountain</h3>
            <p className="text-gray-600 mb-4">A client in a century home in Belfountain contacted us with a refrigerator that wasn't cooling properly. Our technician diagnosed issues with the compressor and thermostat that were unique to the property's older electrical system. We completed the repairs that same day, ensuring their food didn't spoil.</p>
            <div className="flex items-center">
              <div className="bg-green-100 rounded-full p-2 mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-gray-700">Same-day emergency service for heritage home</span>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3">Multi-Appliance Service in Bolton</h3>
            <p className="text-gray-600 mb-4">A family who had just moved to a new home in Bolton requested a comprehensive checkup for their kitchen appliances. Our technician serviced their dishwasher, refrigerator, and oven in one visit, identifying and fixing several minor issues before they became major problems.</p>
            <div className="flex items-center">
              <div className="bg-green-100 rounded-full p-2 mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-gray-700">Multiple appliance service in one visit</span>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section - Caledon Specific Posts */}
      <BlogSection 
        title="Latest Appliance Tips for Caledon Homeowners"
        subtitle="Helpful guides and maintenance tips for Caledon residents"
        areaId="caledon"
        showCategories={true}
        limit={3}
        viewAllLink={true}
      />
      
      {/* Booking Section */}
      <BookingSection />
    </div>
  );
};

export default CaledonPage; 