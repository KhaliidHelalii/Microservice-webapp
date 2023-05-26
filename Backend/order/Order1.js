const mongoose = require("mongoose");
const dotEnv  = require("dotenv");
const express = require("express");
const app = express();
dotEnv.config();

var conn  = mongoose.createConnection(process.env.ORDER_MONGO_URL,console.log("order DB DONE"));
// mongoose.connect('mongodb://127.0.0.1:27017/orders',
// {
//   useNewUrlParser: true,
//   useUnifiedTopology:true
// }).then(()=> {
//   console.log('DB connection sucessful');
// }).catch((error) => {
//   console.log('something wrong',error);
// })

// dotEnv.config();
// mongoose
//     .connect(process.env.ORDER_MONGO_URL)
//     .then(() => console.log("DBConnection Successfull!"))
//     .catch((err) =>{
//         console.log(err);  //DB CONNECT>>.ENV
//     });
const OrderSchema =  mongoose.Schema(
  {
    userId: { type: String, required: true },
    products: [
      {
        productId: {
          type: String,
        },
        quantity: {
          type: Number,
          default: 1,
        },
      },
    ],
    amount: { type: Number, required: true },
    address: { type: Object, required: true },
    status: { type: String, default: "pending" },
  },
  { timestamps: true }
);

// app.listen(process.env.PORT || 8003, () =>{
//   console.log("Backend server is running") //USING EXISTING PORT OR 5000 BY DEFAULT
// });
module.exports = conn.model("Order", OrderSchema);
