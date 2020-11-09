import React, {
  createContext,
  FC,
  ReactNode,
  useContext,
  useEffect,
  useReducer,
} from 'react';
import { TCartItem } from '../types/types';
import { reducer } from './reducer';
import { ActionEnum } from '../types/types';

type InitialContext = {
  cartItems: TCartItem[];
  addItem: (id: string) => void;
  removeItem: (id: string) => void;
  clearItems: () => void;
};

export type State = {
  cartItems: TCartItem[];
};

const initialState: State = {
  cartItems: [],
};

const AppContext = createContext<InitialContext | null>(null);

export const AppProvider: FC<ReactNode> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { cartItems } = state;

  const addItem = (id: string) =>
    dispatch({ type: ActionEnum.increment, payload: id });

  const removeItem = (id: string) =>
    dispatch({ type: ActionEnum.decrement, payload: id });

  const clearItems = () => dispatch({ type: ActionEnum.clearAllItems });

  useEffect(() => {
    const fetchItems = async () => {
      const res = await fetch(
        'https://course-api.com/react-useReducer-cart-project'
      );
      const data: TCartItem[] = await res.json();
      dispatch({ type: ActionEnum.addAllItems, payload: data });
    };
    fetchItems();
  }, []);

  return (
    <AppContext.Provider value={{ cartItems, addItem, removeItem, clearItems }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};
