const mongoose = require('mongoose');

// Industry Purchase Structure
const industrypSchema = new mongoose.Schema({
    fooddetails : {
        type : String,
        required : true
    },
    companyd : {
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
const IndustryP = new mongoose.model("Industry Purchase", industrypSchema);

module.exports = IndustryP;