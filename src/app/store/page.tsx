"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import ModernCTASection from '@/components/sections/common/ModernCTASection';

export default function StorePage() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;
    
    setLoading(true);
    // This would normally be a server action or API call to save the email
    // For demo purposes, we're just simulating a delay
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1000);
  };

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
                Our Store <br />Coming Soon
              </h1>
              <p className="text-xl text-[#424245] mb-8 leading-relaxed">
                We're working on creating a comprehensive online store where you'll find quality appliance parts, maintenance products, and accessories to keep your home running smoothly.
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
                  alt="Appliance parts and accessories coming soon"
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
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs text-[#86868b]">Launch Date</div>
                    <div className="text-sm font-medium text-[#1d1d1f]">Coming Summer 2025</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Coming Soon Section */}
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
              What to Expect
            </h2>
            <p className="text-lg text-[#86868b] max-w-3xl mx-auto">
              Our online store will feature everything you need to maintain and enhance your home appliances.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Quality Replacement Parts',
                description: 'Genuine manufacturer parts for all major brands, ensuring perfect compatibility and optimal performance.',
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
                  </svg>
                )
              },
              {
                title: 'Maintenance Products',
                description: 'Specialized cleaners, filters, and maintenance kits to keep your appliances running efficiently and extend their lifespan.',
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
                  </svg>
                )
              },
              {
                title: 'DIY Tools & Accessories',
                description: 'User-friendly tools and accessories designed for simple maintenance tasks and minor repairs that any homeowner can handle.',
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21.75 6.75a4.5 4.5 0 01-4.884 4.484c-1.076-.091-2.264.071-2.95.904l-7.152 8.684a2.548 2.548 0 11-3.586-3.586l8.684-7.152c.833-.686.995-1.874.904-2.95a4.5 4.5 0 016.336-4.486l-3.276 3.276a3.004 3.004 0 002.25 2.25l3.276-3.276c.256.565.398 1.192.398 1.852z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.867 19.125h.008v.008h-.008v-.008z" />
                  </svg>
                )
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#f5f5f7] rounded-3xl p-8 shadow-sm hover:shadow-md transition-all"
              >
                <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-medium text-[#1d1d1f] mb-4">{feature.title}</h3>
                <p className="text-[#424245]">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Newsletter Section */}
      <section className="py-24 bg-[#f5f5f7]">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-14"
          >
            <h2 className="text-4xl font-semibold text-[#1d1d1f] mb-6">
              Stay Updated
            </h2>
            <p className="text-lg text-[#86868b] max-w-3xl mx-auto">
              Join our mailing list to be the first to know when our store launches and receive exclusive offers.
            </p>
          </motion.div>
          
          <div className="bg-white rounded-3xl shadow-sm p-10">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
                <div className="flex flex-col md:flex-row gap-4">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email address"
                    className="flex-1 px-6 py-4 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0071e3] focus:border-transparent"
                    required
                  />
                  <button
                    type="submit"
                    disabled={loading}
                    className="px-8 py-4 bg-[#0071e3] text-white rounded-full font-medium hover:bg-[#0077ed] transition-all flex items-center justify-center disabled:opacity-70"
                  >
                    {loading ? (
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                    ) : null}
                    Notify Me
                  </button>
                </div>
                <p className="text-xs text-[#86868b] mt-4 text-center">
                  We respect your privacy and will never share your information. You can unsubscribe at any time.
                </p>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-10"
              >
                <div className="w-16 h-16 bg-green-50 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-medium text-[#1d1d1f] mb-3">Thank You!</h3>
                <p className="text-[#424245] max-w-md mx-auto">
                  Your email has been added to our notification list. We'll let you know as soon as our store launches!
                </p>
              </motion.div>
            )}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <ModernCTASection 
        style="apple"
        title="Need Repairs While You Wait?"
        subtitle="Our expert technicians are available now to service all your appliance repair needs. Book a repair today!"
        primaryButtonText="Book a Repair"
        secondaryButtonText="Contact Us"
        secondaryButtonLink="/contact"
      />
    </div>
  );
} 