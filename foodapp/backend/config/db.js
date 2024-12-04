import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://greatstack:13244231@cluster0.iig1n.mongodb.net/foodapp"
    )
    .then(() => console.log("DB Connected"));
};
