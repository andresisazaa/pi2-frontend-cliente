import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Order } from '../../models/order.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  private readonly ordersUrl = `http://54.90.19.125:3003/pedido`;
  constructor(private httpClient: HttpClient) {}

  getOrders(): Observable<Order[]> {
    return this.httpClient.get<any[]>(this.ordersUrl).pipe(
      map((res) => {
        const orders: Order[] = res.map((order) => ({
          id: order.id,
          status: order.estado,
          value: order.total,
        }));
        return orders
      })
    );
  }

  getOrderById(orderId: number): Observable<Order> {
    return this.httpClient.get<any>(`${this.ordersUrl}/${orderId}`)
    .pipe(map(res => ({
      id: res.id,
      status: res.estado,
      value: res.total,
    })))
  }

  createOrder(order: Order): Observable<Order> {
    return this.httpClient.post<any>(this.ordersUrl, order);
  }

}
