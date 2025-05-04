const sharp = require('sharp');
const { glob } = require('glob');
const path = require('path');
const fs = require('fs');

// Path to your images directory
const IMAGES_DIR = './public/images';
const OUTPUT_DIR = './public/images'; // Save in same directory

// Configuration
const config = {
  quality: 100,      // Highest quality
  lossless: true,    // Use lossless compression for best quality
  resize: false,     // Don't resize by default
  width: 0,          // Width to resize to if resize is true
  recursive: true,   // Process subdirectories
  force: false,      // Overwrite existing files
  extensions: ['.jpg', '.jpeg', '.png', '.gif', '.svg'], // Extensions to convert
  excludeFiles: ['badge-4.svg'],  // Files known to cause issues
  skipErrors: true,  // Continue processing if errors occur
  timeout: 60000,    // Timeout in ms for each conversion (1 minute)
};

// Parse command line arguments
const args = process.argv.slice(2);
for (let i = 0; i < args.length; i++) {
  const arg = args[i];
  if (arg === '--quality' && i + 1 < args.length) {
    config.quality = parseInt(args[i + 1], 10);
    i++;
  } else if (arg === '--resize' && i + 1 < args.length) {
    config.resize = true;
    config.width = parseInt(args[i + 1], 10);
    i++;
  } else if (arg === '--force') {
    config.force = true;
  } else if (arg === '--no-skip-errors') {
    config.skipErrors = false;
  } else if (arg === '--timeout' && i + 1 < args.length) {
    config.timeout = parseInt(args[i + 1], 10);
    i++;
  } else if (arg === '--help') {
    console.log(`
Image Conversion Tool to WebP

Usage:
  node convert-logos.js [options]

Options:
  --quality NUM     WebP quality (0-100, default: ${config.quality})
  --resize WIDTH    Resize images to this width in pixels
  --force           Overwrite existing WebP files
  --no-skip-errors  Stop processing if an error occurs
  --timeout MS      Timeout in ms for each conversion (default: ${config.timeout})
  --help            Show this help message
    `);
    process.exit(0);
  }
}

console.log('Configuration:', config);

// Find all image files
const pattern = config.recursive 
  ? `${IMAGES_DIR}/**/*{${config.extensions.join(',')}}` 
  : `${IMAGES_DIR}/*{${config.extensions.join(',')}}`;

glob(pattern).then(files => {
  console.log(`Found ${files.length} image files to convert`);

  // Create an array to track promises
  const conversionPromises = [];
  const results = {
    successful: 0,
    skipped: 0,
    failed: 0,
    files: []
  };

  // Process each image file
  files.forEach(file => {
    try {
      const relPath = path.relative(IMAGES_DIR, file);
      const basename = path.basename(file);
      
      // Skip excluded files
      if (config.excludeFiles.includes(basename)) {
        console.log(`Skipping excluded file: ${relPath}`);
        results.skipped++;
        results.files.push({ path: relPath, status: 'excluded' });
        return;
      }
      
      const dir = path.dirname(relPath);
      const filenameWithoutExt = path.basename(file, path.extname(file));
      
      // Create output directory if it doesn't exist
      const outputDir = path.join(OUTPUT_DIR, dir);
      if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
      }

      const outputPath = path.join(outputDir, `${filenameWithoutExt}.webp`);
      
      // Skip if WebP already exists and force is false
      if (fs.existsSync(outputPath) && !config.force) {
        console.log(`${relPath} already converted, skipping...`);
        results.skipped++;
        results.files.push({ path: relPath, status: 'exists' });
        return;
      }

      console.log(`Converting ${relPath} to WebP...`);
      
      // Create a sharp instance with timeouts and error handling
      let sharpInstance = sharp(file, {
        failOn: 'none',        // Continue on warnings
        limitInputPixels: false // Don't limit input pixels
      }).ensureAlpha();
      
      // Apply resize if specified
      if (config.resize && config.width > 0) {
        sharpInstance = sharpInstance.resize(config.width);
      }
      
      // Convert to WebP with specified quality
      const conversionPromise = new Promise((resolve, reject) => {
        // Add timeout to prevent hanging on problematic files
        const timeoutId = setTimeout(() => {
          reject(new Error(`Timeout (${config.timeout}ms) exceeded for ${relPath}`));
        }, config.timeout);
        
        sharpInstance
          .webp({ 
            quality: config.quality,
            lossless: config.lossless
          })
          .toFile(outputPath)
          .then(() => {
            clearTimeout(timeoutId);
            console.log(`Successfully converted ${relPath} to WebP`);
            results.successful++;
            results.files.push({ path: relPath, status: 'success' });
            resolve();
          })
          .catch(error => {
            clearTimeout(timeoutId);
            console.error(`Error converting ${relPath}:`, error.message);
            results.failed++;
            results.files.push({ path: relPath, status: 'error', error: error.message });
            
            if (config.skipErrors) {
              resolve(); // Continue processing other files
            } else {
              reject(error); // Stop processing
            }
          });
      });
      
      conversionPromises.push(conversionPromise);
    } catch (error) {
      console.error(`Error processing ${path.relative(IMAGES_DIR, file)}:`, error.message);
      results.failed++;
      results.files.push({ 
        path: path.relative(IMAGES_DIR, file), 
        status: 'error', 
        error: error.message 
      });
      
      if (!config.skipErrors) {
        process.exit(1);
      }
    }
  });

  // Wait for all conversions to complete
  Promise.all(conversionPromises)
    .then(() => {
      console.log(`\nConversion Summary:`);
      console.log(`  Total files found: ${files.length}`);
      console.log(`  Successfully converted: ${results.successful}`);
      console.log(`  Skipped: ${results.skipped}`);
      console.log(`  Failed: ${results.failed}`);
      
      if (results.failed > 0) {
        console.log('\nFailed conversions:');
        results.files
          .filter(file => file.status === 'error')
          .forEach(file => {
            console.log(`  - ${file.path}: ${file.error}`);
          });
      }
      
      // Write a report file with detailed results
      const reportPath = path.join(OUTPUT_DIR, 'conversion-report.json');
      fs.writeFileSync(reportPath, JSON.stringify({
        timestamp: new Date().toISOString(),
        config,
        results
      }, null, 2));
      console.log(`\nDetailed report saved to: ${reportPath}`);
    })
    .catch(err => {
      console.error('Error during batch conversion:', err.message);
      process.exit(1);
    });
}).catch(err => {
  console.error('Error finding image files:', err.message);
  process.exit(1);
});
