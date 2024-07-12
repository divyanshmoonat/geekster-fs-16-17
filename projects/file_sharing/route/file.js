const express = require("express");

const fileController = require("../controller/file");

const router = express.Router();

router.post("/api/file", fileController.uploadFile); // Uploading a file

router.get("/file/:fileId", fileController.generateSharableLink); // Generate a sharable/downloadable link

router.get("/files/download/:fileId", fileController.downloadFile); // Download the file

router.post("/api/files/send", fileController.sendEmail); // Send the downloadable link

module.exports = router;
