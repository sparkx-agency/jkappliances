const fs = require('fs');
const path = require('path');

// Define the areas directory path
const areasDir = path.join('src', 'app', 'areas');

// Old address (to be replaced)
const oldAddressPattern = /address:\s*{\s*street:\s*['"]18 Yonge St['"],\s*city:\s*['"]Toronto['"],\s*province:\s*['"]ON['"],\s*postalCode:\s*['"]M5E 1Z8['"],\s*}/;

// New address (replacement)
const newAddress = `address: {
    street: '8 Lorraine Crescent',
    city: 'Brampton',
    province: 'ON',
    postalCode: 'L6S 2R7',
  }`;

// Process all area directories
async function updateAreaPages() {
  try {
    // Check if areas directory exists
    if (!fs.existsSync(areasDir)) {
      console.error(`Directory not found: ${areasDir}`);
      return;
    }

    // Get all subdirectories in the areas directory
    const areaFolders = fs.readdirSync(areasDir, { withFileTypes: true })
      .filter(dirent => dirent.isDirectory())
      .map(dirent => dirent.name);

    console.log(`Found ${areaFolders.length} area folders to process.`);
    
    let updatedCount = 0;
    let errorCount = 0;

    // Process each area folder
    for (const areaFolder of areaFolders) {
      const pagePath = path.join(areasDir, areaFolder, 'page.tsx');
      
      // Check if page.tsx exists
      if (fs.existsSync(pagePath)) {
        try {
          // Read the file content
          let fileContent = fs.readFileSync(pagePath, 'utf8');
          
          // Check if the old address pattern exists
          if (oldAddressPattern.test(fileContent)) {
            // Replace the old address with the new one
            const updatedContent = fileContent.replace(oldAddressPattern, newAddress);
            
            // Write the updated content back to the file
            fs.writeFileSync(pagePath, updatedContent, 'utf8');
            
            console.log(`✅ Updated address in: ${pagePath}`);
            updatedCount++;
          } else {
            console.log(`⚠️ Old address pattern not found in: ${pagePath}`);
          }
        } catch (err) {
          console.error(`❌ Error processing ${pagePath}: ${err.message}`);
          errorCount++;
        }
      } else {
        console.log(`⚠️ page.tsx not found in: ${path.join(areasDir, areaFolder)}`);
      }
    }

    console.log(`\n--- Summary ---`);
    console.log(`Total area folders: ${areaFolders.length}`);
    console.log(`Files updated: ${updatedCount}`);
    console.log(`Errors encountered: ${errorCount}`);
    
  } catch (err) {
    console.error(`❌ Fatal error: ${err.message}`);
  }
}

// Run the function
updateAreaPages().then(() => {
  console.log('Address update process completed.');
});