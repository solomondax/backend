let express = require("express")
let upload = require('../config/file.multer')
let router = express.Router();

router.post('/',upload.single("daxImage"),(req,res)=>{

  try {
       let body  = req.body
       let file = req.file
       console.log("file-----name--->",file)
       console.log("iamfrom body" ,body)
        res.status(200).json({
        message: " image request uploaded succesfully",
      });
    } catch (error) {
      res.status(500).json({
        message: "internal server error", 
      });
      console.log(error);
    }
})
module.exports = router