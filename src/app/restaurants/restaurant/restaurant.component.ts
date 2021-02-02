import { Component, OnInit } from '@angular/core';
import { Restaurant } from 'src/app/core/models/restaurant.model';
import { Store, select } from '@ngrx/store';
import { State } from 'src/app/store/states/app.state';
import { fetchRestaurant } from 'src/app/store/actions/restaurants.actions';
import { Subscription } from 'rxjs';
import { restaurantSelect } from 'src/app/store/selectors/restaurants.selectors';
import { ActivatedRoute } from '@angular/router';
import { fetchProducts } from 'src/app/store/actions/products.actions';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.scss'],
})
export class RestaurantComponent implements OnInit {
  restaurant: Restaurant;
  subscription: Subscription;
  constructor(private store: Store<State>, private route: ActivatedRoute) {
    this.subscription = new Subscription();
  }

  ngOnInit(): void {
    this.getRestaurantByURL();
    this.subscribeToRestaurant();
    // this.store.dispatch(fetchProducts());
  }

  subscribeToRestaurant(): void {
    this.store
      .pipe(select(restaurantSelect))
      .subscribe((restaurant: Restaurant) => (this.restaurant = restaurant));
  }

  getRestaurantByURL(): void {
    const restaurantId = Number(this.route.snapshot.paramMap.get('id'));
    this.store.dispatch(fetchRestaurant({ restaurantId }));
  }
}
