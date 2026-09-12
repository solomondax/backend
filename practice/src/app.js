import express from 'express'; 
import userModel from './model/user.model.js'
import jwt from 'jsonwebtoken';
import authenticate from './middleware/auth.middleware.js'
import dotenv from  'dotenv'
dotenv.config()
 

const app = express()
app.use(express.json())



app.get('/',(req,res)=>{
  res.send("hello world and dax dfssdgsdg")
})
app.post('/user', async (req,res)=>{
  const {name,email} = req.body
  console.log("I am from Body",req.body)

  let userData = await userModel.create({
    name,email
  });

  // let id = userData._id

  const token = jwt.sign({name,email,id:userData._id},process.env.JWT_SECRET_KEY)
  return res.status(201).json({
    message:"data created successfully",
    data:{
      user:{
       name,email,id:userData._id,
        token
      }
    }
  })
})


app.get('/user/me', authenticate, async (req,res)=>{
 
    res.status(200).json({
    message: "User information retrieved successfully",
    data: {
      userDax : req.dax
    }
  });
})

export default app;