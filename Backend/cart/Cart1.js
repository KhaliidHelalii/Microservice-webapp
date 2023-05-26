const mongoose = require("mongoose");
const dotEnv  = require("dotenv");
const express = require("express");
const app = express();
dotEnv.config();
var conn  = mongoose.createConnection(process.env.PRODUCT_MONGO_URL,console.log("cart DB DONE"));
// db.createCollection("cart")
  const CartSchema =  mongoose.Schema(
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
    },
    { timestamps: true }
);

module.exports = conn.model("Cart", CartSchema);
