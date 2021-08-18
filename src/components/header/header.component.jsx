import React from 'react'
//import { Link } from 'react-router-dom';
import Logo from '../../assets/b.png'
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { auth } from '../../firebase/firebase.utils'
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentUser } from '../../redux/user/user.action'
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { HeaderContainer, LogoContainer, OptionsContainer, OptionLinks } from './header.styles'
import { signOutStart } from '../../redux/user/user.action';
//import './header.style.scss'



const Header = () => {
    
    const { currentUser, cart } = useSelector(state=> ({
        currentUser: state.user,
        cart: state.cart
    }))

    console.log(currentUser)
    const dispatch = useDispatch()

    const loggedInUser = selectCurrentUser(currentUser)

    const cartVisiblity = selectCartHidden(cart)

    const logout = () => {
        // auth.signOut()
        // dispatch(setCurrentUser(null))
        dispatch(signOutStart())
    }

    return (
    <HeaderContainer>
        <LogoContainer to='/'>
          <img alt='logo' className='logo' src={Logo}/>
        </LogoContainer>
        <OptionsContainer>
            <OptionLinks className='option' to='/shop'>SHOP</OptionLinks>
            <OptionLinks className='option' to='/shop'>CONTACT</OptionLinks>
            {/* we can also pass a component in the as tag so it will take the same styling as OptionLinks
                <OptionLinks as={InsertComponentHere} as  className='option' onClick={logout}>SIGN OUT</OptionLinks>  */}
            { loggedInUser ? 
                (  
                    <OptionLinks as='div'  className='option' onClick={logout}>SIGN OUT</OptionLinks> 
                ) : ( 
                    <OptionLinks className='option' to='/signin'>SIGN IN</OptionLinks> 
                )
            }
            {/* <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div>     
            <Link className='option' to='/signin'>SIGN IN</Link>  */}
            <CartIcon/>
        </OptionsContainer>
        {cartVisiblity ? null : <CartDropdown />}
    </HeaderContainer>
)}

export default Header;