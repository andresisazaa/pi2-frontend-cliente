import { ActionReducerMap } from '@ngrx/store';
import { State } from '../states/app.state';
import { productsReducer } from './products.reducer';
import { ordersReducer } from './orders.reducer';
import { restaurantsReducer } from './restaurants.reducer';

export const reducers: ActionReducerMap<State> = {
  productos: productsReducer,
  ordenes: ordersReducer,
  restaurantes: restaurantsReducer,
};
