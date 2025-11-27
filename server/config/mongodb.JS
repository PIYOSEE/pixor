import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();  // load .env

const connectDB = async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/pixor`);
        console.log("Database connected");
    } catch (error) {
        console.log("DB Error:", error);
        process.exit(1);
    }
};

export default connectDB;
