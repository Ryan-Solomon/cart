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
}

export type TAction = {
  type: ActionEnum;
  payload: string;
};
