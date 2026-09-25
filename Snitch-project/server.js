import app from './src/App/app.js'
import connectDB from  './src/config/db.js'
import config from './src/config/config.js'

let port = config.PORT


await connectDB()

app.listen(port,()=>{
  console.log(`Server Running on port ${port}`)
})