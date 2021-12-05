const {Router} = require('express');
const router = Router();
const {User, Book} = require('../db');
const {createTransaction, readTransaction, updateTransaction, deleteTransaction} = require('../utils/transaction')

router.post('/', createTransaction)

router.get('/', readTransaction)

router.put('/', updateTransaction)

router.delete('/', deleteTransaction)

module.exports = router;