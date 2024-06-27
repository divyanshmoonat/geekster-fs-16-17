const express = require("express");

// Server initialization
const app = express();

const users = [
  {
    id: 1,
    name: "John",
    mobNo: "1231231231",
  },
  {
    id: 2,
    name: "Jack",
    mobNo: "5675675675",
  },
  {
    id: 3,
    name: "Alice",
    mobNo: "7897897897",
  },
];

const apiKeyMiddleware = (req, res, next) => {
  if (req.query.apikey === "abcd1234") {
    next();
  } else {
    res.status(403).json({
      success: false,
      message: "Please pass api Key",
    });
  }
  //   console.log("Middleware 1");
  //   next();
  //   res.json({ msg: "Response from M1" });
};

const m2 = (req, res, next) => {
  console.log("Middleware 2");
  next();
  //   res.json({ msg: "Response from M2" });
};

const m3 = (req, res, next) => {
  console.log("Middleware 3");
  next();
  //   res.json({ msg: "Response from M3" });
};

// Applicaiton middlewares
app.use(apiKeyMiddleware); // Apply middlewares
// app.use(m2);
// app.use(m3);

// API End points
app.get("/login", (req, res, next) => {
  console.log("LOGIN API CALLED");
  res.json({
    success: true,
    message: "Login GET API",
  });
});

app.post("/login", (req, res, next) => {
  res.json({
    success: true,
    message: "Login POST API",
  });
});

app.get("/user", (req, res, next) => {
  //   next();
  const params = req.query;
  console.log(req.query);
  const user = users.find((u) => u.id == params.userId);
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
}); // List Get APIs

app.get("/user/:id", (req, res) => {
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

app.listen(10000, () =>
  console.log(`Express Server is up and running at port 10000`)
);
