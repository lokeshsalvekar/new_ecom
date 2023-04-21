// const mongoose=require('mongoose');

// const userSchema=new mongoose.Schema({
//     name:String,
//     email:String,
//     password:String

// });

// module.exports=mongoose.model("users",userSchema)


import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
       name:String,
       email:String,
       password:String

//     phone: {
//       type: String,
//       required: true,
//     },
//     address: {
//       type: String,
//       required: true,
//     },
//     answer: {
//       type: String,
//       required: true,
//     },
//     role: {
//       type: Number,
//       default: 0,
//     },
  },
//   { timestamps: true }
);

export default mongoose.model("users", userSchema);
