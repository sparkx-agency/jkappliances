// This script updates all service area pages to use the standardized services data
const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Path to the areas directory
const areasDir = path.join(__dirname, '../src/app/areas');

// Find all area page files
const areaPageFiles = glob.sync(`${areasDir}/**/page.tsx`);

console.log(`Found ${areaPageFiles.length} area page files to update`);

// Patterns to identify and replace
const oldServicesPattern = /const\s+services\s*=\s*\[[\s\S]*?\];/;
const oldImportsPattern = /import\s+{\s*ServiceItem\s*}\s*from\s*['"]@\/components\/sections\/common\/ServicesTabSection['"]\s*;/;

// New imports and service creation code
const newImports = `import ServicesTabSection from '@/components/sections/common/ServicesTabSection';
import { createStandardServices } from '@/data/servicesData';`;

// Process each file
areaPageFiles.forEach(filePath => {
  const fileName = path.basename(path.dirname(filePath));
  console.log(`Processing ${fileName}...`);
  
  // Read the file content
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Extract the area name from the file content or directory name
  const areaNameMatch = content.match(/const\s+areaName\s*=\s*['"]([^'"]+)['"]/);
  const areaName = areaNameMatch ? areaNameMatch[1] : fileName.replace(/-/g, ' ');
  
  // Replace the services array with our standardized service creation
  const newServicesCode = `// Create standardized services for this area
const services = createStandardServices('${areaName}');`;
  
  // Remove old ServiceItem import if it exists
  content = content.replace(oldImportsPattern, '');
  
  // Add our new imports if they don't exist
  if (!content.includes('@/data/servicesData')) {
    // Find where imports end
    const importEndIndex = content.lastIndexOf('import');
    let insertPoint = content.indexOf(';', importEndIndex) + 1;
    content = content.slice(0, insertPoint) + '\n' + newImports + content.slice(insertPoint);
  }
  
  // Replace the services array with our new code
  content = content.replace(oldServicesPattern, newServicesCode);
  
  // Write the updated content back to the file
  fs.writeFileSync(filePath, content, 'utf8');
  
  console.log(`Updated ${fileName}`);
});

console.log('All area pages have been updated to use standardized services data.'); 