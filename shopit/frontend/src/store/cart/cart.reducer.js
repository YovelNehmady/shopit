import { cartService } from "../../service/cart.service"

export const SET_CART = 'SET_CART'
export const ADD_TO_CART = 'ADD_TO_CART'

const initialState = {
    cart: cartService.query(),
}

export function cartReducer(state = initialState, action) {
    let cart
    switch (action.type) {
        case SET_CART:
            return { ...state, cart: action.cart }
        case ADD_TO_CART:
            cart = [...state.cart, action.cart]
            return { ...state, cart }

        default:
            return state
    }
}

