const express = require("express");
const router=express.Router();
const {registerController,updateProfileController} = require("../controllers/authController")
const loginController = require("../controllers/loginController");
const testController =require("../controllers/testController");
const requireSignIn=require("../middleware/authMiddleware");
const IsAdmin= require("../middleware/isAdmin")
const forgotPasswordController=require('../controllers/ForgotPasswordController')
const {getAllOrdersController,getOrdersController,orderStatusController}=require("../controllers/authController")
//routing || method:POST||register

router.post("/register",registerController);
//login controller //post 


router.post('/login',loginController);


//test route
router.get('/test',requireSignIn,IsAdmin,testController);

//protected route 
router.get('/user-auth',requireSignIn,(req,res)=>{
   res.status(200).send({ ok:true}); 
})
//protected route fro admin
router.get('/admin-auth',requireSignIn,IsAdmin,(req,res)=>{
   res.status(200).send({ ok:true}); 
})

//forgot password
router.post('/forgot-password',forgotPasswordController);
//update profile
router.put("/profile", requireSignIn, updateProfileController);


//orders
router.get("/orders", requireSignIn, getOrdersController);

//all orders
router.get("/all-orders", requireSignIn, IsAdmin, getAllOrdersController);

// order status update
router.put(
  "/order-status/:orderId",
  requireSignIn,
  IsAdmin,
  orderStatusController
);
module.exports= router