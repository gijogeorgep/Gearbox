const { Buyer } = require("../models/buyer.Model");
const { Product } = require("../models/product.model");
const { rentRequest } = require("../models/rentRequest.model");

const sendRentRequest = async (req, res) => {
  try {
    const {
      productId,
      name,
      email,
      phoneNumber,
      location,
      startDate,
      endDate,
    } = req.body;

    // Use req.buyer._id from authenticateBuyer middleware
    if (!req.buyer) {
      return res.status(401).json({ msg: "Unauthorized: Buyer not found" });
    }

    const product = await Product.findById(productId);
    if (!product || !product.seller) {
      return res.status(404).json({ msg: "Product or seller not found" });
    }

    const newRequest = await rentRequest.create({
      product: product._id,
      seller: product.seller,
      buyer: req.buyer._id, // Use authenticated buyer's ID
      name,
      email,
      phoneNumber,
      location,
      startDate,
      endDate,
    });

    return res.status(200).json({ msg: "Rent request successful", newRequest });
  } catch (error) {
    console.error("Rent Request Error:", error);
    return res.status(500).json({ msg: "Internal server error" });
  }
};

module.exports = { sendRentRequest };
