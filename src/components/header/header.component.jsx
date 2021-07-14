import React from 'react'
import { Link } from 'react-router-dom';
import Logo from '../../assets/LetterB.jpg'
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { auth } from '../../firebase/firebase.utils'
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentUser } from '../../redux/user/user.action'
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { selectCartHidden } from '../../redux/cart/cart.selectors';

import './header.style.scss'



const Header = () => {
    
    const { currentUser, cart } = useSelector(state=> ({
        currentUser: state.user,
        cart: state.cart
    }))

    const dispatch = useDispatch()

    const loggedInUser = selectCurrentUser(currentUser)

    const cartVisiblity = selectCartHidden(cart)

    const logout = () => {
        auth.signOut()
        dispatch(setCurrentUser(null))
    }

    return (
    <div className='header'>
        <Link className='logo-container' to='/'>
          <img alt='logo' className='logo' src={Logo}/>
        </Link>
        <div className='options'>
            <Link className='option' to='/shop'>SHOP</Link>
            <Link className='option' to='/shop'>CONTACT</Link>
            { loggedInUser ? 
                (  
                    <div className='option' onClick={logout}>SIGN OUT</div> 
                ) : ( 
                    <Link className='option' to='/signin'>SIGN IN</Link> 
                )
            }
            {/* <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div>     
            <Link className='option' to='/signin'>SIGN IN</Link>  */}
            <CartIcon/>
        </div>
        {cartVisiblity ? null : <CartDropdown />}
    </div>
)}

export default Header;