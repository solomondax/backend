import express from 'express'
import validation from '../validation/validation.js'
import register from '../controller/auth.controller.js'

let  route = express.Router()

route.post('/register',validation,register)

export default route