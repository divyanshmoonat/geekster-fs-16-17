const express = require("express");
const mongoose = require("mongoose");

const fileRoutes = require("./route/file");

const app = express();

mongoose
  .connect("mongodb://localhost:27017/file_app")
  .then(() => console.log("DB Connected Successfully"))
  .catch((err) => console.log("Error connecting Database", err));

app.use(express.json());

app.use(fileRoutes);

app.listen(10000, () => console.log(`Server is up and running at port 10000`));
