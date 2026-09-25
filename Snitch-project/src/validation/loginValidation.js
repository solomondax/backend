import { body, validationResult } from "express-validator";

const loginValidation = [
  body("email")
    .exists()
    .withMessage("Email Required")
    .bail()
    .isEmail()
    .withMessage("Invalid Email")
    .bail()
    .trim(),
  body("password")
    .exists()
    .withMessage("Password Required")
    .bail()
    .isString()
    .withMessage("password must be a String")
    .bail()
    .isLength({ min: 6 })
    .withMessage("password must be 6 char")
    .trim(),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        message: "invalid Creadentials",
        errors: errors.array(),
      });
    }
    next();
  },
];

export default loginValidation;
