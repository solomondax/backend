// import vModel from './models/user.models.js'

const register = (req, res) => {
  const { name, email, phone } = req.body;

  let errors = [];

  if (!email) {
    errors.push({
      feild: "email",
      message: "Email is Required",
    });
  }

  let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailRegex.test(email)) {
    errors.push({
      feild: "email",
      message: "Invalid email",
    });
  }
  if (!phone) {
    errors.push({
      feild: "phone",
      message: "Phone number is Required",
    });
  }
  const phoneRegex = /^(\+?91[\s-]?)?[6-9]\d{9}$/;
  if (phoneRegex.test(phone)) {
    errors.push({
      feild: "phone",
      message: "Invalid phone number",
    });
  }
};

export default register;
