import React from 'react';
//import './homepage.style.scss';
import Directory from '../../components/directory/directory.component';
import { HomePageContainer } from './homepage.styles';


const HomePage = () => {
    // return(
    //     <div className='homepage'>
    //             {/* This will dynamically link the button to the hats page <button onClick= {() => props.history.push('/hats')}>Hats</button> */}
    //             <Directory />
    //     </div>
    // )

    return(
        <HomePageContainer>
                {/* This will dynamically link the button to the hats page <button onClick= {() => props.history.push('/hats')}>Hats</button> */}
                <Directory />
        </HomePageContainer>
    )
}

export default HomePage;