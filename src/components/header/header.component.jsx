import React from 'react'
import { Link } from 'react-router-dom';
import Logo from '../../assets/LetterB.jpg'

import './header.style.scss'

const Header = () => (
    <div className='header'>
        <Link className='logo-container' to='/'>
          <img alt='logo' className='logo' src={Logo}/>
        </Link>
        <div className='options'>
            <Link className='option' to='/shop'>SHOP</Link>
            <Link className='option' to='/shop'>CONTACT</Link>
        </div>
    </div>
)

export default Header;