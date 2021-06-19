import React from 'react'
import './menu-item.style.scss'

//destructuring the title from the props
const MenuItem = ({title, url, size})=> {
    return (
        <div style={{backgroundImage: `url(${url})`}} className={`menu-item  ${size}`}>
            <div className='content'>
                <h1 className ='title'>{title}</h1>
                <span className='subtitle'>SHOP NOW</span>
            </div>
        </div>
    )
}

export default MenuItem;