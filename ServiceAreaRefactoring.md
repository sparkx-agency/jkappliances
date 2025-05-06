# Service Area Pages Refactoring Strategy

## Current Structure Analysis

After analyzing the service area pages, I've identified the following patterns:

1. **Inconsistent Implementation**: Some areas (like Toronto) already use the `ServiceAreaPageTemplate` component, while others (like Markham) implement their pages with direct component usage.
  
2. **Duplicate Data Structure**: All areas use a similar data structure (area data, services, brands, coupons) with only the content changing.

3. **Common Components**: All pages use the same components (Hero, Services, Neighborhood, etc.) with area-specific data.

4. **Common Styling**: Pages share the same styling and layout patterns.

5. **File Size**: Individual area pages are large (300-600 lines) with mostly repetitive structure.

## Refactoring Recommendations

### 1. Standardize on ServiceAreaPageTemplate

The existing `ServiceAreaPageTemplate` component already provides a good foundation for a consistent design. All service area pages should use this template.

```tsx
// src/app/areas/[area]/page.tsx
"use client";

import React from 'react';
import ServiceAreaPageTemplate from '@/components/templates/ServiceAreaPageTemplate';
import { areaData, areaServices, areaBrands, areaCoupons } from './data';

export default function AreaPage() {
  return (
    <ServiceAreaPageTemplate
      areaData={areaData}
      services={areaServices}
      brands={areaBrands}
    />
  );
}
```

### 2. Separate Data from UI Components

Move all area-specific data to a separate data file to make the page component files smaller and more maintainable:

```tsx
// src/app/areas/[area]/data.ts
import type { ServiceAreaData } from '@/types/serviceArea';
import type { AreaServiceItem } from '@/components/sections/areas/AreaServicesSection';
import type { BrandItem } from '@/components/sections/brands/BrandsSliderSection';

export const areaData: ServiceAreaData = {
  // Area-specific data
};

export const areaServices: AreaServiceItem[] = [
  // Area-specific services
];

export const areaBrands: BrandItem[] = [
  // Brand data (mostly consistent across areas)
];

export const areaCoupons = {
  // Area-specific coupon data
};
```

### 3. Create a Common Brands Component

Since brand data is largely the same across areas with minor variations, create a common brands provider:

```tsx
// src/data/commonBrands.ts
import type { BrandItem } from '@/components/sections/brands/BrandsSliderSection';

export const commonBrands: BrandItem[] = [
  {
    id: 'samsung',
    name: 'Samsung',
    logo: '/images/brands/samsung.webp',
    link: '/brands/samsung'
  },
  // ... other brands
];
```

Areas can then extend or modify this common list if needed.

### 4. Create Common Service Types

Service descriptions are nearly identical across areas with only the area name changing. Create a service factory:

```tsx
// src/utils/serviceFactory.ts
import type { AreaServiceItem } from '@/components/sections/areas/AreaServicesSection';

export function createAreaServices(areaName: string): AreaServiceItem[] {
  return [
    {
      id: 'refrigerator-repair',
      name: 'Refrigerator Repair',
      image: '/images/services/refrigerator-repair.webp',
      description: `Our ${areaName} refrigerator repair technicians can fix all brands and models of refrigerators. From cooling issues to ice maker problems, our experts can diagnose and repair your refrigerator quickly and efficiently. We service all ${areaName} neighborhoods with same-day appointments available.`,
      commonServices: [
        'Temperature regulation issues',
        'Ice maker repairs',
        'Water dispenser problems',
        'Strange noises or leaking',
        'Compressor and condenser repairs',
        'Door seal replacement'
      ]
    },
    // Other services
  ];
}
```

### 5. Enhance ServiceAreaData Type

Add additional optional fields to the ServiceAreaData type to support area-specific customizations:

```tsx
// src/types/serviceArea.ts (extensions)
export interface ServiceAreaData {
  // Existing properties
  
  // Optional custom properties
  customFeatures?: {
    showTestimonials?: boolean;
    testimonialStyle?: 'standard' | 'apple' | 'google';
    showProjects?: boolean;
    highlightSpecialties?: string[];
  };
}
```

### 6. Implement Dynamic Area Detection

For pages that need to know their area name from the URL:

```tsx
// src/app/areas/[area]/page.tsx
"use client";

import React from 'react';
import { useParams } from 'next/navigation';
import ServiceAreaPageTemplate from '@/components/templates/ServiceAreaPageTemplate';
import { getAreaData } from '@/data/areas';

export default function DynamicAreaPage() {
  const params = useParams();
  const areaName = params.area as string;
  
  const { areaData, services, brands, coupons } = getAreaData(areaName);
  
  return (
    <ServiceAreaPageTemplate
      areaData={areaData}
      services={services}
      brands={brands}
      coupons={coupons}
    />
  );
}
```

