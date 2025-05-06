const fs = require('fs');
const path = require('path');

// Get the project root directory (one level up from scripts directory)
const projectRoot = path.resolve(__dirname, '..');
// Directory where the area pages are located
const areasDir = path.join(projectRoot, 'src', 'app', 'areas');

// Process all area directories
function processAreaPages() {
  try {
    console.log(`Looking for area pages in: ${areasDir}`);
    
    // Check if the areas directory exists
    if (!fs.existsSync(areasDir)) {
      console.error(`Error: Directory does not exist: ${areasDir}`);
      return;
    }
    
    // Get all subdirectories in the areas directory
    const areaDirs = fs.readdirSync(areasDir, { withFileTypes: true })
      .filter(dirent => dirent.isDirectory())
      .map(dirent => dirent.name);

    let totalProcessed = 0;
    let totalModified = 0;

    console.log(`Found ${areaDirs.length} area directories`);

    // Process each area directory
    for (const areaDir of areaDirs) {
      const pagePath = path.join(areasDir, areaDir, 'page.tsx');
      
      // Check if page.tsx exists in the directory
      if (fs.existsSync(pagePath)) {
        totalProcessed++;
        let content = fs.readFileSync(pagePath, 'utf8');

        // Replace the sections with empty arrays
        let modifiedContent = content
          // Replace popularServices
          .replace(/popularServices:\s*\[\s*\{[\s\S]*?\}\s*\],/gm, 'popularServices: [],')
          // Replace recentProjects
          .replace(/recentProjects:\s*\[\s*\{[\s\S]*?\}\s*\],/gm, 'recentProjects: [],')
          // Replace testimonials
          .replace(/testimonials:\s*\[\s*\{[\s\S]*?\}\s*\],/gm, 'testimonials: [],');
        
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
          console.log(`Updated ${areaDir}/page.tsx`);
        } else {
          console.log(`No changes needed for ${areaDir}/page.tsx`);
        }
      }
    }

    console.log(`\nSummary: Processed ${totalProcessed} area pages, modified ${totalModified} files`);

  } catch (error) {
    console.error('Error processing files:', error);
    console.error('Error details:', error.stack);
  }
}

// Run the script
processAreaPages();