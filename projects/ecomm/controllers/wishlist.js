const UserModel = require("../models/user");

const addToWishlist = async (req, res) => {
  //   console.log(req.body.productId);
  // Todo: Write your code to validate if req.body.productId belongs to products collection
  await UserModel.findByIdAndUpdate(req.user._id, {
    $push: { wishlist: req.body.productId },
  });
  res.json({
    success: true,
    message: "Add to wishlist API",
  });
};

const removeFromWishlist = async (req, res) => {
  await UserModel.findByIdAndUpdate(req.user._id, {
    $pull: { wishlist: req.body.productId },
  });
  res.json({
    success: true,
    message: "Remove from wishlist API",
  });
};

const getWishlist = async (req, res) => {
  const wishlist = await UserModel.findById(req.user._id)
    .populate("wishlist")
    .select("wishlist");
  // console.log(wishlist);
  res.json({
    success: true,
    message: "Get wishlist API",
    results: wishlist,
  });
};

const wishlistController = {
  addToWishlist,
  removeFromWishlist,
  getWishlist,
};

module.exports = wishlistController;
