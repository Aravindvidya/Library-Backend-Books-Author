const jwt = require("jsonwebtoken");

const secure = async (req, res, next) => {
  if (req.cookies.token) {
    try {
      const userData = jwt.verify(
        req.cookies.token,
        process.env.JWT_SECRET_KEY
      );
      req.user = userData;
      next();
    } catch (error) {
      res.status(401).send("Unauthorized access!");
    }
  } else {
    res.status(401).send("Unauthorized access!");
  }
};

module.exports = {
  secure,
};
