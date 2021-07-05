import React from 'react'
import { Link } from 'react-router-dom';
import Logo from '../../assets/LetterB.jpg'
import { auth } from '../../firebase/firebase.utils'
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentUser } from '../../redux/user/user.action'
import './header.style.scss'



const Header = () => {
    
    const { currentUser } = useSelector(state=> ({
        currentUser: state.user.currentUser
    }))

    const dispatch = useDispatch()

    const logout = () => {
        auth.signOut()
        dispatch(setCurrentUser(null))
    }

    console.log(currentUser)
    return (
    <div className='header'>
        <Link className='logo-container' to='/'>
          <img alt='logo' className='logo' src={Logo}/>
        </Link>
        <div className='options'>
            <Link className='option' to='/shop'>SHOP</Link>
            <Link className='option' to='/shop'>CONTACT</Link>
            { currentUser ? 
                (  
                    <div className='option' onClick={logout}>SIGN OUT</div> 
                ) : ( 
                    <Link className='option' to='/signin'>SIGN IN</Link> 
                )
            }
            {/* <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div>     
            <Link className='option' to='/signin'>SIGN IN</Link>  */}
        </div>
    </div>
)}

export default Header;