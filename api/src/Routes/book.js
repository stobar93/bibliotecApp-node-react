const {Router} = require('express');
const router = Router();
const {User, Book} = require('../db');
const {createBook} = require('../utils/book')

router.get('/', (req, res)=>{res.status(200).send('Book router')})

router.post('/', createBook)

router.put('/', (req, res)=>{res.status(200).send('Book router')})

router.delete('/', (req, res)=>{res.status(200).send('Book router')})

module.exports = router;