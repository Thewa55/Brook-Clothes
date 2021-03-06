import CartActionTypes from "./cart.types";

//we don't need to pass a payload
export const toggleCartHidden = () => ({
    type: CartActionTypes.TOGGLE_CART_HIDDEN
})

export const addItem = (item) => ({
    type: CartActionTypes.ADD_ITEM,
    payload: item
})

export const removeItem = (item) => ({
    type: CartActionTypes.CLEAR_ITEM_FROM_CART,
    payload: item
})

export const subtractItem = (item) => ({
    type: CartActionTypes.SUBTRACT_ITEM,
    payload: item
})