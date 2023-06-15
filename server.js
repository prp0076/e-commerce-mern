const express= require('express');
const app = express();
const dotenv=require("dotenv")
const PORT=process.env.PORT || 8080;
const morgan = require("morgan");
const ConnectDb = require("./config/db");
const cors = require("cors");


//config
dotenv.config()
ConnectDb();

//middlewares
app.use(cors())
app.use(morgan("dev"))
app.use(express.json())

//routes
app.use("/api/v1/auth/",require("./routes/authRoute"));

app.get("/",(req,res)=>{
    res.send({
        message:"server is running on 8080"
    })
//  console.log(`server is running on ${PORT}`);
})
app.listen(PORT,()=>{
    console.log(`server is runnig on ${PORT}`);
})
