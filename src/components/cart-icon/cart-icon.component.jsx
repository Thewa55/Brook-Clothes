import React from 'react'
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'
import './cart-icon.style.scss'
import { toggleCartHidden } from '../../redux/cart/cart.action'
import { selectCartItemsCount } from '../../redux/cart/cart.selectors'
import { useDispatch, useSelector } from 'react-redux'

const CartIcon = () => {
    
    const { cart } = useSelector(state=> ({
        cart: state.cart
    }))

    //let cartQuantity = cart.reduce((totalItem, cartItem) => totalItem + cartItem.quantity, 0);
    let cartQuantity = selectCartItemsCount(cart);


    const dispatch = useDispatch()
    return (
    <div className = 'cart-icon' onClick = {() => {dispatch(toggleCartHidden())}}>
        <ShoppingIcon className='shopping-icon'/>
        <span className='item-count'>{cartQuantity}</span>
    </div>
)}

export default CartIcon;