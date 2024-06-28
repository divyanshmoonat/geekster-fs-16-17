const express = require("express");

const router = express.Router();

router.get("/login", (req, res, next) => {
  console.log("LOGIN API CALLED");
  res.json({
    success: true,
    message: "Login GET API",
  });
});

router.post("/login", (req, res, next) => {
  res.json({
    success: true,
    message: "Login POST API",
  });
});

router.get("/user", (req, res, next) => {
  //   next();
  try {
    const params = req.query;
    console.log("User list api called", req.fullName);
    const user = users.find((u) => u.id == params.userId);
    // user.fullname + user.abc;
    if (!params.userId) {
      return res.json({
        success: true,
        results: users,
      });
    }
    if (!user) {
      res.status(404).json({
        success: false,
        message: "User not found",
      });
    } else {
      res.json({
        success: true,
        messge: "Dummy get user API",
        results: user,
      });
    }
  } catch (err) {
    next(err);
    // console.log(err);
    // res.json({ success: false, message: "Error occured in user list api" });
  }
}); // List Get APIs

router.get("/user/:id", (req, res) => {
  const params = req.params;
  //   console.log(req.params);
  const user = users.find((u) => u.id == params.id);
  if (!user) {
    res.status(404).json({
      success: false,
      message: "User not found",
    });
  } else {
    res.json({
      success: true,
      messge: "Dummy get user API",
      results: user,
    });
  }
});

router.post("/register-user", (req, res) => {
  console.log("Body Data", req.body);
  res.json({
    success: true,
    message: "Dummy user registration API",
  });
});

module.exports = router;
