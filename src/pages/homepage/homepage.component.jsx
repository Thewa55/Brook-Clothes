import React from 'react';
import './homepage.style.scss';
import Directory from '../../components/directory/directory.component';

const Homepage = () => {
    return(<div className='homepage'>
        <div className='directory'>
            {/* This will dynamically link the button to the hats page <button onClick= {() => props.history.push('/hats')}>Hats</button> */}
            <Directory />
        </div>
    </div>)
}

export default Homepage;