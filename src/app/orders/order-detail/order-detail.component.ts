import { Component, OnDestroy, OnInit } from '@angular/core';
import { Order } from 'src/app/core/models/order.model';
import { orderSelect } from 'src/app/store/selectors/orders.selectors';
import { Store, select } from '@ngrx/store';
import { State } from 'src/app/store/states/app.state';
import { Observable, Subscription } from 'rxjs';
import { Router } from '@angular/router';


@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.scss']
})
export class OrderDetailComponent implements OnInit, OnDestroy {

  order: Order;
  subscription: Subscription;

  constructor(private store: Store<State>, private router: Router) {}

  ngOnInit(): void {
    this.subscription = this.store
      .pipe(select(orderSelect))
      .subscribe((order: Order) => {        
        this.order = order       
      });
  }
  
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
