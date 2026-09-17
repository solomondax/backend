import mongoose from 'mongoose'
import config from './config.js'



const connectDB = async ()=>{
  try{
       await  mongoose.connect(config.MONGO_URI)
       console.log("connected mongoDB")

  }catch(error){
    console.log("ERror from while connecting the Database...",error)
  }
 
}
export default connectDB;               

