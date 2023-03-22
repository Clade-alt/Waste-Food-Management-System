const mongoose = require('mongoose');

// Food Request Structure
const foodreqSchema = new mongoose.Schema({
    fooddetails : {
        type : String,
        required : true
    },
    price : {
        type : String,
        required : true
    },
    location : {
        type : String,
        required : true
    },
    contact : {
        type : String,
        required : true
    }
})

// Create Model
const FoodReq = new mongoose.model("Food Requests", foodreqSchema);

module.exports = FoodReq;