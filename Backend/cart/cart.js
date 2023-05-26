const Cart = require("./Cart1");
const {verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin} = require("./verifyToken");

const router = require("express").Router();

// CREATE

router.post("/", verifyToken, async (req, res) => {
    const newCart = new Cart(req.body);

    try {
        const savedCart = await newCart.save();
        res.status(200).json(savedCart);
    } catch (err) {
        res.status(500).json(err);
    }
});

// UPDATE
router.put("/:id", verifyTokenAndAuthorization, async (req, res) => {
    try {
        const updatedCart = await Cart.findByIdAndUpdate(req.params.id, {
            $set: req.body
        }, {new: true});
        res.status(200).json(updatedCart);
    } catch (err) {
        res.status(500).json(err);
    }
});

// DELETE
router.delete("/:id", verifyTokenAndAuthorization, async (req, res) => {
    try {
        await Cart.findByIdAndDelete(req.params.id);
        res.status(200).json("Cart has been deleted...");
    } catch (err) {
        res.status(500).json(err);
    }
});

// GET USER CART
router.get("/find/:userId", verifyTokenAndAuthorization, async (req, res) => {
    try {
        const cart = await Cart.findOne({userId: req.params.userId});
        res.status(200).json(cart);
    } catch (err) {
        res.status(500).json(err);
    }
});

// //GET ALL

router.get("/", verifyTokenAndAdmin, async (req, res) => {
    try {
        const carts = await Cart.find();
        res.status(200).json(carts);
    } catch (err) {
        res.status(500).json(err);
    }
    // CHECKOUT
router.post("/checkout/:userId", verifyTokenAndAuthorization, async (req, res) => {
    try {
        // Find the cart for the specified user
        const cart = await Cart.findOne({userId: req.params.userId});

        // Calculate the total price of the items in the cart
        const totalPrice = cart.products.reduce((total, product) => {
            return total + (product.price * product.quantity);
        }, 0);

        // Update the cart to mark it as checked out and clear the products array
        cart.checkedOut = true;
        cart.products = [];
        await cart.save();

        res.status(200).json({message: "Checkout successful", totalPrice});
    } catch (err) {
        res.status(500).json(err);
    }
});
});

module.exports = router;


// const router = require("express").Router();
// const User = require("../user/User1");
// const CryptoJS = require("crypto-js");
// const jwt = require("jsonwebtoken");
// const mongoose = require("mongoose");

// //REGISTER
// router.post("/register", async (req, res) => {
// const newUser = new User({
//     username: req.body.username,
//     email: req.body.email,
//     password: CryptoJS.AES.encrypt(
//       req.body.password,
//       process.env.PASS_SEC
//     ).toString(),
// });

// try {
//     const savedUser = await newUser.save();
//     res.status(201).json(savedUser);
// } catch (err) {
//     res.status(500).json(err);
// }
// });

// //LOGIN

// router.post('/login', async (req, res) => {
//     try{
//         const user = await User.findOne(
//             {
//                 userName: req.body.user_name
//             }
//         );

//         !user && res.status(401).json("Wrong User Name");

//         const hashedPassword = CryptoJS.AES.decrypt(
//             user.password,
//             process.env.PASS_SEC
//         );


//         const originalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);

//         const inputPassword = req.body.password;

//         originalPassword != inputPassword &&
//             res.status(401).json("Wrong Password");

//         const accessToken = jwt.sign(
//         {
//             id: user._id,
//             isAdmin: user.isAdmin,
//         },
//         process.env.JWT_SEC,
//             {expiresIn:"3d"}
//         );

//         const { password, ...others } = user._doc;
//         res.status(200).json({...others, accessToken});

//     }catch(err){
//         res.status(500).json(err);
//     }

// });

// module.exports = router;
