import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { searchRestaurant } from 'src/app/store/actions/restaurants.actions';
import { State } from 'src/app/store/states/app.state';

@Component({
  selector: 'app-restaurants-searcher',
  templateUrl: './restaurants-searcher.component.html',
  styleUrls: ['./restaurants-searcher.component.scss'],
})
export class RestaurantsSearcherComponent implements OnInit {
  constructor(private store: Store<State>) {}

  ngOnInit(): void {}

  searchRestaurant(query: string) {
    this.store.dispatch(searchRestaurant({ query: query.toLowerCase() }));
  }
}
