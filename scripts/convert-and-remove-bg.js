const { exec } = require('child_process');

console.log('Starting complete image processing workflow:');
console.log('1. Converting all images to WebP format...');

// First, run the image conversion script
exec('node convert-logos.js', (error, stdout, stderr) => {
  if (error) {
    console.error(`Error executing convert-logos.js: ${error.message}`);
    return;
  }
  
  if (stderr) {
    console.error(`Convert-logos stderr: ${stderr}`);
  }
  
  console.log(stdout);
  console.log('\n2. Removing backgrounds from brand logos...');
  
  // Then, run the background removal script for brand logos
  exec('node remove-bg-logos.js', (error2, stdout2, stderr2) => {
    if (error2) {
      console.error(`Error executing remove-bg-logos.js: ${error2.message}`);
      return;
    }
    
    if (stderr2) {
      console.error(`Remove-bg-logos stderr: ${stderr2}`);
    }
    
    console.log(stdout2);
    console.log('\nComplete workflow finished!');
    console.log('1. All images converted to WebP format');
    console.log('2. Brand logos processed for transparent backgrounds');
  });
}); 