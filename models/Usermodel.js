const mongoose = require("mongoose");
const { Schema } = mongoose;
const UserSchema= new Schema({
    name:{
        type:String,
        required:true,
        trim:true //remove whitespace
    },
    email:{ 
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    answer:{
        type:String,
        required:true
    },
    role:{
        type:Number,
        default:0
    }
},{timestamps:true})
module.exports = mongoose.model("eusers",UserSchema)