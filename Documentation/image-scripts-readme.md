# Image Processing Scripts

This directory contains scripts for optimizing and processing images for the website.

## Scripts Overview

1. **convert-logos.js** - Converts images to WebP format with high quality
2. **remove-bg-logos.js** - Removes backgrounds from PNG brand logos
3. **convert-and-remove-bg.js** - Runs both scripts in sequence

## Requirements

These scripts require Node.js and the following packages:
- sharp
- glob

These dependencies are already included in the project's package.json.

## Usage

### Convert Images to WebP Format

This script converts all images in the public/images directory to WebP format:

```bash
node convert-logos.js [options]
```

Options:
- `--quality NUM` - WebP quality (0-100, default: 100)
- `--resize WIDTH` - Resize images to specified width in pixels
- `--force` - Overwrite existing WebP files
- `--no-skip-errors` - Stop processing if an error occurs
- `--timeout MS` - Timeout in ms for each conversion (default: 60000)
- `--help` - Show help message

Example:
```bash
# Convert all images with 90% quality and force overwrite
node convert-logos.js --quality 90 --force
```

### Remove Backgrounds from Brand Logos

This script removes backgrounds from PNG brand logos:

```bash
node remove-bg-logos.js [options]
```

Options:
- `--input DIR` - Input directory containing PNG images (default: ./public/images/brands)
- `--output DIR` - Output directory for processed images (default: ./public/images/brands/no-bg)
- `--threshold NUM` - Color similarity threshold (0-255, default: 30)
- `--samples NUM` - Number of sample points per edge (default: 5)
- `--help` - Show help message

Example:
```bash
# Process brand logos with higher threshold for better background detection
node remove-bg-logos.js --threshold 50 --samples 10
```

### Run Complete Workflow

This script runs both conversion and background removal in sequence:

```bash
node convert-and-remove-bg.js
```

## How It Works

### WebP Conversion

The WebP conversion script:
1. Scans for images with supported extensions (.jpg, .jpeg, .png, .gif, .svg)
2. Converts each image to WebP format with highest quality settings
3. Preserves directory structure
4. Generates a conversion report

### Background Removal

The background removal script:
1. Analyzes brand logos to detect background colors
2. Creates transparent versions by removing the background
3. Saves processed images to the no-bg directory
4. Works best on logos with solid background colors

## Troubleshooting

If you encounter issues:

1. Check the detailed reports generated in public/images/conversion-report.json
2. Increase the threshold for background removal if logo colors are being removed
3. For problematic files, add them to the excludeFiles array in the script
4. Increase timeout for large images 