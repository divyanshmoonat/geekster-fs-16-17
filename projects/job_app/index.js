const express = require("express");
const mongoose = require("mongoose");

const jobRoutes = require("./route/job");

const app = express();

mongoose
  .connect("mongodb://localhost:27017/job_app")
  .then(() => console.log("DB Connected successfully"))
  .catch((err) => console.log("Error connecting database", err));

// Middlewares
app.use(express.json());

// Routes
app.use(jobRoutes);

app.listen(10000, () => console.log(`Server is up and running at port 10000`));
