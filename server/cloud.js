const cloudinary = require('cloudinary').v2;
const fs = require('fs');

// Configure Cloudinary
cloudinary.config({
  cloud_name: 'dvoyvhkjp',
  api_key: '123178137976135',
  api_secret: 'qD67k-wXLGXdqIQLxBjgAMLUZN0',
});

// Folder name in Clhome/oudinary
const folderName = '/Home/rickPortfolio';

async function fetchImages() {
  try {
    // Fetch resources from Cloudinary
    const result = await cloudinary.api.resources({
      type: 'upload',
      prefix: folderName, // Specify folder
    });

    // Extract URLs
    const imageUrls = result.resources.map((image) => ({
      src: image.secure_url,
      alt: image.public_id, // Use public_id as alt text
    }));
    console.log(result); // Log the result object to check the API response

    // Save URLs to a JSON file
    fs.writeFileSync('imageUrls.json', JSON.stringify(imageUrls, null, 2));
    console.log('Image URLs saved to imageUrls.json');
  } catch (error) {
    console.error('Error fetching images:', error);
  }
}

fetchImages();
