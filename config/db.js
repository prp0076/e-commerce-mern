const mongoose= require("mongoose");
const mongo_uri="mongodb+srv://prp313918:prp313918@e-commerce.xpg1j4v.mongodb.net/edata?retryWrites=true&w=majority"
const  ConnectDb = async()=>{
    try {
        const connect = mongoose.connect(mongo_uri)
        console.log("connnected")
    } catch (error) {
        console.log(error)
    }
}
module.exports = ConnectDb;