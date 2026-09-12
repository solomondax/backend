let express =  require("express")
let connectionDb = require('./config/db')
let dns = require("dns")
let app = express();
let noteModel = require('./model/noteSchema')
app.use(express.json())



dns.setServers([
  '1.1.1.1',
  '8.8.8.8'
])
connectionDb()



app.get('/',(req,res)=>{
  res.send("done")
})
app.post('/create', async (req,res)=>{
  let {title,description}=req.body
  let newNote = await noteModel.create({
    title,description,
  })
  // console.log(data)  
  res.send({
    success:true, 
    message:"note created scuccesfully",
    data:newNote,
  })
})

module.exports = app