const { Buyer } = require("../models/buyer.Model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const e = require("express");
async function name(params) {
  
}
const buyerSignUp = async (req, res) => {
  try {
    const { name, username, email, password, confirmPassword } = req.body;
    const doc = await Buyer.findOne({ email });
    if (doc) {
      return res.status(400).json({ msg: "user already exist", doc });
    }

    if (password !== confirmPassword) {
      return res.status(400).json({ msg: "password don not match" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newBuyer = await Buyer.create({
      name,
      username,
      email,
      password: hashedPassword,
      confirmPassword: hashedPassword,
    });
    return res
      .status(201)
      .json({ msg: "account created successfully", newBuyer });
  } catch (error) {
    console.log(error);
  }
};

const loginWithPassword = async (req, res) => {
  try {
    const { username, password } = req.body;
    const doc = await Buyer.findOne({ username });
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

const getBuyerCount = async (req, res) => {
  try {
    const count = await Buyer.countDocuments();
    return res.status(200).json({ count });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: "internal server error" });
  }
};

module.exports = { buyerSignUp, loginWithPassword ,getBuyerCount};
