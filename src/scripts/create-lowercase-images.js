const fs = require('fs');
const path = require('path');

// Function to create lowercase versions of image files
function createLowercaseImages() {
  console.log('Creating lowercase versions of all image files for Vercel deployment...');
  
  // Start with the public folder
  const publicDir = path.join(process.cwd(), 'public');
  let totalCopied = 0;
  let totalFixed = 0;
  
  // Important brand images to ensure exist
  const criticalPaths = [
    'public/images/brands/samsung.webp',
    'public/images/brands/lg.webp',
    'public/images/brands/whirlpool.webp',
    'public/images/brands/ge.webp',
    'public/images/brands/maytag.webp',
    'public/images/brands/kitchen-aid.webp',
    'public/images/brands/electrolux.webp',
    'public/images/brands/bosch.webp',
    'public/images/brands/miele.webp',
    'public/images/brands/frigidaire.webp',
    'public/images/brands/sub-zero.webp',
    'public/images/brands/wolf.webp',
    'public/images/brands/thermador.webp',
    'public/images/brands/amana.webp',
    'public/images/brands/haier.webp'
  ];
  
  // Check and create critical images
  criticalPaths.forEach(lowerPath => {
    const lowerAbsPath = path.join(process.cwd(), lowerPath);
    
    if (!fs.existsSync(lowerAbsPath)) {
      // Try to find files with similar names
      const dirName = path.dirname(lowerAbsPath);
      const baseName = path.basename(lowerAbsPath);
      
      if (fs.existsSync(dirName)) {
        const files = fs.readdirSync(dirName);
        
        // Try to find a case-insensitive match
        const matchingFile = files.find(file => 
          file.toLowerCase() === baseName.toLowerCase() ||
          file.toLowerCase().replace(/[-_]/g, '') === baseName.toLowerCase().replace(/[-_]/g, '')
        );
        
        if (matchingFile) {
          // Copy the found file to the lowercase path
          fs.copyFileSync(path.join(dirName, matchingFile), lowerAbsPath);
          console.log(`Created critical file: ${lowerAbsPath} (copied from ${matchingFile})`);
          totalFixed++;
        } else {
          console.log(`ERROR: Critical file missing: ${lowerAbsPath} - No matching file found!`);
        }
      } else {
        console.log(`ERROR: Directory does not exist: ${dirName}`);
      }
    }
  });
  
  // Process all WebP, JPG and PNG files to ensure lowercase versions exist
  processDirectory(publicDir);
  
  console.log(`Completed! Created ${totalCopied} lowercase copies of image files and fixed ${totalFixed} critical paths.`);
  
  // Recursive function to process directories
  function processDirectory(directory) {
    const files = fs.readdirSync(directory);
    
    for (const file of files) {
      const filePath = path.join(directory, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory()) {
        // Recursively process subdirectories
        processDirectory(filePath);
      } else if (/\.(webp|jpg|jpeg|png)$/i.test(file)) {
        try {
          // Always create a lowercase version for all image files
          const lowercaseFile = path.join(directory, file.toLowerCase());
          
          // Only create if the lowercaseFile doesn't exist or is different from the original
          if (file !== file.toLowerCase() && !fs.existsSync(lowercaseFile)) {
            fs.copyFileSync(filePath, lowercaseFile);
            totalCopied++;
            console.log(`Created: ${lowercaseFile}`);
          }
        } catch (error) {
          console.error(`Error creating lowercase version of ${filePath}:`, error);
        }
      }
    }
  }
}

// Run the function
createLowercaseImages(); 