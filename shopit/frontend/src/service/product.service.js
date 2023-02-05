import { storageService } from "./async-storage.service"
import { httpService } from "./http.service"
import { utilService } from "./util.service"

// const BASE_URL = 'product/'
const STORAGE_KEY = "product_DB"
_createProducts()


export const productService = {
  query,
  get,
  save,
  remove,
}


async function query() {
  try {
    // let products = await httpService.get(BASE_URL)
    let products = await storageService.query(STORAGE_KEY)
    return products
  } catch (err) {
    console.log("could not retrieve products from service")
    throw err
  }
}

function get(productId) {
  return storageService.get(STORAGE_KEY, productId)
  // return httpService.get(BASE_URL + productId)
}

function save(product) {
  if (product._id) {
    return storageService.put(STORAGE_KEY, product)
    // return httpService.put(BASE_URL + product._id, product)
  } else {
    return storageService.post(STORAGE_KEY, product)
    // return httpService.post(BASE_URL, product)
  }
}

function remove(productId) {
  return storageService.remove(STORAGE_KEY, productId)
  // return httpService.delete(BASE_URL + productId)
}

function _createProducts() {
  let products = utilService.loadFromStorage(STORAGE_KEY)
  if (!products || !products.length){
    products = []
    products.push(_createProduct())
    products.push(_createProduct())
    products.push(_createProduct())
    utilService.saveToStorage(STORAGE_KEY, products)
  }
}

function _createProduct() {
  return {
    _id: utilService.makeId(),
    title: utilService.makeLorem(5),
    price: utilService.getRandomIntInclusive(10, 100),
    imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkrz961kAHKFwj4m48zFWWMbJQSUzvc_pZzA&usqp=CAU"
  }
}