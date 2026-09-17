import jwt from 'jsonwebtoken'
import userModel from '../model/user.model.js'
import dotenv from 'dotenv'
dotenv.config()

const authenticate = async (req,res,next)=>{
const header = req.headers.authorization

if(!header){
  return res.status(401).json({
    message : " token not found",
  })
}

  let data = jwt.verify(header,process.env.JWT_SECRET_KEY)
  console.log("from middleware---->",data)

  let usr = await userModel.findById(data.id)

  req.dax = usr 
  next()
}


export default authenticate