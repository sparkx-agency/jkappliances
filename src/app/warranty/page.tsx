"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import ModernCTASection from '@/components/sections/common/ModernCTASection';

// Warranty plan data
const warrantyPlans = [
  {
    id: 'standard',
    name: 'Standard Warranty',
    duration: '3 months',
    price: 'Included with all repairs',
    features: [
      'Parts and labor coverage',
      'No additional costs for return visits',
      'Available for all repaired appliances',
      'Transferrable if you move'
    ],
    isPopular: false
  },
  {
    id: 'extended',
    name: 'Extended Warranty',
    duration: '1 year',
    price: 'Starting at $99',
    features: [
      'Full parts and labor coverage',
      'Priority scheduling for service calls',
      'No cost for return visits',
      'Transferrable if you move',
      'Coverage for all repaired components'
    ],
    isPopular: true
  },
  {
    id: 'premium',
    name: 'Premium Warranty',
    duration: '2 years',
    price: 'Starting at $179',
    features: [
      'Full parts and labor coverage',
      'Same-day service guarantee',
      'Annual maintenance check included',
      'Transferrable if you move',
      'Complete appliance coverage',
      'Discounts on other appliance repairs'
    ],
    isPopular: false
  }
];

// Coverage details
const coverageDetails = [
  {
    title: 'Parts Coverage',
    description: 'Our warranty covers all parts that were repaired or replaced during the original service. This includes electronic components, mechanical parts, and other hardware installed by our technicians.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.5 12a7.5 7.5 0 0015 0m-15 0a7.5 7.5 0 1115 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077l1.41-.513m14.095-5.13l1.41-.513M5.106 17.785l1.15-.964m11.49-9.642l1.149-.964M7.501 19.795l.75-1.3m7.5-12.99l.75-1.3m-6.063 16.658l.26-1.477m2.605-14.772l.26-1.477m0 17.726l-.26-1.477M10.698 4.614l-.26-1.477M16.5 19.794l-.75-1.299M7.5 4.205L12 12m6.894 5.785l-1.149-.964M6.256 7.178l-1.15-.964m15.352 8.864l-1.41-.513M4.954 9.435l-1.41-.514M12.002 12l-3.75 6.495" />
      </svg>
    )
  },
  {
    title: 'Labor Coverage',
    description: 'All labor costs for warranty-related repairs are covered. Our certified technicians will diagnose and fix issues at no additional cost during the warranty period.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
      </svg>
    )
  },
  {
    title: 'Service Guarantee',
    description: "If the same issue recurs during the warranty period, we'll fix it at no additional cost. Our goal is your complete satisfaction with the repair service.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
      </svg>
    )
  }
];

// FAQ data
const faqData = [
  {
    question: 'What is covered under the standard warranty?',
    answer: "Our standard warranty covers parts and labor for the specific components that were repaired or replaced during the original service. If the same issue recurs within the warranty period, we'll fix it at no additional cost."
  },
  {
    question: 'How do I redeem my warranty service?',
    answer: "Simply contact our customer service department with your original service order number. We'll verify your warranty status and schedule a service appointment for you. There's no paperwork required - we keep detailed records of all repairs."
  },
  {
    question: 'Can I transfer my warranty to a new address?',
    answer: 'Yes, all of our warranties are transferable if you move. Just notify our customer service department of your new address, and the warranty will continue to protect your appliance at the new location for the remainder of the warranty period.'
  },
  {
    question: "What's not covered by the warranty?",
    answer: "Our warranty doesn't cover damage from misuse, improper maintenance, acts of nature, or problems unrelated to the original repair. It also doesn't cover cosmetic issues, consumable parts (like water filters), or issues caused by unauthorized repairs."
  },
  {
    question: 'Can I purchase an extended warranty after my repair?',
    answer: 'Yes, you can upgrade to an extended warranty within 30 days of your initial repair. Contact our customer service department to discuss available options for your specific appliance.'
  }
];

