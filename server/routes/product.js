const express = require("express");
const productRouter = express.Router();
const auth = require("../middlewares/auth");
const { Product } = require("../models/product");

productRouter.get("/api/products/", auth, async (req, res) => {
  try {
    const products = await Product.find({ category: req.query.category });
    console.log(products, "cate");
    res.json(products);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

// create a get request to search products and get them
// /api/products/search/i
productRouter.get("/api/products/search/:name", auth, async (req, res) => {
  try {
    // if u will type i and iphone exists then also it will fetch
    const products = await Product.find({
      name: { $regex: req.params.name, $options: "i" },
    });
    console.log(products, "pr");
    res.json(products);
  } catch (e) {
    res.status(500).json({ error: e.message + "hi2" });
  }
});

module.exports = productRouter;
