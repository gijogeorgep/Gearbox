const { Product } = require("../models/product.model");

const UploadProduct = async (req, res) => {
  try {
    const item = ({
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
      sellerId: req.seller._id,
    } = req.body);

    console.log(item);

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
      sellerEmail: req.seller.email,
      sellerId: req.seller._id,
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
    const id = req.seller._id;
    const products = await Product.find({ sellerId: id }); 

    return res.json(products);
  } catch (error) {
    console.error("Failed to fetch products:", error);
    res.status(500).json({ msg: "Server error" });
  }
};

module.exports = {
  UploadProduct,
  getAllProduct,
  getProductById,
  getSellerProducts,
};
