const express = require("express");
const responseTime = require("response-time");
const morgan = require("morgan");

const cartRoutes = require("./cartApi");
const productRoutes = require("./productApi");
const userRoutes = require("./userApi");

// Server initialization
const app = express();

const users = [
  {
    id: 1,
    name: "John",
    mobNo: "1231231231",
    profilePicture: "http://localhost:10000/profilePicture.png",
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
  const { firstName, lastName } = req.query;
  const fullName = `${firstName} ${lastName}`;
  req.fullName = fullName;
  next();
  //   next("Error occured");
  //   res.json({ msg: "Response from M2" });
};

const m3 = (req, res, next) => {
  console.log("Middleware 3", req.fullName);
  next();
  //   res.json({ msg: "Response from M3" });
};

const errorHandler = (err, req, res, next) => {
  console.log("ERROR OCCURED IN SYSTEM");
  // Save the error in a file
  res.status(500).json({
    success: false,
    message: "Something went wrong, please try again after sometime",
  });
};

// Applicaiton middlewares
app.use(express.json()); // req.body
app.use(express.urlencoded());
app.use(express.static("files"));
// app.use(apiKeyMiddleware); // Apply middlewares
// app.use(responseTime());
// app.use(morgan("dev"));
// app.use(m2);
app.use(m3);

// API End points
app.use(cartRoutes);
app.use(productRoutes);
app.use(userRoutes);

app.use(errorHandler);

app.listen(10000, () =>
  console.log(`Express Server is up and running at port 10000`)
);
