const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const UserModel = require("../models/user");

const signUp = async (req, res) => {
  // ToDo: Validations

  const salt = bcrypt.genSaltSync(10);

  const hashedPassword = bcrypt.hashSync(req.body.password, salt);
  // console.log("Plain Text Password", req.body.password);
  // console.log("Hashed Password", hashedPassword);

  const newlyInsertedUser = await UserModel.create({
    ...req.body,
    password: hashedPassword,
    role: "CUSTOMER",
  });
  res.json({
    success: true,
    message: "Registration completed, please login to continue",
  });
};

const login = async (req, res) => {
  // ToDo: Validations
  const user = await UserModel.findOne({ email: req.body.email });
  if (!user) {
    // User not registered
    return res.status(400).json({
      success: false,
      message: "Invalid username or password",
    });
  }

  if (user.password !== req.body.password) {
    return res.status(400).json({
      success: false,
      message: "Invalid username or password",
    });
  }

  const currentTimeInSeconds = Math.floor(new Date().getTime() / 1000);
  const expiryTimeInSeconds = currentTimeInSeconds + 3600; // 1hr from now

  const jwtPayload = {
    userId: user._id,
    role: user.role,
    mobileNo: user.mobileNo,
    exp: expiryTimeInSeconds,
  };

  const token = jwt.sign(jwtPayload, "MY_SECRET_KEY");

  await UserModel.findByIdAndUpdate(user._id, { $set: { token } });

  // save token in DB
  //   token/ticket/parchi
  res.json({
    success: true,
    message: "Logged In Successfully",
    token: token,
  });
};

const userController = {
  signUp,
  login,
};

module.exports = userController;
