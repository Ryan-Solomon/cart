import React, { FC } from 'react';
import { TCartItem } from '../../types/types';
import './CartItem.styles.css';
import { useAppContext } from './../../context/appContext';

type Props = {
  cartItem: TCartItem;
};

const CartItem: FC<Props> = ({ cartItem }) => {
  const { addItem, removeItem } = useAppContext()!;
  const itemTotalPrice = (JSON.parse(cartItem.price) * cartItem.amount).toFixed(
    2
  );

  return (
    <div className='cart-item'>
      <img src={cartItem.img} alt={cartItem.title} />
      <div className='item-details'>
        <h1>{cartItem.title}</h1>
        <h3>{itemTotalPrice}</h3>
        <h3>{cartItem.amount}</h3>
        <div className='buttons'>
          <button onClick={() => addItem(cartItem.id)}>Increment</button>
          <button onClick={() => removeItem(cartItem.id)}>Decrement</button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
