 const Usermodel = require("../models/Usermodel")
 const {hashPassword} = require("../helpers/authHelper")
 const registerController =async (req, res)=>{
  try {
    const {name,email,password,phone,address}=req.body;
    if(!name){
        res.send({error:"name is required"})
    }
    if(!email){
        res.send({message:"email is required"})
    }
    if(!password){
        res.send({message:"password is required"})
    }
    if(!phone){
        res.send({message:"phone is required"})
    }
    if(!address){
        res.send({message:"address is required"})
    }
    //check user
    const existinguser=await Usermodel.findOne({email});
    //existing user
    if(existinguser){
        res.status(200).send({
            success:false,
            message:"already a user"
        });
    }
    //register user
    const hashedPassword = await hashPassword(password);
    //save
    const user=await new Usermodel({name,email,phone,address,password:hashedPassword}).save();
    res.status(201).send({
        success:true,
        message:"User register successfully",
        user
    })

  } catch (error) {
    console.log(error)
    res.status(500).send({
        success:false,
        message:"Error in Registration",
        error
    })
  }
}
module.exports = registerController