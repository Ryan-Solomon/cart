import { StringLiteral } from 'typescript';

export type TCartItem = {
  id: string;
  title: string;
  price: string;
  img: string;
  amount: number;
};

export enum ActionEnum {
  increment = 'INCREMENT',
  decrement = 'DECREMENT',
  addAllItems = 'ADD_ALL_ITEMS',
}

export type TAction = {
  type: ActionEnum;
  payload: string | TCartItem[];
};
