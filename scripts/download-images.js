const https = require('https');
const fs = require('fs');
const path = require('path');

const images = [
  {
    url: 'https://source.unsplash.com/800x600/?data-science',
    filename: 'project1.jpg'
  },
  {
    url: 'https://source.unsplash.com/800x600/?data-visualization',
    filename: 'project2.jpg'
  },
  {
    url: 'https://source.unsplash.com/800x600/?artificial-intelligence',
    filename: 'project3.jpg'
  },
  {
    url: 'https://source.unsplash.com/800x600/?machine-learning',
    filename: 'project4.jpg'
  }
];

const downloadImage = (url, filename) => {
  const publicDir = path.join(__dirname, '..', 'public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir);
  }

  const filepath = path.join(publicDir, filename);
  const file = fs.createWriteStream(filepath);

  https.get(url, response => {
    response.pipe(file);
    file.on('finish', () => {
      file.close();
      console.log(`Downloaded ${filename}`);
    });
  }).on('error', err => {
    fs.unlink(filepath);
    console.error(`Error downloading ${filename}: ${err.message}`);
  });
};

images.forEach(image => {
  downloadImage(image.url, image.filename);
}); 