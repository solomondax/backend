import jwt from "jsonwebtoken";
import UserModel from "../model/user.model.js"; 
import dotenv from "dotenv";
dotenv.config();    

const authenticate = async(req, res, next) => {
    // Implementation for authentication logic
    const token = req.headers.authorization;

    if (!token) {
        return res.status(401).json({ message: "Authorization token is missing" });
    }

    let data = jwt.verify(token, process.env.JWT_SECRET)                   

    let userOne = await UserModel.findById(data.id)

    if (!userOne) {
        return res.status(401).json({ message: "Invalid token" });
    } 

    req.daxUser = userOne;
    next();
};

export default authenticate;