import dotenv from 'dotenv'
dotenv.config()
console.log("ALL iENV:", process.env.MONGO_URI);

const config = {
  MONGO_URI : process.env.MONGO_URI,
  ACCESS_TOKEN_SECRET : process.env.ACCESS_TOKEN_SECRET,
  REFRESH_TOKEN_SECRET: process.env.REFRESH_TOKEN_SECRET
}
// console.log("I am from config =====>", config)

export default config;