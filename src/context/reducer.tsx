import { State } from './appContext';
import { TAction, TCartItem } from '../types/types';
import { ActionEnum } from '../types/types';

export const reducer = (state: State, action: TAction): State => {
  switch (action.type) {
    case ActionEnum.increment:
      const newCartItems = state.cartItems.map((item) => {
        if (item.id === action.payload) {
          return { ...item, amount: item.amount + 1 };
        } else {
          return { ...item };
        }
      });
      return { cartItems: newCartItems };
    case ActionEnum.decrement:
      const theNewCartItems = state.cartItems.map((item) => {
        if (item.id === action.payload) {
          return { ...item, amount: item.amount - 1 };
        } else {
          return { ...item };
        }
      });
      return { cartItems: theNewCartItems };

    case ActionEnum.addAllItems:
      return {
        ...state,
        cartItems: action.payload as TCartItem[],
      };

    default:
      return state;
  }
};
