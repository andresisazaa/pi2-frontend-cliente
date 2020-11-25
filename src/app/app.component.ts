import { Component, OnInit } from '@angular/core';
import { State } from './store/states/app.state';
import { Store, select } from '@ngrx/store';
import { fetchProducts } from './store/actions/products.actions';
import { Subscription } from 'rxjs';
import { productsSelect } from './store/selectors/products.selectors';
import { Product } from './core/models/product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'pi2-frontend-cliente';
  subscription: Subscription;
  menu: Product[];
  constructor(private store: Store<State>) {
    this.subscription = new Subscription();
  }

  ngOnInit(): void {
    this.subscribeToMenu();
  }

  getMenu(): void {
    this.store.dispatch(fetchProducts());
  }

  subscribeToMenu(): void {
    this.subscription.add(
      this.store
        .pipe(select(productsSelect))
        .subscribe((menu) => (this.menu = menu))
    );
  }
}
