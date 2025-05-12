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
      email,
      sellername,
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
      email,
      sellername,
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

const updateProductList = async (req, res) => {
  try {
    const { productId } = req.params;
    const sellerId = req.seller.id;
    const updateData = req.body;

    const updateProduct = await Product.findOneAndUpdate(
      { _id: productId, seller: sellerId },
      updateData,
      { new: true }
    );

    if (!updateProduct) {
      return res
        .status(401)
        .json({ msg: "product not found or not authorized" });
    }

    return res
      .status(200)
      .json({ msg: "product updates successfuly", updateData });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: "internal server error" });
  }
};

const getSellerProducts = async (req, res) => {
  try {
    const email = req.seller.email;
    const sellername = req.seller.name;
    console.log("email is :" + email);

    const products = await Product.find({ email: email });
    const nameofSeller = await Product.find({ sellername: sellername });
    console.log(products);
    console.log(nameofSeller);

    return res.json({ products });
  } catch (error) {
    console.error("Failed to fetch products:", error);
    res.status(500).json({ msg: "Server error" });
  }
};

const getProductsCount = async (req, res) => {
  try {
    const count = await Product.countDocuments();
    return res.status(200).json({ count });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: "internal server error" });
  }
};

const getProductItemTypes = async (req, res) => {
  try {
    const itemtypes = await Product.aggregate([
      {
        $match: {
          itemType: { $exists: true, $ne: null },
        },
      },
      {
        $group: {
          _id: "$itemType",
          count: { $sum: 1 },
        },
      },
      {
        $sort: { count: -1 },
      },
    ]);

    res.status(200).json({ itemtypes });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Internal server error" });
  }
};

const getSellersWithProductsforAdmin = async (req, res) => {
  try {
    const result = await Product.aggregate([
      {
        $lookup: {
          from: "sellers", // must be the name of the Seller collection (lowercase and plural by default)
          localField: "email",
          foreignField: "email",
          as: "sellerDetails",
        },
      },
      {
        $unwind: "$sellerDetails",
      },
      {
        $project: {
          _id: 0,
          sellerUsername: "$sellerDetails.username",
          sellerEmail: "$sellerDetails.email",
          sellerPhone: "$sellerDetails.phone",
          productName: "$name",
          itemType: 1,
        },
      },
    ]);

    res.status(200).json(result);
  } catch (error) {
    console.error("Error fetching sellers with products:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = {
  UploadProduct,
  getAllProduct,
  getProductById,
  updateProductList,
  getSellerProducts,
  getProductsCount,
  getProductItemTypes,
  getSellersWithProductsforAdmin,
};
