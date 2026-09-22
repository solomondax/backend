import vModel from '../models/user.models.js'



const register = async (req, res) => {
  const { password, email, phone } = req.body;

  const user =  await vModel.crate({
    email,
    phone,
    password
  })

  return res.status(201).json({
    message:"user Register successfully",
    data:{
      email,
      phone,
      id:user._id
    }
  })
  
};

export default register;
