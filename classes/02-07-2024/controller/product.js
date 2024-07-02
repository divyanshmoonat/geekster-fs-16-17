const ProductModel = require("../model/product");

const listProducts = (req, res) => {
  const productsList = ProductModel.getProducts();
  res.json({
    results: productsList,
  });
};

const productController = {
  listProducts,
};

module.exports = productController;
