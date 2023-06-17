const Usermodel = require("../models/Usermodel")
const JWT= require("jsonwebtoken")
const {comparedPassword} = require("../helpers/authHelper")
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
                address:user.address,
                role:user.role
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
    module.exports=loginController