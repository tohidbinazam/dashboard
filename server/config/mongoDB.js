import mongoose from 'mongoose';

const mongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB connect successfully`);
  } catch (error) {
    console.error(error.message);
  }
};

export default mongoDB;
