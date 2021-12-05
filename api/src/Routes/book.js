const {Router} = require('express');
const router = Router();
const {User, Book} = require('../db');
const {createBook, updateBookAvailability, deleteBook} = require('../utils/book')

router.get('/', (req, res)=>{res.status(200).send('Book router')})

router.post('/', createBook)

router.put('/', updateBookAvailability)

router.delete('/', deleteBook)

module.exports = router;