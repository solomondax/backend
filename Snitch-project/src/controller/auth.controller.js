import userModel from "../models/auth.model.js";
import {
  accessTokenGenarator,
  refreshTokenGenarator,
} from "../utils/auth.utils.js";
import bcrypt from "bcryptjs";

const register = async (req, res) => {
  const { name, email, password } = req.body;

  const isUserExist = await userModel.findOne({ email });

  if (isUserExist) {
    return res.status(400).json({
      message: "User already exist with  this email address",
      errors: [
        {
          field: "email",
          message: "User already exist with  this email address",
        },
      ],
    });
  }

  const user = await userModel.create({
    name,
    email,
    passwordHash: await bcrypt.hash(password, 12),
  });
  const accessToken = accessTokenGenarator({
    userId: user._id,
    role: user.role,
  });
  const refreshToken = refreshTokenGenarator({
    userId: user._id,
    role: user.role,
  });

  const refreshTokenHash = await bcrypt.hash(refreshToken, 12);

  res.cookie("refreshToken", refreshTokenHash, { httpOnly: true });
  const dax = await userModel.findByIdAndUpdate(
    user._id,
    { refreshToken: refreshTokenHash },
    { new: true },
  );
  console.log(dax);

  return res.status(201).json({
    message: "User register successfully",
    data: {
      user: {
        name: user.name,
        email: user.email,
        id: user._id,
      },
    },
    accessToken,
  });
};






/* login api */

const login = async (req, res) => {
  const { email, password } = req.body;

  const user = await userModel.findOne({ email });
  console.log("emailCheck",user); 

  if(!user){
    return(res.status(400).json({
      message:"invalid email or password"
    })
  )
  }
  const ispassCorrect = await bcrypt.compare(password, user.passwordHash);
  console.log("passwordCheck", ispassCorrect);

  if (!ispassCorrect) {
    return res.status(400).json({
      message: "Invalid password and email ",
    });
  }

  const accessToken = accessTokenGenarator({
    userId:user._id,role:user.role})


  const refreshToken = accessTokenGenarator({
    userId:user._id,role:user.role})



   await userModel.findOneAndUpdate({email},{refreshToken:refreshToken})

  res.cookie("refreshToken",refreshToken,{httpOnly:true})


  res.status(200).json({
    message:"user loggein seccessfully",
    user:{
      id:user._id,
      name:user.name,
      email:user.email
 
    },
    accessToken
    
  })



};
export { register, login };

