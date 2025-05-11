const express = require("express");
const { sendRentRequest } = require("../controller/rentRequest.controller");
const { authenticateBuyer } = require("../middleware/auth");

const rentRequestRouter = express.Router();

rentRequestRouter.post("/request",authenticateBuyer, sendRentRequest);

module.exports = { rentRequestRouter };
