const express = require("express");
const {
  adminSignUp,
  loginWithPassword,
} = require("../controller/admin.controller");

const AdminRouter = express.Router();

AdminRouter.post("/create", adminSignUp);
AdminRouter.post("/login", loginWithPassword);
module.exports = { AdminRouter };
