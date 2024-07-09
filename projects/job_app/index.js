const express = require("express");
const mongoose = require("mongoose");

const jobRoutes = require("./route/job");

const app = express();

mongoose
  .connect("mongodb+srv://djain7429:4PVCk0BAwPRFbGnj@cluster0.xomtfof.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
  .then(() => console.log("DB Connected successfully"))
  .catch((err) => console.log("Error connecting database", err));

// Middlewares
app.use(express.json());

// Routes
app.use(jobRoutes);

app.listen(10000, () => console.log(`Server is up and running at port 10000`));
