const Product = require("./Product1");
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("../API-gateway/verifyToken");
const router = require("express").Router();

// CREATE
router.post("/", verifyTokenAndAdmin, async (req, res) => {
  const newProduct = new Product(req.body);

  try {
    const savedProduct = await newProduct.save();
    res.status(200).json(savedProduct);
  } catch (err) {
    res.status(500).json(err);
  }
});

// UPDATE
router.put("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedProduct);
  } catch (err) {
    res.status(500).json(err);
  }
});

// DELETE
router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.status(200).json("Product has been deleted...");
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET PRODUCT BY ID
router.get("/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.status(200).json(product);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET ALL PRODUCTS
router.get("/", async (req, res) => {
  const qTitle = req.query.title;
  const qCategory = req.query.category;
  const qPriceMin = req.query.price_min;
  const qPriceMax = req.query.price_max;
  const query = {};

  if (qTitle) {
    query.title = { $regex: qTitle, $options: "i" };
  }
  if (qCategory) {
    query.category = qCategory;
  }

  if (qPriceMin && !isNaN(qPriceMin)) {
    query.price = { $gte: parseInt(qPriceMin) };
  } else if (qPriceMax && !isNaN(qPriceMax)) {
    query.price = { $lte: parseInt(qPriceMax) };
  } else if (qPriceMin && qPriceMax && !isNaN(qPriceMin) && !isNaN(qPriceMax)) {
    query.price = { $gte: parseInt(qPriceMin), $lte: parseInt(qPriceMax) };
  }

  try {
    const products = await Product.find(query);
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json(err);
  }
});
// SEARCH PRODUCTS BY TITLE
router.get("/search", async (req, res) => {
  const qTitle = req.query.title;

  try {
    const products =await Product.find({ title: qTitle });
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;