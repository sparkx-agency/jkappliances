const fs = require('fs');
const path = require('path');
const { glob } = require('glob');

// Configuration
const config = {
  // Patterns for files to update
  patterns: [
    './src/app/areas/**/*.tsx',     // Area pages
    './src/app/brands/**/*.tsx',     // Brand pages 
    './src/components/**/*.tsx',     // Components that might use brand logos
    './src/app/page.tsx',            // Homepage
    './src/app/services/**/*.tsx',     // Repair pages
    './src/lib/**/*.{ts,tsx,js}'     // Library/utility files
  ],
  brandExtension: {
    from: '.svg',
    to: '.webp'
  },
  dryRun: false, // Set to true to see changes without applying them
  verbose: true  // Show detailed output
};

// Function to update file content
function updateFileContent(filePath, content) {
  if (config.dryRun) {
    console.log(`Would update file: ${filePath}`);
    return;
  }
  
  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Updated file: ${filePath}`);
}

// Update brand references in files
async function updateBrandReferences() {
  try {
    let allFiles = [];
    
    // Collect all files from patterns
    for (const pattern of config.patterns) {
      const files = await glob(pattern);
      allFiles = [...allFiles, ...files];
    }
    
    // Remove duplicates
    allFiles = [...new Set(allFiles)];
    
    console.log(`Found ${allFiles.length} files to scan for brand references`);
    
    let totalReplacements = 0;
    let modifiedFiles = 0;
    
    for (const file of allFiles) {
      let content = fs.readFileSync(file, 'utf8');
      const originalContent = content;
      
      // Replace brand logo paths
      const regex = new RegExp(`(\\/images\\/brands\\/[\\w-]+)${config.brandExtension.from.replace('.', '\\.')}`, 'g');
      content = content.replace(regex, `$1${config.brandExtension.to}`);
      
      // Count replacements in this file
      const matches = originalContent.match(regex);
      const replacementsInFile = matches ? matches.length : 0;
      totalReplacements += replacementsInFile;
      
      if (content !== originalContent) {
        modifiedFiles++;
        
        if (config.verbose || replacementsInFile > 0) {
          console.log(`${file}: ${replacementsInFile} replacements`);
          
          if (config.verbose && replacementsInFile > 0) {
            // Show what was replaced
            matches.forEach(match => {
              const newPath = match.replace(config.brandExtension.from, config.brandExtension.to);
              console.log(`  ${match} -> ${newPath}`);
            });
          }
        }
        
        updateFileContent(file, content);
      }
    }
    
    console.log(`\nSummary:`);
    console.log(`Total files scanned: ${allFiles.length}`);
    console.log(`Files modified: ${modifiedFiles}`);
    console.log(`Total replacements: ${totalReplacements}`);
    
  } catch (error) {
    console.error('Error updating brand references:', error);
  }
}

// Main function
async function main() {
  console.log('Starting brand image extension update');
  console.log(`Converting from ${config.brandExtension.from} to ${config.brandExtension.to}`);
  
  if (config.dryRun) {
    console.log('DRY RUN - No files will be modified');
  }
  
  // Update brand references in all matching files
  await updateBrandReferences();
  
  console.log('\nBrand image extension update complete!');
}

// Run the main function
main().catch(error => {
  console.error('Error:', error);
  process.exit(1);
}); 