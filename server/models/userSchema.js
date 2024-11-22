const {Schema, model } = require ('mongoose')
const bcrypt = require('bcryptjs')

const userSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

userSchema.pre("save", async function (next) {
    const user = this;
    try {
        if (user.isModified('password')) {
            user.password = await bcrypt.hash(user.password, 8);
        }
        next(); // Proceed to the next middleware or save operation
    } catch (error) {
        console.log("error in hashing password")
        next(error); // Pass the error to the next middleware or error handler
    }
});



const User = model('User', userSchema);
module.exports = User;