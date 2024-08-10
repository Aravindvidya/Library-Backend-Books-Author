const mongoose = require('mongoose');

const authorSchema = new mongoose.Schema({
    name: String,
    birthPlace: String,
    about: String
});

const Author = mongoose.model('Author', authorSchema);

module.exports = Author;
