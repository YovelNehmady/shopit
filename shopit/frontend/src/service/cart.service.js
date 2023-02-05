import { storageService } from "./async-storage.service"
import { httpService } from "./http.service"
import { utilService } from "./util.service"

const STORAGE_KEY = "cart_DB"

export const cartService = {
  query,
  save,
  remove,
}

function query() {
  return sessionStorage.getItem(STORAGE_KEY)
}

function addToCart(product) {
  const products = query()
  products.push(product)
  return sessionStorage.setItem(STORAGE_KEY, products)
}