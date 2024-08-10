const Author = require("../models/authorModel");

const getAllAuthors = async (req, res) => {
  const authors = await Author.find({});
  res.json(authors);
};

const getAuthorById = async (req, res) => {
  const author = await Author.findById(req.params.authorId).exec();
  res.json(author);
};

const addAuthor = async (req, res) => {
  const data = req.body;
  const author = new Author(data);
  await author.save();
  res.json(author);
};

const updateAuthor = async (req, res) => {
  const updatedAuthor = await Author.findByIdAndUpdate(
    req.params.authorId,
    req.body,
    { new: true }
  );
  res.json(updatedAuthor);
};

const deleteAuthor = async (req, res) => {
  await Author.findByIdAndDelete(req.params.authorId);
  res.send("Deleted");
};

module.exports = {
  getAllAuthors,
  getAuthorById,
  addAuthor,
  updateAuthor,
  deleteAuthor,
};
