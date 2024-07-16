const express = require("express");

const productController = require("../controllers/product");
const authMiddleware = require("../middlewares/authMiddleware");

const router = express.Router();

router.get("/list", authMiddleware, productController.listProducts);

router.post("/create", authMiddleware, productController.createProduct);

module.exports = router;
