import { Injectable } from '@angular/core';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { createEffect, ofType, Actions } from '@ngrx/effects';
import {
  fetchOrders,
  fetchOrdersSuccess,
  fetchOrdersFailed,
  fetchOrder,
  fetchOrderSuccess,
  fetchOrderFailed,
  createOrderSuccess,
  createOrder,
} from '../actions/orders.actions';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { OrderService } from 'src/app/core/services/order/order.service';
import { Order } from 'src/app/core/models/order.model';

@Injectable()
export class ProductsEffects {
  constructor(private actions$: Actions, private orderService: OrderService) {}

  fetchOrders$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(fetchOrders),
      mergeMap(() => {
        return this.orderService.getOrders().pipe(
          map((orders: any[]) => fetchOrdersSuccess({ orders })),
          catchError((error: string) =>
            of(fetchOrdersFailed({ errorMessage: error }))
          )
        );
      })
    )
  );

  fetchOrder$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(fetchOrder),
      mergeMap(({ orderId }) => {
        return this.orderService.getOrderById(orderId).pipe(
          map((order: Order) => fetchOrderSuccess({ order })),
          catchError((error: string) =>
            of(fetchOrderFailed({ errorMessage: error }))
          )
        );
      })
    )
  );

  createOrder$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(createOrder),
      mergeMap(({ productsToOrder }) => {
        const order: Order = {
          items: productsToOrder,
          date: new Date(),
        };
        return this.orderService.createOrder(order).pipe(
          map((orderCreated: Order) =>
            createOrderSuccess({ order: orderCreated })
          ),
          catchError((error: string) =>
            of(fetchOrderFailed({ errorMessage: error }))
          )
        );
      })
    )
  );
}
