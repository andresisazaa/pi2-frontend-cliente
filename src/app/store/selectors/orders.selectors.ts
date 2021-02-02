import { createFeatureSelector, createSelector } from '@ngrx/store';
import { OrdersState } from '../states/orders.state';

const selectFeature = createFeatureSelector<OrdersState>('ordenes');

export const productsToOrderSelect = createSelector(
  selectFeature,
  (state: OrdersState) => state.productsToOrder
);

export const orderSelect = createSelector(
  selectFeature,
  (state: OrdersState) => state.order
);

export const ordersSelect = createSelector(
  selectFeature,
  (state: OrdersState) => state.orders
);

