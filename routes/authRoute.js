const express = require("express");
const router=express.Router();
const registerController = require("../controllers/authController")
const loginController = require("../controllers/loginController");
const testController =require("../controllers/testController");
const requireSignIn=require("../middleware/authMiddleware");
const IsAdmin= require("../middleware/isAdmin")
//routing || method:POST||register

router.post("/register",registerController);
//login controller //post 


router.post('/login',loginController);


//test route
router.get('/test',requireSignIn,IsAdmin,testController);


module.exports= router