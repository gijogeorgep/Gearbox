const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const port = 4000;
const { AdminRouter } = require("./router/adminRouter");
const { connectDb } = require("./config/db");

require("dotenv").config();
app.use(cors());
app.use(express.json());
connectDb();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api/admin", AdminRouter);

app.listen(port, () => {
  console.log("server running on http://localhost:4000");
});
