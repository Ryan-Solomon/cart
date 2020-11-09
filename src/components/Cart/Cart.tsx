import React from 'react';
import './cart.styles.css';
import { useAppContext } from './../../context/appContext';

const Cart = () => {
  const { cartItems } = useAppContext()!;
  const totalPrice = cartItems.reduce((acc, item) => {
    return acc + JSON.parse(item.price);
  }, 0);

  return (
    <main className='cart-container'>
      <h1>Your Cart</h1>
      <section className='cart-items'>
        <h2>Item 1</h2>
        <h2>Item 1</h2>
        <h2>Item 1</h2>
        <h2>Item 1</h2>
      </section>

      <section className='cart-total'>
        <div className='total'>
          <h3>Total: ${totalPrice}</h3>
        </div>
        <div className='btn'>
          <button>Clear Cart</button>
        </div>
      </section>
    </main>
  );
};

export default Cart;
