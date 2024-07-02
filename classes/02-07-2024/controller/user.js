const registerUser = (req, res) => {
  res.json({
    message: "Register API",
  });
};

const loginUser = (req, res) => {
  res.json({
    message: "Login API",
  });
};

const userController = {
  registerUser,
  loginUser,
};

module.exports = userController;
