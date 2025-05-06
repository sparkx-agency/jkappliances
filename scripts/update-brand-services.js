// This script updates brand service data to use standardized services pattern
const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Path to the brands directory
const brandsDir = path.join(__dirname, '../src/app/brands');

// Find all brand page files
const brandPageFiles = glob.sync(`${brandsDir}/**/page.tsx`);

console.log(`Found ${brandPageFiles.length} brand page files to update`);

// Process each file
brandPageFiles.forEach(filePath => {
  const brandId = path.basename(path.dirname(filePath));
  const brandName = brandId.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  
  console.log(`Processing ${brandName}...`);
  
  // Read the file content
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Find the services array
  const servicesMatch = content.match(/const\s+services\s*=\s*(\[[\s\S]*?\]);/);
  
  if (servicesMatch) {
    // Parse the services array
    let servicesString = servicesMatch[1];
    
    // Remove image properties from service objects
    servicesString = servicesString.replace(/image:\s*['"][^'"]+['"]\s*,/g, '');
    
    // Update the file content
    content = content.replace(servicesMatch[0], `const services = ${servicesString};`);
    
    // Write the updated content back to the file
    fs.writeFileSync(filePath, content, 'utf8');
    
    console.log(`Updated ${brandName} services`);
  } else {
    console.log(`No services array found in ${brandName}`);
  }
});

// Now update the BrandServicesSection component to use our getServiceImage function
const brandServicesPath = path.join(__dirname, '../src/components/sections/brands/BrandServicesSection.tsx');

if (fs.existsSync(brandServicesPath)) {
  console.log('Updating BrandServicesSection component...');
  
  // Read the component file
  let content = fs.readFileSync(brandServicesPath, 'utf8');
  
  // Check if we need to add the import for getServiceImage
  if (!content.includes('@/data/servicesData')) {
    // Add import for getServiceImage
    const importStatement = `import { getServiceImage } from '@/data/servicesData';\n`;
    content = content.replace(/import.*?from.*?;(\n|$)/, (match) => match + importStatement);
  }
  
  // Update the interface to make image optional
  content = content.replace(
    /export interface BrandServiceItem {\s*id: string;\s*name: string;\s*image: string;/,
    'export interface BrandServiceItem {\n  id: string;\n  name: string;\n  image?: string;'
  );
  
  // Look for Image component usage and update it to use getServiceImage
  const imgPattern = /<Image\s+src={service\.image}/;
  if (content.includes(imgPattern)) {
    content = content.replace(
      imgPattern,
      '<Image\n              src={service.image ? service.image : getServiceImage(service.id)}'
    );
  }
  
  // Write the updated content back to the file
  fs.writeFileSync(brandServicesPath, content, 'utf8');
  
  console.log('BrandServicesSection component updated');
}

console.log('Brand service data updates completed.'); 