// Import All Dependencies
const dotenv = require('dotenv');
const express = require('express');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');

const app = express();

// Configure ENV File & Require Connection File
dotenv.config({path : './config.env'});
require('./db/conn');
const port = process.env.PORT;

// Require Model
const Users = require('./models/userSchema');
const Admins = require('./models/adminSchema');
const Message = require('./models/msgSchema');
const Donation = require('./models/donationSchema');
const FoodReq = require('./models/foodreqSchema');
const IndustryP = require('./models/industrypSchema');
const authenticate = require('./middleware/authenticate');

//These methods are used to get data and cookies from frontend
app.use(express.json());
app.use(express.urlencoded({extended : false}));
app.use(cookieParser());

app.get('/', (req, res) =>{
    res.send("Hello World");
})

// Sign Up
app.post('/signup', async (req, res)=>{
    try{
        //Get body or data
        const fullname = req.body.fullname;
        const email = req.body.email;
        const password = req.body.password;
        const address = req.body.address;
        const contactnum = req.body.contactnum;

        const createUser = new Users({
            fullname : fullname,
            email : email,
            password : password,
            address : address,
            contactnum : contactnum
        });

        // Save method is used to create  user 
        // But before saving , password will hash
        // After hashing it will be saved to DB
        const created = await createUser.save();
        console.log(created);
        res.status(200).send("Sign Up Complete");
        
    } catch(error){
        res.status(400).send(error)
    }
})

//Login User
app.post('/login', async (req, res)=>{
    try{
        const email = req.body.email;
        const password = req.body.password;

        // Find user if exist
        const user = await Users.findOne({email : email});
        if(user){
            // Verify Password
            const isMatch = await bcryptjs.compare(password, user.password);

            if(isMatch){
                // Generate Token which is defined in user schema
                const token = await user.generateToken();
                res.cookie("jwt", token, {
                    // Expires Token in 24 hours
                    expires : new Date(Date.now() + 86400000),
                    httpOnly : true
                })
                res.status(200).send("Login Successful")
            }else{
                res.status(400).send("Invalid Credentials");
            }
        }else{
            res.status(400).send("Invalid Credentials");
        }

    } catch(error){
        res.status(400).send(error);
    }
})

// Admin Signup
app.post('/adminsignup', async (req, res)=>{
    try{
        //Get body or data
        const fullname = req.body.fullname;
        const email = req.body.email;
        const password = req.body.password;
        const address = req.body.address;
        const contactnum = req.body.contactnum;

        const createAdmin = new Admins({
            fullname : fullname,
            email : email,
            password : password,
            address : address,
            contactnum : contactnum
        });

        const created = await createAdmin.save();
        console.log(created);
        res.status(200).send("Sign Up Complete");
        
    } catch(error){
        res.status(400).send(error)
    }
})


// Admin Login
app.post('/adminlogin', async (req, res)=>{
    try{
        const email = req.body.email;
        const password = req.body.password;

        // Find admin if exist
        const admin = await Admins.findOne({email : email});
        if(admin){
            // Verify Password
            const isMatch = await bcryptjs.compare(password, admin.password);

            if(isMatch){
                // Generate Token which is defined in admin schema
                const token = await admin.generateToken();
                res.cookie("jwt", token, {
                    // Expires Token in 24 hours
                    expires : new Date(Date.now() + 86400000),
                    httpOnly : true
                })
                res.status(200).send("Login Successful")
            }else{
                res.status(400).send("Invalid Credentials");
            }
        }else{
            res.status(400).send("Invalid Credentials");
        }

    } catch(error){
        res.status(400).send(error);
    }
})

// Message
app.post('/message', async (req, res)=>{
    try{
        //Get body or data
        const name = req.body.name;
        const email = req.body.email;
        const message = req.body.message;

        const sendMsg = new Message({
            name : name,
            email : email,
            message : message
        });

        const created = await sendMsg.save();
        console.log(created);
        res.status(200).send("Message Sent");
        
    } catch(error){
        res.status(400).send(error)
    }
})


// Food Donator
app.post('/donations', async (req, res)=>{
    try{
        //Get body or data
        const fooddetails = req.body.fooddetails;
        const price = req.body.price;
        const location = req.body.location;
        const contact = req.body.location;

        const sendDonation = new Donation({
            fooddetails : fooddetails,
            price : price,
            location : location,
            contact : contact
        });

        const created = await sendDonation.save();
        console.log(created);
        res.status(200).send("Donation Request Sent");
        
    } catch(error){
        res.status(400).send(error)
    }
})

// Food Requests
app.post('/foodrequests', async (req, res)=>{
    try{
        //Get body or data
        const fooddetails = req.body.fooddetails;
        const price = req.body.price;
        const location = req.body.location;
        const contact = req.body.contact;

        const sendFoodReq = new FoodReq({
            fooddetails : fooddetails,
            price : price,
            location : location,
            contact : contact
        });

        const created = await sendFoodReq.save();
        console.log(created);
        res.status(200).send("Food Request Sent");
        
    } catch(error){
        res.status(400).send(error)
    }
})

// Industry Purchase
app.post('/industryp', async (req, res)=>{
    try{
        //Get body or data
        const fooddetails = req.body.fooddetails;
        const companyd = req.body.companyd;
        const location = req.body.location;
        const contact = req.body.contact;

        const sendIndustryP = new IndustryP({
            fooddetails : fooddetails,
            companyd : companyd,
            location : location,
            contact : contact
        });

        const created = await sendIndustryP.save();
        console.log(created);
        res.status(200).send("Industry Purchase Request Sent");
        
    } catch(error){
        res.status(400).send(error)
    }
})


// Logout Page
app.get('/logout', (req, res)=>{
    res.clearCookie("jwt", {path : '/'})
    res.status(200).send("Logged Out")
})

// Authentication
app.get('/auth', authenticate, (req, res)=>{

})

// Run Server
app.listen(port, ()=>{
    console.log("Server is Listening")
})
