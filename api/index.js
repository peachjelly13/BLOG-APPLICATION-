const express = require('express');
const bcrypt = require('bcryptjs');
const app = express();
const mongoose = require('mongoose')
const cors = require('cors')
app.use(cors());
app.use(express.json());
const User = require('./models/User')
require('dotenv').config(); // Load environment variables from .env file
const salt = bcrypt.genSaltSync(10);



//post is used to send data to the server to create/update a resource

mongoose.connect(process.env.MONGO_URI)
app.post('/register', async (req,res)=>{
    const {username,password} = req.body;
    try{
    const UserDoc = await User.create({username,password:bcrypt.hashSync(password,salt),});
    res.json(UserDoc);
    }
    catch(error_message){
        console.log(error_message);
        res.status(400).json(error_message);

    }
})
app.listen(5000);
