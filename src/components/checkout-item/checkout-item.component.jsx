import React from 'react';
import { removeItem, addItem, subtractItem } from '../../redux/cart/cart.action';
import { useDispatch } from 'react-redux';

import './checkout-item.style.scss'

const CheckoutItem = ({ cartItem }) => {
    
    const {imageUrl, name, quantity, price} = cartItem
    const dispatch = useDispatch()

    return(
        <div className='checkout-item'>
            <div className='image-container'>
                <img src={imageUrl} alt='item'/>
            </div>
            <span className='name'>{name}</span>
            <span className='quantity'>
                <div className='arrow' onClick={() => {
                    console.log(cartItem.id)
                    dispatch(subtractItem(cartItem))}}>&#10094;</div>
                <span className='value'>{quantity}</span>
                <div className='arrow' onClick={() => {
                    console.log(cartItem.id)
                    dispatch(addItem(cartItem))}}>&#10095;</div>
            </span>
            <span className='price'>${price}</span>
            <div className='remove-button' onClick={()=> dispatch(removeItem(cartItem))}>
                &#10005;
            </div>
        </div>
    )
}

export default CheckoutItem;