import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { State } from 'src/app/store/states/app.state';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/core/models/product.model';
import { Router, ActivatedRoute } from '@angular/router';
import { restaurantSelect } from 'src/app/store/selectors/restaurants.selectors';
import { Restaurant } from 'src/app/core/models/restaurant.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  private subscription: Subscription;
  products: Product[];

  constructor(
    private store: Store<State>,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.subscription = new Subscription();
  }

  ngOnInit(): void {
    this.subscription.add(this.subscribeToMenu());
  }

  handleSelectProduct(productToOrder: Product): void {
    this.router.navigate([productToOrder.id], { relativeTo: this.route });
  }

  subscribeToMenu(): Subscription {
    return this.store
      .pipe(select(restaurantSelect))
      .subscribe((restaurant: Restaurant) => {
        if (restaurant) {
          this.products = restaurant.products;
        }
      });
  }
}
