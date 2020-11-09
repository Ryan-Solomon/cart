import React, {
  createContext,
  FC,
  ReactNode,
  useContext,
  useReducer,
} from 'react';
import { TCartItem } from '../types/types';
import { reducer } from './reducer';

type InitialContext = {
  cartItems: TCartItem[];
};

export type State = {
  cartItems: TCartItem[];
};

const initialState: State = {
  cartItems: [],
};

const AppContext = createContext<InitialContext | null>(null);

export const AppProvider: FC<ReactNode> = ({ children }) => {
  const [cartItems, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ cartItems }}>{children}</AppContext.Provider>
  );
};

const useAppContext = () => {
  return useContext(AppContext);
};
