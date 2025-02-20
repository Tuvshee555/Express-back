import express from "express";
import mongoose from "mongoose";
import { userRouter } from "./routers/user-router.js";

const mongoURI = "mongodb+srv://tuvshee894:pMGouSOSywNnqc7d@cluster0.vds8d.mongodb.net/test?retryWrites=true&w=majority&appName=Cluster0"

const app = express();
const port = 4000


const connectDb = async () => {
  try {
    await mongoose.connect(mongoURI);
    console.log("✅ Successfully connected to MongoDB");
  } catch (error) {
    console.error("❌ MongoDB connection error:", error);
    process.exit(1); // Stop server if DB fails
  }
};

connectDb();

app.use(express.json()); // Middleware to parse JSON requests

app.use("/users", userRouter); // Use userRouter for all /users routes

app.listen(port, () => {
  console.log(`🚀 Server running at http://localhost:${port}`);
});
