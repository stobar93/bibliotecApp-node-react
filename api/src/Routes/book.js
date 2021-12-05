const {Router} = require('express');
const router = Router();
const {User, Book} = require('../db');
const {createBook, readBook, updateBookAvailability, deleteBook} = require('../utils/book')

router.get('/', readBook)

router.post('/', createBook)

router.put('/', updateBookAvailability)

router.delete('/', deleteBook)

module.exports = router;