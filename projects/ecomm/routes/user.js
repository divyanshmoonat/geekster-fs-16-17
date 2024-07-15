const express = require("express");

const userController = require("../controllers/user");

const router = express.Router();

router.post("/signup", userController.signUp); // Register user API

router.post("/login", userController.login); // Login user API

module.exports = router;
