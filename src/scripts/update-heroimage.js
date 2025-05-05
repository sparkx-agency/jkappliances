const fs = require('fs');
const path = require('path');

// Function to update heroImage in all service area pages
async function updateHeroImages() {
  console.log('Starting hero image update for all service area pages...');
  
  // Directory to search for area pages
  const areasDir = path.join(process.cwd(), 'src', 'app', 'areas');
  
  // Get all directories in areas folder
  const areaDirectories = fs.readdirSync(areasDir)
    .filter(item => fs.statSync(path.join(areasDir, item)).isDirectory());
  
  console.log(`Found ${areaDirectories.length} service area directories to process`);
  
  let updatedFilesCount = 0;
  
  // Process each area directory
  for (const areaDir of areaDirectories) {
    const pagePath = path.join(areasDir, areaDir, 'page.tsx');
    
    // Skip if page.tsx doesn't exist
    if (!fs.existsSync(pagePath)) {
      console.log(`No page.tsx found in ${areaDir}, skipping...`);
      continue;
    }
    
    try {
      console.log(`Processing: ${pagePath}`);
      let content = fs.readFileSync(pagePath, 'utf8');
      
      // Check if file contains heroImage
      if (content.includes('heroImage:')) {
        console.log(`Found heroImage in ${areaDir}/page.tsx`);
        
        // Replace heroImage with the new path
        const updated = content.replace(
          /heroImage:\s*['"].*?['"]/,
          `heroImage: '/images/areas/areas-hero.webp'`
        );
        
        // Check if any changes were made
        if (updated !== content) {
          fs.writeFileSync(pagePath, updated, 'utf8');
          console.log(`Updated heroImage in ${areaDir}/page.tsx`);
          updatedFilesCount++;
        } else {
          console.log(`No changes needed for ${areaDir}/page.tsx (already using the correct image or pattern not matched)`);
        }
      } else {
        console.log(`No heroImage found in ${areaDir}/page.tsx`);
      }
    } catch (error) {
      console.error(`Error processing file ${pagePath}:`, error);
    }
  }
  
  console.log(`Hero image update complete. Updated ${updatedFilesCount} files.`);
}

// Run the function
updateHeroImages(); 