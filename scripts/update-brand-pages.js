const fs = require('fs');
const path = require('path');

// Get the project root directory (one level up from scripts directory)
const projectRoot = path.resolve(__dirname, '..');
// Directory where the brand pages are located
const brandsDir = path.join(projectRoot, 'src', 'app', 'brands');

// Process all brand directories
function processBrandPages() {
  try {
    console.log(`Looking for brand pages in: ${brandsDir}`);
    
    // Check if the brands directory exists
    if (!fs.existsSync(brandsDir)) {
      console.error(`Error: Directory does not exist: ${brandsDir}`);
      return;
    }
    
    // Get all subdirectories in the brands directory
    const brandDirs = fs.readdirSync(brandsDir, { withFileTypes: true })
      .filter(dirent => dirent.isDirectory())
      .map(dirent => dirent.name);

    let totalProcessed = 0;
    let totalModified = 0;

    console.log(`Found ${brandDirs.length} brand directories`);

    // Process each brand directory
    for (const brandDir of brandDirs) {
      const pagePath = path.join(brandsDir, brandDir, 'page.tsx');
      
      // Check if page.tsx exists in the directory
      if (fs.existsSync(pagePath)) {
        totalProcessed++;
        let content = fs.readFileSync(pagePath, 'utf8');

        let modifiedContent = content;
        
        // Remove image property from service items - handle different formats
        
        // Format 1: image property on its own line
        modifiedContent = modifiedContent.replace(/(\s+)image:\s*['"].*?['"],\n/g, '$1');
        
        // Format 2: image property after name
        modifiedContent = modifiedContent.replace(/(\s+name:\s*['"].*?['"],)\s*image:\s*['"].*?['"],/g, '$1');
        
        // Format 3: image property after id
        modifiedContent = modifiedContent.replace(/(\s+id:\s*['"].*?['"],)\s*image:\s*['"].*?['"],/g, '$1');
        
        // Format 4: image property within any attribute pattern
        modifiedContent = modifiedContent.replace(/,\s*image:\s*['"].*?['"]/g, '');

        // Only write to file if changes were made
        if (content !== modifiedContent) {
          fs.writeFileSync(pagePath, modifiedContent, 'utf8');
          totalModified++;
          console.log(`Updated ${brandDir}/page.tsx`);
        } else {
          console.log(`No changes needed for ${brandDir}/page.tsx`);
        }
      }
    }

    // Also handle the main brands page if it exists
    const mainBrandPage = path.join(brandsDir, 'page.tsx');
    if (fs.existsSync(mainBrandPage)) {
      let content = fs.readFileSync(mainBrandPage, 'utf8');
      let modifiedContent = content;
      
      // Remove image property from service items with the same patterns
      modifiedContent = modifiedContent.replace(/(\s+)image:\s*['"].*?['"],\n/g, '$1');
      modifiedContent = modifiedContent.replace(/(\s+name:\s*['"].*?['"],)\s*image:\s*['"].*?['"],/g, '$1');
      modifiedContent = modifiedContent.replace(/(\s+id:\s*['"].*?['"],)\s*image:\s*['"].*?['"],/g, '$1');
      modifiedContent = modifiedContent.replace(/,\s*image:\s*['"].*?['"]/g, '');
      
      if (content !== modifiedContent) {
        fs.writeFileSync(mainBrandPage, modifiedContent, 'utf8');
        console.log(`Updated main brands page.tsx`);
        totalModified++;
      } else {
        console.log(`No changes needed for main brands page.tsx`);
      }
      totalProcessed++;
    }

    console.log(`\nSummary: Processed ${totalProcessed} brand pages, modified ${totalModified} files`);

  } catch (error) {
    console.error('Error processing files:', error);
    console.error('Error details:', error.stack);
  }
}

// Run the script
processBrandPages(); 