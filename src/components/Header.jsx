import React from 'react';
import About from './About';


const Header = (props) =>{

    const {
        name, profession, avatar
    } = props;

    return (
        <>
        <div className="Header-profile">
            <img src={avatar} alt=""/>
        </div>
        <div className="Header-content">
            <h2 className='Header-title' >title</h2>
            <About>

            </About>
        </div>

        </>        
    );
};

export default Header;