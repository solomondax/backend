let mongoose = require("mongoose");


let  notesSchema = new mongoose.Schema({
      title:{
        type:String,
        required:true
      },
      description:{
        type:String,
        required:true,
        minLength:[10,"Mininum 20  charcters are required"]
      }
})

const NotesModel = mongoose.model("notess",notesSchema)
module.exports = NotesModel