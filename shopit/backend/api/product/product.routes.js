const express = require('express')
const { getproducts, getproductById } = require('./product.controller')
const router = express.Router()

router.get('/', getproducts)
router.get('/:id', getproductById)


module.exports = router