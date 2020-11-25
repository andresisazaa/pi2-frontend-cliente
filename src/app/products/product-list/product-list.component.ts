import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { State } from 'src/app/store/states/app.state';
import { Subscription } from 'rxjs';
import { productsSelect } from 'src/app/store/selectors/products.selectors';
import { Product } from 'src/app/core/models/product.model';
import { fetchProducts } from 'src/app/store/actions/products.actions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  private subscription: Subscription;
  menu: Product[];
  order: Product[] = [];
  constructor(private store: Store<State>, private router: Router) {
    this.subscription = new Subscription();
  }

  ngOnInit(): void {
    this.store.dispatch(fetchProducts());
    this.subscription.add(this.subscribeToMenu());
    console.log('THIS.MENU', this.menu);
  }

  handleOrderProduct(productToOrder: Product): void {
    console.log(productToOrder);
    this.router.navigate(['/productos', productToOrder.id]);
  }

  subscribeToMenu(): Subscription {
    return this.store
      .pipe(select(productsSelect))
      .subscribe((menu: Product[]) => {
        this.menu = menu;
        console.log(this.menu);
      });
  }
}
