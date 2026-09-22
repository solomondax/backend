
  let errors = [];

  if (!email) {
    errors.push({
      field: "email",
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
      field: "phone",
      message: "Phone number is Required",
    });
  }
  const phoneRegex = /^(\+?91[\s-]?)?[6-9]\d{9}$/;
  if (!phoneRegex.test(phone)) {
    errors.push({
      field: "phone",
      message: "Invalid phone number",
    });
  }

  if(!password && !password.trim()){
      errors.push({
        field :"password",
        message: "password required"
      })
  }

  if(password.trim() < 6){
    errors.push({
      field :"password",
      message:"password field must have min 6 character"
    })
  }
  if(errors.length>0){
    return res.status(400).json({
       message : "invalid request",
       errors
    })
  }