const Product = require("../models/productModel");
const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");

// create product --Admin
exports.createProduct = catchAsyncErrors(async (req, res, next) => {
  const product = await Product.create(req.body);
  if (!product) {
    return next(new ErrorHandler("Unable to create product", 404));
  }
  res.status(201).json({
    success: true,
    product,
  });
});

// get product by ID
exports.getProduct = catchAsyncErrors(async (req, res, next) => {
  const product = await Product.findById(req.params.id);
  if (!product) {
    return next(new ErrorHandler("product not found", 404));
  }
  res.status(200).json({
    message: "Product retrived successfully",
    product,
  });
});

// get All products
exports.getAllProducts = catchAsyncErrors(async (req, res) => {
  const products = await Product.find();
  res.status(200).json({
    success: true,
    products,
  });
});

// Update Product--Admin
exports.updateProduct = catchAsyncErrors(async (req, res, next) => {
  let product = await Product.findById(req.params.id);
  if (!product) {
    return next(new ErrorHandler("product not found", 404));
  }
  product = await Product.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });
  res.status(200).json({
    success: true,
    product,
  });
});

// delete product --admin
exports.deleteProduct = catchAsyncErrors(async (req, res, next) => {
  product = await Product.findById(req.params.id);
  if (!product) {
    return next(new ErrorHandler("product not found", 404));
  }
  await product.remove();
  res.status(200).json({
    success: true,
    message: "Product deleted successfully",
  });
});
