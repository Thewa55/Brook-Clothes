import CartActionTypes from "./cart.types";

//we don't need to pass a payload
export const toggleCartHidden = () => ({
    type: CartActionTypes.TOGGLE_CART_HIDDEN
})