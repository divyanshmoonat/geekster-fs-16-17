// Routes -> API End Points / API URL
const express = require("express");

const userController = require("../controller/user");

const router = express.Router();

router.post("/register", userController.registerUser);

router.post("/login", userController.loginUser);

module.exports = router;
