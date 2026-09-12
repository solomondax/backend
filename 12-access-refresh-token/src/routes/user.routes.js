import {Router} from 'express'
import {registerController,getRequestFunction,newRefreshTokenGeneratingFunc } from '../controller/user.controller.js'

let route = Router()
route.post('/register',registerController)
route.get('/me', getRequestFunction)
route.post('/refresh', newRefreshTokenGeneratingFunc )


export default route;