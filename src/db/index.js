import mongoose from "mongoose";

import DB_NAME from "../constants";


const connectDB = async()=> {
  try{
    const connectInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
    console.log(`\n MongoDB connected and the DB host: ${connectInstance.connection.host}`)
  } catch(error) {
    console.log("mongoDB connection error", error);
    process.exit(1)
  }
}


export default connectDB
