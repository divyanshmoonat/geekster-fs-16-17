const express = require("express");

const wishlistController = require("../controllers/wishlist");
const authMiddleware = require("../middlewares/authMiddleware");

const router = express.Router();

router.get("/", authMiddleware, wishlistController.getWishlist);

router.post("/add", authMiddleware, wishlistController.addToWishlist);

router.post("/remove", authMiddleware, wishlistController.removeFromWishlist);

module.exports = router;
