import React from 'react'
import CustomButton from '../custom-button/custom-button.component'
import CartItem from '../cart-item/cart-item.component'
import { toggleCartHidden } from '../../redux/cart/cart.action'
import { useSelector, useDispatch } from 'react-redux'
import { withRouter  } from 'react-router-dom'
import { selectCartItems } from '../../redux/cart/cart.selectors'
import './cart-dropdown.style.scss'

const CartDropdown = ({ history }) => {
    
    const { cart } = useSelector(state=> ({
        cart: state.cart
    }))

    let cartItems = selectCartItems(cart)
    const dispatch = useDispatch();

    return(
        <div className='cart-dropdown'>
            <div className='cart-items'>
                { cartItems.length ? ( cartItems.map(item => <div><CartItem key={item.id} item={item} /></div>)): <span className='empty-message'>There are no items in the cart</span>}
            </div>
            <CustomButton  onClick={() => {
                history.push('/checkout')
                dispatch(toggleCartHidden())
            }}>
                GO TO CHECKOUT
            </CustomButton>
        </div>
    )
}

export default withRouter(CartDropdown);