const  express =require("express");
const {
  createProductController,
  deleteProductController,
  getProductController,
  getSingleProductController,
  productPhotoController,
  updateProductController,
  productFilterController,
  productCountController,
  productListController,
  searchProductController
} =require("../controllers/productController");
const requireSignIn  =require("../middleware/authMiddleware.js");
const isAdmin = require("../middleware/isAdmin.js")
const formidable =require("express-formidable");

const router = express.Router();

//routes
router.post(
  "/create-product",
  requireSignIn,
  isAdmin,
  formidable(),
  createProductController
);
//routes
router.put(
  "/update-product/:pid",
  requireSignIn,
  isAdmin,
  formidable(),
  updateProductController
);

//get products
router.get("/get-product", getProductController);

//single product
router.get("/get-product/:slug", getSingleProductController);

//get photo
router.get("/product-photo/:pid", productPhotoController);

//delete rproduct
router.delete("/product/:pid", deleteProductController);

//filter product
router.post('/product-filters',productFilterController);

//product count
router.get('/product-count',productCountController)

//product per page
router.get('/product-list/:page',productListController)

//search bar
router.get('/search',searchProductController);
module.exports= router;