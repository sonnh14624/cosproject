const express = require('express');
const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config();

const app=express();
const PORT = process.env.PORT;

// Middleware to parse JSON bodies
app.use(express.json());

// Basic route
app.get('/',(req, res)=>{
    res.send('Hello World');
});

