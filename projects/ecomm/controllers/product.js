const ProductModel = require("../models/product");

const listProducts = async (req, res) => {
  // Token validation
  const pageSize = req.query.pageSize; // No of items per page
  const pageNo = req.query.pageNo; // The current page no
  const minPrice = req.query.minPrice || 0;
  const sortBy = req.query.sort === "ASC" ? 1 : -1;
  const productList = await ProductModel.find({
    price: {
      $gte: minPrice,
    },
    isActive: true,
  })
    .sort({ price: sortBy }) // 1 for ascending, -1 for descending
    .limit(pageSize)
    .skip((pageNo - 1) * pageSize);
  res.json({
    success: true,
    results: productList,
  });
};

const createProduct = async (req, res) => {
  // Todo: Add product validations
  const newlyInsertedProduct = await ProductModel.create(req.body);
  res.json({
    success: true,
    message: "Product created successfully",
    data: newlyInsertedProduct._id,
  });
};

const editProduct = async (req, res) => {
  const productId = req.params.productId;
  await ProductModel.findByIdAndUpdate(productId, { $set: req.body });
  res.json({
    success: true,
    message: "Product edited successfully",
  });
};

const deleteProduct = async (req, res) => {
  // await ProductModel.findByIdAndDelete(req.params.productId);
  await ProductModel.findByIdAndUpdate(req.params.productId, {
    $set: { isActive: false },
  });
  res.json({
    success: true,
    message: "Product deleted successfully",
  });
};

const productController = {
  listProducts,
  createProduct,
  editProduct,
  deleteProduct,
};

module.exports = productController;
