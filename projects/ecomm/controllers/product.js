const listProducts = async (req, res) => {
  // Token validation
  res.json({
    success: true,
  });
};

const createProduct = async (req, res) => {
  res.json({
    success: true,
    message: "Product created successfully",
  });
};

const productController = {
  listProducts,
  createProduct,
};

module.exports = productController;
