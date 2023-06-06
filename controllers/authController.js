 const Usermodel = require("../models/Usermodel")
 const JWT= require("jsonwebtoken")
 const {hashPassword, comparedPassword} = require("../helpers/authHelper")
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


//login controller
const loginController =async(req,res)=>{
try {
    const {email,password}=req.body
    if(!email || !password){
        return res.status(404).send({
            success:false,
            message:'Invalid email or password'
        })
    }
    //check user for compare password
    const user = await Usermodel.findOne({email});
    if(!user){
        return res.status(404).send({
            success:false,
            message:'Email is not registered',
            error
        })
    }
    const match= await comparedPassword(password,user.password)
    if(!match){
        return res.status(200).send({
            success:false,
            message:'Invalid Password'
        })
    }

    //token
    const token= await JWT.sign({_id:user._id},process.env.JWT_SECRET,{expiresIn:'7d'});
    res.status(200).send({
        success:true,
        message:'login succefully',
        user:{
            name:user.name,
            email:user.email,
            phone:user.phone,
            address:user.address
        },
        token
    });
} catch (error) {
  console.log(error);
  res.status(500).send({
    success:false,
    message:'Error in login',
    error
  })    
}
}
module.exports = {registerController,loginController}