let express = require("express")
let app = express()

app.use(express.json())


let user = []

// get read
app.get('/',(req,res)=>{
  res.send(user)
})


// create
app.post('/create',(req,res)=>{
  let body = req.body 
  console.log(body)
  user.push(body)
  res.send(user)
})


// update 

app.put('/update/:id',(req,res)=>{
  let {id}  = req.params
  let {name}  = req.body
  console.log(id)

  let updatedData = user.map((val)=>{
    return val.id === id ? {...val,name}:val;
  })

  res.send(updatedData,"zfjhfjhfv")

})

// delete
app.delete('/delete/:id',(req,res)=>{
  let {id} = req.params
  // console.log(data)
  let filtered = user.filter((val)=>{
    return val.id !== id
  }
)
console.log(filtered)
user = filtered;

  res.send("delate successfully")
})


let port  = 3000;
app.listen(port,()=>{
  console.log(`Server running on ${port}`)
})