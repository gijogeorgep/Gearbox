const express = require("express");
const {
  sendRentRequest,
  getRentrequest,
  getRentrequestForBuyer,
  getRentRequestForSeller,
 
} = require("../controller/rentRequest.controller");
const { authenticateBuyer, authenticateSeller } = require("../middleware/auth");

const rentRequestRouter = express.Router();

rentRequestRouter.post("/request", authenticateBuyer, sendRentRequest);
rentRequestRouter.get("/getrequest", getRentrequest);
rentRequestRouter.get(
  "/requestForBuyer",
  authenticateBuyer,
  getRentrequestForBuyer
);
rentRequestRouter.get(
  "/requestForSeller",
  authenticateSeller,getRentRequestForSeller
  
);

module.exports = { rentRequestRouter };
