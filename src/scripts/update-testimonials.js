const fs = require('fs');
const path = require('path');

// Function to update files with the new testimonial component
async function updateFilesWithNewTestimonialComponent() {
  console.log('Starting testimonial component update...');
  
  // Directories to search for pages
  const baseAppDir = path.join(process.cwd(), 'src', 'app');
  const areasDir = path.join(baseAppDir, 'areas');
  const servicesDir = path.join(baseAppDir, 'services');
  const brandsDir = path.join(baseAppDir, 'brands');
  
  // Get all .tsx files recursively
  const allPages = [
    ...getFilesRecursively(areasDir, '.tsx'),
    ...getFilesRecursively(servicesDir, '.tsx'),
    ...getFilesRecursively(brandsDir, '.tsx'),
  ];
  
  console.log(`Found ${allPages.length} total pages to process`);
  
  let updatedFilesCount = 0;
  
  // Process each file
  for (const filePath of allPages) {
    try {
      console.log(`Processing: ${filePath}`);
      let content = fs.readFileSync(filePath, 'utf8');
      let modified = false;
      
      // Check if file imports TestimonialsSection
      if (content.includes("import TestimonialsSection")) {
        console.log(`Found TestimonialsSection import in ${filePath}`);
        
        // Add import for AppleTestimonialsSection if not already present
        if (!content.includes("import AppleTestimonialsSection")) {
          content = content.replace(
            /import TestimonialsSection.+?;/,
            match => `${match}\nimport AppleTestimonialsSection from '@/components/sections/AppleTestimonialsSection';`
          );
          modified = true;
        }
        
        // Get the file location context
        const relPath = filePath.replace(baseAppDir, '');
        
        // Determine area, service, or brand name
        let locationFilter = '';
        let serviceFilter = '';
        
        if (relPath.startsWith('/areas/')) {
          locationFilter = path.basename(path.dirname(filePath));
        } else if (relPath.startsWith('/services/')) {
          serviceFilter = path.basename(path.dirname(filePath))
            .replace('-', ' ')
            .split(' ')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
        }
        
        console.log(`Location filter: "${locationFilter}", Service filter: "${serviceFilter}"`);
        
        // Replace TestimonialsSection component with AppleTestimonialsSection
        const oldTestimonialRegex = /<TestimonialsSection[\s\S]*?\/>/;
        if (oldTestimonialRegex.test(content)) {
          const oldTestimonialMatch = content.match(oldTestimonialRegex);
          
          if (oldTestimonialMatch) {
            console.log(`Found TestimonialsSection component in ${filePath}`);
            
            // Extract title and subtitle from old component if available
            let title = '';
            let subtitle = '';
            
            const titleMatch = oldTestimonialMatch[0].match(/title=["']([^"']*)["']/);
            if (titleMatch && titleMatch[1]) {
              title = titleMatch[1];
            }
            
            const subtitleMatch = oldTestimonialMatch[0].match(/subtitle=["']([^"']*)["']/);
            if (subtitleMatch && subtitleMatch[1]) {
              subtitle = subtitleMatch[1];
            }
            
            console.log(`Title: "${title}", Subtitle: "${subtitle}"`);
            
            // Create new component
            let newComponent = `<AppleTestimonialsSection\n`;
            
            if (title) {
              newComponent += `        title="${title}"\n`;
            }
            
            if (subtitle) {
              newComponent += `        subtitle="${subtitle}"\n`;
            }
            
            if (locationFilter) {
              newComponent += `        filterLocation="${locationFilter}"\n`;
            }
            
            if (serviceFilter) {
              newComponent += `        filterService="${serviceFilter}"\n`;
            }
            
            newComponent += `        maxReviews={4}\n      />`;
            
            // Replace old component with new one
            content = content.replace(oldTestimonialRegex, newComponent);
            modified = true;
          }
        }
      }
      
      // Save the modified file
      if (modified) {
        fs.writeFileSync(filePath, content, 'utf8');
        updatedFilesCount++;
        console.log(`Updated: ${filePath}`);
      }
    } catch (error) {
      console.error(`Error processing file ${filePath}:`, error);
    }
  }
  
  console.log(`Testimonial component update complete. Updated ${updatedFilesCount} files.`);
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

// Run the function
updateFilesWithNewTestimonialComponent(); 