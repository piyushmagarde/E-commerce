const express = require("express");
const app = express();
const errorMiddleware  = require("./middleware/error")

app.use(express.json());
const products = require("./routes/productsRoute");

app.use("/api/v1/", products);

// middleware use
app.use(errorMiddleware);

module.exports = app;
