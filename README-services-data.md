# Unified Services Data

This document explains the unified services data structure that standardizes service information across all service area and brand pages.

## Overview

The `servicesData.ts` file contains standardized service data that can be reused across the entire application. This ensures:

1. Consistent service information across all pages
2. Centralized management of service data
3. Automatic image handling based on service ID
4. Reduced duplication and easier maintenance

## Key Components

### 1. Standard Service IDs

The system uses a standard set of service IDs that represent our priority order:

```typescript
export const standardServiceIds = [
  'refrigerator-repair',
  'washer-repair',
  'dryer-repair',
  'stove-repair',
  'oven-repair',
  'dishwasher-repair'
];
```

### 2. Image Handling

Images are automatically mapped to service IDs, making the `image` property optional in service items:

```typescript
// Service item with optional image
const serviceItem: ServiceItem = {
  id: 'refrigerator-repair',
  name: 'Refrigerator Repair',
  // image is optional now, will be handled by getServiceImage
  description: '...',
  commonServices: [...]
};
```

### 3. Standard Descriptions & Common Services

Standard descriptions and common services are provided for each service type and can be reused across areas.

## Usage Examples

### Service Area Pages

```typescript
import React from 'react';
import { Metadata } from 'next';
import ServicesTabSection from '@/components/sections/common/ServicesTabSection';
import { createStandardServices } from '@/data/servicesData';

export default function AreaPage() {
  const areaName = 'York';
  
  // Create standardized services for this area
  const services = createStandardServices(areaName);
  
  return (
    <main>
      {/* ... */}
      <ServicesTabSection
        mode="area"
        contextName={areaName}
        services={services}
        title={`Appliance Repair Services in ${areaName}`}
        subtitle={`Our certified technicians provide expert appliance repair throughout ${areaName}.`}
      />
    </main>
  );
}
```

### Brand Pages

For brand pages, you can still define custom services but without specifying the image:

```typescript
const services: BrandServiceItem[] = [
  {
    id: 'refrigerator-repair',
    name: 'LG Refrigerator Repair',
    // No image property needed
    description: 'Expert LG refrigerator repair services...',
    commonItems: ['Door seal issues', 'Ice maker problems', 'Temperature control issues']
  },
  // ...more services
];
```

## Updating Existing Pages

Two scripts are provided to update existing pages:

1. `scripts/update-service-data.js` - Updates all area pages
2. `scripts/update-brand-services.js` - Updates all brand pages

To run these scripts:

```bash
node scripts/update-service-data.js
node scripts/update-brand-services.js
```

## Components Updated

The following components have been updated to support this new data structure:

1. `ServicesTabSection.tsx` - Now uses `getServiceImage` to handle image paths
2. `BrandServicesSection.tsx` - Updated to handle optional image property

## Adding New Services

When adding a new service type:

1. Add the service ID to `standardServiceIds` array
2. Add an image mapping in `serviceImageMap`
3. Add standard descriptions and common services in their respective objects 

## Type Safety Notes

When using these services in service area pages, make sure to:

1. **Never pass** `standardCommonServices` directly as the `services` prop to `ServiceAreaPageTemplate` or `ServicesTabSection` components. This will cause a TypeScript error because `standardCommonServices` is a `Record<string, string[]>`, not a `ServiceItem[]`.

2. **Always use** the `createStandardServices` function to generate properly typed service items:

```typescript
// CORRECT APPROACH:
export default function AreaPage() {
  // Create standardized services for this area
  const areaServices = createStandardServices(areaData.name);
  
  return (
    <ServiceAreaPageTemplate
      areaData={areaData}
      services={areaServices} // Properly typed ServiceItem[] array
      brands={areaBrands}
    />
  );
}
```

3. If you encounter type errors with existing pages, use the provided `scripts/fix-area-services.js` script to automatically fix them. 