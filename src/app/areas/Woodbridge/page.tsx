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

// Woodbridge area data
const woodbridgeData = {
  id: 'woodbridge',
  name: 'Woodbridge',
  fullName: 'Woodbridge, Vaughan',
  description: 'From historic homes in Old Woodbridge to modern developments in Vellore Village, our appliance repair technicians provide prompt service throughout Woodbridge with same-day appointments available.',
  heroImage: '/images/woodbridge-skyline.webp',
  neighborhoodImage: '/images/woodbridge-map.webp',
  mapImage: '/images/woodbridge.webp',
  
  // Location information
  address: {
    street: '18 Yonge St',
    city: 'Toronto',
    province: 'ON',
    postalCode: 'M5E 1Z8',
  },
  
  // Service radius and coverage details
  serviceRadius: '25',
  responseTime: 'Same-day service available in all Woodbridge neighborhoods',
  
  // Neighborhoods served
  neighborhoods: [
    'Woodbridge',
    'Islington Woods',
    'Vellore Village',
    'Weston Downs',
    'Pine Grove',
    'Sonoma Heights',
    'Tuscany',
    'Woodbridge Highlands',
    'Market Lane',
    'Vaughan Valley',
    'Vaughan Chase',
    'West Woodbridge',
    'East Woodbridge',
    'Woodbridge Acres',
    'Boyd Conservation',
    'Kortright',
    'Clarence',
    'Woodbridge North',
    'Brownridge',
    'Foxwood',
    'Sunset Ridge',
    'Chancellor District'
  ],
  
  // Most common services in this area
  popularServices: [
    {
      id: 'refrigerator-repair',
      name: 'Refrigerator Repair',
      image: '/images/services/refrigerator-repair.webp',
      description: 'Expert refrigerator repair for all major brands in Woodbridge.'
    },
    {
      id: 'washer-repair',
      name: 'Washer Repair',
      image: '/images/services/washer-repair.webp',
      description: 'Professional washing machine repairs for homes throughout Woodbridge.'
    },
    {
      id: 'dryer-repair',
      name: 'Dryer Repair',
      image: '/images/services/dryer-repair.webp',
      description: 'Fast, reliable dryer repair services throughout Woodbridge.'
    },
    {
      id: 'dishwasher-repair',
      name: 'Dishwasher Repair',
      image: '/images/services/dishwasher-repair.webp',
      description: 'Expert dishwasher technicians serving the Woodbridge area.'
    }
  ],
  
  // Recent projects in this area
  recentProjects: [
    {
      title: 'Luxury Home Appliance Installation',
      location: 'Islington Woods, Woodbridge',
      description: 'Complete high-end appliance installation for a newly built luxury home in the prestigious Islington Woods area.',
      image: '/images/projects/woodbridge-luxury.webp'
    },
    {
      title: 'Restaurant Equipment Repair',
      location: 'Market Lane, Woodbridge',
      description: 'Commercial kitchen equipment repair for a popular restaurant in Woodbridge\'s vibrant Market Lane district.',
      image: '/images/projects/woodbridge-restaurant.webp'
    },
    {
      title: 'Smart Home Integration',
      location: 'Vellore Village, Woodbridge',
      description: 'Installation and configuration of connected smart appliances throughout a newly renovated family home in Vellore Village.',
      image: '/images/projects/woodbridge-smarthome.webp'
    }
  ],
  
  // Local information - tailored for Woodbridge
  localInfo: {
    applianceUsage: "Woodbridge features a mix of older established neighborhoods like Old Woodbridge and Pine Grove, alongside modern developments in areas like Vellore Village and Sonoma Heights. Our technicians are experienced with both traditional appliances in older homes and advanced smart systems in newer properties.",
    commonIssues: "In Woodbridge's established neighborhoods, we frequently address maintenance issues with longer-lasting traditional appliances. In newer developments like Vellore Village and Sonoma Heights, we often service high-efficiency smart appliances and integrated systems popular in modern family homes.",
    serviceNotes: "Our Woodbridge technicians are familiar with the area's unique blend of historic charm and modern development, providing excellent service across all neighborhoods with specialized knowledge of both traditional and cutting-edge appliances."
  }
};

