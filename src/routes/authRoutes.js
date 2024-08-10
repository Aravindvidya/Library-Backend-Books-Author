const express = require("express");
const { login, verifyLogin } = require("../controllers/authControllers");
const { secure } = require("../middlewares/secure");

const router = express.Router();

router.post("/login", login);
router.get("/verifyLogin", secure, verifyLogin);

module.exports = router;
