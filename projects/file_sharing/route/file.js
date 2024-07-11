const express = require("express");

const fileController = require("../controller/file");

const router = express.Router();

router.post("/api/file", fileController.uploadFile); // Uploading a file

module.exports = router;
