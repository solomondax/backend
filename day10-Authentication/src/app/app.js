import express from "express";
import jwt from "jsonwebtoken"; 

let app = express()
app.use(express.json())

app.get('/', (req, res) => {
  res.status(200).json({message:"Welcaome to the authentication system"})
})

app.post('/Auth',(req,res)=>{
  // data saving in the backend
  const { username, email, password } = req.body;
  console.log("iam from--->", req.body)
  const token = jwt.sign({ email, username },"b6a26514b2605c0da5586eb3701c8bc07006b7b893e408c5e2a6f97af55628a8d3c159209fea1aa4bdb6c26aaf23893e")

  res.status(201).json({message:"User registered successfully", data:{user:{email, username}}, token})
});


export default app       