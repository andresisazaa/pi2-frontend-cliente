import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { Order } from 'src/app/core/models/order.model';
import { State } from 'src/app/store/states/app.state';
import { orderSelect } from 'src/app/store/selectors/orders.selectors';


@Component({
  selector: 'app-order-status',
  templateUrl: './order-status.component.html',
  styleUrls: ['./order-status.component.scss'],
})
export class OrderStatusComponent implements OnInit {

  subscription: Subscription;
  order: Order;

  constructor(private store: Store<State>, private router: Router) {}

  ngOnInit(): void {
    this.subscription = this.store
      .pipe(select(orderSelect))
      .subscribe((order: Order) => {        
        this.order = order       
      });
  }
}
