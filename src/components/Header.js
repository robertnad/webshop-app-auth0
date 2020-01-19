import React from 'react';
import { NavLink } from 'react-router-dom';
import SignInModal from './auth/SignInModal';

const Header = () => {
    return (
        <header className='header'>
            <h1 className='header-h1'>Shop.io</h1>
            <NavLink exact to='/' activeClassName='is-active'>Home</NavLink>   
            <NavLink to='/shop' activeClassName='is-active'>Shop</NavLink>
            <NavLink to='/contact' activeClassName='is-active'>Contact</NavLink>
            <NavLink to='/mycart' activeClassName='is-active'>My cart</NavLink>
            <SignInModal />
        </header>
    );
}

export default Header;