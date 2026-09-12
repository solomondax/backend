import express from "express";
import connectDB from "./config/db.js";
import jwt from "jsonwebtoken";
import dns from "dns";
import bcrypt from "bcryptjs";
import authenticate from "./middleware/auth.middleware.js";
import dotenv from "dotenv";
dotenv.config(); 

import UserModel from "./model/user.model.js";
import userModel from "../../practice/src/model/user.model.js";

let app = express();
app.use(express.json());

dns.setServers(["1.1.1.1", "8.8.8.8"]);
connectDB();

app.get("/api", (req, res) => {
  res.status(200).json({
    message: "Welcome to the authentication system",
  });
});

app.post("/api/auth", async (req, res) => {
  const { name, email, password } = req.body;
  console.log("iam from--->", req.body);

  let created = await UserModel.create({
    name,
    email,
    password: await bcrypt.hash(password, 10),
  });

  let token = jwt.sign(
    {
      id: created._id,email,name
    },
    process.env.JWT_SECRET,
  );

  res.status(200).json({
    message: "User registered successfully",
    data: {
      user: { name, email,password, id: created._id },
      token,
    },
  });
});

app.get('/api/auth/me', authenticate, async (req, res) => {
  res.status(200).json({
    message: "User information retrieved successfully",
    data: {
      user: req.daxUser
    }
  });
});   

//login api

app.post('/api/login',async (req,res)=>{
  const {email,name,password}= req.body

  let data = await UserModel.findOne({
    name
  })
  if(!data){
    res.status(400).json({
      message:"data is null"
    })
  }

  let isValidPass = bcrypt.compare(password,data.password)

  if(!isValidPass){
    res.status(400).json({
      message:"invalid password or email"
    })
  }

  let  token = jwt.sign({id:data._id},
     process.env.JWT_SECRET,
  )

  res.status(200).json({
    message:"user logged in successfully",
    data:{
      user:{
        name:data.name,
        email:data.email,
        password:data.password
      }
    }
  },token)
})


  // let findData = await UserModel.findById(data.id) 
  // console.log(findData )
// })
export default app;


// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjZhOWZkODc1MjZlYjJhOWU3OTk5OTFkNCIsImlhdCI6MTc4ODg2MDUzNH0.nrXOGb0p6_YYn8ZrylZRLfEuuKXhI1o4zlFspOTv1to






































// import express from "express";
// import connectDB from "./config/db.js";
// import jwt from "jsonwebtoken";
// import dns from "dns";

// const app = express();

// app.use(express.json());

// dns.setServers([
//   "1.1.1.1",
//   "8.8.8.8"
// ]);

// connectDB();

// app.get("/api", (req, res) => {
//   res.status(200).json({
//     message: "Welcome to the authentication system"
//   });
// });

// app.post("/api/auth", (req, res) => {
//   const { name, email, password } = req.body;

//   console.log("I am from --->", req.body);

//   const token = jwt.sign(
//     {
//       name,
//       email
//     },
//     process.env.JWT_SECRET
//   );

//   res.status(201).json({
//     message: "User registered successfully",
//     data: {
//       user: {
//         name,
//         email,
//         password
//       },
//       token
//     }
//   });
// });

// export default app;
