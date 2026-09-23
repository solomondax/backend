import express from "express";
import route from '../route/auth.route.js'
import cookieParser from "cookie-parser";
const app = express();
app.use(express.json());
app.use(cookieParser());

app.use('/auth',route)

export default app;
