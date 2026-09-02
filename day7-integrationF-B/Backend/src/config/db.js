let mongoose = require("mongoose")

let connectDB = async () =>{
  try{
    // console.log(process.env.mongoDb_uri)

    await mongoose.connect(process.env.mongoDb_uri)
    console.log("mangodb conneccting")

  }catch(error){

    console.log("while connecting the Db",error)
  }

}
module.exports = connectDB

