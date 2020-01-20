import React from 'react';
import { NavLink } from 'react-router-dom';
import CurrencySelection from '../components/CurrencySelection';
import Login from '../components/Login';

const Header = () => {

    return (
        <header className='header'>
            <h1 className='header-h1'>Shopio</h1>
            <NavLink exact to='/' activeClassName='is-active'>Home</NavLink>   
            <NavLink to='/shop' activeClassName='is-active'>Shop</NavLink>
            <NavLink to='/contact' activeClassName='is-active'>Contact</NavLink>
            <NavLink to='/mycart' activeClassName='is-active'>My cart</NavLink>
            <CurrencySelection />
            <Login />
        </header>
    );
}

export default Header;