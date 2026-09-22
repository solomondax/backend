import express from "express";
import register from "../controller/user.controller.js";
import validator from "../validation/auth.validator.js";
let route = express.Router();

route.post("/register", validator, register);

export default route;
