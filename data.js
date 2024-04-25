const mongoose = require('mongoose');
const express = require('express');
const app = express();

mongoose.connect('mongodb+srv://root:root@cluster0.6jnklke.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
.then(()=> console.log('Connected to MongoDB'))
.catch(err=> console.error("Error connecting to MongoDB: ",err));


const userSchema = new mongoose.Schema({
    name: String,
    email:String,
    password: String
});

const User = mongoose.model('LoginDetails',userSchema);


module.exports = User;