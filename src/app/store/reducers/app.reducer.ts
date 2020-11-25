import { ActionReducerMap } from '@ngrx/store';
import { State } from '../states/app.state';
import { productsReducer } from './products.reducer';
import { ordersReducer } from './orders.reducer';

export const reducers: ActionReducerMap<State> = {
  productos: productsReducer,
  ordenes: ordersReducer,
};
