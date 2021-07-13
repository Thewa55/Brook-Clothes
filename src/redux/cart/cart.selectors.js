import { createSelector } from "reselect";

//reselect helps with memoization, we don't need to keep rendering the state and boosts performance
//This helps with not having to rerender the cart drop down and the cart icon when the user object is changed
const selectCart = state => state;

//createSelector takes two parameters, the first parameter is an array (in this case the cart)
//the second is a function
export const selectCartItems = createSelector(
    [selectCart],
    cart => cart.cartItems
)

console.log(selectCart)
//this second selector calls the select cart items and returns the reduce call
export const selectCartItemsCount = createSelector(
    [selectCartItems],
    (cartItems) => cartItems.reduce((accumalatedQuantity, cartItem) => accumalatedQuantity + cartItem.quantity, 0)
)