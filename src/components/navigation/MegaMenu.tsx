"use client";

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

interface MegaMenuItem {
  title: string;
  href: string;
  description?: string;
  icon?: React.ReactNode;
}

interface MegaMenuGroup {
  title: string;
  items: MegaMenuItem[];
}

interface MegaMenuProps {
  label: string;
  groups: MegaMenuGroup[];
  featuredImage?: {
    src: string;
    alt: string;
    title: string;
    description: string;
    href: string;
  };
}

const MegaMenu: React.FC<MegaMenuProps> = ({ label, groups, featuredImage }) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  
  // Store button position to help with visual indicator
  const [buttonPos, setButtonPos] = useState({ left: 0, width: 0 });

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  // Get button position for indicator
  useEffect(() => {
    if (isOpen && buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      setButtonPos({
        left: rect.left + rect.width / 2,
        width: rect.width
      });
    }
  }, [isOpen]);

  // Close menu when clicking outside
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
  }, []);

  return (
    <div 
      className="relative" 
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      ref={menuRef}
    >
      <button
        ref={buttonRef}
        onClick={handleClick}
        className={`flex items-center px-3 py-1.5 rounded-full text-sm font-medium uppercase tracking-wider transition-colors duration-200 ${
          isOpen 
            ? 'text-blue-600 bg-white/80' 
            : 'text-gray-800 hover:text-blue-600 hover:bg-white/10'
        }`}
        aria-expanded={isOpen}
      >
        {label}
        <svg 
          className={`w-4 h-4 ml-1 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
            className="fixed left-1/2 z-50 w-screen max-w-6xl -translate-x-1/2 px-4"
            style={{ top: "5rem" }} // Position below the header
          >
            {/* Triangle indicator pointing to the button */}
            <div 
              className="absolute w-4 h-4 bg-white rotate-45 transform -translate-x-1/2"
              style={{ 
                left: `calc(${buttonPos.left}px - 50vw + 50%)`,
                top: "-0.5rem"
              }}
            ></div>
            
            <div className="overflow-hidden bg-white rounded-xl shadow-2xl ring-1 ring-gray-100">
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 p-8">
                {/* Menu Groups */}
                <div className="col-span-1 md:col-span-2 lg:col-span-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {groups.map((group, index) => (
                    <div key={index} className="space-y-4">
                      <h3 className="text-sm font-medium text-gray-900 uppercase tracking-wider">
                        {group.title}
                      </h3>
                      <ul className="space-y-3">
                        {group.items.map((item, itemIndex) => (
                          <li key={itemIndex}>
                            <Link 
                              href={item.href}
                              className="text-m group flex items-center text-gray-600 hover:text-blue-600 transition-colors"
                              onClick={() => setIsOpen(false)}
                            >
                              {item.icon && (
                                <span className="mr-2 text-gray-400 group-hover:text-blue-500 transition-colors">{item.icon}</span>
                              )}
                              <span>{item.title}</span>
                            </Link>
                            {item.description && (
                              <p className="mt-1 text-xs text-gray-500">{item.description}</p>
                            )}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                {/* Featured Image (Optional) */}
                {featuredImage && (
                  <div className="hidden lg:block">
                    <div className="relative h-full overflow-hidden rounded-lg">
                      <div className="relative h-48 w-full overflow-hidden rounded-lg">
                        <Image
                          src={featuredImage.src}
                          alt={featuredImage.alt}
                          fill
                          className="object-cover transform hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <div className="p-4">
                        <h4 className="text-sm font-semibold text-gray-900">{featuredImage.title}</h4>
                        <p className="mt-1 text-sm text-gray-500">{featuredImage.description}</p>
                        <Link
                          href={featuredImage.href}
                          className="mt-3 inline-flex text-sm font-medium text-blue-600 hover:text-blue-800"
                          onClick={() => setIsOpen(false)}
                        >
                          Learn more
                          <svg 
                            className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            stroke="currentColor"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MegaMenu; 