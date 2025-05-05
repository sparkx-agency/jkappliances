const fs = require('fs');
const path = require('path');

// Function to fix case sensitivity issues in image paths
async function fixImagePaths() {
  console.log('Starting image path fixes for Vercel deployment...');
  
  // Directories to search for pages
  const baseDir = path.join(process.cwd(), 'src');
  
  // Create lowercase versions of all brand image files first
  const brandsDir = path.join(process.cwd(), 'public', 'images', 'brands');
  const brandFileMap = {};
  
  try {
    const brandFiles = fs.readdirSync(brandsDir);
    let copiedFilesCount = 0;
    
    for (const file of brandFiles) {
      if (file.endsWith('.webp')) {
        const lowercaseFile = file.toLowerCase();
        const sourcePath = path.join(brandsDir, file);
        const destPath = path.join(brandsDir, lowercaseFile);
        
        // Always add the mapping regardless of whether we create a copy
        brandFileMap[file] = lowercaseFile;
        
        // Create lowercase version if it doesn't exist and is different from original
        if (file !== lowercaseFile && !fs.existsSync(destPath)) {
          fs.copyFileSync(sourcePath, destPath);
          copiedFilesCount++;
          console.log(`Created lowercase copy: ${lowercaseFile}`);
        }
      }
    }
    
    console.log(`Created ${copiedFilesCount} lowercase copies of brand images.`);
  } catch (error) {
    console.error(`Error processing brand images:`, error);
  }
  
  // Get all .tsx files recursively
  const allFiles = getFilesRecursively(baseDir, '.tsx');
  
  console.log(`Found ${allFiles.length} total files to process`);
  
  let updatedFilesCount = 0;
  let totalReplacements = 0;
  
  // Process each file
  for (const filePath of allFiles) {
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      let updatedContent = content;
      let fileChanged = false;
      
      // Fix brand image paths in the file - convert to lowercase
      for (const [originalFile, lowercaseFile] of Object.entries(brandFileMap)) {
        // Create a regex that captures the path within quotes (single or double)
        const regex = new RegExp(`(['"])(/images/brands/)${escapeRegExp(originalFile)}(['"])`, 'g');
        
        // Replace all occurrences
        const newContent = updatedContent.replace(regex, (match, q1, prefix, q2) => {
          totalReplacements++;
          return `${q1}${prefix}${lowercaseFile}${q2}`;
        });
        
        if (newContent !== updatedContent) {
          updatedContent = newContent;
          fileChanged = true;
        }
      }
      
      // Fix specific kitchen aid issues (different naming patterns)
      const kitchenAidVariants = [
        'kitchenaid.webp',
        'KitchenAid.webp',
        'Kitchen-Aid.webp',
        'Kitchen-aid.webp',
        'Kitchen_aid.webp'
      ];
      
      for (const variant of kitchenAidVariants) {
        const regex = new RegExp(`(['"])(/images/brands/)${escapeRegExp(variant)}(['"])`, 'g');
        const newContent = updatedContent.replace(regex, (match, q1, prefix, q2) => {
          totalReplacements++;
          return `${q1}${prefix}kitchen-aid.webp${q2}`;
        });
        
        if (newContent !== updatedContent) {
          updatedContent = newContent;
          fileChanged = true;
        }
      }
      
      // Fix other common image paths that might have case issues
      const otherImageDirectories = [
        '/images/areas/',
        '/images/services/',
        '/images/logos/',
        '/images/icons/'
      ];
      
      for (const imageDir of otherImageDirectories) {
        // Match any image reference in this directory
        const regex = new RegExp(`(['"])(${escapeRegExp(imageDir)}[^'"]+\\.(?:webp|jpg|png))(['"])`, 'g');
        
        // Create a set to track replacements we've made to avoid duplicates
        const replacements = new Set();
        
        // Find all matches
        let match;
        while ((match = regex.exec(updatedContent)) !== null) {
          const fullPath = match[2];
          const lowercasePath = fullPath.toLowerCase();
          
          // Only lowercase the path part
          if (fullPath !== lowercasePath && !replacements.has(fullPath)) {
            replacements.add(fullPath);
            
            // Replace this specific path globally
            const pathRegex = new RegExp(escapeRegExp(fullPath), 'g');
            updatedContent = updatedContent.replace(pathRegex, lowercasePath);
            totalReplacements++;
            fileChanged = true;
          }
        }
      }
      
      // Save the file if changes were made
      if (fileChanged) {
        fs.writeFileSync(filePath, updatedContent, 'utf8');
        updatedFilesCount++;
        console.log(`Updated: ${filePath}`);
      }
    } catch (error) {
      console.error(`Error processing file ${filePath}:`, error);
    }
  }
  
  // Now make sure we have lowercase versions of other image files
  const imageDirs = [
    path.join(process.cwd(), 'public', 'images', 'areas'),
    path.join(process.cwd(), 'public', 'images', 'services'),
    path.join(process.cwd(), 'public', 'images', 'logos'),
    path.join(process.cwd(), 'public', 'images', 'icons')
  ];
  
  let totalImageCopies = 0;
  
  for (const dir of imageDirs) {
    if (fs.existsSync(dir)) {
      try {
        processImagesInDirectory(dir);
      } catch (error) {
        console.error(`Error processing directory ${dir}:`, error);
      }
    } else {
      console.log(`Directory does not exist: ${dir}`);
    }
  }
  
  function processImagesInDirectory(directory) {
    const files = fs.readdirSync(directory);
    
    for (const file of files) {
      const filePath = path.join(directory, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory()) {
        // Recursively process subdirectories
        processImagesInDirectory(filePath);
      } else if (/\.(webp|jpg|png)$/i.test(file) && file !== file.toLowerCase()) {
        // Create lowercase versions of image files
        const lowercaseFile = path.join(directory, file.toLowerCase());
        
        if (!fs.existsSync(lowercaseFile)) {
          fs.copyFileSync(filePath, lowercaseFile);
          totalImageCopies++;
          console.log(`Created lowercase copy: ${lowercaseFile}`);
        }
      }
    }
  }
  
  console.log(`Created ${totalImageCopies} additional lowercase copies of image files.`);
  console.log(`Image path fixes complete. Updated ${updatedFilesCount} files with ${totalReplacements} path fixes.`);
}

// Helper function to get files recursively
function getFilesRecursively(dir, extension) {
  let results = [];
  
  if (!fs.existsSync(dir)) {
    console.log(`Directory does not exist: ${dir}`);
    return results;
  }
  
  const files = fs.readdirSync(dir);
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      results = results.concat(getFilesRecursively(filePath, extension));
    } else if (file.endsWith(extension)) {
      results.push(filePath);
    }
  }
  
  return results;
}

// Helper function to escape special characters in regex
function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

// Run the function
fixImagePaths(); 