### 7. Create a Centralized Area Data Repository

```tsx
// src/data/areas/index.ts
import type { ServiceAreaData } from '@/types/serviceArea';
import type { AreaServiceItem } from '@/components/sections/areas/AreaServicesSection';
import type { BrandItem } from '@/components/sections/brands/BrandsSliderSection';

import { torontoData, torontoServices, torontoCoupons } from './toronto';
import { markhamData, markhamServices, markhamCoupons } from './markham';
// Import other areas

import { commonBrands } from '../commonBrands';
import { createAreaServices } from '../../utils/serviceFactory';

interface AreaData {
  areaData: ServiceAreaData;
  services: AreaServiceItem[];
  brands: BrandItem[];
  coupons: {
    main: any[];
    extra: any[];
  };
}

const areas: Record<string, AreaData> = {
  toronto: {
    areaData: torontoData,
    services: torontoServices,
    brands: commonBrands,
    coupons: torontoCoupons
  },
  markham: {
    areaData: markhamData,
    services: markhamServices,
    brands: commonBrands,
    coupons: markhamCoupons
  },
  // Other areas
};

export function getAreaData(areaName: string): AreaData {
  const normalizedName = areaName.toLowerCase().replace(/\s+/g, '-');
  
  if (!areas[normalizedName]) {
    throw new Error(`Area data not found for: ${areaName}`);
  }
  
  return areas[normalizedName];
}
```

### 8. Update Metadata Generation

Create a metadata generator function for consistent SEO:

```tsx
// src/utils/areaMetadata.ts
import type { Metadata } from 'next';
import { generateCanonicalUrl } from '@/utils/canonical';

export function generateAreaMetadata(areaName: string): Metadata {
  const formattedAreaName = areaName.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
  
  return {
    title: `${formattedAreaName} Appliance Repair | Same-Day Service | JK Appliances`,
    description: `Professional appliance repair in ${formattedAreaName} and surrounding areas. Expert technicians, same-day service, and competitive pricing for all major brands and models.`,
    alternates: {
      canonical: generateCanonicalUrl(`/appliance-repair-${areaName.toLowerCase()}`),
    },
    openGraph: {
      title: `${formattedAreaName} Appliance Repair Services | JK Appliances`,
      description: `Fast, reliable appliance repair in ${formattedAreaName}. Our certified technicians service all brands including Samsung, LG, Whirlpool, and more with same-day appointments available.`,
      url: generateCanonicalUrl(`/appliance-repair-${areaName.toLowerCase()}`),
      siteName: 'JK Appliances',
      locale: 'en_CA',
      type: 'website',
      images: [
        {
          url: `/images/areas/${areaName.toLowerCase()}-og.webp`,
          width: 1200,
          height: 630,
          alt: `Appliance repair services in ${formattedAreaName}`
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title: `Expert Appliance Repair in ${formattedAreaName} | JK Appliances`,
      description: `Professional appliance repair throughout ${formattedAreaName}. Same-day service, certified technicians, and all major brands repaired.`,
      images: [`/images/areas/${areaName.toLowerCase()}-twitter.webp`]
    },
    keywords: [
      `${formattedAreaName} appliance repair`, 
      `appliance repair ${formattedAreaName}`, 
      `${formattedAreaName} refrigerator repair`, 
      `${formattedAreaName} washer repair`, 
      `${formattedAreaName} dryer repair`, 
      `${formattedAreaName} dishwasher repair`,
      `same day appliance repair ${formattedAreaName}`,
      // Area-specific keywords can be added
    ]
  };
}
```

## Implementation Plan

1. **Create Common Components**: Finalize all common components in the sections/areas directory
2. **Implement Data Structure**: Set up the centralized data structure
3. **Create Generators**: Build the service and metadata generators
4. **Update One Area**: Convert one area (e.g., Markham) to the new structure as a proof of concept
5. **Refactor All Areas**: Convert all remaining areas to use the new template and data structure
6. **Add New Features**: Implement any area-specific customizations

## Expected Benefits

- **Reduced Code Duplication**: Each area page will be ~30 lines instead of 300-600 lines
- **Consistent UX**: All area pages will share the same structure and components
- **Easier Updates**: Changes to the template will automatically apply to all areas
- **Simpler Content Management**: Area-specific content is clearly separated from UI code
- **Improved Performance**: Smaller bundle sizes due to shared components
- **Easier Expansion**: Adding new service areas becomes a matter of adding new data files

## Conclusion

The current service area pages have a good foundation with many reusable components, but suffer from inconsistent implementation and duplication. By standardizing on the ServiceAreaPageTemplate, creating a central data repository, and implementing helper utilities, we can significantly improve code maintainability while ensuring a consistent user experience across all service areas. 