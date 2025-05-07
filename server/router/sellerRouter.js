const express = require("express");
const {
  sellerSignUp,
  loginWithPassword,
  getSellerCount,
  sellerProfile,
} = require("../controller/seller.controller");
const { authenticateSeller } = require("../middleware/auth");

const SellerRouter = express.Router();

SellerRouter.post("/create", sellerSignUp);
SellerRouter.post("/login", loginWithPassword);
SellerRouter.get("/count", getSellerCount);
SellerRouter.get("/sellerprofile", authenticateSeller, sellerProfile);

module.exports = { SellerRouter };
