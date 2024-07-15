const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const userRoutes = require("./routes/user");
const productRoutes = require("./routes/product");

// Env configuration
dotenv.config();

const app = express();

// Middlewares
app.use(express.json());

// DB Connection
mongoose
  .connect(process.env.DATABASE_URI)
  .then(() => console.log("DB Connected Successfully"))
  .catch((err) => console.log("Error connecting DB", err));

// API Routes
app.use("/api/v1/user", userRoutes);
app.use("/api/v1/product", productRoutes);

app.listen(10_000, () => console.log(`Server is up and running at port 10000`));
