import { Component, OnInit } from '@angular/core';
import { Restaurant } from 'src/app/core/models/restaurant.model';
import { State } from 'src/app/store/states/app.state';
import { Store, select } from '@ngrx/store';
import { fetchRestaurants } from 'src/app/store/actions/restaurants.actions';
import { restaurantsSelect } from 'src/app/store/selectors/restaurants.selectors';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-restaurants-list',
  templateUrl: './restaurants-list.component.html',
  styleUrls: ['./restaurants-list.component.scss'],
})
export class RestaurantsListComponent implements OnInit {
  restaurants: Restaurant[];
  subscription: Subscription;
  constructor(private store: Store<State>) {}

  ngOnInit(): void {
    this.subscribeToRestaurants();
    this.store.dispatch(fetchRestaurants());
  }

  subscribeToRestaurants(): void {
    this.subscription = this.store
      .pipe(select(restaurantsSelect))
      .subscribe((restaurants) => (this.restaurants = restaurants));
  }
}
