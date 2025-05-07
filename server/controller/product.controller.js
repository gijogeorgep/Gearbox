const { Product } = require("../models/product.model");

const UploadProduct = async (req, res) => {
  try {
    const {
      itemType,
      name,
      brand,
      description,
      detailedDescription,
      imageUrl,
      smallImages,
      location,
      rate,
      cautionDeposit,
      tutorialLink,
    } = req.body;

    const newProduct = await Product.create({
      itemType,
      brand,
      name,
      description,
      detailedDescription,
      imageUrl,
      smallImages,
      location,
      rate,
      cautionDeposit,
      tutorialLink,
      sellerId: req.Seller._id, // Corrected here to `req.Seller._id`
    });

    res
      .status(201)
      .json({ msg: "Item list uploaded successfully", newProduct });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Internal server error" });
  }
};

const getAllProduct = async (req, res) => {
  try {
    const products = await Product.find().sort({ createdAt: -1 });
    return res.status(200).json({ msg: "Items fetched", products });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ msg: "Internal server error" });
  }
};

const getProductById = async (req, res) => {
  try {
    const { id } = req.params;

    console.log("Fetching product with _id:", id);

    const product = await Product.findById(id);

    if (!product) {
      return res.status(404).json({ msg: "Product not found" });
    }

    res.status(200).json(product);
  } catch (error) {
    console.error("Error fetching product:", error);
    res.status(500).json({ msg: "Internal server error" });
  }
};

const getSellerProducts = async (req, res) => {
  try {
    const { sellerId } = req.seller._id;

    const products = await Product.find({ sellerId });
    res.status(200).json(products);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Something went wrong" });
  }
};

module.exports = {
  UploadProduct,
  getAllProduct,
  getProductById,
  getSellerProducts,
};
