const mongoose = require("mongoose");
const dotEnv  = require("dotenv");
const express = require("express");
const app = express();
dotEnv.config();


var conn  = mongoose.createConnection(process.env.MONGO_URL, console.log("USER DB DONE"));

const UserSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isAdmin: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

module.exports = conn.model("User", UserSchema);



// mongoose.connect('mongodb://127.0.0.1:27017/users',
// {
//   useNewUrlParser: true,
//   useUnifiedTopology:true
// }).then(()=> {
//   console.log('DB connection sucessful');
// }).catch((error) => {
//   console.log('something wrong',error);
// })


// mongoose
//     .connect(process.env.MONGO_URL)
//     .then(() => console.log("DBConnection USER Successfull!"))
//     .catch((err) =>{
//         console.log(err);  //DB CONNECT>>.ENV
//     });

// app.listen(PORT, () => {
//   console.log(listening to port ${PORT1});
// })
// .on('error', (err) => {
//   console.log(err);
//   process.exit();
// })

// app.listen(process.env.PORT || 8000, () =>{
//     console.log("Backend server is running user1 8000") //USING EXISTING PORT OR 5000 BY DEFAULT
// });

// listen(port: {[]}, hostname: string, backlog: number, callback?: () => void): Server

