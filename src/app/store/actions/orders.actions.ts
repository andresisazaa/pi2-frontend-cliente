import { createAction, props } from '@ngrx/store';
import { OrderItem } from 'src/app/core/models/order-item.model';
import { Order } from 'src/app/core/models/order.model';

export const fetchOrders = createAction('[ORDENES] Obtener ordenes');

export const fetchOrdersSuccess = createAction(
  '[ORDENES] Obtener ordenes exitoso',
  props<{ orders: any[] }>()
);

export const fetchOrdersFailed = createAction(
  '[ORDENES] Obtener ordenes fallido',
  props<{ errorMessage: string }>()
);

export const fetchOrder = createAction(
  '[ORDENES] Obtener orden',
  props<{ orderId: number }>()
);

export const fetchOrderSuccess = createAction(
  '[ORDENES] Obtener orden exitoso',
  props<{ order: Order }>()
);

export const fetchOrderFailed = createAction(
  '[ORDENES] Obtener orden fallido',
  props<{ errorMessage: string }>()
);

export const addProductToOrder = createAction(
  '[ORDENES] Agregar producto a la orden',
  props<{ product: OrderItem }>()
);

export const createOrder = createAction(
  '[ORDENES] Crear orden',
  props<{ productsToOrder: OrderItem[] }>()
);

export const createOrderSuccess = createAction(
  '[ORDENES] Crear orden exitoso',
  props<{ order: Order }>()
);

export const createOrderFailed = createAction(
  '[ORDENES] Crear orden fallido',
  props<{ errorMessage: string }>()
);
