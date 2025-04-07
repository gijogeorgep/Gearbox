const jwt = require("jsonwebtoken");
const { Admin } = require("../models/admin.model");
const authenticateAdmin = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
      return res.status(401).json({ msg: "unauthorized" });
    }

    const token = authHeader.split(" ")[1];
    jwt.verify(token, process.env.JWT_SECRET, async (err, decodedToken) => {
      if (err) {
        return res.status(400).json({ msg: "invalid token" });
      }
      const doc = await Admin.findById(decodedToken.id);
      req.user = doc;
      next();
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: "internal server error " });
  }
};

module.exports = { authenticateAdmin };
