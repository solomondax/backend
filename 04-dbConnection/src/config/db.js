let mongoose =  require("mongoose")

const connectionDb = async ()=>{
  try{
       await mongoose.connect("mongodb+srv://solodax46_db_user:Solodax43@solodaxcluster.m6hqvem.mongodb.net/")
       console.log("database connected solo")

  }catch(error){
    console.log("db errors here",error)

  }
   
}

module.exports = connectionDb

// mongodb+srv://solodax46_db_user:Solodax43@solodaxcluster.m6hqvem.mongodb.net/
  //  mongodb+srv://solodax46_db_user:Solodax43@solodaxcluster.m6hqvem.mongodb.net/