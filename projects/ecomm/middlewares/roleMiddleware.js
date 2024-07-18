const roleMiddleware = (role) => (req, res, next) => {
  if (role.includes(req.user.role)) {
    next();
  } else {
    res.status(403).json({
      success: false,
      message: "Forbidden",
    });
  }
};

module.exports = roleMiddleware;
