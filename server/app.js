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
const Message = require('./models/msgSchema');

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

// Logout Page

// Run Server
app.listen(port, ()=>{
    console.log("Server is Listening")
})


// 