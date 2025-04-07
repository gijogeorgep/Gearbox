const mongoose = require("mongoose");
const adminSchema = new mongoose.Schema({
  name: String,
  email: String,
  username: String,
  password: String,
  confirmpassword: String,
});

const Admin = mongoose.model("Admin", adminSchema);

module.exports = { Admin };
