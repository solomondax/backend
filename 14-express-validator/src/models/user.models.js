import mongoose from "mongoose";

const validModel = new mongoose.Schema({
  password: {
    type: String,
    requered: true,
  },

  email: {
    type: String,
    requered: true,
  },

  phone: {
    type: String,
    requered: true,
  },
});


const  vModel =  mongoose.model("validation",validModel)
export default vModel;