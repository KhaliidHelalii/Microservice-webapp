const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoute = require("./user/user");
const authRoute = require("./API-gateway/auth");
const productRoute = require("./product/product");
const cartRoute = require("./cart/cart");
const orderRoute = require("./order/order");
const jwt = require("jsonwebtoken");
const cors = require("cors");

// dotenv.config();
// mongoose
//     .connect(process.env.USER_MONGO_URL)
//     .then(() => console.log("DBConnection Successfull!"))
//     .catch((err) =>{
//         console.log(err);  //DB CONNECT>>.ENV
//     });
app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
app.use("/api/carts", cartRoute);
app.use("/api/orders", orderRoute); //GIVING app point an api route

app.listen(process.env.PORT || 7000, () => {
  console.log("Backend server is running index"); //USING EXISTING PORT OR 5000 BY DEFAULT
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/post", (req, res) => {
  console.log("Connected to React");
  res.redirect("/");
});

// MONGO_URL = mongodb+srv://khaliidhelalii:Khaliid4431@cluster0.pevoxht.mongodb.net/shop?retryWrites=true&w=majority
