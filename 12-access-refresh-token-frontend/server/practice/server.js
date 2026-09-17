import app from './src/app.js'
import connectDB from './src/config/db.js'
import dotenv from 'dotenv'
import dns from 'dns'
dotenv.config()
dns.setServers(['8.8.8.8', '8.8.4.4'])


let PORT = process.env.PORT || 3000
connectDB()

app.listen(PORT,()=>{
  console.log(`server is running on port ${PORT}`)
}) 