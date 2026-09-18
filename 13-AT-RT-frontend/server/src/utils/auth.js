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

export {
  tokensGenaerator
}