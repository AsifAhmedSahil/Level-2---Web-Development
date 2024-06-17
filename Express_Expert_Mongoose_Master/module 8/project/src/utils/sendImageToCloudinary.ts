import {v2 as cloudinary} from 'cloudinary';
import config from '../app/config';
import multer from 'multer';

export const sendImageToCloudinary = async() =>{
    cloudinary.config({ 
        cloud_name: config.cloudinary_name, 
        api_key: config.cloudinary_api_key, 
        api_secret: config.cloudinary_api_key_secret // Click 'View Credentials' below to copy your API secret
    });


    cloudinary.uploader.upload("https://res.cloudinary.com/demo/image/upload/getting-started/shoes.jpg", {
        public_id: "shoes"
    }).catch((error)=>{console.log(error)});

}


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, '/tmp/my-uploads')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.fieldname + '-' + uniqueSuffix)
    }
  })
  
  const upload = multer({ storage: storage })