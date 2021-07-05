import React from 'react'
import { Link } from 'react-router-dom';
import Logo from '../../assets/LetterB.jpg'
import { auth } from '../../firebase/firebase.utils'
import { useSelector } from 'react-redux';

import './header.style.scss'



const Header = () => {
    
    const { currentUser } = useSelector(state=> ({
        currentUser: state.user.currentUser
    }))

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
                    <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div> 
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