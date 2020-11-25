import { ProductsState, productsInitialState } from './products.state';
import { OrdersState, ordersInitialState } from './orders.state';

export interface State {
  productos: ProductsState;
  ordenes: OrdersState;
}

export const appInitialState: State = {
  productos: productsInitialState,
  ordenes: ordersInitialState,
};
