import mongoose from 'mongoose'

const userModel = new mongoose.Schema({
  name:{
    type:String,
    required:true
  },
  email:{
    type:String,
    required:true
  },
  passwordHash:{
    type:String,
    required:true
  },

})

const iModel = mongoose.model("ART",userModel)
export default iModel