import React from 'react';
import './homepage.style.scss';
import Directory from '../../components/directory/directory.component';

const Homepage = () => {
    return(<div className='homepage'>
        <div className='directory'>
            <Directory />
        </div>
    </div>)
}

export default Homepage;