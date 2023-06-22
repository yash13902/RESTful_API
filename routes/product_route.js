const express = require("express");

const router = express.Router();

const {
  getAllProducts,
  getAllProductsTesting,
  addProduct,
  getSingleProduct,
} = require("../controllers/products_controller");

router.route("/getAllProducts").get(getAllProducts);
router.route("/getSingleProduct/:id").get(getSingleProduct);
router.route("/testing").get(getAllProductsTesting);
router.route("/createProduct").post(addProduct);

module.exports = router;
