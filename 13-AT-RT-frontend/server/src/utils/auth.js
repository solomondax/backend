import jwt from 'jsonwebtoken'
import config from '../config/config.js'

const tokensGenaerator = ({userId}) =>{
  let accessToken = jwt.sign({id:userId},config.ACCESS_TOKEN,{expiresIn:"15m"})
  let refreshToken = jwt.sign({id:userId},config.REFRESH_TOKEN,{expiresIn:"7d"})
  
  return {
    accessToken,
    refreshToken
  }

}

const verifyAccessToken = (token) =>{

  let decode = jwt.verify(token,config.ACCESS_TOKEN)
  return decode

}

const verifyRefreshToken = (token) =>{

  let decode = jwt.verify(token,config.REFRESH_TOKEN)
  return decode

}

export {
  tokensGenaerator,verifyAccessToken,verifyRefreshToken
}