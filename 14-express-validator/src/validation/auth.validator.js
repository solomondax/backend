import { body, validationResult } from "express-validator";

const validator = [
  body("email")
    .exists().withMessage("Email is Required").bail()
    .isEmail()
    .withMessage("Invalid Email Address"),
  body("phone")
    .exists()
    .withMessage("Phone Number Required").bail()
    .isMobilePhone().withMessage("invalid Mobile Number"),
  body("password")
    .exists()
    .withMessage("password is required").bail()
    .trim()
    .isLength({ min: 6 })
    .withMessage("Password atleast 6 characters"),
  (req, res,next) => {
    let errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        message: "Invalid Request",
        errors: errors.array(),
      });
    }
    next();
  },
];
export default validator;