// Sample services data for Woodbridge
const woodbridgeServices: AreaServiceItem[] = [
  {
    id: 'refrigerator-repair',
    name: 'Refrigerator Repair',
    image: '/images/services/refrigerator-repair.webp',
    description: 'Our Woodbridge refrigerator repair technicians can fix all brands and models of refrigerators. From cooling issues to ice maker problems, our experts can diagnose and repair your refrigerator quickly and efficiently. We service all Woodbridge neighborhoods with same-day appointments available.',
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
    description: 'Our washer repair services in Woodbridge cover all major brands and models. Whether your washing machine is leaking, not spinning, or making unusual noises, our skilled technicians can identify the problem and provide efficient, long-lasting repairs right in your Woodbridge home.',
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
    description: 'When your dryer stops working properly in Woodbridge, our expert technicians are just a call away. We repair all types of dryers including gas and electric models. From heating issues to strange noises, our Woodbridge team can solve your dryer problems quickly and effectively.',
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
    description: 'Our Woodbridge dishwasher repair services cover all brands and models. We fix common issues like poor cleaning performance, leaking, and drainage problems. Our experienced technicians provide fast, reliable dishwasher repairs throughout Woodbridge, often on the same day you call.',
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
    description: 'For oven and stove repairs in Woodbridge, our technicians are experienced with all types including gas, electric, and induction. Whether your oven isn\'t heating properly or your stove burners won\'t light, we provide expert diagnoses and repairs throughout the Woodbridge area.',
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

// Brand data for Woodbridge
const woodbridgeBrands: BrandItem[] = [
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

// Woodbridge testimonials
const woodbridgeTestimonials: TestimonialItem[] = [
  {
    name: "Marco C.",
    location: "Islington Woods, Woodbridge",
    rating: 5,
    text: "JK Appliance provided exceptional service for our built-in refrigerator and wine cooler. Their technician knew exactly what was wrong and had both appliances working perfectly in no time. Very professional and clean service.",
    date: "May 2023"
  },
  {
    name: "Sofia A.",
    location: "Vellore Village, Woodbridge",
    rating: 5,
    text: "When our dishwasher stopped draining, JK Appliance sent a technician the same day. He diagnosed the issue quickly, had the parts on hand, and completed the repair efficiently. No more hand washing dishes for our family of five!",
    date: "April 2023"
  },
  {
    name: "Robert L.",
    location: "Market Lane, Woodbridge",
    rating: 5,
    text: "We've used JK Appliance for both our home and business appliances. Their technicians are always knowledgeable, prompt, and provide reliable service every time. They're our first call whenever we need appliance repairs.",
    date: "June 2023"
  },
  {
    name: "Olivia M.",
    location: "Sonoma Heights, Woodbridge",
    rating: 5,
    text: "Our smart washer and dryer were having connectivity issues that affected their performance. JK Appliance sent a technician who understood both the appliances and their technology. Fixed everything and even helped reconfigure our smart home settings.",
    date: "March 2023"
  }
];

// Custom Woodbridge page
export default function WoodbridgeAreaPage() {
  // Convert string neighborhoods to AreaData format for NeighborhoodSection
  const neighborhoodAreas: AreaData[] = woodbridgeData.neighborhoods.map((name, index) => ({
    id: `${woodbridgeData.id}-neighborhood-${index}`,
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
                Appliance Repair in {woodbridgeData.name}
              </h1>
              <p className="text-xl sm:text-2xl text-gray-500 mb-12 max-w-3xl mx-auto font-light leading-relaxed">
                Fast, reliable appliance repair services throughout {woodbridgeData.name} with same-day service available. Serving all neighborhoods in the {woodbridgeData.fullName} area.
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
                  src={woodbridgeData.heroImage}
                  alt={`${woodbridgeData.name} Appliances`}
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
      <ServicesSectionArea areaName={woodbridgeData.name} />
      
      {/* Woodbridge Areas Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-semibold text-gray-900 mb-4">
                Serving All Woodbridge Communities
              </h2>
              <p className="text-xl text-gray-500 max-w-3xl mx-auto">
                From historic Old Woodbridge to modern planned neighborhoods, we provide expert appliance repair throughout Woodbridge
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Historic & Established Areas */}
              <div className="bg-[#f5f5f7] rounded-3xl overflow-hidden shadow-sm transition-all hover:shadow-md">
                <div className="relative h-64">
                  <Image 
                    src="/images/woodbridge-historic.webp"
                    alt="Historic Woodbridge"
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-medium text-gray-900 mb-2">Historic & Established Areas</h3>
                  <p className="text-gray-600">
                    We provide specialized service to Old Woodbridge, Pine Grove, and other established neighborhoods, with expertise in maintaining appliances in older homes while respecting their character and unique features.
                  </p>
                </div>
              </div>
              
              {/* Premium Communities */}
              <div className="bg-[#f5f5f7] rounded-3xl overflow-hidden shadow-sm transition-all hover:shadow-md">
                <div className="relative h-64">
                  <Image 
                    src="/images/woodbridge-premium.webp"
                    alt="Premium Woodbridge Communities"
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-medium text-gray-900 mb-2">Premium Communities</h3>
                  <p className="text-gray-600">
                    Our technicians service Islington Woods, Weston Downs, Woodbridge Highlands, and other upscale communities, providing expert repairs for premium appliances found in these desirable Woodbridge neighborhoods.
                  </p>
                </div>
              </div>
              
              {/* Modern Developments */}
              <div className="bg-[#f5f5f7] rounded-3xl overflow-hidden shadow-sm transition-all hover:shadow-md">
                <div className="relative h-64">
                  <Image 
                    src="/images/woodbridge-modern.webp"
                    alt="Modern Woodbridge Developments"
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-medium text-gray-900 mb-2">Modern Developments</h3>
                  <p className="text-gray-600">
                    We provide prompt, reliable service to Vellore Village, Sonoma Heights, and other newer neighborhoods, with technicians specially trained to work with smart appliances and integrated systems in contemporary homes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our AreaServicesSection */}
      <AreaServicesSection 
        areaName="Woodbridge"
        services={woodbridgeServices}
      />
      
      {/* Brand Slider Section */}
      <BrandsSliderSection
        title="Top Appliance Brands We Fix"
        subtitle="Our certified Woodbridge technicians are experienced in repairing all major appliance brands"
        brands={woodbridgeBrands}
        locationName="Woodbridge"
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
                    src={woodbridgeData.mapImage}
                    alt={`${woodbridgeData.name} Service Area Map`}
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
                <h3 className="text-3xl font-semibold text-[#1d1d1f] mb-6">Our {woodbridgeData.name} Coverage</h3>
                <p className="text-[#424245] mb-6 leading-relaxed">
                  {woodbridgeData.localInfo.applianceUsage}
                </p>
                <p className="text-[#424245] mb-8 leading-relaxed">
                  {woodbridgeData.localInfo.commonIssues}
                </p>
                
                <div className="bg-[#f5f5f7] rounded-2xl p-6 mb-8">
                  <h4 className="text-xl font-medium text-[#1d1d1f] mb-3">About Our {woodbridgeData.name} Service</h4>
                  <p className="text-[#424245]">
                    {woodbridgeData.localInfo.serviceNotes}
                  </p>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="bg-[#0071e3] rounded-full p-3">
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <p className="text-[#1d1d1f] font-medium">
                    {woodbridgeData.responseTime}
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <TestimonialsSection
        title="What Our Woodbridge Customers Say"
        subtitle="Read testimonials from satisfied customers across Woodbridge neighborhoods"
        testimonials={woodbridgeTestimonials}
      />

      {/* Neighborhoods Section */}
      <NeighborhoodSection 
        title={`${woodbridgeData.name} Neighborhoods We Serve`}
        description={`From historic areas to modern planned communities, our technicians provide prompt, reliable service throughout ${woodbridgeData.name}.`}
        areas={neighborhoodAreas}
        mapImage={woodbridgeData.neighborhoodImage}
        companyName="JK"
        companyAddress={woodbridgeData.address.street}
      />
      
      {/* Coupon Section */}
      <CouponSection 
        title="Special Offers for Woodbridge Residents"
        subtitle="Use these exclusive coupons for same-day appliance repair service in Woodbridge"
        mainCoupons={[
          {
            amount: "25",
            type: "Repair",
            forCustomer: "New Customer Discount",
            code: "WDB25",
            website: "jkappliancerepair.ca",
            phone: "647-560-8966",
            primaryColor: "#0071e3"
          },
          {
            amount: "15",
            type: "Repair",
            forCustomer: "For Returning Customers",
            code: "WDBRETURN15",
            website: "jkappliancerepair.ca",
            phone: "647-560-8966",
            primaryColor: "#0071e3"
          },
          {
            amount: "30",
            type: "Repair",
            forCustomer: "Senior Customer Discount",
            code: "WDBSENIOR30",
            website: "jkappliancerepair.ca",
            phone: "647-560-8966",
            primaryColor: "#0071e3"
          }
        ]}
        extraCoupons={[
          {
            amount: "35",
            type: "Refrigerator Repair",
            forCustomer: "Islington Woods Residents",
            code: "WDBISLINGTON35",
            website: "jkappliancerepair.ca",
            phone: "647-560-8966",
            primaryColor: "#0071e3"
          },
          {
            amount: "25",
            type: "Washer Repair",
            forCustomer: "Vellore Village Residents",
            code: "WDBVELLORE25",
            website: "jkappliancerepair.ca",
            phone: "647-560-8966",
            primaryColor: "#0071e3"
          }
        ]}
      />
      
      {/* Blog Section */}
      <BlogSection 
        title="Appliance Tips for Woodbridge Residents"
        subtitle="Helpful guides and maintenance tips specifically for Woodbridge homeowners and residents"
        areaId="woodbridge"
        showCategories={true}
        limit={3}
        viewAllLink={true}
      />
      
      {/* Booking Section */}
      <BookingSection />
    </div>
  );
} 