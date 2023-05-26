const mongoose = require("mongoose");
const dotEnv  = require("dotenv");
const express = require("express");
const app = express();
dotEnv.config();


var conn  = mongoose.createConnection(process.env.PRODUCT_MONGO_URL,console.log("prod DB DONE"));

const ProductSchema =  mongoose.Schema(
  {
    title: { type: String, required: true, unique: true },
    desc: { type: String, required: true, },
    img: { type: String, required: true },
    categories: { type: Array },
    size: { type: String },
    color: { type: String },
    price: { type: Number, required: true },
    //inStock:{type:Boolean,default:true},
    
  },
  { timestamps: true }
);

module.exports = conn.model("Product", ProductSchema);


// mongoose
//     .connect(process.env.PRODUCT_MONGO_URL)
//     .then(() => console.log("DBConnection product Successfull!"))
//     .catch((err) =>{
//         console.log(err);  //DB CONNECT>>.ENV
//     });

// const ProductSchema =  mongoose.Schema(
//   {
//     title: { type: String, required: true, unique: true },
//     desc: { type: String, required: true, },
//     img: { type: String, required: true },
//     categories: { type: Array },
//     size: { type: String },
//     color: { type: String },
//     price: { type: Number, required: true },
//     //inStock:{type:Boolean,default:true},
    
//   },
//   { timestamps: true }
// );


// // app.listen(process.env.PORT || 7001, () =>{
// //     console.log("Backend server is running") //USING EXISTING PORT OR 5000 BY DEFAULT
// // });
// module.exports = mongoose.model("Product", ProductSchema);
