import { createReducer, on, Action } from '@ngrx/store';
import {
  fetchOrdersSuccess,
  fetchOrdersFailed,
  fetchOrderSuccess,
  fetchOrderFailed,
  addProductToOrder,
  createOrderSuccess,
  createOrderFailed,
} from '../actions/orders.actions';
import { ordersInitialState, OrdersState } from '../states/orders.state';

const reducer = createReducer(
  ordersInitialState,
  on(fetchOrdersSuccess, (state, { orders }) => ({
    ...state,
    orders: orders,
  })),
  on(fetchOrdersFailed, (state, { errorMessage }) => ({
    ...state,
    error: errorMessage,
  })),
  on(fetchOrderSuccess, (state, { order }) => ({
    ...state,
    order: order,
  })),
  on(fetchOrderFailed, (state, { errorMessage }) => ({
    ...state,
    error: errorMessage,
  })),
  on(addProductToOrder, (state, { product }) => ({
    ...state,
    productsToOrder: [...state.productsToOrder, product],
  })),
  on(createOrderSuccess, (state, { order }) => ({
    ...state,
    order: order,
    productsToOrder: [],
  })),
  on(createOrderFailed, (state, { errorMessage }) => ({
    ...state,
    error: errorMessage,
  }))
);

export function ordersReducer(state: OrdersState, action: Action) {
  return reducer(state, action);
}
