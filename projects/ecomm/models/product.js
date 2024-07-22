const mongoose = require("mongoose");

const reviewSchema = {
  review: {
    type: String,
  },
  rating: {
    type: Number,
  },
  user: {
    type: mongoose.Types.ObjectId,
  },
};

const productSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  price: {
    type: Number,
  },
  discountPercentage: {
    type: Number,
  },
  rating: {
    type: Number,
  },
  stock: {
    type: Number,
  },
  brand: {
    type: String,
  },
  category: {
    type: String,
  },
  thumbnail: {
    type: String,
  },
  images: {
    type: [String],
  },
  isActive: {
    type: Boolean,
    default: true,
  },
  reviews: {
    type: [reviewSchema],
  },
});

const ProductModel = mongoose.model("products", productSchema);

module.exports = ProductModel;
