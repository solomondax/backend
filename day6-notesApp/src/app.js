
let express = require('express')
let connectDB = require('./config/db')
let NotesModel = require("./models/notes.model")
let RouterModel = require('./routes/routes.model')

let app = express()
connectDB()
app.use(express.json())

// app.get('/', (req,res)=>{
//   res.send("okay got it")
// })


app.use('/note',RouterModel)
module.exports = app