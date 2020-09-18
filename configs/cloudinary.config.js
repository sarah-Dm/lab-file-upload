//Les paquets dont nous avons besoin
const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const multer = require('multer');

//Les configurations de cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET
});

//Un nouvel objet 
const storage = new CloudinaryStorage({
  // cloudinary: cloudinary,
  cloudinary,
  folder: 'lab-file-upload', // The name of the folder in cloudinary
  allowedFormats: ['jpg', 'png'],
  // params: { resource_type: 'raw' }, => this is in case you want to upload other type of files, not just images
  filename: function (req, file, cb) {
    cb(null, file.originalname); // The file on cloudinary would have the same name as the original file name
  }
});
 
//Ce qui va nous permettre de upload                        storage: storage
const uploadCloud = multer({ storage });
 
module.exports = uploadCloud;