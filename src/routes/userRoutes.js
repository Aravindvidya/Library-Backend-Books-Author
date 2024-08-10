const express = require('express');
const { addUser, updateUser, deleteUser } = require('../controllers/userControllers');
const { secure } = require('../middlewares/secure');
const { hasRole } = require('../middlewares/hasRole');

const router = express.Router();

router.post('/', secure, hasRole(['admin']), addUser);
router.patch('/:userId', secure, hasRole(['admin']), updateUser);
router.delete('/:userId', secure, hasRole(['admin']), deleteUser);

module.exports = router;
