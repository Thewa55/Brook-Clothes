import React from 'react';
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors';
import { useSelector } from 'react-redux';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';

import './checkout.style.scss'

const CheckoutPage = () => {
    
    const { cart } = useSelector(state => ({
        cart: state.cart
    }))

    console.log(cart)
    const cartItems = selectCartItems(cart);
    const total = selectCartTotal(cart);

    return (
    <div className='checkout-page'>
        <div className='checkout-header'>
            <div className='checkout-block'>
                <span>Product</span>
            </div>
            <div className='checkout-block'>
                <span>Description</span>
            </div>
            <div className='checkout-block'>
                <span>Quantity</span>
            </div>
            <div className='checkout-block'>
                <span>Price</span>
            </div>
            <div className='checkout-block'>
                <span>Remove</span>
            </div>
        </div>
        {
            cartItems ? cartItems.map(cartItem => 
                <CheckoutItem key={cartItem.key} cartItem={cartItem} />
            ): (<div> NO ITEMS IN SHOPPING CART</div>)
        }
        <div className='total'>
            <span>TOTAL: ${total}</span>
        </div>
    </div>
)}

export default CheckoutPage;