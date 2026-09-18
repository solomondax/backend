import app from './src/App/app.js'
import connectDB from "./src/config/db.js"
import config from './src/config/config.js'
await connectDB()

app.listen(config.PORT,()=>{
  console.log(`server running on port ${config.PORT}`)
})