// This script fixes service area pages where standardCommonServices is incorrectly used
// instead of createStandardServices
const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Path to the areas directory
const areasDir = path.join(__dirname, '../src/app/areas');

// Find all area page files
const areaPageFiles = glob.sync(`${areasDir}/**/page.tsx`);

console.log(`Found ${areaPageFiles.length} area page files to check`);

// Process each file
areaPageFiles.forEach(filePath => {
  const areaName = path.basename(path.dirname(filePath));
  console.log(`Checking ${areaName}...`);
  
  // Read the file content
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Check if the file is using standardCommonServices incorrectly
  if (content.includes('services={standardCommonServices}')) {
    console.log(`Fixing ${areaName}...`);
    
    // Extract the area data variable name
    const areaDataMatch = content.match(/const\s+(\w+)Data\s*:/);
    const areaDataVar = areaDataMatch ? areaDataMatch[1] : areaName.replace(/-/g, '');
    
    // Find the component return statement
    let componentReturn = content.match(/return\s*\(\s*<ServiceAreaPageTemplate[^>]*>/);
    
    if (componentReturn) {
      // Insert the createStandardServices call before the return
      const servicesCode = `  // Create standardized services for ${areaName} using our helper function
  const ${areaName.replace(/-/g, '')}Services = createStandardServices(${areaDataVar}Data.name);
  
`;
      
      // Insert before the return statement
      const insertPoint = content.indexOf(componentReturn[0]);
      content = content.slice(0, insertPoint) + servicesCode + content.slice(insertPoint);
      
      // Replace the services prop
      content = content.replace(
        'services={standardCommonServices}',
        `services={${areaName.replace(/-/g, '')}Services}`
      );
      
      // Write the updated content back to the file
      fs.writeFileSync(filePath, content, 'utf8');
      
      console.log(`Fixed ${areaName}`);
    } else {
      console.log(`Could not find return statement in ${areaName}`);
    }
  } else {
    console.log(`No issues found in ${areaName}`);
  }
});

console.log('All area pages have been checked and fixed if needed.'); 