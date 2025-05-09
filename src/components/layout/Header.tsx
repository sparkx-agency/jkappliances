"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { PhoneIcon, ShoppingBagIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { usePathname } from 'next/navigation';
import Button from '@/components/ui/Button';
import MegaMenu from '@/components/navigation/MegaMenu';
import MobileNavigation from '@/components/navigation/MobileNavigation';

const Header = () => {
  const pathname = usePathname();
  const phoneNumber = "647-560-8966";

  const navItems = [
    // { name: 'Home', href: '/' }, // Removed Home link
    // Removed Services link as it will be replaced with MegaMenu
    { name: 'Brands', href: '/brands' },
    // Removed Service Areas from desktop navigation
    { name: 'Reviews', href: '/reviews' },
    // Removed About Us from regular links as it will be replaced with MegaMenu
    { name: 'Store', href: '/store' },
  ];

  // Appliance Services megamenu content
  const applianceServicesMenuGroups = [
    {
      title: "Kitchen Appliances",
      items: [
        {
          title: "Refrigerator Repair",
          href: "/refrigerator-repair",
          description: "Cold storage appliance repairs",
          icon: (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <rect x="4" y="2" width="16" height="20" rx="2" strokeWidth="1.5" />
              <line x1="4" y1="10" x2="20" y2="10" strokeWidth="1.5" />
              <line x1="12" y1="10" x2="12" y2="18" strokeWidth="1.5" />
            </svg>
          )
        },
        {
          title: "Dishwasher Repair",
          href: "/dishwasher-repair",
          description: "For clean dishes every time",
          icon: (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <rect x="4" y="3" width="16" height="18" rx="2" strokeWidth="1.5" />
              <line x1="4" y1="8" x2="20" y2="8" strokeWidth="1.5" />
              <path d="M7 12h2M7 16h2M15 12h2M15 16h2" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          )
        },
        {
          title: "Oven Repair",
          href: "/oven-repair",
          description: "Restore your baking power",
          icon: (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <rect x="4" y="3" width="16" height="18" rx="2" strokeWidth="1.5" />
              <line x1="4" y1="8" x2="20" y2="8" strokeWidth="1.5" />
              <path d="M7 12H17M7 16H17" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          )
        },
        {
          title: "Stove/Cooktop Repair",
          href: "/stove-repair",
          description: "Fix your cooking surface",
          icon: (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <rect x="3" y="3" width="18" height="18" rx="2" strokeWidth="1.5" />
              <circle cx="7" cy="7" r="2" strokeWidth="1.5" />
              <circle cx="17" cy="7" r="2" strokeWidth="1.5" />
              <circle cx="7" cy="17" r="2" strokeWidth="1.5" />
              <circle cx="17" cy="17" r="2" strokeWidth="1.5" />
            </svg>
          )
        }
      ]
    },
    {
      title: "Laundry Appliances",
      items: [
        {
          title: "Washer Repair",
          href: "/washer-repair",
          description: "Fix washing machine issues",
          icon: (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <circle cx="12" cy="12" r="8" strokeWidth="1.5" />
              <circle cx="12" cy="12" r="3" strokeWidth="1.5" />
              <path d="M12 4v2M4 12h2M12 18v2M18 12h2" strokeWidth="1" />
            </svg>
          )
        },
        {
          title: "Dryer Repair",
          href: "/dryer-repair",
          description: "Solutions for drying problems",
          icon: (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <rect x="4" y="3" width="16" height="18" rx="2" strokeWidth="1.5" />
              <circle cx="12" cy="12" r="5" strokeWidth="1.5" />
              <path d="M16 6h1" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          )
        }
      ]
    },
    {
      title: "Special Services",
      items: [
        {
          title: "Freezer Repair",
          href: "/freezer-repair",
          description: "Keep your frozen items safe",
          icon: (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <rect x="4" y="2" width="16" height="20" rx="2" strokeWidth="1.5" />
              <line x1="4" y1="10" x2="20" y2="10" strokeWidth="1.5" />
              <path d="M12 5v10M9 15l3 3 3-3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          )
        },
        {
          title: "Gas Appliance Repair",
          href: "/gas-appliance-repair",
          description: "Safe repairs for gas systems",
          icon: (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M4.5 19.5c1.5-2 3.5-3 5.5-3s4 1 5.5 3M8 13a4 4 0 100-8 4 4 0 000 8zM16 13a4 4 0 100-8 4 4 0 000 8z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          )
        },
        {
          title: "Installation Services",
          href: "/installation-services",
          description: "Expert appliance installation",
          icon: (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          )
        },
        {
          title: "Maintenance Services",
          href: "/maintenance-services",
          description: "Preventative care plans",
          icon: (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M12 12a3 3 0 100-6 3 3 0 000 6z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          )
        }
      ]
    }
  ];

  const applianceServicesFeaturedImage = {
    src: "/images/megamenu-image.webp",
    alt: "Appliance repair technician fixing a refrigerator",
    title: "Same-Day Repairs Available",
    description: "Our certified technicians can fix most appliance issues on the first visit.",
    href: "/book"
  };

  // About Us megamenu content
  const aboutUsMenuGroups = [
    {
      title: "About Us",
      items: [
        {
          title: "Our Story",
          href: "/about",
          description: "Learn about our history and mission",
          icon: (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          )
        },
        {
          title: "Our Team",
          href: "/about",
          description: "Meet our certified technicians",
          icon: (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          )
        },
        {
          title: "Careers",
          href: "/about",
          description: "Join our growing team",
          icon: (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          )
        }
      ]
    },
    {
      title: "Resources",
      items: [
        {
          title: "Blog",
          href: "/blog",
          description: "Appliance tips and guides",
          icon: (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
            </svg>
          )
        },
        {
          title: "FAQs",
          href: "/faq",
          description: "Frequently asked questions",
          icon: (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          )
        },
        {
          title: "Testimonials",
          href: "/reviews",
          description: "What our customers say",
          icon: (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
            </svg>
          )
        }
      ]
    },
    {
      title: "Customer Service",
      items: [
        {
          title: "Contact Us",
          href: "/contact",
          description: "Get in touch with our team",
          icon: (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          )
        },
        {
          title: "Service Warranty",
          href: "/warranty",
          description: "Our guarantee to you",
          icon: (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          )
        },
        {
          title: "Service Areas",
          href: "/areas",
          description: "Where we provide service",
          icon: (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          )
        }
      ]
    }
  ];

  const aboutUsFeaturedImage = {
    src: "/images/megamenu-image.webp",
    alt: "Appliance repair technician at work",
    title: "Expert Appliance Repair",
    description: "Our certified technicians can fix any appliance issue, from refrigerators to ovens.",
    href: "/book"
  };

  return (
    <motion.header 
      className="fixed w-full z-50 bg-white/95"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Image
                  src="/images/appliances-logo.webp"
                  alt="JK Appliances"
                  width={200}
                  height={60}
                  priority
                  className="h-auto"
                  style={{ objectFit: "contain" }} />
              </motion.div>
            </Link>
          </div>

          {/* Mobile Header Buttons (Message & Call) */}
          <div className="flex md:hidden items-center gap-3 mr-2 pl-26">
            <motion.button 
              className="flex items-center justify-center w-10 h-10 rounded-full bg-white text-black shadow-sm active:shadow-inner border border-gray-200"
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              aria-label="Send a text message"
              onClick={() => window.open(`sms:${phoneNumber.replace(/-/g, '')}`)}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 15C21 15.5304 20.7893 16.0391 20.4142 16.4142C20.0391 16.7893 19.5304 17 19 17H7L3 21V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V15Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </motion.button>
            <motion.a 
              href={`tel:${phoneNumber.replace(/-/g, '')}`}
              className="flex items-center justify-center w-10 h-10 rounded-full bg-white text-black shadow-sm active:shadow-inner border border-gray-200"
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              aria-label="Call us"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22 16.92V19.92C22 20.4704 21.7893 20.9996 21.4142 21.3746C21.0391 21.7497 20.5099 21.9604 19.96 21.96C16.4214 21.7856 13.0074 20.5341 10.07 18.36C7.37382 16.3805 5.19 14.1967 3.21 11.5C1.03 8.54089 0.778519 5.10977 0.61 1.59997C0.60975 1.05005 0.820387 0.521144 1.19537 0.146149C1.57036 -0.228847 2.09877 -0.43941 2.64 -0.43997H5.64C6.1305 -0.44248 6.60456 -0.259412 6.97453 -0.022358C7.3445 0.214696 7.5881 0.585343 7.66 1C7.78704 1.89169 7.99898 2.77085 8.29 3.62C8.4256 3.98808 8.44353 4.38494 8.34095 4.76258C8.23837 5.14022 8.02084 5.47998 7.71 5.73L6.4 7.03C8.2482 10.041 10.689 12.5461 13.7 14.42L15 13.11C15.2514 12.7991 15.5923 12.5809 15.9707 12.4775C16.3491 12.3741 16.7466 12.3911 17.115 12.53C17.9642 12.822 18.8434 13.034 19.735 13.16C20.1528 13.2326 20.5261 13.4765 20.766 13.8457C21.0059 14.2149 21.0935 14.6673 21 15.15V16.92H22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </motion.a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block flex-grow mx-4">
            <nav className="flex justify-center pl-10">
              <motion.div 
                className="flex items-center space-x-1 bg-gray-200 backdrop-blur-sm rounded-full px-5 py-2.5 shadow-lg"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <ul className="flex items-center space-x-3">
                  {/* MegaMenu for Appliance Services */}
                  <li className="relative">
                    <MegaMenu 
                      label="Appliance Service"
                      groups={applianceServicesMenuGroups}
                      featuredImage={applianceServicesFeaturedImage}
                    />
                  </li>
                  {navItems.map((item) => (
                    <li key={item.name} className="relative">
                      <Link
                        href={item.href}
                        className={`relative px-3 py-1.5 rounded-full text-sm font-medium uppercase tracking-wider transition-colors duration-200 ${ 
                          pathname === item.href 
                            ? 'text-white bg-blue-600'  
                            : 'text-gray-800 hover:text-blue-600 hover:bg-white/10'
                        }`}
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                  {/* About Us MegaMenu */}
                  <li className="relative">
                    <MegaMenu 
                      label="About Us"
                      groups={aboutUsMenuGroups}
                      featuredImage={aboutUsFeaturedImage}
                    />
                  </li>
                  <li className="relative">
                    <button className="p-1.5 rounded-full text-gray-800 hover:text-blue-600 hover:bg-white/10">
                      <ShoppingBagIcon className="w-5 h-5" />
                      <span className="sr-only">Cart</span>
                    </button>
                  </li>
                </ul>
              </motion.div>
            </nav>
          </div>

          {/* Right side - Phone & Button */}
          <div className="hidden md:flex items-center space-x-4 flex-shrink-0">
            <motion.a 
              href={`tel:${phoneNumber.replace(/-/g, '')}`}
              className="flex items-center font-medium px-4 py-1.5 rounded-full text-blue-600 hover:text-blue-700 bg-blue-50 hover:bg-blue-100 transition-colors duration-300"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.5}}
            >
              <PhoneIcon className="h-5 w-5 mr-2" />
              <span>{phoneNumber}</span>
            </motion.a>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.6}}
              className="rounded-full overflow-hidden"
            >
              <Button 
                href="/book" 
                size="small"
                variant="primary"
              >
                Book Now
              </Button>
            </motion.div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <MobileNavigation phoneNumber={phoneNumber} />
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header; 