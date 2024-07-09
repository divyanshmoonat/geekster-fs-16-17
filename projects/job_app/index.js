const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const jobRoutes = require("./route/job");

const app = express();

dotenv.config();

console.log("mongoDB URI => ", process.env.DATABASE_URI);
mongoose
  .connect(process.env.DATABASE_URI)
  .then(() => console.log("DB Connected successfully"))
  .catch((err) => console.log("Error connecting database", err));

// Middlewares
app.use(express.json());

// Routes
app.use(jobRoutes);

app.listen(10000, () => console.log(`Server is up and running at port 10000`));
