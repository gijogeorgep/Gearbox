const { Seller } = require("../models/seller.model");
const bcrypt = require("bcrypt");
const e = require("express");
const jwt = require("jsonwebtoken");

const sellerSignUp = async (req, res) => {
  try {
    const { name, username, email, password, confirmPassword } = req.body;
    const doc = await Seller.findOne({ email });
    if (doc) {
      return res.status(400).json({ msg: "user already exist", doc });
    }

    if (password !== confirmPassword) {
      return res.status(400).json({ msg: "Passwords do not match" });
      alert(msg);
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newSeller = await Seller.create({
      name,
      username,
      email,
      password: hashedPassword,
      confirmPassword: hashedPassword,
    });
    return res
      .status(201)
      .json({ msg: "account created succesfuly", newSeller });
  } catch (error) {
    console.log(error);
  }
};

const loginWithPassword = async (req, res) => {
  try {
    const { username, password } = req.body;
    const doc = await Seller.findOne({ username });
    if (!doc) {
      return res.status(400).json({ msg: "account not found" });
    }

    const isPasswordValid = await bcrypt.compare(password, doc.password);
    if (!isPasswordValid) {
      return res.status(400).json({ msg: "incorrect password" });
    }
    const token = jwt.sign({ id: doc._id }, process.env.JWT_SECRET);
    return res.status(200).json({ msg: "login succesfull", token, doc });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: "internal server error" });
  }
};

const getSellerCount = async (req, res) => {
  try {
    const count = await Seller.countDocuments();
    return res.status(200).json({ count });
  } catch (error) {
    console.error("Error counting sellers:", error);
    return res.status(500).json({ msg: "Internal server error" });
  }
};

const sellerProfile = async (req, res) => {
  try {
    if (!req.seller) {
      return res.status(401).json({ msg: "Unauthorized" });
    }

    console.log("Decoded Seller from middleware:", req.seller);

    const seller = await Seller.findById(req.seller._id);
    if (!seller) {
      return res.status(404).json({ msg: "Seller not found" });
    }

    res.status(200).json(seller);
  } catch (error) {
    console.error("Error in sellerProfile:", error);
    res.status(500).json({ msg: "Internal server error" });
  }
};

module.exports = {
  sellerSignUp,
  loginWithPassword,
  getSellerCount,
  sellerProfile,
};
