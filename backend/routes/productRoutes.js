import express from "express";

const router = express.Router();

import Product from "../models/productModel.js";

router.get("/", async (req, res) => {
  const products = await Product.find({});
  res.json(products);
});

router.get("/:id", async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ message: "product not found" });
  }
});

export default router;
