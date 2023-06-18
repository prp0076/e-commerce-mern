const  express =require("express");
const requireSignin= require("../middleware/authMiddleware") 
const isAdmin =require("../middleware/isAdmin") 
const {createCategoryController,updateCategoryController,CategoryController,SingleCategoryController,DeletecategoryController}= require('../controllers/CategoryController') ;
const router= express.Router();

//create-category
router.post('/create-category',requireSignin,isAdmin,createCategoryController)

//update-category
router.put('/update-category/:id',requireSignin,isAdmin,updateCategoryController);

//get all category
router.get('/get-allcategory',CategoryController)


//single category
router.get('/single-category/:slug',SingleCategoryController)

//delete category
router.delete('/delete-category/:id',requireSignin,isAdmin,DeletecategoryController)

module.exports= router  