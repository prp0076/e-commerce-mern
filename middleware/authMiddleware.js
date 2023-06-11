const JWT=require("jsonwebtoken");


//protected routes token base
const requireSignIn = async(req,res,next)=>{
try {
const decode=JWT.verify(req.headers.authorization,process.env.JWT_SECRET);
    next();
} catch (error) {
    console.log(error)
}
}
module.exports=requireSignIn;