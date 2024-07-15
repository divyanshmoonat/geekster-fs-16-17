const { v4: uuidv4 } = require("uuid");
const UserModel = require("../models/user");

const signUp = async (req, res) => {
  // ToDo: Validations
  const newlyInsertedUser = await UserModel.create(req.body);
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

  const token = uuidv4();

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
