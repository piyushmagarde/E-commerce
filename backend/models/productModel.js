const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter product name."],
  },
  description: {
    type: String,
    required: [true, "Please enter product description"],
  },
  price:{
    type: Number,
    required:[true, "Please enter product price"]
  },
  rating: {
    type: Number,
    default: 0,
  },
  images: [
    {
      public_id: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
    },
  ],
  category: {
    type: String,
    required: [true, "Please select category of product"],
  },
  stock: {
    type: Number,
    default: 1,
    required: [true, "Please enter stock"],
    maxlength: [4, "Stock cannot exceed 4 characters"],
  },
  reviews: [
    {
      name: {
        type: String,
        required: true,
      },
      rating: {
        type: Number,
        required: true,
      },
      comment: {
        type: String,
        required: true,
      },
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Product", productSchema);
