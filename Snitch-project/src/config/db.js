import  mongoose from 'mongoose'
import config from './config.js'

const connectDB  =  async () =>{
    try{
      await mongoose.connect(config.MONGO_URI)
      console.log("Connected DB")

    }catch(errors){
      console.log("While connect Errors",error)
    }
}

export default connectDB