const hasRole = (roles) => {
  return (req, res, next) => {
    if (roles.includes(req.user.role)) {
      next();
    } else {
      res.status(401).send("Unauthorized access!");
    }
  };
};

module.exports = {
  hasRole,
};
