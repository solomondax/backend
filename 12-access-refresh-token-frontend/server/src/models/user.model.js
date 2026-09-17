import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
  name:{
    type:String,
    required: true,
    minLength:[3,"name should be  3 characters"],
    maxLength:[50,"name should be less then 50 characters"]
  },
  email:{
    type:String,
    required:true
  },
  passwordHash:{
     type:String,
     required:true,
  },
  refreshToken:{
    type:String
  }
})

const userModel = mongoose.model("userAuth",userSchema)

export default userModel