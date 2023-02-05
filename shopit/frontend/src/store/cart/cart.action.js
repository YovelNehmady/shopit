import { showErrorMsg, showSuccessMsg } from '../../service/event-bus.service.js'
import { cartService } from '../../service/cart.service.js'
import { store } from '../store.js'
import { ADD_TO_CART, SET_CART } from './cart.reducer.js'

export async function loadCart() {
    try {
        let cart = await cartService.query()
        store.dispatch({ type: SET_CART, cart })
        return cart
    } catch (err) {
        console.log('ERROR', err)
        showErrorMsg()
    }
}
export async function addToCart(product) {
    try {
        let cart = await cartService.addToCart(product)
        store.dispatch({ type: ADD_TO_CART, product })
        showSuccessMsg('product added to cart!')
        return cart
    } catch (err) {
        console.log('ERROR', err)
        showErrorMsg()
    }
}
