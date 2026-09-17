import express from 'express'


let app = express()
app.use(express.json())

app.get('/',(req,res)=>{
  res.send("Hello back end")
})

export default app;