const fs = require('fs');
const path = require('path');
const { glob } = require('glob');

// Configuration
const config = {
  // Patterns for files to update
  patterns: [
    './src/**/*.{tsx,ts,js,jsx}',   // All source files
    './src/**/*.{scss,css}',         // All style files
    './public/**/*.{html,htm}',      // Any HTML files
    './src/**/*.json',               // Any JSON files with image references
  ],
  // Image extensions to replace
  replacements: [
    { from: '.jpg', to: '.webp' },
    { from: '.jpeg', to: '.webp' },
    { from: '.png', to: '.webp' },
    { from: '.svg', to: '.webp' },
    { from: '.gif', to: '.webp' }
  ],
  // Directories to exclude (regex patterns)
  excludeDirs: [
    'node_modules',
    '\\.git',
    '\\.next',
    'build',
    'dist'
  ],
  // Files to exclude (exact match)
  excludeFiles: [
    'update-to-webp-sitewide.js',
    'convert-logos.js',
    'remove-bg-logos.js',
    'update-brands-to-webp.js',
    'convert-and-remove-bg.js'
  ],
  dryRun: false, // Set to true to see changes without actually modifying files
  verbose: true, // Show detailed output
  
  // Options for special handling
  preserveNextImage: true, // Preserve Next.js Image component props
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

// Check if path should be excluded
function shouldExclude(filePath) {
  // Check if file is in excluded directory
  if (config.excludeDirs.some(pattern => new RegExp(pattern).test(filePath))) {
    return true;
  }
  
  // Check if file is explicitly excluded
  const fileName = path.basename(filePath);
  if (config.excludeFiles.includes(fileName)) {
    return true;
  }
  
  return false;
}

// Update image extensions in files
async function updateImageExtensions() {
  try {
    let allFiles = [];
    
    // Collect all files from patterns
    for (const pattern of config.patterns) {
      const files = await glob(pattern);
      allFiles = [...allFiles, ...files];
    }
    
    // Remove duplicates and excluded files
    allFiles = [...new Set(allFiles)].filter(file => !shouldExclude(file));
    
    console.log(`Found ${allFiles.length} files to scan for image references`);
    
    let totalReplacements = 0;
    let modifiedFiles = 0;
    let replacementsByExt = {};
    
    config.replacements.forEach(r => {
      replacementsByExt[r.from] = 0;
    });
    
    for (const file of allFiles) {
      let content = fs.readFileSync(file, 'utf8');
      const originalContent = content;
      let fileReplacements = 0;
      let changesInFile = [];
      
      // Apply each replacement
      for (const rep of config.replacements) {
        // Create a regex that matches image paths with the extension
        // This handles various patterns like:
        // - /path/image.jpg
        // - "/path/image.jpg"
        // - '/path/image.jpg'
        // - href="image.jpg"
        // - src="image.jpg"
        // But avoids replacing extensions in variable/function names
        const regex = new RegExp(`([\\/\\w\\.-]+)${rep.from.replace('.', '\\.')}([\\"\\'\\)\\s\\}\\,\\;\\:]|$)`, 'g');
        
        // Track the number of replacements for each extension
        const matches = [...content.matchAll(regex)];
        const matchCount = matches.length;
        replacementsByExt[rep.from] += matchCount;
        fileReplacements += matchCount;
        
        // Log all matches if verbose
        if (config.verbose && matchCount > 0) {
          matches.forEach(match => {
            const oldPath = match[1] + rep.from;
            const newPath = match[1] + rep.to;
            changesInFile.push(`${oldPath} -> ${newPath}`);
          });
        }
        
        // Replace the extension
        content = content.replace(regex, `$1${rep.to}$2`);
      }
      
      // Special handling for Next.js Image component
      if (config.preserveNextImage && /\.(tsx|jsx)$/.test(file)) {
        // Find width and height props on Image components that might need adjustment
        const nextImageRegex = /<Image[^>]*src=["']([^"']+)\.webp["'][^>]*>/g;
        const imageMatches = [...content.matchAll(nextImageRegex)];
        
        for (const match of imageMatches) {
          const imagePart = match[0];
          // If the Image component doesn't have the "style" prop with objectFit
          if (!imagePart.includes('style={') && !imagePart.includes('style="') && !imagePart.includes('objectFit')) {
            // Add style prop with objectFit="contain" to ensure proper rendering
            const updatedImagePart = imagePart.replace(/>$/, ' style={{ objectFit: "contain" }} />');
            content = content.replace(imagePart, updatedImagePart);
            changesInFile.push(`Added objectFit="contain" style to Image component`);
          }
        }
      }
      
      totalReplacements += fileReplacements;
      
      if (content !== originalContent) {
        modifiedFiles++;
        
        if (fileReplacements > 0) {
          console.log(`${file}: ${fileReplacements} replacements`);
          
          if (config.verbose && changesInFile.length > 0) {
            changesInFile.forEach(change => {
              console.log(`  ${change}`);
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
    console.log(`\nReplacements by extension:`);
    
    for (const [ext, count] of Object.entries(replacementsByExt)) {
      if (count > 0) {
        console.log(`  ${ext} -> .webp: ${count} replacements`);
      }
    }
    
  } catch (error) {
    console.error('Error updating image extensions:', error);
  }
}

// Main function
async function main() {
  console.log('Starting sitewide image extension update to WebP');
  console.log(`Extensions to convert: ${config.replacements.map(r => r.from).join(', ')}`);
  
  if (config.dryRun) {
    console.log('DRY RUN - No files will be modified');
  }
  
  // Update image extensions in all matching files
  await updateImageExtensions();
  
  console.log('\nSitewide image extension update complete!');
}

// Run the main function
main().catch(error => {
  console.error('Error:', error);
  process.exit(1);
}); 