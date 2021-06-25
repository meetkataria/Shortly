import React from 'react';
import './navbar.css'
import logo from '../images/logo.svg'


function Navbar () {
    return(
        <nav className='navbar'>
            <img src={logo} className='logo'></img>
            
            <div className='pages'>
                <a href={'#'}>Features</a>
                <a href={'#'}>Pricing</a>
                <a href={'#'}>Resources</a>
            </div>
        
            <div className='login'>
                <button className='btn'>Login</button>
                <button className='btn'>Sign Up</button>
            </div>
        </nav>
    )
}

export default Navbar;