"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface CouponProps {
  amount: string;
  type: string;
  forCustomer: string;
  code: string;
  website: string;
  phone: string;
  primaryColor?: string;
}

const Coupon: React.FC<CouponProps> = ({
  amount,
  type,
  forCustomer,
  code,
  website,
  phone,
  primaryColor = '#0071e3'
}) => {
  return (
    <motion.div 
      className="relative bg-white/95 backdrop-blur-sm rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all group"
      whileHover={{ y: -5, boxShadow: '0 12px 28px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -6px rgba(0, 0, 0, 0.05)' }}
      transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
    >
      <div className="absolute inset-0 border border-dashed border-gray-200 rounded-2xl pointer-events-none" aria-hidden="true"></div>
      <div className="p-7 pb-4">
        <div className="flex justify-between items-start">
          <div>
            <span className="text-6xl font-semibold tracking-tight" style={{ color: primaryColor }}>
              ${amount}
              <span className="text-2xl ml-1 font-medium">OFF</span>
            </span>
            <h3 className="text-base uppercase font-medium text-gray-800 mt-2 tracking-wider">
              {type}
            </h3>
            <p className="text-sm text-gray-500 mt-1">
              {forCustomer}
            </p>
          </div>
          
          <div className="bg-gray-50 rounded-xl overflow-hidden shadow-sm group-hover:shadow transition-shadow duration-300">
            <Image 
              src="/images/coupon-icons/qr-code.webp"
              alt="QR Code"
              width={80}
              height={80}
              className="opacity-90 group-hover:opacity-100 transition-opacity"
              style={{ objectFit: "contain" }} />
          </div>
        </div>

        <div className="mt-7 mb-2">
          <div className="flex items-center gap-1">
            <p className="text-sm text-gray-500">Code</p>
            <span className="font-medium text-[#0071e3] px-2 py-0.5 bg-blue-50 rounded-md text-sm">{code}</span>
            <span className="text-sm text-gray-400 mx-1.5">•</span>
            <p className="text-sm text-gray-500">Book online</p>
          </div>
          <p className="text-sm font-medium text-gray-800 mt-1.5">
            {website}
          </p>
        </div>
      </div>

      <Link 
        href={`/book?coupon=${code}`}
        className="block w-full py-3.5 text-center font-medium text-white transition-all duration-300 hover:brightness-105 relative overflow-hidden group-hover:after:left-full after:absolute after:top-0 after:bg-white/20 after:h-full after:w-1/3 after:transform after:skew-x-12 after:transition-all after:duration-700 after:-left-full"
        style={{ backgroundColor: primaryColor }}
      >
        Use Coupon
      </Link>
    </motion.div>
  );
};

interface CommonCouponSectionProps {
  title?: string;
  subtitle?: string;
}

/**
 * A common coupon section component that can be used across the entire website.
 * This component displays site-wide coupons rather than area-specific ones.
 */
const CommonCouponSection: React.FC<CommonCouponSectionProps> = ({
  title = "Save on Your Repair Today",
  subtitle = "Use these exclusive coupons for same-day appliance repair service"
}) => {
  const [showAllCoupons, setShowAllCoupons] = useState(false);
  
  // Site-wide main coupons
  const mainCoupons: CouponProps[] = [
    {
      amount: "30",
      type: "Appliance Repair",
      forCustomer: "New Customer Discount",
      code: "JKNEW30",
      website: "jkappliancerepair.ca",
      phone: "647-560-8966",
      primaryColor: "#0071e3"
    },
    {
      amount: "15",
      type: "Appliance Repair",
      forCustomer: "For Returning Customers",
      code: "JKRETURN15",
      website: "jkappliancerepair.ca",
      phone: "647-560-8966",
      primaryColor: "#0071e3"
    },
    {
      amount: "30",
      type: "Appliance Repair",
      forCustomer: "Senior Customer Discount",
      code: "JKSENIOR30",
      website: "jkappliancerepair.ca",
      phone: "647-560-8966",
      primaryColor: "#0071e3"
    }
  ];
  
  // Site-wide extra coupons
  const extraCoupons: CouponProps[] = [
    {
      amount: "35",
      type: "Refrigerator Repair",
      forCustomer: "Limited Time Offer",
      code: "JKFRIDGE35",
      website: "jkappliancerepair.ca",
      phone: "647-560-8966",
      primaryColor: "#ff9500"
    },
    {
      amount: "25",
      type: "Washer Repair",
      forCustomer: "This Week Only",
      code: "JKWASHER25",
      website: "jkappliancerepair.ca",
      phone: "647-560-8966",
      primaryColor: "#5856d6"
    },
    {
      amount: "20",
      type: "Dryer Repair",
      forCustomer: "For Online Bookings",
      code: "JKDRYER20",
      website: "jkappliancerepair.ca",
      phone: "647-560-8966",
      primaryColor: "#34c759"
    },
    {
      amount: "30",
      type: "Dishwasher Repair",
      forCustomer: "Online Special",
      code: "JKDISH30",
      website: "jkappliancerepair.ca",
      phone: "647-560-8966",
      primaryColor: "#007aff"
    }
  ];
  
  return (
    <section className="py-24 bg-gradient-to-b from-white to-[#f5f5f7]">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-semibold text-[#1d1d1f] mb-6 tracking-tight">
            {title}
          </h2>
          <p className="text-lg text-[#424245] max-w-3xl mx-auto font-light">
            {subtitle}
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {mainCoupons.map((coupon, index) => (
            <motion.div
              key={coupon.code}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Coupon {...coupon} />
            </motion.div>
          ))}
        </div>
        
        {showAllCoupons && (
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8 mt-8"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            {extraCoupons.map((coupon, index) => (
              <motion.div
                key={coupon.code}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Coupon {...coupon} />
              </motion.div>
            ))}
          </motion.div>
        )}
        
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <button
            onClick={() => setShowAllCoupons(!showAllCoupons)}
            className="inline-flex items-center px-7 py-3 rounded-full bg-white text-[#0071e3] font-medium shadow-sm hover:shadow border border-[#0071e3]/10 transition-all duration-200"
          >
            {showAllCoupons ? 'Show Less' : 'See More Coupons'}
            <svg 
              className={`ml-2 w-5 h-5 transition-transform duration-300 ${showAllCoupons ? 'rotate-180' : ''}`} 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </motion.div>
        
        <div className="mt-16 text-center text-gray-500 text-sm">
          <p>Coupons valid for online bookings only. Cannot be combined with other offers. One coupon per service.</p>
        </div>
      </div>
    </section>
  );
};

export default CommonCouponSection; 