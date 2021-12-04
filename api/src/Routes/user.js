const {Router} = require('express');
const router = Router();
const {User, Book} = require('../db');

router.get('/', (req, res)=>{res.status(200).send('User router')})

module.exports = router;