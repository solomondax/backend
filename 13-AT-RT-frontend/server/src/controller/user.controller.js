import iModel from "../models/user.model.js";
import bcrypt from "bcryptjs";
import {
  tokensGenaerator,
  verifyAccessToken,
  verifyRefreshToken,
} from "../utils/auth.js";
// import { verify } from "jsonwebtoken";
// import {cookie} from 'cookie'

const registerContoller = async (req, res) => {
  const { name, email, password } = req.body;

  console.log("Iam from body---->", req.body);
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
    passwordHash: await bcrypt.hash(password, 10),
  });

  const { accessToken, refreshToken } = tokensGenaerator({ userId: user._id });
  user.refreshToken = refreshToken;
  await user.save();
  res.cookie("refreshToken", refreshToken, { httpOnly: true });

  return res.status(201).json({
    message: "user created succesfully",
    data: {
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        password: user.passwordHash,
      },
    },
    accessToken,
  });
};

//  get api

const getController = async (req, res) => {
  const autherized = req.headers.authorization?.split(" ")[1];
  if (!autherized) {
    return res.status(401).json({
      message: "Unautherized user token not found",
    });
  }

  try {
    const decode = verifyAccessToken(autherized);

    const user = await iModel.findById(decode.id);
    res.status(200).json({
      message: "user fetched successfully",
      data: {
        user: {
          name: user.name,
          email: user.email,
        },
      },
    });
  } catch (error) {
    return res.status(401).json({
      message: "Unauthorized, Invalid or expired access token daxa",
    });
  }
};

//  refresh token

const refreshController = async (req, res) => {
  const refreshToken = req.cookies.refreshToken;

  if (!refreshToken) {
    return res.status(401).json({
      message: "Unauthorized, refresh token not found",
    });
    }

    try{
      let decode = verifyRefreshToken(refreshToken);

      const user = await iModel.findById(decode.id);
      if (refreshToken !== user.refreshToken) {
        user.refreshToken = null;
        await user.save();
        return res.status(401).json({
          message: "user details misMatched",
        });
      }

      const { accessToken, refreshToken: newRefreshToken } = tokensGenaerator({
        userId: user._id,
      });
      res.cookie("refreshToken", newRefreshToken, { httpOnly: true });
      user.refreshToken = newRefreshToken;
      await user.save();

      return res.status(200).json({
        message: "refreshtoken created successfully",
        accessToken
      });
    } catch (error) {
      return res.status(401).json({
        message: "Unauthorized, Invalid or expired refresh token",
      });
    }
  
};

export { registerContoller, getController,refreshController };
