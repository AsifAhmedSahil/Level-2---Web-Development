import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.join((process.cwd(), '.env')) });

export default {
  node_env: process.env.NODE_ENV,
  port: process.env.PORT,
  database_url: process.env.DATABASE_URL,
  bcrypt_salt_rounds:process.env.BCRYPT_SALT_ROUNDS,
  default_pass:process.env.DEFAULT_PASS,
  jwt_access_secret: process.env.JWT_ACCESS_SECRET,
  jwt_refresh_secret: process.env.JWT_REFRESH_SECRET,
  ui_reset_pass_link:process.env.RESET_UI_FORGET,
  cloudinary_name:process.env.cloudinary_name,
  cloudinary_api_key:process.env.cloudinary_api_key,
  cloudinary_api_key_secret:process.env.cloudinary_api_key_secret
};
