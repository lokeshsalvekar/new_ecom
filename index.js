import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./db/config.js";
import cors from "cors";
import path from 'path';
import User from "./db/Users.js";
// import dotenv from 'dotenv';
import { response } from 'express';

// const express=require('express');
// const mongoose=require('mongoose');


//configure env
dotenv.config();

// //databse config
connectDB();

//rest object
const app = express();

// //middelwares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
// app.use(express.static(path.join(__dirname,'./client/build')))

app.post("/register",async(req,res)=>{
    let user=new User(req.body);
    let result= await user.save();
    result=result.toObject();
    delete result.password;
    res.send(result)
})

// app.get("/",(req,res)=>{
    // res.send("app is working")});
    
    app.post('/login', async (req,res)=>{
        console.log(req.body)
        if(req.body.password && req.body.email){
            let user= await User.findOne(req.body).select("-password");
            if(user){
                res.send(user)
            }
            else{
                res.send({result:"No user found"})
            }
        }
        else{
            res.send({result:"No user found"})
        }
    })
    
//rest api
app.use('*',function(req,res){
  res.sendFile(path.join(__dirname,'./client/build/index.html'))
});

//PORT
const PORT = process.env.PORT || 8080;

//run listen
app.listen(PORT, () => {
  console.log(
    `Server Running on ${process.env.DEV_MODE} mode on port ${PORT}`
      
  );
});
   




        

// // // // // // 
// Mongoose Setup

// mongoose.connect(process.env.MONGO_URL, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// }).then(() => {
//     app.listen(PORT, () => console.log(`Server port : ${PORT}`));

// }).catch((error) => console.log(`${error} did not connected`));


