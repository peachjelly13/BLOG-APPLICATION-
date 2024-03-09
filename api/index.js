const express = require('express');
const app = express();
const mongoose = require('mongoose')
const cors = require('cors')
app.use(cors());
app.use(express.json());
const User = require('./models/User')
require('dotenv').config(); // Load environment variables from .env file


//post is used to send data to the server to create/update a resource

mongoose.connect(process.env.MONGO_URI)
app.post('/register', async (req,res)=>{
    const {username,password} = req.body;
    const UserDoc = await User.create({username,password});
    res.json(UserDoc);
})
app.listen(5000);
