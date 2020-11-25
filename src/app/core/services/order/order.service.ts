import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Order } from '../../models/order.model';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  private readonly ordersUrl = `${environment.backendUrl}/pedidos`;
  constructor(private httpClient: HttpClient) {}

  getOrders(): Observable<Order[]> {
    return this.httpClient.get<Order[]>(this.ordersUrl);
  }

  getOrderById(orderId: number): Observable<Order> {
    return this.httpClient.get<Order>(`${this.ordersUrl}/${orderId}`);
  }

  createOrder(order: Order): Observable<Order> {
    return this.httpClient.post<Order>(this.ordersUrl, order);
  }
}
