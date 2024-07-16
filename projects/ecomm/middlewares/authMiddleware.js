const jwt = require("jsonwebtoken");

const UserModel = require("../models/user");

const authMiddleware = async (req, res, next) => {
  /**
   * 1. If the token in present in request
   * 2. Check if the token is valid (Validate the generating source)
   * 3. If the token is expired
   * 4. User details validation
   */

  try {
    const bearerToken = req.headers.authorization;
    if (!bearerToken) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized",
      });
    }

    const token = bearerToken.split(" ")[1]; // JWT
    jwt.verify(token, "MY_SECRET_KEY"); // Token validation

    const tokenData = jwt.decode(token);

    const currentTimeInSeconds = Math.floor(new Date().getTime() / 1000);

    if (currentTimeInSeconds > tokenData.exp) {
      // Token is expired
      return res.status(401).json({
        success: false,
        message: "Unauthorized",
      });
    }

    const user = await UserModel.findById(tokenData.userId);
    if (!user) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized",
      });
    }

    next();
  } catch (err) {
    return res.status(401).json({
      success: false,
      message: "Unauthorized",
    });
  }
};

module.exports = authMiddleware;
