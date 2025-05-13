const mongoose = require("mongoose");
const checkoutSchema = new mongoose.Schema({
  productId: String,
  name: String,
  sellerName: String,
  ratePerDay: Number,
  addonDays: Number,
  addonCost: Number,
  cautionDeposit: Number,
  deliveryFee: Number,
  totalPay: Number,
});

const Checkout = mongoose.model("Checkout", checkoutSchema);

module.exports = { Checkout };
