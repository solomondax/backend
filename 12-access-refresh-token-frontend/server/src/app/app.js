import express from 'express'
import authRoute from '../routes/user.routes.js'
// import connectDB from "../config/db.js"
import cookieParser from "cookie-parser";

let app = express()
app.use(cookieParser());

app.use(express.json());
// connectDB()

app.use("/api/auth",authRoute)





export default app