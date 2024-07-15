const express = require("express");

const UserModel = require("../models/user");

const router = express.Router();

router.get("/list", async (req, res) => {
  const token = req.body.token;

  const isValidUser = await UserModel.findOne({ token: token });
  if (!isValidUser) {
    return res.status(401).json({
      success: false,
      message: "Please login to use this API",
    });
  }

  console.log(token);
  res.json({
    success: true,
  });
});

module.exports = router;
