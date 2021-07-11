import React from 'react'
import CustomButton from '../custom-button/custom-button.component'
import CartItem from '../cart-item/cart-item.component'
import { useSelector } from 'react-redux'

import './cart-dropdown.style.scss'

const CartDropdown = () => {
    
    const { cart } = useSelector(state=> ({
        cart: state.cart.cartItems
    }))

    console.log(cart);

    return(
        <div className='cart-dropdown'>
            <div className='cart-items'>
                { cart ? ( cart.map(item => <div><CartItem key={item.id} item={item} /></div>)): null}
            </div>
            <CustomButton>GO TO CHECKOUT</CustomButton>
        </div>
    )
}

export default CartDropdown;