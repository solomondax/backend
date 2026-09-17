import jwt from 'jsonwebtoken'
import config from  '../config/config.js'


const  generateTokens = ({userId}) =>{
let accessToken = jwt.sign({id:userId},config.ACCESS_TOKEN_SECRET,{expiresIn : "15m"})
let refreshToken = jwt.sign({id:userId},config.REFRESH_TOKEN_SECRET,{expiresIn : "7d"})

return {accessToken,refreshToken}
}

const verifyAccessToken = (token) =>{
  let decode = jwt.verify(token,config.ACCESS_TOKEN_SECRET)
  return decode 

}

const verifyRefreshToken = (token) =>{
  let decode = jwt.verify(token,config.REFRESH_TOKEN_SECRET)
  return decode 

}

export {verifyAccessToken,generateTokens,verifyRefreshToken} 