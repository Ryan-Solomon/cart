import React from 'react';
import './cart.styles.css';
import { useAppContext } from './../../context/appContext';
import CartItem from '../CartItem/CartItem';

const Cart = () => {
  const { cartItems, clearItems } = useAppContext()!;

  const totalPrice = cartItems.reduce((acc, item) => {
    return acc + JSON.parse(item.price);
  }, 0);

  return (
    <main className='cart-container'>
      <h1>Your Cart</h1>
      <section className='cart-items'>
        {cartItems.map((item) => {
          return <CartItem key={item.id} cartItem={item} />;
        })}
      </section>

      <section className='cart-total'>
        <div className='total'>
          <h3>Total: ${totalPrice}</h3>
        </div>
        <div className='btn'>
          <button onClick={clearItems}>Clear Cart</button>
        </div>
      </section>
    </main>
  );
};

export default Cart;
