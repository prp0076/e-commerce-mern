const userModel=require("../models/Usermodel")
const IsAdmin= async(req,res,next)=>{
    try {
        const user = await userModel.findById(req.user._id);
        if(user.role !== 1){
            return res.status(401).send({
                success:false,
                message:'UnAuthorized Access'
            })
        }
        else{
            next();
        }
    } catch (error) {
        console.log(error);
        res.status(404).send({
            success:false,
            error,
            message:'error in admin middleware'
        })
    }
}
module.exports=IsAdmin