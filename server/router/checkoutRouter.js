const express = require("express");
const { Checkout } = require("../models/checkoutProduct.model");
const {
  checkouts,
  getCheckoutById,
} = require("../controller/checkout.controller");

const CheckoutRouter = express.Router();

CheckoutRouter.post("/createCheckout", checkouts);

module.exports = { CheckoutRouter };
