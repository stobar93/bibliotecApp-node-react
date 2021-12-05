const {Router} = require('express');
const router = Router();
const {User, Book} = require('../db');
const {createBook, updateBookAvailability} = require('../utils/book')

router.get('/', (req, res)=>{res.status(200).send('Book router')})

router.post('/', createBook)

router.put('/', updateBookAvailability)

router.delete('/', (req, res)=>{res.status(200).send('Book router')})

module.exports = router;