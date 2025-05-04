const sharp = require('sharp');
const { glob } = require('glob');
const path = require('path');
const fs = require('fs');

// Configuration - can be overridden by command line arguments
const config = {
  inputDir: './public/images/brands',
  outputDir: './public/images/brands/no-bg',
  threshold: 30,
  samplePoints: 5, // Number of pixels to sample from each edge
};

// Parse command line arguments
const args = process.argv.slice(2);
for (let i = 0; i < args.length; i++) {
  const arg = args[i];
  if (arg === '--threshold' && i + 1 < args.length) {
    config.threshold = parseInt(args[i + 1], 10);
    i++;
  } else if (arg === '--input' && i + 1 < args.length) {
    config.inputDir = args[i + 1];
    i++;
  } else if (arg === '--output' && i + 1 < args.length) {
    config.outputDir = args[i + 1];
    i++;
  } else if (arg === '--samples' && i + 1 < args.length) {
    config.samplePoints = parseInt(args[i + 1], 10);
    i++;
  } else if (arg === '--help') {
    console.log(`
Background Removal Tool for Brand Logos

Usage:
  node remove-bg-logos.js [options]

Options:
  --input DIR       Input directory containing PNG images (default: ${config.inputDir})
  --output DIR      Output directory for processed images (default: ${config.outputDir})
  --threshold NUM   Color similarity threshold (0-255, default: ${config.threshold})
  --samples NUM     Number of sample points per edge (default: ${config.samplePoints})
  --help            Show this help message
    `);
    process.exit(0);
  }
}

console.log('Configuration:', config);

// Make sure output directory exists
if (!fs.existsSync(config.outputDir)) {
  fs.mkdirSync(config.outputDir, { recursive: true });
  console.log(`Created output directory: ${config.outputDir}`);
}

// Find all PNG files
glob(`${config.inputDir}/*.png`).then(files => {
  console.log(`Found ${files.length} PNG files to process`);

  // Process each PNG file
  Promise.all(files.map(async file => {
    try {
      const filename = path.basename(file);
      const outputPath = path.join(config.outputDir, filename);
      
      // Skip if already processed
      if (fs.existsSync(outputPath)) {
        console.log(`${filename} already processed, skipping...`);
        return;
      }

      console.log(`Processing ${filename}...`);

      // Get image metadata
      const metadata = await sharp(file).metadata();
      
      // Get dimensions
      const width = metadata.width;
      const height = metadata.height;
      
      if (!width || !height) {
        throw new Error(`Could not get dimensions for ${filename}`);
      }

      // Sample background colors from edges
      const bgSamples = [];
      
      // Sample from all four edges
      for (let i = 0; i < config.samplePoints; i++) {
        // Top edge
        bgSamples.push(await getPixelColor(file, Math.floor(width * i / (config.samplePoints - 1)), 0));
        // Bottom edge
        bgSamples.push(await getPixelColor(file, Math.floor(width * i / (config.samplePoints - 1)), height - 1));
        // Left edge
        bgSamples.push(await getPixelColor(file, 0, Math.floor(height * i / (config.samplePoints - 1))));
        // Right edge
        bgSamples.push(await getPixelColor(file, width - 1, Math.floor(height * i / (config.samplePoints - 1))));
      }
      
      // Get most common background color
      const bgColor = getMostCommonColor(bgSamples);
      console.log(`Background color for ${filename}:`, bgColor);
      
      // Process the image pixel by pixel
      const { data, info } = await sharp(file)
        .ensureAlpha()
        .raw()
        .toBuffer({ resolveWithObject: true });
      
      const newData = Buffer.alloc(data.length);
      
      // For each pixel, if it's close to background color, make it transparent
      for (let i = 0; i < data.length; i += 4) {
        const r = data[i];
        const g = data[i + 1];
        const b = data[i + 2];
        const a = data[i + 3];
        
        // If color is close to background color or already transparent, make it transparent
        if (isColorSimilar([r, g, b], bgColor, config.threshold) || a < 128) {
          newData[i] = 0;     // R
          newData[i + 1] = 0; // G
          newData[i + 2] = 0; // B
          newData[i + 3] = 0; // Alpha (transparent)
        } else {
          newData[i] = r;     // R
          newData[i + 1] = g; // G
          newData[i + 2] = b; // B
          newData[i + 3] = 255; // Alpha (fully opaque)
        }
      }
      
      // Create new image from the processed data
      await sharp(newData, {
        raw: {
          width: info.width,
          height: info.height,
          channels: 4
        }
      })
      .png()
      .toFile(outputPath);
      
      console.log(`Successfully processed ${filename}`);
      return { filename, success: true };
    } catch (error) {
      console.error(`Error processing ${path.basename(file)}:`, error);
      return { filename: path.basename(file), success: false, error: error.message };
    }
  })).then(results => {
    const successful = results.filter(r => r && r.success).length;
    const failed = results.filter(r => r && !r.success).length;
    console.log(`\nProcessing complete: ${successful} images processed successfully, ${failed} failed`);
  });
}).catch(err => {
  console.error('Error finding PNG files:', err);
});

// Helper function to get color of a specific pixel
async function getPixelColor(imagePath, x, y) {
  try {
    const data = await sharp(imagePath)
      .ensureAlpha()
      .raw()
      .toBuffer({ resolveWithObject: true });
    
    const { width, channels } = data.info;
    const idx = (y * width + x) * channels;
    return [
      data.data[idx],
      data.data[idx + 1],
      data.data[idx + 2]
    ];
  } catch (error) {
    console.error('Error getting pixel color:', error);
    return [255, 255, 255]; // Default to white
  }
}

// Helper function to determine if a color is similar to another
function isColorSimilar(color1, color2, threshold = 30) {
  const dr = Math.abs(color1[0] - color2[0]);
  const dg = Math.abs(color1[1] - color2[1]);
  const db = Math.abs(color1[2] - color2[2]);
  
  return dr <= threshold && dg <= threshold && db <= threshold;
}

// Helper function to find the most common color
function getMostCommonColor(colors) {
  // Use a frequency map to find the most common color
  const colorMap = new Map();
  
  // Group similar colors together
  for (const color of colors) {
    let found = false;
    
    // Check if this color is similar to an existing one
    for (const [key, count] of colorMap.entries()) {
      const [r, g, b] = key.split(',').map(Number);
      
      if (isColorSimilar(color, [r, g, b], 15)) {
        // Update the existing color with a weighted average
        const newR = Math.round((r * count + color[0]) / (count + 1));
        const newG = Math.round((g * count + color[1]) / (count + 1));
        const newB = Math.round((b * count + color[2]) / (count + 1));
        
        // Remove the old key
        colorMap.delete(key);
        
        // Add the new key with incremented count
        colorMap.set(`${newR},${newG},${newB}`, count + 1);
        found = true;
        break;
      }
    }
    
    // If no similar color was found, add this as a new color
    if (!found) {
      colorMap.set(`${color[0]},${color[1]},${color[2]}`, 1);
    }
  }
  
  // Find the most frequent color
  let maxCount = 0;
  let mostCommonColor = [255, 255, 255]; // Default to white
  
  for (const [key, count] of colorMap.entries()) {
    if (count > maxCount) {
      maxCount = count;
      mostCommonColor = key.split(',').map(Number);
    }
  }
  
  return mostCommonColor;
} 