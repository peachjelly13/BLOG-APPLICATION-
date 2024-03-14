const express = require('express');
const bcrypt = require('bcryptjs');
const app = express();
const mongoose = require('mongoose')
const cors = require('cors')
app.use(cors({credentials:true,origin:'http://localhost:3000'}));
app.use(express.json());
const User = require('./models/User')
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
app.use(cookieParser());
const secret = 'qwedfgtrzsdlypup';
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
app.post('/login',async (req,res)=>{
    const {username,password} = req.body;
    const userDoc = await User.findOne({username});
    const correct_password = bcrypt.compareSync(password,userDoc.password);
    if(correct_password){
        jwt.sign({username,id:userDoc._id},secret,{},(err,token)=>{
            if (err) throw err;
            res.cookie('token',token).json('ok');

        });

    }
    else{
        res.status(400).json('Wrong Credentials');
    }
})

app.get('/profile',(req,res)=>{
    const {token} = req.cookies;
    jwt.verify(token,secret,{},(err,info)=>{
        if(err) throw err;
        res.json(info);

    });

});
app.listen(5000);
