const express = require('express')
const { getCart, addToCart, removeFromCart } = require('./cart.controller')
const router = express.Router()

router.get('/', getCart)
router.post('/:id', addToCart)
router.delete('/:id', removeFromCart)

module.exports = router