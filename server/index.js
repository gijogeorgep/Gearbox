const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const port = 4000;
const { AdminRouter } = require("./router/adminRouter");

require("dotenv").config();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

mongoose
  .connect(process.env.CONN_STRING)
  .then(() => {
    console.log("connected to db");
  })
  .catch((error) => {
    console.log("database connection error");
    console.log(error);
  });

app.use("/api/admin", AdminRouter);

app.listen(port, () => {
  console.log("server running on http://localhost:4000");
});
