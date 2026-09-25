import express from 'express'
import validation from '../validation/validation.js'
import {login, register} from '../controller/auth.controller.js'
import loginValidation from '../validation/loginValidation.js'

let  route = express.Router()

route.post('/register',validation,register)
route.post('/login',loginValidation,login)

export default route