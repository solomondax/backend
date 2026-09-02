// let dotenv = require('dotenv')
// dotenv.config();



require("dotenv").config();
let app = require('./src/app')
let port = process.env.port || 4000;
// let port = 3500
app.listen(port,()=>{
console.log(`server running on port ${port}`)
})