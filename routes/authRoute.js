const express = require("express");
const router=express.Router();
const registerController = require("../controllers/authController")

//routing || method:POST||register

router.post("/register",registerController)

//login controller
module.exports= router