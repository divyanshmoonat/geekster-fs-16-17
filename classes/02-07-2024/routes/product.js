const express = require("express");

const productController = require("../controller/product");

const router = express.Router();

router.get("/product-list", productController.listProducts);

module.exports = router;
