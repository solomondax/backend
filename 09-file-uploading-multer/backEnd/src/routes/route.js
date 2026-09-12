let express = require("express")
let useCon = require("../controller/user.controller")
let upload = require("../config/multer")

let route = express.Router();

route.post('/create', upload.array("filePic",7), useCon)

module.exports = route