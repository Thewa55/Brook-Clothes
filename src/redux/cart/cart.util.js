export const addItemToCart = (cartItems , cartItemToAdd) => {
    console.log(cartItemToAdd)
    const existingCartItem = cartItems.find( cartItem => cartItem.id === cartItemToAdd.id)
    if(existingCartItem){
        console.log('item exists')
        return cartItems.map(cartItem => 
            cartItem.id === cartItemToAdd.id ? { ...cartItem, quantity: cartItem.quantity +1 } : cartItem    
        )
    }

    return [...cartItems, {...cartItemToAdd, quantity: 1}];
}