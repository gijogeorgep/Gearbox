const express = require("express");
const {
  UploadProduct,
  getAllProduct,
  getProductById,
  getSellerProducts,
} = require("../controller/product.controller");
const { Product } = require("../models/product.model");
const { authenticateSeller } = require("../middleware/auth");

const ProductRouter = express.Router();

ProductRouter.post("/create", authenticateSeller, UploadProduct);

ProductRouter.get("/all", getAllProduct);
ProductRouter.get("/:id", getProductById);

module.exports = { ProductRouter };
