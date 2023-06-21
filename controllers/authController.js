 const Usermodel = require("../models/Usermodel")
 const JWT= require("jsonwebtoken")
 const {hashPassword} = require("../helpers/authHelper")
 const orderModel =require("../models/OrderModel")
 const registerController =async (req, res)=>{
  try {
    const {name,email,password,phone,address,answer}=req.body;
    if(!name){
        res.send({message:"name is required"})
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
    if(!answer){
        res.send({message:"answer is required"})
    }
    //check user
    const existinguser=await Usermodel.findOne({email});
    //existing user
    if(existinguser){
        res.status(200).send({
            success:false,
            message:"Already Register Please Login"
        });
    }
    //register user
    const hashedPassword = await hashPassword(password);
    //save
    const user=await new Usermodel({name,email,phone,address,password:hashedPassword,answer}).save();
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


//update profile controller
const updateProfileController = async (req, res) => {
    try {
      const { name, email, password, address, phone } = req.body;
      const user = await Usermodel.findById(req.user._id);
      //password
      if (password && password.length < 6) {
        return res.json({ error: "Passsword is required and 6 character long" });
      }
      const hashedPassword = password ? await hashPassword(password) : undefined;
      const updatedUser = await Usermodel.findByIdAndUpdate(
        req.user._id,
        {
          name: name || user.name,
          password: hashedPassword || user.password,
          phone: phone || user.phone,
          address: address || user.address,
        },
        { new: true }
      );
      res.status(200).send({
        success: true,
        message: "Profile Updated SUccessfully",
        updatedUser,
      });
    } catch (error) {
      console.log(error);
      res.status(400).send({
        success: false,
        message: "Error WHile Update profile",
        error,
      });
    }
  };
const getOrdersController = async (req, res) => {
  try {
    const orders = await orderModel
      .find({ buyer: req.user._id })
      .populate("products", "-photo")
      .populate("buyer", "name");
    res.json(orders);
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error WHile Geting Orders",
      error,
    });
  }
};
//orders
const getAllOrdersController = async (req, res) => {
  try {
    const orders = await orderModel
      .find({})
      .populate("products", "-photo")
      .populate("buyer", "name")
      .sort({ createdAt: "-1" });
    res.json(orders);
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error WHile Geting Orders",
      error,
    });
  }
};

//order status
const orderStatusController = async (req, res) => {
  try {
    const { orderId } = req.params;
    const { status } = req.body;
    const orders = await orderModel.findByIdAndUpdate(
      orderId,
      { status },
      { new: true }
    );
    res.json(orders);
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error While Updateing Order",
      error,
    });
  }
};
module.exports = {registerController,updateProfileController,getAllOrdersController,getOrdersController,orderStatusController}