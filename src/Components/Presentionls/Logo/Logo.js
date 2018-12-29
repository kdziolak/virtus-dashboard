import React from 'react';
import logo from './img/logo.png'
import { Link } from 'react-router-dom'
import { StyledLogo } from './LogoStyles'

const Logo = () => {
    return (
        <Link to='/'>
            <StyledLogo>
                <img src={logo} alt='logo'></img>
            </StyledLogo>
        </Link>
    );
}

export default Logo;
