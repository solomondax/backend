let express = require("express")
const multer = require("multer")
//  local storage 
// let storage = multer.diskStorage({
//   destination:(req,file,cb)=>{
//     cb(null, "uploads/")
//   },
//   filename:(req,file,cb)=>{
//     console.log("file-related-name -",file)
//     cb(null,Date.now() + " - " + file.originalname)
//   }
// })

// memory storage 

let storage = multer.memoryStorage();

const upload = multer({storage})

module.exports = upload