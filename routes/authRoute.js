const express = require("express");
const router=express.Router();
const registerController = require("../controllers/authController")
const loginController = require("../controllers/loginController");

//routing || method:POST||register

router.post("/register",registerController)

//login controller //post 


router.post('/login',loginController);
module.exports= router