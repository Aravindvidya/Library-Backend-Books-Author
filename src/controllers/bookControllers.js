const Book = require("../models/bookModel");

const getAllBooks = async (req, res) => {
  const filterObj = { ...req.query };
  const excludedFields = ["sort", "limit", "fields", "populate"];
  excludedFields.map((field) => delete filterObj[field]);

  let queryObject = Book.find(filterObj);

  if (req.query.sort) {
    queryObject = queryObject.sort(req.query.sort);
  }

  if (req.query.limit) {
    queryObject = queryObject.limit(req.query.limit);
  } else {
    queryObject = queryObject.limit(5);
  }

  if (req.query.fields) {
    queryObject = queryObject.select(req.query.fields.replace(/,/g, " "));
  }

  if (req.query.populate) {
    queryObject = queryObject.populate(req.query.populate);
  }

  const books = await queryObject;
  res.json(books);
};

const getBookById = async (req, res) => {
  const book = await Book.findById(req.params.bookId).populate("author").exec();
  res.json(book);
};

const addBook = async (req, res) => {
  const data = req.body;
  const book = new Book(data);
  await book.save();
  res.json(book);
};

const updateBook = async (req, res) => {
  const updatedBook = await Book.findByIdAndUpdate(
    req.params.bookId,
    req.body,
    { new: true }
  );
  res.json(updatedBook);
};

const deleteBook = async (req, res) => {
  await Book.findByIdAndDelete(req.params.bookId);
  res.send("Deleted!");
};

module.exports = {
  getAllBooks,
  getBookById,
  addBook,
  updateBook,
  deleteBook,
};
