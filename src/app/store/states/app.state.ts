import { ProductsState, productsInitialState } from './products.state';
import { OrdersState, ordersInitialState } from './orders.state';
import { RestaurantsState, restaurantsInitialState } from './restaurants.state';

export interface State {
  productos: ProductsState;
  ordenes: OrdersState;
  restaurantes: RestaurantsState;
}

export const appInitialState: State = {
  productos: productsInitialState,
  ordenes: ordersInitialState,
  restaurantes: restaurantsInitialState,
};
