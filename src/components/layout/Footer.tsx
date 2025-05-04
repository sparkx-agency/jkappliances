"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

const Footer = () => {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if we're on the client-side
    if (typeof window !== "undefined") {
      // Set initial state
      setIsMobile(window.innerWidth < 768);
      
      // Add event listener for window resize
      const handleResize = () => {
        setIsMobile(window.innerWidth < 768);
      };
      
      window.addEventListener('resize', handleResize);
      
      // Clean up
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, []);

  const toggleSection = (section: string) => {
    setActiveSection(activeSection === section ? null : section);
  };

  // Footer columns and links
  const footerSections = [
    {
      title: "Services",
      links: [
        { label: "Refrigerator Repair", href: "/services/refrigerator-repair" },
        { label: "Washer Repair", href: "/services/washer-repair" },
        { label: "Dryer Repair", href: "/services/dryer-repair" },
        { label: "Dishwasher Repair", href: "/services/dishwasher-repair" },
        { label: "Oven Repair", href: "/services/oven-repair" },
        { label: "Stove Repair", href: "/services/stove-repair" },
      ],
    },
    {
      title: "Service Areas",
      links: [
        { label: "Toronto", href: "/areas/toronto" },
        { label: "Mississauga", href: "/areas/mississauga" },
        { label: "Brampton", href: "/areas/brampton" },
        { label: "Vaughan", href: "/areas/vaughan" },
        { label: "Richmond Hill", href: "/areas/richmond-hill" },
        { label: "View All Areas", href: "/service-areas" },
      ],
    },
    {
      title: "Brands",
      links: [
        { label: "Samsung", href: "/brands/samsung" },
        { label: "LG", href: "/brands/lg" },
        { label: "Whirlpool", href: "/brands/whirlpool" },
        { label: "GE", href: "/brands/ge" },
        { label: "Bosch", href: "/brands/bosch" },
        { label: "View All Brands", href: "/brands" },
      ],
    },
    {
      title: "About Us",
      links: [
        { label: "Our Company", href: "/about" },
        { label: "Contact Us", href: "/contact" },
        { label: "Book a Repair", href: "/book" },
        { label: "FAQ", href: "/faq" },
        { label: "Careers", href: "/careers" },
      ],
    },
  ];

  // Company details
  const companyDetails = [
    { 
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      content: "8 Lorraine Cres, Brampton, ON L6S 2R7",
      href: "https://maps.google.com/?q=8+Lorraine+Cres,+Brampton,+ON+L6S+2R7"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      content: "Info@jkappliances.ca",
      href: "mailto:Info@jkappliances.ca"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      content: "Monday - Sunday 7:00 AM - 9:00 PM",
      href: null
    }
  ];

  return (
    <footer className="bg-[#f5f5f7] border-t border-gray-200">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="flex flex-col md:flex-row items-start md:items-center mb-12">
          <div className="mb-6 md:mb-0">
            <Link href="/" className="inline-block">
              <Image
                src="/images/logo.webp"
                alt="JK Appliance Repair"
                width={160}
                height={40}
                className="h-10 w-auto"
                style={{ objectFit: "contain" }}
              />
            </Link>

            {/* Company Details */}
            <div className="mt-4 space-y-2.5 max-w-sm">
              {companyDetails.map((detail, index) => (
                detail.href ? (
                  <Link 
                    key={index} 
                    href={detail.href} 
                    className="flex items-start text-gray-500 hover:text-gray-700 transition-colors text-sm"
                    target={detail.href.startsWith('http') ? "_blank" : undefined}
                    rel={detail.href.startsWith('http') ? "noopener noreferrer" : undefined}
                  >
                    {detail.icon}
                    <span>{detail.content}</span>
                  </Link>
                ) : (
                  <div key={index} className="flex items-start text-gray-500 text-sm">
                    {detail.icon}
                    <span>{detail.content}</span>
                  </div>
                )
              ))}
            </div>
          </div>
          <div className="flex items-center space-x-6 md:ml-auto">
            <Link href="tel:+16475608966" className="text-gray-500 hover:text-gray-700 transition-colors">
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>647-560-8966</span>
              </div>
            </Link>
            <div className="hidden md:flex space-x-4">
              <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <svg className="h-5 w-5 text-gray-500 hover:text-gray-700 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
                </svg>
              </Link>
              <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <svg className="h-5 w-5 text-gray-500 hover:text-gray-700 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
              </Link>
              <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <svg className="h-5 w-5 text-gray-500 hover:text-gray-700 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Responsive Accordion on Mobile / Regular Columns on Desktop */}
        <div className="md:grid md:grid-cols-4 md:gap-8">
          {footerSections.map((section) => (
            <div key={section.title} className="border-b md:border-b-0 border-gray-200">
              <button 
                onClick={() => toggleSection(section.title)}
                className="w-full py-4 flex justify-between items-center md:cursor-default md:pointer-events-none md:py-0"
              >
                <h3 className="font-medium text-gray-900">{section.title}</h3>
                <svg 
                  className={`w-4 h-4 text-gray-500 transition-transform md:hidden ${activeSection === section.title ? 'transform rotate-180' : ''}`} 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div 
                className={`${
                  activeSection === section.title ? 'max-h-96 opacity-100 pb-4' : 'max-h-0 opacity-0 overflow-hidden'
                } transition-all duration-300 md:max-h-96 md:opacity-100 md:pt-4 md:overflow-visible`}
              >
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <Link 
                        href={link.href}
                        className="text-gray-500 hover:text-gray-700 text-sm transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Footer Bar */}
      <div className="bg-[#f5f5f7] border-t border-gray-200 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0 text-sm text-gray-500">
              <p>&copy; {new Date().getFullYear()} JK Appliance Repair. All rights reserved.</p>
            </div>
            <div className="flex space-x-6 text-sm">
              <Link href="/privacy-policy" className="text-gray-500 hover:text-gray-700 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="text-gray-500 hover:text-gray-700 transition-colors">
                Terms of Service
              </Link>
              <Link href="/sitemap-page" className="text-gray-500 hover:text-gray-700 transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 