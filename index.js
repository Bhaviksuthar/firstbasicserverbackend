// console.log("Hey Node Runs");
require('dotenv').config()
const express = require('express');
const app = express();
const path = require('path');
const port = 2500;

app.use(express.static(path.join(__dirname, 'public')));

app.get("/",(req,res)=>{
    res.send("Hello Server Starts Running");
});

app.get("/home",(req,res)=>{
    // res.send("Welcom To Home Route");
    res.sendFile(path.join(__dirname,'public','index1.html'));
});

app.listen(process.env.PORT,()=>{
    console.log("Server Starts ON PORT "+process.env.PORT +"....");
});