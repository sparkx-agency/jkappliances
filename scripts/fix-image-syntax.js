const fs = require('fs');
const path = require('path');
const { glob } = require('glob');

// Configuration
const config = {
  // Target directories/files that contain the service pages
  targetPattern: './src/app/areas/**/*.tsx',
  // Dry run mode - just report issues without fixing them
  dryRun: false,
  // Regular expressions for finding and fixing problematic patterns
  patterns: {
    // Matches "/ style={{ objectFit: "contain" }} />" pattern
    brokenObjectFit: /(\/)\s+style=\{\{\s*objectFit:\s*["']contain["']\s*\}\}\s*\/>/g,
    // Replacement to fix it: properly closed tag with style prop inside
    fixedObjectFit: 'style={{ objectFit: "contain" }} />',
  }
};

// Fix Image component syntax in a file
async function fixImageSyntax(filePath) {
  try {
    // Read file content
    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;
    
    // Find and replace broken objectFit pattern
    content = content.replace(
      config.patterns.brokenObjectFit, 
      config.patterns.fixedObjectFit
    );
    
    // Count modifications
    const matches = originalContent.match(config.patterns.brokenObjectFit) || [];
    const matchCount = matches.length;
    
    // Log results
    if (matchCount > 0) {
      console.log(`Found ${matchCount} issues in ${filePath}`);
      
      if (!config.dryRun) {
        // Save changes
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Fixed ${matchCount} issues in ${filePath}`);
      } else {
        console.log(`[DRY RUN] Would fix ${matchCount} issues in ${filePath}`);
      }
    }
    
    return matchCount;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return 0;
  }
}

// Main function
async function main() {
  // Get all service page files
  const files = await glob(config.targetPattern);
  console.log(`Found ${files.length} service page files to check`);
  
  // Process each file
  let totalIssues = 0;
  let totalFixedFiles = 0;
  
  for (const file of files) {
    const issuesFixed = await fixImageSyntax(file);
    
    if (issuesFixed > 0) {
      totalIssues += issuesFixed;
      totalFixedFiles++;
    }
  }
  
  // Summary
  console.log('\n--- Summary ---');
  console.log(`Total files checked: ${files.length}`);
  console.log(`Files with issues: ${totalFixedFiles}`);
  console.log(`Total issues ${config.dryRun ? 'found' : 'fixed'}: ${totalIssues}`);
  
  if (config.dryRun) {
    console.log('\nRun again without --dry-run to apply fixes');
  }
}

// Run the script
main().catch(error => {
  console.error('Error:', error);
  process.exit(1);
}); 