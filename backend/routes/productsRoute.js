const express = require("express");
const {
  getAllProducts,
  createProduct,
  updateProduct,
  getProduct,
  deleteProduct,
} = require("../controllers/productsController");

const router = express.Router();

router.route("/product/new").post(createProduct);
router
  .route("/product/:id")
  .get(getProduct)
  .put(updateProduct)
  .delete(deleteProduct);
router.route("/products").get(getAllProducts);


module.exports = router;
