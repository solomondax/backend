import express from 'express'
import register from '../controller/user.controller.js'

let route = express.Router()

route.post('register',register)

export default route