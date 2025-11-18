import mongoose from "mongoose";

const connectDb = async () => {
  await mongoose
    .connect(process.env.MONGO_URL)
    .then(() => {
      console.log("DB Connected!");
    })
    .catch((err) => {
      console.log("MongoDB connection error", err);
    });
};

export default connectDb;
