import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const dbConnection = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`Database connected OK ✅`);
    // console.log(`DB connection Host: ${dbConnection.connection.host}`);
  } catch (error) {
    console.log("Database connection FAILED ❌ !!!", error);
    process.exit(1);
  }
};

export default connectDB;
