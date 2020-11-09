import React from 'react';
import './nav.styles.css';

const Nav = () => {
  return (
    <nav className='nav'>
      <h2>UseReducer</h2>
      <div className='cart-count'>
        <h3>Items in cart: 3</h3>
      </div>
    </nav>
  );
};

export default Nav;
