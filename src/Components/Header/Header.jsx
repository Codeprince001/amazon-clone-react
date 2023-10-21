import React from 'react';
import amazonHomeLogo from "../../assets/amazon.png";
import "./header.css";
import { Link } from "react-router-dom";
import Search from '../Search';
import { IPAdress, FlagIcon } from '../Location/IPAdress';
import { FiShoppingCart } from "react-icons/fi";
import Home from '../Home/Home';

const Header = () => {
  return (
    <>
      <nav className='header'>
        <Link to="/">
          <img className="header-logo" src={amazonHomeLogo} alt='Home icon' />
        </Link>
        <IPAdress />
        <Search />
        <FlagIcon className="flag" />

        <div className='header-nav'>

          <Link to="/login" className='header-link'>
            <div className='header-option'>
              <span className='header-link-top'>Hello, sign in</span>
              <span className='header-link-bottom'>Account & Lists</span>
            </div>
          </Link>

          <Link to="/login" className='header-link'>
            <div className='header-option'>
              <span className='header-link-top'>Returns</span>
              <span className='header-link-bottom'>& Orders</span>
            </div>
          </Link>

          <Link to="/checkout" className='header-link'>
            <div className='header-shopping-option'>
              <span className='cart'>{<FiShoppingCart color='#fff' className='shopping-icon' />}<span>Cart</span></span>
              <span className='shopping-item'>0</span>
            </div>
          </Link>
        </div>
      </nav>
      <Home />
    </>
  );
};

export default Header;
