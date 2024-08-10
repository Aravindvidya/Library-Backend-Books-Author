const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    title: String,
    genre: String,
    author: {
        type: mongoose.ObjectId,
        ref: 'Author'
    },
    rating: {
        type: Number,
        default: 0
    }
});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;
