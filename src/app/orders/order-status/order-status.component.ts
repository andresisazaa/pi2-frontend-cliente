import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/core/models/order.model';

@Component({
  selector: 'app-order-status',
  templateUrl: './order-status.component.html',
  styleUrls: ['./order-status.component.scss'],
})
export class OrderStatusComponent implements OnInit {
  order: Order = {
    id: 1,
    products: [
      {
        productName: 'Hamburguesa',
        productId: 1,
        quantity: 3,
        value: 60000,
        description: 'Cualquier cosa',
      },
      {
        productName: 'Hot Dog',
        productId: 2,
        quantity: 1,
        value: 20000,
        description: 'Cualquier cosa',
      },
    ],
    status: 'En preparación',
    date: new Date(),
    value: 40000,
  };
  constructor() {}

  ngOnInit(): void {}
}
