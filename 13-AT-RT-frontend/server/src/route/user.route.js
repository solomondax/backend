import express  from 'express'
import {registerContoller } from '../controller/user.controller.js'
let route = express.Router()


route.post('/register', registerContoller)
// route.get('/dax', getController)
export default route