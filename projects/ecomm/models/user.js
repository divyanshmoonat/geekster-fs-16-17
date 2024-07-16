const mongoose = require("mongoose");

const address = {
  addressLine1: {
    type: String,
    required: true,
  },
  addressLine2: {
    type: String,
    required: false,
    default: "-",
  },
  city: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  pincode: {
    type: String,
    required: true,
  },
  _id: false,
};

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unqiue: true,
  },
  mobileNo: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: false,
    default: "-",
  },
  address: {
    type: address,
    required: true,
  },
  role: {
    type: String,
    required: true,
    enum: ["CUSTOMER", "SELLER", "ADMIN"],
  },
  token: {
    type: String,
    required: false,
    default: "",
  },
});

const UserSchema = mongoose.model("users", userSchema);

module.exports = UserSchema;
