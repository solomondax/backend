import express from 'express'
import route from '../route/user.route.js'
import cookieParser from "cookie-parser";



let app = express()
app.use(express.json())
app.use(cookieParser());

app.use("/api/auth",route)

export default app;