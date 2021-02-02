import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { OrderItem } from 'src/app/core/models/order-item.model';
import { productsToOrderSelect } from 'src/app/store/selectors/orders.selectors';
import { State } from 'src/app/store/states/app.state';

@Component({
  selector: 'app-order-window',
  templateUrl: './order-window.component.html',
  styleUrls: ['./order-window.component.scss'],
})
export class OrderWindowComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  products: OrderItem[] = [];

  constructor(private store: Store<State>, private router: Router) {}

  ngOnInit(): void {
     this.subscription = this.store
       .pipe(select(productsToOrderSelect))
       .subscribe((products: OrderItem[]) => {
         this.products = products
       });
  }

  goToOrder(): void {
    this.router.navigate(['pedidos/mi-pedido']);
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
}
