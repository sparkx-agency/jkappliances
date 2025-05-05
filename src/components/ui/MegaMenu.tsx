"use client";

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

type ServiceItem = {
  name: string;
  href: string;
  icon: React.ReactNode;
};

const MegaMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close the menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuRef]);

  const serviceItems: ServiceItem[] = [
    {
      name: 'Refrigerator Repair',
      href: '/refrigerator-repair',
      icon: (
        <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <rect x="4" y="2" width="16" height="20" rx="2" strokeWidth="2" />
          <line x1="4" y1="10" x2="20" y2="10" strokeWidth="2" />
          <line x1="12" y1="10" x2="12" y2="18" strokeWidth="2" />
        </svg>
      ),
    },
    {
      name: 'Dishwasher Repair',
      href: '/dishwasher-repair',
      icon: (
        <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <rect x="4" y="3" width="16" height="18" rx="2" strokeWidth="2" />
          <line x1="4" y1="8" x2="20" y2="8" strokeWidth="2" />
          <path d="M7 12h2M7 16h2M15 12h2M15 16h2" strokeWidth="2" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      name: 'Washer Repair',
      href: '/washer-repair',
      icon: (
        <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="8" strokeWidth="2" />
          <circle cx="12" cy="12" r="3" strokeWidth="2" />
          <path d="M12 4v2M4 12h2M12 18v2M18 12h2" strokeWidth="1" />
        </svg>
      ),
    },
    {
      name: 'Dryer Repair',
      href: '/dryer-repair',
      icon: (
        <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <rect x="4" y="3" width="16" height="18" rx="2" strokeWidth="2" />
          <circle cx="12" cy="12" r="5" strokeWidth="2" />
          <path d="M16 6h1" strokeWidth="2" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      name: 'Oven Repair',
      href: '/oven-repair',
      icon: (
        <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <rect x="4" y="3" width="16" height="18" rx="2" strokeWidth="2" />
          <line x1="4" y1="8" x2="20" y2="8" strokeWidth="2" />
          <path d="M7 12H17M7 16H17" strokeWidth="2" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      name: 'Stove / Cooktop Repair',
      href: '/stove-repair',
      icon: (
        <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <rect x="3" y="3" width="18" height="18" rx="2" strokeWidth="2" />
          <circle cx="7" cy="7" r="2" strokeWidth="2" />
          <circle cx="17" cy="7" r="2" strokeWidth="2" />
          <circle cx="7" cy="17" r="2" strokeWidth="2" />
          <circle cx="17" cy="17" r="2" strokeWidth="2" />
        </svg>
      ),
    },
    {
      name: 'Freezer Repair',
      href: '/freezer-repair',
      icon: (
        <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <rect x="4" y="2" width="16" height="20" rx="2" strokeWidth="2" />
          <line x1="4" y1="10" x2="20" y2="10" strokeWidth="2" />
          <path d="M12 5v10M9 15l3 3 3-3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      name: 'Gas Appliance Repair',
      href: '/gas-appliance-repair',
      icon: (
        <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M4.5 19.5c1.5-2 3.5-3 5.5-3s4 1 5.5 3M8 13a4 4 0 100-8 4 4 0 000 8zM16 13a4 4 0 100-8 4 4 0 000 8z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      name: 'Installation Services',
      href: '/installation-services',
      icon: (
        <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      name: 'Maintenance Services',
      href: '/maintenance-services',
      icon: (
        <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M12 12a3 3 0 100-6 3 3 0 000 6z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
  ];

  return (
    <div className="relative inline-block text-left" ref={menuRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`relative px-3 py-1.5 rounded-full text-sm font-medium uppercase tracking-wider transition-colors duration-200 ${
          isOpen
            ? 'text-white bg-blue-600'
            : 'text-gray-800 hover:text-blue-600 hover:bg-white/10'
        }`}
        aria-expanded="false"
        aria-haspopup="true"
        {...(isOpen && {'aria-expanded': 'true'})}
      >
        Appliance Service
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-3 w-3 ml-1 inline-block" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M19 9l-7 7-7-7" 
          />
        </svg>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute left-0 z-50 mt-2 w-screen max-w-6xl bg-white rounded-xl shadow-xl border border-gray-100 p-6 focus:outline-none"
            style={{ maxWidth: '1100px', left: '-200px' }}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {serviceItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="flex items-center p-3 rounded-lg hover:bg-blue-50 transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  <div className="flex-shrink-0 mr-4">{item.icon}</div>
                  <div>
                    <p className="text-base font-medium text-gray-800">{item.name}</p>
                  </div>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MegaMenu; 