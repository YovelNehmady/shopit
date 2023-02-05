import { showErrorMsg } from '../../service/event-bus.service.js'
import { productService } from '../../service/product.service.js'
import { store } from '../store.js'
import { SET_PRODUCTS } from './product.reducer.js'

export async function loadProducts() {
    try {
        let products = await productService.query()
        store.dispatch({ type: SET_PRODUCTS, products })
        return products
    } catch (err) {
        console.log('ERROR', err)
        showErrorMsg()
    }
}
