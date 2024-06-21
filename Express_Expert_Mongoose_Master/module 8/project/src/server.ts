import mongoose from 'mongoose';
import app from './app';
import config from './app/config';
import seedSuperAdmin from './DB';

async function main() {
  try {
    await mongoose.connect(config.database_url as string);
    seedSuperAdmin();
    console.log("mongodb connected")
    app.listen(config.port, () => {
      console.log(`Example app listening on port ${config.port}`);
    });
  } catch (error) {
    console.log(error);
  }
}

main();
