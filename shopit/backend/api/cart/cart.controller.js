const cartService = require('./cart.service.js')

async function getCart(req, res) {
  try {
    const filterBy = {
      txt: req.query.txt || ''
    }
    const carts = await cartService.query(filterBy)
    res.json(carts)
  } catch (err) {
    res.status(500).send({ err: 'Failed to get carts' })
  }
}

async function addToCart(req, res) {

  try {
    const cart = req.body
    const addedProductToCard = await cartService.add(cart)
    res.json(addedProductToCard)
  } catch (err) {
    res.status(500).send({ err: 'Failed to add product cart' })
  }
}


async function removeFromCart(req, res) {
  try {
    const cartId = req.params.id
    const removedId = await cartService.remove(cartId)
    res.send(removedId)
  } catch (err) {
    res.status(500).send({ err: 'Failed to remove product cart' })
  }
}

module.exports = {
  addToCart,
  removeFromCart,
  getCart
}
