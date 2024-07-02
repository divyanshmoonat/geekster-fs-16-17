const express = require("express");

const userRoutes = require("./routes/user");
const productRoutes = require("./routes/product");

const app = express();

app.use(userRoutes);
app.use(productRoutes);

// User Module

// Cart Module

// Product Module

// Order Module

app.listen(10000, () => console.log(`Server is up and running at port 10000`));
