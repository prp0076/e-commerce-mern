const  Usermodel =require('../models/Usermodel');
const {hashPassword} = require('../helpers/authHelper');

const ForgotPasswordController = async (req,res) => {
 try {
    // console.log(req,res)
    const {email,answer,newpassword}=req.body
    if(!email){
        res.status(400).send({message:"Email is required"});
    }
    if(!answer){
        res.status(400).send({message:"answer is required"});
    }
    if(!newpassword){
        res.status(400).send({message:"newPassword is required"});
    }


    //check email and answer
    const user = await Usermodel.findOne({email,answer})
    //validation
    if(!user){
        return res.status(404).send({
            success:false,
            message:'wrong email or answer'
        })
    }

    const hashedPassword = await hashPassword(newpassword)
    await Usermodel.findByIdAndUpdate(user._id,{password:hashedPassword})
    res.status(200).send({
        success:true,
        message:"Password Reset Successfully"
    })
 } catch (error) {
    console.log(error);
    res.status(500).send({
        success:false,
        message:"Something went wrong",
        error
    })
 }
}

module.exports = ForgotPasswordController