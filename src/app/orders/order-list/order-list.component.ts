import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Order } from 'src/app/core/models/order.model';
import { ordersSelect } from 'src/app/store/selectors/orders.selectors';
import { State } from 'src/app/store/states/app.state';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss'],
})
export class OrderListComponent implements OnInit {
  orders: Order[] = [
    {
      id: 1,
      value: 30000,
      status: 'Entregado',
      date: new Date(),
    },
    {
      id: 2,
      value: 36000,
      status: 'Entregado',
      date: new Date(),
    },
    {
      id: 3,
      value: 41200,
      status: 'Entregado',
      date: new Date(),
    },
    {
      id: 4,
      value: 50000,
      status: 'Entregado',
      date: new Date(),
    },
  ];
  constructor(private store: Store<State>) {}

  ngOnInit(): void {
    this.store
      .pipe(select(ordersSelect))
      .subscribe((orders) => {        
        this.orders = orders;
      });
  }
}
