import mongoose from "mongoose";

export const connectDB = async () => {
  const mongoUri = process.env.MONGODB_URI;

  if (!mongoUri) {
    throw new Error('Missing env var "MONGODB_URI"');
  }

  await mongoose.connect(mongoUri);

  console.log("MongoDB connected");
};
