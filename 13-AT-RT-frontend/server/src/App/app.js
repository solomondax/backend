import express from 'express'
import route from '../route/user.route.js'


let app = express()
app.use(express.json())

app.use("/api/auth",route)

export default app;