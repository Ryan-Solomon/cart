import React from 'react';
import './nav.styles.css';
import { useAppContext } from './../../context/appContext';

const Nav = () => {
  const { cartItems } = useAppContext()!;
  const totalItems = cartItems.reduce((acc, item) => acc + item.amount, 0);
  return (
    <nav className='nav'>
      <h2>UseReducer</h2>
      <div className='cart-count'>
        <h3>Items in cart: {totalItems}</h3>
      </div>
    </nav>
  );
};

export default Nav;
