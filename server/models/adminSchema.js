const mongoose = require('mongoose');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Admin Schema or Document Structure
const adminSchema = new mongoose.Schema({
    fullname : {
        type : String,
        required : true,
        unique : true
    },
    email : {
        type : String,
        required : true,
        unique : true,
    },
    password : {
        type : String,
        required : true
    },
    address : {
        type : String,
        required : true
    },
    contactnum : {
        type : String,
        required : true
    },
    tokens : [
        {
            token : {
                type : String,
                required : true
            }
        }
    ]
})

// Hashing Password to Secure
adminSchema.pre('save', async function(next){
    if(this.isModified('password')){
        this.password = bcryptjs.hashSync(this.password, 10);
    }
    next();
})

// Generate Tokens to Verify Admin
adminSchema.methods.generateToken = async function(){
    try{
        let generatedToken = jwt.sign({_id : this.id}, process.env.SECRET_KEY);
        this.tokens = this.tokens.concat({token : generatedToken});
        await this.save();
        return generatedToken;
    } catch (error){
        console.log(error)
    }
}

// Create Model
const Admins = new mongoose.model("ADMIN", adminSchema);

module.exports = Admins;