const productService = require('./product.service.js')

async function getproducts(req, res) {
  try {
    const products = await productService.query()
    res.json(products)
  } catch (err) {
    res.status(500).send({ err: 'Failed to get products' })
  }
}

async function getproductById(req, res) {
  try {
    const productId = req.params.id
    const product = await productService.getById(productId)
    res.json(product)
  } catch (err) {
    res.status(500).send({ err: 'Failed to get product' })
  }
}

module.exports = {
  getproducts,
  getproductById
}
