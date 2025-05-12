const express = require("express");
const {
  sendRentRequest,
  getRentrequest,
} = require("../controller/rentRequest.controller");
const { authenticateBuyer } = require("../middleware/auth");

const rentRequestRouter = express.Router();

rentRequestRouter.post("/request", authenticateBuyer, sendRentRequest);
rentRequestRouter.get("/getrequest", getRentrequest);

module.exports = { rentRequestRouter };
