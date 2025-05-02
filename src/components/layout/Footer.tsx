"use client";

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // Handle subscription logic here
      setIsSubscribed(true);
      setEmail('');
      
      // Reset subscription message after 3 seconds
      setTimeout(() => {
        setIsSubscribed(false);
      }, 3000);
    }
  };

  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'Services',
      links: [
        { name: 'Refrigerator Repair', href: '/services/refrigerator' },
        { name: 'Washer Repair', href: '/services/washer' },
        { name: 'Dryer Repair', href: '/services/dryer' },
        { name: 'Dishwasher Repair', href: '/services/dishwasher' },
        { name: 'Oven Repair', href: '/services/oven' },
      ]
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '/about' },
        { name: 'Service Areas', href: '/areas' },
        { name: 'Our Team', href: '/team' },
        { name: 'Reviews', href: '/reviews' },
        { name: 'Careers', href: '/careers' },
      ]
    },
    {
      title: 'Support',
      links: [
        { name: 'Contact Us', href: '/contact' },
        { name: 'FAQ', href: '/faq' },
        { name: 'Warranty', href: '/warranty' },
        { name: 'Pricing', href: '/pricing' },
        { name: 'Book a Service', href: '/book' },
      ]
    },
    {
      title: 'Legal',
      links: [
        { name: 'Privacy Policy', href: '/privacy' },
        { name: 'Terms of Service', href: '/terms' },
        { name: 'Accessibility', href: '/accessibility' },
        { name: 'Cookie Preferences', href: '/cookies' },
      ]
    }
  ];

  return (
    <footer className="bg-[#f5f5f7] pt-16 text-[#1d1d1f]">
      {/* Main footer content */}
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Newsletter subscription - Apple-style */}
        <div className="mb-16">
          <div className="max-w-xl mx-auto text-center">
            <h3 className="text-3xl font-semibold mb-4">Stay updated with JK Appliances</h3>
            <p className="text-gray-500 mb-12 font-light leading-relaxed">
              Subscribe to receive exclusive promotions, appliance care tips, and service updates tailored to your needs.
            </p>
            <form onSubmit={handleSubscribe} className="max-w-md mx-auto">
              <div className="flex items-center gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email address"
                  className="flex-1 px-4 py-3 rounded-lg bg-white border border-[#d2d2d7] focus:outline-none focus:ring-2 focus:ring-[#0071e3] text-sm"
                  required
                />
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="bg-[#0071e3] text-white px-5 py-3 rounded-lg text-sm font-medium transition-all hover:bg-[#0077ed]"
                >
                  Subscribe
                </motion.button>
              </div>
              {isSubscribed && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-[#0071e3] text-sm mt-2"
                >
                  Thank you for subscribing!
                </motion.div>
              )}
            </form>
          </div>
        </div>
        
        <hr className="border-t border-[#d2d2d7] mb-8" />
        
        {/* Apple-style directory navigation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="text-sm font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href} 
                      className="text-[#424245] hover:text-[#0071e3] text-sm transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        {/* Contact information with Apple-style layout */}
        <div className="mb-12 bg-white rounded-2xl p-6 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-[#0071e3] rounded-full flex items-center justify-center mr-4 text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
              </div>
              <div>
                <p className="text-m text-[#86868b]">Call us</p>
                <a href="tel:4165551234" className="text-[#1d1d1f] hover:text-[#0071e3] transition-colors font-medium">
                  (647) 560-8966
                </a>
              </div>
            </div>
            
            <div className="flex items-center">
              <div className="w-10 h-10 bg-[#0071e3] rounded-full flex items-center justify-center mr-4 text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </div>
              <div>
                <p className="text-m text-[#86868b]">Email us</p>
                <a href="mailto:info@jkappliances.com" className="text-[#1d1d1f] hover:text-[#0071e3] transition-colors font-medium">
                  service@jkappliances.ca
                </a>
              </div>
            </div>
            
            <div className="flex items-center">
              <div className="w-10 h-10 bg-[#0071e3] rounded-full flex items-center justify-center mr-4 text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <p className="text-m text-[#86868b]">Find us</p>
                <p className="text-[#1d1d1f] font-medium">18 Yonge St, Toronto, ON</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Footer bottom */}
        <div className="border-t border-[#d2d2d7] pt-8 pb-12">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <Link href="/">
                <Image
                  src="/images/appliances-logo.svg"
                  alt="JK Appliances"
                  width={180}
                  height={48}
                  className="h-auto"
                />
              </Link>
            </div>
            
            <div className="flex space-x-6 items-center">
              <a href="#" className="text-[#86868b] hover:text-[#0071e3] transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                </svg>
              </a>
              <a href="#" className="text-[#86868b] hover:text-[#0071e3] transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a href="#" className="text-[#86868b] hover:text-[#0071e3] transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div className="mt-6 text-center text-[#86868b] text-xs">
            <p>© {currentYear} JK Appliances. All rights reserved.</p>
            <p className="mt-2">
              <Link href="/privacy" className="hover:underline hover:text-[#0071e3]">Privacy Policy</Link> • 
              <Link href="/terms" className="hover:underline hover:text-[#0071e3] ml-2">Terms of Service</Link> • 
              <Link href="/accessibility" className="hover:underline hover:text-[#0071e3] ml-2">Accessibility</Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 