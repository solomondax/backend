let mongoose = require("mongoose")

let noteSchema = new mongoose.Schema({
  title:{
    type:String,
    required: true
  },
  description:{
    type:String,
    minLength:10
  }
}) 


const noteModel = mongoose.model("dax",noteSchema)
module.exports = noteModel