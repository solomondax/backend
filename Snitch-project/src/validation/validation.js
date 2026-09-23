import { body, validationResult } from "express-validator";

const validation = [
 
  body("email")
    .exists()
    .withMessage("Email is Required")
    .bail()
    .isEmail()
    .withMessage("Invalid Email")
    .trim(),
  body("password")
    .exists()
    .withMessage("Email is Required")
    .bail()
    .isString()
    .withMessage("Password must be string")
    .isLength({ min: 6 })
    .withMessage("password atlest 6 char")
    .trim(),
  (req, res, next) => {
    let errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(401).json({
        message: "Invalid data",
        errors: errors.array(),
      });
    } 
    next();
  },
];

export default validation;


//  body("name")
//     .exist()
//     .withMessage("Email is Required")
//     .bail()
//     .isEmail()
//     .withMessage("Invalid Email")
//     .trim(),