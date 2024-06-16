import {v2 as cloudinary} from 'cloudinary';

export const sendImageToCloudinary = async() =>{
    cloudinary.config({ 
        cloud_name: "djbpo9xg5", 
        api_key: "514628885319853", 
        api_secret: "<your_api_secret>" // Click 'View Credentials' below to copy your API secret
    });


    cloudinary.uploader.upload("https://res.cloudinary.com/demo/image/upload/getting-started/shoes.jpg", {
        public_id: "shoes"
    }).catch((error)=>{console.log(error)});
    
    


}