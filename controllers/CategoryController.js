 const CategoryModel= require('../models/CategoryModel');
const slugify =require('slugify');
const createCategoryController = async (req,res) => {
 try {
    const {name}=req.body;
    if(!name){
        return res.status(401).send({
            message:"name is required"
        })
    }
    //check existingcategory
    const existingcategory = await CategoryModel.findOne({name});
    if(existingcategory){
        return res.status(200).send({
            message:"category already exist"
        })
    }
    //create new one
    const category =  await new CategoryModel({name,slug:slugify(name)}).save();
    res.status(201).send({
        success:true,
        message:"new category created",
        category
    })
 } catch (error) {
  console.log(error);
  res.status(500).send({
    success:false,
    error,
    message:"error in category"
  })  
 }
}


const updateCategoryController= async(req,res)=>{
try {
    const {name}=req.body;
    const {id}=req.params;
    const categoryUpdate= await CategoryModel.findByIdAndUpdate(id,{name,slug:slugify(name)},{new:true})
    res.status(200).send({
        success:true,
        message:"Category updated successfully",
        categoryUpdate
    })
} catch (error) {
    console.log(error);
    res.status(500).send({
        success:false,
        error,
        message:"Error in update category"
    })
}
}


const CategoryController = async (req,res)=>{
    try {
        const category = await CategoryModel.find({});
        res.status(200).send({
            success:true,
            message:"successfully get all category",
            category,
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
        success:false,
        error,
        message:"Error in getting all category"
    })
    }
}
const SingleCategoryController =async (req,res)=>{
    try {
        const {slug}=req.params
        const singlecategory = await CategoryModel.findOne({slug});
        res.status(200).send({
            success:true,
            message:"successfully get single category",
            singlecategory
        })
    } catch (error) {
        console.log(error);
    res.status(500).send({
        success:false,
        error,
        message:"Error while getting single category"
    })
    }
}

const DeletecategoryController=async (req,res)=>{
    try {
        const {id}=req.params
        await CategoryModel.findByIdAndDelete(id);
        res.status(200).send({
            success:true,
            message:"successfully deleted category"
            
        })
    } catch (error) {
        console.log(error);
    res.status(500).send({
        success:false,
        error,
        message:"Error while deleting  category"
    })
    }
}
module.exports= {createCategoryController,updateCategoryController,CategoryController,SingleCategoryController,DeletecategoryController}