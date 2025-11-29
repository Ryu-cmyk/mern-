 import mongoose from "mongoose"
export const connectDB = async ()=>{
    
    try { 
        await mongoose.connect(process.env.MONGO_URL);
    console.log("databse connected successfully!");
 } catch (error) {
    console.error("error connecting to database",error);
    process.exit(1)
 }
};