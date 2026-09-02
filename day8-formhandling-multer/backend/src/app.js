
// let cors = require("cors")
let express = require('express')
// let connectDB = require('./config/db')
// let NotesModel = require("./models/notes.model")
let RouterModel = require('./route/router')
let app = express()
// connectDB()
app.use(express.json())
// app.use(cors({
//   origin: "http://localhost:5173"
// }))
app.use('/file',RouterModel)
module.exports = app



// app.get('/', (req,res)=>{
//   res.send("okay got it")
// })
