const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email }).exec();

  if (!user) {
    return res.status(401).send("Unauthorized access!");
  }

  const passwordsMatch = bcrypt.compareSync(password, user.password);

  if (passwordsMatch) {
    const token = jwt.sign(
      { _id: user._id, email: user.email, name: user.name, role: user.role },
      process.env.JWT_SECRET_KEY
    );
    res.cookie("token", token, {
      httpOnly: true,
      maxAge: 1 * 60 * 60 * 1000,
      secure: process.env.ENVIRONMENT !== "development",
    });
    res.status(200).send("Logged in");
  } else {
    res.status(401).send("Unauthorized access!");
  }
};

const verifyLogin = async (req, res) => {
  res.json(req.user);
};

module.exports = {
  login,
  verifyLogin,
};
