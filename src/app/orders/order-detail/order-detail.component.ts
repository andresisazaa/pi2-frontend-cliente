import { Component, OnDestroy, OnInit } from '@angular/core';
import { Order } from 'src/app/core/models/order.model';
import { orderSelect } from 'src/app/store/selectors/orders.selectors';
import { Store, select } from '@ngrx/store';
import { State } from 'src/app/store/states/app.state';
import { Observable, Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { fetchOrder } from 'src/app/store/actions/orders.actions';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.scss'],
})
export class OrderDetailComponent implements OnInit, OnDestroy {
  order: Order;
  subscription: Subscription;

  constructor(
    private store: Store<State>,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.subscription = this.store
      .pipe(select(orderSelect))
      .subscribe((order: Order) => {
        this.order = order;
      });

    this.store.dispatch(fetchOrder({ orderId: Number(id) }));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
