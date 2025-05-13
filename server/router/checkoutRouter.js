const expess = require("express");
const { Checkout } = require("../models/checkoutProduct.model");
const { Router } = require("express");

const CheckoutRouter = expess.Router();

module.exports = { CheckoutRouter };
