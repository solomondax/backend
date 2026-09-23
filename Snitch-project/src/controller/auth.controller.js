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

export default register;
