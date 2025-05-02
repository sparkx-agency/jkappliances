"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronRightIcon, HomeIcon } from '@heroicons/react/24/outline';
import Script from 'next/script';

interface BreadcrumbItem {
  label: string;
  href: string;
  isCurrent?: boolean;
}

interface BreadcrumbsProps {
  customItems?: BreadcrumbItem[];
  showHome?: boolean;
  className?: string;
}

export default function Breadcrumbs({
  customItems,
  showHome = true,
  className = '',
}: BreadcrumbsProps) {
  const pathname = usePathname();
  
  // Generate breadcrumbs from the current path
  const generateBreadcrumbs = (): BreadcrumbItem[] => {
    // If custom items are provided, use them
    if (customItems) return customItems;

    const pathSegments = pathname.split('/').filter(Boolean);
    if (pathSegments.length === 0) return [];

    // Build up breadcrumb trail
    const breadcrumbs: BreadcrumbItem[] = [];
    let path = '';

    // Special case for services - use MegaMenu structure
    if (pathSegments[0] === 'services') {
      breadcrumbs.push({
        label: 'Services',
        href: '/#services', // Point to services section on homepage
        isCurrent: pathSegments.length === 1,
      });
    }

    pathSegments.forEach((segment, i) => {
      path += `/${segment}`;
      
      // Skip adding a second "Services" entry if already added
      if (segment === 'services' && i === 0 && breadcrumbs.length > 0) {
        return;
      }
      
      // Format the segment name to be more readable
      let label = segment.charAt(0).toUpperCase() + segment.slice(1);
      // Replace hyphens with spaces
      label = label.replace(/-/g, ' ');
      
      // Handle special cases
      if (segment === 'areas') label = 'Service Areas';
      
      breadcrumbs.push({
        label,
        href: path,
        isCurrent: i === pathSegments.length - 1,
      });
    });

    return breadcrumbs;
  };

  const breadcrumbs = generateBreadcrumbs();

  // Don't render breadcrumbs on the homepage
  if (pathname === '/') return null;
  
  // Don't render if there's nothing to show
  if (!showHome && breadcrumbs.length === 0) return null;

  // Create structured data for SEO
  const createBreadcrumbStructuredData = () => {
    const itemListElement = breadcrumbs.map((item, index) => ({
      '@type': 'ListItem',
      'position': index + 1,
      'name': item.label,
      'item': `https://jkappliancerepair.ca${item.href}`,
    }));

    return {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      'itemListElement': itemListElement,
    };
  };

  return (
    <>
      <Script
        id="breadcrumb-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(createBreadcrumbStructuredData()),
        }}
      />
      
      <nav aria-label="Breadcrumb" className={`py-3 text-sm ${className}`}>
        <ol className="flex items-center flex-wrap">
          {showHome && (
            <li className="flex items-center">
              <Link 
                href="/" 
                className="text-gray-500 hover:text-blue-600 flex items-center"
                aria-label="Home"
              >
                <HomeIcon className="h-4 w-4" />
                <span className="sr-only">Home</span>
              </Link>
              {(breadcrumbs.length > 0) && (
                <ChevronRightIcon className="h-4 w-4 mx-2 text-gray-400 flex-shrink-0" />
              )}
            </li>
          )}
          
          {breadcrumbs.map((item, index) => (
            <li 
              key={index} 
              className="flex items-center"
              aria-current={item.isCurrent ? 'page' : undefined}
            >
              {item.isCurrent ? (
                <span className="font-medium text-blue-600">
                  {item.label}
                </span>
              ) : (
                <>
                <Link
                  href={item.href}
                    className="text-gray-500 hover:text-blue-600"
                >
                    {item.label}
                  </Link>
                  {index < breadcrumbs.length - 1 && (
                    <ChevronRightIcon className="h-4 w-4 mx-2 text-gray-400 flex-shrink-0" />
                  )}
                </>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
} 