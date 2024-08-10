const express = require('express');
const { getAllAuthors, getAuthorById, addAuthor, updateAuthor, deleteAuthor } = require('../controllers/authorControllers');
const { secure } = require('../middlewares/secure');
const { hasRole } = require('../middlewares/hasRole');

const router = express.Router();

router.get('/', getAllAuthors);
router.get('/:authorId', getAuthorById);
router.post('/', secure, hasRole(['admin']), addAuthor);
router.patch('/:authorId', secure, hasRole(['admin']), updateAuthor);
router.delete('/:authorId', secure, hasRole(['admin']), deleteAuthor);

module.exports = router;
