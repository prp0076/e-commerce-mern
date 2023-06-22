const express= require('express');
const app = express();
const dotenv=require("dotenv")
const PORT=process.env.PORT || 8080;
const morgan = require("morgan");
const ConnectDb = require("./config/db");
const cors = require("cors");
const path = require("path")
//config
dotenv.config()
ConnectDb();

//middlewares
app.use(cors())
app.use(morgan("dev"))
app.use(express.json())
//deploy
app.use(express.static(path.join(__dirname,"./client/build")))
//routes
app.use("/api/v1/auth/",require("./routes/authRoute"));
app.use("/api/v1/category/",require('./routes/CategoryRoutes'));
app.use("/api/v1/product/",require('./routes/productRoutes'));

// app.get("/",(req,res)=>{
//     res.send({
//         message:"server is running on 8080"
//     })
// //  console.log(`server is running on ${PORT}`);
// })
app.use("*",function(req,res){
    res.sendFile(path.join(__dirname,"./client/build/index.html"));
})
app.listen(PORT,()=>{
    console.log(`server is runnig on ${PORT}`);
})
