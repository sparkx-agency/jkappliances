"use client";

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  HomeIcon, 
  WrenchScrewdriverIcon, 
  MapPinIcon, 
  BuildingStorefrontIcon, 
  UserGroupIcon,
  PhoneIcon,
  MagnifyingGlassIcon,
  XMarkIcon,
  Bars3Icon,
  StarIcon
} from '@heroicons/react/24/outline';

interface MobileNavigationProps {
  phoneNumber: string;
}

const MobileNavigation: React.FC<MobileNavigationProps> = ({ phoneNumber }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const pathname = usePathname();
  const drawerRef = useRef<HTMLDivElement>(null);

  // Close drawer when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (drawerRef.current && !drawerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  // Close drawer when changing routes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Prevent body scroll when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  // Navigation tabs
  const navigationTabs = [
    {
      id: 'services',
      name: 'Services',
      icon: <WrenchScrewdriverIcon className="w-6 h-6" />,
      content: [
        { name: 'Refrigerator Repair', href: '/services/refrigerator-repair' },
        { name: 'Washer Repair', href: '/services/washer-repair' },
        { name: 'Dryer Repair', href: '/services/dryer-repair' },
        { name: 'Dishwasher Repair', href: '/services/dishwasher-repair' },
        { name: 'Oven Repair', href: '/services/oven-repair' },
        { name: 'Stove/Cooktop Repair', href: '/services/stove-repair' },
        { name: 'Freezer Repair', href: '/services/freezer-repair' },
        { name: 'Gas Appliance Repair', href: '/services/gas-appliance-repair' },
        { name: 'Installation Services', href: '/services/installation-services' },
        { name: 'Maintenance Services', href: '/services/maintenance-services' },
        { name: 'All Services', href: '/services' },
      ]
    },
    {
      id: 'areas',
      name: 'Areas',
      icon: <MapPinIcon className="w-6 h-6" />,
      content: [
        { name: 'Toronto', href: '/appliance-repair-toronto' },
        { name: 'Vaughan', href: '/appliance-repair-vaughan' },
        { name: 'Markham', href: '/appliance-repair-markham' },
        { name: 'Richmond Hill', href: '/appliance-repair-richmond-hill' },
        { name: 'Oakville', href: '/appliance-repair-oakville' },
        { name: 'North York', href: '/appliance-repair-north-york' },
        { name: 'Woodbridge', href: '/appliance-repair-woodbridge' },
        { name: 'Newmarket', href: '/appliance-repair-newmarket' },
        { name: 'Kleinburg', href: '/appliance-repair-kleinburg' },
        { name: 'Halton Hills', href: '/appliance-repair-halton-hills' },
        { name: 'All Service Areas', href: '/areas' },
      ]
    },
    {
      id: 'brands',
      name: 'Brands',
      icon: <BuildingStorefrontIcon className="w-6 h-6" />,
      content: [
        { name: 'Samsung', href: '/brands/samsung' },
        { name: 'LG', href: '/brands/lg' },
        { name: 'Whirlpool', href: '/brands/whirlpool' },
        { name: 'GE', href: '/brands/ge' },
        { name: 'Maytag', href: '/brands/maytag' },
        { name: 'KitchenAid', href: '/brands/kitchenaid' },
        { name: 'Bosch', href: '/brands/bosch' },
        { name: 'Miele', href: '/brands/miele' },
        { name: 'Frigidaire', href: '/brands/frigidaire' },
        { name: 'All Brands', href: '/brands' },
      ]
    },
    {
      id: 'reviews',
      name: 'Reviews',
      icon: <StarIcon className="w-6 h-6" />,
      content: [
        { name: 'All Reviews', href: '/reviews' },
        { name: 'Google Reviews', href: '/reviews?platform=google' },
        { name: 'Yelp Reviews', href: '/reviews?platform=yelp' },
        { name: 'Facebook Reviews', href: '/reviews?platform=facebook' },
        { name: 'HomeStars Reviews', href: '/reviews?platform=homestars' },
        { name: 'Leave a Review', href: '/reviews#leave-review' },
      ]
    },
    {
      id: 'about',
      name: 'About',
      icon: <UserGroupIcon className="w-6 h-6" />,
      content: [
        { name: 'Our Story', href: '/about' },
        { name: 'Our Team', href: '/about/team' },
        { name: 'Careers', href: '/about/careers' },
        { name: 'Blog', href: '/blog' },
        { name: 'FAQs', href: '/faqs' },
        { name: 'Testimonials', href: '/testimonials' },
        { name: 'Contact Us', href: '/contact' },
      ]
    }
  ];

  return (
    <>
      {/* Toggle Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden flex items-center justify-center p-2 rounded-full bg-white shadow-sm text-blue-600 hover:bg-blue-50 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
        aria-label="Toggle mobile menu"
      >
        {isOpen ? (
          <XMarkIcon className="w-6 h-6" />
        ) : (
          <Bars3Icon className="w-6 h-6" />
        )}
      </button>

      {/* Overlay when drawer is open */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black z-40 md:hidden"
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Bottom Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={drawerRef}
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed bottom-0 left-0 right-0 w-full max-h-[85vh] bg-white z-50 overflow-hidden rounded-t-3xl shadow-[0_-8px_30px_rgba(0,0,0,0.12)] md:hidden"
          >
            {/* Drawer Header with Pill Handle */}
            <div className="flex flex-col items-center pt-4 pb-2">
              <div className="w-12 h-1.5 bg-gray-300 rounded-full mb-4"></div>
              
              {/* Search Box */}
              <div className="w-full px-4 mb-4">
                <div className="relative">
                  <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search services, areas, brands..."
                    className="w-full py-3 pl-10 pr-4 text-sm bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all duration-200"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  {searchQuery && (
                    <button 
                      className="absolute right-3 top-1/2 transform -translate-y-1/2"
                      onClick={() => setSearchQuery("")}
                    >
                      <XMarkIcon className="w-5 h-5 text-gray-400" />
                    </button>
                  )}
                </div>
              </div>
              
              {/* Quick Buttons */}
              <div className="flex w-full px-4 space-x-2 mb-4">
                <Link 
                  href="/book" 
                  className="flex-1 flex items-center justify-center py-3 bg-blue-600 text-white font-medium rounded-xl hover:bg-blue-700 transition-colors"
                >
                  Book Now
                </Link>
                <a 
                  href={`tel:${phoneNumber.replace(/-/g, '')}`}
                  className="flex-1 flex items-center justify-center py-3 bg-gray-100 text-gray-900 font-medium rounded-xl hover:bg-gray-200 transition-colors"
                >
                  <PhoneIcon className="w-5 h-5 mr-2" />
                  Call Us
                </a>
              </div>
              
              {/* Tabs */}
              <div className="flex w-full border-b border-gray-200">
                {navigationTabs.map((tab) => (
                  <button
                    key={tab.id}
                    className={`flex flex-col items-center justify-center px-4 py-3 text-sm transition-colors ${
                      activeTab === tab.id ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600 hover:text-blue-600'
                    }`}
                    onClick={() => setActiveTab(activeTab === tab.id ? null : tab.id)}
                  >
                    <span className="mb-1">{tab.icon}</span>
                    <span>{tab.name}</span>
                  </button>
                ))}
              </div>
            </div>
            
            {/* Tab Content */}
            <div className="overflow-y-auto max-h-[60vh] pb-8">
              {activeTab && (
                <div className="px-4 py-4">
                  <div className="grid grid-cols-1 gap-3">
                    {navigationTabs.find(tab => tab.id === activeTab)?.content.map((item, index) => (
                      <Link
                        key={index}
                        href={item.href}
                        className="flex items-center px-4 py-3 rounded-xl bg-gray-50 hover:bg-blue-50 text-gray-900 hover:text-blue-600 transition-colors"
                      >
                        <span>{item.name}</span>
                        <svg className="w-4 h-4 ml-auto text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
              
              {/* Home Content (Default when no tab is selected) */}
              {!activeTab && (
                <div className="px-4 py-4">
                  <div className="mb-6">
                    <h3 className="text-lg font-medium text-gray-900 mb-3">Popular Services</h3>
                    <div className="grid grid-cols-2 gap-3">
                      <Link href="/services/refrigerator-repair" className="bg-gray-50 rounded-xl p-4 hover:bg-blue-50 transition-colors">
                        <span className="block text-blue-600 mb-1">
                          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <rect x="4" y="2" width="16" height="20" rx="2" strokeWidth="1.5" />
                            <line x1="4" y1="10" x2="20" y2="10" strokeWidth="1.5" />
                          </svg>
                        </span>
                        <span className="text-sm font-medium">Refrigerator Repair</span>
                      </Link>
                      <Link href="/services/washer-repair" className="bg-gray-50 rounded-xl p-4 hover:bg-blue-50 transition-colors">
                        <span className="block text-blue-600 mb-1">
                          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <circle cx="12" cy="12" r="8" strokeWidth="1.5" />
                            <circle cx="12" cy="12" r="3" strokeWidth="1.5" />
                          </svg>
                        </span>
                        <span className="text-sm font-medium">Washer Repair</span>
                      </Link>
                      <Link href="/services/dryer-repair" className="bg-gray-50 rounded-xl p-4 hover:bg-blue-50 transition-colors">
                        <span className="block text-blue-600 mb-1">
                          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <rect x="4" y="3" width="16" height="18" rx="2" strokeWidth="1.5" />
                            <circle cx="12" cy="12" r="5" strokeWidth="1.5" />
                          </svg>
                        </span>
                        <span className="text-sm font-medium">Dryer Repair</span>
                      </Link>
                      <Link href="/services/dishwasher-repair" className="bg-gray-50 rounded-xl p-4 hover:bg-blue-50 transition-colors">
                        <span className="block text-blue-600 mb-1">
                          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <rect x="4" y="3" width="16" height="18" rx="2" strokeWidth="1.5" />
                            <line x1="4" y1="8" x2="20" y2="8" strokeWidth="1.5" />
                            <path d="M7 12h2M7 16h2M15 12h2M15 16h2" strokeWidth="1.5" strokeLinecap="round" />
                          </svg>
                        </span>
                        <span className="text-sm font-medium">Dishwasher Repair</span>
                      </Link>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h3 className="text-lg font-medium text-gray-900 mb-3">Top Service Areas</h3>
                    <div className="grid grid-cols-1 gap-2">
                      <Link href="/appliance-repair-toronto" className="flex items-center px-4 py-3 rounded-xl bg-gray-50 hover:bg-blue-50 transition-colors">
                        <span>Toronto</span>
                        <svg className="w-4 h-4 ml-auto text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                      <Link href="/appliance-repair-vaughan" className="flex items-center px-4 py-3 rounded-xl bg-gray-50 hover:bg-blue-50 transition-colors">
                        <span>Vaughan</span>
                        <svg className="w-4 h-4 ml-auto text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                      <Link href="/appliance-repair-markham" className="flex items-center px-4 py-3 rounded-xl bg-gray-50 hover:bg-blue-50 transition-colors">
                        <span>Markham</span>
                        <svg className="w-4 h-4 ml-auto text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default MobileNavigation; 