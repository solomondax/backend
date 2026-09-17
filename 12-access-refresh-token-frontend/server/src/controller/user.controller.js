
import userModel from "../models/user.model.js";   
import  bcrypt from 'bcryptjs'
import {generateTokens,verifyAccessToken, verifyRefreshToken } from "../utils/auth.js";
// import  verifyAccessToken from "../utils/auth"


// 
const registerController = async (req,res) =>{

  const {name,email,password} = req.body

  let userExist  =  await userModel.findOne({email})

// checking user exist or not
  if(userExist){
    res.status(400).json({
      message : "user already exist",
      error :[
          {
            path :"email",
            message : 'user already exist',

          }
      ]
    })
  }
  // creating user 
  const userCreated  = await userModel.create({
    name,
    email,
    passwordHash : await bcrypt.hash(password, 12)
  })  

  const {accessToken,refreshToken} = generateTokens({userId:userCreated._id})

  userCreated.refreshToken = refreshToken
  await userCreated.save()

  res.cookie("rfToken",refreshToken,{
    httpOnly :true
  })
  res.status(201).json({
    message:"user created successfully",
    data:{
      daxUser :{
        name:userCreated.name,
        email:userCreated.email,
        passwordHash : userCreated.passwordHash
      }
    },
    accessToken

  })

}


const  getRequestFunction = async (req,res) =>{

  const accessToken  = req.headers.authorization.split(" ")[1]

  try{
    const decodedDax = verifyAccessToken(accessToken)

    let  user = await userModel.findById(decodedDax.id) 
    return res.status(200).json({
      message:"user fetched successfully",
      data:{
        daxUser:{
          name:user.name,
          email:user.email
        }
      }
    })

  }catch(error){
    res.status(401).json({
      message:"Unatherized,Invalid or Expire Token"
    })
  }

}

const newRefreshTokenGeneratingFunc = async (req,res) => {
  const refreshToken = req.cookies.rfToken 
  if(!refreshToken){
    return res.status(401).json({
      message:"Unathorized Invalid or refresh token"
    })

  }

try{

  const decoded = await verifyRefreshToken(refreshToken)

  const user = await userModel.findById(decoded.id)
  if(refreshToken !== user.refreshToken){     
       user.refreshToken = null
       await user.save()
     return res.status(401).json({
    message:"Unathorized Invalid or refresh token.........."
  })
  }
  const {accessToken,refreshToken:newRefreshToken} = generateTokens({userId : user._id})
  res.cookie("rfToken", newRefreshToken, {httpOnly:true})
  user.refreshToken = newRefreshToken
  await user.save()
  return res.status(200).json({
    message:"refresh token created successfully",
    data:{
      dax:{
        name:user.name,
        email:user.email
      }
    }
  })
  
 

}catch(error){
  return res.status(401).json({
    message:"Unathorized Invalid or refresh token"
  })

}

}
export  { registerController,
          getRequestFunction,
          newRefreshTokenGeneratingFunc
        }