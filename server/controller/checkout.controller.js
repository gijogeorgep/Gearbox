const express = require("express");
const { Checkout } = require("../models/checkoutProduct.model");

const checkouts = async (req, res) => {
  try {
    const newCheckout = await Checkout.create(req.body); // ✅ One-liner create & save
    res.status(201).json({ message: "Checkout created", data: newCheckout });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error", error });
  }
};

module.exports = { checkouts };

