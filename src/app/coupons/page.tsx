import React from 'react';
import CommonCouponSection from '@/components/sections/common/CommonCouponSection';
import ModernCTASection from '@/components/sections/common/ModernCTASection';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Appliance Repair Coupons & Discounts | JK Appliances',
  description: 'Save on your appliance repair with exclusive coupons and discounts for refrigerator, washer, dryer, and other appliance repairs in the Greater Toronto Area.',
  openGraph: {
    title: 'Appliance Repair Coupons & Discounts | JK Appliances',
    description: 'Save on your appliance repair with exclusive coupons and discounts for refrigerator, washer, dryer, and other appliance repairs in the Greater Toronto Area.',
    url: 'https://jkappliancerepair.ca/coupons',
    type: 'website',
  },
};

export default function CouponsPage() {
  return (
    <div className="pt-24">
      <div className="bg-gradient-to-b from-gray-100 to-white">
        <div className="container mx-auto px-4 py-16 sm:py-24">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Exclusive Coupons & Discounts
            </h1>
            <p className="text-xl text-gray-600">
              Save on your appliance repair service with our special offers and promotions. Simply choose a coupon and apply it during the booking process.
            </p>
          </div>
        </div>
      </div>
      
      <CommonCouponSection 
        title="Save on Your Repair Today" 
        subtitle="Use these exclusive coupons when booking your appliance repair service online"
      />
      
      <div className="bg-white py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-blue-50 rounded-3xl p-8 sm:p-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
              How to Use Our Coupons
            </h2>
            
            <ol className="space-y-6">
              <li className="flex">
                <span className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 text-white font-bold mr-4">1</span>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Choose a Coupon</h3>
                  <p className="text-gray-600">Select the coupon that best applies to your appliance repair needs.</p>
                </div>
              </li>
              
              <li className="flex">
                <span className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 text-white font-bold mr-4">2</span>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Click "Use Coupon"</h3>
                  <p className="text-gray-600">This will take you to our booking page with the coupon code automatically applied.</p>
                </div>
              </li>
              
              <li className="flex">
                <span className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 text-white font-bold mr-4">3</span>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Complete Your Booking</h3>
                  <p className="text-gray-600">Fill out the required information and submit your service request. The discount will be applied to your final service charge.</p>
                </div>
              </li>
            </ol>
            
            <div className="mt-8 bg-white p-6 rounded-xl border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Important Notes:</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Coupons are valid for online bookings only</li>
                <li>One coupon per service visit</li>
                <li>Cannot be combined with other offers or promotions</li>
                <li>Must mention coupon code during service if booking by phone</li>
                <li>We reserve the right to modify or cancel promotions at any time</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      <ModernCTASection />
    </div>
  );
} 