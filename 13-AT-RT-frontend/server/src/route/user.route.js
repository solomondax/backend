import express  from 'express'
import {registerContoller, getController,refreshController } from '../controller/user.controller.js'
let route = express.Router()


route.post('/register', registerContoller)
route.get('/me', getController)
route.post('/refresh', refreshController)

export default route