const express = require("express");
const {
  getAllBooks,
  getBookById,
  addBook,
  updateBook,
  deleteBook,
} = require("../controllers/bookControllers");
const { secure } = require("../middlewares/secure");
const { hasRole } = require("../middlewares/hasRole");

const router = express.Router();

router.get("/", getAllBooks);
router.get("/:bookId", getBookById);
router.post("/", secure, hasRole(["admin", "manager"]), addBook);
router.patch("/:bookId", secure, hasRole(["admin", "manager"]), updateBook);
router.delete("/:bookId", secure, hasRole(["admin", "manager"]), deleteBook);

module.exports = router;
