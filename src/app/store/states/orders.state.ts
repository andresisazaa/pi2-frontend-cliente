import { Order } from 'src/app/core/models/order.model';
import { OrderItem } from 'src/app/core/models/order-item.model';

export interface OrdersState {
  orders: Order[];
  order: Order;
  productsToOrder: OrderItem[];
}

export const ordersInitialState: OrdersState = {
  orders: [],
  order: null,
  productsToOrder: []
};
