const User  = require('../models/userSchema');
const bcrypt = require('bcryptjs')

const signup = async (req,res) => {
    try{
        console.log(req.body);
        const {name,email,password} = req.body;
        const userExist = await User.findOne({email});
        if(userExist){
            return res.status(400).json({message:"User already exist"})
        }
        const userCreated = await User.create({
            name,email,password
        });
        res.status(200).json({
            msg:userCreated
        })
    }
    catch(error){
        res.status(500).json("Internal Server Error")
    }
};

module.exports = {signup};
