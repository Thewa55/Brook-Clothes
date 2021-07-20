import React from 'react';
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors';
import { useSelector } from 'react-redux';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';

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
                <CheckoutItem key={cartItem.id} cartItem={cartItem} />
            ): (<div> NO ITEMS IN SHOPPING CART</div>)
        }
        <div className='total'>
            <span>TOTAL: ${total}</span>
        </div>
        <div className='test-warning'>
            *Please use the following test credit card for payment* <br/>
            4242 4242 4242 4242 - Exp: 12/23 - CVV: 123
        </div>
        <StripeCheckoutButton price={total} />
    </div>
)}

export default CheckoutPage;