let express = require("express")
let cors = require("cors")
let routerSet = require("./routes/route")
let app = express()

app.use(express.json())
app.use(cors({
  origin: "http://localhost:5173"
}))
 
app.use('/user', routerSet)


module.exports = app
