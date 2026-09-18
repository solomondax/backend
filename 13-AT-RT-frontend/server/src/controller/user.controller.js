import iModel from "../models/user.model.js";
import bcrypt from "bcryptjs";
import { tokensGenaerator } from "../utils/auth.js";

const registerContoller = async (req, res) => {
  const { name, email, password } = req.body;

  console.log("Iam from body---->",req.body)
  const userExist = await iModel.findOne({ email });
  if (userExist) {
    return res.status(400).json({
      message: "user already exist",
      error: [
        {
          path: "email",
          message: "user already exist",
        },
      ],
    });
  }
  const user = await iModel.create({
    name,
    email,
    passwordHash: await bcrypt.hash(password, 10)
  });

  const { accessToken, refreshToken } = tokensGenaerator({ userId: user._id });
  user.refreshToken = refreshToken;
  await user.save();

  return res.status(201).json(
    {
      message: "user created succesfully",
      data: {
        user: {
           id: user._id,
           name: user.name,
           email: user.email,
           password:user.passwordHash
        },
      },
      accessToken,
    }
  );
};


export { registerContoller };
