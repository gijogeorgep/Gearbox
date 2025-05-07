const express = require("express");
const {
  buyerSignUp,
  loginWithPassword,
  getBuyerCount,
} = require("../controller/buyer.controller");
const { getProductById } = require("../controller/product.controller");

const BuyerRouter = express.Router();
BuyerRouter.post("/create", buyerSignUp);
BuyerRouter.post("/login", loginWithPassword);
BuyerRouter.get("/count", getBuyerCount);
BuyerRouter.get("/:id", getProductById);

module.exports = { BuyerRouter };
