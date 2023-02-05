const STORAGE_KEY = "cart_DB"

export const cartService = {
  query,
  addToCart
}

function query() {
  let cart = JSON.parse(sessionStorage.getItem(STORAGE_KEY))
  if (!cart || !cart.length) cart = []
  return cart
}

function addToCart(product) {
  let products = query()
  products.push(product)
  return sessionStorage.setItem(STORAGE_KEY, JSON.stringify(products))
}