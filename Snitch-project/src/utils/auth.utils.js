// import config from "./config/config.js";
import config from "../config/config.js";
import jwt from "jsonwebtoken";


 export const accessTokenGenarator = ({ user, role }) => {
  const accessToken = jwt.sign({ user, role }, config.ACCESS_TOKEN_KEY, {
    expiresIn: "15m",
  });
  return accessToken;
};
 export const refreshTokenGenarator = ({ user, role }) => {
  const refreshToken = jwt.sign({ user, role }, config.REFRESH_TOKEN_KEY, {
    expiresIn: "7d",
  });
  return refreshToken;
};

// export {accessTokenGenarator,refreshTokenGenarator}