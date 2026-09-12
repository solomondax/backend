const  useCon = (req,res)=>{
  console.log(req.body);
  console.log(req.files);

  res.json({
    message: "User daxadxa created successfully"
  });
  
}

module.exports = useCon

// try{

  //   res.status(200).json({
  //     message:"file Uploaded successfully"
  //   })

  // }catch(error){

  // }