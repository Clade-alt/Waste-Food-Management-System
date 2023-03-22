const mongoose = require('mongoose');

// Donation Structure
const donationSchema = new mongoose.Schema({
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
const Donation = new mongoose.model("Donation", donationSchema);

module.exports = Donation;