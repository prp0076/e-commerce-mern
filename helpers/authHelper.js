const bcrypt = require("bcrypt");
const hashPassword = async(password)=>{
    try {
        const SaltRound=10;
        const hashedPassword = await bcrypt.hash(password,SaltRound);
        return hashedPassword;
    } catch (error) {
        console.log(error) 
    }
}
const  comparedPassword =(password,hashedPassword)=>{
    return bcrypt.compare(password,hashedPassword);
}

module.exports={hashPassword,comparedPassword}