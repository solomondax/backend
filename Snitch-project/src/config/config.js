import dotenv from 'dotenv'
dotenv.config()

const config = {
    MONGO_URI : process.env.MONGO_URI,
    ACCESS_TOKEN_KEY : process.env.ACCESS_TOKEN_KEY,
    REFRESH_TOKEN_KEY : process.env.REFRESH_TOKEN_KEY,
    PORT : process.env.PORT
}

export default  config;
