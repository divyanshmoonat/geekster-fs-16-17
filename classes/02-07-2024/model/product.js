const products = [
  {
    id: 1,
    name: "Mobile",
  },
  {
    id: 2,
    name: "T-Shirt",
  },
];

const getProducts = () => {
  return products;
};

const productModel = {
  getProducts,
};

module.exports = productModel;
