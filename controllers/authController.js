 const Usermodel=require("../models/Usermodel")
 const hashPassword=require("../helpers/authHelper")
 const registerController =async (req,res)=>{
  try {
    const {name,email,password,phone,address}=req.body;
    if(!name){
        res.send({error:"name is required"})
    }
    if(!email){
        res.send({error:"email is required"})
    }
    if(!password){
        res.send({error:"password is required"})
    }
    if(!phone){
        res.send({error:"phone is required"})
    }
    if(!address){
        res.send({error:"address is required"})
    }
    //check user
    const existinguser=Usermodel.findOne({email});
    //existing user
    if(existinguser){
        res.status(200).send({
            success:true,
            message:"already a user"
        })
    }
    //register user
    const hashedpassword =await hashPassword(password);
    //save
    const user= new Usermodel({name,email,phone,address,password:hashedpassword}).save();
    res.status(201).send({
        success:true,
        message:"User register successfully",
        user
    })

  } catch (error) {
    console.log(error)
    res.status(500).send({
        success:false,
        message:"Error in registration",
        error
    })
  }
}
module.exports = registerController