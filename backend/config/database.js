const mongoose = require("mongoose");
const connectDB = () => {
  mongoose
    .connect("mongodb://localhost:27017/Ecommerce", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      // useCreateIndex: true
    })
    .then((data) => {
      console.log(`connection successful to: ${data.connection.host}`);
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = connectDB;
