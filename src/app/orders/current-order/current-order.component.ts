import { Component, OnInit, OnDestroy } from '@angular/core';
import { Order } from 'src/app/core/models/order.model';
import { Store, select } from '@ngrx/store';
import { State } from 'src/app/store/states/app.state';
import { Observable, Subscription } from 'rxjs';
import { OrderItem } from 'src/app/core/models/order-item.model';
import { productsToOrderSelect } from 'src/app/store/selectors/orders.selectors';
import { tap } from 'rxjs/operators';
import { createOrder } from 'src/app/store/actions/orders.actions';

@Component({
  selector: 'app-current-order',
  templateUrl: './current-order.component.html',
  styleUrls: ['./current-order.component.scss'],
})
export class CurrentOrderComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  products: OrderItem[];

  constructor(private store: Store<State>) {}

  ngOnInit(): void {
    this.subscription = this.store
      .pipe(select(productsToOrderSelect))
      .subscribe((products: OrderItem[]) => (this.products = products));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  get totalValue(): number {
    let total = 0;
    this.products.forEach((product: OrderItem) => {
      total += product.value * product.quantity;
    });
    return total;
  }

  sendOrder(): void {
    this.store.dispatch(createOrder({ productsToOrder: this.products }));
  }
}