export default function WarrantyPage() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  
  return (
    <div className="bg-[#f5f5f7] pt-24">
      {/* Hero Section */}
      <section className="bg-white pt-16 pb-24">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <h1 className="text-5xl md:text-6xl font-semibold text-[#1d1d1f] mb-8 tracking-tight">
                Our Warranty <br />Coverage
              </h1>
              <p className="text-xl text-[#424245] mb-8 leading-relaxed">
                We stand behind every repair with comprehensive warranty coverage, giving you peace of mind that your appliances will keep running smoothly.
              </p>
              <div className="flex space-y-4 md:space-y-0 md:space-x-4 flex-col md:flex-row">
                <Link 
                  href="/book" 
                  className="px-8 py-4 bg-[#0071e3] text-white rounded-full font-medium hover:bg-[#0077ed] transition-all shadow-lg flex items-center justify-center"
                >
                  Book a Repair
                </Link>
                <Link 
                  href="/contact" 
                  className="px-8 py-4 bg-[#f5f5f7] text-[#1d1d1f] rounded-full font-medium hover:bg-[#e5e5ea] transition-all flex items-center justify-center"
                >
                  Contact Us
                </Link>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-lg">
                <Image
                  src="/images/technician-repairing.webp"
                  alt="Appliance repair technician providing warranty service"
                  width={600}
                  height={450}
                  priority
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-2xl shadow-lg">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-[#0071e3] rounded-full flex items-center justify-center text-white mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs text-[#86868b]">Satisfaction Rate</div>
                    <div className="text-sm font-medium text-[#1d1d1f]">98% Customer Satisfaction</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Warranty Plans Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-semibold text-[#1d1d1f] mb-6">
              Warranty Plans
            </h2>
            <p className="text-lg text-[#86868b] max-w-3xl mx-auto">
              Choose the right level of protection for your appliances with our flexible warranty options.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {warrantyPlans.map((plan, index) => (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`rounded-3xl overflow-hidden shadow-sm transition-all ${
                  plan.isPopular 
                    ? 'bg-[#f2f7fd] border-2 border-[#0071e3] transform scale-105 z-10' 
                    : 'bg-white hover:shadow-md'
                }`}
              >
                {plan.isPopular && (
                  <div className="bg-[#0071e3] text-white py-2 text-center text-sm font-medium">
                    Most Popular
                  </div>
                )}
                <div className="p-8">
                  <h3 className="text-2xl font-semibold text-[#1d1d1f] mb-2">{plan.name}</h3>
                  <p className="text-[#86868b] mb-4">Duration: {plan.duration}</p>
                  <p className="text-3xl font-semibold text-[#1d1d1f] mb-6">{plan.price}</p>
                  
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <svg className="w-5 h-5 text-[#0071e3] mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-[#424245]">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link 
                    href="/contact" 
                    className={`block text-center py-3 px-6 rounded-full font-medium transition-all ${
                      plan.isPopular
                        ? 'bg-[#0071e3] text-white hover:bg-[#0077ed]'
                        : 'bg-[#f5f5f7] text-[#1d1d1f] hover:bg-[#e5e5ea]'
                    }`}
                  >
                    Learn More
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Coverage Details Section */}
      <section className="py-24 bg-[#f5f5f7]">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-semibold text-[#1d1d1f] mb-6">
              What's Covered
            </h2>
            <p className="text-lg text-[#86868b] max-w-3xl mx-auto">
              Our comprehensive warranty coverage ensures your appliances keep running at their best.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {coverageDetails.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-md transition-all"
              >
                <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6">
                  {item.icon}
                </div>
                <h3 className="text-xl font-medium text-[#1d1d1f] mb-4">{item.title}</h3>
                <p className="text-[#424245]">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-semibold text-[#1d1d1f] mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-[#86868b] max-w-3xl mx-auto">
              Get answers to common questions about our warranty coverage.
            </p>
          </motion.div>
          
          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#f5f5f7] rounded-2xl overflow-hidden"
              >
                <button
                  onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                  className="w-full flex justify-between items-center p-6 text-left"
                >
                  <span className="text-lg font-medium text-[#1d1d1f]">{faq.question}</span>
                  <svg
                    className={`w-5 h-5 text-[#424245] transition-transform ${activeFaq === index ? 'rotate-180' : ''}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {activeFaq === index && (
                  <div className="px-6 pb-6 text-[#424245]">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <ModernCTASection 
        style="apple"
        title="Ready to Protect Your Appliances?"
        subtitle="Book your repair service today and enjoy peace of mind with our comprehensive warranty coverage."
        primaryButtonText="Book a Repair"
        secondaryButtonText="Contact Us"
        secondaryButtonLink="/contact"
      />
    </div>
  );
} 