"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { PhoneIcon, ShoppingBagIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { usePathname } from 'next/navigation';
import Button from '@/components/ui/Button';
import MegaMenu from '@/components/ui/MegaMenu';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    // { name: 'Home', href: '/' }, // Removed Home link
    // Removed Services link as it will be replaced with MegaMenu
    { name: 'Brands', href: '/brands' },
    { name: 'Service Areas', href: '/areas' },
    { name: 'About Us', href: '/about' },
    { name: 'Store', href: '/store' },
  ];

  const phoneNumber = '647-560-8966';

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
                  src="/images/appliances-logo.svg"
                  alt="JK Appliances"
                  width={200}
                  height={60}
                  priority
                  className="h-auto"
                />
              </motion.div>
            </Link>
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
                <ul className="flex items-center space-x-1">
                  {/* MegaMenu for Appliance Services */}
                  <li>
                    <MegaMenu />
                  </li>
                  {navItems.map((item) => (
                    <li key={item.name}>
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
                  <li>
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
          <button 
            className="md:hidden rounded-full p-2 bg-white text-blue-600 hover:bg-blue-50 shadow-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Open main menu</span>
            {mobileMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t border-gray-100"
          >
            <nav className="px-4 pt-4 pb-6 space-y-1">
              <div className="relative px-2 pb-4">
                <div className="relative group">
                  <input 
                    type="search"
                    placeholder="Enter City or Neighborhood..."
                    className="w-full py-3 pl-12 pr-4 text-sm text-gray-700 bg-gray-50 border-0 rounded-lg shadow-sm ring-1 ring-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
                  />
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3.5">
                    <MagnifyingGlassIcon className="w-5 h-5 text-gray-400 group-hover:text-blue-500 transition-colors duration-200" />
                  </div>
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3.5 pointer-events-none opacity-0 group-focus-within:opacity-100 transition-opacity duration-200">
                    <span className="text-xs font-medium text-gray-400">Type to search</span>
                  </div>
                </div>
              </div>
              
              {/* Add Appliance Service link for mobile (not using MegaMenu here) */}
              <Link
                href="/services"
                className={`block px-4 py-3 rounded-md text-base font-medium uppercase tracking-wider transition-colors ${ 
                  pathname === '/services' 
                    ? 'text-blue-600 bg-blue-50' 
                    : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Appliance Service
              </Link>
              
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`block px-4 py-3 rounded-md text-base font-medium uppercase tracking-wider transition-colors ${ 
                    pathname === item.href 
                      ? 'text-blue-600 bg-blue-50' 
                      : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 space-y-3 border-t border-gray-100 mt-2">
                  <a 
                    href={`tel:${phoneNumber.replace(/-/g, '')}`}
                    className="flex items-center px-4 py-3 text-blue-600 rounded-md hover:bg-blue-50 font-medium"
                  >
                    <PhoneIcon className="h-5 w-5 mr-3" />
                    <span>Call {phoneNumber}</span>
                  </a>
                  <Link 
                      href="/book" 
                      className="block w-full text-center px-4 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 font-medium"
                      onClick={() => setMobileMenuOpen(false)}
                  >
                      Book a Repair Now
                  </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header; 